import { newE2EPage } from '@stencil/core/testing';

describe('str-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<str-menu></str-menu>');

    const element = await page.find('str-menu');
    expect(element).toHaveClass('hydrated');
  });
});
