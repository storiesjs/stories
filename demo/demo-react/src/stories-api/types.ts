import { ReactElement, ComponentType } from 'react';

export declare class HooksContext {
}

export interface Args {
    [key: string]: any;
}

export type StoryFnReactReturnType = ReactElement<unknown>;

type ReactComponent = ComponentType<any>;
type ReactReturnType = StoryFnReactReturnType;
export type StoryId = string;
export type StoryKind = string;
export type StoryName = string;
export type StorySortMethod = 'configure' | 'alphabetical';
export type ArgsStoryFn<ReturnType = unknown> = (a?: Args, p?: StoryContext) => ReturnType;
export type BaseDecorators<StoryFnReturnType> = Array<(story: () => StoryFnReturnType, context: StoryContext) => StoryFnReturnType>;

export interface ArgType {
    name?: string;
    description?: string;
    defaultValue?: any;
    [key: string]: any;
}

export interface ArgTypes {
    [key: string]: ArgType;
}

interface BaseMeta<ComponentType> {
    /**
     * Title of the story which will be presented in the navigation. **Should be unique.**
     *
     * Stories can be organized in a nested structure using "/" as a separator.
     *
     * @example
     * export default {
     *   ...
     *   title: 'Design System/Atoms/Button'
     * }
     *
     * @see [Story Hierarchy](https://storybook.js.org/docs/basics/writing-stories/#story-hierarchy)
     */
    title: string;
    /**
     * The primary component for your story.
     *
     * Used by addons for automatic prop table generation and display of other component metadata.
     */
    component?: ComponentType;
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
    subcomponents?: Record<string, ComponentType>;
}

export interface StoryIdentifier {
    id: StoryId;
    kind: StoryKind;
    name: StoryName;
}

export interface StorySortObjectParameter {
    method?: StorySortMethod;
    order?: any[];
    locales?: string;
    includeNames?: boolean;
}

export type Comparator<T> = ((a: T, b: T) => boolean) | ((a: T, b: T) => number);

export type StorySortComparator = Comparator<[StoryId, any, Parameters, Parameters]>;
export type StorySortParameter = StorySortComparator | StorySortObjectParameter;
export type ViewMode = 'story' | 'docs';

export interface OptionsParameter extends Object {
    storySort?: StorySortParameter;
    theme?: {
        base: string;
        brandTitle?: string;
    };
    [key: string]: any;
}

export interface Parameters {
    fileName?: string;
    options?: OptionsParameter;
    /** The layout property defines basic styles added to the preview body where the story is rendered. If you pass 'none', no styles are applied. */
    layout?: 'centered' | 'fullscreen' | 'padded' | 'none';
    docsOnly?: boolean;
    [key: string]: any;
}

export type StoryContext = StoryIdentifier & {
    [key: string]: any;
    parameters: Parameters;
    args: Args;
    argTypes: ArgTypes;
    globals: Args;
    hooks?: HooksContext;
    viewMode?: ViewMode;
    originalStoryFn?: ArgsStoryFn;
};

interface BaseStory<Args, StoryFnReturnType> {
    (args: Args, context: StoryContext): StoryFnReturnType;
    /**
     * Stoory ID
     */
    id?: string;
    /**
     * Override the display name in the UI
     */
    storyName?: string;
}

export interface BaseAnnotations<Args, StoryFnReturnType> {
    /**
     * Dynamic data that are provided (and possibly updated by) Storybook and its addons.
     * @see [Arg story inputs](https://storybook.js.org/docs/react/api/csf#args-story-inputs)
     */
    args?: Partial<Args>;
    /**
     * ArgTypes encode basic metadata for args, such as `name`, `description`, `defaultValue` for an arg. These get automatically filled in by Storybook Docs.
     * @see [Control annotations](https://github.com/storybookjs/storybook/blob/91e9dee33faa8eff0b342a366845de7100415367/addons/controls/README.md#control-annotations)
     */
    argTypes?: ArgTypes;
    /**
     * Custom metadata for a story.
     * @see [Parameters](https://storybook.js.org/docs/basics/writing-stories/#parameters)
     */
    parameters?: Parameters;
    /**
     * Wrapper components or Storybook decorators that wrap a story.
     *
     * Decorators defined in Meta will be applied to every story variation.
     * @see [Decorators](https://storybook.js.org/docs/addons/introduction/#1-decorators)
     */
    decorators?: BaseDecorators<StoryFnReturnType>;
}

export interface Annotations<Args, StoryFnReturnType> extends BaseAnnotations<Args, StoryFnReturnType> {
    /**
     * Used to only include certain named exports as stories. Useful when you want to have non-story exports such as mock data or ignore a few stories.
     * @example
     * includeStories: ['SimpleStory', 'ComplexStory']
     * includeStories: /.*Story$/
     *
     * @see [Non-story exports](https://storybook.js.org/docs/formats/component-story-format/#non-story-exports)
     */
    includeStories?: string[] | RegExp;
    /**
     * Used to exclude certain named exports. Useful when you want to have non-story exports such as mock data or ignore a few stories.
     * @example
     * excludeStories: ['simpleData', 'complexData']
     * excludeStories: /.*Data$/
     *
     * @see [Non-story exports](https://storybook.js.org/docs/formats/component-story-format/#non-story-exports)
     */
    excludeStories?: string[] | RegExp;
}

/**
 * Metadata to configure the stories for a component.
 *
 * @see [Default export](https://storybook.js.org/docs/formats/component-story-format/#default-export)
 */
export type Meta<Args> = BaseMeta<ReactComponent> & Annotations<Args, ReactReturnType>;
/**
 * Story function that represents a component example.
 *
 * @see [Named Story exports](https://storybook.js.org/docs/formats/component-story-format/#named-story-exports)
 */
export type Story<Args> = BaseStory<Args, ReactReturnType> & Annotations<Args, ReactReturnType>;

export type Stories = Record<string, Story<Args>>;

export type DefaultModuleExport = {
    "default": Meta<Args>;
};

export type Names = "default" | "__esModule" | string;

export type NamedModuleExport = {
    [key: Names]: Meta<Args> | Story<Args>;
};

export type ModuleExport = DefaultModuleExport & NamedModuleExport;

export type ModuleExports = ModuleExport[];

export type StoryObject = {
    storyId: string;
    storyName: string;
    storyKind: any;
    decorators: BaseDecorators<StoryFnReactReturnType>,
    parameters: Parameters,
    args: Partial<Args>,
    argTypes: ArgTypes,
    story: Story<Args>,
    storyContext: StoryContext
};

export type StoryObjects = Record<string, StoryObject>;