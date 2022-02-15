import { newE2EPage } from '@stencil/core/testing';

describe('stories-tool-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stories-tool-button></stories-tool-button>');

    const element = await page.find('stories-tool-button');
    expect(element).toHaveClass('hydrated');
  });
});
