import { newE2EPage } from '@stencil/core/testing';

describe('str-radio', () => {
  it('should render', async () => {
    const page = await newE2EPage();
    await page.setContent('<str-radio></str-radio>');

    const element = await page.find('str-radio');
    expect(element).toHaveClass('hydrated');
  });

  it('should emit str-focus when gaining focus', async () => {
    const page = await newE2EPage({
      html: `
        <str-radio>Radio</str-radio>
      `,
    });
    const radio = await page.find('str-radio');
    const grFocus = await radio.spyOnEvent('strFocus');

    await radio.click();

    expect(grFocus).toHaveReceivedEventTimes(1);
  });

  it('should emit str-blur when losing focus', async () => {
    const page = await newE2EPage({
      html: `
        <str-radio>Radio</str-radio>
        <button>Native Button</button>
      `,
    });
    const radio = await page.find('str-radio');
    const nativeButton = await page.find('button');
    const grBlur = await radio.spyOnEvent('strBlur');

    await radio.click();
    await nativeButton.click();

    expect(grBlur).toHaveReceivedEventTimes(1);
  });
});
