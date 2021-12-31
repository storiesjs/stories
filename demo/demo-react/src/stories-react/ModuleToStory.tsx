import { csf, type } from "../stories-api";

export function modulesToStories(modules: type.ModuleExports): type.StoryObjects {
    const result: type.StoryObjects = {};
    modules.forEach(moduleExport => {
        const { default: meta, ...namedStories } = moduleExport;
        if (namedStories) {
            const { title } = meta;
            const moduleId = csf.sanitize(title);
            Object.keys(namedStories).forEach(key => {
                const namedStory = namedStories[key] as type.Story<type.Args>;
                const storyId = csf.toId(moduleId, key);
                const exportName = csf.storyNameFromExport(key);
                const storyName = namedStory.storyName ? namedStory.storyName : exportName;
                const storyKind = csf.parseKind(meta.title, {rootSeparator: '/', groupSeparator: '/'})
                const story = prepareStoryForRenderer(storyId, storyName, storyKind, namedStory, meta/*, render, play*/);
                result[storyId] = story;
            });
        } else {
            console.error("Incorrect module because it doesnt have named stories.")
        }
    });

    return result;
}

function prepareStoryForRenderer(storyId: string, storyName: string, storyKind: any, namedStory: type.Story<type.Args>, meta: type.Meta<type.Args>): type.StoryObject {
    return {
        storyId,
        storyName,
        storyKind,
        decorators: [...(meta.decorators || [])],
        parameters: { ...meta.parameters },
        args: { ...namedStory.args },
        argTypes: { ...namedStory.argTypes },
        story: namedStory,
        storyContext: {
            id: storyId,
            name: storyName,
            kind: storyKind,
            parameters: { ...meta.parameters },
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
