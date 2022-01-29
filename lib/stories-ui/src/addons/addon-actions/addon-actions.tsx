/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, Host, h, Element, State, Method } from '@stencil/core';
import type { ObservableMap } from '@stencil/store';
import type { StoryComponent, StoryContext } from '@stories/stories-common';

import type { Addon, AddonState } from '../..';
import { registerAddon } from '../../utils';

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type AddonActionsState = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  actions: any[];
} & AddonState;

@Component({
  tag: 'stories-addon-actions',
  styleUrl: 'addon-actions.scss',
  shadow: true,
})
export class AddonActions implements Addon<AddonActionsState> {
  @Element() el!: HTMLElement;
  @State() state: ObservableMap<AddonActionsState>;
  id = "ADDON_ACTIONS";

  title(): string {
    return "Actions";
  }

  @Method()
  async reset(story: StoryComponent, context: StoryContext): Promise<void> {
    console.log('AddonActions.reset', story, context);
  }

  async componentDidLoad(): Promise<void> {
    registerAddon(this, {actions: []});
  }

  render(): JSX.Element {
    if (this.state) {
      const actions = (this.state as AddonActionsState).actions;
      return (
        <Host>
          <stories-label>Addon Actions</stories-label>
          <ul>
            {actions && actions.map(action => <li>{action.toString()}</li>)}
          </ul>
        </Host>
      );
    }
    return null;
  }
}
