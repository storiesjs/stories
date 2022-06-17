import { newSpecPage } from '@stencil/core/testing';

import { Addons } from '../addons';

describe('str-addons', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Addons],
      html: `<str-addons></str-addons>`,
    });
    expect(page.root).toEqualHtml(`
      <str-addons>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </str-addons>
    `);
  });
});
