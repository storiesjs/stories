import type { Components, JSX } from "../dist/types/interface";

interface StoriesSidebar extends Components.StoriesSidebar, HTMLElement {}
export const StoriesSidebar: {
  prototype: StoriesSidebar;
  new (): StoriesSidebar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
