import { newE2EPage } from '@stencil/core/testing';

describe('str-tag', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<str-tag></str-tag>');

    const element = await page.find('str-tag');
    expect(element).toHaveClass('hydrated');
  });
});
