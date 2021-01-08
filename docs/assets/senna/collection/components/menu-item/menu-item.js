import { Component, Host, h, Prop, Event } from "@stencil/core";
/**
 * @docsMenu { "group": "navigation", "subGroup": "menu" }
 */
export class MenuItem {
  constructor() {
    /**
     * Active state
     */
    this.active = false;
    this.onClick = () => {
      this.senInput.emit(this.value);
    };
  }
  render() {
    return (h(Host, null,
      h("a", { class: this.active ? "active" : "", onClick: this.onClick },
        h("slot", null))));
  }
  static get is() { return "sen-menu-item"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["menu-item.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["menu-item.css"]
  }; }
  static get properties() { return {
    "value": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Value to emit when clicked"
      },
      "attribute": "value",
      "reflect": false
    },
    "active": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Active state"
      },
      "attribute": "active",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get events() { return [{
      "method": "senInput",
      "name": "senInput",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted when a keyboard input occurred."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
}
