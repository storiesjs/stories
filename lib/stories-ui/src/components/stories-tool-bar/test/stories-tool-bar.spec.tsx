import { newSpecPage } from '@stencil/core/testing';

import { StoriesToolBar } from '../stories-tool-bar';

describe('stories-tool-bar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StoriesToolBar],
      html: `<stories-tool-bar></stories-tool-bar>`,
    });
    expect(page.root).toEqualHtml(`
      <stories-tool-bar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stories-tool-bar>
    `);
  });
});
