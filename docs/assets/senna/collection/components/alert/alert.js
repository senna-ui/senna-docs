import { Component, Host, h, Prop, Element, } from "@stencil/core";
export class Alert {
    constructor() {
        this.hasTitleSlot = false;
    }
    componentWillLoad() {
        this.hasTitleSlot = !!this.el.querySelector('[slot="title"]');
    }
    render() {
        const classes = {
            ["alert-" + this.color]: true,
        };
        return (h(Host, { class: classes },
            this.hasTitleSlot && (h("div", { class: "alert-title" },
                h("slot", { name: "title" }))),
            h("slot", null)));
    }
    static get is() { return "sen-alert"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["alert.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["alert.css"]
    }; }
    static get properties() { return {
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
        }
    }; }
    static get elementRef() { return "el"; }
}
