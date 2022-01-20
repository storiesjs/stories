import type { EventEmitter } from '@stencil/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, h, Prop, Element, Event } from '@stencil/core';

@Component({
  tag: 'stories-split-pane',
  styleUrl: 'split-pane.scss',
  shadow: true,
})
export class SplitPane {
  @Prop() split: "horizontal" | "vertical";
  @Prop() minSize = 0;
  @Prop() defaultSize = 0;
  @Prop({ attribute: "resizing", mutable: true, reflect: true }) isResizing: boolean;

  @Element() el: HTMLElement;
  median: HTMLDivElement;
  left: number;
  top: number;
  value: number;

  @Event({ bubbles: true, composed: true }) sizechanged: EventEmitter<number>;

  componentDidLoad(): void {
    if (this.defaultSize > 0 || this.minSize > 0) {
      if (this.split === "horizontal") {
        const width = this.median.getBoundingClientRect().width;
        this.value = Math.round(this.defaultSize);
        // Check min size
        this.value = this.value < this.minSize ? this.minSize : this.value;
        this.el.style.gridTemplateColumns = `${this.value}px ${width}px 1fr`;
      } else {
        const height = this.median.getBoundingClientRect().height;
        this.value = Math.round(this.defaultSize);
        // Check min size
        this.value = this.value < this.minSize ? this.minSize : this.value;
        this.el.style.gridTemplateRows = `${this.value}px ${height}px 1fr`;
      }
    }
  }

  pointerDown = (e: PointerEvent): void => {
    e.preventDefault();
    this.isResizing = true;
    const clientRect = this.el.getBoundingClientRect();
    this.left = clientRect.x;
    this.top = clientRect.y;
    this.el.addEventListener("pointermove", this.pointerMove);
    this.el.addEventListener("pointerup", this.pointerUp);
  }

  pointerMove = (e: PointerEvent): void => {
    e.preventDefault();
    if (this.split === "horizontal") {
      const newMedianLeft = e.clientX - this.left;
      const width = this.median.getBoundingClientRect().width;
      this.value = Math.round(newMedianLeft - width / 2);
      // Check min size
      this.value = this.value < this.minSize ? this.minSize : this.value;
      this.el.style.gridTemplateColumns = `${this.value}px ${width}px 1fr`;
    } else {
      const newMedianTop = e.clientY - this.top;
      const height = this.median.getBoundingClientRect().height;
      this.value = Math.round(newMedianTop - height / 2);
      // Check min size
      this.value = this.value < this.minSize ? this.minSize : this.value;
      this.el.style.gridTemplateRows = `${this.value}px ${height}px 1fr`;
    }
	}

  pointerUp = (e: PointerEvent): void => {
    e.preventDefault();
		this.isResizing = false;
		this.sizechanged.emit(this.value);
		this.el.removeEventListener("pointermove", this.pointerMove);
		this.el.removeEventListener("pointerup", this.pointerUp);
	}



  render(): JSX.Element[] {
    return [
      <slot name="slot1"></slot>,
      <div ref={el => this.median = el} id="median" onPointerDown={this.pointerDown}/>,
      <slot name="slot2"></slot>
    ];
  }

}
