/*!
 * (C) StoriesJS https://storiesjs.org - GPL-2.0 License
 */
import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { a as api } from './index2.js';
import { m as messages } from './messages.js';

const ACTION_EVENT = 'ACTION_EVENT';

const addonActionsCss = ":host{display:block;height:100%}";

const AddonActions = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.id = "ADDON_ACTIONS";
    this.actions = [];
    this.onActions = (actionDisplay) => {
      this.actions = [...this.actions, actionDisplay];
    };
  }
  title() {
    return "Actions";
  }
  async storyContextChanged(story, context) {
    console.log('AddonActions.storyContextChanged', story, context);
    this.actions = [];
  }
  async componentDidLoad() {
    // Register addon
    api.registerAddon(this);
    // Register event listeners
    messages.on(ACTION_EVENT, this.onActions);
  }
  async disconnectedCallback() {
    // Unregister event listener
    messages.off(ACTION_EVENT, this.onActions);
    // Unregster addon
    api.unregisterAddon(this);
  }
  render() {
    return (h(Host, null, h("ul", null, this.actions.map(action => h("li", null, action.data.name)))));
  }
  get el() { return this; }
  static get style() { return addonActionsCss; }
}, [1, "stories-addon-actions", {
    "actions": [32],
    "storyContextChanged": [64]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["stories-addon-actions"];
  components.forEach(tagName => { switch (tagName) {
    case "stories-addon-actions":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, AddonActions);
      }
      break;
  } });
}
defineCustomElement$1();

const StoriesAddonActions = AddonActions;
const defineCustomElement = defineCustomElement$1;

export { StoriesAddonActions, defineCustomElement };

//# sourceMappingURL=stories-addon-actions.js.map