import type { Components, JSX } from "../dist/types/interface";

interface StoriesToolButton extends Components.StoriesToolButton, HTMLElement {}
export const StoriesToolButton: {
  prototype: StoriesToolButton;
  new (): StoriesToolButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
