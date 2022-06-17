import { newE2EPage } from '@stencil/core/testing';

describe('str-sidebar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<str-sidebar></str-sidebar>');

    const element = await page.find('str-sidebar');
    expect(element).toHaveClass('hydrated');
  });
});
