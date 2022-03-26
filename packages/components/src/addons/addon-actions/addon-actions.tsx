/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, Host, h, Element, State, Method } from '@stencil/core';

import type { Messages, StoryComponent, StoryContext, Addon } from '../..';
import type { ActionDisplay } from '../..';
import { messages, api } from '../..';
import { ACTION_EVENT } from '../..';
// import addonsManager from '../../AddonsManager';

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type AddonActionsState = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  actions: ActionDisplay[];
};

@Component({
  tag: 'stories-addon-actions',
  styleUrl: 'addon-actions.scss',
  shadow: true,
})
export class AddonActions implements Addon {
  id = "ADDON_ACTIONS";
  type: 'panel';
  @Element() el!: HTMLElement;
  @State() actions: ActionDisplay[] = [];
  messages: Messages;

  title(): string {
    return "Actions";
  }

  @Method()
  async storyContextChanged(story: StoryComponent, context: StoryContext): Promise<void> {
    console.log('AddonActions.storyContextChanged', story, context);
    this.actions = [];
  }

  async componentDidLoad(): Promise<void> {
    // Register addon
    api.registerAddon(this);
    // Register event listeners
    messages.on(ACTION_EVENT, this.onActions);
  }

  async disconnectedCallback(): Promise<void> {
    // Unregister event listener
    messages.off(ACTION_EVENT, this.onActions);
    // Unregster addon
    api.unregisterAddon(this);
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
