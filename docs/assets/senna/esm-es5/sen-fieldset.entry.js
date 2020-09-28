import { r as registerInstance, h, H as Host } from './index-60bacf88.js';
var fieldsetCss = ":host{display:block;padding:6px;border:2px solid #F8F6F6;border-radius:0;position:relative;margin-bottom:8px}:host legend{background-color:#fff;position:relative;display:inline-block;font-weight:700;color:#CECBCB;left:0;padding:0 6px;top:-13px}";
var Fieldset = /** @class */ (function () {
    function Fieldset(hostRef) {
        registerInstance(this, hostRef);
    }
    Fieldset.prototype.render = function () {
        return (h(Host, null, this.legend && h("legend", null, this.legend), h("sen-grid", null, h("slot", null))));
    };
    return Fieldset;
}());
Fieldset.style = fieldsetCss;
export { Fieldset as sen_fieldset };
