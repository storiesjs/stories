import { newSpecPage } from '@stencil/core/testing';

import { Button } from '../button';

describe('stories-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<stories-button></stories-button>`,
    });
    expect(page.root).toEqualHtml(`
      <stories-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stories-button>
    `);
  });
});
