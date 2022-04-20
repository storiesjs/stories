import { newSpecPage } from '@stencil/core/testing';

import { ToolZoom } from '../tool-zoom';

describe('str-tool-zoom', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ToolZoom],
      html: `<str-tool-zoom></str-tool-zoom>`,
    });
    expect(page.root).toEqualHtml(`
      <str-tool-zoom>
        <mock:shadow-root>
          <str-tool-button command="zoomIn" icon="zoomIn"></str-tool-button>
          <str-tool-button command="zoomOut" icon="zoomOut"></str-tool-button>
          <str-tool-button command="zoomReset" icon="zoomReset"></str-tool-button>
        </mock:shadow-root>
      </str-tool-zoom>
    `);
  });
});
