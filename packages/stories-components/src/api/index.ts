import type { API } from '..';

import { addonsAPI } from './addons';
import { layoutAPI } from './layout';
import { notificationsAPI } from './notifications';
import { storiesAPI } from './stories';

const target: API = {} as API;

export const api: API = Object.assign(target, storiesAPI, addonsAPI, layoutAPI, notificationsAPI);