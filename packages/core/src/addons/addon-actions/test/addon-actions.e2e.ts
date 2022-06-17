import { newE2EPage } from '@stencil/core/testing';

describe('str-addon-actions', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<str-addon-actions></str-addon-actions>');

    const element = await page.find('str-addon-actions');
    expect(element).toHaveClass('hydrated');
  });
});
