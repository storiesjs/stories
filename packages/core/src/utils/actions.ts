/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import type { ActionDisplay, ActionOptions, HandlerFunction, SyntheticEvent } from "../types";
import { ACTION_EVENT, DefaultActionOptions, messages } from "../types";

const findProto = (obj: unknown, callback: (proto: any) => boolean): Function | null => {
  const proto = Object.getPrototypeOf(obj);
  if (!proto || callback(proto)) return proto;
  return findProto(proto, callback);
};

const isReactSyntheticEvent = (e: unknown): e is SyntheticEvent =>
  Boolean(
    typeof e === 'object' &&
    e &&
    findProto(e, (proto) => /^Synthetic(?:Base)?Event$/.test(proto.constructor.name)) &&
    typeof (e as SyntheticEvent).persist === 'function'
  );

const serializeArg = <T>(a: T) => {
  if (isReactSyntheticEvent(a)) {
    const e: SyntheticEvent = Object.create(
      a.constructor.prototype,
      Object.getOwnPropertyDescriptors(a)
    );
    e.persist();
    const viewDescriptor = Object.getOwnPropertyDescriptor(e, 'view');
    // dont send the entire window object over.
    const view: unknown = viewDescriptor?.value;
    if (typeof view === 'object' && view?.constructor.name === 'Window') {
      Object.defineProperty(e, 'view', {
        ...viewDescriptor,
        value: Object.create(view.constructor.prototype),
      });
    }
    return e;
  }
  return a;
};

export function action(name: string, options: ActionOptions = {}): HandlerFunction {
  const actionOptions = {
    ...DefaultActionOptions,
    ...options,
  };

  const handler: HandlerFunction = (...args: any[]) => {
    const id = (new Date()).getTime().toString(); // uuidv4();
    const maxDepth = 1;
    const serializedArgs = args.map(serializeArg);
    const normalizedArgs = args.length > 1 ? serializedArgs : serializedArgs[0];

    const actionDisplayToEmit: ActionDisplay = {
      id,
      count: 0,
      data: { name, args: normalizedArgs },
      options: {
        ...actionOptions,
        maxDepth: maxDepth,
        allowFunction: actionOptions.allowFunction || false,
      },
    };
    let cache: any | null = [];
    const event = JSON.stringify(actionDisplayToEmit, (_: string, value: any) => {
      if (typeof value === 'object' && value !== null) {
        if (cache.indexOf(value) !== -1) {
          // Duplicate reference found, discard key
          return;
        }
        // Store value in our collection
        cache.push(value);
      }
      return value;
    });
    cache = null; // Enable garbage collection

    const original = JSON.parse(event);

    console.log(ACTION_EVENT, original);
    messages.emit(ACTION_EVENT, original);
  };

  return handler;
}
