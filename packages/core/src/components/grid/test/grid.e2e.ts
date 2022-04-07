import { newE2EPage } from '@stencil/core/testing';

describe('stories-grid', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stories-grid></stories-grid>');

    const element = await page.find('stories-grid');
    expect(element).toHaveClass('hydrated');
  });
});
