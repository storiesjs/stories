// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, h } from '@stencil/core';

@Component({
  tag: 'stories-tool-bar',
  styleUrl: 'tool-bar.scss',
  shadow: true,
})
export class ToolBar {

  render(): JSX.Element {
    return (
      <div class="bar">
        <div class="inner">
          <div class="side left">
            <slot name="left"></slot>
          </div>
          <div class="side right">
            <slot name="right"></slot>
          </div>
        </div>
      </div>
    );
  }

}
