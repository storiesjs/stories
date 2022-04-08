/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Args, DecoratorFunction } from "@stories-js/core";

import type { ReactStoryFn, StoryContext, StoryComponent } from "./types";
import { rest } from "./utils";

/**
 * Currently StoryContextUpdates are allowed to have any key in the type.
 * However, you cannot overwrite any of the build-it "static" keys.
 *
 * @param inputContextUpdate StoryContextUpdate
 * @returns StoryContextUpdate
 */
export function sanitizeStoryContextUpdate(inputContextUpdate: any): any {
    return rest(inputContextUpdate, ["storyId", "kinds", "storyName", "storyFn", "component", "subcomponents", "decorators", "args", "argTypes"]);
}

export function decorateStory(
  storyFn: ReactStoryFn<Args>,
  decorator: DecoratorFunction,
  bindWithContext: (storyFn: ReactStoryFn<Args>) => any
): any {
  // Bind the partially decorated storyFn so that when it is called it always knows about the story context,
  // no matter what it is passed directly. This is because we cannot guarantee a decorator will
  // pass the context down to the next decorated story in the chain.
  const boundStoryFunction = bindWithContext(storyFn);

  return (context: StoryContext) => decorator(boundStoryFunction, context);
}

export function applyDecorators(storyFn: ReactStoryFn<Args>, decorators: DecoratorFunction[]): any {
    // We use a trick to avoid recreating the bound story function inside `decorateStory`.
    // Instead we pass it a context "getter", which is defined once (at "decoration time")
    // The getter reads a variable which is scoped to this call of `decorateStory`
    // (ie to this story), so there is no possibility of overlap.
    // This will break if you call the same story twice interleaved
    // (React might do it if you rendered the same story twice in the one ReactDom.render call, for instance)
    const contextStore: any = {};

    /**
    * When you call the story function inside a decorator, e.g.:
    *
    * ```jsx
    * <div>{storyFn({ foo: 'bar' })}</div>
    * ```
    *
    * This will override the `foo` property on the `innerContext`, which gets
    * merged in with the default context
    */
    const bindWithContext = (
        decoratedStoryFn: ReactStoryFn<Args>
    ): any => (context: StoryContext) => {
        // console.log('*** bindWithContext', context)
        contextStore.value = {
            ...contextStore.value,
            ...sanitizeStoryContextUpdate(context),
        };
        // console.log('*** contextStore.value', contextStore.value)
        return decoratedStoryFn(contextStore.value);
    };

    const decoratedWithContextStore = decorators.reduce(
        (story, decorator) => decorateStory(story as any, decorator, bindWithContext),
        storyFn
    ) as any;

    return (context: StoryContext) => {
        contextStore.value = context;
        return decoratedWithContextStore(context); // Pass the context directly into the first decorator
    };
}

export function executeFnStore(fn: Function): any {
    return (conext: StoryContext): any => {
        const result = fn(conext.args);
        // console.log('*** executeFnStore', conext.args, result);
        return result;
    }
}

export function executeFnDecor(fn: Function): any {
    return (comp: any, conext: StoryContext): any => {
        const result = fn(comp, conext);
        // console.log('*** executeFnDecor', comp, conext, result);
        return result;
    }
}

export type StoryUpdateFn = (context: StoryContext) => any;

export function prepareToRender (storyFn: ReactStoryFn<Args>, decorators: DecoratorFunction[]): StoryUpdateFn {
    const decorated = applyDecorators(
        executeFnStore(storyFn),
        decorators.map((decorator) => executeFnDecor(decorator))
    );
    return (context: StoryContext) => {
        // console.log('*** prepareToRender', context);
        return decorated(context);
    }
}

export function prepareStory(story: StoryComponent): any {
    const decorators = story.decorators || [];
    const storyFn  = story.storyFn;
    return prepareToRender(storyFn, decorators);
}