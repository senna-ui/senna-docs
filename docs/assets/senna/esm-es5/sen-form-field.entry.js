import { r as registerInstance, h, H as Host } from './index-60bacf88.js';
var formFieldCss = ":host{font-family:var(--sen-font-family, \"Source Sans Pro\", Helvetica, sans-serif);font-size:13px}:host .form-label{margin-top:5px;display:inline-block;white-space:nowrap}";
var FormField = /** @class */ (function () {
    function FormField(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Label of the form field
         */
        this.label = "";
    }
    FormField.prototype.render = function () {
        return (h(Host, null, h("sen-row", null, h("sen-col", { size: "2" }, h("label", { class: "form-label" }, this.label)), h("sen-col", null, h("slot", null)))));
    };
    return FormField;
}());
FormField.style = formFieldCss;
export { FormField as sen_form_field };
