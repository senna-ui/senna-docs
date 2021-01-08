import { r as registerInstance, h, H as Host } from './index-7505fb17.js';

const cardActionsCss = ":host,:host footer{display:flex;flex-wrap:wrap;justify-content:center;flex:0 0 100%}@media (min-width: 768px){:host,:host footer{flex-wrap:nowrap;justify-content:flex-end}}::slotted(sen-button){display:block;flex:0 0 100%;margin:4px}@media (min-width: 768px){::slotted(sen-button){flex:0 0 auto}}";

const CardActions = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("footer", null, h("slot", null))));
  }
};
CardActions.style = cardActionsCss;

export { CardActions as sen_card_actions };
