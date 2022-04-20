import { newE2EPage } from '@stencil/core/testing';

describe('str-tabs', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<str-tabs></str-tabs>');

    const element = await page.find('str-tabs');
    expect(element).toHaveClass('hydrated');
  });
});
