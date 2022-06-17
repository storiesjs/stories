import { newE2EPage } from '@stencil/core/testing';

describe('str-menu-label', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<str-menu-label></str-menu-label>');

    const element = await page.find('str-menu-label');
    expect(element).toHaveClass('hydrated');
  });
});
