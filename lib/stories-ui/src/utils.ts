import type { Color, CssClassMap } from "./types";

export const createColorClasses = (color: Color | undefined | null, cssClassMap: CssClassMap): CssClassMap => {
  return (typeof color === 'string' && color.length > 0) ? {
    'stories-color': true,
    [`stories-color-${color}`]: true,
    ...cssClassMap
  } : cssClassMap;
};
