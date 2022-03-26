import { newSpecPage } from '@stencil/core/testing';

import { Grid } from '../grid';

describe('stories-grid', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Grid],
      html: `<stories-grid></stories-grid>`,
    });
    expect(page.root).toEqualHtml(`
      <stories-grid>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stories-grid>
    `);
  });
});
