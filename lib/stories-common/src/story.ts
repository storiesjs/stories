/* eslint-disable @typescript-eslint/consistent-type-definitions */
export type StoryId = string;
export type StoryKind = string;
export type StoryName = string;

export type Context = unknown;

export type ReturnType = unknown;

export type StoryFn = (context?: Context) => ReturnType;

export type Story = StoryFn & {
  storyName?: string;
}

export type Meta = {
  title?: string;
  component?: unknown;
};

export type DefaultName = "default";
export type EsModuleName = "__esModule";
export type Name = string;

export type Default = Record<DefaultName, Meta>;
// export type EsModule = Record<EsModuleName, string>;
export type NamedStory = Record<Name, Story>;

export type StoryModule = Default & NamedStory;

export type StoryModules = StoryModule[];

export type StoryComponent = {
  storyId: string;
  kinds: string[];
  name: string;
  component?: unknown;
  storyFn: StoryFn;
}

export type StoryComponents = Record<string, StoryComponent>;