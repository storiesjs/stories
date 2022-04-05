import type { Components, JSX } from "../dist/types/interface";

interface StoriesAddonControls extends Components.StoriesAddonControls, HTMLElement {}
export const StoriesAddonControls: {
  prototype: StoriesAddonControls;
  new (): StoriesAddonControls;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
