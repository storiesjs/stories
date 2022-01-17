/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { createStore } from "@stencil/store";
import type { StoryComponent, StoryComponents } from '@stories/stories-common';

export type StoriesStateType = {
  stories: StoryComponents,
  story: StoryComponent | undefined,
  zoom: number,
};

export const store = createStore<StoriesStateType>({
  stories: {} as StoryComponents,
  story: undefined,
  zoom: 1.0,
});

export const state = store.state;
