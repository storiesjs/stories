import { newE2EPage } from '@stencil/core/testing';

describe('stories-addon-actions', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stories-addon-actions></stories-addon-actions>');

    const element = await page.find('stories-addon-actions');
    expect(element).toHaveClass('hydrated');
  });
});
