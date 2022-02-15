// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, h, Prop } from '@stencil/core';

import type { ActionItems } from '../../types';

@Component({
  tag: 'stories-action-bar',
  styleUrl: 'action-bar.scss',
  shadow: true,
})
export class ActionBar {
  /**
   * Action items
   */
  @Prop() actionItems: ActionItems = [];

  render(): JSX.Element[] {
    return this.actionItems.map(actionItem => (
      <stories-action-button actionItem={actionItem}></stories-action-button>
    ));
  }

}
