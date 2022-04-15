/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@stories-js/core';




export declare interface StoriesAddonActions extends Components.StoriesAddonActions {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  methods: ['storyContextChanged']
})
@Component({
  selector: 'stories-addon-actions',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class StoriesAddonActions {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface StoriesAddonControls extends Components.StoriesAddonControls {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  methods: ['storyContextChanged']
})
@Component({
  selector: 'stories-addon-controls',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class StoriesAddonControls {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface StoriesAddons extends Components.StoriesAddons {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  methods: ['registerAddon', 'unregisterAddon', 'findAddon', 'storyContextChanged']
})
@Component({
  selector: 'stories-addons',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class StoriesAddons {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import type { StoryComponent as IAppStoryComponent } from '@stories-js/core';
import type { StoryContext as IAppStoryContext } from '@stories-js/core';
export declare interface StoriesApp extends Components.StoriesApp {
  /**
   *  
   */
  storyChange: EventEmitter<CustomEvent<IAppStoryComponent>>;
  /**
   *  
   */
  storyContextChange: EventEmitter<CustomEvent<IAppStoryContext>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['modules', 'store']
})
@Component({
  selector: 'stories-app',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['modules', 'store']
})
export class StoriesApp {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['storyChange', 'storyContextChange']);
  }
}


export declare interface StoriesBadge extends Components.StoriesBadge {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color']
})
@Component({
  selector: 'stories-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color']
})
export class StoriesBadge {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface StoriesButton extends Components.StoriesButton {
  /**
   * Emitted when the button has focus. 
   */
  stories-focus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the button loses focus. 
   */
  stories-blur: EventEmitter<CustomEvent<void>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['caret', 'circle', 'disabled', 'expand', 'href', 'loading', 'pill', 'rel', 'size', 'target', 'type', 'variant'],
  methods: ['setFocus', 'removeFocus']
})
@Component({
  selector: 'stories-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['caret', 'circle', 'disabled', 'expand', 'href', 'loading', 'pill', 'rel', 'size', 'target', 'type', 'variant']
})
export class StoriesButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['stories-focus', 'stories-blur']);
  }
}


export declare interface StoriesCheckbox extends Components.StoriesCheckbox {
  /**
   * Emitted when the control loses focus. 
   */
  stories-blur: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the control gains focus. 
   */
  stories-focus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the control's checked state changes. 
   */
  stories-change: EventEmitter<CustomEvent<void>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['checked', 'disabled', 'indeterminate', 'invalid', 'invalidText', 'name', 'value'],
  methods: ['setFocus', 'removeFocus']
})
@Component({
  selector: 'stories-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'disabled', 'indeterminate', 'invalid', 'invalidText', 'name', 'value']
})
export class StoriesCheckbox {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['stories-blur', 'stories-focus', 'stories-change']);
  }
}


export declare interface StoriesCol extends Components.StoriesCol {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['offset', 'offsetLg', 'offsetMd', 'offsetSm', 'offsetXl', 'offsetXs', 'pull', 'pullLg', 'pullMd', 'pullSm', 'pullXl', 'pullXs', 'push', 'pushLg', 'pushMd', 'pushSm', 'pushXl', 'pushXs', 'size', 'sizeLg', 'sizeMd', 'sizeSm', 'sizeXl', 'sizeXs']
})
@Component({
  selector: 'stories-col',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['offset', 'offsetLg', 'offsetMd', 'offsetSm', 'offsetXl', 'offsetXs', 'pull', 'pullLg', 'pullMd', 'pullSm', 'pullXl', 'pullXs', 'push', 'pushLg', 'pushMd', 'pushSm', 'pushXl', 'pushXs', 'size', 'sizeLg', 'sizeMd', 'sizeSm', 'sizeXl', 'sizeXs']
})
export class StoriesCol {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface StoriesDropdown extends Components.StoriesDropdown {
  /**
   * Emitted when the dropdown opens. Calling `event.preventDefault()` will prevent it from being opened. 
   */
  stories-show: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted after the dropdown opens and all transitions are complete. 
   */
  stories-after-show: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the dropdown closes. Calling `event.preventDefault()` will prevent it from being closed. 
   */
  stories-hide: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted after the dropdown closes and all transitions are complete. 
   */
  stories-after-hide: EventEmitter<CustomEvent<void>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['closeOnSelect', 'containingElement', 'distance', 'hoist', 'open', 'placement', 'skidding'],
  methods: ['show', 'hide', 'focusOnTrigger']
})
@Component({
  selector: 'stories-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['closeOnSelect', 'containingElement', 'distance', 'hoist', 'open', 'placement', 'skidding']
})
export class StoriesDropdown {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['stories-show', 'stories-after-show', 'stories-hide', 'stories-after-hide']);
  }
}


export declare interface StoriesFooter extends Components.StoriesFooter {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'stories-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class StoriesFooter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface StoriesGrid extends Components.StoriesGrid {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['fixed']
})
@Component({
  selector: 'stories-grid',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['fixed']
})
export class StoriesGrid {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface StoriesGroup extends Components.StoriesGroup {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['horizontal', 'label']
})
@Component({
  selector: 'stories-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['horizontal', 'label']
})
export class StoriesGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface StoriesIcon extends Components.StoriesIcon {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['name']
})
@Component({
  selector: 'stories-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['name']
})
export class StoriesIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface StoriesInput extends Components.StoriesInput {
  /**
   * Emitted when the control's value changes. 
   */
  gr-change: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the clear button is activated. 
   */
  gr-clear: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the control receives input. 
   */
  gr-input: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the control gains focus. 
   */
  gr-focus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the control loses focus. 
   */
  gr-blur: EventEmitter<CustomEvent<void>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['autocapitalize', 'autocomplete', 'autocorrect', 'autofocus', 'clearable', 'debounce', 'disabled', 'enterkeyhint', 'helpText', 'inputmode', 'invalid', 'invalidText', 'label', 'max', 'maxlength', 'min', 'name', 'pill', 'placeholder', 'readonly', 'requiredIndicator', 'size', 'spellcheck', 'step', 'togglePassword', 'type', 'value'],
  methods: ['setFocus', 'removeFocus', 'select', 'setSelectionRange', 'setRangeText']
})
@Component({
  selector: 'stories-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['autocapitalize', 'autocomplete', 'autocorrect', 'autofocus', 'clearable', 'debounce', 'disabled', 'enterkeyhint', 'helpText', 'inputmode', 'invalid', 'invalidText', 'label', 'max', 'maxlength', 'min', 'name', 'pill', 'placeholder', 'readonly', 'requiredIndicator', 'size', 'spellcheck', 'step', 'togglePassword', 'type', 'value']
})
export class StoriesInput {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['gr-change', 'gr-clear', 'gr-input', 'gr-focus', 'gr-blur']);
  }
}


export declare interface StoriesLabel extends Components.StoriesLabel {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'position']
})
@Component({
  selector: 'stories-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'position']
})
export class StoriesLabel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface StoriesMenu extends Components.StoriesMenu {
  /**
   * Emitted when a menu item is selected. 
   */
  stories-select: EventEmitter<CustomEvent<{ item: HTMLStoriesMenuItemElement }>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  methods: ['typeToSelect']
})
@Component({
  selector: 'stories-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class StoriesMenu {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['stories-select']);
  }
}


export declare interface StoriesMenuDivider extends Components.StoriesMenuDivider {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'stories-menu-divider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class StoriesMenuDivider {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface StoriesMenuItem extends Components.StoriesMenuItem {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['checked', 'disabled', 'value'],
  methods: ['setFocus', 'removeFocus']
})
@Component({
  selector: 'stories-menu-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'disabled', 'value']
})
export class StoriesMenuItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface StoriesMenuLabel extends Components.StoriesMenuLabel {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'stories-menu-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class StoriesMenuLabel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface StoriesPreview extends Components.StoriesPreview {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'stories-preview',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class StoriesPreview {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface StoriesRadio extends Components.StoriesRadio {
  /**
   * Emitted when the control loses focus. 
   */
  stories-blur: EventEmitter<CustomEvent<any>>;
  /**
   * Emitted when the control gains focus. 
   */
  stories-focus: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['checked', 'disabled', 'value'],
  methods: ['setFocus', 'removeFocus']
})
@Component({
  selector: 'stories-radio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'disabled', 'value']
})
export class StoriesRadio {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['stories-blur', 'stories-focus']);
  }
}

import type { RadioGroupChangeEventDetail as IRadioGroupRadioGroupChangeEventDetail } from '@stories-js/core';
export declare interface StoriesRadioGroup extends Components.StoriesRadioGroup {
  /**
   * Emitted when the value has changed. 
   */
  stories-change: EventEmitter<CustomEvent<IRadioGroupRadioGroupChangeEventDetail>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['allowEmptySelection', 'horizontal', 'invalid', 'invalidText', 'label', 'name', 'requiredIndicator', 'value']
})
@Component({
  selector: 'stories-radio-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['allowEmptySelection', 'horizontal', 'invalid', 'invalidText', 'label', 'name', 'requiredIndicator', 'value']
})
export class StoriesRadioGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['stories-change']);
  }
}


export declare interface StoriesRouter extends Components.StoriesRouter {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'stories-router',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class StoriesRouter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface StoriesRow extends Components.StoriesRow {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'stories-row',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class StoriesRow {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import type { SearchbarChangeEventDetail as ISearchbarSearchbarChangeEventDetail } from '@stories-js/core';
export declare interface StoriesSearchbar extends Components.StoriesSearchbar {
  /**
   * Emitted when a keyboard input occurred. 
   */
  storiesInput: EventEmitter<CustomEvent<KeyboardEvent>>;
  /**
   * Emitted when the value has changed. 
   */
  storiesChange: EventEmitter<CustomEvent<ISearchbarSearchbarChangeEventDetail>>;
  /**
   * Emitted when the cancel button is clicked. 
   */
  storiesCancel: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the clear input button is clicked. 
   */
  storiesClear: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the input loses focus. 
   */
  storiesBlur: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the input has focus. 
   */
  storiesFocus: EventEmitter<CustomEvent<void>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['cancelButtonIcon', 'clearIcon', 'color', 'debounce', 'disabled', 'inputmode', 'placeholder', 'searchIcon', 'showCancelButton', 'showClearButton', 'type', 'value'],
  methods: ['setFocus', 'getInputElement']
})
@Component({
  selector: 'stories-searchbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['cancelButtonIcon', 'clearIcon', 'color', 'debounce', 'disabled', 'inputmode', 'placeholder', 'searchIcon', 'showCancelButton', 'showClearButton', 'type', 'value']
})
export class StoriesSearchbar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['storiesInput', 'storiesChange', 'storiesCancel', 'storiesClear', 'storiesBlur', 'storiesFocus']);
  }
}


export declare interface StoriesSelect extends Components.StoriesSelect {
  /**
   * Emitted when the control's value changes. 
   */
  stories-change: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the control gains focus. 
   */
  stories-focus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the control loses focus. 
   */
  stories-blur: EventEmitter<CustomEvent<void>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['clearable', 'disabled', 'helpText', 'hoist', 'invalid', 'invalidText', 'label', 'maxTagsVisible', 'multiple', 'name', 'pill', 'placeholder', 'requiredIndicator', 'size', 'value'],
  methods: ['setFocus']
})
@Component({
  selector: 'stories-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['clearable', 'disabled', 'helpText', 'hoist', 'invalid', 'invalidText', 'label', 'maxTagsVisible', 'multiple', 'name', 'pill', 'placeholder', 'requiredIndicator', 'size', 'value']
})
export class StoriesSelect {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['stories-change', 'stories-focus', 'stories-blur']);
  }
}


export declare interface StoriesSidebar extends Components.StoriesSidebar {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'stories-sidebar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class StoriesSidebar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface StoriesSplitPane extends Components.StoriesSplitPane {
  /**
   *  
   */
  storiesSizeChange: EventEmitter<CustomEvent<number>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['defaultSize', 'isResizing', 'minSize', 'split']
})
@Component({
  selector: 'stories-split-pane',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['defaultSize', 'isResizing', 'minSize', 'split']
})
export class StoriesSplitPane {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['storiesSizeChange']);
  }
}


export declare interface StoriesTab extends Components.StoriesTab {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['tab']
})
@Component({
  selector: 'stories-tab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['tab']
})
export class StoriesTab {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface StoriesTabBar extends Components.StoriesTabBar {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'selectedTab']
})
@Component({
  selector: 'stories-tab-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'selectedTab']
})
export class StoriesTabBar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface StoriesTabButton extends Components.StoriesTabButton {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['disabled', 'layout', 'selected', 'tab']
})
@Component({
  selector: 'stories-tab-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'layout', 'selected', 'tab']
})
export class StoriesTabButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface StoriesTabs extends Components.StoriesTabs {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  methods: ['select', 'getTab', 'getSelected']
})
@Component({
  selector: 'stories-tabs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class StoriesTabs {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface StoriesTag extends Components.StoriesTag {
  /**
   * Emitted when the clear button is activated. 
   */
  stories-clear: EventEmitter<CustomEvent<void>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['clearable', 'pill', 'size', 'type']
})
@Component({
  selector: 'stories-tag',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['clearable', 'pill', 'size', 'type']
})
export class StoriesTag {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['stories-clear']);
  }
}


export declare interface StoriesTextarea extends Components.StoriesTextarea {
  /**
   * Emitted when the textarea's value changes. 
   */
  stories-change: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the textarea receives input. 
   */
  stories-input: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the textarea has focus. 
   */
  stories-focus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the textarea loses focus. 
   */
  stories-blur: EventEmitter<CustomEvent<void>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['autocapitalize', 'autocorrect', 'autofocus', 'debounce', 'disabled', 'enterkeyhint', 'helpText', 'inputmode', 'invalid', 'invalidText', 'label', 'maxlength', 'name', 'placeholder', 'readonly', 'requiredIndicator', 'resize', 'rows', 'size', 'spellcheck', 'value'],
  methods: ['setFocus', 'removeFocus', 'select', 'setSelectionRange', 'setRangeText']
})
@Component({
  selector: 'stories-textarea',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['autocapitalize', 'autocorrect', 'autofocus', 'debounce', 'disabled', 'enterkeyhint', 'helpText', 'inputmode', 'invalid', 'invalidText', 'label', 'maxlength', 'name', 'placeholder', 'readonly', 'requiredIndicator', 'resize', 'rows', 'size', 'spellcheck', 'value']
})
export class StoriesTextarea {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['stories-change', 'stories-input', 'stories-focus', 'stories-blur']);
  }
}


export declare interface StoriesToolBar extends Components.StoriesToolBar {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'stories-tool-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class StoriesToolBar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import type { ToolEvent as IToolButtonToolEvent } from '@stories-js/core';
export declare interface StoriesToolButton extends Components.StoriesToolButton {
  /**
   * Action Event 
   */
  storiesAction: EventEmitter<CustomEvent<IToolButtonToolEvent>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['command', 'disabled', 'icon']
})
@Component({
  selector: 'stories-tool-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['command', 'disabled', 'icon']
})
export class StoriesToolButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['storiesAction']);
  }
}


export declare interface StoriesToolZoom extends Components.StoriesToolZoom {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'stories-tool-zoom',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class StoriesToolZoom {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface StoriesZoom extends Components.StoriesZoom {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['zoom']
})
@Component({
  selector: 'stories-zoom',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['zoom']
})
export class StoriesZoom {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
