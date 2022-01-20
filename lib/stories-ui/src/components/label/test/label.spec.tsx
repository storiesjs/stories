import { newSpecPage } from '@stencil/core/testing';

import { Label } from '../label';

describe('stories-label', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Label],
      html: `<stories-label></stories-label>`,
    });
    expect(page.root).toEqualHtml(`
      <stories-label>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stories-label>
    `);
  });
});
