import { html, css, LitElement } from 'lit';
import type { TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
// import { property } from 'lit/decorators.js';
import type { Ref } from 'lit/directives/ref.js';
import { createRef, ref } from 'lit/directives/ref.js';

// import { StoryObjects } from '../types.js';

@customElement('stories-frame')
export class StoriesFrame extends LitElement {
  static styles = css`
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
  static shadowRootOptions = {...LitElement.shadowRootOptions, mode: 'closed' as ShadowRootMode};

  slotRef: Ref<HTMLSlotElement> = createRef();

  @state()
  protected _content: Node[] | undefined = undefined;

  // @property({ type: Object }) story: StoryObject | undefined;

  // private onLoad(event: Event) {
  //   console.log('OnLoad', event)
  // }

  render(): TemplateResult {
    return html`
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
  protected async slotchange(): Promise<void> {
    // The nodes assigned to the given component have changed.
    // Update the component's state to reflect the new content.
    const content = this.slotRef.value?.assignedNodes({ flatten: true });
    Object.freeze(content);
    this._content = content;
    // eslint-disable-next-line no-console
    console.log('slotchange', this.slotRef.value, this._content);
    await Promise.resolve();
  }

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

  private handleLoad = (e: Event) => {
    // eslint-disable-next-line no-console
    console.log('Loaded', e);
  }
}
/*
export default function StoriesFrame({children}: Props): VNode {
    const frame = useRef(null);

    const onLoad = (evt: Event) => {
        console.log('On Load', evt);
        if (frame.current) {
            let target = frame.current as any;
            let childNodes = target.childNodes;
            if (childNodes.length === 1 && childNodes[0].tagName === 'SLOT') {
                target = childNodes[0];
                childNodes = childNodes[0].childNodes;
            }
            const body = (frame.current as any).contentDocument.body;
            const el = document.createElement("DIV"); // we will mount or nested app to this element
            body.appendChild(el);
            childNodes.forEach(child => {
                console.log(child, child.tagName);
                target.removeChild(child);
                el.appendChild(child)
            });
        }
    };

    return (
        <iframe ref={frame} style={{width: '100%', height: '100%'}} onLoad={onLoad}>
            { children }
        </iframe>
    );
}
*/

declare global {
  interface HTMLElementTagNameMap {
    "stories-frame": StoriesFrame,
  }
}
