import { newE2EPage } from '@stencil/core/testing';

describe('stories-buttons', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stories-buttons></stories-buttons>');

    const element = await page.find('stories-buttons');
    expect(element).toHaveClass('hydrated');
  });
});
