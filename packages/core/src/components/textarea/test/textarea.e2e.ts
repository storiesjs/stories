import { newE2EPage } from '@stencil/core/testing';

describe('str-textarea', () => {
  it('should render', async () => {
    const page = await newE2EPage();
    await page.setContent('<str-textarea></str-textarea>');

    const element = await page.find('str-textarea');
    expect(element).toHaveClass('hydrated');
  });

  it('should emit str-focus when gaining focus', async () => {
    const page = await newE2EPage({
      html: `
        <str-textarea></str-textarea>
      `,
    });
    const textarea = await page.find('str-textarea');
    const strFocus = await textarea.spyOnEvent('str-focus');

    await textarea.click();

    expect(strFocus).toHaveReceivedEventTimes(1);
  });

  it('should emit str-blur when losing focus', async () => {
    const page = await newE2EPage({
      html: `
        <str-textarea></str-textarea>
        <button>Native Button</button>
      `,
    });
    const textarea = await page.find('str-textarea');
    const nativeButton = await page.find('button');
    const strBlur = await textarea.spyOnEvent('str-blur');

    await textarea.click();
    await nativeButton.click();

    expect(strBlur).toHaveReceivedEventTimes(1);
  });
});
