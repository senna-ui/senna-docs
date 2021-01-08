import { Component, Host, h, Prop, Event, State, Watch } from "@stencil/core";
function getHighlightedText(text, highlight) {
  const parts = text.split(new RegExp(`(${highlight})`, "gi"));
  return (h("span", null, parts.map((part, i) => (h("span", { key: i, class: part.toLowerCase() === highlight.toLowerCase() ? "highlight" : "" }, part)))));
}
/**
 * @docsMenu { "group": "forms", "subGroup": "input" }
 */
export class Typeahead {
  constructor() {
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
      if (ev.key === "ArrowDown") {
        ev.preventDefault();
        this.selectedIndex = Math.min(this.matchedOptions.length - 1, this.selectedIndex + 1);
      }
      else if (ev.key === "ArrowUp") {
        ev.preventDefault();
        this.selectedIndex = Math.max(-1, this.selectedIndex - 1);
      }
    };
    this.handleKeyboardSelect = (ev) => {
      if (ev.key === "Enter" && this.selectedIndex > -1) {
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
    this.matchedOptions = !this.value
      ? []
      : this.options.filter((o) => o.label.toLowerCase().includes(this.value.toLowerCase()));
  }
  render() {
    return (h(Host, null,
      h("div", { class: "typeahead", onKeyDown: this.handleKeyboardSelect },
        h("sen-input", { onFocus: this.handleFocus, onKeyDown: this.handleKeyDown, value: this.value, onSenInput: this.onInput }),
        this.open && (h("ul", { class: "typeahead__options" }, this.matchedOptions.map((option, index) => (h("li", { class: index === this.selectedIndex ? "selected" : "" },
          h("a", { onClick: () => this.onSelectOption(option) }, getHighlightedText(option.label, this.value))))))))));
  }
  static get is() { return "sen-typeahead"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["typeahead.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["typeahead.css"]
  }; }
  static get properties() { return {
    "options": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "TypeaheadOption[]",
        "resolved": "TypeaheadOption[]",
        "references": {
          "TypeaheadOption": {
            "location": "import",
            "path": "../../interface"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Options to display in typeahead"
      },
      "defaultValue": "[]"
    },
    "value": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The value of the input."
      },
      "attribute": "value",
      "reflect": true,
      "defaultValue": "\"\""
    }
  }; }
  static get states() { return {
    "selectedIndex": {},
    "matchedOptions": {},
    "open": {}
  }; }
  static get events() { return [{
      "method": "senInput",
      "name": "senInput",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted when a keyboard input occurred."
      },
      "complexType": {
        "original": "KeyboardEvent",
        "resolved": "KeyboardEvent",
        "references": {
          "KeyboardEvent": {
            "location": "global"
          }
        }
      }
    }, {
      "method": "senChange",
      "name": "senChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted when input is changed"
      },
      "complexType": {
        "original": "OptionSelectedEvent",
        "resolved": "OptionSelectedEvent",
        "references": {
          "OptionSelectedEvent": {
            "location": "import",
            "path": "../../interface"
          }
        }
      }
    }]; }
  static get watchers() { return [{
      "propName": "value",
      "methodName": "watchHandler"
    }]; }
}
