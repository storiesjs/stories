// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, Host, h, Element, Prop } from '@stencil/core';

@Component({
  tag: 'stories-tab',
  styleUrl: 'tab.scss',
  shadow: true,
})
export class Tab {
  @Element() el!: HTMLStoriesTabElement;

  /** @internal */
  @Prop({ mutable: true }) active = false;

  /**
   * A tab id must be provided for each `stories-tab`. It's used internally to reference
   * the selected tab or by the router to switch between them.
   */
  @Prop() tab!: string;

  render(): JSX.Element {
    const { tab, active } = this;
    return (
      <Host
        aria-hidden={!active ? 'true' : null}
        aria-labelledby={`tab-button-${tab}`}
        class={{
          'stories-page': true,
          'tab-hidden': !active
        }}
        role="tabpanel"
      >
        <slot></slot>
      </Host>
    );
  }

}
