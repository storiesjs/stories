/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, Story, StoryComponents, StoryModule, StoryModules } from "..";
import { createStoryComponent, modulesToStories, getFirstStoryId, prepareStoryProperties } from '../module';

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

describe('module', () => {

    describe('createStoryComponent', () => {
        it('should create story component', () => {
            const meta: Meta = storyModule.default as Meta;
            const story: Story = storyModule.myStory;
            const storyId = 'storyId';
            const storyName = 'storyName';
            const storyKind = { root: 'root', groups: ['first', 'secong'] };

            const result = createStoryComponent(storyId, storyName, storyKind, story, meta);

            expect(result).toEqual({
                "storyId": "storyId",
                "kinds": ["first", "secong"],
                "storyName": "storyName",
                "storyFn": {},
                "component": {},
                "subcomponents": [],
                "decorators": [],
                "args": {},
                "argTypes": {},
                parameters: {}
            });
        });
    });

    describe('prepareStoryProperties', () => {
        it('should return props without title in Meta and without story Name', () => {
            /**
             * Module with stories
             * // Button.stories.js|jsx
             *
             * import React from 'react';
             *
             * import { Button } from './Button';
             *
             * export default {
             *  component: Button,
             * };
             * 
             * export const Primary = () => <Button primary>Button</Button>;
             */
            const storyKey = 'Primary';
            const name = '';
            const title = '';

            const { storyId, storyName, storyKind} = prepareStoryProperties(storyKey, name, title);

            expect(storyId).toEqual('primary--primary');
            expect(storyName).toEqual('Primary');
            expect(storyKind).toEqual({"root": null, "groups": ["Primary"]});
        });

        it('should return props without title in Meta and with story Name', () => {
            /**
             * Module with stories
             * // Button.stories.js|jsx
             *
             * import React from 'react';
             *
             * import { Button } from './Button';
             *
             * export default {
             *  component: Button,
             * };
             * 
             * export const Primary = () => <Button primary>Button</Button>;
             * Primary.storyName = 'PrimaryTest'
             */
            const storyKey = 'Primary';
            const name = 'Primary Test';
            const title = '';

            const { storyId, storyName, storyKind} = prepareStoryProperties(storyKey, name, title);

            expect(storyId).toEqual('primary-test--primary-test');
            expect(storyName).toEqual('Primary Test');
            expect(storyKind).toEqual({"root": null, "groups": ["Primary Test"]});
        });

        it('should return props with title in Meta and without story Name', () => {
            /**
             * Module with stories
             * // Button.stories.js|jsx
             *
             * import React from 'react';
             *
             * import { Button } from './Button';
             *
             * export default {
             *  title: 'Button'
             *  component: Button,
             * };
             * 
             * export const Primary = () => <Button primary>Button</Button>;
             */
            const storyKey = 'Primary';
            const name = '';
            const title = 'Button';

            const { storyId, storyName, storyKind} = prepareStoryProperties(storyKey, name, title);

            expect(storyId).toEqual('button--primary');
            expect(storyName).toEqual('Primary');
            expect(storyKind).toEqual({"root": null, "groups": ["Button"]});
        });

        it('should return props with title in Meta and without story Name', () => {
            /**
             * Module with stories
             * // Button.stories.js|jsx
             *
             * import React from 'react';
             *
             * import { Button } from './Button';
             *
             * export default {
             *  title: 'Core/Named Export Order'
             *  component: Button,
             * };
             * 
             * export const Story1 = () => <Button primary>Button</Button>;
             */
            const storyKey = 'Story1';
            const name = '';
            const title = 'Core/Named Export Order';

            const { storyId, storyName, storyKind} = prepareStoryProperties(storyKey, name, title);

            expect(storyId).toEqual('core-named-export-order--story-1');
            expect(storyName).toEqual('Story 1');
            expect(storyKind).toEqual({"root": "Core", "groups": ["Named Export Order"]});
        });

        it('should return props with title in Meta and with story Name', () => {
            /**
             * Module with stories
             * // Button.stories.js|jsx
             *
             * import React from 'react';
             *
             * import { Button } from './Button';
             *
             * export default {
             *  title: 'Core/Named Export Order'
             *  component: Button,
             * };
             * 
             * export const Story1 = () => <Button primary>Button</Button>;
             * Story1.storyName = "TestStory"
             */
            const storyKey = 'Story1';
            const name = 'Test Story';
            const title = 'Core/Named Export Order';

            const { storyId, storyName, storyKind} = prepareStoryProperties(storyKey, name, title);

            expect(storyId).toEqual('core-named-export-order--test-story');
            expect(storyName).toEqual('Test Story');
            expect(storyKind).toEqual({"root": "Core", "groups": ["Named Export Order"]});
        });
        
    });

    describe('modulesToStories', () => {
        it('should convert modules stories', () => {
            const result = modulesToStories(storyModules);

            expect(result).toEqual({
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

    describe('getFirstStoryId', () => {
        it('should return undefined for empty map of stories', () => {
            const result = getFirstStoryId({});

            expect(result).toBeUndefined();
        });

        it('should return first story name of stories', () => {
            const stories: StoryComponents = {
                "title--mystory": {
                    "argTypes": {},
                    "args": {},
                    "component": {},
                    "decorators": [],
                    "kinds": ["title"],
                    "parameters": {},
                    "storyFn": () => '',
                    "storyId": "title--mystory",
                    "storyName": "My Story",
                    "subcomponents": []
                }
            };
            const result = getFirstStoryId(stories);

            expect(result).toEqual("title--mystory");
        });
    });
});