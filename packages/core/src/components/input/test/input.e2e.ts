import { newE2EPage } from '@stencil/core/testing';

describe('stories-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stories-input></stories-input>');

    const element = await page.find('stories-input');
    expect(element).toHaveClass('hydrated');
  });
});
