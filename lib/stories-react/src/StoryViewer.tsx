import React, { FC } from "react";
import { StoryRenderer } from "./StoryRenderer";

import * as MyStories from './My.stories';
import { useStory } from "./useStories";

export type StoryViewerProps = {
};

export const StoryViewer: FC<StoryViewerProps> = () => {
  console.log('MyStories', MyStories)
  const {meta, stories} = useStory(MyStories);
  const story = stories["Named"];

  console.log('meta', meta)
  console.log('stories', stories)

  if (meta) {
    return <StoryRenderer meta={meta} story={story}/>;
  }
  
  return null;
};