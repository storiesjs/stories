import { newSpecPage } from '@stencil/core/testing';

import { Button } from '../button';

describe('str-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<str-button></str-button>`,
    });
    expect(page.root).toEqualHtml(`
      <str-button class="button-default button-medium" size="medium" variant="default">
        <mock:shadow-root>
           <button class="button-native" type="button">
            <span class="button-inner">
              <slot name="icon-only"></slot>
              <slot name="start"></slot>
              <slot></slot>
              <slot name="end"></slot>
            </span>
          </button>
        </mock:shadow-root>
      </str-button>
    `);
  });
});
