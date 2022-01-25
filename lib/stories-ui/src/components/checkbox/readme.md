# stories-checkbox



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute       | Description                                                                                                                                                                                                                                                            | Type      | Default        |
| --------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | -------------- |
| `checked`       | `checked`       | If `true`, the checkbox is selected.                                                                                                                                                                                                                                   | `boolean` | `false`        |
| `color`         | `color`         | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics). | `string`  | `undefined`    |
| `disabled`      | `disabled`      | If `true`, the user cannot interact with the checkbox.                                                                                                                                                                                                                 | `boolean` | `false`        |
| `indeterminate` | `indeterminate` | If `true`, the checkbox will visually appear as indeterminate.                                                                                                                                                                                                         | `boolean` | `false`        |
| `name`          | `name`          | The name of the control, which is submitted with the form data.                                                                                                                                                                                                        | `string`  | `this.inputId` |
| `value`         | `value`         | The value of the checkbox does not mean if it's checked or not, use the `checked` property for that.  The value of a checkbox is analogous to the value of an `<input type="checkbox">`, it's only used when the checkbox participates in a native `<form>`.           | `any`     | `'on'`         |


## Events

| Event           | Description                                    | Type                                          |
| --------------- | ---------------------------------------------- | --------------------------------------------- |
| `storiesBlur`   | Emitted when the checkbox loses focus.         | `CustomEvent<void>`                           |
| `storiesChange` | Emitted when the checked property has changed. | `CustomEvent<CheckboxChangeEventDetail<any>>` |
| `storiesFocus`  | Emitted when the checkbox has focus.           | `CustomEvent<void>`                           |


## Shadow Parts

| Part          | Description |
| ------------- | ----------- |
| `"container"` |             |
| `"mark"`      |             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
