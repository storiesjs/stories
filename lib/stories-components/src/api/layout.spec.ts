import { state } from "..";

import { layoutAPI } from "./layout";

describe('LayoutAPI', () => {
    describe('toggleFullscreen for NO single story', () => {
        beforeEach(() => {
            state.singleStory = false;
        });

        it('should toggle to full screen', () => {
            state.showNav = false;
            state.fullScreen = false;
            
            layoutAPI.toggleFullscreen(true);
            expect(state.fullScreen).toBeTruthy();
            expect(state.showNav).toBeFalsy();
        });

        it('should toggle to normal screen', () => {
            state.showNav = false;
            state.fullScreen = true;

            layoutAPI.toggleFullscreen(false);
            expect(state.fullScreen).toBeFalsy();
            expect(state.showNav).toBeTruthy();
        });
    });

    describe('toggleFullscreen for single story', () => {
        beforeEach(() => {
            state.singleStory = true;
        });

        it('should toggle to full screen', () => {
            state.showNav = false;
            state.fullScreen = false;
            
            layoutAPI.toggleFullscreen(true);
            expect(state.fullScreen).toBeTruthy();
            expect(state.showNav).toBeFalsy();
        });

        it('should toggle to normal screen', () => {
            state.showNav = false;
            state.fullScreen = true;

            layoutAPI.toggleFullscreen(false);
            expect(state.fullScreen).toBeFalsy();
            expect(state.showNav).toBeFalsy();
        });
    });

    describe('togglePanel', () => {
         beforeEach(() => {
            state.showPanel = false;
        });

        it('should toggle to full screen', () => {
            state.showNav = false;
            state.fullScreen = false;
            
            layoutAPI.togglePanel(true);
            expect(state.fullScreen).toBeFalsy();
            expect(state.showNav).toBeFalsy();
        });

        it('should toggle to normal screen', () => {
            state.showNav = false;
            state.fullScreen = true;

            layoutAPI.togglePanel(false);
            expect(state.fullScreen).toBeTruthy();
            expect(state.showNav).toBeFalsy();
        });
    });

    describe('togglePanelPosition', () => {
        it('should set position to position', () => {
            state.panelPosition = 'bottom';
            layoutAPI.togglePanelPosition('right');

            expect(state.panelPosition).toBe('right');
        });

        it('should toggle position to another position', () => {
            state.panelPosition = 'bottom';
            layoutAPI.togglePanelPosition();

            expect(state.panelPosition).toBe('right');
        });
    });

    describe('toggleNav', () => {
        beforeEach(() => {
            state.showPanel = false;
            state.singleStory = false;
        });

        it('should not change anything if the singleStory selected', () => {
            state.singleStory = true;
            state.showNav = false;
            state.fullScreen = false;
            
            layoutAPI.toggleNav(true);
            expect(state.fullScreen).toBeFalsy();
            expect(state.showNav).toBeFalsy();
        });

        it('should show nav', () => {
            state.showNav = false;
            state.fullScreen = false;
            
            layoutAPI.toggleNav(true);
            expect(state.fullScreen).toBeFalsy();
            expect(state.showNav).toBeTruthy();
        });

        it('should hide the nav', () => {
            state.showNav = true;
            state.fullScreen = true;

            layoutAPI.toggleNav(false);
            expect(state.fullScreen).toBeTruthy();
            expect(state.showNav).toBeFalsy();
        });
    });

    describe('resetLayout', () => {
        it('should reset layout', () => {
            state.showNav = true;
            state.showPanel = true;
            state.fullScreen = true;

            layoutAPI.resetLayout();
            expect(state.fullScreen).toBeFalsy();
            expect(state.showNav).toBeFalsy();
            expect(state.showPanel).toBeFalsy();
        });
    });

    describe('focusOnUIElement', () => {
        beforeEach(() => {
            document.querySelector = jest.fn(() => {
                return {
                    focus: jest.fn(),
                    select: jest.fn()
                }
            });
        });

        it('should do nothing for undefined element id', () => {
            layoutAPI.focusOnUIElement();
            expect(document.querySelector).not.toHaveBeenCalled();
        });

        it('should do nothing for undefined element id', () => {
            const elementId = 'elementId';

            layoutAPI.focusOnUIElement(elementId);
            expect(document.querySelector).toHaveBeenCalledWith(`#${elementId}`);
        });
    });
});