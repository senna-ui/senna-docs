import { Component, Host, h } from "@stencil/core";
/**
 * @docsMenu { "group": "table", "subGroup": "basic-table" }
 */
export class SenTable {
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "sen-table"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["table.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["table.css"]
  }; }
}
