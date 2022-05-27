import type { StoryComponent, StoryContext } from ".";


export type Addon = {
  storyContextChanged(story: StoryComponent, context: StoryContext): Promise<void>;
}

export type AddonsAPI = {
  register: (addonId: string, addon: Addon) => void,
  unregister: (addonId: string) => void,
};

export type AddonsState = {
  addons: Record<string, Addon>;
};

export type AddonsManager = AddonsAPI & Addon & {
  find: (addonId: string) => Promise<Addon>;
};
