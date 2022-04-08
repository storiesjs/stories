import { state } from "../store";
import type { Notification } from '../types';

import { notificationsAPI } from "./notifications";

describe('NotificationsAPI', () => {
    describe('addNotification', () => {
        beforeEach(() => {
            state.notifications = [];
        });

        it('should add notification', () => {
            const notification: Notification = {
                id: 'id',
                link: 'link',
                content: {
                    headline: 'headline',
                    subHeadline: 'subHeadline',
                },

                icon: {
                    name: 'name',
                    color: 'color',
                },
                onClear: jest.fn(),
            };

            notificationsAPI.addNotification(notification);
            expect(state.notifications.length).toBe(1);
            expect(state.notifications[0].id).toBe('id');
            expect(state.notifications[0].link).toBe('link');
        });

        it('should replace the one with the same id', () => {
            const notification: Notification = {
                id: 'id',
                link: 'link',
                content: {
                    headline: 'headline',
                    subHeadline: 'subHeadline',
                },

                icon: {
                    name: 'name',
                    color: 'color',
                },
                onClear: jest.fn(),
            };

            notificationsAPI.addNotification(notification);

            notification.link = 'link2';
            notificationsAPI.addNotification(notification);

            expect(state.notifications.length).toBe(1);
            expect(state.notifications[0].id).toBe('id');
            expect(state.notifications[0].link).toBe('link2');
        });
    });

    describe('clearNotification', () => {
        beforeEach(() => {
            state.notifications = [];
        });

        it('should not clear unknown notification', () => {
            const notification: Notification = {
                id: 'id',
                link: 'link',
                content: {
                    headline: 'headline',
                    subHeadline: 'subHeadline',
                },

                icon: {
                    name: 'name',
                    color: 'color',
                },
                onClear: jest.fn(),
            };

            notificationsAPI.addNotification(notification);
            notificationsAPI.clearNotification('id2')
            expect(state.notifications.length).toBe(1);
            expect(state.notifications[0].id).toBe('id');
            expect(state.notifications[0].link).toBe('link');
        });

        it('should clear known notification', () => {
            const notification: Notification = {
                id: 'id',
                link: 'link',
                content: {
                    headline: 'headline',
                    subHeadline: 'subHeadline',
                },

                icon: {
                    name: 'name',
                    color: 'color',
                },
                onClear: jest.fn(),
            };

            notificationsAPI.addNotification(notification);
            notificationsAPI.clearNotification('id')
            expect(state.notifications.length).toBe(0);
        });
    });
});
