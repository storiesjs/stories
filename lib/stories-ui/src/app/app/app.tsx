// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, Prop, h, Event, Listen, Method } from '@stencil/core';
import type { EventEmitter } from '@stencil/core';
import { getFirstStoryId, getStoryIdFromUrl, modulesToStories, setStoryIdInUrl } from '@stories/stories-common';
import type { StoryModules, StoryComponent, StoryContext } from '@stories/stories-common';

import type { Addon, AddonState } from '../..';
import type { StoriesStateType } from '../../store';
import { state, createStore } from '../../store';
import { createContext } from '../../utils';

@Component({
  tag: 'stories-app',
  styleUrl: 'app.scss',
  shadow: true,
})
export class App {

  @Event({ bubbles: true, composed: true }) storyChange: EventEmitter<StoryComponent>;
  @Event({ bubbles: true, composed: true }) storyContextChange: EventEmitter<StoryContext>;

  /**
   * Story Modules
   */
  @Prop() modules: StoryModules = [];

  /**
   * Story Modules
   */
  @Prop({mutable: true}) store: StoriesStateType = state;

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
    const story = state.story = path ? state.stories[path] : undefined;
    // Send custom event about selected story
    this.storyChange.emit(story);
    // Create context for story
    const context: StoryContext = createContext(story);
    state.context = context;
    // Send custom event about selected story
    this.storyContextChange.emit(context);
    // Update all addons
    Object.values(state.addons).forEach(addon => {
      addon.reset(story, context);
    });
  };

  componentWillLoad(): void {
    state.stories = modulesToStories(this.modules);
    // Update internal state and sync it with hash
    this.onHash();
  }

  @Method()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async registerAddon(addon: Addon<AddonState>, defaultState?: AddonState): Promise<void> {
    const addons = state.addons;
    if (addons[addon.id]) {
      throw new Error(`Please remove duplicate addon ${addon.id}`);
    }
    addons[addon.id] = addon;
    // Create addon's store
    addon.state = createStore<AddonState>(defaultState).state;
    // Reset addon after registration
    addon.reset(state.story, state.context);
  }

  @Method()
  async findAddon(id: string): Promise<Addon<AddonState>> {
    const addons = state.addons;
    if (!addons[id]) {
      throw new Error(`Cannot find addon by id ${id}`);
    }
    return addons[id];
  }

  render(): JSX.Element[] {
    return <slot/>;
  }
}
