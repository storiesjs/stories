import { newE2EPage } from '@stencil/core/testing';

describe('str-col', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<str-col></str-col>');

    const element = await page.find('str-col');
    expect(element).toHaveClass('hydrated');
  });
});
