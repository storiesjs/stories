import { newSpecPage } from '@stencil/core/testing';

import { Row } from '../row';

describe('stories-row', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Row],
      html: `<stories-row></stories-row>`,
    });
    expect(page.root).toEqualHtml(`
      <stories-row>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stories-row>
    `);
  });
});
