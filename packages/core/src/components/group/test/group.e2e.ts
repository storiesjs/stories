import { newE2EPage } from '@stencil/core/testing';

describe('stories-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent(`<stories-group></stories-group>`);

    const element = await page.find('stories-group');
    expect(element).toHaveClass('hydrated');
  });
});
