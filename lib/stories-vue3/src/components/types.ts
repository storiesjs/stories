import type { 
    Args, 
    Meta as BesaMeta, 
    Story as BaseStory, 
    StoryFn as BaseStoryFn, 
    StoryComponent as BaseStoryComponent, 
    StoryContext as BaseStoryContext, 
    DecoratorFunction as BaseDecoratorFunction, 
    AnyFramework
} from "@stories/stories-components";
import { ConcreteComponent } from "vue";

export type StoryFnVueReturnType = ConcreteComponent<any>;

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type VueFramework = {
  component: ConcreteComponent;
  storyResult: StoryFnVueReturnType;
};

export type DecoratorFunction<
    TFramework extends AnyFramework = VueFramework,
    TArgs = Args
> = BaseDecoratorFunction<TFramework, TArgs>;

/**
 * React story function
 */
export type StoryFn<TArgs = Args> = BaseStoryFn<VueFramework, TArgs>;

/**
 * Metadata to configure the stories for a component.
 */
export type Meta<TArgs = Args> = BesaMeta<VueFramework, TArgs>;

/**
 * Story function that represents a CSFv3 component example.
 */
export type Story<TArgs = Args> = BaseStory<VueFramework, TArgs>;

/**
 * Story component for React Rendener 
 */
export type StoryComponent<TArgs = Args> = BaseStoryComponent<VueFramework, TArgs>;

/**
 * Story context for React Rendener
 */
export type StoryContext<TArgs = Args> = BaseStoryContext<VueFramework, TArgs>;


// This is a passArgsFirst: false user story function
export type LegacyStoryFn<TFramework extends AnyFramework = AnyFramework, TArgs = Args> = (
  context: StoryContext<TArgs>
) => TFramework['storyResult'];