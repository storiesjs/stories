/*!
 * (C) StoriesJS https://storiesjs.org - GPL-2.0 License
 */
import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const footerCss = "stories-footer{display:block;position:relative;-ms-flex-order:1;order:1;width:100%;z-index:10}stories-footer stories-toolbar:last-of-type{padding-bottom:var(--stories-safe-area-bottom, 0)}";

const Footer = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, { role: "contentinfo" }, h("slot", null)));
  }
  static get style() { return footerCss; }
}, [1, "stories-footer"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["stories-footer"];
  components.forEach(tagName => { switch (tagName) {
    case "stories-footer":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Footer);
      }
      break;
  } });
}
defineCustomElement$1();

const StoriesFooter = Footer;
const defineCustomElement = defineCustomElement$1;

export { StoriesFooter, defineCustomElement };

//# sourceMappingURL=stories-footer.js.map