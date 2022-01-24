import { newSpecPage } from '@stencil/core/testing';

import { Searchbar } from '../searchbar';

describe('stories-searchbar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Searchbar],
      html: `<stories-searchbar></stories-searchbar>`,
    });
    expect(page.root).toEqualHtml(`
      <stories-searchbar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stories-searchbar>
    `);
  });
});
