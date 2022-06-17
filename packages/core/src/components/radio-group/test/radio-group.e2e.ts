import { newE2EPage } from '@stencil/core/testing';

describe('str-radio-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent(`<str-radio-group></str-radio-group>`);

    const element = await page.find('str-radio-group');
    expect(element).toHaveClass('hydrated');
  });
});
