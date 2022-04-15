import { Component, h, Prop, Element, State, Watch } from '@stencil/core';

import { hasSlot } from '../../helpers';
// import { hasSlot } from '../../utils/slot';

/**
 * @slot - The default slot where fields are placed.
 * @slot label - The field group label. Recommended for proper accessibility. Alternatively, you can use the label prop.
 */
@Component({
  tag: 'stories-group',
  styleUrl: 'group.scss',
  shadow: true,
})
export class Group {
  @Element() el!: HTMLElement;

  @State() hasLabelSlot = false;

  /** The field group label. Recommended for proper accessibility. Alternatively, you can use the label slot. */
  @Prop() label = '';

  /** Render the fields horizontal instead of vertical */
  @Prop({ reflect: true }) horizontal = false;

  @Watch('label')
  handleLabelChange(): void {
    this.handleSlotChange();
  }

  connectedCallback(): void {
    this.handleSlotChange = this.handleSlotChange.bind(this);

    this.el.shadowRoot.addEventListener('slotchange', this.handleSlotChange);
  }

  componentWillLoad(): void {
    this.handleSlotChange();
  }

  disconnectedCallback(): void {
    this.el.shadowRoot.removeEventListener('slotchange', this.handleSlotChange);
  }

  handleSlotChange(): void {
    this.hasLabelSlot = hasSlot(this.el, 'label');
  }

  render(): JSX.Element {
    const hasLabel = this.label ? true : this.hasLabelSlot;

    return (
      <fieldset
        class={{
          'group': true,
          'group-horizontal': this.horizontal,
          'group-has-label': hasLabel,
        }}
      >
        <legend class="group-label" aria-hidden={hasLabel ? 'false' : 'true'}>
          <slot name="label">{this.label}</slot>
        </legend>
        <div class="content">
          <slot></slot>
        </div>
      </fieldset>
    );
  }
}
