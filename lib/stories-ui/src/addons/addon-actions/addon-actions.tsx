// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'stories-addon-actions',
  styleUrl: 'addon-actions.scss',
  shadow: true,
})
export class AddonActions {
  render(): JSX.Element {
    return (
      <Host>
        <stories-label>Addon Actions</stories-label>
      </Host>
    );
  }
}
