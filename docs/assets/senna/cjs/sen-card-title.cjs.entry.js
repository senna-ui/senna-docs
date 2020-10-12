'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-77ed5089.js');

const cardTitleCss = ":host{flex:0 0 100%}:host h1{font-weight:700;font-size:22.75px}@media (min-width: 768px){:host h1{font-size:26px}}@media (min-width: 992px){:host h1{font-size:32.5px}}";

const CardTitle = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("header", null, index.h("h1", null, index.h("slot", null)))));
  }
};
CardTitle.style = cardTitleCss;

exports.sen_card_title = CardTitle;
