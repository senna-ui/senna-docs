import { r as registerInstance, h, H as Host } from './index-7505fb17.js';

const cardCss = ":host{--card-border-color:#DEDCDC;--card-border-radius:0;--card-padding:8px;--card-margin:8px}:host article{display:flex;flex-wrap:wrap;padding:var(--card-padding);margin:var(--card-margin);border:1px solid var(--card-border-color);border-radius:var(--card-border-radius)}";

const Card = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("article", null, h("slot", null))));
  }
};
Card.style = cardCss;

export { Card as sen_card };
