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
  action: EventEmitter<CustomEvent<IActionButtonActionEvent>>;

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
    proxyOutputs(this, this.el, ['action']);
  }
}


export declare interface StoriesAddonActions extends Components.StoriesAddonActions {}

@ProxyCmp({
  defineCustomElementFn: undefined
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
  defineCustomElementFn: undefined
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
  defineCustomElementFn: undefined
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
export declare interface StoriesApp extends Components.StoriesApp {
  /**
   *  
   */
  story: EventEmitter<CustomEvent<IAppStoryComponent>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['modules']
})
@Component({
  selector: 'stories-app',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['modules']
})
export class StoriesApp {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['story']);
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
  sizechanged: EventEmitter<CustomEvent<number>>;

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
    proxyOutputs(this, this.el, ['sizechanged']);
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
  action: EventEmitter<CustomEvent<IToolButtonToolEvent>>;

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
    proxyOutputs(this, this.el, ['action']);
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
