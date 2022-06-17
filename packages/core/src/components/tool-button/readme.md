# Tool button

> Notice: Deprecated. Use str-button instead

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description       | Type                                   | Default     |
| ---------- | ---------- | ----------------- | -------------------------------------- | ----------- |
| `command`  | `command`  | command property  | `"zoomIn" \| "zoomOut" \| "zoomReset"` | `undefined` |
| `disabled` | `disabled` | disabled property | `boolean`                              | `undefined` |
| `icon`     | `icon`     | icon property     | `string`                               | `undefined` |


## Events

| Event       | Description  | Type                                                |
| ----------- | ------------ | --------------------------------------------------- |
| `strAction` | Action Event | `CustomEvent<{ command: string; data?: unknown; }>` |


## Dependencies

### Used by

 - [str-tool-zoom](../tool-zoom)

### Depends on

- [str-icon](../icon)

### Graph
```mermaid
graph TD;
  str-tool-button --> str-icon
  str-tool-zoom --> str-tool-button
  style str-tool-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

Built with [StencilJS](https://stenciljs.com/) at StoriesJS
