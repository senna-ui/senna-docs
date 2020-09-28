import { ComponentInterface } from "../../stencil-public-runtime";
import { TableHeaders } from "../../interface";
export declare class Table implements ComponentInterface {
    /**
     * Table headers
     */
    headers: TableHeaders;
    /**
     * Table data, array of table rows
     */
    data: any[];
    render(): any;
}
