import { newE2EPage } from '@stencil/core/testing';

describe('str-router', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<str-router></str-router>');

    const element = await page.find('str-router');
    expect(element).toHaveClass('hydrated');
  });
});
