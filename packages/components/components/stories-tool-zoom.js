/*!
 * (C) StoriesJS https://storiesjs.org - GPL-2.0 License
 */
import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { s as state } from './index3.js';
import { d as defineCustomElement$3 } from './icon.js';
import { d as defineCustomElement$2 } from './tool-button.js';

const toolZoomCss = ":host{display:block}";

const ToolZoom = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  actionHandler(event) {
    const command = event.detail.command;
    // Update zoom property in the Store's state
    if (command === "zoomIn") {
      state.zoom += 0.1;
    }
    else if (command === "zoomOut") {
      state.zoom -= 0.1;
    }
    else {
      state.zoom = 1;
    }
  }
  render() {
    return [
      h("stories-tool-button", { command: "zoomIn", icon: "zoomIn", onStoriesAction: this.actionHandler }),
      h("stories-tool-button", { command: "zoomOut", icon: "zoomOut", onStoriesAction: this.actionHandler }),
      h("stories-tool-button", { command: "zoomReset", icon: "zoomReset", onStoriesAction: this.actionHandler }),
    ];
  }
  static get style() { return toolZoomCss; }
}, [1, "stories-tool-zoom"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["stories-tool-zoom", "stories-icon", "stories-tool-button"];
  components.forEach(tagName => { switch (tagName) {
    case "stories-tool-zoom":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ToolZoom);
      }
      break;
    case "stories-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "stories-tool-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}
defineCustomElement$1();

const StoriesToolZoom = ToolZoom;
const defineCustomElement = defineCustomElement$1;

export { StoriesToolZoom, defineCustomElement };

//# sourceMappingURL=stories-tool-zoom.js.map