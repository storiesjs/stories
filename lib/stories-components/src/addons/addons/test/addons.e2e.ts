import { newE2EPage } from '@stencil/core/testing';

describe('stories-addons', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stories-addons></stories-addons>');

    const element = await page.find('stories-addons');
    expect(element).toHaveClass('hydrated');
  });
});
