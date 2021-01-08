var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { State, Prop, Event, Watch, Method } from "@stencil/core";
export class InputComponent {
  constructor() {
    this.hasFocus = false;
    /**
     * If `true`, the user cannot interact with the checkbox.
     */
    this.disabled = false;
    /**
     * If `true`, the user cannot modify the value.
     */
    this.readonly = false;
    /**
     * The value of the input.
     */
    // eslint-disable-next-line @stencil/strict-mutable
    this.value = this.getDefaultValue();
  }
  /**
   * Update the native input element when the value changes
   */
  valueChanged() {
    this.senChange.emit({ value: this.value });
  }
  /**
   * Sets focus on the specified `sen-input`. Use this method instead of the global
   * `input.focus()`.
   */
  async setFocus() {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  }
}
__decorate([
  State()
], InputComponent.prototype, "hasFocus", void 0);
__decorate([
  Prop()
], InputComponent.prototype, "disabled", void 0);
__decorate([
  Prop()
], InputComponent.prototype, "readonly", void 0);
__decorate([
  Prop({ mutable: true, reflect: true })
], InputComponent.prototype, "value", void 0);
__decorate([
  Watch("value")
], InputComponent.prototype, "valueChanged", null);
__decorate([
  Event()
], InputComponent.prototype, "senChange", void 0);
__decorate([
  Event()
], InputComponent.prototype, "senInput", void 0);
__decorate([
  Method()
], InputComponent.prototype, "setFocus", null);
