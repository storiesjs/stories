/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable import/order */
import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { reactOutputTarget as react } from '@stencil/react-output-target';
import { angularOutputTarget as angular } from '@stencil/angular-output-target';
// import { vueOutputTarget as vue } from '@stencil/vue-output-target';

import { generateJsonDocs } from './customElementDocGenerator';

export const config: Config = {
  autoprefixCss: true,
  namespace: 'stories',
  buildEs5: 'prod',
  extras: {
    appendChildSlotFix: true,
    cssVarsShim: true,
    dynamicImportShim: true,
    initializeNextTick: true,
    safari10: true,
    scriptDataOpts: true,
    shadowDomShim: true,
    cloneNodeFix: true,
    slotChildNodesFix: true,
  },
  enableCache: true,
  plugins: [
    sass()
  ],
  outputTargets: [
    react({
      componentCorePackage: '@stories-js/components',
      proxiesFile: '../react/src/components/proxies.ts',
      includeDefineCustomElements: true,
    }),
    angular({
      componentCorePackage: '@stories-js/components',
      directivesProxyFile: '../angular/src/directives/proxies.ts',
    }),
    // vue({
    //   componentCorePackage: '@stories-js/components',
    //   proxiesFile: '../vue/src/proxies.ts',
    // }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
      footer: 'Built with ❤ at StoriesJS',
    },
    {
      type: 'custom',
      generator: generateJsonDocs,
      name: 'custom-element-docs',
    },
    {
      type: 'docs-json',
      file: 'dist/docs.json',
    },
    {
      type: 'docs-vscode',
      file: 'dist/html.html-data.json',
      sourceCodeBaseUrl: 'https://github.com/storiesjs/stories/tree/main/packages/components/',
    },
  ],
  testing: {
    rootDir: __dirname,
    testPathIgnorePatterns: [
      "node_modules",
      "loader",
      "dist"
    ],
  },
  preamble: '(C) StoriesJS https://storiesjs.org - GPL-2.0 License',
};
