import type { Components, JSX } from "../dist/types/interface";

interface StoriesInput extends Components.StoriesInput, HTMLElement {}
export const StoriesInput: {
  prototype: StoriesInput;
  new (): StoriesInput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
