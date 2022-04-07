/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/consistent-type-definitions */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * A basic pub-sub mechanism for sibling component communication
 */

 export type Messages = {
    on: (eventName: string, callback: CallbackFunction) => void;
    off: (eventName: string, callback: CallbackFunction) => void;
    clear: () => void;
    emit: (eventName: string, payload: any) => void;
 };

/**
 * Callback function type
 */
export type CallbackFunction = (...args: any[]) => void;

/**
 * All registered listeners
 */
export const messagesListeners: Record<string, CallbackFunction[]> = {};

/**
 * Registers a callback for an event
 * @param {string} eventName - Name of the event to listen for.
 * @param {function} callback - Function to invoke when said event is fired.
 */
export const on = (eventName: string, callback: CallbackFunction): void => {
    if (!messagesListeners[eventName]) {
        messagesListeners[eventName] = [];
    }
    const duplicate = messagesListeners[eventName].find((listener) => {
        return listener === callback;
    });
    if (!duplicate) {
        messagesListeners[eventName].push(callback);
    }
};

/**
 * Unregisters a callback for an event
 * @param {string} eventName - Name of the event to unregister from.
 * @param {function} callback - Function to unregister.
 */
export const off = (eventName: string, callback: CallbackFunction): void => {
    if (messagesListeners[eventName]) {
        messagesListeners[eventName] = messagesListeners[eventName].filter( (listener) => listener !== callback );
    }
};

/**
 * Unregisters all event listeners bound to an object.
 * @param {object} thisArg - All the callbacks bound to this object will be removed.
 */
export const clear = (): void => {
    Object.keys(messagesListeners).forEach((eventName) => {
        messagesListeners[eventName] = [];
    });
};

/**
 * Fires an event to listeners.
 * @param {string} eventName - Name of the event to fire.
 * @param {*} payload - Payload of the event to fire.
 */
export const emit = (eventName: string, payload: any): void => {
    if (messagesListeners[eventName]) {
        messagesListeners[eventName].forEach((listener) => {
            try {
                listener(payload);
            } catch (error) {
                // fail silently
            }
        });
    }
};

const messages: Messages = {
    on,
    off,
    clear,
    emit
};

export default messages;