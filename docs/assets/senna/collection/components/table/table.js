import { Component, Host, h, Prop } from "@stencil/core";
export class Table {
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
            h("table", { class: "table" },
                h("thead", null, this.headers.map((header) => (h("th", { style: { textAlign: header.textAlign } }, header.value)))),
                h("tbody", null, this.data.map((row) => (h("tr", null, this.headers.map((header) => (h("td", { style: { textAlign: row[header.key].textAlign || header.textAlign } }, row[header.key]))))))))));
    }
    static get is() { return "sen-table"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["table.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["table.css"]
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
