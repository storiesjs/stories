// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import type { StoryModule, StoryModules } from '../../../types';
import { App } from '../app';

describe('str-app', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [App],
      html: '<str-app></str-app>',
    });
    expect(root).toEqualHtml(`
      <str-app>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </str-app>
    `);
  });

  it('renders with values', async () => {
    const storyModule: StoryModule = {
      'default': {
        title: 'title',
        component: {},
        subcomponents: [],
        decorators: [],
        args: {},
        argTypes: {}
      },
      '__esModule': true,
      'myStory': {}
    };
    const storyModules: StoryModules = [storyModule];
    const storyChange = jest.fn();
    const { root } = await newSpecPage({
      components: [App],
      template: () => (<str-app modules={storyModules} onStrChange={storyChange}></str-app>),
    });
    expect(root).toEqualHtml(`
      <str-app>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </str-app>
    `);
    expect(storyChange).toHaveBeenCalled();
  });
});
