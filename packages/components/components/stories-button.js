/*!
 * (C) StoriesJS https://storiesjs.org - GPL-2.0 License
 */
import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { h as hasShadowDom, i as inheritAttributes } from './helpers.js';
import { c as createColorClasses, h as hostContext } from './utils.js';

const buttonCss = ":host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--stories-font-family, inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;-webkit-font-kerning:none;font-kerning:none}:host(.button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.button-solid){--background:var(--stories-color-primary, #3880ff);--color:var(--stories-color-primary-contrast, #fff)}:host(.button-outline){--border-color:var(--stories-color-primary, #3880ff);--background:transparent;--color:var(--stories-color-primary, #3880ff)}:host(.button-clear){--border-width:0;--background:transparent;--color:var(--stories-color-primary, #3880ff)}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;display:block;width:100%;clear:both;contain:content}:host(.button-block) .button-native::after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;display:block;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::-moz-focus-inner{border:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}::slotted(stories-icon){font-size:1.4em;pointer-events:none}::slotted(stories-icon[slot=start]){margin-left:-0.3em;margin-right:0.3em;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(stories-icon[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:-0.3em;margin-inline-start:-0.3em;-webkit-margin-end:0.3em;margin-inline-end:0.3em}}::slotted(stories-icon[slot=end]){margin-left:0.3em;margin-right:-0.2em;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(stories-icon[slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:0.3em;margin-inline-start:0.3em;-webkit-margin-end:-0.2em;margin-inline-end:-0.2em}}::slotted(stories-icon[slot=icon-only]){font-size:1.8em}stories-ripple-effect{color:var(--ripple-color)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:\"\";opacity:0}:host(.stories-activated){color:var(--color-activated)}:host(.stories-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.stories-focused){color:var(--color-focused)}:host(.stories-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){:host(:hover){color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.button-solid.stories-color) .button-native{background:var(--stories-color-base);color:var(--stories-color-contrast)}:host(.button-outline.stories-color) .button-native{border-color:var(--stories-color-base);background:transparent;color:var(--stories-color-base)}:host(.button-clear.stories-color) .button-native{background:transparent;color:var(--stories-color-base)}:host(.in-toolbar:not(.stories-color):not(.in-toolbar-color)) .button-native{color:var(--stories-toolbar-color, var(--color))}:host(.button-outline.in-toolbar:not(.stories-color):not(.in-toolbar-color)) .button-native{border-color:var(--stories-toolbar-color, var(--color, var(--border-color)))}:host(.button-solid.in-toolbar:not(.stories-color):not(.in-toolbar-color)) .button-native{background:var(--stories-toolbar-color, var(--background));color:var(--stories-toolbar-background, var(--color))}";

const Button = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.storiesFocus = createEvent(this, "storiesFocus", 7);
    this.storiesBlur = createEvent(this, "storiesBlur", 7);
    this.storiesClick = createEvent(this, "storiesClick", 7);
    this.inItem = false;
    this.inListHeader = false;
    this.inToolbar = false;
    this.inheritedAttributes = {};
    /**
     * The type of button.
     */
    this.buttonType = 'button';
    /**
     * If `true`, the user cannot interact with the button.
     */
    this.disabled = false;
    /**
     * When using a router, it specifies the transition direction when navigating to
     * another page using `href`.
     */
    this.routerDirection = 'forward';
    /**
     * The type of the button.
     */
    this.type = 'button';
    /**
     * If `true`, activates a button with a heavier font weight.
     */
    this.strong = false;
    this.handleClick = (ev) => {
      if (this.type === 'button') {
        this.storiesClick.emit();
      }
      else if (hasShadowDom(this.el)) {
        // this button wants to specifically submit a form
        // climb up the dom to see if we're in a <form>
        // and if so, then use JS to submit/reset it
        const form = this.el.closest('form');
        if (form) {
          ev.preventDefault();
          const fakeButton = document.createElement('button');
          fakeButton.type = this.type;
          fakeButton.style.display = 'none';
          form.appendChild(fakeButton);
          fakeButton.click();
          fakeButton.remove();
        }
      }
    };
    this.onFocus = () => {
      this.storiesFocus.emit();
    };
    this.onBlur = () => {
      this.storiesBlur.emit();
    };
  }
  componentWillLoad() {
    this.inToolbar = !!this.el.closest('stories-buttons');
    this.inListHeader = !!this.el.closest('stories-list-header');
    this.inItem = !!this.el.closest('stories-item') || !!this.el.closest('stories-item-divider');
    this.inheritedAttributes = inheritAttributes(this.el, ['aria-label']);
  }
  get hasIconOnly() {
    return !!this.el.querySelector('[slot="icon-only"]');
  }
  render() {
    const { buttonType, type, disabled, target, size, href, color, expand, hasIconOnly, shape, strong, inheritedAttributes } = this;
    const finalSize = size === undefined && this.inItem ? 'small' : size;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const TagType = href === undefined ? 'button' : 'a';
    const attrs = (TagType === 'button')
      ? { type }
      : {
        href,
        target
      };
    let fill = this.fill;
    if (fill === undefined) {
      fill = this.inToolbar || this.inListHeader ? 'clear' : 'solid';
    }
    return (h(Host, { "aria-disabled": disabled ? 'true' : null, class: createColorClasses(color, {
        [buttonType]: true,
        [`${buttonType}-${expand}`]: expand !== undefined,
        [`${buttonType}-${finalSize}`]: finalSize !== undefined,
        [`${buttonType}-${shape}`]: shape !== undefined,
        [`${buttonType}-${fill}`]: true,
        [`${buttonType}-strong`]: strong,
        'in-toolbar': hostContext('stories-toolbar', this.el),
        'in-toolbar-color': hostContext('stories-toolbar[color]', this.el),
        'button-has-icon-only': hasIconOnly,
        'button-disabled': disabled,
        'stories-activatable': true,
        'stories-focusable': true,
      }), onClick: this.handleClick }, h(TagType, Object.assign({}, attrs, { class: "button-native", disabled: disabled, onBlur: this.onBlur, onFocus: this.onFocus, part: "native" }, inheritedAttributes), h("span", { class: "button-inner" }, h("slot", { name: "icon-only" }), h("slot", { name: "start" }), h("slot", null), h("slot", { name: "end" })))));
  }
  get el() { return this; }
  static get style() { return buttonCss; }
}, [1, "stories-button", {
    "color": [513],
    "buttonType": [1025, "button-type"],
    "disabled": [516],
    "expand": [513],
    "fill": [1537],
    "routerDirection": [1, "router-direction"],
    "href": [1],
    "shape": [513],
    "type": [1],
    "size": [513],
    "strong": [4],
    "target": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["stories-button"];
  components.forEach(tagName => { switch (tagName) {
    case "stories-button":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Button);
      }
      break;
  } });
}
defineCustomElement$1();

const StoriesButton = Button;
const defineCustomElement = defineCustomElement$1;

export { StoriesButton, defineCustomElement };

//# sourceMappingURL=stories-button.js.map