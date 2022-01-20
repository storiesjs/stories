import { newE2EPage } from '@stencil/core/testing';

describe('stories-action-bar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stories-action-bar></stories-action-bar>');

    const element = await page.find('stories-action-bar');
    expect(element).toHaveClass('hydrated');
  });
});
