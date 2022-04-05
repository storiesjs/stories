/*!
 * (C) StoriesJS https://storiesjs.org - GPL-2.0 License
 */
import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { a as api } from './index2.js';
import { m as messages } from './messages.js';

const CONTROL_EVENT = 'CONTROL_EVENT';

const addonControlsCss = ":host{display:block}";

const AddonControls = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.controls = [];
    this.onControl = (event) => {
      // this.store.state.actions.push(actionDisplay)
      console.log('onControl.event', event);
    };
  }
  title() {
    return "Controls";
  }
  async storyContextChanged(story, context) {
    console.log('AddonControls.storyContextChanged', story, context);
  }
  async componentDidLoad() {
    // Register addon
    api.registerAddon(this);
    // Register event listeners
    messages.on(CONTROL_EVENT, this.onControl);
    // Create store
    // this.store = createStore({controls: []})
  }
  async disconnectedCallback() {
    // Unregister event listener
    messages.off(CONTROL_EVENT, this.onControl);
    // Unregster addon
    api.unregisterAddon(this);
  }
  render() {
    return (h(Host, null, h("div", null, "Addon Controls")));
  }
  get el() { return this; }
  static get style() { return addonControlsCss; }
}, [1, "stories-addon-controls", {
    "controls": [32],
    "storyContextChanged": [64]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["stories-addon-controls"];
  components.forEach(tagName => { switch (tagName) {
    case "stories-addon-controls":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, AddonControls);
      }
      break;
  } });
}
defineCustomElement$1();

const StoriesAddonControls = AddonControls;
const defineCustomElement = defineCustomElement$1;

export { StoriesAddonControls, defineCustomElement };

//# sourceMappingURL=stories-addon-controls.js.map