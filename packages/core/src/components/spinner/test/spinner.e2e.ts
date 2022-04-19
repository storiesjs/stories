import { newE2EPage } from '@stencil/core/testing';

describe('stories-spinner', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stories-spinner></stories-spinner>');

    const element = await page.find('stories-spinner');
    expect(element).toHaveClass('hydrated');
  });
});
