import type { Components, JSX } from "../dist/types/interface";

interface StoriesPreview extends Components.StoriesPreview, HTMLElement {}
export const StoriesPreview: {
  prototype: StoriesPreview;
  new (): StoriesPreview;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
