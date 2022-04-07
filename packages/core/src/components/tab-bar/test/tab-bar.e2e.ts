import { newE2EPage } from '@stencil/core/testing';

describe('stories-tab-bar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stories-tab-bar></stories-tab-bar>');

    const element = await page.find('stories-tab-bar');
    expect(element).toHaveClass('hydrated');
  });
});
