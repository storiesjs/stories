export type KeyCollection = string[];

export type Shortcuts = {
    fullScreen: KeyCollection;
    togglePanel: KeyCollection;
    panelPosition: KeyCollection;
    toggleNav: KeyCollection;
    toolbar: KeyCollection;
    search: KeyCollection;
    focusNav: KeyCollection;
    focusPreview: KeyCollection;
    focusPanel: KeyCollection;
    prevComponent: KeyCollection;
    nextComponent: KeyCollection;
    prevStory: KeyCollection;
    nextStory: KeyCollection;
    shortcutsPage: KeyCollection;
    aboutPage: KeyCollection;
    escape: KeyCollection;
    collapseAll: KeyCollection;
    expandAll: KeyCollection;
};

export type Action = keyof Shortcuts;

export type AddonShortcut = {
    label: string;
    defaultShortcut: KeyCollection;
    actionName: string;
    showInMenu?: boolean;
    action: (...args: any[]) => any;
};

export type AddonShortcuts = Record<string, AddonShortcut>;
export type AddonShortcutDefaults = Record<string, KeyCollection>;

export type Event = KeyboardEvent & {
    target: {
        tagName: string;
        addEventListener(): void;
        removeEventListener(): boolean;
        dispatchEvent(event: Event): boolean;
        getAttribute(attr: string): string | null;
    };
};

export type ShotcutsAPI = {
    getShortcuts(): Shortcuts;
    setShortcuts(shortcuts: Shortcuts): void;
    getDefaultShortcuts(): Shortcuts | AddonShortcutDefaults;
    getAddonsShortcuts(): AddonShortcuts;
    getAddonsShortcutDefaults(): AddonShortcutDefaults;
    setShortcut(action: Action, value: KeyCollection): void;
    setAddonShortcut(addon: string, shortcut: AddonShortcut): void;
    handleKeydownEvent(event: KeyboardEvent): void;
    handleShortcutFeature(feature: Action): void;
};

export type ShotcutsState = {
    shortcuts: Shortcuts;
};
