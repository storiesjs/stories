import { FC, createElement } from "react";
import type { type } from '../stories-api';

export type StoryRendererProps = {
  story: type.StoryObject;
};

export const StoryRenderer: FC<StoryRendererProps> = ({ story }) => {
  const {decorators, parameters, storyContext } = story;

  const renderComponent = (parameters: type.Args | undefined) => {
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
