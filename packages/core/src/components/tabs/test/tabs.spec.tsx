import { newSpecPage } from '@stencil/core/testing';

import { Tabs } from '../tabs';

describe('str-tabs', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Tabs],
      html: `<str-tabs></str-tabs>`,
    });
    expect(page.root).toEqualHtml(`
      <str-tabs>
        <mock:shadow-root>
          <div class="tabs-inner">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </str-tabs>
    `);
  });
});
