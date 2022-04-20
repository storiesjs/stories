import { newSpecPage } from '@stencil/core/testing';

import { Col } from '../col';

describe('str-col', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Col],
      html: `<str-col></str-col>`,
    });
    expect(page.root).toEqualHtml(`
      <str-col>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </str-col>
    `);
  });
});
