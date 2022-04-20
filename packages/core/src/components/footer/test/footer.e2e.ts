import { newE2EPage } from '@stencil/core/testing';

describe('str-footer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<str-footer></str-footer>');

    const element = await page.find('str-footer');
    expect(element).toHaveClass('hydrated');
  });
});
