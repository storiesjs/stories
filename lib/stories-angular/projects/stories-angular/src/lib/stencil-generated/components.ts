/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@stories/stories-ui';




export declare interface StoriesApp extends Components.StoriesApp {
  /**
   * Unfortunatelly we cannot use EventEmitter<StoryComponent> because of the bug in @stencil/angular-output-target 
   */
  storySelected: EventEmitter<CustomEvent<{ storyId: string; kinds: string[]; name: string; storyFn: (context?: unknown) => unknown; }>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['stories']
})
@Component({
  selector: 'stories-app',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['stories']
})
export class StoriesApp {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['storySelected']);
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