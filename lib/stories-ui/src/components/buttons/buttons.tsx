// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'stories-buttons',
  styleUrl: 'buttons.scss',
  shadow: true,
})
export class Buttons {

  /**
   * If true, buttons will disappear when its
   * parent toolbar has fully collapsed if the toolbar
   * is not the first toolbar. If the toolbar is the
   * first toolbar, the buttons will be hidden and will
   * only be shown once all toolbars have fully collapsed.
   *
   * Only applies in `ios` mode with `collapse` set to
   * `true` on `ion-header`.
   *
   * Typically used for [Collapsible Large Titles](https://ionicframework.com/docs/api/title#collapsible-large-titles)
   */
  @Prop() collapse = false;

  render(): JSX.Element {
    return (
      <Host
        class={{
          'buttons-collapse': this.collapse
        }}
      >
        <slot></slot>
      </Host>
    );
  }

}
