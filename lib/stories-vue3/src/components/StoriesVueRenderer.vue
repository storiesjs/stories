<script lang="ts">
import { ConcreteComponent, Component, ComponentOptions, defineComponent, h } from 'vue';

import { DecoratorFunction, StoryComponent, StoryContext, StoryFn, StoryFnVueReturnType, LegacyStoryFn, VueFramework } from './types';

export const VALUES = "STORIES_VALUES";

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
}: any): any {
  return update;
}

function prepare(
  rawStory: StoryFnVueReturnType,
  innerStory?: ConcreteComponent
): Component | null {
  let story = rawStory as ComponentOptions;

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
      let story!: StoryFnVueReturnType;

      const decoratedStory: StoryFnVueReturnType = decorator((update: any) => {
        story = decorated({ ...(context as any), ...sanitizeStoryContextUpdate(update) });
        return story;
      }, context);

      if (!story) {
        story = decorated(context);
      }

      if (decoratedStory === story) {
        return story;
      }

      return prepare(decoratedStory, story) as StoryFnVueReturnType;
    }, 
    (context) => prepare(storyFn(context) as StoryFnVueReturnType)
  );
}

const StoryVueRenderer = defineComponent({
  name: "StoryVueRenderer",
  props: {
    story: Object,
  },
  render() {
    const story = (this as any).story as StoryComponent;
    console.log("StoryVueRenderer.story", story);
    if (story) {
      const storyFn: StoryFn = story.storyFn;
      const decorators: DecoratorFunction[] = story.decorators || [];
      const context: StoryContext = {
        args: story.args || {}, 
        argTypes: {}
      };
      const r = decorateStory(storyFn, decorators) as any;
      const r1 = r(context);
      console.log("rendering", r1);
      return h(r1);
    }
    return h("div", "No story selected");
  },
});

export default StoryVueRenderer;
</script>