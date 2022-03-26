/* eslint-disable @typescript-eslint/consistent-type-definitions */
export type Notification = {
  id: string;
  link: string;
  content: {
    headline: string;
    subHeadline?: string;
  };

  icon?: {
    name: string;
    color?: string;
  };
  onClear?: () => void;
};

export type NotificationsAPI = {
    addNotification: (notification: Notification) => void;
    clearNotification: (id: string) => void;
};

export type NotificationsState = {
  notifications: Notification[];
};