import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'stories-tab-bar',
  styleUrl: 'stories-tab-bar.css',
  shadow: true,
})
export class StoriesTabBar {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
