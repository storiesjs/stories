import type { EventEmitter } from '@stencil/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, Host, h, Element, Prop, Event, Listen } from '@stencil/core';

import type { TabBarChangedEventDetail, TabButtonClickEventDetail, TabButtonLayout } from '../../types';

@Component({
  tag: 'stories-tab-button',
  styleUrl: 'tab-button.scss',
  shadow: true,
})
export class TabButton {
  @Element() el!: HTMLElement;

  /**
   * If `true`, the user cannot interact with the tab button.
   */
  @Prop() disabled = false;

  /**
   * Set the layout of the text and icon in the tab bar.
   * It defaults to `'icon-start'`.
   */
  @Prop({ mutable: true }) layout?: TabButtonLayout = 'icon-start';

  /**
   * The selected tab component
   */
  @Prop({ mutable: true }) selected = false;

  /**
   * A tab id must be provided for each `stories-tab`. It's used internally to reference
   * the selected tab or by the router to switch between them.
   */
  @Prop() tab?: string;

  /**
   * Emitted when the tab bar is clicked
   * @internal
   */
  @Event() storiesTabButtonClick!: EventEmitter<TabButtonClickEventDetail>;

  @Listen('storiesTabBarChanged', { target: 'window' })
  onTabBarChanged(ev: CustomEvent<TabBarChangedEventDetail>): void {
    const dispatchedFrom = ev.target as HTMLElement;
    const parent = this.el.parentElement as EventTarget;

    if ((ev.composedPath && ev.composedPath().includes(parent)) || (dispatchedFrom && dispatchedFrom.contains(this.el))) {
      this.selected = this.tab === ev.detail.tab;
    }
  }

  private selectTab(ev: Event): void {
    if (this.tab !== undefined) {
      if (!this.disabled) {
        this.storiesTabButtonClick.emit({
          tab: this.tab,
          selected: this.selected
        });
      }
      ev.preventDefault();
    }
  }

  private get hasLabel() {
    return !!this.el.querySelector('stories-label');
  }

  private get hasIcon() {
    return !!this.el.querySelector('stories-icon');
  }

  private get tabIndex() {
    if (this.disabled) { return -1; }

    const hasTabIndex = this.el.hasAttribute('tabindex');

    if (hasTabIndex) {
      return this.el.getAttribute('tabindex');
    }

    return 0;
  }

  private onKeyUp = (ev: KeyboardEvent) => {
    if (ev.key === 'Enter' || ev.key === ' ') {
      this.selectTab(ev);
    }
  }

  private onClick = (ev: Event) => {
    this.selectTab(ev);
  }

  render(): JSX.Element {
    const { disabled, hasIcon, hasLabel, tabIndex, layout, selected, tab } = this;

    return (
      <Host
        aria-selected={selected ? 'true' : null}
        class={{
          'tab-selected': selected,
          'tab-disabled': disabled,
          'tab-has-label': hasLabel,
          'tab-has-icon': hasIcon,
          'tab-has-label-only': hasLabel && !hasIcon,
          'tab-has-icon-only': hasIcon && !hasLabel,
          [`tab-layout-${layout}`]: true
        }}
        id={tab !== undefined ? `tab-button-${tab}` : null}
        onClick={this.onClick}
        onKeyup={this.onKeyUp}
        role="tab"
        tabindex={tabIndex}
      >
        <a href='#' tabIndex={-1} class="button-native" part="native">
          <span class="button-inner">
            <slot></slot>
          </span>
        </a>
      </Host>
    );
  }

}
