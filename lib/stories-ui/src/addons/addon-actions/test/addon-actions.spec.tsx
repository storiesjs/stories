import { newSpecPage } from '@stencil/core/testing';

import { AddonActions } from '../addon-actions';

describe('stories-addon-actions', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AddonActions],
      html: `<stories-addon-actions></stories-addon-actions>`,
    });
    expect(page.root).toEqualHtml(`
      <stories-addon-actions>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stories-addon-actions>
    `);
  });
});
