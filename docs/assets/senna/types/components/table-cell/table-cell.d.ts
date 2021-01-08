import type { ComponentInterface } from "../../stencil-public-runtime";
import type { TextAlign } from "../../interface";
/**
 * @docsMenu { "group": "table", "subGroup": "basic-table" }
 * @docsCodePen { "user": "senna-ui", "id": "QWKBpGd" }
 */
export declare class SenTableCell implements ComponentInterface {
  /**
   * How many columns to span
   */
  colspan?: string | number | undefined;
  /**
   * How many rows to span
   */
  rowspan?: string | number | undefined;
  /**
   * Alignment of contents
   */
  align?: TextAlign | undefined;
  render(): any;
}
