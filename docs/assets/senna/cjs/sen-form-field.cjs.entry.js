'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b158f9f0.js');

const formFieldCss = ":host{font-family:var(--sen-font-family, \"Source Sans Pro\", Helvetica, sans-serif);font-size:13px}:host .form-label{margin-top:5px;display:inline-block;white-space:nowrap}";

const FormField = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Label of the form field
         */
        this.label = "";
    }
    render() {
        return (index.h(index.Host, null, index.h("sen-row", null, index.h("sen-col", { size: "2" }, index.h("label", { class: "form-label" }, this.label)), index.h("sen-col", null, index.h("slot", null)))));
    }
};
FormField.style = formFieldCss;

exports.sen_form_field = FormField;
