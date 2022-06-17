import { state } from '../store';
import type { LayoutAPI, PanelPosition } from "../types";

export const layoutAPI: LayoutAPI = {
  toggleFullscreen(toggled?: boolean) {
    const { showNav, singleStory, fullScreen } = state;

    const value = typeof toggled === 'boolean' ? toggled : !fullScreen;
    const shouldShowNav = showNav === false && value === false;

    state.fullScreen = value;
    state.showNav = !singleStory && shouldShowNav ? true : showNav;
  },

  togglePanel(toggled?: boolean) {
    const { showNav, fullScreen, showPanel } = state;

    const value = typeof toggled !== 'undefined' ? toggled : !showPanel;
    const shouldToggleFullScreen = showNav === false && value === false;

    state.showPanel = value;
    state.fullScreen = shouldToggleFullScreen ? true : fullScreen;
  },

  togglePanelPosition(position?: PanelPosition) {
    if (typeof position !== 'undefined') {
      state.panelPosition = position;
    } else {
      state.panelPosition = state.panelPosition === 'right' ? 'bottom' : 'right';
    }
  },

  toggleNav(toggled?: boolean) {
    if (state.singleStory) {
      return;
    };

    const { showPanel, fullScreen, showNav } = state;
    const value = typeof toggled !== 'undefined' ? toggled : !showNav;
    const shouldToggleFullScreen = showPanel === false && value === false;

    state.showNav = value;
    state.fullScreen = shouldToggleFullScreen ? true : !value && fullScreen;
  },

  resetLayout() {
    state.showNav = false;
    state.showPanel = false;
    state.fullScreen = false;
  },

  focusOnUIElement(elementId?: string, select?: boolean) {
      if (!elementId) {
        return;
      }
      const element = document.querySelector(`#${elementId}`) as any;
      if (element) {
        element.focus();
        if (select) {
          element.select();
        }
      }
    },

};
