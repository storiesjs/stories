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
          <input class="native-input" name="ion-input-0" placeholder="" type="text" value="">
        </mock:shadow-root>
      </stories-input>
    `);
  });
});
