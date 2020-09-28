import { Component, Host, Element, h } from "@stencil/core";
export class App {
    componentWillLoad() {
        console.log("el", this.el.shadowRoot);
    }
    render() {
        return (h(Host, null,
            h("slot", null)));
    }
    static get is() { return "sen-app"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["app.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["app.css"]
    }; }
    static get elementRef() { return "el"; }
}
