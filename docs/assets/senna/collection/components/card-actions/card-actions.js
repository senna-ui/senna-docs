import { Component, Host, h } from "@stencil/core";
export class CardActions {
  render() {
    return (h(Host, null,
      h("footer", null,
        h("slot", null))));
  }
  static get is() { return "sen-card-actions"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["card-actions.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["card-actions.css"]
  }; }
}