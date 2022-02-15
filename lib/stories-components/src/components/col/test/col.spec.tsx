import { newSpecPage } from '@stencil/core/testing';

import { Col } from '../col';

describe('stories-col', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Col],
      html: `<stories-col></stories-col>`,
    });
    expect(page.root).toEqualHtml(`
      <stories-col>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stories-col>
    `);
  });
});
