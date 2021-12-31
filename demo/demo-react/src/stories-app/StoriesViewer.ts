import { html, css, LitElement, nothing } from 'lit';
import type { TemplateResult } from 'lit';

import { observeState } from 'lit-element-state';
import { storiesState } from './StoriesState';

export class StoriesViewer extends observeState(LitElement) {
  static styles = css`
    :host {
      display: block;
    }
    section {
      flex-shrink: 1;
      height: 100vh;
      width: 100vw;
      background-color: lightcoral
    }
  `;

  render(): TemplateResult {
    return html`${
      storiesState.story
      ? html`<section><slot></slot></section>`
      : nothing
    }`;
  }
}

customElements.define('stories-viewer', StoriesViewer as any);

declare global {
  interface HTMLElementTagNameMap {
    "stories-viewer": StoriesViewer,
  }
}