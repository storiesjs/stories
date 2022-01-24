/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, Host, h, Element, State } from '@stencil/core';
import type { ObservableMap } from '@stencil/store';

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
  id: "ADDON_ACTIONS";
  @Element() el!: HTMLElement;
  title: () => "Actions";
  @State() state: ObservableMap<AddonActionsState>;

  async componentDidLoad(): Promise<void> {
    console.log('componentWillLoad', this.state);
    registerAddon(this, {actions: ["test", "test2", "test3", "test4", "test5", "test6", "test7", "test8", "test9" ]});
  }

  render(): JSX.Element {
    console.log('render', this.state);
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
