import { newSpecPage } from '@stencil/core/testing';

import { ToolButton } from '../tool-button';

describe('stories-tool-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ToolButton],
      html: `<stories-tool-button></stories-tool-button>`,
    });
    expect(page.root).toEqualHtml(`
      <stories-tool-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stories-tool-button>
    `);
  });
});
