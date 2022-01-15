import { newE2EPage } from '@stencil/core/testing';

describe('stories-layout', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stories-layout></stories-layout>');

    const element = await page.find('stories-layout');
    expect(element).toHaveClass('hydrated');
  });
});
