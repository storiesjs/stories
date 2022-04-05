import type { Components, JSX } from "../dist/types/interface";

interface StoriesGrid extends Components.StoriesGrid, HTMLElement {}
export const StoriesGrid: {
  prototype: StoriesGrid;
  new (): StoriesGrid;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
