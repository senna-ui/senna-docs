import { r as registerInstance, f as forceUpdate, h, H as Host } from './index-60bacf88.js';
var SIZE_TO_MEDIA = {
    'xs': '(min-width: 0px)',
    'sm': '(min-width: 576px)',
    'md': '(min-width: 768px)',
    'lg': '(min-width: 992px)',
    'xl': '(min-width: 1200px)',
};
// Check if the window matches the media query
// at the breakpoint passed
// e.g. matchBreakpoint('sm') => true if screen width exceeds 576px
var matchBreakpoint = function (breakpoint) {
    if (breakpoint === undefined || breakpoint === '') {
        return true;
    }
    if (window.matchMedia) {
        var mediaQuery = SIZE_TO_MEDIA[breakpoint];
        return window.matchMedia(mediaQuery).matches;
    }
    return false;
};
var colCss = ":host{padding-left:var(--sen-grid-column-padding-xs, 5px);padding-right:var(--sen-grid-column-padding-xs, 5px);padding-top:var(--sen-grid-column-padding-xs, 5px);padding-bottom:var(--sen-grid-column-padding-xs, 5px);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;width:100%;max-width:100%;min-height:1px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--sen-grid-column-padding-xs, 5px);padding-inline-start:var(--sen-grid-column-padding-xs, 5px);-webkit-padding-end:var(--sen-grid-column-padding-xs, 5px);padding-inline-end:var(--sen-grid-column-padding-xs, 5px)}}@media (min-width: 576px){:host{padding-left:var(--sen-grid-column-padding-sm, 5px);padding-right:var(--sen-grid-column-padding-sm, 5px);padding-top:var(--sen-grid-column-padding-sm, 5px);padding-bottom:var(--sen-grid-column-padding-sm, 5px)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--sen-grid-column-padding-sm, 5px);padding-inline-start:var(--sen-grid-column-padding-sm, 5px);-webkit-padding-end:var(--sen-grid-column-padding-sm, 5px);padding-inline-end:var(--sen-grid-column-padding-sm, 5px)}}}@media (min-width: 768px){:host{padding-left:var(--sen-grid-column-padding-md, 5px);padding-right:var(--sen-grid-column-padding-md, 5px);padding-top:var(--sen-grid-column-padding-md, 5px);padding-bottom:var(--sen-grid-column-padding-md, 5px)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--sen-grid-column-padding-md, 5px);padding-inline-start:var(--sen-grid-column-padding-md, 5px);-webkit-padding-end:var(--sen-grid-column-padding-md, 5px);padding-inline-end:var(--sen-grid-column-padding-md, 5px)}}}@media (min-width: 992px){:host{padding-left:var(--sen-grid-column-padding-lg, 5px);padding-right:var(--sen-grid-column-padding-lg, 5px);padding-top:var(--sen-grid-column-padding-lg, 5px);padding-bottom:var(--sen-grid-column-padding-lg, 5px)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--sen-grid-column-padding-lg, 5px);padding-inline-start:var(--sen-grid-column-padding-lg, 5px);-webkit-padding-end:var(--sen-grid-column-padding-lg, 5px);padding-inline-end:var(--sen-grid-column-padding-lg, 5px)}}}@media (min-width: 1200px){:host{padding-left:var(--sen-grid-column-padding-xl, 5px);padding-right:var(--sen-grid-column-padding-xl, 5px);padding-top:var(--sen-grid-column-padding-xl, 5px);padding-bottom:var(--sen-grid-column-padding-xl, 5px)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--sen-grid-column-padding-xl, 5px);padding-inline-start:var(--sen-grid-column-padding-xl, 5px);-webkit-padding-end:var(--sen-grid-column-padding-xl, 5px);padding-inline-end:var(--sen-grid-column-padding-xl, 5px)}}}";
var win = window;
var SUPPORTS_VARS = !!(win.CSS &&
    win.CSS.supports &&
    win.CSS.supports("--a: 0"));
var BREAKPOINTS = ["", "xs", "sm", "md", "lg", "xl"];
var Col = /** @class */ (function () {
    function Col(hostRef) {
        registerInstance(this, hostRef);
    }
    Col.prototype.onResize = function () {
        forceUpdate(this);
    };
    // Loop through all of the breakpoints to see if the media query
    // matches and grab the column value from the relevant prop if so
    Col.prototype.getColumns = function (property) {
        var matched;
        for (var _i = 0, BREAKPOINTS_1 = BREAKPOINTS; _i < BREAKPOINTS_1.length; _i++) {
            var breakpoint = BREAKPOINTS_1[_i];
            var matches = matchBreakpoint(breakpoint);
            // Grab the value of the property, if it exists and our
            // media query matches we return the value
            var columns = this[property + breakpoint.charAt(0).toUpperCase() + breakpoint.slice(1)];
            if (matches && columns !== undefined) {
                matched = columns;
            }
        }
        // Return the last matched columns since the breakpoints
        // increase in size and we want to return the largest match
        return matched;
    };
    Col.prototype.calculateSize = function () {
        var columns = this.getColumns("size");
        // If size wasn't set for any breakpoint
        // or if the user set the size without a value
        // it means we need to stick with the default and return
        // e.g. <ion-col size-md>
        if (!columns || columns === "") {
            return;
        }
        // If the size is set to auto then don't calculate a size
        var colSize = columns === "auto"
            ? "auto"
            : // If CSS supports variables we should use the grid columns var
                SUPPORTS_VARS
                    ? "calc(calc(" + columns + " / var(--sen-grid-columns, 12)) * 100%)"
                    : // Convert the columns to a percentage by dividing by the total number
                        // of columns (12) and then multiplying by 100
                        (columns / 12) * 100 + "%";
        return {
            flex: "0 0 " + colSize,
            width: "" + colSize,
            "max-width": "" + colSize,
        };
    };
    // Called by push, pull, and offset since they use the same calculations
    Col.prototype.calculatePosition = function (property, modifier) {
        var _a;
        var columns = this.getColumns(property);
        if (!columns) {
            return;
        }
        // If the number of columns passed are greater than 0 and less than
        // 12 we can position the column, else default to auto
        var amount = SUPPORTS_VARS
            ? // If CSS supports variables we should use the grid columns var
                "calc(calc(" + columns + " / var(--sen-grid-columns, 12)) * 100%)"
            : // Convert the columns to a percentage by dividing by the total number
                // of columns (12) and then multiplying by 100
                columns > 0 && columns < 12
                    ? (columns / 12) * 100 + "%"
                    : "auto";
        return _a = {},
            _a[modifier] = amount,
            _a;
    };
    Col.prototype.calculateOffset = function (isRTL) {
        return this.calculatePosition("offset", isRTL ? "margin-right" : "margin-left");
    };
    Col.prototype.calculatePull = function (isRTL) {
        return this.calculatePosition("pull", isRTL ? "left" : "right");
    };
    Col.prototype.calculatePush = function (isRTL) {
        return this.calculatePosition("push", isRTL ? "right" : "left");
    };
    Col.prototype.render = function () {
        var isRTL = document.dir === "rtl";
        return (h(Host, { style: Object.assign(Object.assign(Object.assign(Object.assign({}, this.calculateOffset(isRTL)), this.calculatePull(isRTL)), this.calculatePush(isRTL)), this.calculateSize()) }, h("slot", null)));
    };
    return Col;
}());
Col.style = colCss;
var rowCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}";
var Row = /** @class */ (function () {
    function Row(hostRef) {
        registerInstance(this, hostRef);
    }
    Row.prototype.render = function () {
        return (h(Host, null, h("slot", null)));
    };
    return Row;
}());
Row.style = rowCss;
export { Col as sen_col, Row as sen_row };
