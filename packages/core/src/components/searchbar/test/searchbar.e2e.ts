import { newE2EPage } from '@stencil/core/testing';

describe('str-searchbar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<str-searchbar></str-searchbar>');

    const element = await page.find('str-searchbar');
    expect(element).toHaveClass('hydrated');
  });
});
