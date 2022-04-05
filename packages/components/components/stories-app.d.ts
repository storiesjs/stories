import type { Components, JSX } from "../dist/types/interface";

interface StoriesApp extends Components.StoriesApp, HTMLElement {}
export const StoriesApp: {
  prototype: StoriesApp;
  new (): StoriesApp;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
