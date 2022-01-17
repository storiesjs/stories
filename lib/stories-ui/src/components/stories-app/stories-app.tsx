// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, Prop, h, Event, Listen } from '@stencil/core';
import type { EventEmitter } from '@stencil/core';
import { getFirstStoryId, getStoryIdFromUrl, modulesToStories, setStoryIdInUrl } from '@stories/stories-common';
import type { StoryModules } from '@stories/stories-common';

import { state } from '../../store';

@Component({
  tag: 'stories-app',
  styleUrl: 'stories-app.css',
  shadow: true,
})
export class StoriesApp {

  @Event({ bubbles: true, composed: true }) story: EventEmitter;

  /**
   * Story Modules
   */
  @Prop() modules: StoryModules = [];

  /**
   * Listen thw 'hashchange' event and get path from URL.
   * First available story could be selected if there is no one was specified in the URL's path after hash
   * Method will emmit the 'story' event
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
    console.log('StoriesApp.componentWillLoad', this.modules);
    state.stories = modulesToStories(this.modules);
    // Update internal state and sync it with hash
    this.onHash();
  }

  render(): JSX.Element[] {
    console.log('StoriesApp.render');
    return <slot></slot>;
  }
}
