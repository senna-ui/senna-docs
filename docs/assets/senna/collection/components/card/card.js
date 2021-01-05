import { Component, Host, h } from "@stencil/core";
/**
 * @docsCodePen { "user": "senna-ui", "id": "wvzpgoe" }
 * @docsMenu { "group": "card" }
 */
export class Card {
  render() {
    return (h(Host, null,
      h("article", null,
        h("slot", null))));
  }
  static get is() { return "sen-card"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["card.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["card.css"]
  }; }
}
