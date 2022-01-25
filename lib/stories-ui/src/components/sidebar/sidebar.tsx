// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, h } from '@stencil/core';
import type { StoryComponents, StoryComponent } from '@stories/stories-common';

import { state } from '../../store';

@Component({
  tag: 'stories-sidebar',
  styleUrl: 'sidebar.scss',
  shadow: true,
})
export class Sidebar {

  render(): JSX.Element {
    const stories = state.stories as StoryComponents;
    if (stories && Object.keys(stories).length) {
      return (
        <nav>
          <h1>Navigation</h1>
          {Object.keys(stories).map(key => {
            const story: StoryComponent = stories[key];
            return <li><a href={`/#path=${key}`}>{story.storyName}</a></li>;
          })}
        </nav>
      );
    }
    return <div>No stories</div>;
  }

}
