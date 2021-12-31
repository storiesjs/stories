import { LitElement, html, css } from 'lit';
import type { TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { StoryObjects, StoryObject } from '../types.js';

@customElement('stories-app')
export class StoriesApp extends LitElement {

  static styles = css`
    :host {
      display: flex;
      flex-direction: row;
      height: 100vh;
      background-color: cyan
    }
  `;

  @property({ type: Object }) stories: StoryObjects;

  @property({ type: Object }) story?: StoryObject;

  constructor() {
    super();
    this.stories = {};
    setTimeout(() => {
      this.stories = {
        "button": {
          storyId: 'storyId',
          storyKind: 'storyKind',
          storyName: 'storyName'
        }
      };
      // eslint-disable-next-line dot-notation
      this.story = this.stories["button"];
    }, 2000);
  }

  render(): TemplateResult {
    return html`
      <stories-navigator .stories=${this.stories}></stories-navigator>
      <story-viewer .story=${this.story}></story-viewer>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "stories-app": StoriesApp,
  }
}
