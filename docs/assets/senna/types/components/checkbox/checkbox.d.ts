import type { ComponentInterface, EventEmitter } from "../../stencil-public-runtime";
/**
 * @docsMenu { "group": "forms", "subGroup": "input" }
 */
export declare class Checkbox implements ComponentInterface {
  private nativeInput?;
  private checkboxId;
  hasFocus: boolean;
  /**
   * If `true`, the user cannot interact with the checkbox.
   */
  disabled: boolean;
  /**
   * Label for the checkbox
   */
  label: string;
  /**
   * The name of the control, which is submitted with the form data.
   */
  name: string;
  /**
   * If `true`, the user cannot modify the value.
   */
  readonly: boolean;
  /**
   * The value of the input.
   */
  value?: boolean;
  /**
   * Update the native input element when the value changes
   */
  protected valueChanged(): void;
  /**
   * Emitted when input is changed
   */
  senChange: EventEmitter<{
    value: boolean;
  }>;
  /**
   * Emitted when a keyboard input occurred.
   */
  senInput: EventEmitter<MouseEvent>;
  /**
   * Sets focus on the specified `ion-input`. Use this method instead of the global
   * `input.focus()`.
   */
  setFocus(): Promise<void>;
  private onInput;
  private toggle;
  render(): any;
}
