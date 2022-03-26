import type { Addon } from "..";

export function ensurePanel(panels: Record<string, Addon>, selectedPanel?: string, currentPanel?: string): string | undefined {
  const keys = Object.keys(panels);

  if (selectedPanel && keys.indexOf(selectedPanel) >= 0) {
    return selectedPanel;
  }

  if (keys.length) {
    return keys[0];
  }
  return currentPanel;
}
