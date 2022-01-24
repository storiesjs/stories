import { newE2EPage } from '@stencil/core/testing';

describe('stories-badge', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stories-badge></stories-badge>');

    const element = await page.find('stories-badge');
    expect(element).toHaveClass('hydrated');
  });
});
