import type { Args, Meta as BesaMeta, Story as BaseStory, StoryFn, StoryComponent as BaseStoryComponent, StoryContext as BaseStoryContext } from "@stories/stories-components";
import type { ComponentType, ReactElement } from "react";

export type StoryFnReactReturnType = ReactElement<unknown>;

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type ReactFramework = {
  component: ComponentType<unknown>;
  storyResult: StoryFnReactReturnType;
};

/**
 * React story function
 */
export type ReactStoryFn<TArgs = Args> = StoryFn<ReactFramework, TArgs>;

/**
 * Metadata to configure the stories for a component.
 */
export type Meta<TArgs = Args> = BesaMeta<ReactFramework, TArgs>;

/**
 * Story function that represents a CSFv3 component example.
 */
export type Story<TArgs = Args> = BaseStory<ReactFramework, TArgs>;

/**
 * Story component for React Rendener 
 */
export type StoryComponent<TArgs = Args> = BaseStoryComponent<ReactFramework, TArgs>;

/**
 * Story context for React Rendener
 */
export type StoryContext<TArgs = Args> = BaseStoryContext<ReactFramework, TArgs>;