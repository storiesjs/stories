/* eslint-disable @typescript-eslint/no-explicit-any */
import { setPlatformHelpers } from '@stencil/core';

import type { StoriesConfig } from '../types';

export const initialize = (userConfig: StoriesConfig = {}): void => {
  if (typeof (window as any) === 'undefined') {
    return;
  }

  const platformHelpers: any = {};
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

export default initialize;
