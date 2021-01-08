import { r as registerInstance, h, H as Host } from './index-7505fb17.js';

const textCss = ":host p{font-size:13px}:host h1{font-size:33.8px}:host h2{font-size:27.3px}:host h3{font-size:23.4px}:host h4{font-size:18.2px}:host h5{font-size:15.6px}:host h6{font-size:14.3px}:host .font-weight-light{font-weight:300}:host .font-weight-regular{font-weight:500}:host .font-weight-bold{font-weight:700}:host .text-align-left{text-align:left}:host .text-align-right{text-align:right}:host .text-align-center{text-align:center}:host .text-align-justify{text-align:justify}";

const Text = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * Element Tag
     */
    this.tag = "p";
    /**
     * Font weight
     */
    this.weight = "regular";
    /**
     * [Text align](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)
     */
    this.align = "left";
    /**
     * [Leter spacing](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing)
     */
    this.letterSpacing = "normal";
    /**
     * [Text transform](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform)
     */
    this.textTransform = "none";
  }
  render() {
    const TextTag = this.tag;
    const classes = {
      [`font-weight-${this.weight}`]: true,
      [`text-align-${this.align}`]: true,
    };
    const { letterSpacing, textTransform } = this;
    return (h(Host, null, h(TextTag, { class: classes, style: { letterSpacing, textTransform } }, h("slot", null))));
  }
};
Text.style = textCss;

export { Text as sen_text };
