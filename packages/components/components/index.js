/*!
 * (C) StoriesJS https://storiesjs.org - GPL-2.0 License
 */
import { setPlatformHelpers } from '@stencil/core/internal/client';
export { setAssetPath, setPlatformOptions } from '@stencil/core/internal/client';

/* eslint-disable @typescript-eslint/no-explicit-any */
const initialize = (userConfig = {}) => {
  if (typeof window === 'undefined') {
    return;
  }
  const platformHelpers = {};
  if (userConfig._ael) {
    platformHelpers.ael = userConfig._ael;
  }
  if (userConfig._rel) {
    platformHelpers.rel = userConfig._rel;
  }
  if (userConfig._ce) {
    platformHelpers.ce = userConfig._ce;
  }
  setPlatformHelpers(platformHelpers);
};

export { initialize };

//# sourceMappingURL=index.js.map