# stories-app



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description   | Type                                                                                                                                                                                    | Default |
| --------- | --------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `modules` | --        | Story Modules | `StoryModule[]`                                                                                                                                                                         | `[]`    |
| `store`   | --        | Story Modules | `{ stories: StoryComponents; story: StoryComponent<AnyFramework, Args>; context: StoryContext<AnyFramework, Args>; zoom: number; addons: Record<string, Addon<any>>; actions: any[]; }` | `state` |


## Events

| Event                | Description | Type                                                                                                                                                                                                                                                                                                         |
| -------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `storyChange`        |             | `CustomEvent<{ storyId: string; kinds: string[]; storyName: string; storyFn: StoryFn<AnyFramework, Args>; component?: any; subcomponents?: Record<string, any>; decorators?: DecoratorFunction<AnyFramework, Args>[]; args?: Partial<Args>; argTypes?: Partial<ArgTypes<Args>>; parameters?: Parameters; }>` |
| `storyContextChange` |             | `CustomEvent<{ component?: any; subcomponents?: Record<string, any>; args: Args; argTypes: ArgTypes<Args>; parameters: Parameters; }>`                                                                                                                                                                       |


## Methods

### `findAddon(id: string) => Promise<Addon<AddonState>>`



#### Returns

Type: `Promise<Addon<any>>`



### `registerAddon(addon: Addon<AddonState>, defaultState?: AddonState) => Promise<void>`



#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
