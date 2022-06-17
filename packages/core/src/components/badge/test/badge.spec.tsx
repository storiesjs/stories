import { newSpecPage } from '@stencil/core/testing';

import { Badge } from '../badge';

describe('str-badge', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Badge],
      html: `<str-badge></str-badge>`,
    });
    expect(page.root).toEqualHtml(`
      <str-badge class="badge-medium badge-pill badge-primary" size="medium" type="primary">
        <mock:shadow-root>
          <span class="badge">
            <slot></slot>
          </span>
        </mock:shadow-root>
      </str-badge>
    `);
  });
});
