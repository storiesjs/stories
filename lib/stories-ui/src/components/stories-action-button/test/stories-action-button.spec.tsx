import { newSpecPage } from '@stencil/core/testing';

import { StoriesActionButton } from '../stories-action-button';

describe('stories-action-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StoriesActionButton],
      html: `<stories-action-button></stories-action-button>`,
    });
    expect(page.root).toEqualHtml(`
      <stories-action-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stories-action-button>
    `);
  });
});
