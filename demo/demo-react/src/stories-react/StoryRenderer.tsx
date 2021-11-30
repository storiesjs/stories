import React, { FC, createElement } from "react";
import type { Args, StoryObject } from './types';

export type StoryRendererProps = {
  story: StoryObject;
};

export const StoryRenderer: FC<StoryRendererProps> = ({ story }) => {
  const {decorators, parameters, storyContext } = story;

  const renderComponent = (parameters: Args | undefined) => {
      return createElement(story.story, {...parameters});
  };

  const renderDecorators = () => {
    if (decorators && decorators.length) {
      return decorators[0](() => renderComponent(parameters), storyContext);
    }
    return renderComponent(parameters);
  };

  return renderDecorators();
};
