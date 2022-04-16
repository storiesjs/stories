// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, Host, h, Prop } from '@stencil/core';

import type { Color } from '../../types';
import { createColorClasses } from '../../utils/utils';

@Component({
  tag: 'stories-badge',
  styleUrl: 'badge.scss',
  shadow: true,
})
export class Badge {

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  @Prop({ reflect: true }) color?: Color;

  render(): JSX.Element {
    return (
      <Host
        class={createColorClasses(this.color, {})}
      >
        <slot></slot>
      </Host>
    );
  }

}
