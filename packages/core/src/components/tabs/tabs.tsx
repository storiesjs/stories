// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, Host, h, Element, State, Method } from '@stencil/core';

import type { TabButtonClickEventDetail } from '../../types';

const getTab = (tabs: HTMLStrTabElement[], tab: string | HTMLStrTabElement): HTMLStrTabElement | undefined => {
  const tabEl = (typeof tab === 'string')
    ? tabs.find(t => t.tab === tab)
    : tab;

  if (!tabEl) {
    console.error(`tab with id: "${tabEl}" does not exist`);
  }
  return tabEl;
};

@Component({
  tag: 'str-tabs',
  styleUrl: 'tabs.scss',
  shadow: true,
})
export class Tabs {
  @Element() el!: HTMLStrTabsElement;

  private leavingTab?: HTMLStrTabElement;
  @State() selectedTab?: HTMLStrTabElement;

  async componentWillLoad(): Promise<void> {
    const tabs = this.tabs;
    if (tabs.length > 0) {
      await this.select(tabs[0]);
    }
  }

  componentWillRender(): void {
    const tabBar = this.el.querySelector('str-tab-bar');
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
  @Method()
  async select(tab: string | HTMLStrTabElement): Promise<boolean> {
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
  @Method()
  async getTab(tab: string | HTMLStrTabElement): Promise<HTMLStrTabElement | undefined> {
    return getTab(this.tabs, tab);
  }

  /**
   * Get the currently selected tab.
   */
  @Method()
  getSelected(): Promise<string | undefined> {
    return Promise.resolve(this.selectedTab ? this.selectedTab.tab : undefined);
  }

  private setActive(selectedTab: HTMLStrTabElement): Promise<void> {
    this.leavingTab = this.selectedTab;
    this.selectedTab = selectedTab;
    selectedTab.active = true;
    return Promise.resolve();
  }

  private tabSwitch() {
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

  private shouldSwitch(selectedTab: HTMLStrTabElement | undefined): selectedTab is HTMLStrTabElement {
    const leavingTab = this.selectedTab;
    return selectedTab !== undefined && selectedTab !== leavingTab;
  }

  private get tabs() {
    return Array.from(this.el.querySelectorAll('str-tab'));
  }

  private onTabClicked = (ev: CustomEvent<TabButtonClickEventDetail>) => {
    const { tab } = ev.detail;
    this.select(tab);
  }

  render(): JSX.Element {
    return (
      <Host
        onStrTabButtonClick={this.onTabClicked}
      >
        <div class="tabs-inner">
          <slot></slot>
        </div>
      </Host>
    );
  }

}
