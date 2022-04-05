import type { Components, JSX } from "../dist/types/interface";

interface StoriesTabBar extends Components.StoriesTabBar, HTMLElement {}
export const StoriesTabBar: {
  prototype: StoriesTabBar;
  new (): StoriesTabBar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
