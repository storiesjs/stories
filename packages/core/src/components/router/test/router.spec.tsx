
import { newSpecPage } from '@stencil/core/testing';

import { Router } from '../router';

describe('stories-router', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Router],
      html: `<stories-router></stories-router>`,
    });
    expect(page.root).toEqualHtml(`
      <stories-router>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stories-router>
    `);
  });
});
