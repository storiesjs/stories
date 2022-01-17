import { newE2EPage } from '@stencil/core/testing';

describe('stories-tool-zoom', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stories-tool-zoom></stories-tool-zoom>');

    const element = await page.find('stories-tool-zoom');
    expect(element).toHaveClass('hydrated');
  });
});
