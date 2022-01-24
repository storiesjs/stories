# stories-button



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute          | Description                                                                                                                                                                                                                                                            | Type                                           | Default     |
| ----------------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- | ----------- |
| `buttonType`      | `button-type`      | The type of button.                                                                                                                                                                                                                                                    | `string`                                       | `'button'`  |
| `color`           | `color`            | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics). | `string`                                       | `undefined` |
| `disabled`        | `disabled`         | If `true`, the user cannot interact with the button.                                                                                                                                                                                                                   | `boolean`                                      | `false`     |
| `expand`          | `expand`           | Set to `"block"` for a full-width button or to `"full"` for a full-width button without left and right borders.                                                                                                                                                        | `"block" \| "full"`                            | `undefined` |
| `fill`            | `fill`             | Set to `"clear"` for a transparent button, to `"outline"` for a transparent button with a border, or to `"solid"`. The default style is `"solid"` except inside of a toolbar, where the default is `"clear"`.                                                          | `"clear" \| "default" \| "outline" \| "solid"` | `undefined` |
| `href`            | `href`             | Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered.                                                                                                                                                | `string`                                       | `undefined` |
| `routerDirection` | `router-direction` | When using a router, it specifies the transition direction when navigating to another page using `href`.                                                                                                                                                               | `"back" \| "forward" \| "root"`                | `'forward'` |
| `shape`           | `shape`            | The button shape.                                                                                                                                                                                                                                                      | `"round"`                                      | `undefined` |
| `size`            | `size`             | The button size.                                                                                                                                                                                                                                                       | `"default" \| "large" \| "small"`              | `undefined` |
| `strong`          | `strong`           | If `true`, activates a button with a heavier font weight.                                                                                                                                                                                                              | `boolean`                                      | `false`     |
| `target`          | `target`           | Specifies where to display the linked URL. Only applies when an `href` is provided. Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.                                                                                                                    | `string`                                       | `undefined` |
| `type`            | `type`             | The type of the button.                                                                                                                                                                                                                                                | `"button" \| "reset" \| "submit"`              | `'button'`  |


## Events

| Event          | Description                          | Type                |
| -------------- | ------------------------------------ | ------------------- |
| `storiesBlur`  | Emitted when the button loses focus. | `CustomEvent<void>` |
| `storiesClick` | Emitted when the button click.       | `CustomEvent<void>` |
| `storiesFocus` | Emitted when the button has focus.   | `CustomEvent<void>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
