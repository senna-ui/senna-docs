import { ComponentInterface } from "../../stencil-public-runtime";
import { FontWeight, TextAlign, TextTag, TextTransform } from "../../interface";
/**
 * Text typography component
 */
export declare class Text implements ComponentInterface {
  /**
   * Element Tag
   */
  tag: TextTag;
  /**
   * Font weight
   */
  weight: FontWeight;
  /**
   * [Text align](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)
   */
  align: TextAlign | "justify";
  /**
   * [Leter spacing](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing)
   */
  letterSpacing: string;
  /**
   * [Text transform](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform)
   */
  textTransform: TextTransform;
  render(): any;
}
