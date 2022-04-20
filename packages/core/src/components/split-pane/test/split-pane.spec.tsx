import { newSpecPage } from '@stencil/core/testing';

import { SplitPane } from '../split-pane';

describe('str-split-pane', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SplitPane],
      html: `<str-split-pane></str-split-pane>`,
    });
    expect(page.root).toEqualHtml(`
      <str-split-pane>
        <mock:shadow-root>
          <slot name="slot1"></slot>
          <div id="median"></div>
          <slot name="slot2"></slot>
        </mock:shadow-root>
      </str-split-pane>
    `);
  });
});
