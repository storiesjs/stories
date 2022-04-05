/*!
 * (C) StoriesJS https://storiesjs.org - GPL-2.0 License
 */
/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/consistent-type-definitions */
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * All registered listeners
 */
const messagesListeners = {};
/**
 * Registers a callback for an event
 * @param {string} eventName - Name of the event to listen for.
 * @param {function} callback - Function to invoke when said event is fired.
 */
const on = (eventName, callback) => {
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
const off = (eventName, callback) => {
  if (messagesListeners[eventName]) {
    messagesListeners[eventName] = messagesListeners[eventName].filter((listener) => listener !== callback);
  }
};
/**
 * Unregisters all event listeners bound to an object.
 * @param {object} thisArg - All the callbacks bound to this object will be removed.
 */
const clear = () => {
  Object.keys(messagesListeners).forEach((eventName) => {
    messagesListeners[eventName] = [];
  });
};
/**
 * Fires an event to listeners.
 * @param {string} eventName - Name of the event to fire.
 * @param {*} payload - Payload of the event to fire.
 */
const emit = (eventName, payload) => {
  if (messagesListeners[eventName]) {
    messagesListeners[eventName].forEach((listener) => {
      try {
        listener(payload);
      }
      catch (error) {
        // fail silently
      }
    });
  }
};
const messages = {
  on,
  off,
  clear,
  emit
};

export { messages as m };

//# sourceMappingURL=messages.js.map