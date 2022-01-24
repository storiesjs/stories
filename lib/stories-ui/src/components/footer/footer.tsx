// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'stories-footer',
  styleUrl: 'footer.scss',
  shadow: true,
})
export class Footer {

  render(): JSX.Element {
    return (
      <Host
        role="contentinfo"
      >
        <slot></slot>
      </Host>
    );
  }

}
