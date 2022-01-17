import { newSpecPage } from '@stencil/core/testing';

import { StoriesActionBar } from '../stories-action-bar';

describe('stories-action-bar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StoriesActionBar],
      html: `<stories-action-bar></stories-action-bar>`,
    });
    expect(page.root).toEqualHtml(`
      <stories-action-bar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stories-action-bar>
    `);
  });
});
