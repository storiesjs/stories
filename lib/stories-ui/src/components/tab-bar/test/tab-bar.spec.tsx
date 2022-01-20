import { newSpecPage } from '@stencil/core/testing';

import { TabBar } from '../tab-bar';

describe('stories-tab-bar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TabBar],
      html: `<stories-tab-bar></stories-tab-bar>`,
    });
    expect(page.root).toEqualHtml(`
      <stories-tab-bar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stories-tab-bar>
    `);
  });
});
