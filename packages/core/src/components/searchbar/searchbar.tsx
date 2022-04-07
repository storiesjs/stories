import type { EventEmitter } from '@stencil/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, Host, h, Prop, Element, State, Watch, Event, Method, forceUpdate } from '@stencil/core';

import { debounceEvent, raf } from '../../helpers';
import type { Color, SearchbarChangeEventDetail, StyleEventDetail } from '../../types';
import { createColorClasses } from '../../utils';

@Component({
  tag: 'stories-searchbar',
  styleUrl: 'searchbar.scss',
  shadow: true,
})
export class Searchbar {

  private nativeInput?: HTMLInputElement;
  private shouldAlignLeft = true;

  @Element() el!: HTMLStoriesSearchbarElement;

  @State() focused = false;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  @Prop({ reflect: true }) color?: Color;

  /**
   * Set the cancel button icon. Only applies to `md` mode.
   * Defaults to `"arrow-back-sharp"`.
   */
  @Prop() cancelButtonIcon = 'arrow-back-sharp';

  /**
   * Set the clear icon. Defaults to `"close-circle"` for `ios` and `"close-sharp"` for `md`.
   */
  @Prop() clearIcon?: string;

  /**
   * Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke. This also impacts form bindings such as `ngModel` or `v-model`.
   */
  @Prop() debounce = 250;

  @Watch('debounce')
  protected debounceChanged(): void {
    this.storiesChange = debounceEvent(this.storiesChange, this.debounce);
  }

  /**
   * If `true`, the user cannot interact with the input.
   */
  @Prop() disabled = false;

  /**
   * A hint to the browser for which keyboard to display.
   * Possible values: `"none"`, `"text"`, `"tel"`, `"url"`,
   * `"email"`, `"numeric"`, `"decimal"`, and `"search"`.
   */
  @Prop() inputmode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';

  /**
   * Set the input's placeholder.
   * `placeholder` can accept either plaintext or HTML as a string.
   * To display characters normally reserved for HTML, they
   * must be escaped. For example `<Stories>` would become
   * `&lt;Stories&gt;`
   */
  @Prop() placeholder = 'Search';

  /**
   * The icon to use as the search icon. Defaults to `"search-outline"` in
   * `ios` mode and `"search-sharp"` in `md` mode.
   */
  @Prop() searchIcon?: string;

  /**
   * Sets the behavior for the cancel button. Defaults to `"never"`.
   * Setting to `"focus"` shows the cancel button on focus.
   * Setting to `"never"` hides the cancel button.
   * Setting to `"always"` shows the cancel button regardless
   * of focus state.
   */
  @Prop() showCancelButton: 'never' | 'focus' | 'always' = 'never';

  /**
   * Sets the behavior for the clear button. Defaults to `"focus"`.
   * Setting to `"focus"` shows the clear button on focus if the
   * input is not empty.
   * Setting to `"never"` hides the clear button.
   * Setting to `"always"` shows the clear button regardless
   * of focus state, but only if the input is not empty.
   */
  @Prop() showClearButton: 'never' | 'focus' | 'always' = 'always';

  /**
   * Set the type of the input.
   */
  @Prop() type: 'text' | 'password' | 'email' | 'number' | 'search' | 'tel' | 'url' = 'search';

  /**
   * the value of the searchbar.
   */
  @Prop({ mutable: true }) value?: string | null = '';

  /**
   * Emitted when a keyboard input occurred.
   */
  @Event() storiesInput!: EventEmitter<KeyboardEvent>;

  /**
   * Emitted when the value has changed.
   */
  @Event() storiesChange!: EventEmitter<SearchbarChangeEventDetail>;

  /**
   * Emitted when the cancel button is clicked.
   */
  @Event() storiesCancel!: EventEmitter<void>;

  /**
   * Emitted when the clear input button is clicked.
   */
  @Event() storiesClear!: EventEmitter<void>;

  /**
   * Emitted when the input loses focus.
   */
  @Event() storiesBlur!: EventEmitter<void>;

  /**
   * Emitted when the input has focus.
   */
  @Event() storiesFocus!: EventEmitter<void>;

  /**
   * Emitted when the styles change.
   * @internal
   */
  @Event() storiesStyle!: EventEmitter<StyleEventDetail>;

  @Watch('value')
  protected valueChanged(): void {
    const inputEl = this.nativeInput;
    const value = this.getValue();
    if (inputEl && inputEl.value !== value) {
      inputEl.value = value;
    }
    this.storiesChange.emit({ value });
  }

  @Watch('showCancelButton')
  protected showCancelButtonChanged(): void {
    requestAnimationFrame(() => {
      this.positionElements();
      forceUpdate(this);
    });
  }

  connectedCallback(): void {
    this.emitStyle();
  }

  componentDidLoad(): void {
    this.positionElements();
    this.debounceChanged();
  }

  private emitStyle() {
    this.storiesStyle.emit({
      'searchbar': true
    });
  }

  /**
   * Sets focus on the specified `stories-searchbar`. Use this method instead of the global
   * `input.focus()`.
   */
  @Method()
  async setFocus(): Promise<void> {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  }

  /**
   * Returns the native `<input>` element used under the hood.
   */
  @Method()
  getInputElement(): Promise<HTMLInputElement> {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return Promise.resolve(this.nativeInput!);
  }

  /**
   * Clears the input field and triggers the control change.
   */
  private onClearInput = (ev?: Event, shouldFocus?: boolean) => {
    this.storiesClear.emit();

    if (ev) {
      ev.preventDefault();
      ev.stopPropagation();
    }

    // wait for 4 frames
    setTimeout(() => {
      const value = this.getValue();
      if (value !== '') {
        this.value = '';
        this.storiesInput.emit();

        /**
         * When tapping clear button
         * ensure input is focused after
         * clearing input so users
         * can quickly start typing.
         */
        if (shouldFocus && !this.focused) {
          this.setFocus();
        }
      }
    }, 16 * 4);
  }

  /**
   * Update the Searchbar input value when the input changes
   */
  private onInput = (ev: Event) => {
    const input = ev.target as HTMLInputElement | null;
    if (input) {
      this.value = input.value;
    }
    this.storiesInput.emit(ev as KeyboardEvent);
  }

  /**
   * Sets the Searchbar to not focused and checks if it should align left
   * based on whether there is a value in the searchbar or not.
   */
  private onBlur = () => {
    this.focused = false;
    this.storiesBlur.emit();
    this.positionElements();
  }

  /**
   * Sets the Searchbar to focused and active on input focus.
   */
  private onFocus = () => {
    this.focused = true;
    this.storiesFocus.emit();
    this.positionElements();
  }

  /**
   * Positions the input search icon, placeholder, and the cancel button
   * based on the input value and if it is focused. (ios only)
   */
  private positionElements() {
    const value = this.getValue();
    const prevAlignLeft = this.shouldAlignLeft;
    const shouldAlignLeft = (value.trim() !== '' || !!this.focused);
    this.shouldAlignLeft = shouldAlignLeft;

    if (prevAlignLeft !== shouldAlignLeft) {
      this.positionPlaceholder();
    }
  }

  /**
   * Positions the input placeholder
   */
  private positionPlaceholder() {
    const inputEl = this.nativeInput;
    if (!inputEl) {
      return;
    }
    const isRTL = document.dir === 'rtl';
    const iconEl = (this.el.shadowRoot || this.el).querySelector('.searchbar-search-icon') as HTMLElement;

    if (this.shouldAlignLeft) {
      inputEl.removeAttribute('style');
      iconEl.removeAttribute('style');

    } else {
      // Create a dummy span to get the placeholder width
      const doc = document;
      const tempSpan = doc.createElement('span');
      tempSpan.innerText = this.placeholder || '';
      doc.body.appendChild(tempSpan);

      // Get the width of the span then remove it
      raf(() => {
        const textWidth = tempSpan.offsetWidth;
        tempSpan.remove();

        // Calculate the input padding
        const inputLeft = 'calc(50% - ' + (textWidth / 2) + 'px)';

        // Calculate the icon margin
        const iconLeft = 'calc(50% - ' + ((textWidth / 2) + 30) + 'px)';

        // Set the input padding start and icon margin start
        if (isRTL) {
          inputEl.style.paddingRight = inputLeft;
          iconEl.style.marginRight = iconLeft;
        } else {
          inputEl.style.paddingLeft = inputLeft;
          iconEl.style.marginLeft = iconLeft;
        }
      });
    }
  }

  private getValue() {
    return this.value || '';
  }

  private hasValue(): boolean {
    return this.getValue() !== '';
  }

  /**
   * Determines whether or not the clear button should be visible onscreen.
   * Clear button should be shown if one of two conditions applies:
   * 1. `showClearButton` is set to `always`.
   * 2. `showClearButton` is set to `focus`, and the searchbar has been focused.
   */
  private shouldShowClearButton(): boolean {
    if ((this.showClearButton === 'never') || (this.showClearButton === 'focus' && !this.focused)) {
      return false;
    }

    return true;
  }

  render(): JSX.Element {
    const clearIcon = this.clearIcon || 'close-sharp';
    const searchIcon = this.searchIcon || 'search-sharp';

    return (
      <Host
        aria-disabled={this.disabled ? 'true' : null}
        class={createColorClasses(this.color, {
          'searchbar-disabled': this.disabled,
          'searchbar-has-value': this.hasValue(),
          'searchbar-left-aligned': this.shouldAlignLeft,
          'searchbar-has-focus': this.focused,
          'searchbar-should-show-clear': this.shouldShowClearButton(),
        })}
        role="search"
      >

        <div class="searchbar-input-container">
          <input
            ref={el => this.nativeInput = el}
            aria-label="search text"
            class="searchbar-input"
            disabled={this.disabled}
            inputMode={this.inputmode}
            onBlur={this.onBlur}
            onFocus={this.onFocus}
            onInput={this.onInput}
            placeholder={this.placeholder}
            type={this.type}
            value={this.getValue()}
          />

          <stories-icon aria-hidden="true" class="searchbar-search-icon" name={searchIcon}></stories-icon>

          <button
            aria-label="reset"
            class="searchbar-clear-button"
            onMouseDown={ev => this.onClearInput(ev, true)}
            onTouchStart={ev => this.onClearInput(ev, true)}
            type="button"
            no-blur
          >
            <stories-icon aria-hidden="true" class="searchbar-clear-icon" name={clearIcon}></stories-icon>
          </button>
        </div>
      </Host>
    );
  }
}
