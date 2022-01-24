import { newSpecPage } from '@stencil/core/testing';

import { Input } from '../input';

describe('stories-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Input],
      html: `<stories-input></stories-input>`,
    });
    expect(page.root).toEqualHtml(`
      <stories-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stories-input>
    `);
  });
});
