'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-77ed5089.js');

const cardCss = ":host{--card-border-color:#DEDCDC;--card-border-radius:0;--card-padding:8px;--card-margin:8px}:host article{display:flex;flex-wrap:wrap;padding:var(--card-padding);margin:var(--card-margin);border:1px solid var(--card-border-color);border-radius:var(--card-border-radius)}";

const Card = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("article", null, index.h("slot", null))));
  }
};
Card.style = cardCss;

exports.sen_card = Card;
