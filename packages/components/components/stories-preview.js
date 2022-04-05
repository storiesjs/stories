/*!
 * (C) StoriesJS https://storiesjs.org - GPL-2.0 License
 */
import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { s as state } from './index3.js';
import { d as defineCustomElement$2 } from './zoom.js';

const previewCss = ":host{display:block;background-color:lightpink}section{-ms-flex-negative:1;flex-shrink:1;height:100vh;width:100vw;background-color:lightcoral}";

const Preview = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    const zoom = state.zoom;
    console.log('Preview.render.zoom', zoom);
    return (h("stories-zoom", { zoom: zoom }, h("slot", null)));
  }
  static get style() { return previewCss; }
}, [1, "stories-preview"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["stories-preview", "stories-zoom"];
  components.forEach(tagName => { switch (tagName) {
    case "stories-preview":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Preview);
      }
      break;
    case "stories-zoom":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}
defineCustomElement$1();

const StoriesPreview = Preview;
const defineCustomElement = defineCustomElement$1;

export { StoriesPreview, defineCustomElement };

//# sourceMappingURL=stories-preview.js.map