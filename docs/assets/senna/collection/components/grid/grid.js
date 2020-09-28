import { Component, Host, Prop, h } from "@stencil/core";
export class Grid {
    constructor() {
        /**
         * If `true`, the grid will have a fixed width based on the screen size.
         */
        this.fixed = false;
    }
    render() {
        return (h(Host, { class: {
                "grid-fixed": this.fixed,
            } },
            h("slot", null)));
    }
    static get is() { return "sen-grid"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["grid.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["grid.css"]
    }; }
    static get properties() { return {
        "fixed": {
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
                "text": "If `true`, the grid will have a fixed width based on the screen size."
            },
            "attribute": "fixed",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
}
