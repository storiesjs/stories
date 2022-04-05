/*!
 * (C) StoriesJS https://storiesjs.org - GPL-2.0 License
 */
import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const toolBarCss = ".bar{color:var(--stories-bar-text-color, black);width:100%;height:40px;-ms-flex-negative:0;flex-shrink:0;overflow:auto;overflow-y:hidden}.inner{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;position:relative;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-negative:0;flex-shrink:0;height:40px;background-color:transparent}.side{display:-ms-flexbox;display:flex;white-space:nowrap;-ms-flex-preferred-size:auto;flex-basis:auto;-ms-flex-negative:0;flex-shrink:0;margin-left:3px;margin-right:3px}.side.left>*{margin-left:4px}.side.right{margin-left:30px}.side.right>*{margin-right:4px}";

const ToolBar = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("div", { class: "bar" }, h("div", { class: "inner" }, h("div", { class: "side left" }, h("slot", { name: "left" })), h("div", { class: "side right" }, h("slot", { name: "right" })))));
  }
  static get style() { return toolBarCss; }
}, [1, "stories-tool-bar"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["stories-tool-bar"];
  components.forEach(tagName => { switch (tagName) {
    case "stories-tool-bar":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ToolBar);
      }
      break;
  } });
}
defineCustomElement$1();

const StoriesToolBar = ToolBar;
const defineCustomElement = defineCustomElement$1;

export { StoriesToolBar, defineCustomElement };

//# sourceMappingURL=stories-tool-bar.js.map