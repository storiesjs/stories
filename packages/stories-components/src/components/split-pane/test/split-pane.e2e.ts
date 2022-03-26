import { newE2EPage } from '@stencil/core/testing';

describe('stories-split-pane', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stories-split-pane></stories-split-pane>');

    const element = await page.find('stories-split-pane');
    expect(element).toHaveClass('hydrated');
  });
});
