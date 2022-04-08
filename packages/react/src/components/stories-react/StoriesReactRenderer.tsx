/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import type { FC } from "react";

import { prepareStory } from "./helpers";
import type { StoryComponent, StoryContext } from "./types";

export interface StoriesReactRendererProps {
    story?: StoryComponent;
    context?: StoryContext;
}

const EMPTY: JSX.Element = <></>;

export const StoriesReactRenderer: FC<StoriesReactRendererProps> = ({ story, context }): React.ReactElement => {
    if (story && context) {
        const decoratedStory = prepareStory(story);
        return decoratedStory(context || {});
    }
    return EMPTY;
};

