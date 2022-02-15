import { newSpecPage } from '@stencil/core/testing';

import { Searchbar } from '../searchbar';

describe('stories-searchbar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Searchbar],
      html: `<stories-searchbar></stories-searchbar>`,
    });
    expect(page.root).toEqualHtml(`
      <stories-searchbar class="searchbar-left-aligned searchbar-should-show-clear" role="search">
        <mock:shadow-root>
          <div class="searchbar-input-container">
            <input aria-label="search text" class="searchbar-input" placeholder="Search" type="search" value="">
            <stories-icon aria-hidden="true" class="searchbar-search-icon" name="search-sharp"></stories-icon>
            <button aria-label="reset" class="searchbar-clear-button" no-blur="" type="button">
              <stories-icon aria-hidden="true" class="searchbar-clear-icon" name="close-sharp"></stories-icon>
            </button>
          </div>
        </mock:shadow-root>
      </stories-searchbar>
    `);
  });
});
