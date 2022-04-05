import type { Components, JSX } from "../dist/types/interface";

interface StoriesBadge extends Components.StoriesBadge, HTMLElement {}
export const StoriesBadge: {
  prototype: StoriesBadge;
  new (): StoriesBadge;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
