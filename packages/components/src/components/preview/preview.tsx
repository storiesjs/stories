// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, h } from '@stencil/core';

import { state } from '../../store';

@Component({
  tag: 'stories-preview',
  styleUrl: 'preview.scss',
  shadow: true,
})
export class Preview {

  render(): JSX.Element {
    const zoom = state.zoom;
    console.log('Preview.render.zoom', zoom)
    return (
      <stories-zoom zoom={zoom}>
        <slot></slot>
      </stories-zoom>
    );
  }
}
