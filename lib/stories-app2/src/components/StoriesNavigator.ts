import { html, css, LitElement } from 'lit';
import type { TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { StoryObjects } from '../types.js';

@customElement('stories-navigator')
export class StoriesNavigator extends LitElement {
  @property({ type: String }) bgColor = 'white';

  static styles = css`
    :host {
      display: block;
    }
    nav {
      flex-shrink: 0;
      height: 100vh;
      width: 200px;
    }
  `;

  @property({ type: Object }) stories: StoryObjects;

  constructor() {
    super();
    this.stories = {};
  }

  render(): TemplateResult {
    if (this.stories) {
      return html`
        <nav>
          <h1>Navigation</h1>
          ${Object.keys(this.stories).map(key => {
            const story = this.stories[key];
            return html`<li><a href=${`/#path=${key}`}>${story.storyName}</a></li>`;
          })}
        </nav>
      `;
    }

    return html`<div>No stories</div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "stories-navigator": StoriesNavigator,
  }
}
