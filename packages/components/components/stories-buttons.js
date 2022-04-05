/*!
 * (C) StoriesJS https://storiesjs.org - GPL-2.0 License
 */
import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const buttonsCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99}::slotted(*) stories-button{--padding-top:0;--padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}";

const Buttons = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    /**
     * If true, buttons will disappear when its
     * parent toolbar has fully collapsed if the toolbar
     * is not the first toolbar. If the toolbar is the
     * first toolbar, the buttons will be hidden and will
     * only be shown once all toolbars have fully collapsed.
     */
    this.collapse = false;
  }
  render() {
    return (h(Host, { class: {
        'buttons-collapse': this.collapse
      } }, h("slot", null)));
  }
  static get style() { return buttonsCss; }
}, [1, "stories-buttons", {
    "collapse": [4]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["stories-buttons"];
  components.forEach(tagName => { switch (tagName) {
    case "stories-buttons":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Buttons);
      }
      break;
  } });
}
defineCustomElement$1();

const StoriesButtons = Buttons;
const defineCustomElement = defineCustomElement$1;

export { StoriesButtons, defineCustomElement };

//# sourceMappingURL=stories-buttons.js.map