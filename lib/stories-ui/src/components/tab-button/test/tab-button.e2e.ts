import { newE2EPage } from '@stencil/core/testing';

describe('stories-tab-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stories-tab-button></stories-tab-button>');

    const element = await page.find('stories-tab-button');
    expect(element).toHaveClass('hydrated');
  });
});
