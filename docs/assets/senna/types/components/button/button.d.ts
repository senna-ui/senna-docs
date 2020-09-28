import { ComponentInterface } from "../../stencil-public-runtime";
import { Color } from "../../interface";
export declare class Button implements ComponentInterface {
    /**
     * Button type
     */
    buttonType: "button" | "submit" | "reset";
    /**
     * Button variant
     */
    color?: Color;
    /**
     * Disables the button
     */
    disabled: boolean;
    render(): any;
}
