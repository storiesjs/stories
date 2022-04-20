import { newSpecPage } from '@stencil/core/testing';

import { TabButton } from '../tab-button';

describe('str-tab-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TabButton],
      html: `<str-tab-button></str-tab-button>`,
    });
    expect(page.root).toEqualHtml(`
      <str-tab-button class="tab-layout-icon-start" role="tab" tabindex="0">
        <mock:shadow-root>
          <a class="button-native" href="#" part="native" tabindex="-1">
            <span class="button-inner">
              <slot></slot>
            </span>
          </a>
        </mock:shadow-root>
      </str-tab-button>
    `);
  });
});
