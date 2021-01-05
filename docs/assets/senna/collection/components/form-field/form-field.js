import { Component, Host, Prop, h } from "@stencil/core";
/**
 * @docsCodePen { "user": "senna-ui", "id": "qBapaVj" }
 * @docsMenu { "group": "forms", "subGroup": "formField" }
 */
export class FormField {
  constructor() {
    /**
     * Label of the form field
     */
    this.label = "";
  }
  render() {
    return (h(Host, null,
      h("sen-row", null,
        h("sen-col", { size: "2" },
          h("label", { class: "form-label" }, this.label)),
        h("sen-col", null,
          h("slot", null)))));
  }
  static get is() { return "sen-form-field"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["form-field.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["form-field.css"]
  }; }
  static get properties() { return {
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
        "text": "Label of the form field"
      },
      "attribute": "label",
      "reflect": false,
      "defaultValue": "\"\""
    }
  }; }
}
