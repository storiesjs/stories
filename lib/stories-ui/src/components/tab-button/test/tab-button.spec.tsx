import { newSpecPage } from '@stencil/core/testing';

import { TabButton } from '../tab-button';

describe('stories-tab-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TabButton],
      html: `<stories-tab-button></stories-tab-button>`,
    });
    expect(page.root).toEqualHtml(`
      <stories-tab-button class="tab-layout-icon-start" role="tab" tabindex="0">
        <mock:shadow-root>
          <a class="button-native" href="#" part="native" tabindex="-1">
            <span class="button-inner">
              <slot></slot>
            </span>
          </a>
        </mock:shadow-root>
      </stories-tab-button>
    `);
  });
});
