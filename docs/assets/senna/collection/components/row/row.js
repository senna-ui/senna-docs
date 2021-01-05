import { Component, Host, h } from "@stencil/core";
/**
 *
 * @docsCodePen { "user": "senna-ui", "id": "eYdydGJ" }
 * @docsMenu { "group": "layout", "subGroup": "grid" }
 */
export class Row {
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "sen-row"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["row.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["row.css"]
  }; }
}
