import { newSpecPage } from '@stencil/core/testing';

import { Zoom } from '../zoom';

describe('stories-zoom', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Zoom],
      html: `<stories-zoom></stories-zoom>`,
    });
    expect(page.root).toEqualHtml(`
      <stories-zoom>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stories-zoom>
    `);
  });
});
