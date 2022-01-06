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

  /**
   * Unfortunatelly we cannot use EventEmitter<StoryComponent> because of the bug in @stencil/angular-output-target
   */
  @Event({ bubbles: true, composed: true }) storySelected: EventEmitter<{
    storyId: string;
    kinds: string[];
    name: string;
    storyFn: (context?: unknown) => unknown;
  }>;

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
    const story = state.story = path ? state.stories[path] : undefined;
    console.log('onHash', path, story);
    // Send custom event about selected story
    this.storySelected.emit(story);
  };

  componentWillLoad(): void {
    console.log('componentWillLoad', this.stories);
    state.stories = this.stories;
    // Update internal state and sync it with hash
    this.onHash();
  }

  render(): JSX.Element[] {
    console.log('render.StoriesApp');
    return [
      <slot name="navigator"></slot>,
      <slot name="viewer"></slot>
    ];
  }
}
