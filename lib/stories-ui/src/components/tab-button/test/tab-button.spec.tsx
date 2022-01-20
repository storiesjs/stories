import { newSpecPage } from '@stencil/core/testing';

import { TabButton } from '../tab-button';

describe('stories-tab-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TabButton],
      html: `<stories-tab-button></stories-tab-button>`,
    });
    expect(page.root).toEqualHtml(`
      <stories-tab-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stories-tab-button>
    `);
  });
});
