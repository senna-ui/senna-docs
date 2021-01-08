import type { ComponentInterface } from "../../stencil-public-runtime";
import type { Color } from "../../interface";
/**
 * Docs page options
 * @docsCodePen { "user": "senna-ui", "id": "MWjrJEz" }
 * @docsMenu { "group": "alert" }
 */
export declare class Alert implements ComponentInterface {
  private hasTitleSlot;
  el: HTMLSenAlertElement;
  /**
   * Button variant
   */
  color?: Color;
  componentWillLoad(): void;
  /**
   * @slot title - optional alert title slot
   */
  render(): any;
}
