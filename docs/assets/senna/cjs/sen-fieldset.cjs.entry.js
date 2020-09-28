'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b158f9f0.js');

const fieldsetCss = ":host{display:block;padding:6px;border:2px solid #F8F6F6;border-radius:0;position:relative;margin-bottom:8px}:host legend{background-color:#fff;position:relative;display:inline-block;font-weight:700;color:#CECBCB;left:0;padding:0 6px;top:-13px}";

const Fieldset = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, null, this.legend && index.h("legend", null, this.legend), index.h("sen-grid", null, index.h("slot", null))));
    }
};
Fieldset.style = fieldsetCss;

exports.sen_fieldset = Fieldset;
