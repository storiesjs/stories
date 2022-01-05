import { newSpecPage } from '@stencil/core/testing';
import { StoriesNavigator } from '../stories-navigator';

describe('stories-navigator', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StoriesNavigator],
      html: `<stories-navigator></stories-navigator>`,
    });
    expect(page.root).toEqualHtml(`
      <stories-navigator>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stories-navigator>
    `);
  });
});
