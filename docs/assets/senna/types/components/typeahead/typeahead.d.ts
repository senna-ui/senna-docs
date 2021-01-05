import { ComponentInterface, EventEmitter } from "../../stencil-public-runtime";
import { OptionSelectedEvent, TypeaheadOption } from "../../interface";
/**
 * @docsMenu { "group": "forms", "subGroup": "input" }
 */
export declare class Typeahead implements ComponentInterface {
  /**
   * Options to display in typeahead
   */
  options: TypeaheadOption[];
  /**
   * The value of the input.
   */
  value: string;
  /**
   * Emitted when a keyboard input occurred.
   */
  senInput: EventEmitter<KeyboardEvent>;
  /**
   * Emitted when input is changed
   */
  senChange: EventEmitter<OptionSelectedEvent>;
  selectedIndex: number;
  matchedOptions: TypeaheadOption[];
  open: boolean;
  watchHandler(): void;
  private onInput;
  private onSelectOption;
  private handleKeyDown;
  private handleKeyboardSelect;
  private handleFocus;
  render(): any;
}
