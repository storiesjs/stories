import { newSpecPage } from '@stencil/core/testing';

import { Checkbox } from '../checkbox';

describe('stories-checkbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Checkbox],
      html: `<stories-checkbox></stories-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <stories-checkbox aria-checked="false" class="interactive" role="checkbox">
        <mock:shadow-root>
          <svg class="checkbox-icon" part="container" viewBox="0 0 24 24">
            <path d="M5.9,12.5l3.8,3.8l8.8-8.8" part="mark"></path>
          </svg>
          <label htmlfor="ion-cb-0"></label>
          <input aria-checked="false" id="ion-cb-0" type="checkbox">
        </mock:shadow-root>
        <input class="aux-input" name="ion-cb-0" type="hidden" value="">
      </stories-checkbox>
    `);
  });
});
