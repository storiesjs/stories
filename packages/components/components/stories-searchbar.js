/*!
 * (C) StoriesJS https://storiesjs.org - GPL-2.0 License
 */
import { proxyCustomElement, HTMLElement, createEvent, forceUpdate, h, Host } from '@stencil/core/internal/client';
import { d as debounceEvent, a as raf } from './helpers.js';
import { c as createColorClasses } from './utils.js';
import { d as defineCustomElement$2 } from './icon.js';

const searchbarCss = ":host{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;color:var(--color);font-family:var(--stories-font-family, inherit);-webkit-box-sizing:border-box;box-sizing:border-box}:host(.stories-color){color:var(--stories-color-contrast)}:host(.stories-color) .searchbar-input{background:var(--stories-color-base)}:host(.stories-color) .searchbar-clear-button,:host(.stories-color) .searchbar-cancel-button,:host(.stories-color) .searchbar-search-icon{color:inherit}.searchbar-search-icon{color:var(--icon-color);pointer-events:none}.searchbar-input-container{display:block;position:relative;-ms-flex-negative:1;flex-shrink:1;width:100%}.searchbar-input{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;border-radius:var(--border-radius);display:block;width:100%;border:0;outline:none;background:var(--background);font-family:inherit;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-input::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input::-webkit-search-cancel-button,.searchbar-input::-ms-clear{display:none}.searchbar-cancel-button{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:none;height:100%;border:0;outline:none;color:var(--cancel-button-color);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-cancel-button>div{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.searchbar-clear-button{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:none;min-height:0;outline:none;color:var(--clear-button-color);-webkit-appearance:none;-moz-appearance:none;appearance:none}:host(.searchbar-has-value.searchbar-should-show-clear) .searchbar-clear-button{display:block}:host(.searchbar-disabled){cursor:default;opacity:0.4;pointer-events:none}";

const Searchbar = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.storiesInput = createEvent(this, "storiesInput", 7);
    this.storiesChange = createEvent(this, "storiesChange", 7);
    this.storiesCancel = createEvent(this, "storiesCancel", 7);
    this.storiesClear = createEvent(this, "storiesClear", 7);
    this.storiesBlur = createEvent(this, "storiesBlur", 7);
    this.storiesFocus = createEvent(this, "storiesFocus", 7);
    this.storiesStyle = createEvent(this, "storiesStyle", 7);
    this.shouldAlignLeft = true;
    this.focused = false;
    /**
     * Set the cancel button icon. Only applies to `md` mode.
     * Defaults to `"arrow-back-sharp"`.
     */
    this.cancelButtonIcon = 'arrow-back-sharp';
    /**
     * Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke. This also impacts form bindings such as `ngModel` or `v-model`.
     */
    this.debounce = 250;
    /**
     * If `true`, the user cannot interact with the input.
     */
    this.disabled = false;
    /**
     * Set the input's placeholder.
     * `placeholder` can accept either plaintext or HTML as a string.
     * To display characters normally reserved for HTML, they
     * must be escaped. For example `<Stories>` would become
     * `&lt;Stories&gt;`
     */
    this.placeholder = 'Search';
    /**
     * Sets the behavior for the cancel button. Defaults to `"never"`.
     * Setting to `"focus"` shows the cancel button on focus.
     * Setting to `"never"` hides the cancel button.
     * Setting to `"always"` shows the cancel button regardless
     * of focus state.
     */
    this.showCancelButton = 'never';
    /**
     * Sets the behavior for the clear button. Defaults to `"focus"`.
     * Setting to `"focus"` shows the clear button on focus if the
     * input is not empty.
     * Setting to `"never"` hides the clear button.
     * Setting to `"always"` shows the clear button regardless
     * of focus state, but only if the input is not empty.
     */
    this.showClearButton = 'always';
    /**
     * Set the type of the input.
     */
    this.type = 'search';
    /**
     * the value of the searchbar.
     */
    this.value = '';
    /**
     * Clears the input field and triggers the control change.
     */
    this.onClearInput = (ev, shouldFocus) => {
      this.storiesClear.emit();
      if (ev) {
        ev.preventDefault();
        ev.stopPropagation();
      }
      // wait for 4 frames
      setTimeout(() => {
        const value = this.getValue();
        if (value !== '') {
          this.value = '';
          this.storiesInput.emit();
          /**
           * When tapping clear button
           * ensure input is focused after
           * clearing input so users
           * can quickly start typing.
           */
          if (shouldFocus && !this.focused) {
            this.setFocus();
          }
        }
      }, 16 * 4);
    };
    /**
     * Update the Searchbar input value when the input changes
     */
    this.onInput = (ev) => {
      const input = ev.target;
      if (input) {
        this.value = input.value;
      }
      this.storiesInput.emit(ev);
    };
    /**
     * Sets the Searchbar to not focused and checks if it should align left
     * based on whether there is a value in the searchbar or not.
     */
    this.onBlur = () => {
      this.focused = false;
      this.storiesBlur.emit();
      this.positionElements();
    };
    /**
     * Sets the Searchbar to focused and active on input focus.
     */
    this.onFocus = () => {
      this.focused = true;
      this.storiesFocus.emit();
      this.positionElements();
    };
  }
  debounceChanged() {
    this.storiesChange = debounceEvent(this.storiesChange, this.debounce);
  }
  valueChanged() {
    const inputEl = this.nativeInput;
    const value = this.getValue();
    if (inputEl && inputEl.value !== value) {
      inputEl.value = value;
    }
    this.storiesChange.emit({ value });
  }
  showCancelButtonChanged() {
    requestAnimationFrame(() => {
      this.positionElements();
      forceUpdate(this);
    });
  }
  connectedCallback() {
    this.emitStyle();
  }
  componentDidLoad() {
    this.positionElements();
    this.debounceChanged();
  }
  emitStyle() {
    this.storiesStyle.emit({
      'searchbar': true
    });
  }
  /**
   * Sets focus on the specified `stories-searchbar`. Use this method instead of the global
   * `input.focus()`.
   */
  async setFocus() {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  }
  /**
   * Returns the native `<input>` element used under the hood.
   */
  getInputElement() {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return Promise.resolve(this.nativeInput);
  }
  /**
   * Positions the input search icon, placeholder, and the cancel button
   * based on the input value and if it is focused. (ios only)
   */
  positionElements() {
    const value = this.getValue();
    const prevAlignLeft = this.shouldAlignLeft;
    const shouldAlignLeft = (value.trim() !== '' || !!this.focused);
    this.shouldAlignLeft = shouldAlignLeft;
    if (prevAlignLeft !== shouldAlignLeft) {
      this.positionPlaceholder();
    }
  }
  /**
   * Positions the input placeholder
   */
  positionPlaceholder() {
    const inputEl = this.nativeInput;
    if (!inputEl) {
      return;
    }
    const isRTL = document.dir === 'rtl';
    const iconEl = (this.el.shadowRoot || this.el).querySelector('.searchbar-search-icon');
    if (this.shouldAlignLeft) {
      inputEl.removeAttribute('style');
      iconEl.removeAttribute('style');
    }
    else {
      // Create a dummy span to get the placeholder width
      const doc = document;
      const tempSpan = doc.createElement('span');
      tempSpan.innerText = this.placeholder || '';
      doc.body.appendChild(tempSpan);
      // Get the width of the span then remove it
      raf(() => {
        const textWidth = tempSpan.offsetWidth;
        tempSpan.remove();
        // Calculate the input padding
        const inputLeft = 'calc(50% - ' + (textWidth / 2) + 'px)';
        // Calculate the icon margin
        const iconLeft = 'calc(50% - ' + ((textWidth / 2) + 30) + 'px)';
        // Set the input padding start and icon margin start
        if (isRTL) {
          inputEl.style.paddingRight = inputLeft;
          iconEl.style.marginRight = iconLeft;
        }
        else {
          inputEl.style.paddingLeft = inputLeft;
          iconEl.style.marginLeft = iconLeft;
        }
      });
    }
  }
  getValue() {
    return this.value || '';
  }
  hasValue() {
    return this.getValue() !== '';
  }
  /**
   * Determines whether or not the clear button should be visible onscreen.
   * Clear button should be shown if one of two conditions applies:
   * 1. `showClearButton` is set to `always`.
   * 2. `showClearButton` is set to `focus`, and the searchbar has been focused.
   */
  shouldShowClearButton() {
    if ((this.showClearButton === 'never') || (this.showClearButton === 'focus' && !this.focused)) {
      return false;
    }
    return true;
  }
  render() {
    const clearIcon = this.clearIcon || 'close-sharp';
    const searchIcon = this.searchIcon || 'search-sharp';
    return (h(Host, { "aria-disabled": this.disabled ? 'true' : null, class: createColorClasses(this.color, {
        'searchbar-disabled': this.disabled,
        'searchbar-has-value': this.hasValue(),
        'searchbar-left-aligned': this.shouldAlignLeft,
        'searchbar-has-focus': this.focused,
        'searchbar-should-show-clear': this.shouldShowClearButton(),
      }), role: "search" }, h("div", { class: "searchbar-input-container" }, h("input", { ref: el => this.nativeInput = el, "aria-label": "search text", class: "searchbar-input", disabled: this.disabled, inputMode: this.inputmode, onBlur: this.onBlur, onFocus: this.onFocus, onInput: this.onInput, placeholder: this.placeholder, type: this.type, value: this.getValue() }), h("stories-icon", { "aria-hidden": "true", class: "searchbar-search-icon", name: searchIcon }), h("button", { "aria-label": "reset", class: "searchbar-clear-button", onMouseDown: ev => this.onClearInput(ev, true), onTouchStart: ev => this.onClearInput(ev, true), type: "button", "no-blur": true }, h("stories-icon", { "aria-hidden": "true", class: "searchbar-clear-icon", name: clearIcon })))));
  }
  get el() { return this; }
  static get watchers() { return {
    "debounce": ["debounceChanged"],
    "value": ["valueChanged"],
    "showCancelButton": ["showCancelButtonChanged"]
  }; }
  static get style() { return searchbarCss; }
}, [1, "stories-searchbar", {
    "color": [513],
    "cancelButtonIcon": [1, "cancel-button-icon"],
    "clearIcon": [1, "clear-icon"],
    "debounce": [2],
    "disabled": [4],
    "inputmode": [1],
    "placeholder": [1],
    "searchIcon": [1, "search-icon"],
    "showCancelButton": [1, "show-cancel-button"],
    "showClearButton": [1, "show-clear-button"],
    "type": [1],
    "value": [1025],
    "focused": [32],
    "setFocus": [64],
    "getInputElement": [64]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["stories-searchbar", "stories-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "stories-searchbar":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Searchbar);
      }
      break;
    case "stories-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}
defineCustomElement$1();

const StoriesSearchbar = Searchbar;
const defineCustomElement = defineCustomElement$1;

export { StoriesSearchbar, defineCustomElement };

//# sourceMappingURL=stories-searchbar.js.map