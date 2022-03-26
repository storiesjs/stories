/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ComponentRef, Type} from '@angular/core';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import { Component, Input, EventEmitter } from '@angular/core';
import type { Subscription } from 'rxjs';

import type { StoryComponent } from './types';

@Component({
  selector: 'stories-angular-renderer',
  templateUrl: './stories-angular-renderer.component.html',
  styleUrls: ['./stories-angular-renderer.component.css']
})
export class StoriesAngularRendererComponent {
  doc: Document | undefined;
  compRef: ComponentRef<unknown> | undefined;

  _story: StoryComponent | undefined;
  @Input() set story(value: StoryComponent | undefined) {
    this._story = value;
    if (this.doc) {
      // Create component
      this.createComponent();
    }
  }
  get story(): StoryComponent | undefined {
    return this._story;
  }
  @Input() mountTarget: string | undefined = 'story-frame-root';
  @Input() initialContent = `<!DOCTYPE html><html><title>Story</title><head></head><body style='height:100%;width: 100%'><div id="story-frame-root"></div></body></html>`;

  subscriptions: Subscription[] = [];

  constructor(private vcRef: ViewContainerRef, private resolver: ComponentFactoryResolver) { }

  onLoad(iframe: HTMLIFrameElement):void {
    this.doc = iframe.contentDocument || iframe.contentWindow?.document;
    if (this.doc) {
      // Create component
      this.createComponent();
    }
  }

  // Get target for rendening
  getTarget(): Element | undefined {
    if (this.doc) {
      return this.doc.querySelector(this.mountTarget || '') || this.doc.body;
    }
    return undefined;
  }

  removeChildren(parent: Element): void {
    while (parent.lastChild) {
      parent.removeChild(parent.lastChild);
    }
  }

  createComponent(): void {
    // Remove old content
    const target = this.getTarget();
    if (target) {
      this.removeChildren(target);
      this.subscriptions.forEach(subscription => subscription.unsubscribe);
      this.subscriptions.splice(0, this.subscriptions.length);
      // Create component from story
      if (this.story) {
        const compFactory = this.resolver.resolveComponentFactory(this.story.component as Type<unknown>);
        this.compRef = this.vcRef.createComponent(compFactory);
        this.compRef.location.nativeElement.id = 'innerComp';
        console.log('StoriesAngularRendererComponent.story', this.story);

        const res = this.story.storyFn.apply(this.compRef.instance) as any;
        console.log('StoriesAngularRendererComponent.res', res);
        if (res.props) {
          Object.keys(res.props).forEach(prop => {
            const field = (this.compRef?.instance as any)[prop] as unknown;
            console.log('StoriesAngularRendererComponent.field', field)
            if (field instanceof EventEmitter) {
              const subscription = (field as EventEmitter<any>).subscribe((response: any) => res.props[prop](response));
              this.subscriptions.push(subscription);
            } else {
              (this.compRef?.instance as any)[prop] = res.props[prop];
            }
          });
        }

        if (this.story.args) {
          Object.keys(this.story.args).forEach(arg => {
            (this.compRef?.instance as any)[arg] = (this.story?.args as any)[arg];
          });
        }
        // Find component to mountTarget in frame or its body
        target.appendChild(this.compRef.location.nativeElement);
      }
    }
  }
}
