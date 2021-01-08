import type { ComponentInterface, EventEmitter } from "../../stencil-public-runtime";
export declare type RadioOption = {
  label: string;
  value: RadioValue;
};
export declare type RadioValue = string | number | undefined | null;
/**
 * @docsMenu { "group": "forms", "subGroup": "input" }
 */
export declare class Radio implements ComponentInterface {
  private nativeInput?;
  private radioId;
  hasFocus: boolean;
  /**
   * If `true`, the user cannot interact with the radio.
   */
  disabled: boolean;
  /**
   * Label for the radio
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
  value?: RadioValue;
  /**
   * Radio options to display
   */
  options: RadioOption[];
  /**
   * Update the native input element when the value changes
   */
  protected valueChanged(): void;
  /**
   * Emitted when input is changed
   */
  senChange: EventEmitter<{
    value: RadioValue;
  }>;
  /**
   * Emitted when a keyboard input occurred.
   */
  senInput: EventEmitter<MouseEvent>;
  /**
   * Sets focus on the specified input. Use this method instead of the global
   * `input.focus()`.
   */
  setFocus(): Promise<void>;
  private onInput;
  render(): any;
}
