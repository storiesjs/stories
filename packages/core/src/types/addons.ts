/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/consistent-type-definitions */
import type { StoryComponent, StoryContext } from ".";

export type AddonState = any;

export type AddonTypes = "tab" | "panel" | "tool" | "preview" | "notes";

export type Addon = {
  id: string;
  el: HTMLElement | undefined;
  type: AddonTypes;
  title: (() => string) | string;
  storyContextChanged(story: StoryComponent, context: StoryContext): Promise<void>;
  paramKey?: string;
  state?: AddonState;
}

  // state: ObservableMap<AddonState>;
  // type?: Types;
  // route?: (routeOptions: RouterData) => string;
  // match?: (matchOptions: RouterData) => boolean;
  // render: (renderOptions: RenderOptions) => ReactElement<any>;
  
  // disabled?: boolean;
  // hidden?: boolean;
// };

export type AddonsManager = {
  registerAddon: (addon: Addon) => Promise<void>;
  unregisterAddon: (addon: Addon) => Promise<void>;
  findAddon: (id: string) => Promise<Addon>;
  storyContextChanged: (story: StoryComponent, context: StoryContext) => Promise <void>;
};

export type AddonsAPI = {
  registerAddon: (addon: Addon) => void,
  unregisterAddon: (addon: Addon) => void,
  getPanels: () => Record<string, Addon>;
  getTools: () => Record<string, Addon>;
  getStoryPanels: () => Record<string, Addon>;
  getSelectedPanel: () => string | undefined;
  setSelectedPanel: (name: string) => void;
  getAddonState: (addonId: string) => AddonState;
  setAddonState: (addonId: string, addonState: AddonState) => void;
};

export type AddonsState = {
  addons: Record<string, Addon>;
};