import type { Components, JSX } from "../dist/types/interface";

interface StoriesSplitPane extends Components.StoriesSplitPane, HTMLElement {}
export const StoriesSplitPane: {
  prototype: StoriesSplitPane;
  new (): StoriesSplitPane;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
