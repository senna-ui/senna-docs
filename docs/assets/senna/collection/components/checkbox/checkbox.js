import { Component, Host, h, State, Prop, Event, Watch, Method, } from "@stencil/core";
let checkboxIds = 0;
/**
 * @docsMenu { "group": "forms", "subGroup": "input" }
 */
export class Checkbox {
  constructor() {
    this.checkboxId = `sen-checkbox-${checkboxIds++}`;
    this.hasFocus = false;
    /**
     * If `true`, the user cannot interact with the checkbox.
     */
    this.disabled = false;
    /**
     * Label for the checkbox
     */
    this.label = "";
    /**
     * The name of the control, which is submitted with the form data.
     */
    this.name = this.checkboxId;
    /**
     * If `true`, the user cannot modify the value.
     */
    this.readonly = false;
    /**
     * The value of the input.
     */
    // eslint-disable-next-line @stencil/strict-mutable
    this.value = false;
    this.onInput = (ev) => {
      const input = ev.target;
      if (input) {
        this.value = Boolean(input.checked);
      }
      this.senInput.emit(ev);
    };
    this.toggle = (ev) => {
      ev.preventDefault();
      if (this.disabled || this.readonly) {
        return;
      }
      this.value = !this.value;
      this.senChange.emit({ value: this.value });
    };
  }
  /**
   * Update the native input element when the value changes
   */
  valueChanged() {
    const value = typeof this.value === "undefined" ? false : this.value;
    this.senChange.emit({ value });
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
  render() {
    const labelClass = {
      disabled: this.disabled,
      readonly: this.readonly,
      focused: this.hasFocus,
      container: true,
    };
    return (h(Host, null,
      h("label", { id: `${this.checkboxId}-label`, onClick: this.toggle, class: labelClass },
        h("input", { id: this.checkboxId, name: this.name, ref: (input) => (this.nativeInput = input), onInput: this.onInput, disabled: this.disabled, readOnly: this.readonly, checked: this.value, "aria-labelledby": `${this.checkboxId}-label`, type: "checkbox" }),
        h("span", { class: "checkmark" }),
        this.label ? this.label : h("slot", null))));
  }
  static get is() { return "sen-checkbox"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["checkbox.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["checkbox.css"]
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
        "text": "If `true`, the user cannot interact with the checkbox."
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
        "text": "Label for the checkbox"
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
      "defaultValue": "this.checkboxId"
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
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "The value of the input."
      },
      "attribute": "value",
      "reflect": true,
      "defaultValue": "false"
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
        "original": "{ value: boolean }",
        "resolved": "{ value: boolean; }",
        "references": {}
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
        "text": "Sets focus on the specified `ion-input`. Use this method instead of the global\n`input.focus()`.",
        "tags": []
      }
    }
  }; }
  static get watchers() { return [{
      "propName": "value",
      "methodName": "valueChanged"
    }]; }
}
