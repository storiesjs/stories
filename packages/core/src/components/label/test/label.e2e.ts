import { newE2EPage } from '@stencil/core/testing';

describe('str-label', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<str-label></str-label>');

    const element = await page.find('str-label');
    expect(element).toHaveClass('hydrated');
  });
});
