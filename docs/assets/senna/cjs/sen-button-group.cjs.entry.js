'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6de7b0c3.js');

const buttonGroupCss = ":host{--buttons-border-radius:3px;display:flex}::slotted(sen-button){--border-left-radius:0;--border-right-radius:0}::slotted(sen-button:first-child){--border-left-radius:var(--buttons-border-radius)}::slotted(sen-button:last-child){--border-right-radius:var(--buttons-border-radius)}";

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
