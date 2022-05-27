import { state } from '../store';
import type { AddonsAPI, Addon } from "../types";

export const addonsAPI: AddonsAPI = {
  register: (addonId: string, addon: Addon) => {
    const addons = {...state.addons};
    addons[addonId] = addon;
    state.addons = addons;
  },
  unregister: (addonId: string) => {
    state.addons = Object.keys(state.addons).filter(id => id !== addonId).reduce((addons: any, id) => {
      addons[id] = state.addons[id];
      return addons;
    }, {});
  },
};
