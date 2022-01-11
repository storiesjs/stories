<script lang="ts">
import { Context, StoryComponent, StoryFn } from "@stories/stories-common";
import { ConcreteComponent, Component, ComponentOptions, defineComponent, h } from 'vue';
import { extractProps } from "./utils";
import { CreateElement } from "vue/types/umd";

export const VALUES = "STORIES_VALUES";

type DecoratorFunction = (fn: Partial<StoryFn>, c: Context) => unknown;

type VueStory = (context?: Context) => ConcreteComponent;

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
  rawStory: VueStory,
  innerStory?: ConcreteComponent
): Component | null {
  let story = rawStory as unknown as ComponentOptions;

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

function decorateStory(storyFn: VueStory, decorators: DecoratorFunction[]) {
  const callbackfn =
    (decorated: VueStory, decorator: any) => (context: Context) => {
      let story!: ConcreteComponent; //: VueFramework['storyResult'];

      const decoratedStory/*: VueFramework['storyResult']*/ = decorator((update: any) => {
        story = decorated({ ...(context as any), ...sanitizeStoryContextUpdate(update) });
        return story;
      }, context);

      if (!story) {
        story = decorated(context);
      }

      if (decoratedStory === story) {
        return story;
      }

      return prepare(decoratedStory, story); // as VueFramework['storyResult'];
    };

  return decorators.reduce(callbackfn as any, (context) =>
    prepare(storyFn(context) as VueStory)
  );
}

const StoryRenderer = defineComponent({
  name: "StoryRenderer",
  props: {
    story: Object,
  },
  render() {
    const _story = (this as any).story as StoryComponent;
    console.log("StoryRenderer_story", _story);
    if (_story) {
      const storyFn: VueStory = _story.storyFn as VueStory;
      const decorators: DecoratorFunction[] = []; //_story.decorators;
      const context: Context = {};
      const r = decorateStory(storyFn, decorators) as any;
      const r1 = r(context);
      console.log("rendering", r1);
      return h(r1);
    }
    return h("div", "No story selected");
  },
});

/*
const StoryRenderer = Vue.extend({
  name: "StoryRenderer",
  props: {
    story: Object,
  },
  render(h: any) {
    const _story = (this as any).story as StoryComponent;
    console.log("StoryRenderer_story", _story);
    if (_story) {
      const storyFn: StoryFn = _story.storyFn;
      const decorators: DecoratorFunction[] = []; //_story.decorators;
      const context: Context = {};
      const r = decorateStory(storyFn, decorators) as any;
      const r1 = r(context);
      console.log("rendering", r1);
      return h(r1);
    }
    return h("div", "No story selected");
  },
});
*/
export default StoryRenderer;
</script>