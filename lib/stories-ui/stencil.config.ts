/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable import/order */
import { Config } from '@stencil/core';
import { reactOutputTarget as react } from '@stencil/react-output-target';
import { angularOutputTarget as angular } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'stories-ui',
  outputTargets: [
    react({
      componentCorePackage: '@stories/stories-ui',
      proxiesFile: '../stories-react/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
    }),
    angular({
      componentCorePackage: '@stories/stories-ui',
      directivesProxyFile: '../stories-angular/src/lib/stencil-generated/components.ts'
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
  ],
};
