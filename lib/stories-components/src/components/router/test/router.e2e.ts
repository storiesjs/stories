import { newE2EPage } from '@stencil/core/testing';

describe('stories-router', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stories-router></stories-router>');

    const element = await page.find('stories-router');
    expect(element).toHaveClass('hydrated');
  });
});
