import { Component, Host, h, State, Method } from '@stencil/core';

import { api } from '../../api';
import type { StoryComponent, StoryContext, Addon } from '../../types';
import { messages } from '../../types';

import { CONTROL_EVENT } from './Control';
export type AddonControlsState = {
  controls: any[];
};

const ID = "ADDON_CONTROLS";
@Component({
  tag: 'str-addon-controls',
  styleUrl: 'addon-controls.scss',
  shadow: true,
})
export class AddonControls implements Addon {
  @State() controls: any[] = [];

  @Method()
  async storyContextChanged(story: StoryComponent, context: StoryContext): Promise<void> {
    console.log('AddonControls.storyContextChanged', story, context);
  }

  async componentDidLoad(): Promise<void> {
    // Register addon
    api.register(ID, this);
    // Register event listeners
    messages.on(CONTROL_EVENT, this.onControl);
  }

  async disconnectedCallback(): Promise<void> {
  // Unregister event listener
    messages.off(CONTROL_EVENT, this.onControl);
    // Unregster addon
    api.unregister(ID);
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
