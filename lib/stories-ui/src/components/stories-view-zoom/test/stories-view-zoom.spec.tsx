import { newSpecPage } from '@stencil/core/testing';
import { StoriesViewZoom } from '../stories-view-zoom';

describe('stories-view-zoom', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StoriesViewZoom],
      html: `<stories-view-zoom></stories-view-zoom>`,
    });
    expect(page.root).toEqualHtml(`
      <stories-view-zoom>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stories-view-zoom>
    `);
  });
});
