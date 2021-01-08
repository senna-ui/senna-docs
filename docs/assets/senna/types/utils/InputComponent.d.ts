import type { EventEmitter } from "../stencil-public-runtime";
export declare abstract class InputComponent<T> {
  protected nativeInput?: HTMLInputElement;
  hasFocus: boolean;
  /**
   * If `true`, the user cannot interact with the checkbox.
   */
  disabled: boolean;
  /**
   * If `true`, the user cannot modify the value.
   */
  readonly: boolean;
  /**
   * The value of the input.
   */
  value?: T;
  /**
   * Update the native input element when the value changes
   */
  protected valueChanged(): void;
  /**
   * Emitted when input is changed
   */
  senChange: EventEmitter<{
    value: T | undefined;
  }>;
  /**
   * Emitted when a keyboard input occurred.
   */
  senInput: EventEmitter<KeyboardEvent>;
  /**
   * Sets focus on the specified `sen-input`. Use this method instead of the global
   * `input.focus()`.
   */
  setFocus(): Promise<void>;
  protected abstract getDefaultValue(): T;
}
