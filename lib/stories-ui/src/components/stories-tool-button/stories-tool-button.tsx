import type { EventEmitter} from '@stencil/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, Event, h, Prop } from '@stencil/core';

import type { Commands, ToolEvent } from '../types';

@Component({
  tag: 'stories-tool-button',
  styleUrl: 'stories-tool-button.css',
  shadow: true,
})
export class StoriesToolButton {

  /**
   * Action Event
   */
  @Event({ bubbles: true, composed: true }) action: EventEmitter<ToolEvent>;

  /**
   * disabled property
   */
  @Prop() disabled: boolean;

  /**
   * icon property
   */
  @Prop() icon: string;

  /**
   * command property
   */
  @Prop() command: Commands;

  /**
   * Handle mouse event and generate ActionEvent
   */
  clickHandler(event: MouseEvent): void {
    event.preventDefault();
    this.action.emit({command: this.command});
  }

  render(): JSX.Element {
    return (
      <button disabled={this.disabled} onClick={this.clickHandler.bind(this)}>
        <stories-icon name={this.icon}></stories-icon>
      </button>
    );
  }

}
