import type { Components, JSX } from "../dist/types/interface";

interface StoriesToolBar extends Components.StoriesToolBar, HTMLElement {}
export const StoriesToolBar: {
  prototype: StoriesToolBar;
  new (): StoriesToolBar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
