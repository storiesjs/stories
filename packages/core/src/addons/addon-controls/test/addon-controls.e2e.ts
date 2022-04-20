import { newE2EPage } from '@stencil/core/testing';

describe('str-addon-controls', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<str-addon-controls></str-addon-controls>');

    const element = await page.find('str-addon-controls');
    expect(element).toHaveClass('hydrated');
  });
});
