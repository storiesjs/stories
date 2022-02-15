import { newSpecPage } from '@stencil/core/testing';

import { Addons } from '../../addons/addons';
import { AddonActions } from '../addon-actions';

describe('stories-addon-actions', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AddonActions, Addons],
      html: `<stories-addons><stories-addon-actions></stories-addon-actions></stories-addons>`,
    });
    expect(page.root).toEqualHtml(`
      <stories-addons>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
        <stories-addon-actions>
          <mock:shadow-root>
            <stories-label>
              Addon Actions
            </stories-label>
            <ul></ul>
          </mock:shadow-root>
        </stories-addon-actions>
      </stories-addons>
    `);
  });
});
