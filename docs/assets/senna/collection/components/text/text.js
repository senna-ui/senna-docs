import { Component, Host, h, Prop } from "@stencil/core";
/**
 * @docsMenu { "group": "typography" }
 */
export class Text {
  constructor() {
    /**
     * Element Tag
     */
    this.tag = "p";
    /**
     * Font weight
     */
    this.weight = "regular";
    /**
     * [Text align](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)
     */
    this.align = "left";
    /**
     * [Leter spacing](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing)
     */
    this.letterSpacing = "normal";
    /**
     * [Text transform](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform)
     */
    this.textTransform = "none";
  }
  render() {
    const TextTag = this.tag;
    const classes = {
      [`font-weight-${this.weight}`]: true,
      [`text-align-${this.align}`]: true,
    };
    const { letterSpacing, textTransform } = this;
    return (h(Host, null,
      h(TextTag, { class: classes, style: { letterSpacing, textTransform } },
        h("slot", null))));
  }
  static get is() { return "sen-text"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["text.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["text.css"]
  }; }
  static get properties() { return {
    "tag": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "TextTag",
        "resolved": "\"h1\" | \"h2\" | \"h3\" | \"h4\" | \"h5\" | \"h6\" | \"p\"",
        "references": {
          "TextTag": {
            "location": "import",
            "path": "../../interface"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Element Tag"
      },
      "attribute": "tag",
      "reflect": false,
      "defaultValue": "\"p\""
    },
    "weight": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "FontWeight",
        "resolved": "\"bold\" | \"light\" | \"regular\"",
        "references": {
          "FontWeight": {
            "location": "import",
            "path": "../../interface"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Font weight"
      },
      "attribute": "weight",
      "reflect": false,
      "defaultValue": "\"regular\""
    },
    "align": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "TextAlign | \"justify\"",
        "resolved": "\"center\" | \"justify\" | \"left\" | \"right\"",
        "references": {
          "TextAlign": {
            "location": "import",
            "path": "../../interface"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "[Text align](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)"
      },
      "attribute": "align",
      "reflect": false,
      "defaultValue": "\"left\""
    },
    "letterSpacing": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "[Leter spacing](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing)"
      },
      "attribute": "letter-spacing",
      "reflect": false,
      "defaultValue": "\"normal\""
    },
    "textTransform": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "TextTransform",
        "resolved": "\"capitalize\" | \"full-width\" | \"lowercase\" | \"none\" | \"uppercase\"",
        "references": {
          "TextTransform": {
            "location": "import",
            "path": "../../interface"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "[Text transform](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform)"
      },
      "attribute": "text-transform",
      "reflect": false,
      "defaultValue": "\"none\""
    }
  }; }
}
