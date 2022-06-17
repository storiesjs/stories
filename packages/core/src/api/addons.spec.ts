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
                storyContextChanged: jest.fn(),
            }
            addonsAPI.register("id", addon);

            expect(Object.keys(state.addons).length).toBe(1);
            expect(Object.keys(state.addons)[0]).toBe('id');
        });
    });

    describe('unregisterAddon', () => {
        beforeEach(() => {
            state.addons = {};
        });

        it('should unregister addon', () => {
            const addon: Addon = {
                storyContextChanged: jest.fn(),
            }
            addonsAPI.register("id", addon);
            addonsAPI.unregister("id");

            expect(Object.keys(state.addons).length).toBe(0);
        });
    });
});
