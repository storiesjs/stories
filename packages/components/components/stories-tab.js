/*!
 * (C) StoriesJS https://storiesjs.org - GPL-2.0 License
 */
import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const tabCss = ":host(.tab-hidden){display:none !important}";

const Tab = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    /** @internal */
    this.active = false;
  }
  render() {
    const { tab, active } = this;
    return (h(Host, { "aria-hidden": !active ? 'true' : null, "aria-labelledby": `tab-button-${tab}`, class: {
        'stories-page': true,
        'tab-hidden': !active
      }, role: "tabpanel" }, h("slot", null)));
  }
  get el() { return this; }
  static get style() { return tabCss; }
}, [1, "stories-tab", {
    "active": [1028],
    "tab": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["stories-tab"];
  components.forEach(tagName => { switch (tagName) {
    case "stories-tab":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Tab);
      }
      break;
  } });
}
defineCustomElement$1();

const StoriesTab = Tab;
const defineCustomElement = defineCustomElement$1;

export { StoriesTab, defineCustomElement };

//# sourceMappingURL=stories-tab.js.map