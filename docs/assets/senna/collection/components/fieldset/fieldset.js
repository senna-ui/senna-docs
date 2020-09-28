import { Component, Host, h, Prop } from "@stencil/core";
export class Fieldset {
    render() {
        return (h(Host, null,
            this.legend && h("legend", null, this.legend),
            h("sen-grid", null,
                h("slot", null))));
    }
    static get is() { return "sen-fieldset"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["fieldset.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["fieldset.css"]
    }; }
    static get properties() { return {
        "legend": {
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
                "text": "Legend describing the fieldset"
            },
            "attribute": "legend",
            "reflect": false
        }
    }; }
}
