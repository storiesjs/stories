import { newSpecPage } from '@stencil/core/testing';

import { Addons } from '../../addons/addons';
import { AddonActions } from '../addon-actions';

describe('str-addon-actions', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AddonActions, Addons],
      html: `<str-addons><str-addon-actions></str-addon-actions></str-addons>`,
    });
    expect(page.root).toEqualHtml(`
      <str-addons>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
        <str-addon-actions>
          <mock:shadow-root>
            <ul></ul>
          </mock:shadow-root>
        </str-addon-actions>
      </str-addons>
    `);
  });
});
