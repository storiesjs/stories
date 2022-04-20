import { newE2EPage } from '@stencil/core/testing';

describe('str-tab-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<str-tab-button></str-tab-button>');

    const element = await page.find('str-tab-button');
    expect(element).toHaveClass('hydrated');
  });
});
