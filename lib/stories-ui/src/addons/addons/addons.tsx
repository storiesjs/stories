// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, h, Method } from '@stencil/core';

import type { Addon, AddonState } from '../..';
import { state, createStore } from '../../store';

@Component({
  tag: 'stories-addons',
  styleUrl: 'addons.scss',
  shadow: true,
})
export class Addons {

  @Method()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async registerAddon(addon: Addon<AddonState>, defaultState?: AddonState): Promise<void> {
    const addons = state.addons;
    if (addons[addon.id]) {
      throw new Error(`Please remove duplicate addon ${addon.id}`);
    }
    addons[addon.id] = addon;
    // Create addon's store
    addon.state = createStore<AddonState>(defaultState).state;
  }

  @Method()
  async findAddon(id: string): Promise<Addon<AddonState>> {
    const addons = state.addons;
    if (!addons[id]) {
      throw new Error(`Cannot find addon by id ${id}`);
    }
    return addons[id];
  }

  render(): JSX.Element {
    return (
      <slot/>
    );
  }
}
