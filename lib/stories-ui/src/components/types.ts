/* eslint-disable @typescript-eslint/consistent-type-definitions */

export type Commands = "zoomIn" | "zoomOut" | "zoomReset";
export type Icons = "zoomIn" | "zoomOut" | "zoomReset";

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

