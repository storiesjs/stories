/*!
 * (C) StoriesJS https://storiesjs.org - GPL-2.0 License
 */
import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { c as createColorClasses } from './utils.js';

const labelCss = ":host-context(.item){--color:initial;display:block;color:var(--color);font-family:var(--stories-font-family, inherit);font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.stories-color){color:var(--stories-color-base)}:host(.stories-text-wrap),:host([text-wrap]){white-space:normal}:host-context(.item-interactive-disabled:not(.item-multiple-inputs)){cursor:default;opacity:0.3;pointer-events:none}:host-context(.item-input){-ms-flex:initial;flex:initial;max-width:200px;pointer-events:none}:host-context(.item-textarea){-ms-flex-item-align:baseline;align-self:baseline}:host(.label-fixed){-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.label-stacked),:host(.label-floating){margin-bottom:0;-ms-flex-item-align:stretch;align-self:stretch;width:auto;max-width:100%}:host(.label-no-animate.label-floating){-webkit-transition:none;transition:none}::slotted(*) h1,::slotted(*) h2,::slotted(*) h3,::slotted(*) h4,::slotted(*) h5,::slotted(*) h6{text-overflow:inherit;overflow:inherit}";

const Label = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    /**
     * The position determines where and how the label behaves inside an item.
     */
    this.position = 'fixed';
  }
  render() {
    const position = this.position;
    return (h(Host, { class: createColorClasses(this.color, {
        [`label-${position}`]: position !== undefined,
        'label-rtl': document.dir === 'rtl'
      }) }, h("slot", null)));
  }
  get el() { return this; }
  static get style() { return labelCss; }
}, [1, "stories-label", {
    "color": [513],
    "position": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["stories-label"];
  components.forEach(tagName => { switch (tagName) {
    case "stories-label":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Label);
      }
      break;
  } });
}
defineCustomElement$1();

const StoriesLabel = Label;
const defineCustomElement = defineCustomElement$1;

export { StoriesLabel, defineCustomElement };

//# sourceMappingURL=stories-label.js.map