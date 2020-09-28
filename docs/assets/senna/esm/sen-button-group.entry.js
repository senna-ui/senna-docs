import { r as registerInstance, h, H as Host } from './index-60bacf88.js';

const buttonGroupCss = ":host{display:-ms-flexbox;display:flex}::slotted(sen-button:first-child){--border-right-radius:0}::slotted(sen-button:last-child){--border-left-radius:0}";

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
