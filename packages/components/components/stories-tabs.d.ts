import type { Components, JSX } from "../dist/types/interface";

interface StoriesTabs extends Components.StoriesTabs, HTMLElement {}
export const StoriesTabs: {
  prototype: StoriesTabs;
  new (): StoriesTabs;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
