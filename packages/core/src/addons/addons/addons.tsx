import { Component, h, Method } from '@stencil/core';

import { state } from '../../store';
import type { StoryComponent, StoryContext, Addon } from '../../types';

@Component({
  tag: 'str-addons',
  styleUrl: 'addons.scss',
  shadow: true,
})
export class Addons {

  @Method()
  async registerAddon(addonId: string, addon: Addon): Promise<void> {
    const addons = state.addons;
    if (addons[addonId]) {
      throw new Error(`Please remove duplicate addon ${addonId}`);
    }
    addons[addonId] = addon;
  }

  @Method()
  async unregisterAddon(addonId: string): Promise<void> {
    const addons = state.addons;
    if (!addons[addonId]) {
      throw new Error(`Cannot unregister addon ${addonId}`);
    }
    delete addons[addonId];
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
