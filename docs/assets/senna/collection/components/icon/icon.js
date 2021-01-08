import { Component, Host, h, Prop, State, Watch } from "@stencil/core";
import { getSvgContent, senIconContent } from "./request";
import { getUrl } from "./utils";
/**
 * @docsCodePen { "user": "senna-ui", "id": "KKgZgNj" }
 * @docsMenu { "group": "icons" }
 */
export class Icon {
  constructor() {
    /**
     * Icon to display.
     */
    this.name = "";
    /**
     * When set to `false`, SVG content that is HTTP fetched will not be checked
     * if the response SVG content has any `<script>` elements, or any attributes
     * that start with `on`, such as `onclick`.
     * @default true
     */
    this.sanitize = true;
  }
  componentWillRender() {
    this.loadIcon();
  }
  loadIcon() {
    const url = getUrl(this.name);
    if (!url)
      return;
    if (senIconContent.has(url)) {
      // sync if it's already loaded
      this.svgContent = senIconContent.get(url);
    }
    else {
      // async if it hasn't been loaded
      getSvgContent(url, this.sanitize).then(() => (this.svgContent = senIconContent.get(url)));
    }
  }
  render() {
    return (h(Host, { role: "img", class: Object.assign({ "sen-icon": true }, createColorClasses(this.color)) },
      h("div", { class: "icon-inner", innerHTML: this.svgContent })));
  }
  static get is() { return "sen-icon"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["icon.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["icon.css"]
  }; }
  static get assetsDirs() { return ["svg"]; }
  static get properties() { return {
    "name": {
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
        "text": "Icon to display."
      },
      "attribute": "name",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "color": {
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
        "text": "The color to use for the background of the icon."
      },
      "attribute": "color",
      "reflect": false
    },
    "sanitize": {
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
        "tags": [{
            "text": "true",
            "name": "default"
          }],
        "text": "When set to `false`, SVG content that is HTTP fetched will not be checked\nif the response SVG content has any `<script>` elements, or any attributes\nthat start with `on`, such as `onclick`."
      },
      "attribute": "sanitize",
      "reflect": false,
      "defaultValue": "true"
    }
  }; }
  static get states() { return {
    "svgContent": {}
  }; }
  static get watchers() { return [{
      "propName": "name",
      "methodName": "loadIcon"
    }]; }
}
const createColorClasses = (color) => {
  return color
    ? {
      "sen-color": true,
      [`sen-color-${color}`]: true,
    }
    : null;
};
