/*!
 * (C) StoriesJS https://storiesjs.org - GPL-2.0 License
 */
import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const icons = {
  zoomIn: 'M220 670a316 316 0 0 1 0-450 316 316 0 0 1 450 0 316 316 0 0 1 0 450 316 316 0 0 1-450 0zm749 240L757 698a402 402 0 1 0-59 59l212 212a42 42 0 0 0 59-59zM487 604a42 42 0 0 1-84 0V487H286a42 42 0 1 1 0-84h117V286a42 42 0 1 1 84 0v117h117a42 42 0 0 1 0 84H487v117z',
  zoomOut: 'M757 698a402 402 0 1 0-59 59l212 212a42 42 0 0 0 59-59L757 698zM126 445a316 316 0 0 1 319-319 316 316 0 0 1 318 319 316 316 0 0 1-318 318 316 316 0 0 1-319-318zm160 42a42 42 0 1 1 0-84h318a42 42 0 0 1 0 84H286z',
  zoomReset: 'M148 560a318 318 0 0 0 522 110 316 316 0 0 0 0-450 316 316 0 0 0-450 0c-11 11-21 22-30 34v4h47c25 0 46 21 46 46s-21 45-46 45H90c-13 0-25-6-33-14-9-9-14-20-14-33V156c0-25 20-45 45-45s45 20 45 45v32l1 1a401 401 0 0 1 623 509l212 212a42 42 0 0 1-59 59L698 757A401 401 0 0 1 65 570a42 42 0 0 1 83-10z',
};

const iconCss = ":host{display:inline}svg{width:14px;height:14px}path{fill:currentColor}";

const Icon = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("svg", { viewBox: "0 0 1024 1024" }, h("path", { d: icons[this.name] })));
  }
  static get style() { return iconCss; }
}, [1, "stories-icon", {
    "name": [1]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["stories-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "stories-icon":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Icon);
      }
      break;
  } });
}
defineCustomElement();

export { Icon as I, defineCustomElement as d };

//# sourceMappingURL=icon.js.map