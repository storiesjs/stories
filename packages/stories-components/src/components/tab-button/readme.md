# stories-tab-button



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                                                                   | Type                                                                                       | Default        |
| ---------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | -------------- |
| `disabled` | `disabled` | If `true`, the user cannot interact with the tab button.                                                                                      | `boolean`                                                                                  | `false`        |
| `layout`   | `layout`   | Set the layout of the text and icon in the tab bar. It defaults to `'icon-start'`.                                                            | `"icon-bottom" \| "icon-end" \| "icon-hide" \| "icon-start" \| "icon-top" \| "label-hide"` | `'icon-start'` |
| `selected` | `selected` | The selected tab component                                                                                                                    | `boolean`                                                                                  | `false`        |
| `tab`      | `tab`      | A tab id must be provided for each `stories-tab`. It's used internally to reference the selected tab or by the router to switch between them. | `string`                                                                                   | `undefined`    |


## Shadow Parts

| Part       | Description |
| ---------- | ----------- |
| `"native"` |             |


## CSS Custom Properties

| Name                           | Description                                                                                                   |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| `--background`                 | Background of the tab button                                                                                  |
| `--background-focused`         | Background of the tab button when focused with the tab key                                                    |
| `--background-focused-opacity` | Opacity of the tab button background when focused with the tab key                                            |
| `--color`                      | Color of the tab button                                                                                       |
| `--color-focused`              | Color of the tab button when focused with the tab key                                                         |
| `--color-selected`             | Color of the selected tab button                                                                              |
| `--padding-bottom`             | Bottom padding of the tab button                                                                              |
| `--padding-end`                | Right padding if direction is left-to-right, and left padding if direction is right-to-left of the tab button |
| `--padding-start`              | Left padding if direction is left-to-right, and right padding if direction is right-to-left of the tab button |
| `--padding-top`                | Top padding of the tab button                                                                                 |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
