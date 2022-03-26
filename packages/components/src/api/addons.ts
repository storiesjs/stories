/* eslint-disable @typescript-eslint/no-explicit-any */
import type { AddonsAPI, Addon, AddonState } from "..";
import { state } from '../store';
import { ensurePanel } from "../utils";

export const addonsAPI: AddonsAPI = {
  registerAddon: (addon: Addon) => {
    const addons = {...state.addons};
    addons[addon.id] = addon;
    state.addons = addons;
  },
  unregisterAddon: (addon: Addon) => {
    state.addons = Object.keys(state.addons).filter(id => id !== addon.id).reduce((addons: any, id) => {
      addons[id] = state.addons[id];
      return addons;
    }, {});
  },
  getPanels(): Record<string, Addon> {
    return Object.keys(state.addons).filter(addonId => state.addons[addonId].type === 'panel').reduce((addons: any, id) => {
      addons[id] = state.addons[id];
      return addons;
    }, {});
  },
  getTools(): Record<string, Addon> {
    return Object.keys(state.addons).filter(addonId => state.addons[addonId].type === 'tool').reduce((addons: any, id) => {
      addons[id] = state.addons[id];
      return addons;
    }, {})
  },
  getStoryPanels: () => {
    const allPanels = addonsAPI.getPanels();
    const { story } = state;

    if (!allPanels || !story) {
      return allPanels;
    }

    const { parameters } = story;

    const filteredPanels: Record<string, Addon> = {};
    Object.entries(allPanels).forEach(([id, panel]) => {
      const { paramKey } = panel;
      if (
        paramKey &&
        parameters &&
        parameters[paramKey] &&
        parameters[paramKey].disable
      ) {
        return;
      }
      filteredPanels[id] = panel;
    });

    return filteredPanels;
  },
  getSelectedPanel: () => {
    const { selectedPanel } = state;
    return ensurePanel(addonsAPI.getPanels(), selectedPanel, selectedPanel);
  },
  setSelectedPanel: (panelName) => {
    state.selectedPanel = panelName;
  },
  getAddonState: (addonId): AddonState => {
    return state.addons[addonId].state;
  },
  setAddonState(addonId: string, addonState: AddonState): void{
    const addon = {...state.addons[addonId]};
    addon.state = addonState;
    state.addons = {...state.addons, [addonId]: addon }
  },
};
