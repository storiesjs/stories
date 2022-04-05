/*!
 * (C) StoriesJS https://storiesjs.org - GPL-2.0 License
 */
import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { s as state } from './index3.js';

const addonsCss = "";

const Addons = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async registerAddon(addon) {
    const addons = state.addons;
    if (addons[addon.id]) {
      throw new Error(`Please remove duplicate addon ${addon.id}`);
    }
    addons[addon.id] = addon;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async unregisterAddon(addon) {
    const addons = state.addons;
    if (!addons[addon.id]) {
      throw new Error(`Cannot unregister addon ${addon.id}`);
    }
    delete addons[addon.id];
  }
  async findAddon(id) {
    const addons = state.addons;
    if (!addons[id]) {
      throw new Error(`Cannot find addon by id ${id}`);
    }
    return addons[id];
  }
  async storyContextChanged(story, context) {
    // Update all addons
    Object.values(state.addons).forEach(addon => {
      addon.storyContextChanged(story, context);
    });
  }
  render() {
    return (h("slot", null));
  }
  static get style() { return addonsCss; }
}, [1, "stories-addons", {
    "registerAddon": [64],
    "unregisterAddon": [64],
    "findAddon": [64],
    "storyContextChanged": [64]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["stories-addons"];
  components.forEach(tagName => { switch (tagName) {
    case "stories-addons":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Addons);
      }
      break;
  } });
}
defineCustomElement$1();

const StoriesAddons = Addons;
const defineCustomElement = defineCustomElement$1;

export { StoriesAddons, defineCustomElement };

//# sourceMappingURL=stories-addons.js.map