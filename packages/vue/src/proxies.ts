/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { defineContainer } from './vue-component-lib/utils';

import type { JSX } from '@stories-js/core/components';

import { defineCustomElement as defineStoriesAddonActions } from '@stories-js/core/components/stories-addon-actions.js';
import { defineCustomElement as defineStoriesAddonControls } from '@stories-js/core/components/stories-addon-controls.js';
import { defineCustomElement as defineStoriesAddons } from '@stories-js/core/components/stories-addons.js';
import { defineCustomElement as defineStoriesApp } from '@stories-js/core/components/stories-app.js';
import { defineCustomElement as defineStoriesBadge } from '@stories-js/core/components/stories-badge.js';
import { defineCustomElement as defineStoriesButton } from '@stories-js/core/components/stories-button.js';
import { defineCustomElement as defineStoriesButtons } from '@stories-js/core/components/stories-buttons.js';
import { defineCustomElement as defineStoriesCheckbox } from '@stories-js/core/components/stories-checkbox.js';
import { defineCustomElement as defineStoriesCol } from '@stories-js/core/components/stories-col.js';
import { defineCustomElement as defineStoriesFooter } from '@stories-js/core/components/stories-footer.js';
import { defineCustomElement as defineStoriesGrid } from '@stories-js/core/components/stories-grid.js';
import { defineCustomElement as defineStoriesIcon } from '@stories-js/core/components/stories-icon.js';
import { defineCustomElement as defineStoriesInput } from '@stories-js/core/components/stories-input.js';
import { defineCustomElement as defineStoriesLabel } from '@stories-js/core/components/stories-label.js';
import { defineCustomElement as defineStoriesPreview } from '@stories-js/core/components/stories-preview.js';
import { defineCustomElement as defineStoriesRouter } from '@stories-js/core/components/stories-router.js';
import { defineCustomElement as defineStoriesRow } from '@stories-js/core/components/stories-row.js';
import { defineCustomElement as defineStoriesSearchbar } from '@stories-js/core/components/stories-searchbar.js';
import { defineCustomElement as defineStoriesSidebar } from '@stories-js/core/components/stories-sidebar.js';
import { defineCustomElement as defineStoriesSplitPane } from '@stories-js/core/components/stories-split-pane.js';
import { defineCustomElement as defineStoriesTab } from '@stories-js/core/components/stories-tab.js';
import { defineCustomElement as defineStoriesTabBar } from '@stories-js/core/components/stories-tab-bar.js';
import { defineCustomElement as defineStoriesTabButton } from '@stories-js/core/components/stories-tab-button.js';
import { defineCustomElement as defineStoriesTabs } from '@stories-js/core/components/stories-tabs.js';
import { defineCustomElement as defineStoriesToolBar } from '@stories-js/core/components/stories-tool-bar.js';
import { defineCustomElement as defineStoriesToolButton } from '@stories-js/core/components/stories-tool-button.js';
import { defineCustomElement as defineStoriesToolZoom } from '@stories-js/core/components/stories-tool-zoom.js';
import { defineCustomElement as defineStoriesZoom } from '@stories-js/core/components/stories-zoom.js';


export const StoriesAddonActions = /*@__PURE__*/ defineContainer<JSX.StoriesAddonActions>('stories-addon-actions', defineStoriesAddonActions);


export const StoriesAddonControls = /*@__PURE__*/ defineContainer<JSX.StoriesAddonControls>('stories-addon-controls', defineStoriesAddonControls);


export const StoriesAddons = /*@__PURE__*/ defineContainer<JSX.StoriesAddons>('stories-addons', defineStoriesAddons);


export const StoriesApp = /*@__PURE__*/ defineContainer<JSX.StoriesApp>('stories-app', defineStoriesApp, [
  'modules',
  'store',
  'storyChange',
  'storyContextChange'
]);


export const StoriesBadge = /*@__PURE__*/ defineContainer<JSX.StoriesBadge>('stories-badge', defineStoriesBadge, [
  'color'
]);


export const StoriesButton = /*@__PURE__*/ defineContainer<JSX.StoriesButton>('stories-button', defineStoriesButton, [
  'color',
  'buttonType',
  'disabled',
  'expand',
  'fill',
  'routerDirection',
  'href',
  'shape',
  'type',
  'size',
  'strong',
  'target',
  'storiesFocus',
  'storiesBlur',
  'storiesClick'
]);


export const StoriesButtons = /*@__PURE__*/ defineContainer<JSX.StoriesButtons>('stories-buttons', defineStoriesButtons, [
  'collapse'
]);


export const StoriesCheckbox = /*@__PURE__*/ defineContainer<JSX.StoriesCheckbox>('stories-checkbox', defineStoriesCheckbox, [
  'color',
  'name',
  'checked',
  'indeterminate',
  'disabled',
  'value',
  'storiesChange',
  'storiesFocus',
  'storiesBlur',
  'storiesStyle'
],
'checked', 'v-stories-change', 'storiesChange');


export const StoriesCol = /*@__PURE__*/ defineContainer<JSX.StoriesCol>('stories-col', defineStoriesCol, [
  'offset',
  'offsetXs',
  'offsetSm',
  'offsetMd',
  'offsetLg',
  'offsetXl',
  'pull',
  'pullXs',
  'pullSm',
  'pullMd',
  'pullLg',
  'pullXl',
  'push',
  'pushXs',
  'pushSm',
  'pushMd',
  'pushLg',
  'pushXl',
  'size',
  'sizeXs',
  'sizeSm',
  'sizeMd',
  'sizeLg',
  'sizeXl'
]);


export const StoriesFooter = /*@__PURE__*/ defineContainer<JSX.StoriesFooter>('stories-footer', defineStoriesFooter);


export const StoriesGrid = /*@__PURE__*/ defineContainer<JSX.StoriesGrid>('stories-grid', defineStoriesGrid, [
  'fixed'
]);


export const StoriesIcon = /*@__PURE__*/ defineContainer<JSX.StoriesIcon>('stories-icon', defineStoriesIcon, [
  'name'
]);


export const StoriesInput = /*@__PURE__*/ defineContainer<JSX.StoriesInput>('stories-input', defineStoriesInput, [
  'fireFocusEvents',
  'color',
  'autofocus',
  'clearInput',
  'debounce',
  'disabled',
  'inputmode',
  'max',
  'maxlength',
  'min',
  'minlength',
  'name',
  'pattern',
  'placeholder',
  'readonly',
  'required',
  'step',
  'size',
  'type',
  'value',
  'storiesInput',
  'storiesChange',
  'storiesBlur',
  'storiesFocus',
  'storiesStyle'
],
'value', 'v-stories-change', 'storiesChange');


export const StoriesLabel = /*@__PURE__*/ defineContainer<JSX.StoriesLabel>('stories-label', defineStoriesLabel, [
  'color',
  'position'
]);


export const StoriesPreview = /*@__PURE__*/ defineContainer<JSX.StoriesPreview>('stories-preview', defineStoriesPreview);


export const StoriesRouter = /*@__PURE__*/ defineContainer<JSX.StoriesRouter>('stories-router', defineStoriesRouter);


export const StoriesRow = /*@__PURE__*/ defineContainer<JSX.StoriesRow>('stories-row', defineStoriesRow);


export const StoriesSearchbar = /*@__PURE__*/ defineContainer<JSX.StoriesSearchbar>('stories-searchbar', defineStoriesSearchbar, [
  'color',
  'cancelButtonIcon',
  'clearIcon',
  'debounce',
  'disabled',
  'inputmode',
  'placeholder',
  'searchIcon',
  'showCancelButton',
  'showClearButton',
  'type',
  'value',
  'storiesInput',
  'storiesChange',
  'storiesCancel',
  'storiesClear',
  'storiesBlur',
  'storiesFocus',
  'storiesStyle'
],
'value', 'v-stories-change', 'storiesChange');


export const StoriesSidebar = /*@__PURE__*/ defineContainer<JSX.StoriesSidebar>('stories-sidebar', defineStoriesSidebar);


export const StoriesSplitPane = /*@__PURE__*/ defineContainer<JSX.StoriesSplitPane>('stories-split-pane', defineStoriesSplitPane, [
  'split',
  'minSize',
  'defaultSize',
  'isResizing',
  'storiesSizeChange'
]);


export const StoriesTab = /*@__PURE__*/ defineContainer<JSX.StoriesTab>('stories-tab', defineStoriesTab, [
  'active',
  'tab'
]);


export const StoriesTabBar = /*@__PURE__*/ defineContainer<JSX.StoriesTabBar>('stories-tab-bar', defineStoriesTabBar, [
  'color',
  'selectedTab',
  'storiesTabBarChange'
]);


export const StoriesTabButton = /*@__PURE__*/ defineContainer<JSX.StoriesTabButton>('stories-tab-button', defineStoriesTabButton, [
  'disabled',
  'layout',
  'selected',
  'tab',
  'storiesTabButtonClick'
]);


export const StoriesTabs = /*@__PURE__*/ defineContainer<JSX.StoriesTabs>('stories-tabs', defineStoriesTabs);


export const StoriesToolBar = /*@__PURE__*/ defineContainer<JSX.StoriesToolBar>('stories-tool-bar', defineStoriesToolBar);


export const StoriesToolButton = /*@__PURE__*/ defineContainer<JSX.StoriesToolButton>('stories-tool-button', defineStoriesToolButton, [
  'disabled',
  'icon',
  'command',
  'storiesAction'
]);


export const StoriesToolZoom = /*@__PURE__*/ defineContainer<JSX.StoriesToolZoom>('stories-tool-zoom', defineStoriesToolZoom);


export const StoriesZoom = /*@__PURE__*/ defineContainer<JSX.StoriesZoom>('stories-zoom', defineStoriesZoom, [
  'zoom'
]);

