import { newSpecPage } from '@stencil/core/testing';

import { Preview } from '../preview';

describe('str-preview', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Preview],
      html: `<str-preview></str-preview>`,
    });
    expect(page.root).toEqualHtml(`
      <str-preview>
        <mock:shadow-root>
          <str-zoom zoom="1">
            <slot></slot>
          </str-zoom>
        </mock:shadow-root>
      </str-preview>
    `);
  });
});
