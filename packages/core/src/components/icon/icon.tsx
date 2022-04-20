// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, h, Prop } from '@stencil/core';

import { icons } from '../../icons';

@Component({
  tag: 'str-icon',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class Icon {

  /**
   * Icon name
   */
  @Prop() name: string;

  render(): JSX.Element {
    return (
      <svg viewBox="0 0 1024 1024">
        <path d={icons[this.name]} />
      </svg>
    );
  }

}
