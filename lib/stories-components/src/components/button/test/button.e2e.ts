import { newE2EPage } from '@stencil/core/testing';

describe('stories-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stories-button></stories-button>');

    const element = await page.find('stories-button');
    expect(element).toHaveClass('hydrated');
  });
});
