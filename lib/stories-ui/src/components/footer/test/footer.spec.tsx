import { newSpecPage } from '@stencil/core/testing';

import { Footer } from '../footer';

describe('stories-footer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Footer],
      html: `<stories-footer></stories-footer>`,
    });
    expect(page.root).toEqualHtml(`
      <stories-footer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stories-footer>
    `);
  });
});
