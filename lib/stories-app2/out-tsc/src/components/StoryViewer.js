import { __decorate } from "tslib";
import { html, css, LitElement, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let StoryViewer = class StoryViewer extends LitElement {
    render() {
        return html `${this.story
            ? html `<div>Story Viewer ${this.story.storyName}</div>`
            : nothing}`;
    }
};
StoryViewer.styles = css `
    :host {
      display: block;
    }
  `;
__decorate([
    property({ type: Object })
], StoryViewer.prototype, "story", void 0);
StoryViewer = __decorate([
    customElement('story-viewer')
], StoryViewer);
export { StoryViewer };
//# sourceMappingURL=StoryViewer.js.map