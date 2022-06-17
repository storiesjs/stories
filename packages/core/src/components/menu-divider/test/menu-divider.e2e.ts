import { newE2EPage } from '@stencil/core/testing';

describe('str-menu-divider', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<str-menu-divider></str-menu-divider>');

    const element = await page.find('str-menu-divider');
    expect(element).toHaveClass('hydrated');
  });
});
