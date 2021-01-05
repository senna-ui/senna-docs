import { r as registerInstance, c as createEvent, h, H as Host } from './index-b3859636.js';

const menuItemCss = ":host{display:block}a{cursor:pointer;display:block;padding:var(--sen-spacer, 8px);color:var(--sen-menu-item-color, #fff);background:var(--sen-menu-item-bg, #494444);margin-bottom:1px}a:hover{background:var(--sen-menu-item-hover-bg, #6C6A6A)}a.active{color:var(--sen-menu-item-active-color, #DEDCDC)}";

const MenuItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.senInput = createEvent(this, "senInput", 7);
    /**
     * Active state
     */
    this.active = false;
    this.onClick = () => {
      this.senInput.emit(this.value);
    };
  }
  render() {
    return (h(Host, null, h("a", { class: this.active ? 'active' : '', onClick: this.onClick }, h("slot", null))));
  }
};
MenuItem.style = menuItemCss;

export { MenuItem as sen_menu_item };
