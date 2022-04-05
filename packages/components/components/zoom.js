/*!
 * (C) StoriesJS https://storiesjs.org - GPL-2.0 License
 */
import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

function browserSupportsCssZoom() {
  try {
    return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    document.implementation.createHTMLDocument('').body.style.zoom !== undefined);
  }
  catch (error) {
    return false;
  }
}
function computeZoomStyle(zoom) {
  return {
    zoom: zoom.toPrecision(2),
  };
}
function computeTransformStyle(height, zoom) {
  return {
    height: (height + 50).toFixed(),
    transformOrigin: 'top left',
    transform: `scale(${zoom})`,
  };
}

const zoomCss = ":host{display:block}";

const zoomStyle = browserSupportsCssZoom();
const Zoom = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.height = 0;
    this.zoom = 1;
  }
  watchStateHandler(newDiv) {
    this.height = newDiv.getBoundingClientRect().height;
  }
  render() {
    const style = zoomStyle ? computeZoomStyle(this.zoom) : computeTransformStyle(this.height, this.zoom);
    return (h(Host, { style: style }, h("div", { ref: (el) => this.div = el, class: "innerZoomElementWrapper" }, h("slot", null))));
  }
  static get watchers() { return {
    "div": ["watchStateHandler"]
  }; }
  static get style() { return zoomCss; }
}, [1, "stories-zoom", {
    "zoom": [2],
    "div": [32],
    "height": [32]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["stories-zoom"];
  components.forEach(tagName => { switch (tagName) {
    case "stories-zoom":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Zoom);
      }
      break;
  } });
}
defineCustomElement();

export { Zoom as Z, defineCustomElement as d };

//# sourceMappingURL=zoom.js.map