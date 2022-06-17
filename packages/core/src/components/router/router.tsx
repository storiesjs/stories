// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'str-router',
  styleUrl: 'router.css',
  shadow: true,
})
export class Router {

  render(): JSX.Element {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
