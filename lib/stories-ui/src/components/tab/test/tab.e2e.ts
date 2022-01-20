import { newE2EPage } from '@stencil/core/testing';

describe('stories-tab', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stories-tab></stories-tab>');

    const element = await page.find('stories-tab');
    expect(element).toHaveClass('hydrated');
  });
});
