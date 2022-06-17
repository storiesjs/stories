import { newSpecPage } from '@stencil/core/testing';

import { Row } from '../row';

describe('str-row', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Row],
      html: `<str-row></str-row>`,
    });
    expect(page.root).toEqualHtml(`
      <str-row>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </str-row>
    `);
  });
});
