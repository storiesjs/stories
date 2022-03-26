import { newE2EPage } from '@stencil/core/testing';

describe('stories-row', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stories-row></stories-row>');

    const element = await page.find('stories-row');
    expect(element).toHaveClass('hydrated');
  });
});
