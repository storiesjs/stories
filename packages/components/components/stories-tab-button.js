/*!
 * (C) StoriesJS https://storiesjs.org - GPL-2.0 License
 */
import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const tabButtonCss = ":host{--background-focused-opacity:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;outline:none;background:pink;color:var(--color)}.button-native{border-radius:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;height:100%;border:0;outline:none;background:transparent;text-decoration:none;cursor:pointer;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-drag:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:\"\";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;height:100%;z-index:1}:host(.stories-focused) .button-native{color:var(--color-focused)}:host(.stories-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){a:hover{color:var(--color-selected)}}:host(.tab-selected){color:var(--color-selected)}:host(.tab-hidden){display:none !important}:host(.tab-disabled){pointer-events:none;opacity:0.4}::slotted(stories-label),::slotted(stories-icon){display:block;-ms-flex-item-align:center;align-self:center;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(stories-label){-ms-flex-order:0;order:0}::slotted(stories-icon){-ms-flex-order:-1;order:-1;height:1em}:host(.tab-has-label-only) ::slotted(stories-label){white-space:normal}::slotted(stories-badge){-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1}:host(.tab-layout-icon-start){-ms-flex-direction:row;flex-direction:row}:host(.tab-layout-icon-end){-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.tab-layout-icon-bottom){-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.tab-layout-icon-hide) ::slotted(stories-icon){display:none}:host(.tab-layout-label-hide) ::slotted(stories-label){display:none}";

const TabButton = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.storiesTabButtonClick = createEvent(this, "storiesTabButtonClick", 7);
    /**
     * If `true`, the user cannot interact with the tab button.
     */
    this.disabled = false;
    /**
     * Set the layout of the text and icon in the tab bar.
     * It defaults to `'icon-start'`.
     */
    this.layout = 'icon-start';
    /**
     * The selected tab component
     */
    this.selected = false;
    this.onKeyUp = (ev) => {
      if (ev.key === 'Enter' || ev.key === ' ') {
        this.selectTab(ev);
      }
    };
    this.onClick = (ev) => {
      this.selectTab(ev);
    };
  }
  onTabBarChanged(ev) {
    const dispatchedFrom = ev.target;
    const parent = this.el.parentElement;
    if ((ev.composedPath && ev.composedPath().includes(parent)) || (dispatchedFrom && dispatchedFrom.contains(this.el))) {
      this.selected = this.tab === ev.detail.tab;
    }
  }
  selectTab(ev) {
    if (this.tab !== undefined) {
      if (!this.disabled) {
        this.storiesTabButtonClick.emit({
          tab: this.tab,
          selected: this.selected
        });
      }
      ev.preventDefault();
    }
  }
  get hasLabel() {
    return !!this.el.querySelector('stories-label');
  }
  get hasIcon() {
    return !!this.el.querySelector('stories-icon');
  }
  get tabIndex() {
    if (this.disabled) {
      return -1;
    }
    const hasTabIndex = this.el.hasAttribute('tabindex');
    if (hasTabIndex) {
      return this.el.getAttribute('tabindex');
    }
    return 0;
  }
  render() {
    const { disabled, hasIcon, hasLabel, tabIndex, layout, selected, tab } = this;
    return (h(Host, { "aria-selected": selected ? 'true' : null, class: {
        'tab-selected': selected,
        'tab-disabled': disabled,
        'tab-has-label': hasLabel,
        'tab-has-icon': hasIcon,
        'tab-has-label-only': hasLabel && !hasIcon,
        'tab-has-icon-only': hasIcon && !hasLabel,
        [`tab-layout-${layout}`]: true
      }, id: tab !== undefined ? `tab-button-${tab}` : null, onClick: this.onClick, onKeyup: this.onKeyUp, role: "tab", tabindex: tabIndex }, h("a", { href: '#', tabIndex: -1, class: "button-native", part: "native" }, h("span", { class: "button-inner" }, h("slot", null)))));
  }
  get el() { return this; }
  static get style() { return tabButtonCss; }
}, [1, "stories-tab-button", {
    "disabled": [4],
    "layout": [1025],
    "selected": [1028],
    "tab": [1]
  }, [[8, "storiesTabBarChanged", "onTabBarChanged"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["stories-tab-button"];
  components.forEach(tagName => { switch (tagName) {
    case "stories-tab-button":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, TabButton);
      }
      break;
  } });
}
defineCustomElement$1();

const StoriesTabButton = TabButton;
const defineCustomElement = defineCustomElement$1;

export { StoriesTabButton, defineCustomElement };

//# sourceMappingURL=stories-tab-button.js.map