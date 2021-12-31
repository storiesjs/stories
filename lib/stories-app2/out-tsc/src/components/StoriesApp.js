import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let StoriesApp = class StoriesApp extends LitElement {
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
    render() {
        return html `
      <stories-navigator .stories=${this.stories}></stories-navigator>
      <story-viewer .story=${this.story}></story-viewer>
    `;
    }
};
StoriesApp.styles = css `
    :host {
      display: flex;
      flex-direction: row;
      height: 100vh;
      background-color: cyan
    }
  `;
__decorate([
    property({ type: Object })
], StoriesApp.prototype, "stories", void 0);
__decorate([
    property({ type: Object })
], StoriesApp.prototype, "story", void 0);
StoriesApp = __decorate([
    customElement('stories-app')
], StoriesApp);
export { StoriesApp };
//# sourceMappingURL=StoriesApp.js.map