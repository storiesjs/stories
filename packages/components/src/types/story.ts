/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/consistent-type-definitions */
// **** COMMON Types

/**
 * Name of the story
 */
export type StoryName = string;
/**
 * Component title
 */
export type ComponentTitle = string;

// **** PARAMETERS

export type Parameters = Record<string, any>;

// **** ARGUMENTS 

/**
 * Arg type for addons
 */
export type ArgType = {
  name?: string;
  description?: string;
  defaultValue?: any;
  type?: any;
  [key: string]: any;
}

/**
 * Agruments
 */
export type Args = Record<string, any>;
/**
 * Argument types
 */
export type ArgTypes<TArgs = Args> = { [name in keyof TArgs]: ArgType };

// **** FRAMEWORK

export type StoryFnReturnType = any;

/**
 * Definition of any framework
 */
export type AnyFramework = { component: any; storyResult: StoryFnReturnType };

// **** Context and StoryFn

/**
 * Update context of the story
 */
export type StoryUpdate<
  TArgs = Args
> = {
  args: TArgs;
  argTypes: ArgTypes<TArgs>;
  parameters: Parameters;
  initialArgs: Args;
};

/**
 * Execution context of the story
 */
export type StoryContext<
  TFramework extends AnyFramework = AnyFramework,
  TArgs = Args
> = {
  component?: TFramework['component'];
  subcomponents?: Record<string, TFramework['component']>;
} & StoryUpdate<TArgs>;

/**
 * Story function with arguments and context calling from decorators
 */
export type ArgsStoryFn<
  TFramework extends AnyFramework = AnyFramework, 
  TArgs = Args
> = (
  args: TArgs,
  context: StoryContext<TFramework, TArgs>
) => TFramework['storyResult'];

// **** DECORATORs

/**
 * Decorator function
 */
export type DecoratorFunction<
  TFramework extends AnyFramework = AnyFramework, 
  TArgs = Args
> = (
  storyFn: ArgsStoryFn<TFramework, TArgs>,
  context: StoryContext<TFramework, TArgs>
) => TFramework['storyResult'];

// **** COMPONENT and STORY ANNOTATIONS

/**
 * Component annotations
 */
export type ComponentAnnotations<
  TFramework extends AnyFramework = AnyFramework,
  TArgs = Args
> = {
  /**
   * Title of the component which will be presented in the navigation. **Should be unique.**
   *
   * Components can be organized in a nested structure using "/" as a separator.
   *
   * This property is optional
   *
   * @example
   * export default {
   *   ...
   *   title: 'Design System/Atoms/Button'
   * }
   */
  title?: ComponentTitle;

  /**
   * The primary component for your story.
   *
   * Used by addons for automatic prop table generation and display of other component metadata.
   */
  component?: TFramework['component'];

  /**
   * Auxiliary subcomponents that are part of the stories.
   *
   * Used by addons for automatic prop table generation and display of other component metadata.
   *
   * @example
   * import { Button, ButtonGroup } from './components';
   *
   * export default {
   *   ...
   *   subcomponents: { Button, ButtonGroup }
   * }
   *
   * By defining them each component will have its tab in the args table.
   */
  subcomponents?: Record<string, TFramework['component']>;

  /**
   * Wrapper components that wrap a story.
   *
   * Decorators defined in Meta will be applied to every story variation.
   */
  decorators?: Array<DecoratorFunction<TFramework, Args>>;

  /**
   * Dynamic data that are provided (and possibly updated by) Stories and its addons.
   */
  args?: Partial<TArgs>;

  /**
   * ArgTypes encode basic metadata for args, such as `name`, `description`, `defaultValue` for an arg. These get automatically filled in by Stories Docs.
   */
  argTypes?: Partial<ArgTypes<TArgs>>;

  /**
   * Custom metadata for a componrnt.
   */
  parameters?: Parameters;
};

/**
 * Story annotations
 */
export type StoryAnnotations<
  TFramework extends AnyFramework = AnyFramework,
  TArgs = Args
> = {
  /**
   * Override the display name in the UI
   */
  storyName?: StoryName;

  /**
   * Wrapper components that wrap a story.
   *
   * Decorators defined in Meta will be applied to every story variation.
   */
  decorators?: Array<DecoratorFunction<TFramework, Args>>;


  /**
   * Dynamic data that are provided (and possibly updated by) Stories and its addons.
   */
  args?: Partial<TArgs>;

  /**
   * ArgTypes encode basic metadata for args, such as `name`, `description`, `defaultValue` for an arg. 
   * These get automatically filled in by Stories Docs.
   */
  argTypes?: Partial<ArgTypes<TArgs>>;

  /**
   * Custom metadata for a story.
   */
  parameters?: Parameters;
};

// **** STORY and META

/**
 * Universal story function
 */
export type StoryFn<
  TFramework extends AnyFramework = AnyFramework, 
  TArgs = Args
> = (
  args?: TArgs
) => TFramework['storyResult'];

/**
 * The structure to define story with annotations
 */
export type Story<
    TFramework extends AnyFramework = AnyFramework,
    TArgs = Args
> = 
    StoryFn<TFramework, TArgs> & 
    StoryAnnotations<TFramework, TArgs>;

/**
 * Metadata to configure the stories for a component.
 */
export type Meta<
    TFramework extends AnyFramework = AnyFramework,
    TArgs = Args
> = ComponentAnnotations<TFramework, TArgs>;

// **** STORY MODULES

export type StoryModule = {
  "default"?: Meta;
  "__esModule"?: boolean;
  [k: string]: Story | any;
}
// Default & EsModule & NamedStory;

export type StoryModules = StoryModule[];

// **** STORY COMPONENT

export type StoryComponent<
  TFramework extends AnyFramework = AnyFramework,
  TArgs = Args
> = {
  storyId: string;
  kinds: string[];
  storyName: string;
  storyFn: StoryFn<TFramework, Args>;
  component?: TFramework['component'];
  subcomponents?: Record<string, TFramework['component']>;
  decorators?: Array<DecoratorFunction<TFramework, Args>>;
  args: Partial<TArgs>;
  argTypes: Partial<ArgTypes<TArgs>>;
  parameters?: Parameters;
}

export type StoryComponents = Record<string, StoryComponent>;

export type StoriesAPI = {
  setStories: (modules: StoryModules) => void;
  getStoryIdFromURL: () => string | undefined;
  setStoryIdInURL: (storyId: string | undefined) => void;
  selectFirstStory: () => void;
  selectStory: ( storyId: string | undefined ) => void;
  updateStoryArgs: (story: StoryComponent, context: StoryContext, newArgs: Args) => void;
  resetStoryArgs: (story: StoryComponent, context: StoryContext, argNames?: string[]) => void;
  updateStory: (story: StoryComponent, update: StoryUpdate) => void;
};

export type StoriesState = {
  stories: StoryComponents,
  story: StoryComponent | undefined,
  context: StoryContext | undefined,
};