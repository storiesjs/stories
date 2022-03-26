import { newSpecPage } from '@stencil/core/testing';

import { ToolZoom } from '../tool-zoom';

describe('stories-tool-zoom', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ToolZoom],
      html: `<stories-tool-zoom></stories-tool-zoom>`,
    });
    expect(page.root).toEqualHtml(`
      <stories-tool-zoom>
        <mock:shadow-root>
          <stories-tool-button command="zoomIn" icon="zoomIn"></stories-tool-button>
          <stories-tool-button command="zoomOut" icon="zoomOut"></stories-tool-button>
          <stories-tool-button command="zoomReset" icon="zoomReset"></stories-tool-button>
        </mock:shadow-root>
      </stories-tool-zoom>
    `);
  });
});
