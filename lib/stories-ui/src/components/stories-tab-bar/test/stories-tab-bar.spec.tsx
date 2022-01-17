import { newSpecPage } from '@stencil/core/testing';

import { StoriesTabBar } from '../stories-tab-bar';

describe('stories-tab-bar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StoriesTabBar],
      html: `<stories-tab-bar></stories-tab-bar>`,
    });
    expect(page.root).toEqualHtml(`
      <stories-tab-bar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stories-tab-bar>
    `);
  });
});
