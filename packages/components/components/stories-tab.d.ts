import type { Components, JSX } from "../dist/types/interface";

interface StoriesTab extends Components.StoriesTab, HTMLElement {}
export const StoriesTab: {
  prototype: StoriesTab;
  new (): StoriesTab;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
