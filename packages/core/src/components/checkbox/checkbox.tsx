import { EventEmitter, Method, State } from '@stencil/core';
import { Component, Host, h, Prop, Element, Event, Watch } from '@stencil/core';

import { /*getAriaLabel, */hasSlot, inheritAttributes, renderHiddenInput } from '../../utils/helpers';
// import type { CheckboxChangeEventDetail, Color, StyleEventDetail } from '../../types';
// import { createColorClasses, hostContext } from '../../utils';

let id = 0;

@Component({
  tag: 'stories-checkbox',
  styleUrl: 'checkbox.scss',
  shadow: true,
})
export class Checkbox {

  private inputId = `checkbox-${++id}`;
  private labelId = `checkbox-label-${id}`;
  private invalidTextId = `checkbox-invalid-text-${id}`;
  private input: HTMLInputElement;
  private inheritedAttributes: { [k: string]: any } = {};

  @Element() el: HTMLStoriesCheckboxElement;

  @State() hasInvalidTextSlot = false;

  @State() hasFocus = false;

  /**
   * The checkbox's value attribute.
   */
  @Prop() value: string;

  /**
   * Set to true to disable the checkbox.
   */
  @Prop() disabled = false;

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name: string = this.inputId;

  /** Set to true to draw the checkbox in a checked state. */
  @Prop({ mutable: true, reflect: true }) checked = false;

  /** Set to true to draw the checkbox in an indeterminate state. */
  @Prop({ mutable: true, reflect: true }) indeterminate = false;

  /** The radio group's invalid text. Alternatively, you can use the invalid-text slot. */
  @Prop() invalidText = '';

  /** Set to true to indicate this field is invalid. Will display the invalid text. */
  @Prop({ reflect: true }) invalid = false;

  /** Emitted when the control loses focus. */
  @Event({ eventName: 'stories-blur' }) storiesBlur: EventEmitter<void>;

  /** Emitted when the control gains focus. */
  @Event({ eventName: 'stories-focus' }) storiesFocus: EventEmitter<void>;

  /** Emitted when the control's checked state changes. */
  @Event({ eventName: 'stories-change' }) storiesChange: EventEmitter<void>;

  @Watch('checked')
  @Watch('indeterminate')
  handleCheckedChange(): void {
    this.input.checked = this.checked;
    this.input.indeterminate = this.indeterminate;
    this.storiesChange.emit();
  }

  @Watch('invalidText')
  handleInvalidTextChange(): void {
    this.handleSlotChange();
  }

  connectedCallback(): void {
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleSlotChange = this.handleSlotChange.bind(this);

    this.el.shadowRoot.addEventListener('slotchange', this.handleSlotChange);
  }

  componentWillLoad(): void {
    this.handleSlotChange();
    this.inheritedAttributes = inheritAttributes(this.el, ['aria-label']);
  }

  componentDidLoad(): void {
    this.input.indeterminate = this.indeterminate;
  }

  disconnectedCallback(): void {
    this.el.shadowRoot.removeEventListener('slotchange', this.handleSlotChange);
  }

  /** Sets focus on the checkbox. */
  @Method()
  async setFocus(options?: FocusOptions): Promise<void> {
    this.input.focus(options);
  }

  /** Removes focus from the checkbox. */
  @Method()
  async removeFocus(): Promise<void> {
    this.input.blur();
  }

  handleClick(): void {
    this.checked = this.input.checked;
    this.indeterminate = false;
  }

  handleBlur(): void {
    this.hasFocus = false;
    this.storiesBlur.emit();
  }

  handleFocus(): void {
    this.hasFocus = true;
    this.storiesFocus.emit();
  }

  handleMouseDown(event: MouseEvent): void {
    // Prevent clicks on the label from briefly blurring the input
    event.preventDefault();
    this.input.focus();
  }

  handleSlotChange(): void {
    this.hasInvalidTextSlot = hasSlot(this.el, 'invalid-text');
  }

  render() {
    renderHiddenInput(true, this.el, this.name, this.checked ? this.value : '', this.disabled);

    const hasInvalidText = this.invalidText ? true : this.hasInvalidTextSlot;
    const showInvalidText = this.invalid ? true : false;

    const ariaLabelAttributes = this.inheritedAttributes['aria-label']
      ? { 'aria-label': this.inheritedAttributes['aria-label'] }
      : { 'aria-labelledby': this.labelId };

    return (
      <Host
        class={{
          'checkbox-disabled': this.disabled,
          'checkbox-has-invalid-text': hasInvalidText,
        }}
      >
        <label
          class={{
            'checkbox': true,
            'checkbox-checked': this.checked,
            'checkbox-invalid': this.invalid,
            'checkbox-disabled': this.disabled,
            'checkbox-focused': this.hasFocus,
            'checkbox-indeterminate': this.indeterminate,
          }}
          htmlFor={this.inputId}
          onMouseDown={this.handleMouseDown}
        >
          <span class="checkbox-control">
            {this.checked && (
              <span class="checkbox-icon">
                <svg role="img" aria-hidden="true" viewBox="0 0 16 16">
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                    <g stroke="currentColor" stroke-width="2">
                      <g transform="translate(3.428571, 3.428571)">
                        <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
                        <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
            )}

            {!this.checked && this.indeterminate && (
              <span class="checkbox-icon">
                <svg role="img" aria-hidden="true" viewBox="0 0 16 16">
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                    <g stroke="currentColor" stroke-width="2">
                      <g transform="translate(2.285714, 6.857143)">
                        <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
            )}

            <input
              ref={el => (this.input = el)}
              id={this.inputId}
              type="checkbox"
              value={this.value}
              checked={this.checked}
              disabled={this.disabled}
              role="checkbox"
              aria-invalid={this.invalid}
              aria-checked={this.checked ? 'true' : 'false'}
              {...ariaLabelAttributes}
              aria-describedby={this.invalid ? this.invalidTextId : ''}
              onClick={this.handleClick}
              onBlur={this.handleBlur}
              onFocus={this.handleFocus}
            />
          </span>

          <span id={this.labelId} class="checkbox-label">
            <slot></slot>
          </span>
        </label>
        {showInvalidText && (
          <div id={this.invalidTextId} class="checkbox-invalid-text" aria-hidden={hasInvalidText ? 'false' : 'true'}>
            <div class="icon">
              <svg role="img" aria-hidden="true" viewBox="0 0 512 512">
                <title>Alert Circle</title>
                <path
                  d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm0,319.91a20,20,0,1,1,20-20A20,20,0,0,1,256,367.91Zm21.72-201.15-5.74,122a16,16,0,0,1-32,0l-5.74-121.94v-.05a21.74,21.74,0,1,1,43.44,0Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div class="text">
              <slot name="invalid-text">{this.invalidText}</slot>
            </div>
          </div>
        )}
      </Host>
    );
  }
}
