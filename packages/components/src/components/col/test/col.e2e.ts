import { newE2EPage } from '@stencil/core/testing';

describe('stories-col', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stories-col></stories-col>');

    const element = await page.find('stories-col');
    expect(element).toHaveClass('hydrated');
  });
});
