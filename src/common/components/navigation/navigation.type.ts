export type NavigationItem = {
  id: number;
  title: string;
  path: string;
  type: LinkType;
  items: NavigationItem[];
};

export enum LinkType {
  INTERNAL = "EXTERNAL",
  EXTERNAL = "EXTERNAL",
}

export type Link = {
  label: string;
  targetBlank: boolean;
  url: string;
};
