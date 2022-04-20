import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'str-badge',
  styleUrl: 'badge.scss',
  shadow: true,
})
export class Badge {

  /** The badge's type. */
  @Prop({ reflect: true }) type: 'primary' | 'success' | 'info' | 'warning' | 'danger' = 'primary';

  /** The badge's size. */
  @Prop({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  render(): JSX.Element {
    return (
      <Host
        class={{
          [`badge-${this.type}`]: true,
          [`badge-${this.size}`]: true,
          'badge-pill': true,
        }}
      >
        <span class="badge">
          <slot></slot>
        </span>
      </Host>
    );
  }

}
