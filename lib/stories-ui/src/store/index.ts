/* eslint-disable @typescript-eslint/consistent-type-definitions */
import type { ObservableMap } from "@stencil/store";
import { createStore as createStencilStore } from "@stencil/store";
import type { StoryComponent, StoryComponents } from '@stories/stories-common';

import type { Addon, AddonState } from "..";

/**
 * Create store
 * @param defaultState Default state
 * @returns
 */
export function createStore<T>(defaultState?: T): ObservableMap<T> {
  return createStencilStore<T>(defaultState);
}

export type StoriesStateType = {
  stories: StoryComponents,
  story: StoryComponent | undefined,
  zoom: number,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  addons: Record<string, Addon<AddonState>>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  actions: any[]
};

const store = createStore<StoriesStateType>({
  stories: {} as StoryComponents,
  story: undefined,
  zoom: 1.0,
  addons: {},
  actions: []
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
