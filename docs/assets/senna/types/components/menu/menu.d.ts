import type { ComponentInterface } from "../../stencil-public-runtime";
import type { MenuItem } from "../../interface";
/**
 * @docsMenu { "group": "navigation", "subGroup": "menu" }
 */
export declare class Menu implements ComponentInterface {
  /**
   * Menu items
   */
  items: MenuItem[];
  render(): any;
}
