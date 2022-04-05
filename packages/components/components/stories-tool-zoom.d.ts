import type { Components, JSX } from "../dist/types/interface";

interface StoriesToolZoom extends Components.StoriesToolZoom, HTMLElement {}
export const StoriesToolZoom: {
  prototype: StoriesToolZoom;
  new (): StoriesToolZoom;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
