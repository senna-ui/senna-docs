import { Component, Host, h } from "@stencil/core";
export class CardTitle {
  render() {
    return (h(Host, null,
      h("header", null,
        h("h1", null,
          h("slot", null)))));
  }
  static get is() { return "sen-card-title"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["card-title.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["card-title.css"]
  }; }
}
