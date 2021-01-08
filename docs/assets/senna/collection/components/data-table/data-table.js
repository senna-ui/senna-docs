import { Component, Host, h, Prop } from "@stencil/core";
/**
 * @docsMenu { "group": "table", "subGroup": "data-table" }
 */
export class DataTable {
  constructor() {
    /**
     * Table headers
     */
    this.headers = [];
    /**
     * Table data, array of table rows
     */
    this.data = [];
  }
  render() {
    return (h(Host, null,
      h("sen-table", null,
        h("sen-table-head", null,
          h("sen-table-row", null, this.headers.map((header) => (h("sen-table-cell", { style: { textAlign: header.textAlign } }, header.value))))),
        h("sen-table-body", null, this.data.map((row) => (h("sen-table-row", null, this.headers.map((header) => (h("sen-table-cell", { align: row[header.key].textAlign || header.textAlign }, row[header.key]))))))))));
  }
  static get is() { return "sen-data-table"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["data-table.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["data-table.css"]
  }; }
  static get properties() { return {
    "headers": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "TableHeaders",
        "resolved": "TableHeader[]",
        "references": {
          "TableHeaders": {
            "location": "import",
            "path": "../../interface"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Table headers"
      },
      "defaultValue": "[]"
    },
    "data": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "any[]",
        "resolved": "any[]",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Table data, array of table rows"
      },
      "defaultValue": "[]"
    }
  }; }
}
