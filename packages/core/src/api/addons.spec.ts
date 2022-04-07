import { state } from '../store';
import type { Addon } from "../types";

import { addonsAPI } from "./addons";

describe('AddonsAPI', () => {
    describe('registerAddon', () => {
        beforeEach(() => {
            state.addons = {};
        });

        it('should register addon', () => {
            const addon: Addon = {
                id: 'panel-id',
                el: undefined,
                type: "panel",
                title: 'panel-title',
                storyContextChanged: jest.fn(),
            }
            addonsAPI.registerAddon(addon);

            expect(Object.keys(state.addons).length).toBe(1);
            expect(Object.keys(state.addons)[0]).toBe('panel-id');
        });
    });

    describe('unregisterAddon', () => {
        beforeEach(() => {
            state.addons = {};
        });

        it('should unregister addon', () => {
            const addon: Addon = {
                id: 'panel-id',
                el: undefined,
                type: "panel",
                title: 'panel-title',
                storyContextChanged: jest.fn(),
            }
            addonsAPI.registerAddon(addon);
            addonsAPI.unregisterAddon(addon);

            expect(Object.keys(state.addons).length).toBe(0);
        });
    });

    describe('getPanels', () => {
        beforeEach(() => {
            state.addons = {};
        });

        it('should return empty records', () => {
            const panels: Record<string, Addon> = addonsAPI.getPanels();

            expect(Object.keys(panels).length).toBe(0);
        });

        it('should return records of panels', () => {
            state.addons = {
                "panel": {
                    id: 'panel-id',
                    el: undefined,
                    type: "panel",
                    title: 'panel-title',
                    storyContextChanged: jest.fn(),
                },
                "tool": {
                    id: 'tool-id',
                    el: undefined,
                    type: "tool",
                    title: 'tool-title',
                    storyContextChanged: jest.fn(),
                }
            };

            const panels: Record<string, Addon> = addonsAPI.getPanels();

            expect(Object.keys(panels).length).toBe(1);
        });
    });

    describe('getTools', () => {
        beforeEach(() => {
            state.addons = {};
        });

        it('should return empty records', () => {
            const tools: Record<string, Addon> = addonsAPI.getTools();

            expect(Object.keys(tools).length).toBe(0);
        });

        it('should return records of tools', () => {
            state.addons = {
                "panel": {
                    id: 'panel-id',
                    el: undefined,
                    type: "panel",
                    title: 'panel-title',
                    storyContextChanged: jest.fn(),
                },
                "tool": {
                    id: 'tool-id',
                    el: undefined,
                    type: "tool",
                    title: 'tool-title',
                    storyContextChanged: jest.fn(),
                }
            };

            const tools: Record<string, Addon> = addonsAPI.getTools();

            expect(Object.keys(tools).length).toBe(1);
        });
    });

    describe('getStoryPanels', () => {
        beforeEach(() => {
            state.addons = {};
            state.story = undefined;
        });

        it('should return empty records', () => {
            const tools: Record<string, Addon> = addonsAPI.getStoryPanels();

            expect(Object.keys(tools).length).toBe(0);
        });

        it('should return records of all panels for no story selected', () => {
            state.addons = {
                "panel": {
                    id: 'panel-id',
                    el: undefined,
                    type: "panel",
                    title: 'panel-title',
                    storyContextChanged: jest.fn(),
                },
                "tool": {
                    id: 'tool-id',
                    el: undefined,
                    type: "tool",
                    title: 'tool-title',
                    storyContextChanged: jest.fn(),
                }
            };

            const tools: Record<string, Addon> = addonsAPI.getStoryPanels();

            expect(Object.keys(tools).length).toBe(1);
        });

        it('should return records of panels for story', () => {
            state.addons = {
                "panel": {
                    id: 'panel-id',
                    el: undefined,
                    type: "panel",
                    title: 'panel-title',
                    storyContextChanged: jest.fn(),
                    paramKey: "paramKey"
                },
                "tool": {
                    id: 'tool-id',
                    el: undefined,
                    type: "tool",
                    title: 'tool-title',
                    storyContextChanged: jest.fn(),
                }
            };
            state.story = {
                storyId: "syotyId",
                kinds: [],
                storyName: "storyName",
                storyFn: jest.fn(),
                args: {},
                argTypes: {},
                parameters: {
                    paramKey: {}
                }
            };

            const tools: Record<string, Addon> = addonsAPI.getStoryPanels();

            expect(Object.keys(tools).length).toBe(1);
        });
    });

    describe('getSelectedPanel', () => {
        beforeEach(() => {
            state.addons = {};
            state.selectedPanel = undefined;
        });

        it('should return undefineds', () => {
            const selectedPanel: string | undefined = addonsAPI.getSelectedPanel();

            expect(selectedPanel).toBeUndefined();
        });

        it('should return selected panel', () => {
            state.addons = {
                "panel": {
                    id: 'panel-id',
                    el: undefined,
                    type: "panel",
                    title: 'panel-title',
                    storyContextChanged: jest.fn(),
                },
                "tool": {
                    id: 'tool-id',
                    el: undefined,
                    type: "tool",
                    title: 'tool-title',
                    storyContextChanged: jest.fn(),
                }
            };
            state.selectedPanel = 'panel'

            const selectedPanel: string | undefined = addonsAPI.getSelectedPanel();

            expect(selectedPanel).toBeDefined();
        });
    });

    describe('setSelectedPanel', () => {
        beforeEach(() => {
            state.selectedPanel = undefined;
        });

        it ('should set the selected panel', () => {
            expect(state.selectedPanel).toBeUndefined();

            state.selectedPanel = 'selectedPanel';
            expect(state.selectedPanel).toBe('selectedPanel');
        });
    });

    it('get and set AddonState', () => {
        state.addons = {};

        addonsAPI.setAddonState('addonId', "state");
        expect(state.addons['addonId'].state).toBe('state');

        expect(addonsAPI.getAddonState('addonId')).toBe('state');
    });
});
