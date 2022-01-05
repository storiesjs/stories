/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { createStore } from "@stencil/store";
import type { StoryComponent, StoryComponents } from '@stories/stories-common';

export type StoriesStateType = {
  stories: StoryComponents,
  story: StoryComponent | undefined
};

const { state, onChange } = createStore<StoriesStateType>({
  stories: {} as StoryComponents,
  story: undefined
});

onChange('story', value => {
  console.log('*** store changed', value);
});

export default state;
