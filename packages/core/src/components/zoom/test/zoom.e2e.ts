import { newE2EPage } from '@stencil/core/testing';

describe('str-zoom', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<str-zoom></str-zoom>');

    const element = await page.find('str-zoom');
    expect(element).toHaveClass('hydrated');
  });
});
