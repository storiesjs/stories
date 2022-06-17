import { newSpecPage } from '@stencil/core/testing';

import { Zoom } from '../zoom';

describe('str-zoom', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Zoom],
      html: `<str-zoom></str-zoom>`,
    });
    expect(page.root).toEqualHtml(`
      <str-zoom style="height: 50; transform-origin: top left; transform: scale(1);">
        <mock:shadow-root>
          <div class="innerZoomElementWrapper">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </str-zoom>
    `);
  });
});
