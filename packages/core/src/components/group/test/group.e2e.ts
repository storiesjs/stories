import { newE2EPage } from '@stencil/core/testing';

describe('str-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent(`<str-group></str-group>`);

    const element = await page.find('str-group');
    expect(element).toHaveClass('hydrated');
  });
});
