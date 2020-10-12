import { Component, Host, h } from "@stencil/core";
export class ButtonGroup {
  render() {
    return (h(Host, { class: "btn-group" },
      h("slot", null)));
  }
  static get is() { return "sen-button-group"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["button-group.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["button-group.css"]
  }; }
}
