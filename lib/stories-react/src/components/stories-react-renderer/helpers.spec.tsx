/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, fireEvent } from '@testing-library/react';
import type { RenderResult } from '@testing-library/react';
import * as React from 'react';

import { sanitizeStoryContextUpdate, executeFnStore, executeFnDecor, prepareStory } from "./helpers";

import type { StoryComponent } from '.';


describe('helpers', () => {
    describe('sanitizeStoryContextUpdate', () => {
        it('should return no data for undefined input', () => {
            const update: any = undefined;
            const result = sanitizeStoryContextUpdate(update);

            expect(result).toEqual({});
        });

        it('should remove stories keys from input', () => {
            const update: any = {
                storyId: 'storyId',
                kinds: [],
                storyName: 'storyName',
                storyFn: () => (<div></div>),
                component: undefined,
                subcomponents: undefined,
                decorators: undefined,
                args: undefined,
                argTypes: undefined,
                label: 'test'
            };
            const result = sanitizeStoryContextUpdate(update);

            expect(result).toEqual({label: 'test'});
        });
    });

    describe('executeFnStore', () => {
        it('should return function for execution', () => {
            const fn = jest.fn((props: {label: string}) => (<button>{props.label}</button>));
            const store = executeFnStore(fn);

            expect(store).toBeDefined();
            // console.log('store', store)

            const context = {args: {label: 'Test Label'}};
            store(context);
            expect(fn).toHaveBeenCalledWith({label: 'Test Label'});
        });
    });

    describe('executeFnDecor', () => {
        it('should return function for execution', () => {
            const decorator = jest.fn((Story: any) => (
                <section style={{ margin: '3em' }}>
                    <Story/>
                </section>
            ));
            // const fn = jest.fn((props: {label: string}) => (<button>{props.label}</button>));
            const decor = executeFnDecor(decorator);

            expect(decor).toBeDefined();
            // console.log('store', store)

            const Story = (args: any) => (<button>{args.label}</button>);
            const context = {args: {label: 'Test Label'}};
            decor(Story, context);
            expect(decorator).toHaveBeenCalledWith(Story, context);
        });
    });

    describe('prepareStory', () => {
        it('should work with args', async () => {
            const onClick = jest.fn();
            const story: StoryComponent = {
                storyId: 'storyId',
                kinds: [],
                storyName: 'storyName',
                storyFn: jest.fn((args) => (<button {...args}></button>)),
            };
            const decoratedStory = prepareStory(story);
            // console.log('result', result)
            expect(decoratedStory).toBeDefined();

            const context = {args: {name: 'Test Label', onClick: onClick}};
            const reactElement = decoratedStory(context);
            // console.log('comp', comp);
            expect(story.storyFn).toHaveBeenCalledWith({name: 'Test Label', onClick: onClick});
            expect(reactElement).toBeDefined();
            expect(reactElement.type).toEqual('button');

            const documentBody: RenderResult = render(reactElement); 
            expect(documentBody).toBeDefined();
            expect(documentBody.container.innerHTML).toEqual('<button name="Test Label"></button>');

            const button = documentBody.container.querySelector('button');
            await fireEvent.click(button);
            expect(onClick).toHaveBeenCalled();
        });

        it('should return function for story with args', async () => {
            const onClick = jest.fn();
            const story: StoryComponent = {
                storyId: 'storyId',
                kinds: [],
                storyName: 'storyName',
                storyFn: jest.fn((props: {label: string, onClick: (evt: any) => void}) => (<button onClick={props.onClick}>{props.label}</button>)),
            };
            const decoratedStory = prepareStory(story);
            // console.log('result', result)
            expect(decoratedStory).toBeDefined();
            
            const context = {args: {label: 'Test Label', onClick: onClick}};
            const reactElement = decoratedStory(context);
            // console.log('comp', comp)
            expect(story.storyFn).toHaveBeenCalledWith({label: 'Test Label', onClick: onClick});
            expect(reactElement).toBeDefined();
            expect(reactElement.type).toEqual('button');

            const documentBody: RenderResult = render(reactElement); 
            expect(documentBody).toBeDefined();
            expect(documentBody.container.innerHTML).toEqual('<button>Test Label</button>');

            const button = documentBody.container.querySelector('button');
            await fireEvent.click(button);
            expect(onClick).toHaveBeenCalled();
        });

        it('should return function for story with args wrapped within decorators', async () => {
            const onClick = jest.fn();
            const story: StoryComponent = {
                storyId: 'storyId',
                kinds: [],
                storyName: 'storyName',
                storyFn: jest.fn((props: {label: string, onClick: (evt: any) => void}) => (<button onClick={props.onClick}>{props.label}</button>)),
                decorators: [
                    (Story) => (
                        <div style={{ margin: '3em' }}>
                            <Story />
                        </div>
                    ),
                ]
            };
            const decoratedStory = prepareStory(story);
            // console.log('result', result)
            expect(decoratedStory).toBeDefined();

            const context = {args: {label: 'Test Label', onClick: onClick}};
            const reactElement = decoratedStory(context);
            // console.log('comp', comp)
            // expect(story.storyFn).toHaveBeenCalledWith({label: 'Test Label', onClick: onClick});
            expect(reactElement).toBeDefined();
            expect(reactElement.type).toEqual('div');

            const documentBody: RenderResult = render(reactElement); 
            expect(documentBody).toBeDefined();
            expect(documentBody.container.innerHTML).toEqual('<div style="margin: 3em;"><button>Test Label</button></div>');

            const button = documentBody.container.querySelector('button');
            await fireEvent.click(button);
            expect(onClick).toHaveBeenCalled();
        });
    });
});