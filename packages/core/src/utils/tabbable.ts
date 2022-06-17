export function isTabbable(el: HTMLElement): boolean {
  const tabIndex = el.tabIndex;
  return tabIndex > -1;
}

export function getNearestTabbableElement(el: HTMLElement): HTMLElement {
  // Check the element
  if (isTabbable(el)) {
    return el;
  }

  // Check the element's shadow root
  if (el.shadowRoot) {
    const tabbableShadowChild = [...(el.shadowRoot.children as any)].find(isTabbable) as HTMLElement;
    if (tabbableShadowChild) {
      return tabbableShadowChild;
    }
  }

  // Check the element's children
  if (el.children) {
    return [...(el.children as any)].map(getNearestTabbableElement)[0];
  }

  return null;
}
