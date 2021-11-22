import type { Meta, StoryContext } from "./types";

export function getStoryProps(meta: Meta<any>) {
    const names = meta.title.split('/');
    const name = names.length ? names[0] : "";
    const kind = names.length > 0 ? names[1] : "";
    const id = `${kind}_${name}`;
    const storyContext: StoryContext = {
      name: name,
      kind: kind,
      id,
      parameters: meta.parameters || {},
      args: meta.args || {},
      argTypes: meta.argTypes || {},
      globals: {},
    };
    return {
        id,
        args: meta.args,
        decorators: meta.decorators, 
        storyContext
    };
}