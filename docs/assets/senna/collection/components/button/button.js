import { Component, Host, h, Prop } from "@stencil/core";
/**
 * @docsCodePen { "user": "senna-ui", "id": "YzGYNEW" }
 * @docsMenu { "group": "buttons" }
 */
export class Button {
  constructor() {
    /**
     * Button type
     */
    this.buttonType = "button";
    /**
     * Disables the button
     */
    this.disabled = false;
  }
  render() {
    const classes = {
      btn: true,
      'btn-icon': !!this.icon,
      [`btn-${this.color || 'secondary'}`]: true,
    };
    return (h(Host, null,
      h("button", { class: classes, type: this.buttonType, disabled: this.disabled },
        h("span", null,
          this.icon && h("sen-icon", { name: this.icon }),
          h("slot", null)))));
  }
  static get is() { return "sen-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["button.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["button.css"]
  }; }
  static get properties() { return {
    "buttonType": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "\"button\" | \"submit\" | \"reset\"",
        "resolved": "\"button\" | \"reset\" | \"submit\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Button type"
      },
      "attribute": "button-type",
      "reflect": false,
      "defaultValue": "\"button\""
    },
    "color": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Color",
        "resolved": "\"danger\" | \"primary\" | \"secondary\" | \"success\" | \"warning\" | undefined",
        "references": {
          "Color": {
            "location": "import",
            "path": "../../interface"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Button variant"
      },
      "attribute": "color",
      "reflect": false
    },
    "disabled": {
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
        "text": "Disables the button"
      },
      "attribute": "disabled",
      "reflect": true,
      "defaultValue": "false"
    },
    "icon": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Icon to show"
      },
      "attribute": "icon",
      "reflect": false
    }
  }; }
}
