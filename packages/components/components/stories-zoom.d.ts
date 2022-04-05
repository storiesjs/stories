import type { Components, JSX } from "../dist/types/interface";

interface StoriesZoom extends Components.StoriesZoom, HTMLElement {}
export const StoriesZoom: {
  prototype: StoriesZoom;
  new (): StoriesZoom;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
