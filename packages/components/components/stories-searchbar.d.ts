import type { Components, JSX } from "../dist/types/interface";

interface StoriesSearchbar extends Components.StoriesSearchbar, HTMLElement {}
export const StoriesSearchbar: {
  prototype: StoriesSearchbar;
  new (): StoriesSearchbar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
