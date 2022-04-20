import { newE2EPage } from '@stencil/core/testing';

describe('str-select', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <str-select></str-select>
    `);

    const element = await page.find('str-select');
    expect(element).toHaveClass('hydrated');
  });

  it('should emit str-focus when gaining focus', async () => {
    const page = await newE2EPage({
      html: `
        <str-select></str-select>
      `,
    });
    const select = await page.find('str-select');
    const grFocus = await select.spyOnEvent('str-focus');

    await select.click();

    expect(grFocus).toHaveReceivedEventTimes(1);
  });
});
