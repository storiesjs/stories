import React, { FC, createElement } from "react";
import type { Args, Meta, Story } from './types';
import { getStoryProps } from "./utils";

export type StoryRendererProps = {
  meta: Meta<Args>;
  story?: Story<any>;
};

export const StoryRenderer: FC<StoryRendererProps> = ({ meta, story }) => {
  const {storyContext, decorators, id, args} = getStoryProps(meta);

  const renderComponent = (id: string, args: Args | undefined) => {
      return createElement(story as Story<any>, {...args, id});
  };

  const renderDecorators = () => {
    if (story) {
      if (decorators && decorators.length) {
        return decorators[0](() => renderComponent(id, args), storyContext);
      }
      return renderComponent(id, args);
    }
    return null;
  };

  return renderDecorators();
};
