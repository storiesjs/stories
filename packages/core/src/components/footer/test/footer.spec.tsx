import { newSpecPage } from '@stencil/core/testing';

import { Footer } from '../footer';

describe('str-footer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Footer],
      html: `<str-footer></str-footer>`,
    });
    expect(page.root).toEqualHtml(`
      <str-footer role="contentinfo">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </str-footer>
    `);
  });
});
