import { newE2EPage } from '@stencil/core/testing';

describe('str-checkbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<str-checkbox></str-checkbox>');

    const element = await page.find('str-checkbox');
    expect(element).toHaveClass('hydrated');
  });
});
