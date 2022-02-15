import { newE2EPage } from '@stencil/core/testing';

describe('stories-addon-controls', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stories-addon-controls></stories-addon-controls>');

    const element = await page.find('stories-addon-controls');
    expect(element).toHaveClass('hydrated');
  });
});
