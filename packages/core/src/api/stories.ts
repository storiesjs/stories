import { parseKind, sanitize, storyNameFromExport, toId } from "@componentdriven/csf";
import deepmerge from 'deepmerge';

import { state } from '../store';
import type { StoriesAPI, StoryModules, Story, Meta, StoryComponent, StoryComponents, StoryContext, Args, StoryUpdate } from "../types";

/**
 * Convert [modules](StoryModules) into [stories](StoryComponents)
 * @param modules StoryModules
 * @returns StoryComponents
 */
export function modulesToStories(modules: StoryModules): StoryComponents {
    const result: StoryComponents = {};
    modules.forEach(mInst => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { default: meta = {}, "__esModule": esModule = undefined, ...stories } = mInst;
        if (stories) {
            const title = meta.title || '';
            Object.keys(stories).forEach(key => {
                try {
                    const story = stories[key] as Story;
                    const { storyId, storyName, storyKind} = prepareStoryProperties(key, story.storyName, title)
                    const storyComponent = createStoryComponent(storyId, storyName, storyKind, story, meta);
                    result[storyId] = storyComponent;
                // eslint-disable-next-line no-empty
                } catch (e) {}
            });
        }
    });

    return result;
}

/**
 * Convert input parameters to properties of story
 * @param storyKey Named export
 * @param name StoryName
 * @param title Title from Meta
 * @returns Object with following props:
 * {
 *  moduleId: string,
 *  storyId: string,
 *  storyExportName: string,
 *  storyName: string,
 *  storyKind: {root: string | null, groups: string[]
 * }
 */
export function prepareStoryProperties(storyKey: string, name: string | undefined, title: string): {moduleId: string, storyId: string, storyExportName: string, storyName: string, storyKind: {root: string | null, groups: string[] }} {
    const kind =  title || name || storyKey;
    const storyKind = parseKind(kind, { rootSeparator: '/', groupSeparator: '/' });
    const countedKind = [storyKind.root, ...storyKind.groups].filter(value => !!value).join('-')
    const moduleId = sanitize(countedKind);

    const storyExportName = storyNameFromExport(storyKey);
    const storyName = name || storyExportName;

    const storyId = toId(moduleId, storyName);

    return { moduleId, storyId, storyExportName, storyName, storyKind};
}

/**
 * Create instance of [StoryComponent](StoryComponent)
 * @param storyId Story ID
 * @param storyName Story name
 * @param storyKind Story kind
 * @param story The story itself
 * @param meta The Meta
 * @returns The StoryComponent
 */
export function createStoryComponent(storyId: string, storyName: string, storyKind: { root: string | null, groups: string[] }, story: Story, meta: Meta): StoryComponent {
    return {
        storyId,
        kinds: storyKind.groups,
        storyName,
        storyFn: story,
        component: meta.component,
        subcomponents: meta.subcomponents,
        // Merging arrays of decorators from meta and story by concatenating them.
        decorators: deepmerge(meta.decorators || [], story.decorators || []),
        // Merge args from two objects story and meta deeply, returning a new merged object with the elements from both story and meta.
        // If an element at the same key is present for both story and meta, the value from story will appear in the result.
        // Merging creates a new object, so that neither story or meta is modified.
        args: deepmerge<Args>(meta.args || {}, story.args || {}),
        argTypes: deepmerge<Args>(meta.argTypes || {}, story.argTypes || {}),
        // Merge parameters from two objects story and meta deeply, returning a new merged object with the elements from both story and meta.
        // If an element at the same key is present for both story and meta, the value from story will appear in the result.
        // Merging creates a new object, so that neither story or meta is modified.
        parameters: deepmerge<Args>(meta.parameters || {}, story.parameters || {}),
    };
}

/**
 * Found the storyId from the URL's hash as defined in the following format:
 *  #path=storiId
 *
 * @returns The storyId or undefined
 */
// export function getStoryIdFromURL(): string | undefined {
//     const hash = window.location.hash;
//     const match = /#.*path=(?<path>[^&]+)/.exec(hash || "");
//     return match?.groups?.path;
// }

/**
 * Set story Id on URL's hash as following:
 *  #path=storiId
 *
 * @param storyId The storyId
 */
// export function setStoryIdInURL(storyId: string | undefined): void {
//     window.location.hash = `#path=${storyId ? storyId : ''}`;
// }


export const storiesAPI: StoriesAPI = {
  setStories(modules: StoryModules): void {
    state.stories = modulesToStories(modules);
  },
  getStoryIdFromURL(): string | undefined {
    const hash = window.location.hash;
    const match = /#.*path=(?<path>[^&]+)/.exec(hash || "");
    return match?.groups?.path;
  },
  setStoryIdInURL(storyId: string | undefined): void {
    window.location.hash = `#path=${storyId ? storyId : ''}`;
  },
  selectFirstStory(): void {
    const keys = Object.keys(state.stories);
    const storyId = keys.length ? keys[0] : undefined;
    storiesAPI.setStoryIdInURL(storyId);
  },
  selectStory(storyId: string | undefined): void {
    if (storyId && state.stories[storyId]) {
      storiesAPI.setStoryIdInURL(storyId);
    } else {
      storiesAPI.selectFirstStory();
    }
  },
  updateStoryArgs(story: StoryComponent, context: StoryContext, newArgs: Args): void {
    story.args = context.args = newArgs;
  },
  resetStoryArgs(story: StoryComponent, context: StoryContext, argNames?: string[]): void {
    if (argNames && argNames.length) {
      argNames.forEach(argName => {
        story.args[argName] = context.initialArgs[argName];
      });
    } else {
      story.args = {...context.initialArgs};
    }
  },
  updateStory(story: StoryComponent, update: StoryUpdate): void {
    story.args = {...update.args};
    story.argTypes = {...update.argTypes};
    story.parameters = {...update.parameters};
  }
};
