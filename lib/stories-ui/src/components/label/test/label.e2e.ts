import { newE2EPage } from '@stencil/core/testing';

describe('stories-label', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stories-label></stories-label>');

    const element = await page.find('stories-label');
    expect(element).toHaveClass('hydrated');
  });
});
