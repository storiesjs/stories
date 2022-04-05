import type { Components, JSX } from "../dist/types/interface";

interface StoriesIcon extends Components.StoriesIcon, HTMLElement {}
export const StoriesIcon: {
  prototype: StoriesIcon;
  new (): StoriesIcon;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
