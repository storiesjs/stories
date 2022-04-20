import { newE2EPage } from '@stencil/core/testing';

describe('str-tab', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<str-tab></str-tab>');

    const element = await page.find('str-tab');
    expect(element).toHaveClass('hydrated');
  });
});
