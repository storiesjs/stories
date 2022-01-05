import type { StoryComponent, Context } from "@stories/stories-common";
import React, { createElement } from "react";
import type { FC } from "react";

export interface StoriesReactRendererProps {
    story?: StoryComponent;
    context?: Context;
}

const EMPTY: JSX.Element = <></>;

type ReactStory = (context?: Context) => JSX.Element;

export const StoriesReactRenderer: FC<StoriesReactRendererProps> = ({ story, context }) => {
    console.log('render.StoriesReactRenderer')
    if (story) {
        const Component  = story.storyFn as ReactStory;
        return createElement(Component, context);
    }
    return EMPTY;
};
