/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { createStore } from "@stencil/store";
import type { StoryComponent, StoryComponents } from '@stories/stories-common';

export type StoriesStateType = {
  stories: StoryComponents,
  story: StoryComponent | undefined,
  zoom: number,
};

const store = createStore<StoriesStateType>({
  stories: {} as StoryComponents,
  story: undefined,
  zoom: 1.0,
});

/**
 * Proxied object that will detect dependencies and call the subscriptions and computed properties.
 * If available, it will detect from which Stencil Component it was called and rerender it when the property changes.
 */
export const state = store.state;
/**
 * Resets the state to its original state and signals a dispose event to all the plugins.
 * This method is intended for plugins to reset all their internal state between tests.
 */
export const dispose = store.dispose;
/**
 * Resets the state to its original state
 */
export const reset = store.reset;
