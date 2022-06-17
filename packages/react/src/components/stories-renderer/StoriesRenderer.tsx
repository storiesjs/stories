/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import type { FC } from "react";

import { prepareStory } from "./helpers";
import type { StoryComponent, StoryContext } from "./types";

export interface StrRendererProps {
    story?: StoryComponent;
    context?: StoryContext;
}

const EMPTY: JSX.Element = <></>;

export const StrRenderer: FC<StrRendererProps> = ({ story, context }): React.ReactElement => {
    if (story && context) {
        const decoratedStory = prepareStory(story);
        return decoratedStory(context || {});
    }
    return EMPTY;
};

