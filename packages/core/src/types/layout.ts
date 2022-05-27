export type LayoutAPI = {
    toggleFullscreen: (toggled?: boolean) => void;
    togglePanel:(toggled?: boolean) => void;
    togglePanelPosition: (position?: PanelPosition) => void;
    toggleNav: (toggled?: boolean) => void;
    resetLayout: () => void;
    focusOnUIElement: (elementId?: string, select?: boolean) => void;
};

export type PanelPosition = 'bottom' | 'right';

export type LayoutState = {
    zoom: number;
    showNav: boolean;
    showToolbar: boolean;
    showPanel: boolean;
    fullScreen: boolean;
    panelPosition: PanelPosition;
    singleStory: boolean;
    enableShortcuts: boolean;
    theme: string;
    selectedPanel: string | undefined;
};
