import { r as registerInstance, h, H as Host } from './index-b3859636.js';

const formFieldCss = ":host{font-family:var(--sen-font-family, \"Source Sans Pro\", Helvetica, sans-serif);font-size:13px}:host .form-label{margin-top:5px;display:inline-block;white-space:nowrap}";

const FormField = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * Label of the form field
     */
    this.label = "";
  }
  render() {
    return (h(Host, null, h("sen-row", null, h("sen-col", { size: "2" }, h("label", { class: "form-label" }, this.label)), h("sen-col", null, h("slot", null)))));
  }
};
FormField.style = formFieldCss;

export { FormField as sen_form_field };
