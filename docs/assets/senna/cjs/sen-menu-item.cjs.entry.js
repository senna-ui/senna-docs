'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-77ed5089.js');

const menuItemCss = ":host{display:block}a{cursor:pointer;display:block;padding:var(--sen-spacer, 8px);color:var(--sen-menu-item-color, #fff);background:var(--sen-menu-item-bg, #494444);margin-bottom:1px}a:hover{background:var(--sen-menu-item-hover-bg, #6C6A6A)}a.active{color:var(--sen-menu-item-active-color, #DEDCDC)}";

const MenuItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.senInput = index.createEvent(this, "senInput", 7);
    /**
     * Active state
     */
    this.active = false;
    this.onClick = () => {
      this.senInput.emit(this.value);
    };
  }
  render() {
    return (index.h(index.Host, null, index.h("a", { class: this.active ? 'active' : '', onClick: this.onClick }, index.h("slot", null))));
  }
};
MenuItem.style = menuItemCss;

exports.sen_menu_item = MenuItem;
