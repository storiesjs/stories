import { newSpecPage } from '@stencil/core/testing';

import { StoriesApp } from '../stories-app';

describe('stories-app', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [StoriesApp],
      html: '<stories-app></stories-app>',
    });
    expect(root).toEqualHtml(`
      <stories-app>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </stories-app>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [StoriesApp],
      html: `<stories-app first="Stencil" last="'Don't call me a framework' JS"></stories-app>`,
    });
    expect(root).toEqualHtml(`
      <stories-app first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </stories-app>
    `);
  });
});
