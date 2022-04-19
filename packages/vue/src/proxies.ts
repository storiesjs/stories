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
import { defineCustomElement as defineStoriesCheckbox } from '@stories-js/core/components/stories-checkbox.js';
import { defineCustomElement as defineStoriesCol } from '@stories-js/core/components/stories-col.js';
import { defineCustomElement as defineStoriesDropdown } from '@stories-js/core/components/stories-dropdown.js';
import { defineCustomElement as defineStoriesFooter } from '@stories-js/core/components/stories-footer.js';
import { defineCustomElement as defineStoriesGrid } from '@stories-js/core/components/stories-grid.js';
import { defineCustomElement as defineStoriesGroup } from '@stories-js/core/components/stories-group.js';
import { defineCustomElement as defineStoriesIcon } from '@stories-js/core/components/stories-icon.js';
import { defineCustomElement as defineStoriesInput } from '@stories-js/core/components/stories-input.js';
import { defineCustomElement as defineStoriesLabel } from '@stories-js/core/components/stories-label.js';
import { defineCustomElement as defineStoriesMenu } from '@stories-js/core/components/stories-menu.js';
import { defineCustomElement as defineStoriesMenuDivider } from '@stories-js/core/components/stories-menu-divider.js';
import { defineCustomElement as defineStoriesMenuItem } from '@stories-js/core/components/stories-menu-item.js';
import { defineCustomElement as defineStoriesMenuLabel } from '@stories-js/core/components/stories-menu-label.js';
import { defineCustomElement as defineStoriesPreview } from '@stories-js/core/components/stories-preview.js';
import { defineCustomElement as defineStoriesRadio } from '@stories-js/core/components/stories-radio.js';
import { defineCustomElement as defineStoriesRadioGroup } from '@stories-js/core/components/stories-radio-group.js';
import { defineCustomElement as defineStoriesRouter } from '@stories-js/core/components/stories-router.js';
import { defineCustomElement as defineStoriesRow } from '@stories-js/core/components/stories-row.js';
import { defineCustomElement as defineStoriesSearchbar } from '@stories-js/core/components/stories-searchbar.js';
import { defineCustomElement as defineStoriesSelect } from '@stories-js/core/components/stories-select.js';
import { defineCustomElement as defineStoriesSidebar } from '@stories-js/core/components/stories-sidebar.js';
import { defineCustomElement as defineStoriesSpinner } from '@stories-js/core/components/stories-spinner.js';
import { defineCustomElement as defineStoriesSplitPane } from '@stories-js/core/components/stories-split-pane.js';
import { defineCustomElement as defineStoriesTab } from '@stories-js/core/components/stories-tab.js';
import { defineCustomElement as defineStoriesTabBar } from '@stories-js/core/components/stories-tab-bar.js';
import { defineCustomElement as defineStoriesTabButton } from '@stories-js/core/components/stories-tab-button.js';
import { defineCustomElement as defineStoriesTabs } from '@stories-js/core/components/stories-tabs.js';
import { defineCustomElement as defineStoriesTag } from '@stories-js/core/components/stories-tag.js';
import { defineCustomElement as defineStoriesTextarea } from '@stories-js/core/components/stories-textarea.js';
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
  'type',
  'size'
]);


export const StoriesButton = /*@__PURE__*/ defineContainer<JSX.StoriesButton>('stories-button', defineStoriesButton, [
  'variant',
  'disabled',
  'loading',
  'size',
  'caret',
  'pill',
  'expand',
  'circle',
  'href',
  'target',
  'rel',
  'type',
  'storiesFocus',
  'storiesBlur'
]);


export const StoriesCheckbox = /*@__PURE__*/ defineContainer<JSX.StoriesCheckbox>('stories-checkbox', defineStoriesCheckbox, [
  'value',
  'disabled',
  'name',
  'checked',
  'indeterminate',
  'invalidText',
  'invalid',
  'storiesBlur',
  'storiesFocus',
  'storiesChange'
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


export const StoriesDropdown = /*@__PURE__*/ defineContainer<JSX.StoriesDropdown>('stories-dropdown', defineStoriesDropdown, [
  'open',
  'placement',
  'closeOnSelect',
  'containingElement',
  'distance',
  'skidding',
  'hoist',
  'storiesShow',
  'storiesAfterShow',
  'storiesHide',
  'storiesAfterHide'
]);


export const StoriesFooter = /*@__PURE__*/ defineContainer<JSX.StoriesFooter>('stories-footer', defineStoriesFooter);


export const StoriesGrid = /*@__PURE__*/ defineContainer<JSX.StoriesGrid>('stories-grid', defineStoriesGrid, [
  'fixed'
]);


export const StoriesGroup = /*@__PURE__*/ defineContainer<JSX.StoriesGroup>('stories-group', defineStoriesGroup, [
  'label',
  'horizontal'
]);


export const StoriesIcon = /*@__PURE__*/ defineContainer<JSX.StoriesIcon>('stories-icon', defineStoriesIcon, [
  'name'
]);


export const StoriesInput = /*@__PURE__*/ defineContainer<JSX.StoriesInput>('stories-input', defineStoriesInput, [
  'value',
  'type',
  'pill',
  'disabled',
  'name',
  'placeholder',
  'size',
  'label',
  'requiredIndicator',
  'helpText',
  'invalidText',
  'invalid',
  'clearable',
  'inputmode',
  'readonly',
  'maxlength',
  'spellcheck',
  'min',
  'max',
  'step',
  'enterkeyhint',
  'autocapitalize',
  'autocomplete',
  'autocorrect',
  'autofocus',
  'debounce',
  'togglePassword',
  'stroiesChange',
  'stroiesClear',
  'stroiesInput',
  'stroiesFocus',
  'stroiesBlur'
],
'value', 'v-stories-change', 'storiesChange');


export const StoriesLabel = /*@__PURE__*/ defineContainer<JSX.StoriesLabel>('stories-label', defineStoriesLabel, [
  'color',
  'position'
]);


export const StoriesMenu = /*@__PURE__*/ defineContainer<JSX.StoriesMenu>('stories-menu', defineStoriesMenu, [
  'storiesSelect'
]);


export const StoriesMenuDivider = /*@__PURE__*/ defineContainer<JSX.StoriesMenuDivider>('stories-menu-divider', defineStoriesMenuDivider);


export const StoriesMenuItem = /*@__PURE__*/ defineContainer<JSX.StoriesMenuItem>('stories-menu-item', defineStoriesMenuItem, [
  'checked',
  'value',
  'disabled'
]);


export const StoriesMenuLabel = /*@__PURE__*/ defineContainer<JSX.StoriesMenuLabel>('stories-menu-label', defineStoriesMenuLabel);


export const StoriesPreview = /*@__PURE__*/ defineContainer<JSX.StoriesPreview>('stories-preview', defineStoriesPreview);


export const StoriesRadio = /*@__PURE__*/ defineContainer<JSX.StoriesRadio>('stories-radio', defineStoriesRadio, [
  'value',
  'disabled',
  'checked',
  'storiesBlur',
  'storiesFocus'
],
'value', 'v-stories-change', 'storiesChange');


export const StoriesRadioGroup = /*@__PURE__*/ defineContainer<JSX.StoriesRadioGroup>('stories-radio-group', defineStoriesRadioGroup, [
  'allowEmptySelection',
  'label',
  'requiredIndicator',
  'invalidText',
  'invalid',
  'horizontal',
  'name',
  'value',
  'storiesChange'
],
'value', 'v-stories-change', 'storiesChange');


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


export const StoriesSelect = /*@__PURE__*/ defineContainer<JSX.StoriesSelect>('stories-select', defineStoriesSelect, [
  'multiple',
  'maxTagsVisible',
  'disabled',
  'name',
  'placeholder',
  'size',
  'hoist',
  'value',
  'pill',
  'label',
  'requiredIndicator',
  'helpText',
  'invalidText',
  'invalid',
  'clearable',
  'storiesChange',
  'storiesFocus',
  'storiesBlur'
],
'value', 'v-stories-change', 'storiesChange');


export const StoriesSidebar = /*@__PURE__*/ defineContainer<JSX.StoriesSidebar>('stories-sidebar', defineStoriesSidebar);


export const StoriesSpinner = /*@__PURE__*/ defineContainer<JSX.StoriesSpinner>('stories-spinner', defineStoriesSpinner);


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


export const StoriesTag = /*@__PURE__*/ defineContainer<JSX.StoriesTag>('stories-tag', defineStoriesTag, [
  'type',
  'size',
  'pill',
  'clearable',
  'storiesClear'
]);


export const StoriesTextarea = /*@__PURE__*/ defineContainer<JSX.StoriesTextarea>('stories-textarea', defineStoriesTextarea, [
  'size',
  'name',
  'value',
  'label',
  'requiredIndicator',
  'helpText',
  'invalidText',
  'invalid',
  'placeholder',
  'rows',
  'resize',
  'disabled',
  'readonly',
  'maxlength',
  'inputmode',
  'spellcheck',
  'enterkeyhint',
  'autocapitalize',
  'autocorrect',
  'autofocus',
  'debounce',
  'storiesChange',
  'storiesInput',
  'storiesFocus',
  'storiesBlur'
],
'value', 'v-stories-change', 'storiesChange');


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

