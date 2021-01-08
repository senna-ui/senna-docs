import { Component, Host, h, Prop } from "@stencil/core";
/**
 * @docsMenu { "group": "table", "subGroup": "basic-table" }
 * @docsCodePen { "user": "senna-ui", "id": "QWKBpGd" }
 */
export class SenTableCell {
  constructor() {
    /**
     * How many columns to span
     */
    this.colspan = undefined;
    /**
     * How many rows to span
     */
    this.rowspan = undefined;
    /**
     * Alignment of contents
     */
    this.align = undefined;
  }
  render() {
    return (h(Host, null,
      h("td", { style: { textAlign: this.align }, colSpan: this.colspan ? Number(this.colspan) : undefined, rowSpan: this.rowspan ? Number(this.rowspan) : undefined },
        h("slot", null))));
  }
  static get is() { return "sen-table-cell"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["table-cell.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["table-cell.css"]
  }; }
  static get properties() { return {
    "colspan": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "string | number | undefined",
        "resolved": "number | string | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "How many columns to span"
      },
      "attribute": "colspan",
      "reflect": false,
      "defaultValue": "undefined"
    },
    "rowspan": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "string | number | undefined",
        "resolved": "number | string | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "How many rows to span"
      },
      "attribute": "rowspan",
      "reflect": false,
      "defaultValue": "undefined"
    },
    "align": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "TextAlign | undefined",
        "resolved": "\"center\" | \"left\" | \"right\" | undefined",
        "references": {
          "TextAlign": {
            "location": "import",
            "path": "../../interface"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Alignment of contents"
      },
      "attribute": "align",
      "reflect": false,
      "defaultValue": "undefined"
    }
  }; }
}
