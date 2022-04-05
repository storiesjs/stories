/*!
 * (C) StoriesJS https://storiesjs.org - GPL-2.0 License
 */
import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { c as createColorClasses } from './utils.js';

const tabBarCss = ":host{padding-left:var(--stories-safe-area-left);padding-right:var(--stories-safe-area-right);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start;width:auto;height:40px;padding-bottom:var(--stories-safe-area-bottom, 0);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--stories-safe-area-left);padding-inline-start:var(--stories-safe-area-left);-webkit-padding-end:var(--stories-safe-area-right);padding-inline-end:var(--stories-safe-area-right)}}:host(.stories-color) ::slotted(stories-tab-button){--background-focused:var(--stories-color-shade);--color-selected:var(--stories-color-contrast)}:host(.stories-color) ::slotted(.tab-selected){color:var(--stories-color-contrast)}:host(.stories-color),:host(.stories-color) ::slotted(stories-tab-button){color:rgba(var(--stories-color-contrast-rgb), 0.7)}:host(.stories-color),:host(.stories-color) ::slotted(stories-tab-button){background:var(--stories-color-base)}:host(.stories-color) ::slotted(stories-tab-button.stories-focused){background:var(--background-focused)}:host(.tab-bar-hidden){display:none !important}";

const TabBar = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.storiesTabBarChange = createEvent(this, "storiesTabBarChange", 7);
  }
  selectedTabChanged() {
    if (this.selectedTab !== undefined) {
      this.storiesTabBarChange.emit({
        tab: this.selectedTab
      });
    }
  }
  componentWillLoad() {
    this.selectedTabChanged();
  }
  render() {
    const { color } = this;
    return (h(Host, { class: createColorClasses(color, {}), role: "tablist" }, h("slot", null)));
  }
  get el() { return this; }
  static get watchers() { return {
    "selectedTab": ["selectedTabChanged"]
  }; }
  static get style() { return tabBarCss; }
}, [1, "stories-tab-bar", {
    "color": [513],
    "selectedTab": [1, "selected-tab"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["stories-tab-bar"];
  components.forEach(tagName => { switch (tagName) {
    case "stories-tab-bar":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, TabBar);
      }
      break;
  } });
}
defineCustomElement$1();

const StoriesTabBar = TabBar;
const defineCustomElement = defineCustomElement$1;

export { StoriesTabBar, defineCustomElement };

//# sourceMappingURL=stories-tab-bar.js.map