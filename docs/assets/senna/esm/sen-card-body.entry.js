import { r as registerInstance, h, H as Host } from './index-7505fb17.js';

const cardBodyCss = ":host{display:block;flex:0 0 100%}:host p{font-size:11.375px}@media (min-width: 768px){:host p{font-size:13px}}@media (min-width: 992px){:host p{font-size:16.25px}}";

const CardBody = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("p", null, h("slot", null))));
  }
};
CardBody.style = cardBodyCss;

export { CardBody as sen_card_body };
