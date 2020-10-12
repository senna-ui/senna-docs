import { r as registerInstance, h, H as Host } from './index-4e24c24c.js';

const menuCss = ":host{display:block}.menu{background:var(--sen-menu-bg, #343030)}";

const Menu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * Menu items
     */
    this.items = [];
  }
  render() {
    return (h(Host, null, h("div", { class: "menu" }, this.items.map(item => h("sen-menu-item", { value: item }, item.label)))));
  }
};
Menu.style = menuCss;

export { Menu as sen_menu };
