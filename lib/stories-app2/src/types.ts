// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type StoryObject = {
    storyId: string;
    storyName: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    storyKind: any;
    // decorators: BaseDecorators<StoryFnReactReturnType>,
    // parameters: Parameters,
    // args: Partial<Args>,
    // argTypes: ArgTypes,
    // story: Story<Args>,
    // storyContext: StoryContext
};

export type StoryObjects = Record<string, StoryObject>;
