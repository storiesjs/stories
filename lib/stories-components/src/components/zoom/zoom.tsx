// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, h, Host, Prop, State, Watch } from '@stencil/core';

import { browserSupportsCssZoom, computeTransformStyle, computeZoomStyle } from './utils';

const zoomStyle = browserSupportsCssZoom();

@Component({
  tag: 'stories-zoom',
  styleUrl: 'zoom.scss',
  shadow: true,
})
export class Zoom {
  @State() div!: HTMLDivElement;
  @State() height = 0;

  @Prop() zoom = 1;

  @Watch('div')
  watchStateHandler(newDiv: HTMLDivElement): void {
    this.height = newDiv.getBoundingClientRect().height;
  }


  render(): JSX.Element {
    const style = zoomStyle ? computeZoomStyle(this.zoom) : computeTransformStyle(this.height, this.zoom);
    return (
      <Host style={style}>
        <div ref={(el) => this.div = el as HTMLDivElement} class="innerZoomElementWrapper">
          <slot></slot>
        </div>
      </Host>
    );
  }

}
