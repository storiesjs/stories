import { newE2EPage } from '@stencil/core/testing';

describe('str-menu-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<str-menu-item></str-menu-item>');

    const element = await page.find('str-menu-item');
    expect(element).toHaveClass('hydrated');
  });
});
