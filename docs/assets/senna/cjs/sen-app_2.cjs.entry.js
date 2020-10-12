'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-77ed5089.js');

const appCss = ":host{font-family:var(--sen-font-family, \"Source Sans Pro\", Helvetica, sans-serif);font-size:13px;color:#211010}";

const App = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  componentWillLoad() {
    console.log("el", this.el.shadowRoot);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
  get el() { return index.getElement(this); }
};
App.style = appCss;

const buttonCss = ":host{display:inline-block;--border-left-radius:3px;--border-right-radius:3px}:host button{color:#fff;background:var(--btn-primary-bg, #3B5F97);border-radius:3px;border-width:0;padding:4px 8px;font-size:13px;font-family:var(--sen-font-family, \"Source Sans Pro\", Helvetica, sans-serif);border-top-left-radius:var(--border-left-radius);border-bottom-left-radius:var(--border-left-radius);border-top-right-radius:var(--border-right-radius);border-bottom-right-radius:var(--border-right-radius)}:host button[disabled]{opacity:0.4}:host .btn-primary{background:#3B5F97}:host .btn-secondary{background:#6C6A6A}:host .btn-success{background:#28a745}:host .btn-warning{background:#ffc107}:host .btn-danger{background:#ea3c20}:host .btn-info{background:#17a2b8}";

const Button = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * Button type
     */
    this.buttonType = "button";
    /**
     * Disables the button
     */
    this.disabled = false;
  }
  render() {
    const classes = {
      btn: true,
      [`btn-${this.color || 'secondary'}`]: true
    };
    return (index.h(index.Host, null, index.h("button", { class: classes, type: this.buttonType, disabled: this.disabled }, index.h("slot", null))));
  }
};
Button.style = buttonCss;

exports.sen_app = App;
exports.sen_button = Button;
