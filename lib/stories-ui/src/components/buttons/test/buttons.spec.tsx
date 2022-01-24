import { newSpecPage } from '@stencil/core/testing';

import { Buttons } from '../buttons';

describe('stories-buttons', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Buttons],
      html: `<stories-buttons></stories-buttons>`,
    });
    expect(page.root).toEqualHtml(`
      <stories-buttons>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stories-buttons>
    `);
  });
});
