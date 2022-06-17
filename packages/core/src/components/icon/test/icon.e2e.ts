import { newE2EPage } from '@stencil/core/testing';

describe('str-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<str-icon></str-icon>');

    const element = await page.find('str-icon');
    expect(element).toHaveClass('hydrated');
  });
});
