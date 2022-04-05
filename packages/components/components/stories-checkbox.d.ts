import type { Components, JSX } from "../dist/types/interface";

interface StoriesCheckbox extends Components.StoriesCheckbox, HTMLElement {}
export const StoriesCheckbox: {
  prototype: StoriesCheckbox;
  new (): StoriesCheckbox;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
