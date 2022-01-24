import type { EventEmitter } from '@stencil/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, Host, h, Prop, State, Element, Watch, Event, Method } from '@stencil/core';

import { debounceEvent, findItemLabel, inheritAttributes } from '../../helpers';
import type { Color, InputChangeEventDetail, StyleEventDetail, TextFieldTypes } from '../../types';
import { createColorClasses } from '../../utils';

let inputIds = 0;

@Component({
  tag: 'stories-input',
  styleUrl: 'input.scss',
  shadow: true,
})
export class Input {

  private nativeInput?: HTMLInputElement;
  private inputId = `ion-input-${inputIds++}`;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private inheritedAttributes: Record<string, any> = {};

  /**
   * This is required for a WebKit bug which requires us to
   * blur and focus an input to properly focus the input in
   * an item with delegatesFocus. It will no longer be needed
   * with iOS 14.
   *
   * @internal
   */
  @Prop() fireFocusEvents = true;

  @State() hasFocus = false;

  @Element() el!: HTMLElement;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  @Prop({ reflect: true }) color?: Color;

  /**
   * This Boolean attribute lets you specify that a form control should have input focus when the page loads.
   */
  @Prop() autofocus = false;

  /**
   * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
   */
  @Prop() clearInput = false;

  /**
   * Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke. This also impacts form bindings such as `ngModel` or `v-model`.
   */
  @Prop() debounce = 0;

  @Watch('debounce')
  protected debounceChanged(): void {
    this.storiesChange = debounceEvent(this.storiesChange, this.debounce);
  }

  /**
   * If `true`, the user cannot interact with the input.
   */
  @Prop() disabled = false;

  @Watch('disabled')
  protected disabledChanged(): void {
    this.emitStyle();
  }

  /**
   * A hint to the browser for which keyboard to display.
   * Possible values: `"none"`, `"text"`, `"tel"`, `"url"`,
   * `"email"`, `"numeric"`, `"decimal"`, and `"search"`.
   */
  @Prop() inputmode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';

  /**
   * The maximum value, which must not be less than its minimum (min attribute) value.
   */
  @Prop() max?: string;

  /**
   * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter.
   */
  @Prop() maxlength?: number;

  /**
   * The minimum value, which must not be greater than its maximum (max attribute) value.
   */
  @Prop() min?: string;

  /**
   * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter.
   */
  @Prop() minlength?: number;

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name: string = this.inputId;

  /**
   * A regular expression that the value is checked against. The pattern must match the entire value, not just some subset. Use the title attribute to describe the pattern to help the user. This attribute applies when the value of the type attribute is `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, `"date"`, or `"password"`, otherwise it is ignored. When the type attribute is `"date"`, `pattern` will only be used in browsers that do not support the `"date"` input type natively. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date for more information.
   */
  @Prop() pattern?: string;

  /**
   * Instructional text that shows before the input has a value.
   * This property applies only when the `type` property is set to `"email"`,
   * `"number"`, `"password"`, `"search"`, `"tel"`, `"text"`, or `"url"`, otherwise it is ignored.
   */
  @Prop() placeholder?: string;

  /**
   * If `true`, the user cannot modify the value.
   */
  @Prop() readonly = false;

  /**
   * If `true`, the user must fill in a value before submitting a form.
   */
  @Prop() required = false;

  /**
   * Works with the min and max attributes to limit the increments at which a value can be set.
   * Possible values are: `"any"` or a positive floating point number.
   */
  @Prop() step?: string;

  /**
   * The initial size of the control. This value is in pixels unless the value of the type attribute is `"text"` or `"password"`, in which case it is an integer number of characters. This attribute applies only when the `type` attribute is set to `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, or `"password"`, otherwise it is ignored.
   */
  @Prop() size?: number;

  /**
   * The type of control to display. The default type is text.
   */
  @Prop() type: TextFieldTypes = 'text';

  /**
   * The value of the input.
   */
  @Prop({ mutable: true }) value?: string | number | null = '';

  /**
   * Emitted when a keyboard input occurred.
   */
  @Event() storiesInput!: EventEmitter<InputEvent>;

  /**
   * Emitted when the value has changed.
   */
  @Event() storiesChange!: EventEmitter<InputChangeEventDetail>;

  /**
   * Emitted when the input loses focus.
   */
  @Event() storiesBlur!: EventEmitter<FocusEvent>;

  /**
   * Emitted when the input has focus.
   */
  @Event() storiesFocus!: EventEmitter<FocusEvent>;

  /**
   * Emitted when the styles change.
   * @internal
   */
  @Event() storiesStyle!: EventEmitter<StyleEventDetail>;

  /**
   * Update the item classes when the placeholder changes
   */
  @Watch('placeholder')
  protected placeholderChanged(): void {
    this.emitStyle();
  }

  /**
   * Update the native input element when the value changes
   */
  @Watch('value')
  protected valueChanged(): void {
    this.emitStyle();
    this.storiesChange.emit({ value: this.value === null ? this.value as null : this.value.toString() });
  }

  componentWillLoad(): void {
    this.inheritedAttributes = inheritAttributes(this.el, ['aria-label', 'tabindex', 'title']);
  }

  connectedCallback(): void {
    this.emitStyle();
    this.debounceChanged();
  }

  /**
   * Sets focus on the native `input` in `ion-input`. Use this method instead of the global
   * `input.focus()`.
   */
  @Method()
  async setFocus(): Promise<void> {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  }

  /**
   * Sets blur on the native `input` in `ion-input`. Use this method instead of the global
   * `input.blur()`.
   * @internal
   */
  @Method()
  async setBlur(): Promise<void> {
    if (this.nativeInput) {
      this.nativeInput.blur();
    }
  }

  /**
   * Returns the native `<input>` element used under the hood.
   */
  @Method()
  getInputElement(): Promise<HTMLInputElement> {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return Promise.resolve(this.nativeInput!);
  }

  private getValue(): string {
    return typeof this.value === 'number' ? this.value.toString() :
      (this.value || '').toString();
  }

  private emitStyle() {
    this.storiesStyle.emit({
      'interactive': true,
      'input': true,
      'has-placeholder': this.placeholder !== undefined,
      'has-value': this.hasValue(),
      'has-focus': this.hasFocus,
      'interactive-disabled': this.disabled,
    });
  }

  private onInput = (ev: Event) => {
    const input = ev.target as HTMLInputElement | null;
    if (input) {
      this.value = input.value || '';
    }
    this.storiesInput.emit(ev as InputEvent);
  }

  private onBlur = (ev: FocusEvent) => {
    this.hasFocus = false;
    this.emitStyle();

    if (this.fireFocusEvents) {
      this.storiesBlur.emit(ev);
    }
  }

  private onFocus = (ev: FocusEvent) => {
    this.hasFocus = true;
    this.emitStyle();

    if (this.fireFocusEvents) {
      this.storiesFocus.emit(ev);
    }
  }

  private clearTextOnEnter = (ev: KeyboardEvent) => {
    if (ev.key === 'Enter') { this.clearTextInput(ev); }
  }

  private clearTextInput = (ev?: Event) => {
    if (this.clearInput && !this.readonly && !this.disabled && ev) {
      ev.preventDefault();
      ev.stopPropagation();

      // Attempt to focus input again after pressing clear button
      this.setFocus();
    }

    this.value = '';

    /**
     * This is needed for clearOnEdit
     * Otherwise the value will not be cleared
     * if user is inside the input
     */
    if (this.nativeInput) {
      this.nativeInput.value = '';
    }
  }

  private hasValue(): boolean {
    return this.getValue().length > 0;
  }

  render(): JSX.Element {
    const value = this.getValue();
    const labelId = this.inputId + '-lbl';
    const label = findItemLabel(this.el);
    if (label) {
      label.id = labelId;
    }

    return (
      <Host
        aria-disabled={this.disabled ? 'true' : null}
        class={createColorClasses(this.color, {
          'has-value': this.hasValue(),
          'has-focus': this.hasFocus
        })}
      >
        <input
          ref={input => this.nativeInput = input}
          aria-labelledby={label ? labelId : null}
          autoFocus={this.autofocus}
          class="native-input"
          disabled={this.disabled}
          inputMode={this.inputmode}
          max={this.max}
          maxLength={this.maxlength}
          min={this.min}
          minLength={this.minlength}
          name={this.name}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          onInput={this.onInput}
          pattern={this.pattern}
          placeholder={this.placeholder || ''}
          readOnly={this.readonly}
          required={this.required}
          size={this.size}
          step={this.step}
          type={this.type}
          value={value}
          {...this.inheritedAttributes}
        />
        {(this.clearInput && !this.readonly && !this.disabled) && <button
          aria-label="reset"
          class="input-clear-icon"
          onKeyDown={this.clearTextOnEnter}
          onMouseDown={this.clearTextInput}
          onTouchStart={this.clearTextInput}
          type="button"
        />}
      </Host>
    );
  }

}
