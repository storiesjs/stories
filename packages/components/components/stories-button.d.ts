import type { Components, JSX } from "../dist/types/interface";

interface StoriesButton extends Components.StoriesButton, HTMLElement {}
export const StoriesButton: {
  prototype: StoriesButton;
  new (): StoriesButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
