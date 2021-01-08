import { Component, Host, h, State, Prop, Event, Watch, Method, } from "@stencil/core";
let selectIds = 0;
/**
 * @docsMenu { "group": "forms", "subGroup": "input" }
 */
export class Select {
  constructor() {
    this.selectId = `sen-select-${selectIds++}`;
    this.hasFocus = false;
    /**
     * If `true`, the user cannot interact with the select.
     */
    this.disabled = false;
    /**
     * Label for the select
     */
    this.label = "";
    /**
     * The name of the control, which is submitted with the form data.
     */
    this.name = this.selectId;
    /**
     * If `true`, the user cannot modify the value.
     */
    this.readonly = false;
    /**
     * Set to true to disallow empty selections
     */
    this.required = false;
    /**
     * Label of empty option
     */
    this.emptyLabel = "-";
    /**
     * Select options to display
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
    };
    return (h(Host, null,
      h("div", { class: "select-wrapper" },
        h("select", { onInput: this.onInput, class: elementClass, name: this.name, disabled: this.disabled },
          h("option", { disabled: this.required }, this.emptyLabel),
          this.options.map((option) => {
            var _a, _b, _c;
            return (h("option", { value: (_a = option.value) === null || _a === void 0 ? void 0 : _a.toString(), selected: ((_b = option === null || option === void 0 ? void 0 : option.value) === null || _b === void 0 ? void 0 : _b.toString()) === ((_c = this.value) === null || _c === void 0 ? void 0 : _c.toString()) }, option.label));
          })))));
  }
  static get is() { return "sen-select"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["select.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["select.css"]
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
        "text": "If `true`, the user cannot interact with the select."
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
        "text": "Label for the select"
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
      "defaultValue": "this.selectId"
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
        "text": "Set to true to disallow empty selections"
      },
      "attribute": "required",
      "reflect": false,
      "defaultValue": "false"
    },
    "emptyLabel": {
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
        "text": "Label of empty option"
      },
      "attribute": "empty-label",
      "reflect": false,
      "defaultValue": "\"-\""
    },
    "value": {
      "type": "any",
      "mutable": true,
      "complexType": {
        "original": "SelectValue",
        "resolved": "null | number | string | undefined",
        "references": {
          "SelectValue": {
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
        "original": "SelectOption[]",
        "resolved": "SelectOption[]",
        "references": {
          "SelectOption": {
            "location": "local"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Select options to display"
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
        "original": "{ value: SelectValue }",
        "resolved": "{ value: RadioValue; }",
        "references": {
          "SelectValue": {
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
