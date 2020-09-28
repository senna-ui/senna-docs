import { r as registerInstance, h, H as Host } from './index-60bacf88.js';
var buttonGroupCss = ":host{display:-ms-flexbox;display:flex}::slotted(sen-button:first-child){--border-right-radius:0}::slotted(sen-button:last-child){--border-left-radius:0}";
var ButtonGroup = /** @class */ (function () {
    function ButtonGroup(hostRef) {
        registerInstance(this, hostRef);
    }
    ButtonGroup.prototype.render = function () {
        return (h(Host, { class: "btn-group" }, h("slot", null)));
    };
    return ButtonGroup;
}());
ButtonGroup.style = buttonGroupCss;
export { ButtonGroup as sen_button_group };
