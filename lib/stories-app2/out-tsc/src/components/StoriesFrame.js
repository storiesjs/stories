import { __decorate } from "tslib";
import { html, css, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { createRef, ref } from 'lit/directives/ref.js';
// import { StoryObjects } from '../types.js';
let StoriesFrame = class StoriesFrame extends LitElement {
    constructor() {
        super(...arguments);
        this.slotRef = createRef();
        this._content = undefined;
        // connectedCallback() {
        //   const shadow = this.attachShadow({ mode: 'closed' });
        //   shadow.innerHTML = this.getAttribute('html');
        // this.renderRoot.innerHTML = this.getAttribute('html') || '';
        // }
        // render() {
        //   return html`
        //     <iframe title="iframe" @load=${this.handleLoad}>
        //       <div>Test</div>
        //     </iframe>
        //   `;
        // }
        // protected createRenderRoot() {
        //   return this;
        // }
        this.handleLoad = (e) => {
            // eslint-disable-next-line no-console
            console.log('Loaded', e);
        };
    }
    // @property({ type: Object }) story: StoryObject | undefined;
    // private onLoad(event: Event) {
    //   console.log('OnLoad', event)
    // }
    render() {
        return html `
      <slot ${ref(this.slotRef)} @slotchange=${this.slotchange}></slot>
    `;
    }
    /**
     * Although slotchange isn't generally a user-driven event, it's
     * impossible for us to know whether a change in slot content is going
     * to result in effects that the host of this element can predict.
     * To be on the safe side, we raise any change events that come up
     * during the processing of this event.
     */
    async slotchange() {
        var _a;
        // The nodes assigned to the given component have changed.
        // Update the component's state to reflect the new content.
        const content = (_a = this.slotRef.value) === null || _a === void 0 ? void 0 : _a.assignedNodes({ flatten: true });
        Object.freeze(content);
        this._content = content;
        // eslint-disable-next-line no-console
        console.log('slotchange', this.slotRef.value, this._content);
        await Promise.resolve();
    }
};
StoriesFrame.styles = css `
    :host {
      display: block;
      padding: 25px;
      color: var(--todo-list-text-color, #000);
    }

    iframe {
      width: 100%;
      height: 100%;
    }
  `;
// eslint-disable-next-line no-undef
StoriesFrame.shadowRootOptions = { ...LitElement.shadowRootOptions, mode: 'closed' };
__decorate([
    state()
], StoriesFrame.prototype, "_content", void 0);
StoriesFrame = __decorate([
    customElement('stories-frame')
], StoriesFrame);
export { StoriesFrame };
//# sourceMappingURL=StoriesFrame.js.map