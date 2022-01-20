import { newE2EPage } from '@stencil/core/testing';

describe('stories-zoom', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stories-zoom></stories-zoom>');

    const element = await page.find('stories-zoom');
    expect(element).toHaveClass('hydrated');
  });
});
