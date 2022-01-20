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
    console.log('Preview.render');
    const zoom = state.zoom;
    return (
      <stories-zoom zoom={zoom}>
        <slot></slot>
      </stories-zoom>
    );
  }
}
