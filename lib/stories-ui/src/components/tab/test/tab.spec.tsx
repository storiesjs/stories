import { newSpecPage } from '@stencil/core/testing';

import { Tab } from '../tab';

describe('stories-tab', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Tab],
      html: `<stories-tab></stories-tab>`,
    });
    expect(page.root).toEqualHtml(`
      <stories-tab>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stories-tab>
    `);
  });
});
