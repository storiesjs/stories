// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, Prop, h, Event, Listen } from '@stencil/core';
import type { EventEmitter } from '@stencil/core';
import { getFirstStoryId, getStoryIdFromUrl, setStoryIdInUrl } from '@stories/stories-common';
import type { StoryComponents } from '@stories/stories-common';

import state from '../../store/store';

@Component({
  tag: 'stories-app',
  styleUrl: 'stories-app.css',
  shadow: true,
})
export class StoriesApp {

  @Event({ bubbles: true, composed: true }) story: EventEmitter;

  /**
   * Stories
   */
  @Prop() stories: StoryComponents = {};

  /**
   * Listen thw 'hashchange' event and get path from URL.
   * First available story could be selected if there is no one was specified in the URL's path after hash
   * Method will emmit the 'storySelected' event
   */
  @Listen('hashchange', { target: 'window' })
  onHash(): void {
    // Get path from URL's hash or default value based on first story
    const path = getStoryIdFromUrl() || getFirstStoryId(state.stories);
    // We have to update the URL's hash to keep it in sync
    setStoryIdInUrl(path);
    // Set story in state
    const selected = state.story = path ? state.stories[path] : undefined;
    console.log('StoriesApp.onHash', path, selected);
    // Send custom event about selected story
    this.story.emit(selected);
  };

  componentWillLoad(): void {
    console.log('StoriesApp.componentWillLoad', this.stories);
    state.stories = this.stories;
    // Update internal state and sync it with hash
    this.onHash();
  }

  render(): JSX.Element[] {
    console.log('StoriesApp.render');
    return [
      <slot name="navigator"></slot>,
      <slot name="viewer"></slot>
    ];
  }
}
