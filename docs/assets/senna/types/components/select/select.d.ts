import type { ComponentInterface, EventEmitter } from "../../stencil-public-runtime";
export declare type SelectOption = {
  label: string;
  value: SelectValue;
};
export declare type SelectValue = string | number | undefined | null;
/**
 * @docsMenu { "group": "forms", "subGroup": "input" }
 */
export declare class Select implements ComponentInterface {
  private nativeInput?;
  private selectId;
  hasFocus: boolean;
  /**
   * If `true`, the user cannot interact with the select.
   */
  disabled: boolean;
  /**
   * Label for the select
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
   * Set to true to disallow empty selections
   */
  required: boolean;
  /**
   * Label of empty option
   */
  emptyLabel: string;
  /**
   * The value of the input.
   */
  value?: SelectValue;
  /**
   * Select options to display
   */
  options: SelectOption[];
  /**
   * Update the native input element when the value changes
   */
  protected valueChanged(): void;
  /**
   * Emitted when input is changed
   */
  senChange: EventEmitter<{
    value: SelectValue;
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
