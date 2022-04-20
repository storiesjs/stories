import { newSpecPage } from '@stencil/core/testing';

import { AddonControls } from '../addon-controls';

describe('str-addon-controls', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AddonControls],
      html: `<str-addon-controls></str-addon-controls>`,
    });
    expect(page.root).toEqualHtml(`
      <str-addon-controls>
        <mock:shadow-root>
          <div>Addon Controls</div>
        </mock:shadow-root>
      </str-addon-controls>
    `);
  });
});
