import type { Components, JSX } from "../dist/types/interface";

interface StoriesFooter extends Components.StoriesFooter, HTMLElement {}
export const StoriesFooter: {
  prototype: StoriesFooter;
  new (): StoriesFooter;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
