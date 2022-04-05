import type { Components, JSX } from "../dist/types/interface";

interface StoriesLabel extends Components.StoriesLabel, HTMLElement {}
export const StoriesLabel: {
  prototype: StoriesLabel;
  new (): StoriesLabel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
