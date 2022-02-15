import { newSpecPage } from '@stencil/core/testing';

import { AddonControls } from '../addon-controls';

describe('stories-addon-controls', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AddonControls],
      html: `<stories-addon-controls></stories-addon-controls>`,
    });
    expect(page.root).toEqualHtml(`
      <stories-addon-controls>
        <mock:shadow-root>
          <div>Addon Controls</div>
        </mock:shadow-root>
      </stories-addon-controls>
    `);
  });
});
