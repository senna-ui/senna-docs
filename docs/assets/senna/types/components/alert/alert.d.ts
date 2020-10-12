import { ComponentInterface } from "../../stencil-public-runtime";
import { Color } from "../../interface";
export declare class Alert implements ComponentInterface {
  private hasTitleSlot;
  el: HTMLSenAlertElement;
  /**
   * Button variant
   */
  color?: Color;
  componentWillLoad(): void;
  render(): any;
}
