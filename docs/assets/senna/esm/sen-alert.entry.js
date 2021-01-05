import { r as registerInstance, h, H as Host, g as getElement } from './index-b3859636.js';

const alertCss = ":host{display:block;padding:8px;border:2px solid transparent;margin-bottom:8px}:host .alert-title{font-weight:700;margin-bottom:4px}:host(.alert-primary){background:#a8bcdd}:host(.alert-secondary){background:#c5c4c4}:host(.alert-success){background:#9be7ac}:host(.alert-info){background:#90e4f1}:host(.alert-warning){background:#ffeeba}:host(.alert-danger){background:#f9cbc3}:host(.alert-light){background:white}:host(.alert-dark){background:#908787}";

const Alert = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.hasTitleSlot = false;
  }
  componentWillLoad() {
    this.hasTitleSlot = !!this.el.querySelector('[slot="title"]');
  }
  /**
   * @slot title - optional alert title slot
   */
  render() {
    const classes = {
      ["alert-" + this.color]: true,
    };
    return (h(Host, { class: classes }, this.hasTitleSlot && (h("div", { class: "alert-title" }, h("slot", { name: "title" }))), h("slot", null)));
  }
  get el() { return getElement(this); }
};
Alert.style = alertCss;

export { Alert as sen_alert };
