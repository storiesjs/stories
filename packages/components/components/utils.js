/*!
 * (C) StoriesJS https://storiesjs.org - GPL-2.0 License
 */
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'stories-color': true, [`stories-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SIZE_TO_MEDIA = {
  'xs': '(min-width: 0px)',
  'sm': '(min-width: 576px)',
  'md': '(min-width: 768px)',
  'lg': '(min-width: 992px)',
  'xl': '(min-width: 1200px)',
};
// Check if the window matches the media query
// at the breakpoint passed
// e.g. matchBreakpoint('sm') => true if screen width exceeds 576px
const matchBreakpoint = (breakpoint) => {
  if (breakpoint === undefined || breakpoint === '') {
    return true;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (window.matchMedia) {
    const mediaQuery = SIZE_TO_MEDIA[breakpoint];
    return window.matchMedia(mediaQuery).matches;
  }
  return false;
};

export { createColorClasses as c, hostContext as h, matchBreakpoint as m };

//# sourceMappingURL=utils.js.map