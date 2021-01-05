import { r as registerInstance, h, H as Host } from './index-b3859636.js';

const cardTitleCss = ":host{flex:0 0 100%}:host h1{font-weight:700;font-size:22.75px}@media (min-width: 768px){:host h1{font-size:26px}}@media (min-width: 992px){:host h1{font-size:32.5px}}";

const CardTitle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("header", null, h("h1", null, h("slot", null)))));
  }
};
CardTitle.style = cardTitleCss;

export { CardTitle as sen_card_title };
