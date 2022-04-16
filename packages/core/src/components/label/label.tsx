// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, Host, h, Element, Prop } from '@stencil/core';

import type { Color } from '../../types';
import { createColorClasses } from '../../utils/utils';

@Component({
  tag: 'stories-label',
  styleUrl: 'label.scss',
  shadow: true,
})
export class Label {
  @Element() el!: HTMLElement;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  @Prop({ reflect: true }) color?: Color;

  /**
   * The position determines where and how the label behaves inside an item.
   */
  @Prop() position?: 'fixed' | 'stacked' | 'floating' = 'fixed';

  render(): JSX.Element {
    const position = this.position;

    return (
      <Host
        class={createColorClasses(this.color, {
          [`label-${position}`]: position !== undefined,
          'label-rtl': document.dir === 'rtl'
        })}
      >
        <slot/>
      </Host>
    );
  }

}
