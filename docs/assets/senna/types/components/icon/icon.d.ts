import type { ComponentInterface } from "../../stencil-public-runtime";
/**
 * @docsCodePen { "user": "senna-ui", "id": "KKgZgNj" }
 * @docsMenu { "group": "icons" }
 */
export declare class Icon implements ComponentInterface {
  /**
   * Icon to display.
   */
  name: string;
  /**
   * The color to use for the background of the icon.
   */
  color?: string;
  /**
   * When set to `false`, SVG content that is HTTP fetched will not be checked
   * if the response SVG content has any `<script>` elements, or any attributes
   * that start with `on`, such as `onclick`.
   * @default true
   */
  sanitize: boolean;
  private svgContent?;
  componentWillRender(): void;
  loadIcon(): void;
  render(): any;
}
