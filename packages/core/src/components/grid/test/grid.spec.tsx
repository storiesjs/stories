import { newSpecPage } from '@stencil/core/testing';

import { Grid } from '../grid';

describe('str-grid', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Grid],
      html: `<str-grid></str-grid>`,
    });
    expect(page.root).toEqualHtml(`
      <str-grid>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </str-grid>
    `);
  });
});
