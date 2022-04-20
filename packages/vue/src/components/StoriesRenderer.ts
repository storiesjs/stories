/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ConcreteComponent, Component, ComponentOptions, defineComponent, h } from 'vue';

import { DecoratorFunction, StoryComponent, StoryContext, StoryFn, StoryFnVueReturnType, LegacyStoryFn, VueFramework } from './types';
import { rest } from './utils';

export const VALUES = "STR_VALUES";

/*
  This normalizes a functional component into a render method in ComponentOptions.

  The concept is taken from Vue 3's `defineComponent` but changed from creating a `setup`
  method on the ComponentOptions so end-users don't need to specify a "thunk" as a decorator.
 */
function normalizeFunctionalComponent(options: ConcreteComponent): ComponentOptions {
  return typeof options === 'function' ? { render: options, name: options.name } : options;
}

/**
 * Currently StoryContextUpdates are allowed to have any key in the type.
 * However, you cannot overwrite any of the build-it "static" keys.
 *
 * @param inputContextUpdate StoryContextUpdate
 * @returns StoryContextUpdate
 */
export function sanitizeStoryContextUpdate(inputContextUpdate: any): any {
  return rest(inputContextUpdate, ["componentId", "title", "kind", "id", "name", "story", "parameters", "initialArgs", "argTypes"]);
}

function prepare(
  rawStory: StoryFnVueReturnType,
  innerStory?: ConcreteComponent
): Component | null {
  const story = rawStory as ComponentOptions;

  if (story == null) {
    return null;
  }

  if (innerStory) {
    return {
      // Normalize so we can always spread an object
      ...normalizeFunctionalComponent(story),
      components: { ...(story.components || {}), story: innerStory },
    };
  }

  return {
    render() {
      return h(story);
    },
  };
}

function decorateStory(
  storyFn: LegacyStoryFn<VueFramework>, 
  decorators: DecoratorFunction<VueFramework>[]
) {
  return decorators.reduce(
    (decorated: any, decorator: any) => 
      (context: StoryContext<VueFramework>) => {
      let story!: VueFramework['storyResult'];

      const decoratedStory: VueFramework['storyResult'] = decorator((update: any) => {
        story = decorated({ ...(context as any), ...sanitizeStoryContextUpdate(update) });
        return story;
      }, context);

      if (!story) {
        story = decorated(context);
      }

      if (decoratedStory === story) {
        return story;
      }

      return prepare(decoratedStory, story as any);
    }, 
    (context: any) => prepare(storyFn(context))
  );
}

export const StrRenderer = defineComponent({
  name: "str-renderer",
  props: {
    story: Object,
  },
  render() {
    const story = (this as any).story as StoryComponent;
    console.log("StrRenderer.story", story);
    if (story) {
      const storyFn: StoryFn = story.storyFn;
      const decorators: DecoratorFunction[] = story.decorators || [];
      const context: StoryContext = {
        args: story.args || {}, 
        argTypes: {},
        parameters: {},
        initialArgs: {}
      };
      const r = decorateStory(storyFn, decorators) as any;
      const r1 = r(context);
      console.log("rendering", r1);
      return h(r1);
    }
    return h("div", "No story selected");
  },
});