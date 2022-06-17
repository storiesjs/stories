import { Component, Host, h, State, Method } from '@stencil/core';

import { api } from '../../api';
import type { Messages, StoryComponent, StoryContext, Addon } from '../../types';
import { messages } from '../../types';
import type { ActionDisplay } from './action';
import { ACTION_EVENT } from './action';

export type AddonActionsState = {
  actions: ActionDisplay[];
};

const ID = "ADDON_ACTIONS";

@Component({
  tag: 'str-addon-actions',
  styleUrl: 'addon-actions.scss',
  shadow: true,
})
export class AddonActions implements Addon {
  @State() actions: ActionDisplay[] = [];

  @Method()
  async storyContextChanged(story: StoryComponent, context: StoryContext): Promise<void> {
    console.log('AddonActions.storyContextChanged', story, context);
    this.actions = [];
  }

  async componentDidLoad(): Promise<void> {
    // Register addon
    api.register(ID, this);
    // Register event listeners
    messages.on(ACTION_EVENT, this.onActions);
  }

  async disconnectedCallback(): Promise<void> {
    // Unregister event listener
    messages.off(ACTION_EVENT, this.onActions);
    // Unregster addon
    api.unregister(ID);
  }

  onActions = (actionDisplay: ActionDisplay): void => {
    this.actions = [...this.actions, actionDisplay]
  };

  render(): JSX.Element {
    return (
      <Host>
        <ul>
          {this.actions.map(action => <li>{action.data.name}</li>)}
        </ul>
      </Host>
    );
  }
}
