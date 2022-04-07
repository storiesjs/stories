import { newE2EPage } from '@stencil/core/testing';

describe('stories-tabs', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stories-tabs></stories-tabs>');

    const element = await page.find('stories-tabs');
    expect(element).toHaveClass('hydrated');
  });
});
