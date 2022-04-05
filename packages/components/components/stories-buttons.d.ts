import type { Components, JSX } from "../dist/types/interface";

interface StoriesButtons extends Components.StoriesButtons, HTMLElement {}
export const StoriesButtons: {
  prototype: StoriesButtons;
  new (): StoriesButtons;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
