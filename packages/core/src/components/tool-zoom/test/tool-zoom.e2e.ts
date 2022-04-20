import { newE2EPage } from '@stencil/core/testing';

describe('str-tool-zoom', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<str-tool-zoom></str-tool-zoom>');

    const element = await page.find('str-tool-zoom');
    expect(element).toHaveClass('hydrated');
  });
});
