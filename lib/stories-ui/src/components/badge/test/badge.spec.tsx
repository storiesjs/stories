import { newSpecPage } from '@stencil/core/testing';

import { Badge } from '../badge';

describe('stories-badge', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Badge],
      html: `<stories-badge></stories-badge>`,
    });
    expect(page.root).toEqualHtml(`
      <stories-badge>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stories-badge>
    `);
  });
});
