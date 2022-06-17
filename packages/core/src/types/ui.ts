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
