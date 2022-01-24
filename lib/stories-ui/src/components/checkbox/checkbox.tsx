import type { EventEmitter } from '@stencil/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, Host, h, Prop, Element, Event, Watch } from '@stencil/core';

import { getAriaLabel, renderHiddenInput } from '../../helpers';
import type { CheckboxChangeEventDetail, Color, StyleEventDetail } from '../../types';
import { createColorClasses, hostContext } from '../../utils';

let checkboxIds = 0;

@Component({
  tag: 'stories-checkbox',
  styleUrl: 'checkbox.scss',
  shadow: true,
})
export class Checkbox {

  private inputId = `ion-cb-${checkboxIds++}`;
  private focusEl?: HTMLElement;

  @Element() el!: HTMLElement;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  @Prop({ reflect: true }) color?: Color;

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name: string = this.inputId;

  /**
   * If `true`, the checkbox is selected.
   */
  @Prop({ mutable: true }) checked = false;

  /**
   * If `true`, the checkbox will visually appear as indeterminate.
   */
  @Prop({ mutable: true }) indeterminate = false;

  /**
   * If `true`, the user cannot interact with the checkbox.
   */
  @Prop() disabled = false;

  /**
   * The value of the checkbox does not mean if it's checked or not, use the `checked`
   * property for that.
   *
   * The value of a checkbox is analogous to the value of an `<input type="checkbox">`,
   * it's only used when the checkbox participates in a native `<form>`.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Prop() value: any | null = 'on';

  /**
   * Emitted when the checked property has changed.
   */
  @Event() storiesChange!: EventEmitter<CheckboxChangeEventDetail>;

  /**
   * Emitted when the checkbox has focus.
   */
  @Event() storiesFocus!: EventEmitter<void>;

  /**
   * Emitted when the checkbox loses focus.
   */
  @Event() storiesBlur!: EventEmitter<void>;

  /**
   * Emitted when the styles change.
   * @internal
   */
  @Event() storiesStyle!: EventEmitter<StyleEventDetail>;

  componentWillLoad(): void {
    this.emitStyle();
  }

  @Watch('checked')
  checkedChanged(isChecked: boolean): void {
    this.storiesChange.emit({
      checked: isChecked,
      value: this.value
    });
    this.emitStyle();
  }

  @Watch('disabled')
  disabledChanged(): void {
    this.emitStyle();
  }

  private emitStyle() {
    this.storiesStyle.emit({
      'checkbox-checked': this.checked,
      'interactive-disabled': this.disabled,
    });
  }

  private setFocus() {
    if (this.focusEl) {
      this.focusEl.focus();
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private onClick = (ev: any) => {
    ev.preventDefault();

    this.setFocus();
    this.checked = !this.checked;
    this.indeterminate = false;
  }

  private onFocus = () => {
    this.storiesFocus.emit();
  }

  private onBlur = () => {
    this.storiesBlur.emit();
  }

  render(): JSX.Element {
    const { color, checked, disabled, el, indeterminate, inputId, name, value } = this;
    const { label, labelId, labelText } = getAriaLabel(el, inputId);

    renderHiddenInput(true, el, name, (checked ? value : ''), disabled);

    const path = indeterminate
      ? <path d="M6 12L18 12" part="mark" />
      : <path d="M5.9,12.5l3.8,3.8l8.8-8.8" part="mark" />;

    return (
      <Host
        aria-checked={`${checked}`}
        aria-hidden={disabled ? 'true' : null}
        aria-labelledby={label ? labelId : null}
        class={createColorClasses(color, {
          'in-item': hostContext('ion-item', el),
          'checkbox-checked': checked,
          'checkbox-disabled': disabled,
          'checkbox-indeterminate': indeterminate,
          'interactive': true
        })}
        onClick={this.onClick}
        role="checkbox"
      >
        <svg class="checkbox-icon" viewBox="0 0 24 24" part="container">
          {path}
        </svg>
        <label htmlFor={inputId}>
          {labelText}
        </label>
        <input
          ref={focusEl => this.focusEl = focusEl}
          aria-checked={`${checked}`}
          disabled={disabled}
          id={inputId}
          onBlur={() => this.onBlur()}
          onFocus={() => this.onFocus()}
          type="checkbox"
        />
      </Host>
    );
  }

}
