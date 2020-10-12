'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-77ed5089.js');

const typeaheadCss = ":host{background:var(--sen-typeahead-bg, #494444);position:relative;display:block}ul,li{padding:0;margin:0}ul{border:1px solid #E9E6E6}li{list-style-type:none}a{display:block;padding:4px 8px;background-color:var(--sen-select-item-bg, #fff);color:var(--sen-select-item-color, #211010)}.highlight{font-weight:var(--sen-highlight-font-weight, 700);color:var(--sen-hightlight-color, #3B5F97)}.selected a{background:#dfe6f2}";

function getHighlightedText(text, highlight) {
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
  return index.h("span", null, " ", parts.map((part, i) => index.h("span", { key: i, class: part.toLowerCase() === highlight.toLowerCase() ? 'highlight' : '' }, part)), " ");
}
const Typeahead = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.senInput = index.createEvent(this, "senInput", 7);
    this.senChange = index.createEvent(this, "senChange", 7);
    /**
     * Options to display in typeahead
     */
    this.options = [];
    /**
     * The value of the input.
     */
    this.value = "";
    this.selectedIndex = -1;
    this.matchedOptions = [];
    this.open = false;
    this.onInput = (ev) => {
      const input = ev.target;
      if (input) {
        this.value = input.value || "";
        this.open = true;
      }
      else {
        this.open = false;
      }
      this.senInput.emit(ev);
    };
    this.onSelectOption = (option) => {
      this.senChange.emit({ option });
      this.value = option.label;
      this.open = false;
    };
    this.handleKeyDown = (ev) => {
      if (ev.key === 'ArrowDown') {
        ev.preventDefault();
        this.selectedIndex = Math.min(this.matchedOptions.length - 1, this.selectedIndex + 1);
      }
      else if (ev.key === "ArrowUp") {
        ev.preventDefault();
        this.selectedIndex = Math.max(-1, this.selectedIndex - 1);
      }
    };
    this.handleKeyboardSelect = (ev) => {
      if (ev.key === 'Enter' && this.selectedIndex > -1) {
        ev.preventDefault();
        const option = this.matchedOptions[this.selectedIndex];
        this.onSelectOption(option);
      }
    };
    this.handleFocus = () => {
      this.selectedIndex = -1;
    };
  }
  watchHandler() {
    this.matchedOptions = !Boolean(this.value) ? [] : this.options.filter(o => o.label.toLowerCase().includes(this.value.toLowerCase()));
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "typeahead", onKeyDown: this.handleKeyboardSelect }, index.h("sen-input", { onFocus: this.handleFocus, onKeyDown: this.handleKeyDown, value: this.value, onSenInput: this.onInput }), this.open && index.h("ul", { class: "typeahead__options" }, this.matchedOptions.map((option, index$1) => (index.h("li", { class: index$1 === this.selectedIndex ? 'selected' : '' }, index.h("a", { onClick: () => this.onSelectOption(option) }, getHighlightedText(option.label, this.value)))))))));
  }
  static get watchers() { return {
    "value": ["watchHandler"]
  }; }
};
Typeahead.style = typeaheadCss;

exports.sen_typeahead = Typeahead;
