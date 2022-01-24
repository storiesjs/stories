import type { EventEmitter } from '@stencil/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, Host, h, Element, Prop, Event } from '@stencil/core';

import { inheritAttributes } from '../../helpers';
import type { Color, RouterDirection } from '../../types';
import { createColorClasses, hostContext } from '../../utils';

@Component({
  tag: 'stories-button',
  styleUrl: 'button.scss',
  shadow: true,
})
export class Button {
  private inItem = false;
  private inListHeader = false;
  private inToolbar = false;
  private inheritedAttributes: Record<string, string> = {};

  @Element() el!: HTMLElement;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  @Prop({ reflect: true }) color?: Color;

  /**
   * The type of button.
   */
  @Prop({ mutable: true }) buttonType = 'button';

  /**
   * If `true`, the user cannot interact with the button.
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * Set to `"block"` for a full-width button or to `"full"` for a full-width button
   * without left and right borders.
   */
  @Prop({ reflect: true }) expand?: 'full' | 'block';

  /**
   * Set to `"clear"` for a transparent button, to `"outline"` for a transparent
   * button with a border, or to `"solid"`. The default style is `"solid"` except inside of
   * a toolbar, where the default is `"clear"`.
   */
  @Prop({ reflect: true, mutable: true }) fill?: 'clear' | 'outline' | 'solid' | 'default';

  /**
   * When using a router, it specifies the transition direction when navigating to
   * another page using `href`.
   */
  @Prop() routerDirection: RouterDirection = 'forward';

  /**
   * Contains a URL or a URL fragment that the hyperlink points to.
   * If this property is set, an anchor tag will be rendered.
   */
  @Prop() href: string | undefined;

  /**
   * The button shape.
   */
  @Prop({ reflect: true }) shape?: 'round';

  /**
   * The type of the button.
   */
  @Prop() type: 'submit' | 'reset' | 'button' = 'button';

  /**
   * The button size.
   */
  @Prop({ reflect: true }) size?: 'small' | 'default' | 'large';

  /**
   * If `true`, activates a button with a heavier font weight.
   */
  @Prop() strong = false;

  /**
   * Specifies where to display the linked URL.
   * Only applies when an `href` is provided.
   * Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.
   */
  @Prop() target: string | undefined;

  /**
   * Emitted when the button has focus.
   */
  @Event() storiesFocus!: EventEmitter<void>;

  /**
   * Emitted when the button loses focus.
   */
  @Event() storiesBlur!: EventEmitter<void>;

  /**
   * Emitted when the button click.
   */
  @Event() storiesClick!: EventEmitter<void>;

  componentWillLoad(): void {
    this.inToolbar = !!this.el.closest('ion-buttons');
    this.inListHeader = !!this.el.closest('ion-list-header');
    this.inItem = !!this.el.closest('ion-item') || !!this.el.closest('ion-item-divider');
    this.inheritedAttributes = inheritAttributes(this.el, ['aria-label']);
  }

  private get hasIconOnly() {
    return !!this.el.querySelector('[slot="icon-only"]');
  }

  private handleClick = () => {
    this.storiesClick.emit();
  }

  private onFocus = () => {
    this.storiesFocus.emit();
  }

  private onBlur = () => {
    this.storiesBlur.emit();
  }

  render(): JSX.Element {
    const { buttonType, type, disabled, target, size, href, color, expand, hasIconOnly, shape, strong, inheritedAttributes } = this;
    const finalSize = size === undefined && this.inItem ? 'small' : size;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const TagType = href === undefined ? 'button' : 'a' as any;
    const attrs = (TagType === 'button')
      ? { type }
      : {
        href,
        target
      };

    let fill = this.fill;
    if (fill === undefined) {
      fill = this.inToolbar || this.inListHeader ? 'clear' : 'solid';
    }
    return (
      <Host
        aria-disabled={disabled ? 'true' : null}
        class={createColorClasses(color, {
          [buttonType]: true,
          [`${buttonType}-${expand}`]: expand !== undefined,
          [`${buttonType}-${finalSize}`]: finalSize !== undefined,
          [`${buttonType}-${shape}`]: shape !== undefined,
          [`${buttonType}-${fill}`]: true,
          [`${buttonType}-strong`]: strong,
          'in-toolbar': hostContext('ion-toolbar', this.el),
          'in-toolbar-color': hostContext('ion-toolbar[color]', this.el),
          'button-has-icon-only': hasIconOnly,
          'button-disabled': disabled,
          'ion-activatable': true,
          'ion-focusable': true,
        })}
        onClick={this.handleClick}
      >
        <TagType
          {...attrs}
          class="button-native"
          disabled={disabled}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          part="native"
          {...inheritedAttributes}
        >
          <span class="button-inner">
            <slot name="icon-only"></slot>
            <slot name="start"></slot>
            <slot></slot>
            <slot name="end"></slot>
          </span>
        </TagType>
      </Host>
    );
  }

}
