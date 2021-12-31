import { __decorate } from "tslib";
import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let StoriesNavigator = class StoriesNavigator extends LitElement {
    constructor() {
        super();
        this.bgColor = 'white';
        this.stories = {};
    }
    render() {
        if (this.stories) {
            return html `
        <nav>
          <h1>Navigation</h1>
          ${Object.keys(this.stories).map(key => {
                const story = this.stories[key];
                return html `<li><a href=${`/#path=${key}`}>${story.storyName}</a></li>`;
            })}
        </nav>
      `;
        }
        return html `<div>No stories</div>`;
    }
};
StoriesNavigator.styles = css `
    :host {
      display: block;
    }
    nav {
      flex-shrink: 0;
      height: 100vh;
      width: 200px;
    }
  `;
__decorate([
    property({ type: String })
], StoriesNavigator.prototype, "bgColor", void 0);
__decorate([
    property({ type: Object })
], StoriesNavigator.prototype, "stories", void 0);
StoriesNavigator = __decorate([
    customElement('stories-navigator')
], StoriesNavigator);
export { StoriesNavigator };
//# sourceMappingURL=StoriesNavigator.js.map