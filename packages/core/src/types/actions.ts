/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Options as TelejsonOptions } from 'telejson';

export type HandlerFunction = (...args: any[]) => void;

export const ACTION_EVENT = 'ACTION_EVENT';

export interface ActionDisplay {
  id: string;
  data: {
    name: string;
    args: any[];
  };
  count: number;
  options: ActionOptions;
}

export interface Options {
  clearOnStoryChange: boolean;
  limit: number;
}

export type ActionOptions = Partial<Options> & Partial<TelejsonOptions>;

export const DefaultActionOptions: ActionOptions = {
  clearOnStoryChange: true,
  limit: 50,
};

export type SyntheticEvent = any;
