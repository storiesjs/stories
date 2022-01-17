// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, h, Prop } from '@stencil/core';

import type { ActionItems } from '../types';

@Component({
  tag: 'stories-action-bar',
  styleUrl: 'stories-action-bar.css',
  shadow: true,
})
export class StoriesActionBar {
  /**
   * Action items
   */
  @Prop() actionItems: ActionItems = [];

  render(): JSX.Element[] {
    return this.actionItems.map(actionItem => (
      <stories-actionbutton actionItem={actionItem}></stories-actionbutton>
    ));
  }

}
