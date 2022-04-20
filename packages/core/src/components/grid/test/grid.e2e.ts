import { newE2EPage } from '@stencil/core/testing';

describe('str-grid', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<str-grid></str-grid>');

    const element = await page.find('str-grid');
    expect(element).toHaveClass('hydrated');
  });
});
