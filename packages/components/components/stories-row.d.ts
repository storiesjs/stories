import type { Components, JSX } from "../dist/types/interface";

interface StoriesRow extends Components.StoriesRow, HTMLElement {}
export const StoriesRow: {
  prototype: StoriesRow;
  new (): StoriesRow;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
