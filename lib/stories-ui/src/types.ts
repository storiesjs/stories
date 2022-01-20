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


export type Color = 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'danger' | 'light' | 'medium' | 'dark' | string;
export type CssClassMap = Record<string, boolean>;
