/*!
 * (C) StoriesJS https://storiesjs.org - GPL-2.0 License
 */
import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const tabsCss = ":host{display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;contain:layout size style;z-index:0}.tabs-inner{position:relative;-ms-flex:1;flex:1;contain:layout size style}";

const getTab = (tabs, tab) => {
  const tabEl = (typeof tab === 'string')
    ? tabs.find(t => t.tab === tab)
    : tab;
  if (!tabEl) {
    console.error(`tab with id: "${tabEl}" does not exist`);
  }
  return tabEl;
};
const Tabs = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.onTabClicked = (ev) => {
      const { tab } = ev.detail;
      this.select(tab);
    };
  }
  async componentWillLoad() {
    const tabs = this.tabs;
    if (tabs.length > 0) {
      await this.select(tabs[0]);
    }
  }
  componentWillRender() {
    const tabBar = this.el.querySelector('stories-tab-bar');
    if (tabBar) {
      const tab = this.selectedTab ? this.selectedTab.tab : undefined;
      tabBar.selectedTab = tab;
    }
  }
  /**
   * Select a tab by the value of its `tab` property or an element reference.
   *
   * @param tab The tab instance to select. If passed a string, it should be the value of the tab's `tab` property.
   */
  async select(tab) {
    const selectedTab = getTab(this.tabs, tab);
    if (!this.shouldSwitch(selectedTab)) {
      return false;
    }
    await this.setActive(selectedTab);
    this.tabSwitch();
    return true;
  }
  /**
   * Get a specific tab by the value of its `tab` property or an element reference.
   *
   * @param tab The tab instance to select. If passed a string, it should be the value of the tab's `tab` property.
   */
  async getTab(tab) {
    return getTab(this.tabs, tab);
  }
  /**
   * Get the currently selected tab.
   */
  getSelected() {
    return Promise.resolve(this.selectedTab ? this.selectedTab.tab : undefined);
  }
  setActive(selectedTab) {
    this.leavingTab = this.selectedTab;
    this.selectedTab = selectedTab;
    selectedTab.active = true;
    return Promise.resolve();
  }
  tabSwitch() {
    const selectedTab = this.selectedTab;
    const leavingTab = this.leavingTab;
    this.leavingTab = undefined;
    if (!selectedTab) {
      return;
    }
    if (leavingTab !== selectedTab) {
      if (leavingTab) {
        leavingTab.active = false;
      }
    }
  }
  shouldSwitch(selectedTab) {
    const leavingTab = this.selectedTab;
    return selectedTab !== undefined && selectedTab !== leavingTab;
  }
  get tabs() {
    return Array.from(this.el.querySelectorAll('stories-tab'));
  }
  render() {
    return (h(Host, { onStoriesTabButtonClick: this.onTabClicked }, h("div", { class: "tabs-inner" }, h("slot", null))));
  }
  get el() { return this; }
  static get style() { return tabsCss; }
}, [1, "stories-tabs", {
    "selectedTab": [32],
    "select": [64],
    "getTab": [64],
    "getSelected": [64]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["stories-tabs"];
  components.forEach(tagName => { switch (tagName) {
    case "stories-tabs":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Tabs);
      }
      break;
  } });
}
defineCustomElement$1();

const StoriesTabs = Tabs;
const defineCustomElement = defineCustomElement$1;

export { StoriesTabs, defineCustomElement };

//# sourceMappingURL=stories-tabs.js.map