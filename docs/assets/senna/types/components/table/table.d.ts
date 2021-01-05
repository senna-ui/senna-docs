import { ComponentInterface } from "../../stencil-public-runtime";
import { TableHeaders } from "../../interface";
/**
 * @docsMenu { "group": "table" }
 */
export declare class Table implements ComponentInterface {
  /**
   * Table headers
   */
  headers: TableHeaders;
  /**
   * Table data, array of table rows
   */
  data: any[];
  render(): any;
}
