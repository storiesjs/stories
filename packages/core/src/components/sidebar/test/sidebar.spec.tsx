import { newSpecPage } from '@stencil/core/testing';

import { Sidebar } from '../sidebar';

describe('str-sidebar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Sidebar],
      html: `<str-sidebar></str-sidebar>`,
    });
    expect(page.root).toEqualHtml(`
      <str-sidebar>
        <mock:shadow-root>
          <div>
            No stories
          </div>
        </mock:shadow-root>
      </str-sidebar>
    `);
  });
});
