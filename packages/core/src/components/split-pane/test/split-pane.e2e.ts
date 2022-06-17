import { newE2EPage } from '@stencil/core/testing';

describe('str-split-pane', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<str-split-pane></str-split-pane>');

    const element = await page.find('str-split-pane');
    expect(element).toHaveClass('hydrated');
  });
});
