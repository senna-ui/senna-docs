import { r as registerInstance, h, H as Host, g as getElement } from './index-60bacf88.js';
var appCss = ":host{font-family:var(--sen-font-family, \"Source Sans Pro\", Helvetica, sans-serif);font-size:13px;color:#211010}";
var App = /** @class */ (function () {
    function App(hostRef) {
        registerInstance(this, hostRef);
    }
    App.prototype.componentWillLoad = function () {
        console.log("el", this.el.shadowRoot);
    };
    App.prototype.render = function () {
        return (h(Host, null, h("slot", null)));
    };
    Object.defineProperty(App.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return App;
}());
App.style = appCss;
var buttonCss = ":host{display:inline-block;--border-left-radius:3px;--border-right-radius:3px}:host button{color:#fff;background:#ea3c20;border-radius:3px;border-width:0;padding:4px 8px;font-size:13px;font-family:var(--sen-font-family, \"Source Sans Pro\", Helvetica, sans-serif);border-top-left-radius:var(--border-left-radius);border-bottom-left-radius:var(--border-left-radius);border-top-right-radius:var(--border-right-radius);border-bottom-right-radius:var(--border-right-radius)}:host button.btn-secondary{background:#6C6A6A}:host button.btn-warning{background:#ffc107}:host button.btn-danger{background:#ea3c20}:host.btn-secondary{background:#6C6A6A}";
var Button = /** @class */ (function () {
    function Button(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Button type
         */
        this.buttonType = "button";
        /**
         * Disables the button
         */
        this.disabled = false;
    }
    Button.prototype.render = function () {
        var _a;
        var classes = (_a = {
                btn: true
            },
            _a["btn-" + this.color] = true,
            _a);
        return (h(Host, null, h("button", { class: classes, type: this.buttonType, disabled: this.disabled }, h("slot", null))));
    };
    return Button;
}());
Button.style = buttonCss;
export { App as sen_app, Button as sen_button };
