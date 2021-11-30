import { parseKind, sanitize, storyNameFromExport, toId } from "@componentdriven/csf";
import React from "react";
import { Args, Meta, ModuleExports, Story, StoryObject, StoryObjects } from ".";

export function modulesToStories(modules: ModuleExports/*, render: (args: Args, context: StoryContext) => React.ReactElement, play?: () => void*/): StoryObjects {
    const result: StoryObjects = {};
    modules.forEach(moduleExport => {
        const { default: meta, "__esModule": esModule, ...namedStories } = moduleExport;
        if (esModule) {
            const { title } = meta;
            const moduleId = sanitize(title);
            Object.keys(namedStories).forEach(key => {
                const namedStory = namedStories[key] as Story<Args>;
                const storyId = toId(moduleId, key);
                const exportName = storyNameFromExport(key);
                const storyName = namedStory.storyName ? namedStory.storyName : exportName;
                const storyKind = parseKind(meta.title, {rootSeparator: '/', groupSeparator: '/'})
                const story = prepareStoryForRenderer(storyId, storyName, storyKind, namedStory, meta/*, render, play*/);
                result[storyId] = story;
            });
        } else {
            console.error("Incorrect module because it doesnt have __esModule property.")
        }
    });

    return result;
}

function prepareStoryForRenderer(storyId: string, storyName: string, storyKind: any, namedStory: Story<Args>, meta: Meta<Args>/*, render: (args: Args, context: StoryContext) => React.ReactElement, play?: () => void*/): StoryObject {
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

// export function modulesToStories2(modules: ModuleExports[]): Stories {
//     const result = {};
//     modules.forEach(moduleExports => {
//         if (moduleExports["__esModule"]) {
//             const { default: defaultExport, ...namedExports } = moduleExports;
//             const { id, title } = defaultExport;
//             const moduleId = sanitize(id || title);
//             // const meta: Meta<Args> = {
//             //     id: moduleI, 
//             //     ...defaultExport,
//             //     title,
//             //     ...argTypes,
//             //     parameters: {
//             //         fileName: importPath,
//             //         ...defaultExport.parameters,
//             //     },
//             // };

//             Object.keys(namedExports).forEach(key => {
//                 const namedExport = moduleExports[key];
//                 const storyId = toId(moduleId, key);
//                 const exportName = storyNameFromExport(key);
//                 const storyName = (typeof namedExport !== 'function' && namedExport.name) ||
//                     namedExport.storyName ||
//                     exportName;
//                 const story = normalizeStory(storyId, storyName, namedExport);
//                 console.log('THE story', story);
//                 result[storyId] = story;
//             });
//         } else {
//             console.error("Incorrect module because it doesnt have __esModule property.")
//         }
//     });
//     return result;
// }

// function normalizeStory(storyId: string, storyName: string, namedExport): Story<Args> {
//     const decorators = [...(namedExport.decorators || [])];
//     const parameters = { ...namedExport.parameters };
//     const args = { ...namedExport.args };
//     const argTypes = { ...namedExport.argTypes };
//     const { render, play } = namedExport;
//     const story: unknown = {
//         id: storyId,
//         name: storyName,
//         decorators,
//         parameters,
//         args,
//         argTypes: argTypes,
//         render: namedExport,
//         // ...(render && { render }),
//         ...(play && { play }),
//     };
//     return story as Story<Args>; 
// }
