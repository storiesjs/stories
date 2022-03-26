/* eslint-disable @typescript-eslint/consistent-type-definitions */
import type { Args, Meta as BesaMeta, Story as BaseStory, StoryFn, StoryComponent as BaseStoryComponent, StoryContext as BaseStoryContext } from "@stories-js/stories-components";

export { StoryComponents } from "@stories-js/stories-components";

export type NgModuleMetadata = {
  declarations?: unknown[];
  entryComponents?: unknown[];
  imports?: unknown[];
  schemas?: unknown[];
  providers?: unknown[];
}

export type ICollection = Record<string, unknown>;


export type StoryFnAngularReturnType = {
  props?: ICollection;
  moduleMetadata?: NgModuleMetadata;
  template?: string;
  styles?: string[];
  userDefinedTemplate?: boolean;
};

export type AngularFramework = {
  component: unknown;
  storyResult: StoryFnAngularReturnType;
};

/**
 * Angular story function
 */
export type AngularStoryFn<TArgs = Args> = StoryFn<AngularFramework, TArgs>;

/**
 * Metadata to configure the stories for a component.
 */
export type Meta<TArgs = Args> = BesaMeta<AngularFramework, TArgs>;

/**
 * Story function that represents a CSFv3 component example.
 */
export type Story<TArgs = Args> = BaseStory<AngularFramework, TArgs>; // & JSX.IntrinsicElements | JSXElementConstructor<any>;

/**
 * Story component for Angular Rendener
 */
export type StoryComponent<TArgs = Args> = BaseStoryComponent<AngularFramework, TArgs>;

/**
 * Story context for Angular Rendener
 */
export type StoryContext<TArgs = Args> = BaseStoryContext<AngularFramework, TArgs>;
