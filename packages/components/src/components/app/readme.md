# stories-app



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description   | Type                                                            | Default |
| --------- | --------- | ------------- | --------------------------------------------------------------- | ------- |
| `modules` | --        | Story Modules | `StoryModule[]`                                                 | `[]`    |
| `store`   | --        | Story Modules | `StoriesState & NotificationsState & LayoutState & AddonsState` | `state` |


## Events

| Event                | Description | Type                                                                                                                                                                                                                                                                                                       |
| -------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `storyChange`        |             | `CustomEvent<{ storyId: string; kinds: string[]; storyName: string; storyFn: StoryFn<AnyFramework, Args>; component?: any; subcomponents?: Record<string, any>; decorators?: DecoratorFunction<AnyFramework, Args>[]; args: Partial<Args>; argTypes: Partial<ArgTypes<Args>>; parameters?: Parameters; }>` |
| `storyContextChange` |             | `CustomEvent<{ component?: any; subcomponents?: Record<string, any>; } & StoryUpdate<Args>>`                                                                                                                                                                                                               |


----------------------------------------------

Built with ❤ at StoriesJS
