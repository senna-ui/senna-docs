import { ComponentInterface } from "../../stencil-public-runtime";
import { Color } from "../../interface";
/**
 * @docsCodePen { "user": "senna-ui", "id": "YzGYNEW" }
 * @docsMenu { "group": "buttons" }
 */
export declare class Button implements ComponentInterface {
  /**
   * Button type
   */
  buttonType: "button" | "submit" | "reset";
  /**
   * Button variant
   */
  color?: Color;
  /**
   * Disables the button
   */
  disabled: boolean;
  /**
   * Icon to show
   */
  icon?: string;
  render(): any;
}
