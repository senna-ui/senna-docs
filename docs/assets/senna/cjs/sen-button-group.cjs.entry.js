'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b158f9f0.js');

const buttonGroupCss = ":host{display:-ms-flexbox;display:flex}::slotted(sen-button:first-child){--border-right-radius:0}::slotted(sen-button:last-child){--border-left-radius:0}";

const ButtonGroup = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { class: "btn-group" }, index.h("slot", null)));
    }
};
ButtonGroup.style = buttonGroupCss;

exports.sen_button_group = ButtonGroup;
