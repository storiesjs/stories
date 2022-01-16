// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'stories-layout',
  styleUrl: 'stories-layout.css',
  shadow: true,
})
export class StoriesLayout {

  render(): JSX.Element {
    console.log('StoriesLayout.render');
    return (
      <Host>
        <slot name="navigator"></slot>
        <slot name="viewer"></slot>
      </Host>
    );
  }

}
