# Tabs

The Tabs (str-tabs) is a container works as a router outlet in order to handle navigation. It does not provide any UI feedback or mechanism to switch between tabs. In order to do so, an [str-tab-bar](../tab-bar) should be provided as a direct child of `str-tabs`.

<!-- Auto Generated Below -->


## Methods

### `getSelected() => Promise<string | undefined>`

Get the currently selected tab.

#### Returns

Type: `Promise<string>`



### `getTab(tab: string | HTMLStrTabElement) => Promise<HTMLStrTabElement | undefined>`

Get a specific tab by the value of its `tab` property or an element reference.

#### Returns

Type: `Promise<HTMLStrTabElement>`



### `select(tab: string | HTMLStrTabElement) => Promise<boolean>`

Select a tab by the value of its `tab` property or an element reference.

#### Returns

Type: `Promise<boolean>`




----------------------------------------------

Built with [StencilJS](https://stenciljs.com/) at StoriesJS
