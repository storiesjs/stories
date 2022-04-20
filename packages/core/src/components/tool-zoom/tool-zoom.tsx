// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, h } from '@stencil/core';

import { state } from '../../store';
import type { ToolEvent } from '../../types';

@Component({
  tag: 'str-tool-zoom',
  styleUrl: 'tool-zoom.scss',
  shadow: true,
})
export class ToolZoom {

  actionHandler(event: CustomEvent<ToolEvent>): void {
    const command = event.detail.command;
    // Update zoom property in the Store's state
    if (command === "zoomIn") {
      state.zoom += 0.1;
    } else if (command === "zoomOut") {
      state.zoom -= 0.1;
    } else {
      state.zoom = 1;
    }
  }

  render(): JSX.Element[] {
    return [
      <str-tool-button command="zoomIn" icon="zoomIn" onStrAction={this.actionHandler}></str-tool-button>,
      <str-tool-button command="zoomOut" icon="zoomOut" onStrAction={this.actionHandler}></str-tool-button>,
      <str-tool-button command="zoomReset" icon="zoomReset" onStrAction={this.actionHandler}></str-tool-button>,
    ];
  }

}
