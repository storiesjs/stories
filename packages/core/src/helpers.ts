/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Elements inside of web components sometimes need to inherit global attributes
 * set on the host. For example, the inner input in `stories-input` should inherit
 * the `title` attribute that developers set directly on `stories-input`. This
 * helper function should be called in componentWillLoad and assigned to a variable
 * that is later used in the render function.
 *
 * This does not need to be reactive as changing attributes on the host element
 * does not trigger a re-render.
 */

import type { EventEmitter } from "@stencil/core";

declare const __zone_symbol__requestAnimationFrame: any;
declare const requestAnimationFrame: any;


export const inheritAttributes = (el: HTMLElement, attributes: string[] = []): Record<string, any> => {
  const attributeObject: Record<string, any> = {};

  attributes.forEach(attr => {
    if (el.hasAttribute(attr)) {
      const value = el.getAttribute(attr);
      if (value !== null) {
        attributeObject[attr] = el.getAttribute(attr);
      }
      el.removeAttribute(attr);
    }
  });

  return attributeObject;
}

export const hasShadowDom = (el: HTMLElement): boolean => {

  return !!el.shadowRoot && !!(el as any).attachShadow;
};

export const findItemLabel = (componentEl: HTMLElement): HTMLStoriesLabelElement | null => {
  const itemEl = componentEl.closest('stories-item');
  if (itemEl) {
    return itemEl.querySelector('stories-label');
  }
  return null;
};

export const deferEvent = (event: EventEmitter): EventEmitter => {
  return debounceEvent(event, 0);
};

export const debounceEvent = (event: EventEmitter, wait: number): EventEmitter => {
  const original = (event as any)._original || event;
  return {
    _original: event,
    emit: debounce(original.emit.bind(original), wait)
  } as EventEmitter;
};


export const debounce = (func: (...args: any[]) => void, wait = 0): any => {
  let timer: any;
  return (...args: any[]): any => {
    clearTimeout(timer);
    timer = setTimeout(func, wait, ...args);
  };
};

/**
 * This method is used for input components that use Shadow DOM. In
 * order to properly label the inputs to work with screen readers, we need
 * to get the text content of the label outside of the shadow root and pass
 * it to the input inside of the shadow root.
 *
 * Referencing label elements by id from outside of the component is
 * impossible due to the shadow boundary, read more here:
 * https://developer.salesforce.com/blogs/2020/01/accessibility-for-web-components.html
 *
 * @param componentEl The shadow element that needs the aria label
 * @param inputId The unique identifier for the input
 */
export const getAriaLabel = (componentEl: HTMLElement, inputId: string): { label: Element | null, labelId: string, labelText: string | null | undefined } => {
  let labelText;

  // If the user provides their own label via the aria-labelledby attr
  // we should use that instead of looking for an stories-label
  const labelledBy = componentEl.getAttribute('aria-labelledby');

  // Grab the id off of the component in case they are using
  // a custom label using the label element
  const componentId = componentEl.id;

  let labelId = labelledBy !== null && labelledBy.trim() !== ''
    ? labelledBy
    : inputId + '-lbl';

  let label = labelledBy !== null && labelledBy.trim() !== ''
    ? document.getElementById(labelledBy)
    : findItemLabel(componentEl);

  if (label) {
    if (labelledBy === null) {
      label.id = labelId;
    }

    labelText = label.textContent;
    label.setAttribute('aria-hidden', 'true');

  // if there is no label, check to see if the user has provided
  // one by setting an id on the component and using the label element
  } else if (componentId.trim() !== '') {
    label = document.querySelector(`label[for="${componentId}"]`);

    if (label) {
      if (label.id !== '') {
        labelId = label.id;
      } else {
        label.id = labelId = `${componentId}-lbl`;
      }

      labelText = label.textContent;
    }
  }

  return { label, labelId, labelText };
};

/**
 * This method is used to add a hidden input to a host element that contains
 * a Shadow DOM. It does not add the input inside of the Shadow root which
 * allows it to be picked up inside of forms. It should contain the same
 * values as the host element.
 *
 * @param always Add a hidden input even if the container does not use Shadow
 * @param container The element where the input will be added
 * @param name The name of the input
 * @param value The value of the input
 * @param disabled If true, the input is disabled
 */
export const renderHiddenInput = (always: boolean, container: HTMLElement, name: string, value: string | undefined | null, disabled: boolean): void => {
  if (always || hasShadowDom(container)) {
    let input = container.querySelector('input.aux-input') as HTMLInputElement | null;
    if (!input) {
      input = container.ownerDocument!.createElement('input');
      input.type = 'hidden';
      input.classList.add('aux-input');
      container.appendChild(input);
    }
    input.disabled = disabled;
    input.name = name;
    input.value = value || '';
  }
};

/**
 * Patched version of requestAnimationFrame that avoids ngzone
 * Use only when you know ngzone should not run
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const raf = (h: any) => {
  if (typeof __zone_symbol__requestAnimationFrame === 'function') {
    return __zone_symbol__requestAnimationFrame(h);
  }
  if (typeof requestAnimationFrame === 'function') {
    return requestAnimationFrame(h);
  }
  return setTimeout(h);
};
