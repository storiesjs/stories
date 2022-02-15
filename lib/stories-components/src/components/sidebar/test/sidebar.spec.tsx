import { newSpecPage } from '@stencil/core/testing';

import { Sidebar } from '../sidebar';

describe('stories-sidebar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Sidebar],
      html: `<stories-sidebar></stories-sidebar>`,
    });
    expect(page.root).toEqualHtml(`
      <stories-sidebar>
        <mock:shadow-root>
          <div>
            No stories
          </div>
        </mock:shadow-root>
      </stories-sidebar>
    `);
  });
});
