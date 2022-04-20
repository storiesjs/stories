import { newE2EPage } from '@stencil/core/testing';

describe('str-tool-bar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<str-tool-bar></str-tool-bar>');

    const element = await page.find('str-tool-bar');
    expect(element).toHaveClass('hydrated');
  });
});
