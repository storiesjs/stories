import { newE2EPage } from '@stencil/core/testing';

describe('stories-searchbar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stories-searchbar></stories-searchbar>');

    const element = await page.find('stories-searchbar');
    expect(element).toHaveClass('hydrated');
  });
});
