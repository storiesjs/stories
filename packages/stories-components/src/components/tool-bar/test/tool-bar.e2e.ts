import { newE2EPage } from '@stencil/core/testing';

describe('stories-tool-bar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stories-tool-bar></stories-tool-bar>');

    const element = await page.find('stories-tool-bar');
    expect(element).toHaveClass('hydrated');
  });
});
