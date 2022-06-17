import { newSpecPage } from '@stencil/core/testing';

import { Tab } from '../tab';

describe('str-tab', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Tab],
      html: `<str-tab></str-tab>`,
    });
    expect(page.root).toEqualHtml(`
      <str-tab aria-hidden="true" aria-labelledby="tab-button-undefined" class="str-page tab-hidden" role="tabpanel">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </str-tab>
    `);
  });
});
