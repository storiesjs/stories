# str-radio-group

The str-radio-group displays a group of options with radio buttons and enables selection of one option from the list.

<!-- Auto Generated Below -->


## Properties

| Property              | Attribute               | Description                                                                                          | Type      | Default        |
| --------------------- | ----------------------- | ---------------------------------------------------------------------------------------------------- | --------- | -------------- |
| `allowEmptySelection` | `allow-empty-selection` | If `true`, the radios can be deselected.                                                             | `boolean` | `false`        |
| `horizontal`          | `horizontal`            | Render the radios horizontal instead of vertical                                                     | `boolean` | `false`        |
| `invalid`             | `invalid`               | Set to true to indicate this field is invalid. Will display the invalid text.                        | `boolean` | `false`        |
| `invalidText`         | `invalid-text`          | The radio group's invalid text. Alternatively, you can use the invalid-text slot.                    | `string`  | `''`           |
| `label`               | `label`                 | The radio group label. Required for proper accessibility. Alternatively, you can use the label slot. | `string`  | `''`           |
| `name`                | `name`                  | The name of the control, which is submitted with the form data.                                      | `string`  | `this.inputId` |
| `requiredIndicator`   | `required-indicator`    | Set to true to display a required indicator, adds an asterisk to label                               | `boolean` | `false`        |
| `value`               | `value`                 | the value of the radio group.                                                                        | `any`     | `undefined`    |


## Events

| Event       | Description                         | Type               |
| ----------- | ----------------------------------- | ------------------ |
| `strChange` | Emitted when the value has changed. | `CustomEvent<any>` |


## Slots

| Slot             | Description                                                                                          |
| ---------------- | ---------------------------------------------------------------------------------------------------- |
|                  | The default slot where radio controls are placed.                                                    |
| `"invalid-text"` | Invalid text tells a user how to fix the error. Alternatively, you can use the invalid-text prop.    |
| `"label"`        | The radio group label. Required for proper accessibility. Alternatively, you can use the label prop. |


## CSS Custom Properties

| Name                                 | Description                                                           |
| ------------------------------------ | --------------------------------------------------------------------- |
| `--align-radios`                     | Alignment of radio's on cross-axis, an `align-items` Flexbox property |
| `--margin-between-radios`            | Margin between the str-radio children                                 |
| `--margin-between-radios-horizontal` | Margin between the str-radio children when layout is horizontal       |


----------------------------------------------

Built with [StencilJS](https://stenciljs.com/) at StoriesJS
