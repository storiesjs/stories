import { newE2EPage } from '@stencil/core/testing';

describe('str-spinner', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<str-spinner></str-spinner>');

    const element = await page.find('str-spinner');
    expect(element).toHaveClass('hydrated');
  });
});
