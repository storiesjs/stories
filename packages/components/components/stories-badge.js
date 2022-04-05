/*!
 * (C) StoriesJS https://storiesjs.org - GPL-2.0 License
 */
import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { c as createColorClasses } from './utils.js';

const badgeCss = ":host{--background:var(--stories-color-primary, #3880ff);--color:var(--stories-color-primary-contrast, #fff);--padding-top:3px;--padding-end:8px;--padding-bottom:3px;--padding-start:8px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:inline-block;min-width:10px;background:var(--background);color:var(--color);font-family:var(--stories-font-family, inherit);font-size:13px;font-weight:bold;line-height:1;text-align:center;white-space:nowrap;contain:content;vertical-align:baseline}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.stories-color){background:var(--stories-color-base);color:var(--stories-color-contrast)}:host(:empty){display:none}";

const Badge = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, { class: createColorClasses(this.color, {}) }, h("slot", null)));
  }
  static get style() { return badgeCss; }
}, [1, "stories-badge", {
    "color": [513]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["stories-badge"];
  components.forEach(tagName => { switch (tagName) {
    case "stories-badge":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Badge);
      }
      break;
  } });
}
defineCustomElement$1();

const StoriesBadge = Badge;
const defineCustomElement = defineCustomElement$1;

export { StoriesBadge, defineCustomElement };

//# sourceMappingURL=stories-badge.js.map