import { newE2EPage } from '@stencil/core/testing';

describe('stories-sidebar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stories-sidebar></stories-sidebar>');

    const element = await page.find('stories-sidebar');
    expect(element).toHaveClass('hydrated');
  });
});
