import { newE2EPage } from '@stencil/core/testing';

describe('stories-action-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stories-action-button></stories-action-button>');

    const element = await page.find('stories-action-button');
    expect(element).toHaveClass('hydrated');
  });
});
