import type { EventEmitter} from '@stencil/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, Event, h, Prop } from '@stencil/core';

import type { Commands, ToolEvent } from '../../types';

@Component({
  tag: 'str-tool-button',
  styleUrl: 'tool-button.scss',
  shadow: true,
})
export class ToolButton {

  /**
   * Action Event
   */
  @Event({ bubbles: true, composed: true }) strAction: EventEmitter<ToolEvent>;

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
    this.strAction.emit({command: this.command});
  }

  render(): JSX.Element {
    return (
      <button disabled={this.disabled} onClick={this.clickHandler.bind(this)}>
        <str-icon name={this.icon}></str-icon>
      </button>
    );
  }

}
