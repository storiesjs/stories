// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'str-grid',
  styleUrl: 'grid.scss',
  shadow: true,
})
export class Grid {

  /**
   * If `true`, the grid will have a fixed width based on the screen size.
   */
  @Prop() fixed = false;

  render(): JSX.Element {
    return (
      <Host
        class={{'grid-fixed': this.fixed}}
      >
        <slot></slot>
      </Host>
    );
  }

}
