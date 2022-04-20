import { newSpecPage } from '@stencil/core/testing';

import { Badge } from '../badge';

describe('str-badge', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Badge],
      html: `<str-badge></str-badge>`,
    });
    expect(page.root).toEqualHtml(`
      <str-badge>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </str-badge>
    `);
  });
});
