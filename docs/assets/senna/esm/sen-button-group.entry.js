import { r as registerInstance, h, H as Host } from './index-b3859636.js';

const buttonGroupCss = ":host{--buttons-border-radius:3px;display:flex}::slotted(sen-button){--border-left-radius:0;--border-right-radius:0}::slotted(sen-button:first-child){--border-left-radius:var(--buttons-border-radius)}::slotted(sen-button:last-child){--border-right-radius:var(--buttons-border-radius)}";

const ButtonGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { class: "btn-group" }, h("slot", null)));
  }
};
ButtonGroup.style = buttonGroupCss;

export { ButtonGroup as sen_button_group };
