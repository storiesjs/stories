import { newE2EPage } from '@stencil/core/testing';

describe('stories-navigator', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stories-navigator></stories-navigator>');

    const element = await page.find('stories-navigator');
    expect(element).toHaveClass('hydrated');
  });
});
