import { newE2EPage } from '@stencil/core/testing';

describe('stories-footer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stories-footer></stories-footer>');

    const element = await page.find('stories-footer');
    expect(element).toHaveClass('hydrated');
  });
});
