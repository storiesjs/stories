import { parseKind, sanitize, storyNameFromExport, toId } from "@componentdriven/csf";
import { Args, Meta, ModuleExports, Story, StoryObject, StoryObjects } from ".";

export function modulesToStories(modules: ModuleExports): StoryObjects {
    const result: StoryObjects = {};
    modules.forEach(moduleExport => {
        // const { default: meta, "__esModule": esModule, ...namedStories } = moduleExport;
        // if (esModule) {
        const { default: meta, ...namedStories } = moduleExport;
        if (meta) {
            const { title } = meta;
            const moduleId = sanitize(title);
            Object.keys(namedStories).forEach(key => {
                const namedStory = namedStories[key] as Story<Args>;
                const storyId = toId(moduleId, key);
                const exportName = storyNameFromExport(key);
                const storyName = namedStory.storyName ? namedStory.storyName : exportName;
                const storyKind = parseKind(meta.title, {rootSeparator: '/', groupSeparator: '/'})
                const story = prepareStoryForRenderer(storyId, storyName, storyKind, namedStory, meta);
                result[storyId] = story;
            });
        } else {
            console.error("Incorrect module because it doesnt have __esModule property.")
        }
    });

    return result;
}

function prepareStoryForRenderer(storyId: string, storyName: string, storyKind: any, namedStory: Story<Args>, meta: Meta<Args>): StoryObject {
    return {
        storyId,
        storyName,
        storyKind,
        decorators: [...(namedStory.decorators || [])],
        parameters: { ...namedStory.parameters },
        args: { ...namedStory.args },
        argTypes: { ...namedStory.argTypes },
        story: namedStory,
        storyContext: {
            id: storyId,
            name: storyName,
            kind: storyKind,
            parameters: { ...namedStory.parameters },
            args: { ...namedStory.args },
            argTypes: { ...namedStory.argTypes },
            globals: {},
            viewMode: "story", // "docs"
            // originalStoryFn?: (args, context) => namedStory({...args}, {...context});
        }
        // render,
        // ...(play && { play }),
    };
}
