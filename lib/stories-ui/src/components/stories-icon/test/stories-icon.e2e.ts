import { newE2EPage } from '@stencil/core/testing';

describe('stories-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stories-icon></stories-icon>');

    const element = await page.find('stories-icon');
    expect(element).toHaveClass('hydrated');
  });
});
