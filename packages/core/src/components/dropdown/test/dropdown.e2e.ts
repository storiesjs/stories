import { newE2EPage } from '@stencil/core/testing';

describe('str-dropdown', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<str-dropdown></str-dropdown>');

    const element = await page.find('str-dropdown');
    expect(element).toHaveClass('hydrated');
  });
});
