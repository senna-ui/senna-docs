'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a61cd5c3.js');

const cardActionsCss = ":host,:host footer{display:flex;flex-wrap:wrap;justify-content:center;flex:0 0 100%}@media (min-width: 768px){:host,:host footer{flex-wrap:nowrap;justify-content:flex-end}}::slotted(sen-button){display:block;flex:0 0 100%;margin:4px}@media (min-width: 768px){::slotted(sen-button){flex:0 0 auto}}";

const CardActions = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("footer", null, index.h("slot", null))));
  }
};
CardActions.style = cardActionsCss;

exports.sen_card_actions = CardActions;
