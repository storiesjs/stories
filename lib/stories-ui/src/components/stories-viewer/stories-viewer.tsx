// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, h } from '@stencil/core';
import type { StoryComponent } from '@stories/stories-common';

import state from '../../store/store';

@Component({
  tag: 'stories-viewer',
  styleUrl: 'stories-viewer.css',
  shadow: true,
})
export class StoriesViewer {

  render(): JSX.Element {
    console.log('render.StoriesViewer');
    const story = state.story as StoryComponent;
    if (story) {
      return <section><slot></slot></section>;
    }
    return <section>No selected story</section>;
  }

}
