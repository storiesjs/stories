import { newSpecPage } from '@stencil/core/testing';

import { TabBar } from '../tab-bar';

describe('str-tab-bar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TabBar],
      html: `<str-tab-bar></str-tab-bar>`,
    });
    expect(page.root).toEqualHtml(`
      <str-tab-bar role="tablist">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </str-tab-bar>
    `);
  });
});
