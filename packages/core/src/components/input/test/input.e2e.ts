import { newE2EPage } from '@stencil/core/testing';

describe('str-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<str-input></str-input>');

    const element = await page.find('str-input');
    expect(element).toHaveClass('hydrated');
  });
});
