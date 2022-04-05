/*!
 * (C) StoriesJS https://storiesjs.org - GPL-2.0 License
 */
import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { a as api } from './index2.js';
import { s as state } from './index3.js';

const appCss = ":host{height:100%;width:100%;background-color:coral}";

const App = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.storyChange = createEvent(this, "storyChange", 7);
    this.storyContextChange = createEvent(this, "storyContextChange", 7);
    /**
     * Story Modules
     */
    this.modules = [];
    /**
     * Story Modules
     */
    this.store = state;
  }
  /**
   * AddonsManager instance
   */
  // @Prop() addons: AddonsManager = addonsManager;
  /**
   * Create story context
   */
  createContext(story) {
    const context = {
      args: Object.assign({}, story.args),
      argTypes: Object.assign({}, story.argTypes),
      parameters: Object.assign({}, story.parameters),
      initialArgs: Object.assign({}, story.args),
    };
    return context;
  }
  /**
   * Listen the 'hashchange' event and get path from URL.
   * First available story could be selected if there is no one was specified in the URL's path after hash
   * Method will emmit the 'story' event
   */
  onHash() {
    // Get path from URL's hash or default value based on first story
    const storyId = api.getStoryIdFromURL();
    // Set story in state
    const story = state.story = (storyId ? state.stories[storyId] : undefined);
    console.log('onHash', storyId, story);
    // We have to update the URL's hash to keep it in sync
    api.selectStory(storyId);
    // Send custom event about selected story
    this.storyChange.emit(story);
    console.log('storyChange emit', story);
    // Create context for story
    const context = story ? this.createContext(story) : undefined;
    state.context = context;
    // Send custom event about selected story
    this.storyContextChange.emit(context);
    console.log('storyContextChange emit', story);
    // Inform Addons about changes
    // this.addons.storyContextChanged(story, context);
  }
  ;
  componentDidLoad() {
    console.log('componentDidLoad', this.modules);
    api.setStories(this.modules);
    // Update internal state and sync it with hash
    this.onHash();
  }
  render() {
    return (h("slot", null));
  }
  static get style() { return appCss; }
}, [1, "stories-app", {
    "modules": [16],
    "store": [1040]
  }, [[8, "hashchange", "onHash"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["stories-app"];
  components.forEach(tagName => { switch (tagName) {
    case "stories-app":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, App);
      }
      break;
  } });
}
defineCustomElement$1();

const StoriesApp = App;
const defineCustomElement = defineCustomElement$1;

export { StoriesApp, defineCustomElement };

//# sourceMappingURL=stories-app.js.map