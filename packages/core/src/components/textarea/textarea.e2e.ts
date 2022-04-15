import { newE2EPage } from '@stencil/core/testing';

describe('stories-textarea', () => {
  it('should render', async () => {
    const page = await newE2EPage();
    await page.setContent('<stories-textarea></stories-textarea>');

    const element = await page.find('stories-textarea');
    expect(element).toHaveClass('hydrated');
  });

  it('should emit stories-focus when gaining focus', async () => {
    const page = await newE2EPage({
      html: `
        <stories-textarea></stories-textarea>
      `,
    });
    const textarea = await page.find('stories-textarea');
    const storiesFocus = await textarea.spyOnEvent('stories-focus');

    await textarea.click();

    expect(storiesFocus).toHaveReceivedEventTimes(1);
  });

  it('should emit stories-blur when losing focus', async () => {
    const page = await newE2EPage({
      html: `
        <stories-textarea></stories-textarea>
        <button>Native Button</button>
      `,
    });
    const textarea = await page.find('stories-textarea');
    const nativeButton = await page.find('button');
    const storiesBlur = await textarea.spyOnEvent('stories-blur');

    await textarea.click();
    await nativeButton.click();

    expect(storiesBlur).toHaveReceivedEventTimes(1);
  });
});
