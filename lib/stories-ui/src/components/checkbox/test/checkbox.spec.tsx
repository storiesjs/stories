import { newSpecPage } from '@stencil/core/testing';

import { Checkbox } from '../checkbox';

describe('stories-checkbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Checkbox],
      html: `<stories-checkbox></stories-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <stories-checkbox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stories-checkbox>
    `);
  });
});
