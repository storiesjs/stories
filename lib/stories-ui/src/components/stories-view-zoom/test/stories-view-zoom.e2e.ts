import { newE2EPage } from '@stencil/core/testing';

describe('stories-view-zoom', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stories-view-zoom></stories-view-zoom>');

    const element = await page.find('stories-view-zoom');
    expect(element).toHaveClass('hydrated');
  });
});
