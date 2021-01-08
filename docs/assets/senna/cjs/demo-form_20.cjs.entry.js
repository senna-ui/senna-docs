'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a61cd5c3.js');

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
const DemoForm = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("form", null, index.h("sen-fieldset", { legend: "Contact Information" }, index.h("sen-form-field", { label: "First name" }, index.h("sen-input", { type: "text" })), index.h("sen-form-field", { label: "Last name" }, index.h("sen-input", { type: "text" })), index.h("sen-form-field", { label: "Email" }, index.h("sen-input", { type: "text" })), index.h("sen-form-field", { label: "Gender" }, index.h("sen-radio", { options: genderOptions })), index.h("sen-form-field", { label: "Role" }, index.h("sen-input", { type: "text", disabled: true, value: "admin" })), index.h("sen-form-field", { label: "Country" }, index.h("sen-select", { options: countryOptions })), index.h("sen-form-field", null, index.h("sen-checkbox", { label: "Subscribe to newsletter" })), index.h("sen-form-field", null, index.h("sen-button", { color: "primary", type: "submit" }, "Submit"))))));
  }
};

const users = [
  {
    id: 1,
    first_name: "Montague",
    last_name: "Hannaby",
    email: "mhannaby0@google.co.jp",
    gender: "Male",
    ip_address: "189.2.141.176",
  },
  {
    id: 2,
    first_name: "Angel",
    last_name: "Wettern",
    email: "awettern1@cam.ac.uk",
    gender: "Male",
    ip_address: "96.25.210.37",
  },
  {
    id: 3,
    first_name: "Malina",
    last_name: "Labrom",
    email: "mlabrom2@stumbleupon.com",
    gender: "Female",
    ip_address: "58.209.32.243",
  },
  {
    id: 4,
    first_name: "Sherwin",
    last_name: "Luckett",
    email: "sluckett3@unesco.org",
    gender: "Male",
    ip_address: "235.64.199.113",
  },
  {
    id: 5,
    first_name: "Dickie",
    last_name: "Stenbridge",
    email: "dstenbridge4@nymag.com",
    gender: "Male",
    ip_address: "252.195.47.56",
  },
  {
    id: 6,
    first_name: "Beltran",
    last_name: "Point",
    email: "bpoint5@shinystat.com",
    gender: "Male",
    ip_address: "160.205.78.96",
  },
  {
    id: 7,
    first_name: "Tab",
    last_name: "Barlow",
    email: "tbarlow6@domainmarket.com",
    gender: "Male",
    ip_address: "21.111.39.113",
  },
  {
    id: 8,
    first_name: "Germaine",
    last_name: "Frisel",
    email: "gfrisel7@buzzfeed.com",
    gender: "Male",
    ip_address: "225.106.6.89",
  },
  {
    id: 9,
    first_name: "Kerr",
    last_name: "Leadston",
    email: "kleadston8@netlog.com",
    gender: "Male",
    ip_address: "164.116.218.98",
  },
  {
    id: 10,
    first_name: "Giffy",
    last_name: "Knibb",
    email: "gknibb9@ustream.tv",
    gender: "Male",
    ip_address: "140.3.23.45",
  },
  {
    id: 11,
    first_name: "Pieter",
    last_name: "Tomkowicz",
    email: "ptomkowicza@google.com",
    gender: "Male",
    ip_address: "248.192.120.224",
  },
  {
    id: 12,
    first_name: "Seana",
    last_name: "Marjanovic",
    email: "smarjanovicb@mozilla.com",
    gender: "Female",
    ip_address: "219.159.121.16",
  },
  {
    id: 13,
    first_name: "Sasha",
    last_name: "Duddridge",
    email: "sduddridgec@usa.gov",
    gender: "Male",
    ip_address: "165.254.112.148",
  },
  {
    id: 14,
    first_name: "Land",
    last_name: "Cookney",
    email: "lcookneyd@blogspot.com",
    gender: "Male",
    ip_address: "208.226.202.130",
  },
  {
    id: 15,
    first_name: "Kathleen",
    last_name: "Mayman",
    email: "kmaymane@ebay.co.uk",
    gender: "Female",
    ip_address: "76.222.73.110",
  },
  {
    id: 16,
    first_name: "Mikael",
    last_name: "Spurritt",
    email: "mspurrittf@webnode.com",
    gender: "Male",
    ip_address: "158.145.113.24",
  },
  {
    id: 17,
    first_name: "Calhoun",
    last_name: "Comiam",
    email: "ccomiamg@walmart.com",
    gender: "Male",
    ip_address: "250.78.188.90",
  },
  {
    id: 18,
    first_name: "Olva",
    last_name: "Gillham",
    email: "ogillhamh@imgur.com",
    gender: "Female",
    ip_address: "25.151.7.166",
  },
  {
    id: 19,
    first_name: "Sileas",
    last_name: "Darrell",
    email: "sdarrelli@ox.ac.uk",
    gender: "Female",
    ip_address: "82.189.9.60",
  },
  {
    id: 20,
    first_name: "Brody",
    last_name: "Patience",
    email: "bpatiencej@geocities.com",
    gender: "Male",
    ip_address: "83.189.17.59",
  },
  {
    id: 21,
    first_name: "Ibrahim",
    last_name: "Pude",
    email: "ipudek@reddit.com",
    gender: "Male",
    ip_address: "120.206.34.249",
  },
  {
    id: 22,
    first_name: "Josie",
    last_name: "Labone",
    email: "jlabonel@list-manage.com",
    gender: "Female",
    ip_address: "199.114.76.36",
  },
  {
    id: 23,
    first_name: "Skipton",
    last_name: "Graveston",
    email: "sgravestonm@free.fr",
    gender: "Male",
    ip_address: "175.46.12.222",
  },
  {
    id: 24,
    first_name: "Jakob",
    last_name: "Martusewicz",
    email: "jmartusewiczn@amazon.com",
    gender: "Male",
    ip_address: "91.204.184.67",
  },
  {
    id: 25,
    first_name: "Pepillo",
    last_name: "Pimblett",
    email: "ppimbletto@themeforest.net",
    gender: "Male",
    ip_address: "216.157.158.70",
  },
  {
    id: 26,
    first_name: "Juline",
    last_name: "Benninck",
    email: "jbenninckp@epa.gov",
    gender: "Female",
    ip_address: "60.109.240.181",
  },
  {
    id: 27,
    first_name: "Cordie",
    last_name: "Rubke",
    email: "crubkeq@com.com",
    gender: "Male",
    ip_address: "28.211.42.228",
  },
  {
    id: 28,
    first_name: "Gibbie",
    last_name: "Ropking",
    email: "gropkingr@1688.com",
    gender: "Male",
    ip_address: "1.250.170.72",
  },
  {
    id: 29,
    first_name: "Ernst",
    last_name: "Feek",
    email: "efeeks@hatena.ne.jp",
    gender: "Male",
    ip_address: "80.102.123.136",
  },
  {
    id: 30,
    first_name: "Lilith",
    last_name: "Denk",
    email: "ldenkt@liveinternet.ru",
    gender: "Female",
    ip_address: "86.8.114.227",
  },
];

const tableHeaders = [
  { value: "Id", key: "id" },
  { value: "First Name", key: "first_name" },
  { value: "Last Name", key: "last_name" },
  { value: "Email", key: "email" },
  { value: "Gender", key: "gender" },
  { value: "IP", key: "ip_address", textAlign: "right" },
];
const DemoTable = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("sen-data-table", { headers: tableHeaders, data: users })));
  }
};

const appCss = ":host{font-family:var(--sen-font-family, \"IBM Plex Sans\", \"Source Sans Pro\", Helvetica, sans-serif);font-size:13px;color:#211010}";

const App = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
  get el() { return index.getElement(this); }
};
App.style = appCss;

const buttonCss = ":host{display:inline-block;--border-left-radius:3px;--border-right-radius:3px}:host button{color:#fff;background:var(--btn-primary-bg, #3B5F97);border-radius:3px;border-width:0;font-size:13px;font-family:var(--sen-font-family, \"IBM Plex Sans\", \"Source Sans Pro\", Helvetica, sans-serif);border-top-left-radius:var(--border-left-radius);border-bottom-left-radius:var(--border-left-radius);border-top-right-radius:var(--border-right-radius);border-bottom-right-radius:var(--border-right-radius);cursor:pointer;min-height:24px;position:relative}:host button[disabled]{opacity:0.4}:host button span{display:flex;align-items:center}:host .btn-primary{background:#3B5F97}:host .btn-secondary{background:#6C6A6A}:host .btn-success{background:#28a745}:host .btn-warning{background:#ffc107}:host .btn-danger{background:#ea3c20}:host .btn-info{background:#17a2b8}:host .btn-icon{padding-left:26px}:host sen-icon{position:absolute;left:6px}";

const Button = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * Button type
     */
    this.type = "button";
    /**
     * Disables the button
     */
    this.disabled = false;
  }
  render() {
    const classes = {
      btn: true,
      "btn-icon": !!this.icon,
      [`btn-${this.color || "secondary"}`]: true,
    };
    return (index.h(index.Host, null, index.h("button", { class: classes, type: this.type, disabled: this.disabled }, index.h("span", null, this.icon && index.h("sen-icon", { name: this.icon }), index.h("slot", null)))));
  }
};
Button.style = buttonCss;

const checkboxCss = ".sc-sen-checkbox-h{display:inline-block}.sc-sen-checkbox-h .container.sc-sen-checkbox{display:flex;align-items:center;cursor:pointer}.sc-sen-checkbox-h input.sc-sen-checkbox{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.sc-sen-checkbox-h .checkmark.sc-sen-checkbox{height:14px;width:14px;background-color:#fff;border:1px solid #211010;margin-right:8px;display:flex;align-items:center;justify-content:center;overflow:hidden}.sc-sen-checkbox-h input.sc-sen-checkbox:focus~.checkmark.sc-sen-checkbox{box-shadow:0 0 0 2px #95afd6}.sc-sen-checkbox-h input.sc-sen-checkbox:checked~.checkmark.sc-sen-checkbox{background-color:#fff}.sc-sen-checkbox-h input.sc-sen-checkbox:checked~.checkmark.sc-sen-checkbox:after{display:block}.sc-sen-checkbox-h .checkmark.sc-sen-checkbox:after{content:\"\";position:absolute;display:none;width:3.5px;height:7px;border-width:0 3px 3px 0;transform:rotate(45deg);border-color:#211010;border:solid #211010;border-width:0 3px 3px 0;transform:rotate(45deg);margin-bottom:2.9781623359px}.sc-sen-checkbox-h .disabled.sc-sen-checkbox .checkmark.sc-sen-checkbox{border-color:#ADAcAc}.sc-sen-checkbox-h .disabled.sc-sen-checkbox .checkmark.sc-sen-checkbox:after{border-color:#ADAcAc}";

let checkboxIds = 0;
const Checkbox = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.senChange = index.createEvent(this, "senChange", 7);
    this.senInput = index.createEvent(this, "senInput", 7);
    this.checkboxId = `sen-checkbox-${checkboxIds++}`;
    this.hasFocus = false;
    /**
     * If `true`, the user cannot interact with the checkbox.
     */
    this.disabled = false;
    /**
     * Label for the checkbox
     */
    this.label = "";
    /**
     * The name of the control, which is submitted with the form data.
     */
    this.name = this.checkboxId;
    /**
     * If `true`, the user cannot modify the value.
     */
    this.readonly = false;
    /**
     * The value of the input.
     */
    // eslint-disable-next-line @stencil/strict-mutable
    this.value = false;
    this.onInput = (ev) => {
      const input = ev.target;
      if (input) {
        this.value = Boolean(input.checked);
      }
      this.senInput.emit(ev);
    };
    this.toggle = (ev) => {
      ev.preventDefault();
      if (this.disabled || this.readonly) {
        return;
      }
      this.value = !this.value;
      this.senChange.emit({ value: this.value });
    };
  }
  /**
   * Update the native input element when the value changes
   */
  valueChanged() {
    const value = typeof this.value === "undefined" ? false : this.value;
    this.senChange.emit({ value });
  }
  /**
   * Sets focus on the specified `ion-input`. Use this method instead of the global
   * `input.focus()`.
   */
  async setFocus() {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  }
  render() {
    const labelClass = {
      disabled: this.disabled,
      readonly: this.readonly,
      focused: this.hasFocus,
      container: true,
    };
    return (index.h(index.Host, null, index.h("label", { id: `${this.checkboxId}-label`, onClick: this.toggle, class: labelClass }, index.h("input", { id: this.checkboxId, name: this.name, ref: (input) => (this.nativeInput = input), onInput: this.onInput, disabled: this.disabled, readOnly: this.readonly, checked: this.value, "aria-labelledby": `${this.checkboxId}-label`, type: "checkbox" }), index.h("span", { class: "checkmark" }), this.label ? this.label : index.h("slot", null))));
  }
  static get watchers() { return {
    "value": ["valueChanged"]
  }; }
};
Checkbox.style = checkboxCss;

const SIZE_TO_MEDIA = {
  xs: "(min-width: 0px)",
  sm: "(min-width: 576px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 992px)",
  xl: "(min-width: 1200px)",
};
// Check if the window matches the media query
// at the breakpoint passed
// e.g. matchBreakpoint('sm') => true if screen width exceeds 576px
const matchBreakpoint = (breakpoint) => {
  if (breakpoint === undefined || breakpoint === "") {
    return true;
  }
  if (window.matchMedia) {
    const mediaQuery = SIZE_TO_MEDIA[breakpoint];
    return window.matchMedia(mediaQuery).matches;
  }
  return false;
};

const colCss = ":host{padding-left:var(--sen-grid-column-padding-xs, 5px);padding-right:var(--sen-grid-column-padding-xs, 5px);padding-top:var(--sen-grid-column-padding-xs, 5px);padding-bottom:var(--sen-grid-column-padding-xs, 5px);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;box-sizing:border-box;position:relative;flex-basis:0;flex-grow:1;width:100%;max-width:100%;min-height:1px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--sen-grid-column-padding-xs, 5px);padding-inline-start:var(--sen-grid-column-padding-xs, 5px);-webkit-padding-end:var(--sen-grid-column-padding-xs, 5px);padding-inline-end:var(--sen-grid-column-padding-xs, 5px)}}@media (min-width: 576px){:host{padding-left:var(--sen-grid-column-padding-sm, 5px);padding-right:var(--sen-grid-column-padding-sm, 5px);padding-top:var(--sen-grid-column-padding-sm, 5px);padding-bottom:var(--sen-grid-column-padding-sm, 5px)}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--sen-grid-column-padding-sm, 5px);padding-inline-start:var(--sen-grid-column-padding-sm, 5px);-webkit-padding-end:var(--sen-grid-column-padding-sm, 5px);padding-inline-end:var(--sen-grid-column-padding-sm, 5px)}}}@media (min-width: 768px){:host{padding-left:var(--sen-grid-column-padding-md, 5px);padding-right:var(--sen-grid-column-padding-md, 5px);padding-top:var(--sen-grid-column-padding-md, 5px);padding-bottom:var(--sen-grid-column-padding-md, 5px)}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--sen-grid-column-padding-md, 5px);padding-inline-start:var(--sen-grid-column-padding-md, 5px);-webkit-padding-end:var(--sen-grid-column-padding-md, 5px);padding-inline-end:var(--sen-grid-column-padding-md, 5px)}}}@media (min-width: 992px){:host{padding-left:var(--sen-grid-column-padding-lg, 5px);padding-right:var(--sen-grid-column-padding-lg, 5px);padding-top:var(--sen-grid-column-padding-lg, 5px);padding-bottom:var(--sen-grid-column-padding-lg, 5px)}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--sen-grid-column-padding-lg, 5px);padding-inline-start:var(--sen-grid-column-padding-lg, 5px);-webkit-padding-end:var(--sen-grid-column-padding-lg, 5px);padding-inline-end:var(--sen-grid-column-padding-lg, 5px)}}}@media (min-width: 1200px){:host{padding-left:var(--sen-grid-column-padding-xl, 5px);padding-right:var(--sen-grid-column-padding-xl, 5px);padding-top:var(--sen-grid-column-padding-xl, 5px);padding-bottom:var(--sen-grid-column-padding-xl, 5px)}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--sen-grid-column-padding-xl, 5px);padding-inline-start:var(--sen-grid-column-padding-xl, 5px);-webkit-padding-end:var(--sen-grid-column-padding-xl, 5px);padding-inline-end:var(--sen-grid-column-padding-xl, 5px)}}}";

var _a;
const win = window;
const SUPPORTS_VARS = !!((_a = win === null || win === void 0 ? void 0 : win.CSS) === null || _a === void 0 ? void 0 : _a.supports("--a: 0"));
const BREAKPOINTS = ["", "xs", "sm", "md", "lg", "xl"];
const Col = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  onResize() {
    index.forceUpdate(this);
  }
  // Loop through all of the breakpoints to see if the media query
  // matches and grab the column value from the relevant prop if so
  getColumns(property) {
    let matched;
    for (const breakpoint of BREAKPOINTS) {
      const matches = matchBreakpoint(breakpoint);
      // Grab the value of the property, if it exists and our
      // media query matches we return the value
      const columns = this[property + breakpoint.charAt(0).toUpperCase() + breakpoint.slice(1)];
      if (matches && columns !== undefined) {
        matched = columns;
      }
    }
    // Return the last matched columns since the breakpoints
    // increase in size and we want to return the largest match
    return matched;
  }
  calculateSize() {
    const columns = this.getColumns("size");
    // If size wasn't set for any breakpoint
    // or if the user set the size without a value
    // it means we need to stick with the default and return
    // e.g. <sen-col size-md>
    if (!columns || columns === "") {
      return;
    }
    // If the size is set to auto then don't calculate a size
    const colSize = columns === "auto"
      ? "auto"
      : // If CSS supports variables we should use the grid columns var
        SUPPORTS_VARS
          ? `calc(calc(${columns} / var(--sen-grid-columns, 12)) * 100%)`
          : // Convert the columns to a percentage by dividing by the total number
            // of columns (12) and then multiplying by 100
            (columns / 12) * 100 + "%";
    return {
      flex: `0 0 ${colSize}`,
      width: `${colSize}`,
      "max-width": `${colSize}`,
    };
  }
  // Called by push, pull, and offset since they use the same calculations
  calculatePosition(property, modifier) {
    const columns = this.getColumns(property);
    if (!columns) {
      return;
    }
    // If the number of columns passed are greater than 0 and less than
    // 12 we can position the column, else default to auto
    const amount = SUPPORTS_VARS
      ? // If CSS supports variables we should use the grid columns var
        `calc(calc(${columns} / var(--sen-grid-columns, 12)) * 100%)`
      : // Convert the columns to a percentage by dividing by the total number
        // of columns (12) and then multiplying by 100
        columns > 0 && columns < 12
          ? (columns / 12) * 100 + "%"
          : "auto";
    return {
      [modifier]: amount,
    };
  }
  calculateOffset(isRTL) {
    return this.calculatePosition("offset", isRTL ? "margin-right" : "margin-left");
  }
  calculatePull(isRTL) {
    return this.calculatePosition("pull", isRTL ? "left" : "right");
  }
  calculatePush(isRTL) {
    return this.calculatePosition("push", isRTL ? "right" : "left");
  }
  render() {
    const isRTL = document.dir === "rtl";
    return (index.h(index.Host, { style: Object.assign(Object.assign(Object.assign(Object.assign({}, this.calculateOffset(isRTL)), this.calculatePull(isRTL)), this.calculatePush(isRTL)), this.calculateSize()) }, index.h("slot", null)));
  }
};
Col.style = colCss;

const dataTableCss = "table{background:transparent;border:var(--sen-table-border-width, 0) solid var(--sen-table-border-color, #DEDCDC);border-spacing:0}th,td{text-align:left;padding:var(--sen-table-cell-padding-y, 0.4rem) var(--sen-table-cell-padding-x, 0.6rem)}th{background:var(--sen-table-header-bg, #F8F6F6)}tr:hover{background:var(--sen-table-row-active-bg, #E9E6E6)}";

const DataTable = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return (index.h(index.Host, null, index.h("sen-table", null, index.h("sen-table-head", null, index.h("sen-table-row", null, this.headers.map((header) => (index.h("sen-table-cell", { style: { textAlign: header.textAlign } }, header.value))))), index.h("sen-table-body", null, this.data.map((row) => (index.h("sen-table-row", null, this.headers.map((header) => (index.h("sen-table-cell", { align: row[header.key].textAlign || header.textAlign }, row[header.key]))))))))));
  }
};
DataTable.style = dataTableCss;

const fieldsetCss = ":host{display:block;padding:6px;border:2px solid #F8F6F6;border-radius:0;position:relative;margin-bottom:8px}:host legend{background-color:#fff;position:relative;display:inline-block;font-weight:700;color:#CECBCB;left:0;padding:6px 6px 0 0;top:-13px}";

const Fieldset = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, this.legend && index.h("legend", null, this.legend), index.h("sen-grid", null, index.h("slot", null))));
  }
};
Fieldset.style = fieldsetCss;

const formFieldCss = ":host .form-label{margin-top:5px;display:inline-block;white-space:nowrap}";

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

const gridCss = ":host{padding-left:var(--sen-grid-padding-xs, var(--sen-grid-padding, 5px));padding-right:var(--sen-grid-padding-xs, var(--sen-grid-padding, 5px));padding-top:var(--sen-grid-padding-xs, var(--sen-grid-padding, 5px));padding-bottom:var(--sen-grid-padding-xs, var(--sen-grid-padding, 5px));margin-left:auto;margin-right:auto;display:block;flex:1}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--sen-grid-padding-xs, var(--sen-grid-padding, 5px));padding-inline-start:var(--sen-grid-padding-xs, var(--sen-grid-padding, 5px));-webkit-padding-end:var(--sen-grid-padding-xs, var(--sen-grid-padding, 5px));padding-inline-end:var(--sen-grid-padding-xs, var(--sen-grid-padding, 5px))}}@media (min-width: 576px){:host{padding-left:var(--sen-grid-padding-sm, var(--sen-grid-padding, 5px));padding-right:var(--sen-grid-padding-sm, var(--sen-grid-padding, 5px));padding-top:var(--sen-grid-padding-sm, var(--sen-grid-padding, 5px));padding-bottom:var(--sen-grid-padding-sm, var(--sen-grid-padding, 5px))}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--sen-grid-padding-sm, var(--sen-grid-padding, 5px));padding-inline-start:var(--sen-grid-padding-sm, var(--sen-grid-padding, 5px));-webkit-padding-end:var(--sen-grid-padding-sm, var(--sen-grid-padding, 5px));padding-inline-end:var(--sen-grid-padding-sm, var(--sen-grid-padding, 5px))}}}@media (min-width: 768px){:host{padding-left:var(--sen-grid-padding-md, var(--sen-grid-padding, 5px));padding-right:var(--sen-grid-padding-md, var(--sen-grid-padding, 5px));padding-top:var(--sen-grid-padding-md, var(--sen-grid-padding, 5px));padding-bottom:var(--sen-grid-padding-md, var(--sen-grid-padding, 5px))}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--sen-grid-padding-md, var(--sen-grid-padding, 5px));padding-inline-start:var(--sen-grid-padding-md, var(--sen-grid-padding, 5px));-webkit-padding-end:var(--sen-grid-padding-md, var(--sen-grid-padding, 5px));padding-inline-end:var(--sen-grid-padding-md, var(--sen-grid-padding, 5px))}}}@media (min-width: 992px){:host{padding-left:var(--sen-grid-padding-lg, var(--sen-grid-padding, 5px));padding-right:var(--sen-grid-padding-lg, var(--sen-grid-padding, 5px));padding-top:var(--sen-grid-padding-lg, var(--sen-grid-padding, 5px));padding-bottom:var(--sen-grid-padding-lg, var(--sen-grid-padding, 5px))}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--sen-grid-padding-lg, var(--sen-grid-padding, 5px));padding-inline-start:var(--sen-grid-padding-lg, var(--sen-grid-padding, 5px));-webkit-padding-end:var(--sen-grid-padding-lg, var(--sen-grid-padding, 5px));padding-inline-end:var(--sen-grid-padding-lg, var(--sen-grid-padding, 5px))}}}@media (min-width: 1200px){:host{padding-left:var(--sen-grid-padding-xl, var(--sen-grid-padding, 5px));padding-right:var(--sen-grid-padding-xl, var(--sen-grid-padding, 5px));padding-top:var(--sen-grid-padding-xl, var(--sen-grid-padding, 5px));padding-bottom:var(--sen-grid-padding-xl, var(--sen-grid-padding, 5px))}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--sen-grid-padding-xl, var(--sen-grid-padding, 5px));padding-inline-start:var(--sen-grid-padding-xl, var(--sen-grid-padding, 5px));-webkit-padding-end:var(--sen-grid-padding-xl, var(--sen-grid-padding, 5px));padding-inline-end:var(--sen-grid-padding-xl, var(--sen-grid-padding, 5px))}}}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host(.grid-fixed){width:var(--sen-grid-width-xs, var(--sen-grid-width, 100%));max-width:100%}@media (min-width: 576px){:host(.grid-fixed){width:var(--sen-grid-width-sm, var(--sen-grid-width, 540px))}}@media (min-width: 768px){:host(.grid-fixed){width:var(--sen-grid-width-md, var(--sen-grid-width, 720px))}}@media (min-width: 992px){:host(.grid-fixed){width:var(--sen-grid-width-lg, var(--sen-grid-width, 960px))}}@media (min-width: 1200px){:host(.grid-fixed){width:var(--sen-grid-width-xl, var(--sen-grid-width, 1140px))}}:host(.sen-no-padding){--sen-grid-column-padding:0;--sen-grid-column-padding-xs:0;--sen-grid-column-padding-sm:0;--sen-grid-column-padding-md:0;--sen-grid-column-padding-lg:0;--sen-grid-column-padding-xl:0}";

const Grid = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * If `true`, the grid will have a fixed width based on the screen size.
     */
    this.fixed = false;
  }
  render() {
    return (index.h(index.Host, { class: {
        "grid-fixed": this.fixed,
      } }, index.h("slot", null)));
  }
};
Grid.style = gridCss;

const getUrl = (iconName) => {
  iconName = iconName.toLowerCase();
  // only allow alpha characters and dash
  const invalidChars = iconName.replace(/[a-z]|_|\d/gi, "");
  if (invalidChars !== "") {
    throw new Error("Invalid characeters in icon name: " + iconName);
  }
  return index.getAssetPath(`svg/ic_${iconName}_24px.svg`);
};
const isStr = (val) => typeof val === "string";

const validateContent = (svgContent) => {
  const div = document.createElement('div');
  div.innerHTML = svgContent;
  // setup this way to ensure it works on our buddy IE
  for (let i = div.childNodes.length - 1; i >= 0; i--) {
    if (div.childNodes[i].nodeName.toLowerCase() !== 'svg') {
      div.removeChild(div.childNodes[i]);
    }
  }
  // must only have 1 root element
  const svgElm = div.firstElementChild;
  if (svgElm && svgElm.nodeName.toLowerCase() === 'svg') {
    const svgClass = svgElm.getAttribute('class') || '';
    svgElm.setAttribute('class', (svgClass + ' s-sen-icon').trim());
    // root element must be an svg
    // lets double check we've got valid elements
    // do not allow scripts
    if (isValid(svgElm)) {
      return div.innerHTML;
    }
  }
  return '';
};
const isValid = (elm) => {
  if (elm.nodeType === 1) {
    if (elm.nodeName.toLowerCase() === 'script') {
      return false;
    }
    for (let i = 0; i < elm.attributes.length; i++) {
      const val = elm.attributes[i].value;
      if (isStr(val) && val.toLowerCase().indexOf('on') === 0) {
        return false;
      }
    }
    for (let i = 0; i < elm.childNodes.length; i++) {
      if (!isValid(elm.childNodes[i])) {
        return false;
      }
    }
  }
  return true;
};

const senIconContent = new Map();
const requests = new Map();
const getSvgContent = (url, sanitize) => {
  // see if we already have a request for this url
  let req = requests.get(url);
  if (!Boolean(req)) {
    if (typeof fetch !== 'undefined' && typeof document !== 'undefined') {
      // we don't already have a request
      req = fetch(url).then((rsp) => {
        if (rsp.ok) {
          return rsp.text().then((svgContent) => {
            if (Boolean(svgContent) && sanitize !== false) {
              svgContent = validateContent(svgContent);
            }
            senIconContent.set(url, svgContent || '');
          });
        }
        senIconContent.set(url, '');
        return null;
      });
      // cache for the same requests
      requests.set(url, req);
      return req;
    }
    else {
      // set to empty for ssr scenarios and resolve promise
      senIconContent.set(url, '');
      return Promise.resolve();
    }
  }
  return req || Promise.resolve();
};

const iconCss = ":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;box-sizing:content-box !important;font-size:16px;vertical-align:middle}:host .sen-icon{stroke:currentColor}.sen-icon-fill-none{fill:none}.sen-icon-stroke-width{stroke-width:32px;stroke-width:var(--sen-icon-stroke-width, 32px)}.icon-inner,.sen-icon,svg{display:block;height:100%;width:100%}:host(.icon-small){font-size:18px !important}:host(.icon-large){font-size:32px !important}:host(.sen-color){color:var(--sen-color-base) !important}:host(.sen-color-primary){--sen-color-base:var(--sen-color-primary, #3880ff)}:host(.sen-color-secondary){--sen-color-base:var(--sen-color-secondary, #0cd1e8)}:host(.sen-color-tertiary){--sen-color-base:var(--sen-color-tertiary, #f4a942)}:host(.sen-color-success){--sen-color-base:var(--sen-color-success, #10dc60)}:host(.sen-color-warning){--sen-color-base:var(--sen-color-warning, #ffce00)}:host(.sen-color-danger){--sen-color-base:var(--sen-color-danger, #f14141)}:host(.sen-color-light){--sen-color-base:var(--sen-color-light, #f4f5f8)}:host(.sen-color-medium){--sen-color-base:var(--sen-color-medium, #989aa2)}:host(.sen-color-dark){--sen-color-base:var(--sen-color-dark, #222428)}";

const Icon = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return (index.h(index.Host, { role: "img", class: Object.assign({ "sen-icon": true }, createColorClasses(this.color)) }, index.h("div", { class: "icon-inner", innerHTML: this.svgContent })));
  }
  static get assetsDirs() { return ["svg"]; }
  static get watchers() { return {
    "name": ["loadIcon"]
  }; }
};
const createColorClasses = (color) => {
  return color
    ? {
      "sen-color": true,
      [`sen-color-${color}`]: true,
    }
    : null;
};
Icon.style = iconCss;

const inputCss = ".sc-sen-input-h{display:contents}.sc-sen-input-h input.sc-sen-input{box-sizing:border-box;padding:4px 6.4px;font-size:13px;font-family:var(--sen-font-monospace, \"IBM Plex Mono\", \"Consolas\", monospace);border:0 solid #F8F6F6;background:#F8F6F6;line-height:1em;border-bottom:1px solid #ADAcAc}.sc-sen-input-h input.sc-sen-input:focus{box-shadow:0 0 0 2px #95afd6;outline:none;border-bottom-color:#F8F6F6}.sc-sen-input-h input[type=text].sc-sen-input{display:block;width:100%}";

let inputIds = 0;
const Input = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.senInput = index.createEvent(this, "senInput", 7);
    this.senChange = index.createEvent(this, "senChange", 7);
    this.inputId = `sen-input-${inputIds++}`;
    this.hasFocus = false;
    /**
     * Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user.
     */
    this.autocapitalize = "off";
    /**
     * Indicates whether the value of the control can be automatically completed by the browser.
     */
    this.autocomplete = "off";
    /**
     * Whether auto correction should be enabled when the user is entering/editing the text value.
     */
    this.autocorrect = "off";
    /**
     * This Boolean attribute lets you specify that a form control should have input focus when the page loads.
     */
    this.autofocus = false;
    /**
     * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
     */
    this.clearInput = false;
    /**
     * Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke.
     */
    this.debounce = 0;
    /**
     * If `true`, the user cannot interact with the input.
     */
    this.disabled = false;
    /**
     * The name of the control, which is submitted with the form data.
     */
    this.name = this.inputId;
    /**
     * If `true`, the user cannot modify the value.
     */
    this.readonly = false;
    /**
     * If `true`, the user must fill in a value before submitting a form.
     */
    this.required = false;
    /**
     * If `true`, the element will have its spelling and grammar checked.
     */
    this.spellcheck = false;
    /**
     * The type of control to display. The default type is text.
     */
    this.type = "text";
    /**
     * The value of the input.
     */
    this.value = "";
    this.onInput = (ev) => {
      const input = ev.target;
      if (input) {
        this.value = input.value || "";
      }
      this.senInput.emit(ev);
    };
  }
  /**
   * Update the native input element when the value changes
   */
  valueChanged() {
    this.senChange.emit({
      value: this.value == null ? this.value : this.value.toString(),
    });
  }
  /**
   * Sets focus on the specified `sen-input`. Use this method instead of the global
   * `input.focus()`.
   */
  async setFocus() {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  }
  getValue() {
    return typeof this.value === "number"
      ? this.value.toString()
      : (this.value || "").toString();
  }
  render() {
    const value = this.getValue();
    const labelId = this.inputId + "-lbl";
    return (index.h(index.Host, null, index.h("input", { class: "native-input", ref: (input) => (this.nativeInput = input), "aria-labelledby": labelId, disabled: this.disabled, accept: this.accept, autoCapitalize: this.autocapitalize, autoComplete: this.autocomplete, autoCorrect: this.autocorrect, autoFocus: this.autofocus, min: this.min, max: this.max, minLength: this.minlength, maxLength: this.maxlength, name: this.name, pattern: this.pattern, placeholder: this.placeholder || "", readOnly: this.readonly, required: this.required, spellcheck: this.spellcheck, step: this.step, size: this.size, tabindex: this.tabindex, type: this.type, value: value, onInput: this.onInput })));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "value": ["valueChanged"]
  }; }
};
Input.style = inputCss;

const radioCss = ".sc-sen-radio-h .container.sc-sen-radio{display:flex;align-items:center;margin-bottom:8px;cursor:pointer}.sc-sen-radio-h .container.sc-sen-radio:last-child{margin-bottom:0}.sc-sen-radio-h .container.sc-sen-radio input.sc-sen-radio{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.sc-sen-radio-h .checkmark.sc-sen-radio{height:14px;width:14px;background-color:#fff;border:1px solid #211010;border-radius:50%;margin-right:8px;position:relative}.sc-sen-radio-h .container.sc-sen-radio input.sc-sen-radio:checked~.checkmark.sc-sen-radio{background-color:#fff}.sc-sen-radio-h .container.sc-sen-radio input.sc-sen-radio:focus~.checkmark.sc-sen-radio{box-shadow:0 0 0 2px #95afd6}.sc-sen-radio-h .checkmark.sc-sen-radio:after{content:\"\";position:absolute;display:none}.sc-sen-radio-h .container.sc-sen-radio input.sc-sen-radio:checked~.checkmark.sc-sen-radio:after{display:block}.sc-sen-radio-h .container.sc-sen-radio .checkmark.sc-sen-radio:after{top:3.5px;left:3.5px;width:7px;height:7px;border-radius:50%;background:#211010}.sc-sen-radio-h .disabled.sc-sen-radio .checkmark.sc-sen-radio{border-color:#ADAcAc}.sc-sen-radio-h .disabled.sc-sen-radio .checkmark.sc-sen-radio:after{background-color:#ADAcAc}";

let radioIds = 0;
const Radio = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.senChange = index.createEvent(this, "senChange", 7);
    this.senInput = index.createEvent(this, "senInput", 7);
    this.radioId = `sen-radio-${radioIds++}`;
    this.hasFocus = false;
    /**
     * If `true`, the user cannot interact with the radio.
     */
    this.disabled = false;
    /**
     * Label for the radio
     */
    this.label = "";
    /**
     * The name of the control, which is submitted with the form data.
     */
    this.name = this.radioId;
    /**
     * If `true`, the user cannot modify the value.
     */
    this.readonly = false;
    /**
     * Radio options to display
     */
    this.options = [];
    this.onInput = (ev) => {
      const input = ev.target;
      if (input) {
        this.value = input.value || null;
      }
      this.senInput.emit(ev);
    };
  }
  /**
   * Update the native input element when the value changes
   */
  valueChanged() {
    this.senChange.emit({ value: this.value });
  }
  /**
   * Sets focus on the specified input. Use this method instead of the global
   * `input.focus()`.
   */
  async setFocus() {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  }
  render() {
    const elementClass = {
      disabled: this.disabled,
      readonly: this.readonly,
      focused: this.hasFocus,
      "radio-group": true,
    };
    return (index.h(index.Host, null, index.h("div", { class: elementClass }, index.h("span", { class: "label-text" }, this.label ? this.label : index.h("slot", null)), this.options.map((option) => {
      var _a, _b, _c;
      return (index.h("label", { class: {
          container: true,
          checked: this.value === ((_a = option.value) === null || _a === void 0 ? void 0 : _a.toString()),
        } }, index.h("input", { type: "radio", class: "native-radio", name: this.name, value: (_b = option.value) === null || _b === void 0 ? void 0 : _b.toString(), disabled: this.disabled, readOnly: this.readonly, onInput: (e) => this.onInput(e), checked: this.value === ((_c = option.value) === null || _c === void 0 ? void 0 : _c.toString()) }), index.h("span", { class: "checkmark" }), option.label));
    }))));
  }
  static get watchers() { return {
    "value": ["valueChanged"]
  }; }
};
Radio.style = radioCss;

const rowCss = ":host{display:flex;flex-wrap:wrap}";

const Row = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
Row.style = rowCss;

const selectCss = ".sc-sen-select-h .select-wrapper.sc-sen-select{position:relative}.sc-sen-select-h .select-wrapper.sc-sen-select:after{content:\"\";position:absolute;top:calc(50% - 6px);right:14.4px;display:block;width:6px;height:6px;transform:rotate(45deg);border-bottom:2px solid #6C6A6A;border-right:2px solid #6C6A6A}.sc-sen-select-h select.sc-sen-select{appearance:none;box-sizing:border-box;padding:4px 3.4px;font-size:13px;font-family:var(--sen-font-monospace, \"IBM Plex Mono\", \"Consolas\", monospace);border:0 solid #F8F6F6;background:#F8F6F6;line-height:17.5px;border-bottom:1px solid #ADAcAc;display:block;width:100%}.sc-sen-select-h select.sc-sen-select option.sc-sen-select{font-family:var(--sen-font-family, \"IBM Plex Sans\", \"Source Sans Pro\", Helvetica, sans-serif);font-size:13px;line-height:20px;padding:6.4px 4px}.sc-sen-select-h select.sc-sen-select:focus{box-shadow:0 0 0 2px #95afd6;outline:none;border-bottom-color:#F8F6F6}";

let selectIds = 0;
const Select = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.senChange = index.createEvent(this, "senChange", 7);
    this.senInput = index.createEvent(this, "senInput", 7);
    this.selectId = `sen-select-${selectIds++}`;
    this.hasFocus = false;
    /**
     * If `true`, the user cannot interact with the select.
     */
    this.disabled = false;
    /**
     * Label for the select
     */
    this.label = "";
    /**
     * The name of the control, which is submitted with the form data.
     */
    this.name = this.selectId;
    /**
     * If `true`, the user cannot modify the value.
     */
    this.readonly = false;
    /**
     * Set to true to disallow empty selections
     */
    this.required = false;
    /**
     * Label of empty option
     */
    this.emptyLabel = "-";
    /**
     * Select options to display
     */
    this.options = [];
    this.onInput = (ev) => {
      const input = ev.target;
      if (input) {
        this.value = input.value || null;
      }
      this.senInput.emit(ev);
    };
  }
  /**
   * Update the native input element when the value changes
   */
  valueChanged() {
    this.senChange.emit({ value: this.value });
  }
  /**
   * Sets focus on the specified input. Use this method instead of the global
   * `input.focus()`.
   */
  async setFocus() {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  }
  render() {
    const elementClass = {
      disabled: this.disabled,
      readonly: this.readonly,
      focused: this.hasFocus,
    };
    return (index.h(index.Host, null, index.h("div", { class: "select-wrapper" }, index.h("select", { onInput: this.onInput, class: elementClass, name: this.name, disabled: this.disabled }, index.h("option", { disabled: this.required }, this.emptyLabel), this.options.map((option) => {
      var _a, _b, _c;
      return (index.h("option", { value: (_a = option.value) === null || _a === void 0 ? void 0 : _a.toString(), selected: ((_b = option === null || option === void 0 ? void 0 : option.value) === null || _b === void 0 ? void 0 : _b.toString()) === ((_c = this.value) === null || _c === void 0 ? void 0 : _c.toString()) }, option.label));
    })))));
  }
  static get watchers() { return {
    "value": ["valueChanged"]
  }; }
};
Select.style = selectCss;

const tableCss = ":host{display:table;background:transparent;border:var(--sen-table-border-width, 0) solid var(--sen-table-border-color, #DEDCDC);border-spacing:0}";

const SenTable = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
SenTable.style = tableCss;

const tableBodyCss = ":host{display:table-row-group}::slotted(sen-table-row):hover{background:var(--sen-table-row-active-bg, #E9E6E6)}";

const SenTableHead = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
SenTableHead.style = tableBodyCss;

const tableCellCss = ":host{display:contents}:host td{text-align:left;padding:var(--sen-table-cell-padding-y, 0.4rem) var(--sen-table-cell-padding-x, 0.6rem);font-variant-numeric:tabular-nums}";

const SenTableCell = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * How many columns to span
     */
    this.colspan = undefined;
    /**
     * How many rows to span
     */
    this.rowspan = undefined;
    /**
     * Alignment of contents
     */
    this.align = undefined;
  }
  render() {
    return (index.h(index.Host, null, index.h("td", { style: { textAlign: this.align }, colSpan: this.colspan ? Number(this.colspan) : undefined, rowSpan: this.rowspan ? Number(this.rowspan) : undefined }, index.h("slot", null))));
  }
};
SenTableCell.style = tableCellCss;

const tableHeadCss = ":host{display:table-header-group}::slotted(sen-table-row){background:var(--sen-table-header-bg, #F8F6F6);font-weight:700}";

const SenTableHead$1 = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
SenTableHead$1.style = tableHeadCss;

const tableRowCss = ":host{display:table-row}:host(:hover){background-color:#E9E6E6}";

const SenTableRow = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
SenTableRow.style = tableRowCss;

exports.demo_form = DemoForm;
exports.demo_table = DemoTable;
exports.sen_app = App;
exports.sen_button = Button;
exports.sen_checkbox = Checkbox;
exports.sen_col = Col;
exports.sen_data_table = DataTable;
exports.sen_fieldset = Fieldset;
exports.sen_form_field = FormField;
exports.sen_grid = Grid;
exports.sen_icon = Icon;
exports.sen_input = Input;
exports.sen_radio = Radio;
exports.sen_row = Row;
exports.sen_select = Select;
exports.sen_table = SenTable;
exports.sen_table_body = SenTableHead;
exports.sen_table_cell = SenTableCell;
exports.sen_table_head = SenTableHead$1;
exports.sen_table_row = SenTableRow;
