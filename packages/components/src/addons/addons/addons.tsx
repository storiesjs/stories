// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, h, Method } from '@stencil/core';

import { state } from '../../store';
import type { StoryComponent, StoryContext, Addon } from '../../types';

@Component({
  tag: 'stories-addons',
  styleUrl: 'addons.scss',
  shadow: true,
})
export class Addons {

  @Method()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async registerAddon(addon: Addon): Promise<void> {
    const addons = state.addons;
    if (addons[addon.id]) {
      throw new Error(`Please remove duplicate addon ${addon.id}`);
    }
    addons[addon.id] = addon;
  }

  @Method()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async unregisterAddon(addon: Addon): Promise<void> {
    const addons = state.addons;
    if (!addons[addon.id]) {
      throw new Error(`Cannot unregister addon ${addon.id}`);
    }
    delete addons[addon.id];
  }

  @Method()
  async findAddon(id: string): Promise<Addon> {
    const addons = state.addons;
    if (!addons[id]) {
      throw new Error(`Cannot find addon by id ${id}`);
    }
    return addons[id];
  }

  @Method()
  async storyContextChanged(story: StoryComponent, context: StoryContext): Promise<void> {
    // Update all addons
    Object.values(state.addons).forEach(addon => {
      addon.storyContextChanged(story, context);
    });
  }

  render(): JSX.Element {
    return (
      <slot/>
    );
  }
}
