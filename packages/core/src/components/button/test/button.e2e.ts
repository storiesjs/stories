import { newE2EPage } from '@stencil/core/testing';

describe('str-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<str-button></str-button>');

    const element = await page.find('str-button');
    expect(element).toHaveClass('hydrated');
  });
});
