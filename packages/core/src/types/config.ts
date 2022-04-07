/* eslint-disable @typescript-eslint/no-explicit-any */
export interface StoriesConfig {
  _ael?: (el: any, name: string, cb: any, opts: any) => any;
  _rel?: (el: any, name: string, cb: any, opts: any) => any;
  _ce?: (eventName: string, opts: any) => any;
}
