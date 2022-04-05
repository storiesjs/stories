/*!
 * (C) StoriesJS https://storiesjs.org - GPL-2.0 License
 */
import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './icon.js';

const toolButtonCss = "button{-ms-flex-align:center;align-items:center;background:transparent;border:none;border-radius:4px;color:inherit;cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;font-size:13px;font-weight:bold;height:28px;-ms-flex-pack:center;justify-content:center;margin-top:6px;padding:8px 7px}button:hover,button:focus-visible{color:var(--color-hover);background:var(--background-hover);opacity:var(--background-hover-opacity)}button:focus-visible{outline:auto}button:focus:not(:focus-visible){outline:\"none\"}button.active{color:var(--color-hover);background:var(--background-hover)}button.disabled{opacity:0.5;cursor:not-allowed}";

const ToolButton = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.storiesAction = createEvent(this, "storiesAction", 7);
  }
  /**
   * Handle mouse event and generate ActionEvent
   */
  clickHandler(event) {
    event.preventDefault();
    this.storiesAction.emit({ command: this.command });
  }
  render() {
    return (h("button", { disabled: this.disabled, onClick: this.clickHandler.bind(this) }, h("stories-icon", { name: this.icon })));
  }
  static get style() { return toolButtonCss; }
}, [1, "stories-tool-button", {
    "disabled": [4],
    "icon": [1],
    "command": [1]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["stories-tool-button", "stories-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "stories-tool-button":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ToolButton);
      }
      break;
    case "stories-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}
defineCustomElement();

export { ToolButton as T, defineCustomElement as d };

//# sourceMappingURL=tool-button.js.map