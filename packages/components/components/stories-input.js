/*!
 * (C) StoriesJS https://storiesjs.org - GPL-2.0 License
 */
import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as debounceEvent, i as inheritAttributes, f as findItemLabel } from './helpers.js';
import { c as createColorClasses } from './utils.js';

const inputCss = ":host{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--background:transparent;--color:initial;display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;width:100%;padding:0 !important;background:var(--background);color:var(--color);font-family:var(--stories-font-family, inherit);z-index:2}:host-context(stories-item:not(.item-label)){--padding-start:0}:host(.stories-color){color:var(--stories-color-base)}.native-input{border-radius:var(--border-radius);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:inline-block;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.native-input{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.native-input::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input:-webkit-autofill{background-color:transparent}.native-input:invalid{-webkit-box-shadow:none;box-shadow:none}.native-input::-ms-clear{display:none}.native-input[disabled]{opacity:0.4}.cloned-input{left:0;top:0;position:absolute;pointer-events:none}[dir=rtl] .cloned-input,:host-context([dir=rtl]) .cloned-input{left:unset;right:unset;right:0}.input-clear-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background-position:center;border:0;outline:none;background-color:transparent;background-repeat:no-repeat;visibility:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none}.input-clear-icon:focus{opacity:0.5}:host(.has-value) .input-clear-icon{visibility:visible}:host(.has-focus){pointer-events:none}:host(.has-focus) input,:host(.has-focus) a,:host(.has-focus) button{pointer-events:auto}:host-context(.item-label-floating.item-has-placeholder:not(.item-has-value)){opacity:0}:host-context(.item-label-floating.item-has-placeholder:not(.item-has-value).item-has-focus){-webkit-transition:opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);opacity:1}";

let inputIds = 0;
const Input = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.storiesInput = createEvent(this, "storiesInput", 7);
    this.storiesChange = createEvent(this, "storiesChange", 7);
    this.storiesBlur = createEvent(this, "storiesBlur", 7);
    this.storiesFocus = createEvent(this, "storiesFocus", 7);
    this.storiesStyle = createEvent(this, "storiesStyle", 7);
    this.inputId = `stories-input-${inputIds++}`;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.inheritedAttributes = {};
    /**
     * This is required for a WebKit bug which requires us to
     * blur and focus an input to properly focus the input in
     * an item with delegatesFocus. It will no longer be needed
     * with iOS 14.
     *
     * @internal
     */
    this.fireFocusEvents = true;
    this.hasFocus = false;
    /**
     * This Boolean attribute lets you specify that a form control should have input focus when the page loads.
     */
    this.autofocus = false;
    /**
     * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
     */
    this.clearInput = false;
    /**
     * Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke. This also impacts form bindings such as `ngModel` or `v-model`.
     */
    this.debounce = 0;
    /**
     * If `true`, the user cannot interact with the input.
     */
    this.disabled = false;
    /**
     * The name of the control, which is submitted with the form data.
     */
    this.name = this.inputId;
    /**
     * If `true`, the user cannot modify the value.
     */
    this.readonly = false;
    /**
     * If `true`, the user must fill in a value before submitting a form.
     */
    this.required = false;
    /**
     * The type of control to display. The default type is text.
     */
    this.type = 'text';
    /**
     * The value of the input.
     */
    this.value = '';
    this.onInput = (ev) => {
      const input = ev.target;
      if (input) {
        this.value = input.value || '';
      }
      this.storiesInput.emit(ev);
    };
    this.onBlur = (ev) => {
      this.hasFocus = false;
      this.emitStyle();
      if (this.fireFocusEvents) {
        this.storiesBlur.emit(ev);
      }
    };
    this.onFocus = (ev) => {
      this.hasFocus = true;
      this.emitStyle();
      if (this.fireFocusEvents) {
        this.storiesFocus.emit(ev);
      }
    };
    this.clearTextOnEnter = (ev) => {
      if (ev.key === 'Enter') {
        this.clearTextInput(ev);
      }
    };
    this.clearTextInput = (ev) => {
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
    };
  }
  debounceChanged() {
    this.storiesChange = debounceEvent(this.storiesChange, this.debounce);
  }
  disabledChanged() {
    this.emitStyle();
  }
  /**
   * Update the item classes when the placeholder changes
   */
  placeholderChanged() {
    this.emitStyle();
  }
  /**
   * Update the native input element when the value changes
   */
  valueChanged() {
    this.emitStyle();
    this.storiesChange.emit({ value: this.value === null ? this.value : this.value.toString() });
  }
  componentWillLoad() {
    this.inheritedAttributes = inheritAttributes(this.el, ['aria-label', 'tabindex', 'title']);
  }
  connectedCallback() {
    this.emitStyle();
    this.debounceChanged();
  }
  /**
   * Sets focus on the native `input` in `stories-input`. Use this method instead of the global
   * `input.focus()`.
   */
  async setFocus() {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  }
  /**
   * Sets blur on the native `input` in `stories-input`. Use this method instead of the global
   * `input.blur()`.
   * @internal
   */
  async setBlur() {
    if (this.nativeInput) {
      this.nativeInput.blur();
    }
  }
  /**
   * Returns the native `<input>` element used under the hood.
   */
  getInputElement() {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return Promise.resolve(this.nativeInput);
  }
  getValue() {
    return typeof this.value === 'number' ? this.value.toString() :
      (this.value || '').toString();
  }
  emitStyle() {
    this.storiesStyle.emit({
      'interactive': true,
      'input': true,
      'has-placeholder': this.placeholder !== undefined,
      'has-value': this.hasValue(),
      'has-focus': this.hasFocus,
      'interactive-disabled': this.disabled,
    });
  }
  hasValue() {
    return this.getValue().length > 0;
  }
  render() {
    const value = this.getValue();
    const labelId = this.inputId + '-lbl';
    const label = findItemLabel(this.el);
    if (label) {
      label.id = labelId;
    }
    return (h(Host, { "aria-disabled": this.disabled ? 'true' : null, class: createColorClasses(this.color, {
        'has-value': this.hasValue(),
        'has-focus': this.hasFocus
      }) }, h("input", Object.assign({ ref: input => this.nativeInput = input, "aria-labelledby": label ? labelId : null, autoFocus: this.autofocus, class: "native-input", disabled: this.disabled, inputMode: this.inputmode, max: this.max, maxLength: this.maxlength, min: this.min, minLength: this.minlength, name: this.name, onBlur: this.onBlur, onFocus: this.onFocus, onInput: this.onInput, pattern: this.pattern, placeholder: this.placeholder || '', readOnly: this.readonly, required: this.required, size: this.size, step: this.step, type: this.type, value: value }, this.inheritedAttributes)), (this.clearInput && !this.readonly && !this.disabled) && h("button", { "aria-label": "reset", class: "input-clear-icon", onKeyDown: this.clearTextOnEnter, onMouseDown: this.clearTextInput, onTouchStart: this.clearTextInput, type: "button" })));
  }
  get el() { return this; }
  static get watchers() { return {
    "debounce": ["debounceChanged"],
    "disabled": ["disabledChanged"],
    "placeholder": ["placeholderChanged"],
    "value": ["valueChanged"]
  }; }
  static get style() { return inputCss; }
}, [1, "stories-input", {
    "fireFocusEvents": [4, "fire-focus-events"],
    "color": [513],
    "autofocus": [4],
    "clearInput": [4, "clear-input"],
    "debounce": [2],
    "disabled": [4],
    "inputmode": [1],
    "max": [1],
    "maxlength": [2],
    "min": [1],
    "minlength": [2],
    "name": [1],
    "pattern": [1],
    "placeholder": [1],
    "readonly": [4],
    "required": [4],
    "step": [1],
    "size": [2],
    "type": [1],
    "value": [1032],
    "hasFocus": [32],
    "setFocus": [64],
    "setBlur": [64],
    "getInputElement": [64]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["stories-input"];
  components.forEach(tagName => { switch (tagName) {
    case "stories-input":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Input);
      }
      break;
  } });
}
defineCustomElement$1();

const StoriesInput = Input;
const defineCustomElement = defineCustomElement$1;

export { StoriesInput, defineCustomElement };

//# sourceMappingURL=stories-input.js.map