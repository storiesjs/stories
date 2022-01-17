// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, h } from '@stencil/core';
import type { StoryComponent } from '@stories/stories-common';

import { state } from '../../store';

@Component({
  tag: 'stories-viewer',
  styleUrl: 'stories-viewer.css',
  shadow: true,
})
export class StoriesViewer {

  render(): JSX.Element {
    console.log('StoriesViewer.render');
    const story = state.story as StoryComponent;
    const zoom = state.zoom;
    if (story) {
      return (
        <stories-view-zoom zoom={zoom}>
          <slot></slot>
        </stories-view-zoom>
      );
    }
    return <section>No selected story</section>;
  }

}
