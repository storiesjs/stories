import type { EventEmitter} from '@stencil/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, Event, h, Prop } from '@stencil/core';

import type { ActionEvent, ActionItem } from '../../types';

@Component({
  tag: 'stories-action-button',
  styleUrl: 'action-button.scss',
  shadow: true,
})
export class ActionButton {
  /**
   * Action Event
   */
  @Event({ bubbles: true, composed: true }) action: EventEmitter<ActionEvent>;

  /**
   * ActionItem property
   */
  @Prop() actionItem: ActionItem;

  /**
   * Handle mouse event and generate ActionEvent
   */
  clickHandler(event: MouseEvent): void {
    event.preventDefault();
    this.action.emit({command: this.actionItem.command});
  }

  render(): JSX.Element {
    return (
      <button disabled={this.actionItem.disabled} onClick={this.clickHandler}>{this.actionItem.title}</button>
    );
  }

}
