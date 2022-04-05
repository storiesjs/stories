/*!
 * (C) StoriesJS https://storiesjs.org - GPL-2.0 License
 */
import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { g as getAriaLabel, r as renderHiddenInput } from './helpers.js';
import { c as createColorClasses, h as hostContext } from './utils.js';

const checkboxCss = ":host{--background-checked:var(--stories-color-primary, #3880ff);--border-color-checked:var(--stories-color-primary, #3880ff);--checkmark-color:var(--stories-color-primary-contrast, #fff);--checkmark-width:1;--transition:none;display:inline-block;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.stories-color){--background-checked:var(--stories-color-base);--border-color-checked:var(--stories-color-base);--checkmark-color:var(--stories-color-contrast)}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.checkbox-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-sizing:border-box;box-sizing:border-box}.checkbox-icon path{fill:none;stroke:var(--checkmark-color);stroke-width:var(--checkmark-width);opacity:0}:host(.checkbox-checked) .checkbox-icon,:host(.checkbox-indeterminate) .checkbox-icon{border-color:var(--border-color-checked);background:var(--background-checked)}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{opacity:1}:host(.checkbox-disabled){pointer-events:none}";

let checkboxIds = 0;
const Checkbox = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.storiesChange = createEvent(this, "storiesChange", 7);
    this.storiesFocus = createEvent(this, "storiesFocus", 7);
    this.storiesBlur = createEvent(this, "storiesBlur", 7);
    this.storiesStyle = createEvent(this, "storiesStyle", 7);
    this.inputId = `stories-cb-${checkboxIds++}`;
    /**
     * The name of the control, which is submitted with the form data.
     */
    this.name = this.inputId;
    /**
     * If `true`, the checkbox is selected.
     */
    this.checked = false;
    /**
     * If `true`, the checkbox will visually appear as indeterminate.
     */
    this.indeterminate = false;
    /**
     * If `true`, the user cannot interact with the checkbox.
     */
    this.disabled = false;
    /**
     * The value of the checkbox does not mean if it's checked or not, use the `checked`
     * property for that.
     *
     * The value of a checkbox is analogous to the value of an `<input type="checkbox">`,
     * it's only used when the checkbox participates in a native `<form>`.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.value = 'on';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.onClick = (ev) => {
      ev.preventDefault();
      this.setFocus();
      this.checked = !this.checked;
      this.indeterminate = false;
    };
    this.onFocus = () => {
      this.storiesFocus.emit();
    };
    this.onBlur = () => {
      this.storiesBlur.emit();
    };
  }
  componentWillLoad() {
    this.emitStyle();
  }
  checkedChanged(isChecked) {
    this.storiesChange.emit({
      checked: isChecked,
      value: this.value
    });
    this.emitStyle();
  }
  disabledChanged() {
    this.emitStyle();
  }
  emitStyle() {
    this.storiesStyle.emit({
      'checkbox-checked': this.checked,
      'interactive-disabled': this.disabled,
    });
  }
  setFocus() {
    if (this.focusEl) {
      this.focusEl.focus();
    }
  }
  render() {
    const { color, checked, disabled, el, indeterminate, inputId, name, value } = this;
    const { label, labelId, labelText } = getAriaLabel(el, inputId);
    renderHiddenInput(true, el, name, (checked ? value : ''), disabled);
    const path = indeterminate
      ? h("path", { d: "M6 12L18 12", part: "mark" })
      : h("path", { d: "M5.9,12.5l3.8,3.8l8.8-8.8", part: "mark" });
    return (h(Host, { "aria-checked": `${checked}`, "aria-hidden": disabled ? 'true' : null, "aria-labelledby": label ? labelId : null, class: createColorClasses(color, {
        'in-item': hostContext('stories-item', el),
        'checkbox-checked': checked,
        'checkbox-disabled': disabled,
        'checkbox-indeterminate': indeterminate,
        'interactive': true
      }), onClick: this.onClick, role: "checkbox" }, h("svg", { class: "checkbox-icon", viewBox: "0 0 24 24", part: "container" }, path), h("label", { htmlFor: inputId }, labelText), h("input", { ref: focusEl => this.focusEl = focusEl, "aria-checked": `${checked}`, disabled: disabled, id: inputId, onBlur: () => this.onBlur(), onFocus: () => this.onFocus(), type: "checkbox" })));
  }
  get el() { return this; }
  static get watchers() { return {
    "checked": ["checkedChanged"],
    "disabled": ["disabledChanged"]
  }; }
  static get style() { return checkboxCss; }
}, [1, "stories-checkbox", {
    "color": [513],
    "name": [1],
    "checked": [1028],
    "indeterminate": [1028],
    "disabled": [4],
    "value": [8]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["stories-checkbox"];
  components.forEach(tagName => { switch (tagName) {
    case "stories-checkbox":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Checkbox);
      }
      break;
  } });
}
defineCustomElement$1();

const StoriesCheckbox = Checkbox;
const defineCustomElement = defineCustomElement$1;

export { StoriesCheckbox, defineCustomElement };

//# sourceMappingURL=stories-checkbox.js.map