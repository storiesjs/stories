/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/consistent-type-definitions */
import type { ObservableMap } from "@stencil/store";
import { createStore as createStencilStore } from "@stencil/store";

import type { StoryComponents, StoriesState, NotificationsState, LayoutState, AddonsState } from '../types';

/**
 * Create store
 * @param defaultState Default state
 * @returns
 */
export function createStore<T>(defaultState?: T): ObservableMap<T> {
  return createStencilStore<T>(defaultState);
}

export type AppState = StoriesState & NotificationsState & LayoutState & AddonsState;

const store = createStore<AppState>({
  stories: {} as StoryComponents,
  story: undefined,
  context: undefined,
  notifications: [],
  zoom: 1.0,
  showNav: true,
  showToolbar: true,
  showPanel: true,
  fullScreen: false,
  panelPosition: 'bottom',
  singleStory: true,
  enableShortcuts: true,
  theme: '',
  selectedPanel: undefined,
  addons: {},
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
