/* eslint-disable @typescript-eslint/no-explicit-any */
import { state } from '../store';
import type { NotificationsAPI, Notification } from "../types";

export const notificationsAPI: NotificationsAPI = {
  addNotification(notification: Notification) {
    // Get rid of it if already exists
    notificationsAPI.clearNotification(notification.id);
    state.notifications = [...state.notifications, notification];
  },
  clearNotification(id: string) {
    state.notifications = state.notifications.filter((notification) => {
      if (notification.id === id) {
        if (notification.onClear) {
          notification.onClear();
        }
        return false;
      }
      return true;
    })
  }
};
