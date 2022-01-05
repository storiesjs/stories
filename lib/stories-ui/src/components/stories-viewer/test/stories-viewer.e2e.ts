import { newE2EPage } from '@stencil/core/testing';

describe('stories-viewer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stories-viewer></stories-viewer>');

    const element = await page.find('stories-viewer');
    expect(element).toHaveClass('hydrated');
  });
});
