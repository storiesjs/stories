/*!
 * (C) StoriesJS https://storiesjs.org - GPL-2.0 License
 */
import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const rowCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}";

const Row = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get style() { return rowCss; }
}, [1, "stories-row"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["stories-row"];
  components.forEach(tagName => { switch (tagName) {
    case "stories-row":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Row);
      }
      break;
  } });
}
defineCustomElement$1();

const StoriesRow = Row;
const defineCustomElement = defineCustomElement$1;

export { StoriesRow, defineCustomElement };

//# sourceMappingURL=stories-row.js.map