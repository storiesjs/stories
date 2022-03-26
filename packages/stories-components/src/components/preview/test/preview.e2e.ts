import { newE2EPage } from '@stencil/core/testing';

describe('stories-preview', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stories-preview></stories-preview>');

    const element = await page.find('stories-preview');
    expect(element).toHaveClass('hydrated');
  });
});
