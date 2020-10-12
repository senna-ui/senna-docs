import { Component, Element, Host, Method, Prop, State, Watch, Event, h, } from "@stencil/core";
let inputIds = 0;
export class Input {
  constructor() {
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
    return (h(Host, null,
      h("input", { class: "native-input", ref: (input) => (this.nativeInput = input), "aria-labelledby": labelId, disabled: this.disabled, accept: this.accept, autoCapitalize: this.autocapitalize, autoComplete: this.autocomplete, autoCorrect: this.autocorrect, autoFocus: this.autofocus, min: this.min, max: this.max, minLength: this.minlength, maxLength: this.maxlength, name: this.name, pattern: this.pattern, placeholder: this.placeholder || "", readOnly: this.readonly, required: this.required, spellcheck: this.spellcheck, step: this.step, size: this.size, tabindex: this.tabindex, type: this.type, value: value, onInput: this.onInput })));
  }
  static get is() { return "sen-input"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["input.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["input.css"]
  }; }
  static get properties() { return {
    "color": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Color",
        "resolved": "\"danger\" | \"primary\" | \"secondary\" | \"success\" | \"warning\" | undefined",
        "references": {
          "Color": {
            "location": "import",
            "path": "../../interface"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "The color to use from your application's color palette.\nDefault options are: `\"primary\"`, `\"secondary\"`, `\"tertiary\"`, `\"success\"`, `\"warning\"`, `\"danger\"`, `\"light\"`, `\"medium\"`, and `\"dark\"`.\nFor more information on colors, see [theming](/docs/theming/basics)."
      },
      "attribute": "color",
      "reflect": false
    },
    "accept": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "If the value of the type attribute is `\"file\"`, then this attribute will indicate the types of files that the server accepts, otherwise it will be ignored. The value must be a comma-separated list of unique content type specifiers."
      },
      "attribute": "accept",
      "reflect": false
    },
    "autocapitalize": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user."
      },
      "attribute": "autocapitalize",
      "reflect": false,
      "defaultValue": "\"off\""
    },
    "autocomplete": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "AutocompleteTypes",
        "resolved": "\"off\" | \"on\" | \"name\" | \"honorific-prefix\" | \"given-name\" | \"additional-name\" | \"family-name\" | \"honorific-suffix\" | \"nickname\" | \"email\" | \"username\" | \"new-password\" | \"current-password\" | \"one-time-code\" | \"organization-title\" | \"organization\" | \"street-address\" | \"address-line1\" | \"address-line2\" | \"address-line3\" | \"address-level4\" | \"address-level3\" | \"address-level2\" | \"address-level1\" | \"country\" | \"country-name\" | \"postal-code\" | \"cc-name\" | \"cc-given-name\" | \"cc-additional-name\" | \"cc-family-name\" | \"cc-number\" | \"cc-exp\" | \"cc-exp-month\" | \"cc-exp-year\" | \"cc-csc\" | \"cc-type\" | \"transaction-currency\" | \"transaction-amount\" | \"language\" | \"bday\" | \"bday-day\" | \"bday-month\" | \"bday-year\" | \"sex\" | \"tel\" | \"tel-country-code\" | \"tel-national\" | \"tel-area-code\" | \"tel-local\" | \"tel-extension\" | \"impp\" | \"url\" | \"photo\"",
        "references": {
          "AutocompleteTypes": {
            "location": "import",
            "path": "../../interface"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Indicates whether the value of the control can be automatically completed by the browser."
      },
      "attribute": "autocomplete",
      "reflect": false,
      "defaultValue": "\"off\""
    },
    "autocorrect": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "\"on\" | \"off\"",
        "resolved": "\"off\" | \"on\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Whether auto correction should be enabled when the user is entering/editing the text value."
      },
      "attribute": "autocorrect",
      "reflect": false,
      "defaultValue": "\"off\""
    },
    "autofocus": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "This Boolean attribute lets you specify that a form control should have input focus when the page loads."
      },
      "attribute": "autofocus",
      "reflect": false,
      "defaultValue": "false"
    },
    "clearInput": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input."
      },
      "attribute": "clear-input",
      "reflect": false,
      "defaultValue": "false"
    },
    "clearOnEdit": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "If `true`, the value will be cleared after focus upon edit. Defaults to `true` when `type` is `\"password\"`, `false` for all other types."
      },
      "attribute": "clear-on-edit",
      "reflect": false
    },
    "debounce": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke."
      },
      "attribute": "debounce",
      "reflect": false,
      "defaultValue": "0"
    },
    "disabled": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "If `true`, the user cannot interact with the input."
      },
      "attribute": "disabled",
      "reflect": false,
      "defaultValue": "false"
    },
    "enterkeyhint": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "| \"enter\"\n    | \"done\"\n    | \"go\"\n    | \"next\"\n    | \"previous\"\n    | \"search\"\n    | \"send\"",
        "resolved": "\"done\" | \"enter\" | \"go\" | \"next\" | \"previous\" | \"search\" | \"send\" | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "A hint to the browser for which enter key to display.\nPossible values: `\"enter\"`, `\"done\"`, `\"go\"`, `\"next\"`,\n`\"previous\"`, `\"search\"`, and `\"send\"`."
      },
      "attribute": "enterkeyhint",
      "reflect": false
    },
    "inputmode": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "| \"none\"\n    | \"text\"\n    | \"tel\"\n    | \"url\"\n    | \"email\"\n    | \"numeric\"\n    | \"decimal\"\n    | \"search\"",
        "resolved": "\"decimal\" | \"email\" | \"none\" | \"numeric\" | \"search\" | \"tel\" | \"text\" | \"url\" | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "A hint to the browser for which keyboard to display.\nPossible values: `\"none\"`, `\"text\"`, `\"tel\"`, `\"url\"`,\n`\"email\"`, `\"numeric\"`, `\"decimal\"`, and `\"search\"`."
      },
      "attribute": "inputmode",
      "reflect": false
    },
    "max": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "The maximum value, which must not be less than its minimum (min attribute) value."
      },
      "attribute": "max",
      "reflect": false
    },
    "maxlength": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter."
      },
      "attribute": "maxlength",
      "reflect": false
    },
    "min": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "The minimum value, which must not be greater than its maximum (max attribute) value."
      },
      "attribute": "min",
      "reflect": false
    },
    "minlength": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter."
      },
      "attribute": "minlength",
      "reflect": false
    },
    "multiple": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "If `true`, the user can enter more than one value. This attribute applies when the type attribute is set to `\"email\"` or `\"file\"`, otherwise it is ignored."
      },
      "attribute": "multiple",
      "reflect": false
    },
    "name": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The name of the control, which is submitted with the form data."
      },
      "attribute": "name",
      "reflect": false,
      "defaultValue": "this.inputId"
    },
    "pattern": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "A regular expression that the value is checked against. The pattern must match the entire value, not just some subset. Use the title attribute to describe the pattern to help the user. This attribute applies when the value of the type attribute is `\"text\"`, `\"search\"`, `\"tel\"`, `\"url\"`, `\"email\"`, `\"date\"`, or `\"password\"`, otherwise it is ignored. When the type attribute is `\"date\"`, `pattern` will only be used in browsers that do not support the `\"date\"` input type natively. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date for more information."
      },
      "attribute": "pattern",
      "reflect": false
    },
    "placeholder": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string | null",
        "resolved": "null | string | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Instructional text that shows before the input has a value."
      },
      "attribute": "placeholder",
      "reflect": false
    },
    "readonly": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "If `true`, the user cannot modify the value."
      },
      "attribute": "readonly",
      "reflect": false,
      "defaultValue": "false"
    },
    "required": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "If `true`, the user must fill in a value before submitting a form."
      },
      "attribute": "required",
      "reflect": false,
      "defaultValue": "false"
    },
    "spellcheck": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "If `true`, the element will have its spelling and grammar checked."
      },
      "attribute": "spellcheck",
      "reflect": false,
      "defaultValue": "false"
    },
    "step": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Works with the min and max attributes to limit the increments at which a value can be set.\nPossible values are: `\"any\"` or a positive floating point number."
      },
      "attribute": "step",
      "reflect": false
    },
    "size": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "The initial size of the control. This value is in pixels unless the value of the type attribute is `\"text\"` or `\"password\"`, in which case it is an integer number of characters. This attribute applies only when the `type` attribute is set to `\"text\"`, `\"search\"`, `\"tel\"`, `\"url\"`, `\"email\"`, or `\"password\"`, otherwise it is ignored."
      },
      "attribute": "size",
      "reflect": false
    },
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "TextFieldTypes",
        "resolved": "\"date\" | \"email\" | \"number\" | \"password\" | \"search\" | \"tel\" | \"text\" | \"time\" | \"url\"",
        "references": {
          "TextFieldTypes": {
            "location": "import",
            "path": "../../interface"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The type of control to display. The default type is text."
      },
      "attribute": "type",
      "reflect": false,
      "defaultValue": "\"text\""
    },
    "value": {
      "type": "any",
      "mutable": true,
      "complexType": {
        "original": "string | number | null",
        "resolved": "null | number | string | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "The value of the input."
      },
      "attribute": "value",
      "reflect": false,
      "defaultValue": "\"\""
    }
  }; }
  static get states() { return {
    "hasFocus": {}
  }; }
  static get events() { return [{
      "method": "senInput",
      "name": "senInput",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted when a keyboard input occurred."
      },
      "complexType": {
        "original": "KeyboardEvent",
        "resolved": "KeyboardEvent",
        "references": {
          "KeyboardEvent": {
            "location": "global"
          }
        }
      }
    }, {
      "method": "senChange",
      "name": "senChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted when input is changed"
      },
      "complexType": {
        "original": "InputChangeEventDetail",
        "resolved": "InputChangeEventDetail",
        "references": {
          "InputChangeEventDetail": {
            "location": "import",
            "path": "../../interface"
          }
        }
      }
    }]; }
  static get methods() { return {
    "setFocus": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "Sets focus on the specified `ion-input`. Use this method instead of the global\n`input.focus()`.",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "value",
      "methodName": "valueChanged"
    }]; }
}
