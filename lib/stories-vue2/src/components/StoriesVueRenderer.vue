<script lang="ts">
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Vue, { ComponentOptions, RenderContext, VueConstructor } from "vue";
import { extractProps } from "./utils";
import { CreateElement } from "vue/types/umd";

import { DecoratorFunction, StoryComponent, StoryContext, StoryFn, StoryFnVueReturnType, LegacyStoryFn, VueFramework } from './types';

export const VALUES = "STORIES_VALUES";


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
  args,
  argTypes,
  ...update
}: any): any {
  return update;
}

function prepare(
  rawStory: StoryFnVueReturnType,
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

  // if (!(story as any)._isVue) {
    if (innerStory) {
      story.components = { ...(story.components || {}), story: innerStory };
    }
    story = Vue.extend(story);
  // }

  const opts = {
    [VALUES]: {
      ...(innerStory ? (innerStory as any).options[VALUES] : {}),
      ...extractProps(story),
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

/*

*/

export function decorateStory(
  storyFn: LegacyStoryFn<VueFramework>,
  decorators: DecoratorFunction<VueFramework>[]
): any {
  return decorators.reduce(
    (decorated: any, decorator) => 
      (context: StoryContext<VueFramework>) => {
        let story!: VueFramework['storyResult'];

        const decoratedStory: VueFramework['storyResult'] = decorator((update: any) => {
          story = decorated({ ...context, ...sanitizeStoryContextUpdate(update) });
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

const StoryVueRenderer = Vue.extend({
  name: "StoryVueRenderer",
  props: {
    story: Object,
  },
  render(h: CreateElement) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const story = (this as any).story as StoryComponent;
    console.log("StoryVueRenderer.story", story);
    if (story) {
      const storyFn: StoryFn = story.storyFn;
      const decorators: DecoratorFunction[] = story.decorators || [];
      const context: StoryContext = {
        args: story.args || {}, 
        argTypes: {},
        parameters: {},
        initialArgs: {}
      };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const r = decorateStory(storyFn, decorators) as any;
      const r1 = r(context);
      console.log("rendering", r, r1);
      return h(r1);
    }
    return h("div", "No story selected");
  },
});

export default StoryVueRenderer;
</script>