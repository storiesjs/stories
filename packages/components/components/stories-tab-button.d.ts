import type { Components, JSX } from "../dist/types/interface";

interface StoriesTabButton extends Components.StoriesTabButton, HTMLElement {}
export const StoriesTabButton: {
  prototype: StoriesTabButton;
  new (): StoriesTabButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
