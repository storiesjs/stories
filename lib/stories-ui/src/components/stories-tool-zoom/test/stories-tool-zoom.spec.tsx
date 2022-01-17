import { newSpecPage } from '@stencil/core/testing';

import { StoriesToolZoom } from '../stories-tool-zoom';

describe('stories-tool-zoom', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StoriesToolZoom],
      html: `<stories-tool-zoom></stories-tool-zoom>`,
    });
    expect(page.root).toEqualHtml(`
      <stories-tool-zoom>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stories-tool-zoom>
    `);
  });
});
