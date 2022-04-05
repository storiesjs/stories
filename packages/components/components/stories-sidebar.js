/*!
 * (C) StoriesJS https://storiesjs.org - GPL-2.0 License
 */
import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { s as state } from './index3.js';

const sidebarCss = ":host{display:block;background-color:lightblue}nav{-ms-flex-negative:0;flex-shrink:0;height:100vh;width:200px}";

const Sidebar = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    const stories = state.stories;
    if (stories && Object.keys(stories).length) {
      return (h("nav", null, h("h1", null, "Navigation"), Object.keys(stories).map(key => {
        const story = stories[key];
        return h("li", null, h("a", { href: `/#path=${key}` }, story.storyName));
      })));
    }
    return h("div", null, "No stories");
  }
  static get style() { return sidebarCss; }
}, [1, "stories-sidebar"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["stories-sidebar"];
  components.forEach(tagName => { switch (tagName) {
    case "stories-sidebar":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Sidebar);
      }
      break;
  } });
}
defineCustomElement$1();

const StoriesSidebar = Sidebar;
const defineCustomElement = defineCustomElement$1;

export { StoriesSidebar, defineCustomElement };

//# sourceMappingURL=stories-sidebar.js.map