import type { Components, JSX } from "../dist/types/interface";

interface StoriesAddonActions extends Components.StoriesAddonActions, HTMLElement {}
export const StoriesAddonActions: {
  prototype: StoriesAddonActions;
  new (): StoriesAddonActions;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
