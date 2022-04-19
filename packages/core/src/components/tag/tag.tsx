import type { EventEmitter } from '@stencil/core';
import { Component, Host, h, Prop, Event } from '@stencil/core';

/**
 * @slot - The tag's content.
 */
@Component({
  tag: 'stories-tag',
  styleUrl: 'tag.scss',
  shadow: true,
})
export class Tag {
  /** The tag's type. */
  @Prop({ reflect: true }) type: 'primary' | 'success' | 'info' | 'warning' | 'danger' = 'primary';

  /** The tag's size. */
  @Prop({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** Set to true to draw a pill-style tag with rounded edges. */
  @Prop({ reflect: true }) pill = false;

  /** Set to true to make the tag clearable. */
  @Prop({ reflect: true }) clearable = false;

  /** Emitted when the clear button is activated. */
  @Event() storiesClear: EventEmitter<void>;

  connectedCallback() {
    this.handleClearClick = this.handleClearClick.bind(this);
  }

  handleClearClick() {
    this.storiesClear.emit();
  }

  render() {
    return (
      <Host
        class={{
          [`tag-${this.type}`]: true,
          [`tag-${this.size}`]: true,
          'tag-pill': this.pill,
          'tag-clearable': this.clearable,
        }}
      >
        <span class="tag">
          <slot></slot>

          {this.clearable && (
            <stories-button
              variant="plain"
              size={this.size}
              class="tag-clear"
              aria-label="clear"
              onClick={this.handleClearClick}
            >
              <svg slot="icon-only" role="img" aria-hidden="true" viewBox="0 0 512 512">
                <title>Close</title>
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                  d="M368 368L144 144M368 144L144 368"
                />
              </svg>
            </stories-button>
          )}
        </span>
      </Host>
    );
  }
}
