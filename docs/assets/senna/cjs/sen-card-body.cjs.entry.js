'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a61cd5c3.js');

const cardBodyCss = ":host{display:block;flex:0 0 100%}:host p{font-size:11.375px}@media (min-width: 768px){:host p{font-size:13px}}@media (min-width: 992px){:host p{font-size:16.25px}}";

const CardBody = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("p", null, index.h("slot", null))));
  }
};
CardBody.style = cardBodyCss;

exports.sen_card_body = CardBody;
