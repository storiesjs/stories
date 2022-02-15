import { newSpecPage } from '@stencil/core/testing';

import { ActionBar } from '../action-bar';

describe('stories-action-bar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ActionBar],
      html: `<stories-action-bar></stories-action-bar>`,
    });
    expect(page.root).toEqualHtml(`
      <stories-action-bar>
        <mock:shadow-root>
        </mock:shadow-root>
      </stories-action-bar>
    `);
  });
});
