import { Component, Host, h } from "@stencil/core";
import { users } from "../../../utils/mockdata/users";
const tableHeaders = [
  { value: "Id", key: "id" },
  { value: "First Name", key: "first_name" },
  { value: "Last Name", key: "last_name" },
  { value: "Email", key: "email" },
  { value: "Gender", key: "gender" },
  { value: "IP", key: "ip_address", textAlign: "right" },
];
export class DemoTable {
  render() {
    return (h(Host, null,
      h("sen-data-table", { headers: tableHeaders, data: users })));
  }
  static get is() { return "demo-table"; }
  static get encapsulation() { return "shadow"; }
}
