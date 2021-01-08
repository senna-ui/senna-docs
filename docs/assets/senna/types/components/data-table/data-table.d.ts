import type { ComponentInterface } from "../../stencil-public-runtime";
import type { TableHeaders } from "../../interface";
/**
 * @docsMenu { "group": "table", "subGroup": "data-table" }
 */
export declare class DataTable implements ComponentInterface {
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
