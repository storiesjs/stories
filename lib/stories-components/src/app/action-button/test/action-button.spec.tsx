import { newSpecPage } from '@stencil/core/testing';

import { ActionButton } from '../action-button';

describe('stories-action-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ActionButton],
      html: `<stories-action-button></stories-action-button>`,
    });
    expect(page.root).toEqualHtml(`
      <stories-action-button>
        <mock:shadow-root>
          <button></button>
        </mock:shadow-root>
      </stories-action-button>
    `);
  });
});
