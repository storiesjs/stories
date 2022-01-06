# stories-app



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description | Type                               | Default |
| --------- | --------- | ----------- | ---------------------------------- | ------- |
| `stories` | --        | Stories     | `{ [x: string]: StoryComponent; }` | `{}`    |


## Events

| Event           | Description                                                                                                    | Type                                                                                                        |
| --------------- | -------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `storySelected` | Unfortunatelly we cannot use EventEmitter<StoryComponent> because of the bug in @stencil/angular-output-target | `CustomEvent<{ storyId: string; kinds: string[]; name: string; storyFn: (context?: unknown) => unknown; }>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
