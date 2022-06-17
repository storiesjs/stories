import { newE2EPage } from '@stencil/core/testing';

describe('str-tab-bar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<str-tab-bar></str-tab-bar>');

    const element = await page.find('str-tab-bar');
    expect(element).toHaveClass('hydrated');
  });
});
