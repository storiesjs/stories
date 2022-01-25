import type { Addon, AddonState, Color, CssClassMap } from "./types";

export const hostContext = (selector: string, el: HTMLElement): boolean => {
  return el.closest(selector) !== null;
};

export const findElement = (selector: string, el: HTMLElement): HTMLElement | null => {
  return el.closest(selector);
};

export const createColorClasses = (color: Color | undefined | null, cssClassMap: CssClassMap): CssClassMap => {
  return (typeof color === 'string' && color.length > 0) ? {
    'stories-color': true,
    [`stories-color-${color}`]: true,
    ...cssClassMap
  } : cssClassMap;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const SIZE_TO_MEDIA: any = {
  'xs': '(min-width: 0px)',
  'sm': '(min-width: 576px)',
  'md': '(min-width: 768px)',
  'lg': '(min-width: 992px)',
  'xl': '(min-width: 1200px)',
};

// Check if the window matches the media query
// at the breakpoint passed
// e.g. matchBreakpoint('sm') => true if screen width exceeds 576px
export const matchBreakpoint = (breakpoint: string | undefined): boolean => {
  if (breakpoint === undefined || breakpoint === '') {
    return true;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if ((window as any).matchMedia) {
    const mediaQuery = SIZE_TO_MEDIA[breakpoint];
    return window.matchMedia(mediaQuery).matches;
  }
  return false;
};

const SCHEME = /^[a-z][a-z0-9+\-.]*:/;

export const openURL = async (url: string | undefined | null): Promise<boolean> => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    // TODO: organise navigation
    return Promise.resolve(true)
  }
  return false;
};

/*** ADDONS ***/

export async function registerAddon(addon: Addon<AddonState>, defaultState?: AddonState): Promise<void> {
  // Find AddonManager
  const addonsManager: HTMLStoriesAddonsElement = addon.el.closest("stories-addons");
  if (!addonsManager) {
    throw Error("Cannot find stories-addons. Please add it to your application")
  }
  // Register addon with addon ID
  addonsManager.registerAddon(addon, defaultState);
}

export async function findAddon(el: HTMLElement, id: string): Promise<Addon<AddonState>> {
  // Find AddonManager
  const addonsManager: HTMLStoriesAddonsElement = el.closest("stories-addons");
  if (!addonsManager) {
    throw Error("Cannot find stories-addons. Please add it to your application")
  }

  return addonsManager.findAddon(id);
}
