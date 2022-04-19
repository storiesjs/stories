import type { EventEmitter } from '@stencil/core';
import { Component, h, Element, State, Prop, Watch, Event, Build, Method } from '@stencil/core';

import FormItem from '../../function-components/form-item/form-item';
import { HTMLElementSSR } from '../../utils/HTMLElementSSR';
import { inheritAttributes, renderHiddenInput } from '../../utils/helpers';
import { getTextContent, hasSlot } from '../../utils/slot';

let id = 0;

/**
 * @slot - The select's options in the form of menu items.
 * @slot label - The select's label. Alternatively, you can use the label prop.
 * @slot help-text - Help text that describes how to use the select. Alternatively, you can use the help-text prop.
 * @slot invalid-text - Invalid text tells a user how to fix the error. Alternatively, you can use the invalid-text prop.
 */
@Component({
  tag: 'stories-select',
  styleUrl: 'select.scss',
  shadow: true,
})
export class Select {
  private box: HTMLElement;
  private dropdown: HTMLStoriesDropdownElement;
  private inputId = `select-${++id}`;
  private labelId = `select-label-${id}`;
  private helpTextId = `select-help-text-${id}`;
  private invalidTextId = `select-invalid-text-${id}`;
  private menu: HTMLStoriesMenuElement;
  private resizeObserver: ResizeObserver;
  private inheritedAttributes: { [k: string]: any } = {};

  @Element() el: HTMLStoriesSelectElement;

  @State() hasFocus = false;
  @State() hasHelpTextSlot = false;
  @State() hasInvalidTextSlot = false;
  @State() hasLabelSlot = false;
  @State() isOpen = false;
  @State() items = [];
  @State() displayLabel = '';
  @State() displayTags = [];

  /** Set to true to enable multiselect. */
  @Prop() multiple = false;

  /**
   * The maximum number of tags to show when `multiple` is true. After the maximum, "+n" will be shown to indicate the
   * number of additional items that are selected. Set to -1 to remove the limit.
   */
  @Prop() maxTagsVisible = 3;

  /** Set to true to disable the select control. */
  @Prop() disabled = false;

  /** The select's name. */
  @Prop() name = '';

  /** The select's placeholder text. */
  @Prop() placeholder = '';

  /** The select's size. */
  @Prop() size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Enable this option to prevent the panel from being clipped when the component is placed inside a container with
   * `overflow: auto|scroll`.
   */
  @Prop() hoist = false;

  /** The value of the control. This will be a string or an array depending on `multiple`. */
  @Prop({ mutable: true }) value: string | Array<string> = '';

  /** Set to true to draw a pill-style select with rounded edges. */
  @Prop() pill = false;

  /** The select's label. Alternatively, you can use the label slot. */
  @Prop() label = '';

  /** Set to true to display a required indicator, adds an asterisk to label */
  @Prop() requiredIndicator = false;

  /** The select's help text. Alternatively, you can use the help-text slot. */
  @Prop() helpText = '';

  /** The select's invalid text. Alternatively, you can use the invalid-text slot. */
  @Prop() invalidText = '';

  /** Set to true to indicate this field is invalid. Will display the invalid text instead of the help text */
  @Prop({ reflect: true }) invalid = false;

  /** Set to true to add a clear button when the select is populated. */
  @Prop() clearable = false;

  @Watch('disabled')
  handleDisabledChange() {
    if (this.disabled && this.isOpen) {
      this.dropdown.hide();
    }
  }

  @Watch('helpText')
  @Watch('invalidText')
  @Watch('label')
  handleLabelChange() {
    this.handleSlotChange();
  }

  @Watch('multiple')
  handleMultipleChange() {
    // Cast to array | string based on `this.multiple`
    const value = this.getValueAsArray();
    this.value = this.multiple ? value : value[0] || '';
    this.syncItemsFromValue();
  }

  @Watch('value')
  handleValueChange() {
    this.syncItemsFromValue();
    this.storiesChange.emit();
  }

  /** Emitted when the control's value changes. */
  @Event() storiesChange!: EventEmitter<void>;

  /** Emitted when the control gains focus. */
  @Event() storiesFocus!: EventEmitter<void>;

  /** Emitted when the control loses focus. */
  @Event() storiesBlur!: EventEmitter<void>;

  connectedCallback() {
    this.handleClearClick = this.handleClearClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleLabelClick = this.handleLabelClick.bind(this);
    this.handleMenuHide = this.handleMenuHide.bind(this);
    this.handleMenuShow = this.handleMenuShow.bind(this);
    this.handleMenuSelect = this.handleMenuSelect.bind(this);
    this.handleSlotChange = this.handleSlotChange.bind(this);
    this.handleTagInteraction = this.handleTagInteraction.bind(this);

    this.el.shadowRoot.addEventListener('slotchange', this.handleSlotChange);
  }

  componentWillLoad() {
    this.handleSlotChange();
    this.inheritedAttributes = inheritAttributes(this.el, ['aria-label']);
  }

  componentDidLoad() {
    if (Build.isBrowser) {
      this.resizeObserver = new ResizeObserver(() => this.resizeMenu());
    }

    this.reportDuplicateItemValues();

    // We need to do an initial sync after the component has rendered, so this will suppress the re-render warning
    requestAnimationFrame(() => this.syncItemsFromValue());
  }

  disconnectedCallback() {
    this.el.shadowRoot.removeEventListener('slotchange', this.handleSlotChange);
  }

  /** Sets focus on the select. */
  @Method()
  async setFocus() {
    this.hasFocus = true;
    this.storiesFocus.emit();
    this.dropdown.focusOnTrigger();
  }

  getItemLabel(item: HTMLStoriesMenuItemElement) {
    const slot = item.shadowRoot.querySelector('slot:not([name])') as HTMLSlotElement;
    return getTextContent(slot);
  }

  getItems() {
    return [...this.el.querySelectorAll('stories-menu-item') as any];
  }

  getValueAsArray() {
    return Array.isArray(this.value) ? this.value : [this.value];
  }

  private handleBlur = () => {
    // Don't blur if the control is open. We'll move focus back once it closes.
    if (!this.isOpen) {
      this.hasFocus = false;
      this.storiesBlur.emit();
    }
  };

  private handleFocus = () => {
    if (!this.hasFocus) {
      this.hasFocus = true;
      this.storiesFocus.emit();
    }
  };

  handleClearClick(event: MouseEvent) {
    event.stopPropagation();
    this.value = this.multiple ? [] : '';
    this.syncItemsFromValue();
  }

  handleKeyDown(event: KeyboardEvent) {
    const target = event.target as HTMLElement;
    const items = this.getItems();
    const firstItem = items[0];
    const lastItem = items[items.length - 1];

    // Ignore key presses on tags
    if (target.tagName.toLowerCase() === 'stories-tag') {
      return;
    }

    // Tabbing out of the control closes it
    if (event.key === 'Tab') {
      if (this.isOpen) {
        this.dropdown.hide();
      }
      return;
    }

    // Up/down opens the menu
    if (['ArrowDown', 'ArrowUp'].includes(event.key)) {
      event.preventDefault();

      // Show the menu if it's not already open
      if (!this.isOpen) {
        this.dropdown.show();
      }

      // Focus on a menu item
      if (event.key === 'ArrowDown' && firstItem) {
        firstItem.setFocus();
        return;
      }

      if (event.key === 'ArrowUp' && lastItem) {
        lastItem.setFocus();
        return;
      }
    }

    // All other "printable" keys open the menu and initiate type to select
    if (!this.isOpen && event.key.length === 1) {
      event.stopPropagation();
      event.preventDefault();
      this.dropdown.show();
      this.menu.typeToSelect(event.key);
    }
  }

  handleLabelClick() {
    this.box.focus();
  }

  handleMenuSelect(event: CustomEvent) {
    const item = event.detail.item;

    if (this.multiple) {
      this.value = this.value.includes(item.value)
        ? (this.value as []).filter(v => v !== item.value)
        : [...this.value, item.value];
    } else {
      this.value = item.value;
    }

    this.syncItemsFromValue();
  }

  handleMenuShow(event: CustomEvent) {
    if (this.disabled) {
      event.preventDefault();
      return;
    }

    this.resizeMenu();
    this.resizeObserver.observe(this.el);
    this.isOpen = true;
  }

  handleMenuHide() {
    this.resizeObserver.unobserve(this.el);
    this.isOpen = false;

    // Restore focus on the box after the menu is hidden
    this.box.focus();
  }

  handleSlotChange() {
    this.hasHelpTextSlot = hasSlot(this.el, 'help-text');
    this.hasInvalidTextSlot = hasSlot(this.el, 'invalid-text');
    this.hasLabelSlot = hasSlot(this.el, 'label');
    this.syncItemsFromValue();
    this.reportDuplicateItemValues();
  }

  handleTagInteraction(event: KeyboardEvent | MouseEvent) {
    // Don't toggle the menu when a tag's clear button is activated
    const path = event.composedPath() as Array<EventTarget>;
    const clearButton = path.find(el => {
      if (el instanceof HTMLElementSSR) {
        return el.classList.contains('tag-clear');
      }
    });

    if (clearButton) {
      event.stopPropagation();
    }
  }

  reportDuplicateItemValues() {
    const items = this.getItems();

    // Report duplicate values since they can break selection logic
    const duplicateValues = items.map(item => item.value).filter((e, i, a) => a.indexOf(e) !== i);
    if (duplicateValues.length) {
      throw new Error('Duplicate value found on <stories-menu-item> in <stories-select>: "' + duplicateValues.join('", "') + '"');
    }
  }

  resizeMenu() {
    this.menu.style.width = `${this.box.clientWidth}px`;
  }

  syncItemsFromValue() {
    const items = this.getItems();
    const value = this.getValueAsArray();

    // Sync checked states
    items.map(item => (item.checked = value.includes(item.value)));

    // Sync display label
    if (this.multiple) {
      const checkedItems = [];
      value.map(val => items.map(item => (item.value === val ? checkedItems.push(item) : null)));

      this.displayTags = checkedItems.map(item => {
        return (
          <stories-tag
            type="info"
            size={this.size}
            pill={this.pill}
            clearable
            onClick={this.handleTagInteraction}
            onKeyDown={this.handleTagInteraction}
            onStories-clear={event => {
              event.stopPropagation();
              if (!this.disabled) {
                item.checked = false;
                this.syncValueFromItems();
              }
            }}
          >
            {this.getItemLabel(item)}
          </stories-tag>
        );
      });

      if (this.maxTagsVisible > 0 && this.displayTags.length > this.maxTagsVisible) {
        const total = this.displayTags.length;
        this.displayLabel = '';
        this.displayTags = this.displayTags.slice(0, this.maxTagsVisible);
        this.displayTags.push(
          <stories-tag type="info" size={this.size} pill={this.pill}>
            +{total - this.maxTagsVisible}
          </stories-tag>,
        );
      }
    } else {
      const checkedItem = items.filter(item => item.value === value[0])[0];
      this.displayLabel = checkedItem ? this.getItemLabel(checkedItem) : '';
      this.displayTags = [];
    }
  }

  syncValueFromItems() {
    const items = this.getItems();
    const checkedItems = items.filter(item => item.checked);
    const checkedValues = checkedItems.map(item => item.value);

    if (this.multiple) {
      this.value = (this.value as []).filter(val => checkedValues.includes(val));
    } else {
      this.value = checkedValues.length > 0 ? checkedValues[0] : '';
    }
  }

  render() {
    const hasSelection = this.multiple ? this.value.length > 0 : this.value !== '';

    const ariaLabelAttributes = this.inheritedAttributes['aria-label']
      ? { 'aria-label': this.inheritedAttributes['aria-label'] }
      : { 'aria-labelledby': this.labelId };

    renderHiddenInput(true, this.el, this.name, parseValue(this.value), this.disabled);

    return (
      <FormItem
        inputId={this.inputId}
        label={this.label}
        labelId={this.labelId}
        hasLabelSlot={this.hasLabelSlot}
        helpTextId={this.helpTextId}
        helpText={this.helpText}
        hasHelpTextSlot={this.hasHelpTextSlot}
        invalidTextId={this.invalidTextId}
        invalidText={this.invalidText}
        invalid={this.invalid}
        hasInvalidTextSlot={this.hasInvalidTextSlot}
        size={this.size}
        onLabelClick={this.handleLabelClick}
        requiredIndicator={this.requiredIndicator}
      >
        <stories-dropdown
          ref={el => (this.dropdown = el)}
          hoist={this.hoist}
          closeOnSelect={!this.multiple}
          containingElement={this.el}
          class={{
            'select': true,
            'select-open': this.isOpen,
            'select-empty': this.value?.length === 0,
            'select-focused': this.hasFocus,
            'select-clearable': this.clearable,
            'select-disabled': this.disabled,
            'select-multiple': this.multiple,
            'select-has-tags': this.multiple && hasSelection,
            'select-placeholder-visible': this.displayLabel === '',
            [`select-${this.size}`]: true,
            'select-pill': this.pill,
            'select-invalid': this.invalid,
          }}
          onStories-show={this.handleMenuShow}
          onStories-hide={this.handleMenuHide}
        >
          <div
            slot="trigger"
            ref={el => (this.box = el)}
            id={this.inputId}
            class="select-box"
            role="combobox"
            {...ariaLabelAttributes}
            aria-describedby={this.invalid ? this.invalidTextId : this.helpTextId}
            aria-haspopup="true"
            aria-expanded={this.isOpen ? 'true' : 'false'}
            aria-invalid={this.invalid ? 'true' : 'false'}
            aria-required={this.requiredIndicator ? 'true' : 'false'}
            tabIndex={this.disabled ? -1 : 0}
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
            onKeyDown={this.handleKeyDown}
          >
            <div class="select-label">
              {this.displayTags.length ? (
                <span class="select-tags">{this.displayTags}</span>
              ) : (
                this.displayLabel || this.placeholder
              )}
            </div>

            {this.clearable && hasSelection && (
              <button
                class="select-clear"
                type="button"
                onClick={this.handleClearClick}
                aria-label="clear"
                tabindex="-1"
              >
                <svg role="img" aria-hidden="true" viewBox="0 0 512 512">
                  <title>Close Circle</title>
                  <path
                    d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
                    fill="none"
                    stroke="currentColor"
                    stroke-miterlimit="10"
                    stroke-width="32"
                  />
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                    d="M320 320L192 192M192 320l128-128"
                  />
                </svg>
              </button>
            )}

            <span class="caret">
              <svg role="img" aria-hidden="true" viewBox="0 0 512 512">
                <title>Chevron Down</title>
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="48"
                  d="M112 184l144 144 144-144"
                />
              </svg>
            </span>

            <input class="select-hidden-select" aria-hidden="true" value={hasSelection ? '1' : ''} tabIndex={-1} />
          </div>

          <stories-menu ref={el => (this.menu = el)} class="select-menu" onStories-select={this.handleMenuSelect}>
            <slot onSlotchange={this.handleSlotChange} />
          </stories-menu>
        </stories-dropdown>
      </FormItem>
    );
  }
}

const parseValue = (value: any) => {
  if (value == null) {
    return undefined;
  }

  if (Array.isArray(value)) {
    return value.join(',');
  }

  return value.toString();
};
