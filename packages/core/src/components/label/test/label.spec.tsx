import { newSpecPage } from '@stencil/core/testing';

import { Label } from '../label';

describe('str-label', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Label],
      html: `<str-label></str-label>`,
    });
    expect(page.root).toEqualHtml(`
      <str-label class="label-fixed">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </str-label>
    `);
  });
});
