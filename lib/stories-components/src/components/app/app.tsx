// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, Prop, h, Event, Listen } from '@stencil/core';
import type { EventEmitter } from '@stencil/core';

import { api, state } from '../..';
import type { StoryModules, StoryComponent, StoryContext, AppState } from '../..';

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
  @Prop({mutable: true}) store: AppState = state;

  /**
   * AddonsManager instance
   */
  // @Prop() addons: AddonsManager = addonsManager;

  /**
   * Create story context
   */
  private createContext(story: StoryComponent): StoryContext {
  const context: StoryContext = {
    args: {...story.args},
    argTypes: {...story.argTypes},
    parameters: {...story.parameters},
    initialArgs: {...story.args},
  };
  return context;
}

  /**
   * Listen the 'hashchange' event and get path from URL.
   * First available story could be selected if there is no one was specified in the URL's path after hash
   * Method will emmit the 'story' event
   */
  @Listen('hashchange', { target: 'window' })
  onHash(): void {
    // Get path from URL's hash or default value based on first story
    const storyId = api.getStoryIdFromURL();
    // Set story in state
    const story = state.story = (storyId ? state.stories[storyId] : undefined);
    // We have to update the URL's hash to keep it in sync
    api.selectStory(storyId);
    // Send custom event about selected story
    this.storyChange.emit(story);
    // Create context for story
    const context: StoryContext | undefined = story ? this.createContext(story) : undefined;
    state.context = context;
    // Send custom event about selected story
    this.storyContextChange.emit(context);
    // Inform Addons about changes
    // this.addons.storyContextChanged(story, context);
  };

  componentDidLoad(): void {
    console.log('componentDidLoad',this.modules )
    api.setStories(this.modules);
    // Update internal state and sync it with hash
    this.onHash();
  }

  render(): JSX.Element[] {
    return (
      <slot/>
    );
  }
}
