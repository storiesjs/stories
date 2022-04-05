/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/consistent-type-definitions */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, Host, h, Element, State, Method } from '@stencil/core';

// import type { ObservableMap } from '@stencil/store';
// import { createStore } from '@stencil/store';
import { api } from '../../api';
import type { Messages, StoryComponent, StoryContext, Addon } from '../../types';
import { messages } from '../../types';

import { CONTROL_EVENT } from './Control';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AddonControlsState = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  controls: any[];
};

@Component({
  tag: 'stories-addon-controls',
  styleUrl: 'addon-controls.scss',
  shadow: true,
})
export class AddonControls implements Addon {
  id: "ADDON_CONTROLS";
  type: 'panel';
  @Element() el!: HTMLElement;
  @State() controls: any[] = [];
  // @State() store: ObservableMap<AddonControlsState>;
  messages: Messages;

  title(): string {
    return "Controls";
  }

  @Method()
  async storyContextChanged(story: StoryComponent, context: StoryContext): Promise<void> {
    console.log('AddonControls.storyContextChanged', story, context);
  }

  async componentDidLoad(): Promise<void> {
    // Register addon
    api.registerAddon(this);
    // Register event listeners
    messages.on(CONTROL_EVENT, this.onControl);
    // Create store
    // this.store = createStore({controls: []})
  }

  async disconnectedCallback(): Promise<void> {
    // Unregister event listener
    messages.off(CONTROL_EVENT, this.onControl);
    // Unregster addon
    api.unregisterAddon(this);
  }

  onControl = (event: any): void => {
    // this.store.state.actions.push(actionDisplay)
    console.log('onControl.event', event);
  };

  render(): JSX.Element {
    return (
      <Host>
        <div>Addon Controls</div>
      </Host>
    );
  }

}
