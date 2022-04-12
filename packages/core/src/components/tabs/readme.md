# stories-tabs

The stories-tabs is a container works as a router outlet in order to handle navigation. It does not provide any UI feedback or mechanism to switch between tabs. In order to do so, an [stories-tab-bar](../tab-bar) should be provided as a direct child of `stories-tabs`.

<!-- Auto Generated Below -->


## Methods

### `getSelected() => Promise<string | undefined>`

Get the currently selected tab.

#### Returns

Type: `Promise<string>`



### `getTab(tab: string | HTMLStoriesTabElement) => Promise<HTMLStoriesTabElement | undefined>`

Get a specific tab by the value of its `tab` property or an element reference.

#### Returns

Type: `Promise<HTMLStoriesTabElement>`



### `select(tab: string | HTMLStoriesTabElement) => Promise<boolean>`

Select a tab by the value of its `tab` property or an element reference.

#### Returns

Type: `Promise<boolean>`




----------------------------------------------

Built with [StencilJS](https://stenciljs.com/) at StoriesJS
