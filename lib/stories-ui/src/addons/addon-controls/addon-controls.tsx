// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, Host, h, Element, State, Method } from '@stencil/core';
import type { ObservableMap } from '@stencil/store';
import type { StoryComponent, StoryContext } from '@stories/stories-common';

import type { Addon, AddonState } from '../..';
import { registerAddon } from '../../utils';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AddonControlsState = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  controls: any[];
} & AddonState;

@Component({
  tag: 'stories-addon-controls',
  styleUrl: 'addon-controls.scss',
  shadow: true,
})
export class AddonControls implements Addon<AddonControlsState> {
  id: "ADDON_CONTROLS";
  @Element() el!: HTMLElement;
  title: () => "Actions";
  @State() state: ObservableMap<AddonControlsState>;

  @Method()
  async reset(story: StoryComponent, context: StoryContext): Promise<void> {
    console.log('AddonActions.reset', story, context);
  }

  async componentDidLoad(): Promise<void> {
    registerAddon(this, {controls: []});
  }

  render(): JSX.Element {
    return (
      <Host>
        <div>Addon Controls</div>
      </Host>
    );
  }

}
