import { newSpecPage } from '@stencil/core/testing';

import { Addons } from '../addons';

describe('stories-addons', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Addons],
      html: `<stories-addons></stories-addons>`,
    });
    expect(page.root).toEqualHtml(`
      <stories-addons>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stories-addons>
    `);
  });
});
