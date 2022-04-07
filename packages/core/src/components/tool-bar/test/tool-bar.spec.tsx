import { newSpecPage } from '@stencil/core/testing';

import { ToolBar } from '../tool-bar';

describe('stories-tool-bar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ToolBar],
      html: `<stories-tool-bar></stories-tool-bar>`,
    });
    expect(page.root).toEqualHtml(`
      <stories-tool-bar>
        <mock:shadow-root>
          <div class="bar">
            <div class="inner">
              <div class="left side">
                <slot name="left"></slot>
              </div>
              <div class="right side">
                <slot name="right"></slot>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </stories-tool-bar>
    `);
  });
});
