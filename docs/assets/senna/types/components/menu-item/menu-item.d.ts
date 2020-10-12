import { EventEmitter } from "../../stencil-public-runtime";
export declare class MenuItem {
  /**
   * Value to emit when clicked
   */
  value: any;
  /**
   * Active state
   */
  active: boolean;
  /**
   * Emitted when a keyboard input occurred.
   */
  senInput: EventEmitter<any>;
  private onClick;
  render(): any;
}
