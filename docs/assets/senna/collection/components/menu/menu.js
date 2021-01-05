import { Component, Host, h, Prop } from "@stencil/core";
/**
 * @docsMenu { "group": "navigation", "subGroup": "menu" }
 */
export class Menu {
  constructor() {
    /**
     * Menu items
     */
    this.items = [];
  }
  render() {
    return (h(Host, null,
      h("div", { class: "menu" }, this.items.map(item => h("sen-menu-item", { value: item }, item.label)))));
  }
  static get is() { return "sen-menu"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["menu.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["menu.css"]
  }; }
  static get properties() { return {
    "items": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "MenuItem[]",
        "resolved": "MenuItem[]",
        "references": {
          "MenuItem": {
            "location": "import",
            "path": "../../interface"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Menu items"
      },
      "defaultValue": "[]"
    }
  }; }
}
