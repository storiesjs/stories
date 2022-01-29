/* eslint-disable @typescript-eslint/no-explicit-any */

import type { ObservableMap } from "@stencil/store";
import type { StoryComponent, StoryContext } from "@stories/stories-common";

/* eslint-disable @typescript-eslint/consistent-type-definitions */
export type Commands = "zoomIn" | "zoomOut" | "zoomReset";
export type Icons = "zoomIn" | "zoomOut" | "zoomReset";
export type TabButtonLayout = 'icon-top' | 'icon-start' | 'icon-end' | 'icon-bottom' | 'icon-hide' | 'label-hide';

export interface ActionEvent {
  command: string;
  data?: unknown;
}

export type ActionItem = {
  command: string;
  title: string | JSX.Element;
  disabled?: boolean;
  active?: boolean;
};

export type ActionItems =  ActionItem[];

export type ToolEvent = {
  command: string;
  data?: unknown;
};

export type ToolItem = {
  command: Commands;
  data?: unknown;
  icon: Icons;
  disabled?: boolean;
  active?: boolean;
};

export type ToolItems =  ToolItem[];

export interface TabButtonClickEventDetail {
  tab: string;
  selected: boolean;
  href?: string;
}

export interface TabBarChangedEventDetail {
  tab?: string;
}

export type TextFieldTypes = 'date' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url' | 'time' | 'week' | 'month' | 'datetime-local';
export type Color = 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'danger' | 'light' | 'medium' | 'dark' | string;
export type CssClassMap = Record<string, boolean>;

export interface InputChangeEventDetail {
  value: string | undefined | null;
}

// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
export interface StyleEventDetail {
  [styleName: string]: boolean;
}

export interface CheckboxChangeEventDetail<T = any> {
  value: T;
  checked: boolean;
}

export interface SearchbarChangeEventDetail {
  value?: string;
}

export type RouterDirection = 'forward' | 'back' | 'root';

/*** ADDONS ***/

export type AddonState = any;

export type Addon<AddonState> = {
  id: string;
  el: HTMLElement | undefined;
  title: (() => string) | string;
  state: ObservableMap<AddonState>;
  // type?: Types;
  // route?: (routeOptions: RouterData) => string;
  // match?: (matchOptions: RouterData) => boolean;
  // render: (renderOptions: RenderOptions) => ReactElement<any>;
  paramKey?: string;
  disabled?: boolean;
  hidden?: boolean;
  reset(story: StoryComponent, context: StoryContext): Promise<void>
};
