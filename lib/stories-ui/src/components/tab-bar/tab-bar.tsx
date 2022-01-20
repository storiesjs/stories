import type { EventEmitter } from '@stencil/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, Host, h, Element, Prop, Watch, Event } from '@stencil/core';

import type { Color, TabBarChangedEventDetail } from '../../types';
import { createColorClasses } from '../../utils';

@Component({
  tag: 'stories-tab-bar',
  styleUrl: 'tab-bar.scss',
  shadow: true,
})
export class TabBar {
  @Element() el!: HTMLElement;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Prop({ reflect: true }) color?: Color;

  /**
   * The selected tab component
   */
  @Prop() selectedTab?: string;
  @Watch('selectedTab')
  selectedTabChanged(): void {
    if (this.selectedTab !== undefined) {
      this.storiesTabBarChanged.emit({
        tab: this.selectedTab
      });
    }
  }

  /** @internal */
  @Event() storiesTabBarChanged!: EventEmitter<TabBarChangedEventDetail>;

  componentWillLoad(): void {
    this.selectedTabChanged();
  }

  render(): JSX.Element {
    const { color } = this;

    return (
      <Host
        class={createColorClasses(color, {})}
        role="tablist"
      >
        <slot></slot>
      </Host>
    );
  }

}
