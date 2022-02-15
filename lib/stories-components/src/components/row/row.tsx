// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'stories-row',
  styleUrl: 'row.scss',
  shadow: true,
})
export class Row {

  render(): JSX.Element {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
