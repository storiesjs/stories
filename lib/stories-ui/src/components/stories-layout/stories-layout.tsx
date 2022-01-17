// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, h } from '@stencil/core';

@Component({
  tag: 'stories-layout',
  styleUrl: 'stories-layout.css',
  shadow: true,
})
export class StoriesLayout {

  render(): JSX.Element[] {
    console.log('StoriesLayout.render');
    return [
      <slot name="navigator"></slot>,
      <div class="main">
        <slot name="toolbar"></slot>
        <slot name="viewer"></slot>
      </div>,
    ];
  }

}
