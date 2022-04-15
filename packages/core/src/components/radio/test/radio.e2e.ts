import { newE2EPage } from '@stencil/core/testing';

describe('stories-radio', () => {
  it('should render', async () => {
    const page = await newE2EPage();
    await page.setContent('<stories-radio></stories-radio>');

    const element = await page.find('stories-radio');
    expect(element).toHaveClass('hydrated');
  });

  it('should emit stories-focus when gaining focus', async () => {
    const page = await newE2EPage({
      html: `
        <stories-radio>Radio</stories-radio>
      `,
    });
    const radio = await page.find('stories-radio');
    const grFocus = await radio.spyOnEvent('stories-focus');

    await radio.click();

    expect(grFocus).toHaveReceivedEventTimes(1);
  });

  it('should emit stories-blur when losing focus', async () => {
    const page = await newE2EPage({
      html: `
        <stories-radio>Radio</stories-radio>
        <button>Native Button</button>
      `,
    });
    const radio = await page.find('stories-radio');
    const nativeButton = await page.find('button');
    const grBlur = await radio.spyOnEvent('stories-blur');

    await radio.click();
    await nativeButton.click();

    expect(grBlur).toHaveReceivedEventTimes(1);
  });
});
