import { Component, Host, h } from "@stencil/core";
/**
 * @docsMenu { "group": "table", "subGroup": "basic-table" }
 * @docsCodePen { "user": "senna-ui", "id": "QWKBpGd" }
 */
export class SenTableRow {
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "sen-table-row"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["table-row.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["table-row.css"]
  }; }
}
