import { newSpecPage } from '@stencil/core/testing';
import { StoriesIcon } from '../stories-icon';

describe('stories-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StoriesIcon],
      html: `<stories-icon></stories-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <stories-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stories-icon>
    `);
  });
});
