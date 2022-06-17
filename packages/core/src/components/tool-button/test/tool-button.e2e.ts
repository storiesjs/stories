import { newE2EPage } from '@stencil/core/testing';

describe('str-tool-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<str-tool-button></str-tool-button>');

    const element = await page.find('str-tool-button');
    expect(element).toHaveClass('hydrated');
  });
});
