import { Component, Host, h } from "@stencil/core";
/**
 * @docsMenu { "group": "table", "subGroup": "basic-table" }
 * @docsCodePen { "user": "senna-ui", "id": "QWKBpGd" }
 */
export class SenTableHead {
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "sen-table-head"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["table-head.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["table-head.css"]
  }; }
}
