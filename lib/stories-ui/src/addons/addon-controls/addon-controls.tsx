// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'stories-addon-controls',
  styleUrl: 'addon-controls.scss',
  shadow: true,
})
export class AddonControls {

  render(): JSX.Element {
    return (
      <Host>
        <div>Addon Controls</div>
      </Host>
    );
  }

}
