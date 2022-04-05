/*!
 * (C) StoriesJS https://storiesjs.org - GPL-2.0 License
 */
import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';

const splitPaneCss = ":host{display:grid;grid-template-columns:1fr -webkit-max-content 1fr;grid-template-columns:1fr max-content 1fr;-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto;cursor:auto;width:auto;height:100vh}:host([resizing]){-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host([resizing][split=horizontal]){cursor:col-resize}:host #median{inline-size:0.5rem;grid-column:2/3}:host #median:hover{cursor:col-resize}:host [name=slot1]{grid-column:1/2;grid-row:1/1}:host [name=slot2]{grid-column:3/4;grid-row:1/1}:host([resizing][split=vertical]){cursor:row-resize}:host([split=vertical]){grid-template-rows:1fr -webkit-max-content 1fr;grid-template-rows:1fr max-content 1fr;grid-template-columns:none}:host([split=vertical]) #median{block-size:0.5rem;inline-size:auto;grid-row:2/3;grid-column:1/1}:host([split=vertical]) #median:hover{cursor:row-resize}:host([split=vertical]) [name=slot1]{grid-row:1/2;grid-column:1/1}:host([split=vertical]) [name=slot2]{grid-row:3/4;grid-column:1/1}#median{background:bisque}::slotted(*){overflow:auto}";

const SplitPane = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.storiesSizeChange = createEvent(this, "storiesSizeChange", 7);
    this.minSize = 0;
    this.defaultSize = 0;
    this.pointerDown = (e) => {
      e.preventDefault();
      this.isResizing = true;
      const clientRect = this.el.getBoundingClientRect();
      this.left = clientRect.x;
      this.top = clientRect.y;
      this.el.addEventListener("pointermove", this.pointerMove);
      this.el.addEventListener("pointerup", this.pointerUp);
    };
    this.pointerMove = (e) => {
      e.preventDefault();
      if (this.split === "horizontal") {
        const newMedianLeft = e.clientX - this.left;
        const width = this.median.getBoundingClientRect().width;
        this.value = Math.round(newMedianLeft - width / 2);
        // Check min size
        this.value = this.value < this.minSize ? this.minSize : this.value;
        this.el.style.gridTemplateColumns = `${this.value}px ${width}px 1fr`;
      }
      else {
        const newMedianTop = e.clientY - this.top;
        const height = this.median.getBoundingClientRect().height;
        this.value = Math.round(newMedianTop - height / 2);
        // Check min size
        this.value = this.value < this.minSize ? this.minSize : this.value;
        this.el.style.gridTemplateRows = `${this.value}px ${height}px 1fr`;
      }
    };
    this.pointerUp = (e) => {
      e.preventDefault();
      this.isResizing = false;
      this.storiesSizeChange.emit(this.value);
      this.el.removeEventListener("pointermove", this.pointerMove);
      this.el.removeEventListener("pointerup", this.pointerUp);
    };
  }
  componentDidLoad() {
    if (this.defaultSize > 0 || this.minSize > 0) {
      if (this.split === "horizontal") {
        const width = this.median.getBoundingClientRect().width;
        this.value = Math.round(this.defaultSize);
        // Check min size
        this.value = this.value < this.minSize ? this.minSize : this.value;
        this.el.style.gridTemplateColumns = `${this.value}px ${width}px 1fr`;
      }
      else {
        const height = this.median.getBoundingClientRect().height;
        this.value = Math.round(this.defaultSize);
        // Check min size
        this.value = this.value < this.minSize ? this.minSize : this.value;
        this.el.style.gridTemplateRows = `${this.value}px ${height}px 1fr`;
      }
    }
  }
  render() {
    return [
      h("slot", { name: "slot1" }),
      h("div", { ref: el => this.median = el, id: "median", onPointerDown: this.pointerDown }),
      h("slot", { name: "slot2" })
    ];
  }
  get el() { return this; }
  static get style() { return splitPaneCss; }
}, [1, "stories-split-pane", {
    "split": [1],
    "minSize": [2, "min-size"],
    "defaultSize": [2, "default-size"],
    "isResizing": [1540, "resizing"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["stories-split-pane"];
  components.forEach(tagName => { switch (tagName) {
    case "stories-split-pane":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, SplitPane);
      }
      break;
  } });
}
defineCustomElement$1();

const StoriesSplitPane = SplitPane;
const defineCustomElement = defineCustomElement$1;

export { StoriesSplitPane, defineCustomElement };

//# sourceMappingURL=stories-split-pane.js.map