/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@stories-js/core';




export declare interface StrAddonActions extends Components.StrAddonActions {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  methods: ['storyContextChanged']
})
@Component({
  selector: 'str-addon-actions',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class StrAddonActions {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface StrAddonControls extends Components.StrAddonControls {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  methods: ['storyContextChanged']
})
@Component({
  selector: 'str-addon-controls',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class StrAddonControls {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface StrAddons extends Components.StrAddons {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  methods: ['registerAddon', 'unregisterAddon', 'findAddon', 'storyContextChanged']
})
@Component({
  selector: 'str-addons',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class StrAddons {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import type { StoryComponent as IAppStoryComponent } from '@stories-js/core';
import type { StoryContext as IAppStoryContext } from '@stories-js/core';
export declare interface StrApp extends Components.StrApp {
  /**
   *  
   */
  strChange: EventEmitter<CustomEvent<IAppStoryComponent>>;
  /**
   *  
   */
  strContextChange: EventEmitter<CustomEvent<IAppStoryContext>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['modules', 'store']
})
@Component({
  selector: 'str-app',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['modules', 'store']
})
export class StrApp {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['strChange', 'strContextChange']);
  }
}


export declare interface StrBadge extends Components.StrBadge {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size', 'type']
})
@Component({
  selector: 'str-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size', 'type']
})
export class StrBadge {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface StrButton extends Components.StrButton {
  /**
   * Emitted when the button has focus. 
   */
  strFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the button loses focus. 
   */
  strBlur: EventEmitter<CustomEvent<void>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['caret', 'circle', 'disabled', 'expand', 'href', 'loading', 'pill', 'rel', 'size', 'target', 'type', 'variant'],
  methods: ['setFocus', 'removeFocus']
})
@Component({
  selector: 'str-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['caret', 'circle', 'disabled', 'expand', 'href', 'loading', 'pill', 'rel', 'size', 'target', 'type', 'variant']
})
export class StrButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['strFocus', 'strBlur']);
  }
}


export declare interface StrCheckbox extends Components.StrCheckbox {
  /**
   * Emitted when the control loses focus. 
   */
  strBlur: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the control gains focus. 
   */
  strFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the control's checked state changes. 
   */
  strChange: EventEmitter<CustomEvent<void>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['checked', 'disabled', 'indeterminate', 'invalid', 'invalidText', 'name', 'value'],
  methods: ['setFocus', 'removeFocus']
})
@Component({
  selector: 'str-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'disabled', 'indeterminate', 'invalid', 'invalidText', 'name', 'value']
})
export class StrCheckbox {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['strBlur', 'strFocus', 'strChange']);
  }
}


export declare interface StrCol extends Components.StrCol {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['offset', 'offsetLg', 'offsetMd', 'offsetSm', 'offsetXl', 'offsetXs', 'pull', 'pullLg', 'pullMd', 'pullSm', 'pullXl', 'pullXs', 'push', 'pushLg', 'pushMd', 'pushSm', 'pushXl', 'pushXs', 'size', 'sizeLg', 'sizeMd', 'sizeSm', 'sizeXl', 'sizeXs']
})
@Component({
  selector: 'str-col',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['offset', 'offsetLg', 'offsetMd', 'offsetSm', 'offsetXl', 'offsetXs', 'pull', 'pullLg', 'pullMd', 'pullSm', 'pullXl', 'pullXs', 'push', 'pushLg', 'pushMd', 'pushSm', 'pushXl', 'pushXs', 'size', 'sizeLg', 'sizeMd', 'sizeSm', 'sizeXl', 'sizeXs']
})
export class StrCol {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface StrDropdown extends Components.StrDropdown {
  /**
   * Emitted when the dropdown opens. Calling `event.preventDefault()` will prevent it from being opened. 
   */
  strShow: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted after the dropdown opens and all transitions are complete. 
   */
  strAfterShow: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the dropdown closes. Calling `event.preventDefault()` will prevent it from being closed. 
   */
  strHide: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted after the dropdown closes and all transitions are complete. 
   */
  strAfterHide: EventEmitter<CustomEvent<void>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['closeOnSelect', 'containingElement', 'distance', 'hoist', 'open', 'placement', 'skidding'],
  methods: ['show', 'hide', 'focusOnTrigger']
})
@Component({
  selector: 'str-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['closeOnSelect', 'containingElement', 'distance', 'hoist', 'open', 'placement', 'skidding']
})
export class StrDropdown {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['strShow', 'strAfterShow', 'strHide', 'strAfterHide']);
  }
}


export declare interface StrFooter extends Components.StrFooter {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'str-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class StrFooter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface StrGrid extends Components.StrGrid {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['fixed']
})
@Component({
  selector: 'str-grid',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['fixed']
})
export class StrGrid {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface StrGroup extends Components.StrGroup {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['horizontal', 'label']
})
@Component({
  selector: 'str-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['horizontal', 'label']
})
export class StrGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface StrIcon extends Components.StrIcon {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['name']
})
@Component({
  selector: 'str-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['name']
})
export class StrIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface StrInput extends Components.StrInput {
  /**
   * Emitted when the control's value changes. 
   */
  stroiesChange: EventEmitter<CustomEvent<any>>;
  /**
   * Emitted when the clear button is activated. 
   */
  stroiesClear: EventEmitter<CustomEvent<any>>;
  /**
   * Emitted when the control receives input. 
   */
  stroiesInput: EventEmitter<CustomEvent<any>>;
  /**
   * Emitted when the control gains focus. 
   */
  stroiesFocus: EventEmitter<CustomEvent<any>>;
  /**
   * Emitted when the control loses focus. 
   */
  stroiesBlur: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['autocapitalize', 'autocomplete', 'autocorrect', 'autofocus', 'clearable', 'debounce', 'disabled', 'enterkeyhint', 'helpText', 'inputmode', 'invalid', 'invalidText', 'label', 'max', 'maxlength', 'min', 'name', 'pill', 'placeholder', 'readonly', 'requiredIndicator', 'size', 'spellcheck', 'step', 'togglePassword', 'type', 'value'],
  methods: ['setFocus', 'removeFocus', 'select', 'setSelectionRange', 'setRangeText']
})
@Component({
  selector: 'str-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['autocapitalize', 'autocomplete', 'autocorrect', 'autofocus', 'clearable', 'debounce', 'disabled', 'enterkeyhint', 'helpText', 'inputmode', 'invalid', 'invalidText', 'label', 'max', 'maxlength', 'min', 'name', 'pill', 'placeholder', 'readonly', 'requiredIndicator', 'size', 'spellcheck', 'step', 'togglePassword', 'type', 'value']
})
export class StrInput {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['stroiesChange', 'stroiesClear', 'stroiesInput', 'stroiesFocus', 'stroiesBlur']);
  }
}


export declare interface StrLabel extends Components.StrLabel {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'position']
})
@Component({
  selector: 'str-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'position']
})
export class StrLabel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface StrMenu extends Components.StrMenu {
  /**
   * Emitted when a menu item is selected. 
   */
  strSelect: EventEmitter<CustomEvent<{ item: HTMLStrMenuItemElement }>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  methods: ['typeToSelect']
})
@Component({
  selector: 'str-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class StrMenu {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['strSelect']);
  }
}


export declare interface StrMenuDivider extends Components.StrMenuDivider {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'str-menu-divider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class StrMenuDivider {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface StrMenuItem extends Components.StrMenuItem {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['checked', 'disabled', 'value'],
  methods: ['setFocus', 'removeFocus']
})
@Component({
  selector: 'str-menu-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'disabled', 'value']
})
export class StrMenuItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface StrMenuLabel extends Components.StrMenuLabel {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'str-menu-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class StrMenuLabel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface StrPreview extends Components.StrPreview {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'str-preview',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class StrPreview {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface StrRadio extends Components.StrRadio {
  /**
   * Emitted when the control loses focus. 
   */
  strBlur: EventEmitter<CustomEvent<any>>;
  /**
   * Emitted when the control gains focus. 
   */
  strFocus: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['checked', 'disabled', 'value'],
  methods: ['setFocus', 'removeFocus']
})
@Component({
  selector: 'str-radio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'disabled', 'value']
})
export class StrRadio {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['strBlur', 'strFocus']);
  }
}


export declare interface StrRadioGroup extends Components.StrRadioGroup {
  /**
   * Emitted when the value has changed. 
   */
  strChange: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['allowEmptySelection', 'horizontal', 'invalid', 'invalidText', 'label', 'name', 'requiredIndicator', 'value']
})
@Component({
  selector: 'str-radio-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['allowEmptySelection', 'horizontal', 'invalid', 'invalidText', 'label', 'name', 'requiredIndicator', 'value']
})
export class StrRadioGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['strChange']);
  }
}


export declare interface StrRouter extends Components.StrRouter {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'str-router',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class StrRouter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface StrRow extends Components.StrRow {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'str-row',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class StrRow {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import type { SearchbarChangeEventDetail as ISearchbarSearchbarChangeEventDetail } from '@stories-js/core';
export declare interface StrSearchbar extends Components.StrSearchbar {
  /**
   * Emitted when a keyboard input occurred. 
   */
  strInput: EventEmitter<CustomEvent<KeyboardEvent>>;
  /**
   * Emitted when the value has changed. 
   */
  strChange: EventEmitter<CustomEvent<ISearchbarSearchbarChangeEventDetail>>;
  /**
   * Emitted when the cancel button is clicked. 
   */
  strCancel: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the clear input button is clicked. 
   */
  strClear: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the input loses focus. 
   */
  strBlur: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the input has focus. 
   */
  strFocus: EventEmitter<CustomEvent<void>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['cancelButtonIcon', 'clearIcon', 'color', 'debounce', 'disabled', 'inputmode', 'placeholder', 'searchIcon', 'showCancelButton', 'showClearButton', 'type', 'value'],
  methods: ['setFocus', 'getInputElement']
})
@Component({
  selector: 'str-searchbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['cancelButtonIcon', 'clearIcon', 'color', 'debounce', 'disabled', 'inputmode', 'placeholder', 'searchIcon', 'showCancelButton', 'showClearButton', 'type', 'value']
})
export class StrSearchbar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['strInput', 'strChange', 'strCancel', 'strClear', 'strBlur', 'strFocus']);
  }
}


export declare interface StrSelect extends Components.StrSelect {
  /**
   * Emitted when the control's value changes. 
   */
  strChange: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the control gains focus. 
   */
  strFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the control loses focus. 
   */
  strBlur: EventEmitter<CustomEvent<void>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['clearable', 'disabled', 'helpText', 'hoist', 'invalid', 'invalidText', 'label', 'maxTagsVisible', 'multiple', 'name', 'pill', 'placeholder', 'requiredIndicator', 'size', 'value'],
  methods: ['setFocus']
})
@Component({
  selector: 'str-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['clearable', 'disabled', 'helpText', 'hoist', 'invalid', 'invalidText', 'label', 'maxTagsVisible', 'multiple', 'name', 'pill', 'placeholder', 'requiredIndicator', 'size', 'value']
})
export class StrSelect {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['strChange', 'strFocus', 'strBlur']);
  }
}


export declare interface StrSidebar extends Components.StrSidebar {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'str-sidebar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class StrSidebar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface StrSpinner extends Components.StrSpinner {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'str-spinner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class StrSpinner {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface StrSplitPane extends Components.StrSplitPane {
  /**
   *  
   */
  strSizeChange: EventEmitter<CustomEvent<number>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['defaultSize', 'isResizing', 'minSize', 'split']
})
@Component({
  selector: 'str-split-pane',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['defaultSize', 'isResizing', 'minSize', 'split']
})
export class StrSplitPane {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['strSizeChange']);
  }
}


export declare interface StrTab extends Components.StrTab {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['tab']
})
@Component({
  selector: 'str-tab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['tab']
})
export class StrTab {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface StrTabBar extends Components.StrTabBar {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'selectedTab']
})
@Component({
  selector: 'str-tab-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'selectedTab']
})
export class StrTabBar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface StrTabButton extends Components.StrTabButton {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['disabled', 'layout', 'selected', 'tab']
})
@Component({
  selector: 'str-tab-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'layout', 'selected', 'tab']
})
export class StrTabButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface StrTabs extends Components.StrTabs {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  methods: ['select', 'getTab', 'getSelected']
})
@Component({
  selector: 'str-tabs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class StrTabs {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface StrTag extends Components.StrTag {
  /**
   * Emitted when the clear button is activated. 
   */
  strClear: EventEmitter<CustomEvent<void>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['clearable', 'pill', 'size', 'type']
})
@Component({
  selector: 'str-tag',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['clearable', 'pill', 'size', 'type']
})
export class StrTag {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['strClear']);
  }
}


export declare interface StrTextarea extends Components.StrTextarea {
  /**
   * Emitted when the textarea's value changes. 
   */
  strChange: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the textarea receives input. 
   */
  strInput: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the textarea has focus. 
   */
  strFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the textarea loses focus. 
   */
  strBlur: EventEmitter<CustomEvent<void>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['autocapitalize', 'autocorrect', 'autofocus', 'debounce', 'disabled', 'enterkeyhint', 'helpText', 'inputmode', 'invalid', 'invalidText', 'label', 'maxlength', 'name', 'placeholder', 'readonly', 'requiredIndicator', 'resize', 'rows', 'size', 'spellcheck', 'value'],
  methods: ['setFocus', 'removeFocus', 'select', 'setSelectionRange', 'setRangeText']
})
@Component({
  selector: 'str-textarea',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['autocapitalize', 'autocorrect', 'autofocus', 'debounce', 'disabled', 'enterkeyhint', 'helpText', 'inputmode', 'invalid', 'invalidText', 'label', 'maxlength', 'name', 'placeholder', 'readonly', 'requiredIndicator', 'resize', 'rows', 'size', 'spellcheck', 'value']
})
export class StrTextarea {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['strChange', 'strInput', 'strFocus', 'strBlur']);
  }
}


export declare interface StrToolBar extends Components.StrToolBar {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'str-tool-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class StrToolBar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import type { ToolEvent as IToolButtonToolEvent } from '@stories-js/core';
export declare interface StrToolButton extends Components.StrToolButton {
  /**
   * Action Event 
   */
  strAction: EventEmitter<CustomEvent<IToolButtonToolEvent>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['command', 'disabled', 'icon']
})
@Component({
  selector: 'str-tool-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['command', 'disabled', 'icon']
})
export class StrToolButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['strAction']);
  }
}


export declare interface StrToolZoom extends Components.StrToolZoom {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'str-tool-zoom',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class StrToolZoom {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface StrZoom extends Components.StrZoom {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['zoom']
})
@Component({
  selector: 'str-zoom',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['zoom']
})
export class StrZoom {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
