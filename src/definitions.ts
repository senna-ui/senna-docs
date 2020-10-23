import type { JsonDocsComponent } from '@stencil/core/internal';

export interface DocsMenu {
  group: string;
  subGroup?: string;
}

export interface DocsCodePen {
  id: string;
  user: string;
  /**
   * When used for link instead of demo
   */
  text?: string;
}

export interface DocsDemoUrls {
  url: string;
  source?: string;
  /**
   * When used for link instead of demo
   */
  text?: string;
}

export interface Page extends Partial<JsonDocsComponent> {
  title?: string;
  body?: string;
  path?: string;
  menu?: DocsMenu;
  demo?: DocsDemoUrls;
  /**
   * Additional demo links (not to be rendered as iframe)
   */
  codePenLinks?: DocsCodePen[];
  template?: string;
  [key: string]: any;
}

export interface Link {
  text: string;
  href: string;
}

export interface ReferenceKeys {
  Head: (item: any) => any;
  [key: string]: (item: any) => any;
}

export type MenuItem = [string, string];

export interface MenuItems {
  [key: string]: string | MenuItems | MenuItem[];
}

export enum Locale {
  EN = 'en',
}
