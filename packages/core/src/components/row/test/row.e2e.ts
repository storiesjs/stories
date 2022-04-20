import { newE2EPage } from '@stencil/core/testing';

describe('str-row', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<str-row></str-row>');

    const element = await page.find('str-row');
    expect(element).toHaveClass('hydrated');
  });
});
