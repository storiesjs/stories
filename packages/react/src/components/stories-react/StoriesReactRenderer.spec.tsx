/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { render, fireEvent } from '@testing-library/react';
// import { screen } from '@testing-library/react';
import type { RenderResult } from '@testing-library/react';
import * as React from 'react';

import { StoriesReactRenderer } from './StoriesReactRenderer';
import type { StoryComponent, StoryContext } from "./types";

type ButtonProps = {
  label?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (evt: any) => void;
};

const Button: React.FC<ButtonProps> = ({label, onClick}) => {
  return <button className='my-story' onClick={onClick}>{label}</button>
};

describe('<StoriesReactRenderer />', () => {
  let documentBody: RenderResult;
  let container: HTMLElement;

  let story: StoryComponent;
  let context: StoryContext;

  describe('without context', () => {
    beforeEach(() => {
      story = {
        "storyId": "title--my-story",
        "kinds": ["title"],
        "storyName": "My Story",
        "component": Button,
        "storyFn": (args: any) => <Button {...args}/>,
        "subcomponents": undefined,
        "decorators": [],
        "args": {},
        "argTypes": {},
        "parameters": {}
      };
    });

    beforeEach(() => {
      documentBody = render(<StoriesReactRenderer story={story}/>);
      container = documentBody.container;
    });

    it('shows story without label', () => {
      // expect(documentBody.getByText('Not Found')).toBeInTheDocument();
      // expect(documentBody.getByText('404')).toBeInTheDocument();
      expect(documentBody).toBeDefined();
      expect(container).toBeDefined();
      const button = container.querySelector('button');
      expect(button).toBeDefined();

      // expect(container.innerHTML).toEqual('<button class="my-story"></button>');
    });
  });

  describe('with args', () => {
    const label = 'My Button';
    const onClick = jest.fn();

    beforeEach(() => {
      story = {
        "storyId": "title--my-story",
        "kinds": ["title"],
        "storyName": "My Story",
        "component": Button,
        "storyFn": (args: any) => <Button {...args}/>,
        "subcomponents": undefined,
        "decorators": [],
        "args": {label, onClick},
        "argTypes": {},
        "parameters": {}
      };
      context = {
        // "component": undefined,
        // "subcomponents": undefined,
        "args": {label: 'My Button', onClick: onClick},
        "argTypes": {},
        "parameters": {},
        initialArgs: {}
      };
    });

    beforeEach(() => {
      documentBody = render(<StoriesReactRenderer context={context} story={story}/>);
      container = documentBody.container;
      // screen.debug(container)
    });

    it('shows story without label', () => {
      // expect(documentBody.getByText('Not Found')).toBeInTheDocument();
      // expect(documentBody.getByText('404')).toBeInTheDocument();
      expect(documentBody).toBeDefined();
      expect(container).toBeDefined();
      expect(container.innerHTML).toEqual('<button class="my-story">My Button</button>');

      const button = container.querySelector('button') as HTMLButtonElement;
      fireEvent.click(button);
      expect(onClick).toHaveBeenCalled();
    });
  });
});