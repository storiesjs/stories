import { newSpecPage } from '@stencil/core/testing';

import { StoriesToolButton } from '../stories-tool-button';

describe('stories-tool-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StoriesToolButton],
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
