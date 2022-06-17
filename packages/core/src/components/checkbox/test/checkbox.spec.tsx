import { newSpecPage } from '@stencil/core/testing';

import { Checkbox } from '../checkbox';

describe('str-checkbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Checkbox],
      html: `<str-checkbox></str-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <str-checkbox>
        <mock:shadow-root>
          <label class="checkbox" htmlfor="checkbox-1">
          <span class="checkbox-control">
             <input aria-checked="false" aria-describedby="" aria-labelledby="checkbox-label-1" id="checkbox-1" role="checkbox" type="checkbox">
           </span>
           <span class="checkbox-label" id="checkbox-label-1">
             <slot></slot>
           </span>
        </mock:shadow-root>
        <input class="aux-input" name="checkbox-1" type="hidden" value="">
      </str-checkbox>
    `);
  });
});
