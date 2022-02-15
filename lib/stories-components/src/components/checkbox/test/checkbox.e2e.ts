import { newE2EPage } from '@stencil/core/testing';

describe('stories-checkbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stories-checkbox></stories-checkbox>');

    const element = await page.find('stories-checkbox');
    expect(element).toHaveClass('hydrated');
  });
});
