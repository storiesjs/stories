<script lang="ts">
import { Context, StoryComponent, StoryFn } from "@stories/stories-common";
import Vue, { ComponentOptions, RenderContext, VueConstructor } from "vue";
import { extractProps } from "./utils";
import { CreateElement } from "vue/types/umd";

export const VALUES = "STORIES_VALUES";

type DecoratorFunction = (fn: Partial<StoryFn>, c: Context) => unknown;

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
  rawStory: StoryFn,
  innerStory?: VueConstructor
): VueConstructor | null {
  let story: ComponentOptions<Vue> | VueConstructor;

  if (typeof rawStory === "string") {
    story = { template: rawStory };
  } else if (rawStory != null) {
    story = rawStory as ComponentOptions<Vue>;
  } else {
    return null;
  }

  if (!(story as any)._isVue) {
    if (innerStory) {
      story.components = { ...(story.components || {}), story: innerStory };
    }
    story = Vue.extend(story);
  }

  const opts = {
    [VALUES]: {
      ...(innerStory ? (innerStory as any).options[VALUES] : {}),
      ...extractProps(story as VueConstructor),
    },
    functional: true,
    render(
      h: CreateElement,
      { data, parent, children }: RenderContext<Record<never, any>>
    ) {
      return h(
        story,
        {
          ...data,
          props: { ...(data.props || {}), ...(parent.$root as any)[VALUES] },
        },
        children
      );
    },
  };

  return Vue.extend(opts);
}

function decorateStory(storyFn: StoryFn, decorators: DecoratorFunction[]) {
  const callbackfn =
    (decorated: StoryFn, decorator: any) => (context: Context) => {
      let story;

      const decoratedStory = decorator((update: any) => {
        story = decorated({
          ...(context as any),
          ...sanitizeStoryContextUpdate(update),
        });
        return story;
      }, context);

      if (!story) {
        story = decorated(context);
      }

      if (decoratedStory === story) {
        return story;
      }

      return prepare(decoratedStory, story as VueConstructor);
    };

  return decorators.reduce(callbackfn, (context) =>
    prepare(storyFn(context) as StoryFn)
  );
}

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

export default StoryRenderer;
</script>