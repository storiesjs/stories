import { newSpecPage } from '@stencil/core/testing';

import { Icon } from '../icon';

describe('str-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Icon],
      html: `<str-icon></str-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <str-icon>
        <mock:shadow-root>
          <svg viewBox="0 0 1024 1024">
            <path></path>
          </svg>
        </mock:shadow-root>
      </str-icon>
    `);
  });
});
