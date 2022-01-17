// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, h, Host, Prop, State, Watch } from '@stencil/core';

import { browserSupportsCssZoom, computeTransformStyle, computeZoomStyle } from './utils';

const zoomStyle = browserSupportsCssZoom();

@Component({
  tag: 'stories-view-zoom',
  styleUrl: 'stories-view-zoom.css',
  shadow: true,
})
export class StoriesViewZoom {
  @State() div!: HTMLDivElement;
  @State() height = 0;

  @Prop() zoom = 1;

  @Watch('div')
  watchStateHandler(newDiv: HTMLDivElement): void {
    const height = this.height = newDiv.getBoundingClientRect().height;
    console.log('StoriesViewZoom.height', height);
  }


  render(): JSX.Element {
    const style = zoomStyle ? computeZoomStyle(this.zoom) : computeTransformStyle(this.height, this.zoom);
    console.log('StoriesViewZoom.style', zoomStyle, style);
    return (
      <Host style={style}>
        <div ref={(el) => this.div = el as HTMLDivElement} class="innerZoomElementWrapper">
          <slot></slot>
        </div>
      </Host>
    );
  }

}
