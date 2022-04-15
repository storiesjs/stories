import { Component, Host, h } from '@stencil/core';

/**
 * @slot - The menu label's content.
 */
@Component({
  tag: 'stories-menu-label',
  styleUrl: 'menu-label.scss',
  shadow: true,
})
export class MenuLabel {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
