import { newSpecPage } from '@stencil/core/testing';

import { SplitPane } from '../split-pane';

describe('stories-split-pane', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SplitPane],
      html: `<stories-split-pane></stories-split-pane>`,
    });
    expect(page.root).toEqualHtml(`
      <stories-split-pane>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stories-split-pane>
    `);
  });
});
