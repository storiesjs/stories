import { parseKind, sanitize, storyNameFromExport, toId } from "@componentdriven/csf";

import type { StoryModules, StoryComponent, StoryComponents, Story, Meta } from ".";

export function modulesToStories(modules: StoryModules): StoryComponents {
    const result: StoryComponents = {};
    modules.forEach(mInst => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { default: meta = {}, "__esModule": esModule = undefined, ...stories } = mInst;
        if (stories) {
            const title = meta.title || '';
            const moduleId = sanitize(title);
            Object.keys(stories).forEach(key => {
                try {
                    const story = stories[key] as Story;
                    const storyId = toId(moduleId, key);
                    const storyExportName = storyNameFromExport(key);
                    const storyName = story.storyName || storyExportName;
                    const storyKind = parseKind(title, {rootSeparator: '/', groupSeparator: '/'})
                    const storyComponent = createStoryComponent(storyId, storyName, storyKind, story, meta/*, render, play*/);
                    result[storyId] = storyComponent;
                // eslint-disable-next-line no-empty
                } catch (e) {}
            });
        } else {
            console.error("Module doesnt have stories.")
        }
    });

    return result;
}

function createStoryComponent(storyId: string, storyName: string, storyKind: {root: string | null, groups: string[]}, story: Story, meta: Meta): StoryComponent {
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
