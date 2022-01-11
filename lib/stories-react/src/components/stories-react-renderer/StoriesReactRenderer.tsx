import React, { createElement } from "react";
import type { FC } from "react";

import type { StoryComponent, StoryContext } from ".";

export interface StoriesReactRendererProps {
    story?: StoryComponent;
    context?: StoryContext;
}

const EMPTY: JSX.Element = <></>;

export const StoriesReactRenderer: FC<StoriesReactRendererProps> = ({ story, context }) => {
    console.log('StoriesReactRenderer.render', story, context)
    if (story) {
        const Component  = story.storyFn;
        const args = (context && context.args) || story.args;
        return createElement(Component, args);
    }
    return EMPTY;
};
