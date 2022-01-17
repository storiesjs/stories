// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, h, Prop } from '@stencil/core';

import { icons } from '../icons';

@Component({
  tag: 'stories-icon',
  styleUrl: 'stories-icon.css',
  shadow: true,
})
export class StoriesIcon {

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
