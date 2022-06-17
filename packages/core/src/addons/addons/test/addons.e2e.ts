import { newE2EPage } from '@stencil/core/testing';

describe('str-addons', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<str-addons></str-addons>');

    const element = await page.find('str-addons');
    expect(element).toHaveClass('hydrated');
  });
});
