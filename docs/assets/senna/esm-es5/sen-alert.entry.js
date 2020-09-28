import { r as registerInstance, h, H as Host, g as getElement } from './index-60bacf88.js';
var alertCss = ":host{display:block;padding:8px;border:2px solid transparent;margin-bottom:8px}:host .alert-title{font-weight:700;margin-bottom:4px}:host(.alert-primary){background:#f9cbc3}:host(.alert-secondary){background:#c5c4c4}:host(.alert-success){background:#9be7ac}:host(.alert-info){background:#90e4f1}:host(.alert-warning){background:#ffeeba}:host(.alert-danger){background:#f9cbc3}:host(.alert-light){background:white}:host(.alert-dark){background:#908787}";
var Alert = /** @class */ (function () {
    function Alert(hostRef) {
        registerInstance(this, hostRef);
        this.hasTitleSlot = false;
    }
    Alert.prototype.componentWillLoad = function () {
        this.hasTitleSlot = !!this.el.querySelector('[slot="title"]');
    };
    Alert.prototype.render = function () {
        var _a;
        var classes = (_a = {},
            _a["alert-" + this.color] = true,
            _a);
        return (h(Host, { class: classes }, this.hasTitleSlot && (h("div", { class: "alert-title" }, h("slot", { name: "title" }))), h("slot", null)));
    };
    Object.defineProperty(Alert.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return Alert;
}());
Alert.style = alertCss;
export { Alert as sen_alert };
