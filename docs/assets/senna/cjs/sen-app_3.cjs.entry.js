'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6de7b0c3.js');

const appCss = ":host{font-family:var(--sen-font-family, \"Source Sans Pro\", Helvetica, sans-serif);font-size:13px;color:#211010}";

const App = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
  get el() { return index.getElement(this); }
};
App.style = appCss;

const buttonCss = ":host{display:inline-block;--border-left-radius:3px;--border-right-radius:3px}:host button{color:#fff;background:var(--btn-primary-bg, #3B5F97);border-radius:3px;border-width:0;font-size:13px;font-family:var(--sen-font-family, \"Source Sans Pro\", Helvetica, sans-serif);border-top-left-radius:var(--border-left-radius);border-bottom-left-radius:var(--border-left-radius);border-top-right-radius:var(--border-right-radius);border-bottom-right-radius:var(--border-right-radius);cursor:pointer;min-height:24px;position:relative}:host button[disabled]{opacity:0.4}:host button span{display:flex;align-items:center}:host .btn-primary{background:#3B5F97}:host .btn-secondary{background:#6C6A6A}:host .btn-success{background:#28a745}:host .btn-warning{background:#ffc107}:host .btn-danger{background:#ea3c20}:host .btn-info{background:#17a2b8}:host .btn-icon{padding-left:26px}:host sen-icon{position:absolute;left:6px}";

const Button = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * Button type
     */
    this.buttonType = "button";
    /**
     * Disables the button
     */
    this.disabled = false;
  }
  render() {
    const classes = {
      btn: true,
      'btn-icon': !!this.icon,
      [`btn-${this.color || 'secondary'}`]: true,
    };
    return (index.h(index.Host, null, index.h("button", { class: classes, type: this.buttonType, disabled: this.disabled }, index.h("span", null, this.icon && index.h("sen-icon", { name: this.icon }), index.h("slot", null)))));
  }
};
Button.style = buttonCss;

const getUrl = (iconName) => {
  iconName = iconName.toLowerCase();
  // only allow alpha characters and dash
  const invalidChars = iconName.replace(/[a-z]|_|\d/gi, "");
  if (invalidChars !== "") {
    throw new Error("Invalid characeters in icon name: " + iconName);
  }
  return index.getAssetPath(`svg/ic_${iconName}_24px.svg`);
};
const isStr = (val) => typeof val === "string";

const validateContent = (svgContent) => {
  const div = document.createElement('div');
  div.innerHTML = svgContent;
  // setup this way to ensure it works on our buddy IE
  for (let i = div.childNodes.length - 1; i >= 0; i--) {
    if (div.childNodes[i].nodeName.toLowerCase() !== 'svg') {
      div.removeChild(div.childNodes[i]);
    }
  }
  // must only have 1 root element
  const svgElm = div.firstElementChild;
  if (svgElm && svgElm.nodeName.toLowerCase() === 'svg') {
    const svgClass = svgElm.getAttribute('class') || '';
    svgElm.setAttribute('class', (svgClass + ' s-sen-icon').trim());
    // root element must be an svg
    // lets double check we've got valid elements
    // do not allow scripts
    if (isValid(svgElm)) {
      return div.innerHTML;
    }
  }
  return '';
};
const isValid = (elm) => {
  if (elm.nodeType === 1) {
    if (elm.nodeName.toLowerCase() === 'script') {
      return false;
    }
    for (let i = 0; i < elm.attributes.length; i++) {
      const val = elm.attributes[i].value;
      if (isStr(val) && val.toLowerCase().indexOf('on') === 0) {
        return false;
      }
    }
    for (let i = 0; i < elm.childNodes.length; i++) {
      if (!isValid(elm.childNodes[i])) {
        return false;
      }
    }
  }
  return true;
};

const senIconContent = new Map();
const requests = new Map();
const getSvgContent = (url, sanitize) => {
  // see if we already have a request for this url
  let req = requests.get(url);
  if (!Boolean(req)) {
    if (typeof fetch !== 'undefined' && typeof document !== 'undefined') {
      // we don't already have a request
      req = fetch(url).then((rsp) => {
        if (rsp.ok) {
          return rsp.text().then((svgContent) => {
            if (Boolean(svgContent) && sanitize !== false) {
              svgContent = validateContent(svgContent);
            }
            senIconContent.set(url, svgContent || '');
          });
        }
        senIconContent.set(url, '');
        return null;
      });
      // cache for the same requests
      requests.set(url, req);
      return req;
    }
    else {
      // set to empty for ssr scenarios and resolve promise
      senIconContent.set(url, '');
      return Promise.resolve();
    }
  }
  return req || Promise.resolve();
};

const iconCss = ":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;box-sizing:content-box !important;font-size:16px;vertical-align:middle}:host .sen-icon{stroke:currentColor}.sen-icon-fill-none{fill:none}.sen-icon-stroke-width{stroke-width:32px;stroke-width:var(--sen-icon-stroke-width, 32px)}.icon-inner,.sen-icon,svg{display:block;height:100%;width:100%}:host(.icon-small){font-size:18px !important}:host(.icon-large){font-size:32px !important}:host(.sen-color){color:var(--sen-color-base) !important}:host(.sen-color-primary){--sen-color-base:var(--sen-color-primary, #3880ff)}:host(.sen-color-secondary){--sen-color-base:var(--sen-color-secondary, #0cd1e8)}:host(.sen-color-tertiary){--sen-color-base:var(--sen-color-tertiary, #f4a942)}:host(.sen-color-success){--sen-color-base:var(--sen-color-success, #10dc60)}:host(.sen-color-warning){--sen-color-base:var(--sen-color-warning, #ffce00)}:host(.sen-color-danger){--sen-color-base:var(--sen-color-danger, #f14141)}:host(.sen-color-light){--sen-color-base:var(--sen-color-light, #f4f5f8)}:host(.sen-color-medium){--sen-color-base:var(--sen-color-medium, #989aa2)}:host(.sen-color-dark){--sen-color-base:var(--sen-color-dark, #222428)}";

const Icon = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * Icon to display.
     */
    this.name = "";
    /**
     * When set to `false`, SVG content that is HTTP fetched will not be checked
     * if the response SVG content has any `<script>` elements, or any attributes
     * that start with `on`, such as `onclick`.
     * @default true
     */
    this.sanitize = true;
  }
  ;
  componentWillRender() {
    this.loadIcon();
  }
  loadIcon() {
    const url = getUrl(this.name);
    if (!url)
      return;
    if (senIconContent.has(url)) {
      // sync if it's already loaded
      this.svgContent = senIconContent.get(url);
    }
    else {
      // async if it hasn't been loaded
      getSvgContent(url, this.sanitize).then(() => (this.svgContent = senIconContent.get(url)));
    }
  }
  render() {
    return (index.h(index.Host, { role: "img", class: Object.assign({ "sen-icon": true }, createColorClasses(this.color)) }, index.h("div", { class: "icon-inner", innerHTML: this.svgContent })));
  }
  static get assetsDirs() { return ["svg"]; }
  static get watchers() { return {
    "name": ["loadIcon"]
  }; }
};
const createColorClasses = (color) => {
  return color
    ? {
      'ion-color': true,
      [`ion-color-${color}`]: true,
    }
    : null;
};
Icon.style = iconCss;

exports.sen_app = App;
exports.sen_button = Button;
exports.sen_icon = Icon;
