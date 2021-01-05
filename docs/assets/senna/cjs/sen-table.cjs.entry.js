'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6de7b0c3.js');

const tableCss = "table{background:transparent;border:var(--sen-table-border-width, 0) solid var(--sen-table-border-color, #DEDCDC);border-spacing:0}th,td{text-align:left;padding:var(--sen-table-cell-padding-y, 0.4rem) var(--sen-table-cell-padding-x, 0.6rem)}th{background:var(--sen-table-header-bg, #F8F6F6)}tr:hover{background:var(--sen-table-row-active-bg, #E9E6E6)}";

const Table = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * Table headers
     */
    this.headers = [];
    /**
     * Table data, array of table rows
     */
    this.data = [];
  }
  render() {
    return (index.h(index.Host, null, index.h("table", { class: "table" }, index.h("thead", null, this.headers.map((header) => (index.h("th", { style: { textAlign: header.textAlign } }, header.value)))), index.h("tbody", null, this.data.map((row) => (index.h("tr", null, this.headers.map((header) => (index.h("td", { style: { textAlign: row[header.key].textAlign || header.textAlign } }, row[header.key]))))))))));
  }
};
Table.style = tableCss;

exports.sen_table = Table;
