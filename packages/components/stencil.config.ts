/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable import/order */
import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { reactOutputTarget as react } from '@stencil/react-output-target';
import { angularOutputTarget as angular } from '@stencil/angular-output-target';
import { vueOutputTarget as vue } from '@stencil/vue-output-target';

import { generateJsonDocs } from './customElementDocGenerator';

export const config: Config = {
  autoprefixCss: true,
  namespace: 'components',
  buildEs5: 'prod',
  sourceMap: true,
  minifyJs: true,
  // globalStyle: 'src/css/core.scss',
  globalScript: 'src/global/stories-global.ts',
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
    vue({
      componentCorePackage: '@stories-js/components',
      proxiesFile: '../vue/src/proxies.ts',
      includeImportCustomElements: true,
      includeDefineCustomElements: false,
      componentModels: [
        {
          elements: ['stories-checkbox', 'stories-toggle'],
          targetAttr: 'checked',
          event: 'v-stories-change',
          externalEvent: 'storiesChange'
        },
        {
          elements: ['stories-input', 'stories-radio-group', 'stories-radio', 'stories-searchbar', 'stories-select', 'stories-textarea'],
          targetAttr: 'value',
          event: 'v-stories-change',
          externalEvent: 'storiesChange'
        }
      ],
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      dir: 'components',
      copy: [
        {
          src: '../scripts/custom-elements',
          dest: 'components',
          warn: true,
        },
      ],
      includeGlobalScripts: false,
      autoDefineCustomElements: true,
    },
    {
      type: 'dist-hydrate-script',
      dir: 'hydrate',
      empty: false,
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
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      baseUrl: 'https://example.com/',
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
