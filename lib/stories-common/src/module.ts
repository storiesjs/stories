import { parseKind, sanitize, storyNameFromExport, toId } from "@componentdriven/csf";

import type { StoryModules, StoryComponent, StoryComponents, Story, Meta } from ".";

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
        decorators: meta.decorators,
        args: story.args || meta.args,
        argTypes: story.argTypes || meta.argTypes
    };
}

/**
 * Get first story in the record or undefined
 * @param stories Record of stories
 * @returns String with story ID or undefined
 */
export function getFirstStoryId(stories: StoryComponents): string | undefined {
    const keys = Object.keys(stories);
    return keys.length ? keys[0] : undefined;
}