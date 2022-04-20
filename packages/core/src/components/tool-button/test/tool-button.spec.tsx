import { newSpecPage } from '@stencil/core/testing';

import { ToolButton } from '../tool-button';

describe('str-tool-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ToolButton],
      html: `<str-tool-button></str-tool-button>`,
    });
    expect(page.root).toEqualHtml(`
      <str-tool-button>
        <mock:shadow-root>
          <button>
            <str-icon></str-icon>
          </button>
        </mock:shadow-root>
      </str-tool-button>
    `);
  });
});
