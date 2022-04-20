
import { newSpecPage } from '@stencil/core/testing';

import { Router } from '../router';

describe('str-router', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Router],
      html: `<str-router></str-router>`,
    });
    expect(page.root).toEqualHtml(`
      <str-router>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </str-router>
    `);
  });
});
