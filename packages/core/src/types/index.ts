/* eslint-disable @typescript-eslint/no-explicit-any */
import type { AddonsAPI } from './addons';
import type { LayoutAPI } from './layout';
import type { NotificationsAPI } from './notifications';
import type { ShotcutsAPI } from './shortcuts';
import type { StoriesAPI } from './story';

export * from './config';
export * from './ui';
export * from './story';
export * from './addons';
export * from './layout';
export * from './notifications';
export * from './shortcuts';
export { default as messages, Messages } from './messages';
export * from './actions';

export type API = AddonsAPI & LayoutAPI & ShotcutsAPI & StoriesAPI & NotificationsAPI;
