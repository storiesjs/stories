import type { Components, JSX } from "../dist/types/interface";

interface StoriesAddons extends Components.StoriesAddons, HTMLElement {}
export const StoriesAddons: {
  prototype: StoriesAddons;
  new (): StoriesAddons;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
