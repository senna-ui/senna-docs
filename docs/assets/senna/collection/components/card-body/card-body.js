import { Component, Host, h } from "@stencil/core";
export class CardBody {
  render() {
    return (h(Host, null,
      h("p", null,
        h("slot", null))));
  }
  static get is() { return "sen-card-body"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["card-body.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["card-body.css"]
  }; }
}
