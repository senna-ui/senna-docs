import { Component, Host, h } from "@stencil/core";
const genderOptions = [
  { label: "Female", value: "f" },
  { label: "Male", value: "m" },
  { label: "Other", value: "n/a" },
];
const countryOptions = [
  { value: "at", label: "Austria" },
  { value: "fr", label: "France" },
  { value: "de", label: "Germany" },
  { value: "it", label: "Italy" },
  { value: "li", label: "Lichtenstein" },
  { value: "ch", label: "Switzerland" },
];
export class DemoForm {
  render() {
    return (h(Host, null,
      h("form", null,
        h("sen-fieldset", { legend: "Contact Information" },
          h("sen-form-field", { label: "First name" },
            h("sen-input", { type: "text" })),
          h("sen-form-field", { label: "Last name" },
            h("sen-input", { type: "text" })),
          h("sen-form-field", { label: "Email" },
            h("sen-input", { type: "text" })),
          h("sen-form-field", { label: "Gender" },
            h("sen-radio", { options: genderOptions })),
          h("sen-form-field", { label: "Role" },
            h("sen-input", { type: "text", disabled: true, value: "admin" })),
          h("sen-form-field", { label: "Country" },
            h("sen-select", { options: countryOptions })),
          h("sen-form-field", null,
            h("sen-checkbox", { label: "Subscribe to newsletter" })),
          h("sen-form-field", null,
            h("sen-button", { color: "primary", type: "submit" }, "Submit"))))));
  }
  static get is() { return "demo-form"; }
  static get encapsulation() { return "shadow"; }
}
