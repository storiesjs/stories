import { LitElement, html, css } from 'lit';
import type { TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';

import { hash } from '../stories-api';

import { observeState } from 'lit-element-state';
import { storiesState } from './StoriesState';
import { StoryObjects } from './types';

export class StoriesApp extends observeState(LitElement) {

  static styles = css`
    :host {
      display: flex;
      flex-direction: row;
      height: 100vh;
      background-color: cyan
    }
  `;

  @property({type: Array}) set stories(value: StoryObjects) {
    storiesState.stories = value;
    // Update internal state and sync it with hash
    this._hashChangeListener();
  }

  private _hashChangeListener = () => {    
    let _path = hash.getPath() || hash.getDefaulthPath(storiesState.stories as any);
    // Set story in state
    storiesState.story = _path ? storiesState.stories[_path] : undefined;
    // We have to update the url's hash to keep it in sync with API
    hash.setPath(_path);
    // Send custom event
    const event = new CustomEvent('StorySelectedEvent', { detail: storiesState.story });
    this.dispatchEvent(event);
  };

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("hashchange", this._hashChangeListener);

  }

  disconnectedCallback() {
    window.removeEventListener("hashchange", this._hashChangeListener);
    super.disconnectedCallback();
  }

  render(): TemplateResult {
    return html`
      <slot name="navigator"></slot>
      <slot name="viewer"></slot>
    `;
  }
}

customElements.define('stories-app', StoriesApp as any);

declare global {
  interface HTMLElementTagNameMap {
    "stories-app": StoriesApp,
  }
}
