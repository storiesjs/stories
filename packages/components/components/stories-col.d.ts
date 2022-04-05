import type { Components, JSX } from "../dist/types/interface";

interface StoriesCol extends Components.StoriesCol, HTMLElement {}
export const StoriesCol: {
  prototype: StoriesCol;
  new (): StoriesCol;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
