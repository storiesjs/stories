import { newSpecPage } from '@stencil/core/testing';

import { Searchbar } from '../searchbar';

describe('str-searchbar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Searchbar],
      html: `<str-searchbar></str-searchbar>`,
    });
    expect(page.root).toEqualHtml(`
      <str-searchbar class="searchbar-left-aligned searchbar-should-show-clear" role="search">
        <mock:shadow-root>
          <div class="searchbar-input-container">
            <input aria-label="search text" class="searchbar-input" placeholder="Search" type="search" value="">
            <str-icon aria-hidden="true" class="searchbar-search-icon" name="search-sharp"></str-icon>
            <button aria-label="reset" class="searchbar-clear-button" no-blur="" type="button">
              <str-icon aria-hidden="true" class="searchbar-clear-icon" name="close-sharp"></str-icon>
            </button>
          </div>
        </mock:shadow-root>
      </str-searchbar>
    `);
  });
});
