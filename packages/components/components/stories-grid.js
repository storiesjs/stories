/*!
 * (C) StoriesJS https://storiesjs.org - GPL-2.0 License
 */
import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const gridCss = ":host{padding-left:var(--stories-grid-padding-xs, var(--stories-grid-padding, 5px));padding-right:var(--stories-grid-padding-xs, var(--stories-grid-padding, 5px));padding-top:var(--stories-grid-padding-xs, var(--stories-grid-padding, 5px));padding-bottom:var(--stories-grid-padding-xs, var(--stories-grid-padding, 5px));margin-left:auto;margin-right:auto;display:block;-ms-flex:1;flex:1}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--stories-grid-padding-xs, var(--stories-grid-padding, 5px));padding-inline-start:var(--stories-grid-padding-xs, var(--stories-grid-padding, 5px));-webkit-padding-end:var(--stories-grid-padding-xs, var(--stories-grid-padding, 5px));padding-inline-end:var(--stories-grid-padding-xs, var(--stories-grid-padding, 5px))}}@media (min-width: 576px){:host{padding-left:var(--stories-grid-padding-sm, var(--stories-grid-padding, 5px));padding-right:var(--stories-grid-padding-sm, var(--stories-grid-padding, 5px));padding-top:var(--stories-grid-padding-sm, var(--stories-grid-padding, 5px));padding-bottom:var(--stories-grid-padding-sm, var(--stories-grid-padding, 5px))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--stories-grid-padding-sm, var(--stories-grid-padding, 5px));padding-inline-start:var(--stories-grid-padding-sm, var(--stories-grid-padding, 5px));-webkit-padding-end:var(--stories-grid-padding-sm, var(--stories-grid-padding, 5px));padding-inline-end:var(--stories-grid-padding-sm, var(--stories-grid-padding, 5px))}}}@media (min-width: 768px){:host{padding-left:var(--stories-grid-padding-md, var(--stories-grid-padding, 5px));padding-right:var(--stories-grid-padding-md, var(--stories-grid-padding, 5px));padding-top:var(--stories-grid-padding-md, var(--stories-grid-padding, 5px));padding-bottom:var(--stories-grid-padding-md, var(--stories-grid-padding, 5px))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--stories-grid-padding-md, var(--stories-grid-padding, 5px));padding-inline-start:var(--stories-grid-padding-md, var(--stories-grid-padding, 5px));-webkit-padding-end:var(--stories-grid-padding-md, var(--stories-grid-padding, 5px));padding-inline-end:var(--stories-grid-padding-md, var(--stories-grid-padding, 5px))}}}@media (min-width: 992px){:host{padding-left:var(--stories-grid-padding-lg, var(--stories-grid-padding, 5px));padding-right:var(--stories-grid-padding-lg, var(--stories-grid-padding, 5px));padding-top:var(--stories-grid-padding-lg, var(--stories-grid-padding, 5px));padding-bottom:var(--stories-grid-padding-lg, var(--stories-grid-padding, 5px))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--stories-grid-padding-lg, var(--stories-grid-padding, 5px));padding-inline-start:var(--stories-grid-padding-lg, var(--stories-grid-padding, 5px));-webkit-padding-end:var(--stories-grid-padding-lg, var(--stories-grid-padding, 5px));padding-inline-end:var(--stories-grid-padding-lg, var(--stories-grid-padding, 5px))}}}@media (min-width: 1200px){:host{padding-left:var(--stories-grid-padding-xl, var(--stories-grid-padding, 5px));padding-right:var(--stories-grid-padding-xl, var(--stories-grid-padding, 5px));padding-top:var(--stories-grid-padding-xl, var(--stories-grid-padding, 5px));padding-bottom:var(--stories-grid-padding-xl, var(--stories-grid-padding, 5px))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--stories-grid-padding-xl, var(--stories-grid-padding, 5px));padding-inline-start:var(--stories-grid-padding-xl, var(--stories-grid-padding, 5px));-webkit-padding-end:var(--stories-grid-padding-xl, var(--stories-grid-padding, 5px));padding-inline-end:var(--stories-grid-padding-xl, var(--stories-grid-padding, 5px))}}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host(.grid-fixed){width:var(--stories-grid-width-xs, var(--stories-grid-width, 100%));max-width:100%}@media (min-width: 576px){:host(.grid-fixed){width:var(--stories-grid-width-sm, var(--stories-grid-width, 540px))}}@media (min-width: 768px){:host(.grid-fixed){width:var(--stories-grid-width-md, var(--stories-grid-width, 720px))}}@media (min-width: 992px){:host(.grid-fixed){width:var(--stories-grid-width-lg, var(--stories-grid-width, 960px))}}@media (min-width: 1200px){:host(.grid-fixed){width:var(--stories-grid-width-xl, var(--stories-grid-width, 1140px))}}:host(.stories-no-padding){--stories-grid-column-padding:0;--stories-grid-column-padding-xs:0;--stories-grid-column-padding-sm:0;--stories-grid-column-padding-md:0;--stories-grid-column-padding-lg:0;--stories-grid-column-padding-xl:0}";

const Grid = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    /**
     * If `true`, the grid will have a fixed width based on the screen size.
     */
    this.fixed = false;
  }
  render() {
    return (h(Host, { class: { 'grid-fixed': this.fixed } }, h("slot", null)));
  }
  static get style() { return gridCss; }
}, [1, "stories-grid", {
    "fixed": [4]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["stories-grid"];
  components.forEach(tagName => { switch (tagName) {
    case "stories-grid":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Grid);
      }
      break;
  } });
}
defineCustomElement$1();

const StoriesGrid = Grid;
const defineCustomElement = defineCustomElement$1;

export { StoriesGrid, defineCustomElement };

//# sourceMappingURL=stories-grid.js.map