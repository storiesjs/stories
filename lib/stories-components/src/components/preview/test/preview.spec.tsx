import { newSpecPage } from '@stencil/core/testing';

import { Preview } from '../preview';

describe('stories-preview', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Preview],
      html: `<stories-preview></stories-preview>`,
    });
    expect(page.root).toEqualHtml(`
      <stories-preview>
        <mock:shadow-root>
          <stories-zoom zoom="1">
            <slot></slot>
          </stories-zoom>
        </mock:shadow-root>
      </stories-preview>
    `);
  });
});
