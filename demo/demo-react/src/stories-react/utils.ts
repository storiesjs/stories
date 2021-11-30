import type { Args, Story, StoryContext } from "./types";

// export function getStoryProps(story: StoryObject) {
//     const storyContext: StoryContext = {
//       id: story.id,
//       name: story.name,
//       kind: "",
//       parameters: story.parameters || {},
//       args: story.args || {},
//       argTypes: story.argTypes || {},
//       globals: {},
//     };
//     return {
//         id: story.id,
//         args: story.args,
//         decorators: story.decorators, 
//         storyContext
//     };
// }

// export function getStoryContext(story: Story<Args>): StoryContext {
//   return {
//     id: story["id"],
//     kind: story.name,
//     name: story.name,
//     parameters: story.parameters || {},
//     args: story.args || {},
//     argTypes: story.argTypes || {},
//     globals: {},
//   };
// }