# Dropdown

The Dropdown (str-dropdown) displays drop-down box that enables selection of an option from an available list of values.

<!-- Auto Generated Below -->


## Properties

| Property            | Attribute         | Description                                                                                                                                | Type                                                                                                                                                                 | Default          |
| ------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| `closeOnSelect`     | `close-on-select` | Determines whether the dropdown should hide when a menu item is selected.                                                                  | `boolean`                                                                                                                                                            | `true`           |
| `containingElement` | --                | The dropdown will close when the user interacts outside of this element (e.g. clicking).                                                   | `HTMLElement`                                                                                                                                                        | `undefined`      |
| `distance`          | `distance`        | The distance in pixels from which to offset the panel away from its trigger.                                                               | `number`                                                                                                                                                             | `2`              |
| `hoist`             | `hoist`           | Enable this option to prevent the panel from being clipped when the component is placed inside a container with `overflow: auto\|scroll`.  | `boolean`                                                                                                                                                            | `false`          |
| `open`              | `open`            | Indicates whether or not the dropdown is open. You can use this in lieu of the show/hide methods.                                          | `boolean`                                                                                                                                                            | `false`          |
| `placement`         | `placement`       | The preferred placement of the dropdown panel. Note that the actual placement may vary as needed to keep the panel inside of the viewport. | `"bottom" \| "bottom-end" \| "bottom-start" \| "left" \| "left-end" \| "left-start" \| "right" \| "right-end" \| "right-start" \| "top" \| "top-end" \| "top-start"` | `'bottom-start'` |
| `skidding`          | `skidding`        | The distance in pixels from which to offset the panel along its trigger.                                                                   | `number`                                                                                                                                                             | `0`              |


## Events

| Event          | Description                                                                                           | Type                |
| -------------- | ----------------------------------------------------------------------------------------------------- | ------------------- |
| `strAfterHide` | Emitted after the dropdown closes and all transitions are complete.                                   | `CustomEvent<void>` |
| `strAfterShow` | Emitted after the dropdown opens and all transitions are complete.                                    | `CustomEvent<void>` |
| `strHide`      | Emitted when the dropdown closes. Calling `event.preventDefault()` will prevent it from being closed. | `CustomEvent<void>` |
| `strShow`      | Emitted when the dropdown opens. Calling `event.preventDefault()` will prevent it from being opened.  | `CustomEvent<void>` |


## Methods

### `focusOnTrigger() => Promise<void>`

Sets focus on the trigger.

#### Returns

Type: `Promise<void>`



### `hide() => Promise<void>`

Hides the dropdown panel

#### Returns

Type: `Promise<void>`



### `show() => Promise<void>`

Shows the dropdown panel

#### Returns

Type: `Promise<void>`




## Slots

| Slot        | Description                                               |
| ----------- | --------------------------------------------------------- |
|             | The dropdown's content.                                   |
| `"trigger"` | The dropdown's trigger, usually a `<str-button>` element. |


## CSS Custom Properties

| Name                       | Description                            |
| -------------------------- | -------------------------------------- |
| `--panel-background-color` | Background color of the dropdown panel |
| `--panel-border-color`     | Border color of the button             |
| `--panel-border-radius`    | Border radius of the dropdown panel    |
| `--panel-box-shadow`       | Box shadow of the dropdown panel       |
| `--transition`             | Transition of the dropdown             |


## Dependencies

### Used by

 - [str-select](../select)

### Graph
```mermaid
graph TD;
  str-select --> str-dropdown
  style str-dropdown fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

Built with [StencilJS](https://stenciljs.com/) at StoriesJS
