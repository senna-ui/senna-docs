import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-b3859636.js';

const inputCss = ".sc-sen-input-h{display:contents}.sc-sen-input-h input.sc-sen-input{box-sizing:border-box;padding:4px 6.4px;font-size:13px;font-family:var(--sen-font-family, \"Source Sans Pro\", Helvetica, sans-serif);border:0 solid #E9E6E6;background:#E9E6E6;line-height:1em}.sc-sen-input-h input[type=text].sc-sen-input{display:block;width:100%}";

let inputIds = 0;
const Input = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.senInput = createEvent(this, "senInput", 7);
    this.senChange = createEvent(this, "senChange", 7);
    this.inputId = `sen-input-${inputIds++}`;
    this.hasFocus = false;
    /**
     * Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user.
     */
    this.autocapitalize = "off";
    /**
     * Indicates whether the value of the control can be automatically completed by the browser.
     */
    this.autocomplete = "off";
    /**
     * Whether auto correction should be enabled when the user is entering/editing the text value.
     */
    this.autocorrect = "off";
    /**
     * This Boolean attribute lets you specify that a form control should have input focus when the page loads.
     */
    this.autofocus = false;
    /**
     * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
     */
    this.clearInput = false;
    /**
     * Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke.
     */
    this.debounce = 0;
    /**
     * If `true`, the user cannot interact with the input.
     */
    this.disabled = false;
    /**
     * The name of the control, which is submitted with the form data.
     */
    this.name = this.inputId;
    /**
     * If `true`, the user cannot modify the value.
     */
    this.readonly = false;
    /**
     * If `true`, the user must fill in a value before submitting a form.
     */
    this.required = false;
    /**
     * If `true`, the element will have its spelling and grammar checked.
     */
    this.spellcheck = false;
    /**
     * The type of control to display. The default type is text.
     */
    this.type = "text";
    /**
     * The value of the input.
     */
    this.value = "";
    this.onInput = (ev) => {
      const input = ev.target;
      if (input) {
        this.value = input.value || "";
      }
      this.senInput.emit(ev);
    };
  }
  /**
   * Update the native input element when the value changes
   */
  valueChanged() {
    this.senChange.emit({
      value: this.value == null ? this.value : this.value.toString(),
    });
  }
  /**
   * Sets focus on the specified `ion-input`. Use this method instead of the global
   * `input.focus()`.
   */
  async setFocus() {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  }
  getValue() {
    return typeof this.value === "number"
      ? this.value.toString()
      : (this.value || "").toString();
  }
  render() {
    const value = this.getValue();
    const labelId = this.inputId + "-lbl";
    return (h(Host, null, h("input", { class: "native-input", ref: (input) => (this.nativeInput = input), "aria-labelledby": labelId, disabled: this.disabled, accept: this.accept, autoCapitalize: this.autocapitalize, autoComplete: this.autocomplete, autoCorrect: this.autocorrect, autoFocus: this.autofocus, min: this.min, max: this.max, minLength: this.minlength, maxLength: this.maxlength, name: this.name, pattern: this.pattern, placeholder: this.placeholder || "", readOnly: this.readonly, required: this.required, spellcheck: this.spellcheck, step: this.step, size: this.size, tabindex: this.tabindex, type: this.type, value: value, onInput: this.onInput })));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "value": ["valueChanged"]
  }; }
};
Input.style = inputCss;

export { Input as sen_input };
