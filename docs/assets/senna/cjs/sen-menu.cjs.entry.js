'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6de7b0c3.js');

const menuCss = ":host{display:block}.menu{background:var(--sen-menu-bg, #343030)}";

const Menu = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * Menu items
     */
    this.items = [];
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "menu" }, this.items.map(item => index.h("sen-menu-item", { value: item }, item.label)))));
  }
};
Menu.style = menuCss;

exports.sen_menu = Menu;
