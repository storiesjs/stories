import { html, css, LitElement, nothing } from 'lit';
import type { TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import type { StoryObject } from '../types.js';

@customElement('story-viewer')
export class StoryViewer extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
  `;

  @property({ type: Object }) story?: StoryObject;

  render(): TemplateResult {
    return html`${
      this.story
        ? html`<div>Story Viewer ${this.story.storyName}</div>`
        : nothing
    }`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "story-viewer": StoryViewer,
  }
}