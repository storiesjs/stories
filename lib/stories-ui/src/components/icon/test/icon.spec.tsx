import { newSpecPage } from '@stencil/core/testing';

import { Icon } from '../icon';

describe('stories-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Icon],
      html: `<stories-icon></stories-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <stories-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stories-icon>
    `);
  });
});
