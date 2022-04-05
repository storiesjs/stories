/*!
 * (C) StoriesJS https://storiesjs.org - GPL-2.0 License
 */
import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const routerCss = ":host{display:block}";

const Router = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get style() { return routerCss; }
}, [1, "stories-router"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["stories-router"];
  components.forEach(tagName => { switch (tagName) {
    case "stories-router":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Router);
      }
      break;
  } });
}
defineCustomElement$1();

const StoriesRouter = Router;
const defineCustomElement = defineCustomElement$1;

export { StoriesRouter, defineCustomElement };

//# sourceMappingURL=stories-router.js.map