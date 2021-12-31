import { html, css, LitElement } from 'lit';
import type { TemplateResult } from 'lit';
import { observeState } from 'lit-element-state';
import { storiesState } from './StoriesState';

export class StoriesNavigator extends observeState(LitElement) {

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

  render(): TemplateResult {
    if (storiesState.stories) {
      return html`
        <nav>
          <h1>Navigation</h1>
          ${Object.keys(storiesState.stories).map(key => {
            const story = storiesState.stories[key];
            return html`<li><a href=${`/#path=${key}`}>${story.storyName}</a></li>`;
          })}
        </nav>
      `;
    }

    return html`<div>No stories</div>`;
  }
}

customElements.define('stories-navigator', StoriesNavigator as any);

declare global {
  interface HTMLElementTagNameMap {
    "stories-navigator": StoriesNavigator,
  }
}
