import { newE2EPage } from '@stencil/core/testing';

describe('str-preview', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<str-preview></str-preview>');

    const element = await page.find('str-preview');
    expect(element).toHaveClass('hydrated');
  });
});
