import { newE2EPage } from '@stencil/core/testing';

describe('str-badge', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<str-badge></str-badge>');

    const element = await page.find('str-badge');
    expect(element).toHaveClass('hydrated');
  });
});
