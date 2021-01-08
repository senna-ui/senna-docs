import { Component, Host, h, State, Prop, Event, Watch, Method, } from "@stencil/core";
let radioIds = 0;
/**
 * @docsMenu { "group": "forms", "subGroup": "input" }
 */
export class Radio {
  constructor() {
    this.radioId = `sen-radio-${radioIds++}`;
    this.hasFocus = false;
    /**
     * If `true`, the user cannot interact with the radio.
     */
    this.disabled = false;
    /**
     * Label for the radio
     */
    this.label = "";
    /**
     * The name of the control, which is submitted with the form data.
     */
    this.name = this.radioId;
    /**
     * If `true`, the user cannot modify the value.
     */
    this.readonly = false;
    /**
     * Radio options to display
     */
    this.options = [];
    this.onInput = (ev) => {
      const input = ev.target;
      if (input) {
        this.value = input.value || null;
      }
      this.senInput.emit(ev);
    };
  }
  /**
   * Update the native input element when the value changes
   */
  valueChanged() {
    this.senChange.emit({ value: this.value });
  }
  /**
   * Sets focus on the specified input. Use this method instead of the global
   * `input.focus()`.
   */
  async setFocus() {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  }
  render() {
    const elementClass = {
      disabled: this.disabled,
      readonly: this.readonly,
      focused: this.hasFocus,
      "radio-group": true,
    };
    return (h(Host, null,
      h("div", { class: elementClass },
        h("span", { class: "label-text" }, this.label ? this.label : h("slot", null)),
        this.options.map((option) => {
          var _a, _b, _c;
          return (h("label", { class: {
              container: true,
              checked: this.value === ((_a = option.value) === null || _a === void 0 ? void 0 : _a.toString()),
            } },
            h("input", { type: "radio", class: "native-radio", name: this.name, value: (_b = option.value) === null || _b === void 0 ? void 0 : _b.toString(), disabled: this.disabled, readOnly: this.readonly, onInput: (e) => this.onInput(e), checked: this.value === ((_c = option.value) === null || _c === void 0 ? void 0 : _c.toString()) }),
            h("span", { class: "checkmark" }),
            option.label));
        }))));
  }
  static get is() { return "sen-radio"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["radio.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["radio.css"]
  }; }
  static get properties() { return {
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
        "text": "If `true`, the user cannot interact with the radio."
      },
      "attribute": "disabled",
      "reflect": false,
      "defaultValue": "false"
    },
    "label": {
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
        "text": "Label for the radio"
      },
      "attribute": "label",
      "reflect": false,
      "defaultValue": "\"\""
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
      "defaultValue": "this.radioId"
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
    "value": {
      "type": "any",
      "mutable": true,
      "complexType": {
        "original": "RadioValue",
        "resolved": "null | number | string | undefined",
        "references": {
          "RadioValue": {
            "location": "local"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "The value of the input."
      },
      "attribute": "value",
      "reflect": true
    },
    "options": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "RadioOption[]",
        "resolved": "RadioOption[]",
        "references": {
          "RadioOption": {
            "location": "local"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Radio options to display"
      },
      "defaultValue": "[]"
    }
  }; }
  static get states() { return {
    "hasFocus": {}
  }; }
  static get events() { return [{
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
        "original": "{ value: RadioValue }",
        "resolved": "{ value: RadioValue; }",
        "references": {
          "RadioValue": {
            "location": "local"
          }
        }
      }
    }, {
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
        "original": "MouseEvent",
        "resolved": "MouseEvent",
        "references": {
          "MouseEvent": {
            "location": "global"
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
        "text": "Sets focus on the specified input. Use this method instead of the global\n`input.focus()`.",
        "tags": []
      }
    }
  }; }
  static get watchers() { return [{
      "propName": "value",
      "methodName": "valueChanged"
    }]; }
}
