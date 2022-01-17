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

import type { ActionEvent as IStoriesActionButtonActionEvent } from '@stories/stories-ui';
export declare interface StoriesActionButton extends Components.StoriesActionButton {
  /**
   * Action Event 
   */
  action: EventEmitter<CustomEvent<IStoriesActionButtonActionEvent>>;

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


export declare interface StoriesApp extends Components.StoriesApp {
  /**
   *  
   */
  story: EventEmitter<CustomEvent<any>>;

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


export declare interface StoriesLayout extends Components.StoriesLayout {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'stories-layout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class StoriesLayout {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface StoriesNavigator extends Components.StoriesNavigator {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'stories-navigator',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class StoriesNavigator {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface StoriesTabBar extends Components.StoriesTabBar {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'stories-tab-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class StoriesTabBar {
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

import type { ToolEvent as IStoriesToolButtonToolEvent } from '@stories/stories-ui';
export declare interface StoriesToolButton extends Components.StoriesToolButton {
  /**
   * Action Event 
   */
  action: EventEmitter<CustomEvent<IStoriesToolButtonToolEvent>>;

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


export declare interface StoriesViewZoom extends Components.StoriesViewZoom {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['zoom']
})
@Component({
  selector: 'stories-view-zoom',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['zoom']
})
export class StoriesViewZoom {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface StoriesViewer extends Components.StoriesViewer {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'stories-viewer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class StoriesViewer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
