/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Args, DecoratorFunction } from "@stories/stories-common";
import React from "react";
import type { FC } from "react";

import type { ReactStoryFn, StoryComponent, StoryContext } from ".";


export interface StoriesReactRendererProps {
    story?: StoryComponent;
    context?: StoryContext;
}

const EMPTY: JSX.Element = <></>;

/**
 * Currently StoryContextUpdates are allowed to have any key in the type.
 * However, you cannot overwrite any of the build-it "static" keys.
 *
 * @param inputContextUpdate StoryContextUpdate
 * @returns StoryContextUpdate
 */
export function sanitizeStoryContextUpdate({
  componentId,
  title,
  kind,
  id,
  name,
  story,
  parameters,
  initialArgs,
  argTypes,
  ...update
}: any = {}): any {
  return update;
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
    ): any => (update: any) => {
        contextStore.value = {
            ...contextStore.value,
            ...sanitizeStoryContextUpdate(update),
        };
        return decoratedStoryFn(contextStore.value);
    };

    const decoratedWithContextStore = decorators.reduce(
        (story, decorator) => decorateStory(story as any, decorator, bindWithContext),
        storyFn
    );

    return (context: StoryContext) => {
        contextStore.value = context;
        return decoratedWithContextStore(context); // Pass the context directly into the first decorator
    };
}

// eslint-disable-next-line @typescript-eslint/ban-types
function executeFn(fn: Function): any {
    return (...args: any[]): any => {
        const result = fn(...args);
        return result;
    }
}

// eslint-disable-next-line @typescript-eslint/ban-types
function preparation(applyDecorators: any): any {
    return (storyFn: ReactStoryFn<Args>, decorators: DecoratorFunction[]) => {
        const decorated = applyDecorators(
            executeFn(storyFn),
            decorators.map((decorator) => executeFn(decorator))
        );
        return (context: StoryContext) => {
            const result = decorated(context);
            return result;
        }
    };
}

export const StoriesReactRenderer: FC<StoriesReactRendererProps> = ({ story, context }) => {
    console.log('StoriesReactRenderer.render', story, context)
    if (story) {
        const decorators = story.decorators;
        const storyFn  = story.storyFn;
        // const args = (context && context.args) || story.args;
        // return createElement(Component, args);
        const decoratedStoryFn = preparation(applyDecorators)(storyFn, decorators);

        return decoratedStoryFn(context);
    }
    return EMPTY;
};
