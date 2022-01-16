import { newSpecPage } from '@stencil/core/testing';

import { StoriesLayout } from '../stories-layout';

describe('stories-layout', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StoriesLayout],
      html: `<stories-layout></stories-layout>`,
    });
    expect(page.root).toEqualHtml(`
      <stories-layout>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stories-layout>
    `);
  });
});
