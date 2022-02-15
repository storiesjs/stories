import { newSpecPage } from '@stencil/core/testing';

import { Zoom } from '../zoom';

describe('stories-zoom', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Zoom],
      html: `<stories-zoom></stories-zoom>`,
    });
    expect(page.root).toEqualHtml(`
      <stories-zoom style="height: 50; transform-origin: top left; transform: scale(1);">
        <mock:shadow-root>
          <div class="innerZoomElementWrapper">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </stories-zoom>
    `);
  });
});
