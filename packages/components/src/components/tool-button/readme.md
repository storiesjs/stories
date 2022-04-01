# stories-toolbutton



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description       | Type                                   | Default     |
| ---------- | ---------- | ----------------- | -------------------------------------- | ----------- |
| `command`  | `command`  | command property  | `"zoomIn" \| "zoomOut" \| "zoomReset"` | `undefined` |
| `disabled` | `disabled` | disabled property | `boolean`                              | `undefined` |
| `icon`     | `icon`     | icon property     | `string`                               | `undefined` |


## Events

| Event           | Description  | Type                                                |
| --------------- | ------------ | --------------------------------------------------- |
| `storiesAction` | Action Event | `CustomEvent<{ command: string; data?: unknown; }>` |


## Dependencies

### Used by

 - [stories-tool-zoom](../tool-zoom)

### Depends on

- [stories-icon](../icon)

### Graph
```mermaid
graph TD;
  stories-tool-button --> stories-icon
  stories-tool-zoom --> stories-tool-button
  style stories-tool-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

Built with ❤ at StoriesJS
