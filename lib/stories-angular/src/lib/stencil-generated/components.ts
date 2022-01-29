/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@stories/stories-ui';




export declare interface StoriesActionBar extends Components.StoriesActionBar {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['actionItems']
})
@Component({
  selector: 'stories-action-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['actionItems']
})
export class StoriesActionBar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import type { ActionEvent as IActionButtonActionEvent } from '@stories/stories-ui';
export declare interface StoriesActionButton extends Components.StoriesActionButton {
  /**
   * Action Event 
   */
  stories-action: EventEmitter<CustomEvent<IActionButtonActionEvent>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['actionItem']
})
@Component({
  selector: 'stories-action-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['actionItem']
})
export class StoriesActionButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['stories-action']);
  }
}


export declare interface StoriesAddonActions extends Components.StoriesAddonActions {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  methods: ['reset']
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
  methods: ['reset']
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
  methods: ['registerAddon', 'findAddon']
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

import type { StoryComponent as IAppStoryComponent } from '@stories/stories-ui';
import type { StoryContext as IAppStoryContext } from '@stories/stories-ui';
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
  inputs: ['modules', 'store'],
  methods: ['registerAddon', 'findAddon']
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
  storiesFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the button loses focus. 
   */
  storiesBlur: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the button click. 
   */
  storiesClick: EventEmitter<CustomEvent<void>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['buttonType', 'color', 'disabled', 'expand', 'fill', 'href', 'routerDirection', 'shape', 'size', 'strong', 'target', 'type']
})
@Component({
  selector: 'stories-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['buttonType', 'color', 'disabled', 'expand', 'fill', 'href', 'routerDirection', 'shape', 'size', 'strong', 'target', 'type']
})
export class StoriesButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['storiesFocus', 'storiesBlur', 'storiesClick']);
  }
}


export declare interface StoriesButtons extends Components.StoriesButtons {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['collapse']
})
@Component({
  selector: 'stories-buttons',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['collapse']
})
export class StoriesButtons {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import type { CheckboxChangeEventDetail as ICheckboxCheckboxChangeEventDetail } from '@stories/stories-ui';
export declare interface StoriesCheckbox extends Components.StoriesCheckbox {
  /**
   * Emitted when the checked property has changed. 
   */
  storiesChange: EventEmitter<CustomEvent<ICheckboxCheckboxChangeEventDetail>>;
  /**
   * Emitted when the checkbox has focus. 
   */
  storiesFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the checkbox loses focus. 
   */
  storiesBlur: EventEmitter<CustomEvent<void>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['checked', 'color', 'disabled', 'indeterminate', 'name', 'value']
})
@Component({
  selector: 'stories-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'color', 'disabled', 'indeterminate', 'name', 'value']
})
export class StoriesCheckbox {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['storiesChange', 'storiesFocus', 'storiesBlur']);
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

import type { InputChangeEventDetail as IInputInputChangeEventDetail } from '@stories/stories-ui';
export declare interface StoriesInput extends Components.StoriesInput {
  /**
   * Emitted when a keyboard input occurred. 
   */
  storiesInput: EventEmitter<CustomEvent<InputEvent>>;
  /**
   * Emitted when the value has changed. 
   */
  storiesChange: EventEmitter<CustomEvent<IInputInputChangeEventDetail>>;
  /**
   * Emitted when the input loses focus. 
   */
  storiesBlur: EventEmitter<CustomEvent<FocusEvent>>;
  /**
   * Emitted when the input has focus. 
   */
  storiesFocus: EventEmitter<CustomEvent<FocusEvent>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['autofocus', 'clearInput', 'color', 'debounce', 'disabled', 'inputmode', 'max', 'maxlength', 'min', 'minlength', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'size', 'step', 'type', 'value'],
  methods: ['setFocus', 'getInputElement']
})
@Component({
  selector: 'stories-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['autofocus', 'clearInput', 'color', 'debounce', 'disabled', 'inputmode', 'max', 'maxlength', 'min', 'minlength', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'size', 'step', 'type', 'value']
})
export class StoriesInput {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['storiesInput', 'storiesChange', 'storiesBlur', 'storiesFocus']);
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

import type { SearchbarChangeEventDetail as ISearchbarSearchbarChangeEventDetail } from '@stories/stories-ui';
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

import type { ToolEvent as IToolButtonToolEvent } from '@stories/stories-ui';
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
