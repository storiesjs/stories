import type { Components, JSX } from "../dist/types/interface";

interface StoriesRouter extends Components.StoriesRouter, HTMLElement {}
export const StoriesRouter: {
  prototype: StoriesRouter;
  new (): StoriesRouter;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
