/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable import/order */
import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { reactOutputTarget as react } from '@stencil/react-output-target';
import { angularOutputTarget as angular } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'stories-components',
  testing: {
    rootDir: __dirname,
    testPathIgnorePatterns: [
      "node_modules",
      "loader",
      "dist"
    ],
  },
  plugins: [
    sass()
  ],
  outputTargets: [
    react({
      componentCorePackage: '@stories-js/stories-components',
      proxiesFile: '../stories-react/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
    }),
    angular({
      componentCorePackage: '@stories-js/stories-components',
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
