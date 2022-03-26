import type { StoryModule, StoryModules, StoryComponent, StoryContext, Args, StoryUpdate } from "..";
import { state } from "..";

import { storiesAPI } from './stories';

const storyModule: StoryModule = {
    'default': {
        title: 'title',
        component: {},
        subcomponents: [],
        decorators: [],
        args: {},
        argTypes: {}, 
        parameters: {}
    },
    '__esModule': true,
    'myStory': {}
};
const storyModules: StoryModules = [storyModule];

describe('StoriesAPI', () => {
    describe('setStories', () => {
        beforeEach(() => {
            state.stories = {};
        });

        it('should set stories', () => {
            storiesAPI.setStories(storyModules);
            expect(state.stories).toEqual({
                "title--my-story": {
                    "argTypes": {},
                    "args": {},
                    "component": {},
                    "decorators": [],
                    "kinds": ["title"],
                    "parameters": {},
                    "storyFn": {},
                    "storyId": "title--my-story",
                    "storyName": "My Story",
                    "subcomponents": []
                }
            });
        });
    });

    describe('getStoryIdFromURL', () => {
         beforeEach(() => {
            state.stories = {};
        });

        it('should succes to get window, location and hash in order', () => {
            expect(window).toBeDefined();
            expect(window.location).toBeDefined();
            window.location.hash = '#123';
            expect(window.location.hash).toBe('#123');
        });

        it('should return undefined for hash with incorrect path name', () => {
            const hash = '#path12=123';
            window.location.hash = hash;

            const result = storiesAPI.getStoryIdFromURL();

            expect(result).toBeUndefined();
        });

        it('should return undefined for hash with absent path name', () => {
            const hash = '#';
            window.location.hash = hash;

            const result = storiesAPI.getStoryIdFromURL();

            expect(result).toBeUndefined();
        });

        it('should return storyId for hash with correct path name', () => {
            const storyId = "stories-view-component--byname";
            const hash = `#path=${storyId}`;
            window.location.hash = hash;

            const result = storiesAPI.getStoryIdFromURL();

            expect(result).toBe(storyId);
        });
    });

    describe('setStoryIdInURL', () => {
         beforeEach(() => {
            state.stories = {};
        });

        it('should set empty path for undefined value', () => {
            storiesAPI.setStoryIdInURL(undefined);

            expect(window.location.hash).toEqual('#path=');
        });

        it('should set storyId path for real value', () => {
            const storyId = "stories-view-component--byname";
            storiesAPI.setStoryIdInURL(storyId);

            expect(window.location.hash).toEqual(`#path=${storyId}`);
        });
    });

    describe('selectFirstStory', () => {
        it('should select nothing if no storties exist', () => {
            state.stories = {};

            storiesAPI.selectFirstStory();
            expect(window.location.hash).toEqual('#path=');
        });

        it('should select first story', () => {
            state.stories = {
                "title--my-story": {
                    "argTypes": {},
                    "args": {},
                    "component": {},
                    "decorators": [],
                    "kinds": ["title"],
                    "parameters": {},
                    "storyFn": jest.fn(),
                    "storyId": "title--my-story",
                    "storyName": "My Story",
                    "subcomponents": []
                }
            };

            storiesAPI.selectFirstStory();
            expect(window.location.hash).toEqual('#path=title--my-story');
        });
    });

    describe('selectStory', () => {
        it('should select nothing if no storties exist', () => {
            state.stories = {};

            storiesAPI.selectStory('dummy-story-id');
            expect(window.location.hash).toEqual('#path=');
        });

        it('should select story', () => {
            state.stories = {
                "title--my-story": {
                    "argTypes": {},
                    "args": {},
                    "component": {},
                    "decorators": [],
                    "kinds": ["title"],
                    "parameters": {},
                    "storyFn": jest.fn(),
                    "storyId": "title--my-story",
                    "storyName": "My Story",
                    "subcomponents": []
                }
            };

            storiesAPI.selectStory('title--my-story');
            expect(window.location.hash).toEqual('#path=title--my-story');
        });
    });


    describe('updateStoryArgs', () => {
        it('should update story args', () => {
            const story: StoryComponent = {
                "argTypes": {},
                "args": {
                    'label': 'first'
                },
                "component": {},
                "decorators": [],
                "kinds": ["title"],
                "parameters": {},
                "storyFn": jest.fn(),
                "storyId": "title--my-story",
                "storyName": "My Story",
                "subcomponents": []
            };
            const context: StoryContext = {
                args: {
                    label: 'second'
                },
                argTypes: {},
                parameters: {},
                initialArgs: {
                    'label': 'first'
                }
            };
            const newArgs: Args = {
                label: 'third'
            };
            storiesAPI.updateStoryArgs(story, context, newArgs);
            expect(story.args.label).toBe('third')
            expect(context.args.label).toBe('third')
        });

    });

    describe('resetStoryArgs', () => {
        it('should reset specific story args', () => {
            const story: StoryComponent = {
                "argTypes": {},
                "args": {
                    'label': '1313123'
                },
                "component": {},
                "decorators": [],
                "kinds": ["title"],
                "parameters": {},
                "storyFn": jest.fn(),
                "storyId": "title--my-story",
                "storyName": "My Story",
                "subcomponents": []
            };
            const context: StoryContext = {
                args: {
                    label: 'second'
                },
                argTypes: {},
                parameters: {},
                initialArgs: {
                    'label': 'first'
                }
            };
            const argNames: string[] = ['label']

            storiesAPI.resetStoryArgs(story, context, argNames);
            expect(story.args.label).toBe('first')
            expect(context.args.label).toBe('second')
        });

        it('should reset all story args', () => {
            const story: StoryComponent = {
                "argTypes": {},
                "args": {
                    'label': '1313123'
                },
                "component": {},
                "decorators": [],
                "kinds": ["title"],
                "parameters": {},
                "storyFn": jest.fn(),
                "storyId": "title--my-story",
                "storyName": "My Story",
                "subcomponents": []
            };
            const context: StoryContext = {
                args: {
                    label: 'second'
                },
                argTypes: {},
                parameters: {},
                initialArgs: {
                    'label': 'first'
                }
            };

            storiesAPI.resetStoryArgs(story, context);
            expect(story.args.label).toBe('first')
            expect(context.args.label).toBe('second')
        });
    });

    describe('updateStory', () => {
        it('should update story', () => {
            const story: StoryComponent = {
                "argTypes": {},
                "args": {
                    'label': '1313123'
                },
                "component": {},
                "decorators": [],
                "kinds": ["title"],
                "parameters": {},
                "storyFn": jest.fn(),
                "storyId": "title--my-story",
                "storyName": "My Story",
                "subcomponents": []
            };
            const context: StoryUpdate = {
                args: {
                    label: 'second'
                },
                argTypes: {
                    'label': {
                        name: 'Text control',
                        description: 'Text control description',
                        defaultValue: '',
                        type: 'text'
                    }
                },
                parameters: {
                    'param': "ok"
                },
                initialArgs: {
                    'label': 'first'
                }
            };

            storiesAPI.updateStory(story, context);
            expect(story.args.label).toBe(context.args.label)
            expect(story.argTypes.label).toBe(context.argTypes.label)
            expect(story.parameters?.param).toBe(context.parameters.param)
        });
    });
});