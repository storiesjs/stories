import { newSpecPage } from '@stencil/core/testing';
import { StoriesViewer } from '../stories-viewer';

describe('stories-viewer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StoriesViewer],
      html: `<stories-viewer></stories-viewer>`,
    });
    expect(page.root).toEqualHtml(`
      <stories-viewer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stories-viewer>
    `);
  });
});
