import { Component, Element, Event, EventEmitter, Listen, State, h } from '@stencil/core';

import { ColorVariable } from '../color-variables';
import { convertCssToColors, generateColor, updateCssText } from '../parse-css';

@Component({
  tag: 'color-generator',
  styleUrl: 'color-generator.css',
  shadow: true
})
export class ColorGenerator {

  @Element() el!: HTMLElement;
  @Event() demoMessage!: EventEmitter;
  @State() colors: ColorVariable[] = [];
  @State() cssText = DEFAULT_CSS_TEXT;

  @Listen('colorChange')
  onColorChange(ev: any) {
    const colorProperty: string = ev.detail.property;
    const colorValue: string = ev.detail.value;
    const colorIndex = this.colors.findIndex(o => o.property === colorProperty);
    const color = this.colors[colorIndex];
    const genColor = generateColor(color.name, colorProperty, colorValue);

    this.colors[colorIndex] = genColor;
    this.colors = [...this.colors];

    const attrMap = {
      value: '',
      valueRgb: '-rgb',
      contrast: '-contrast',
      contrastRgb: '-contrast-rgb',
      shade: '-shade',
      tint: '-tint',
    };
    const keys = Object.keys(attrMap) as any as (keyof typeof attrMap)[];
    for (const key of keys) {
      this.cssText = updateCssText(colorProperty + attrMap[key], this.cssText, genColor[key]);
    }

    this.demoMessage.emit({ cssText: this.cssText });
  }

  @Listen('cssTextChange')
  onCssTextChange(ev: any) {
    this.cssText = ev.detail;
    const colors = convertCssToColors(this.cssText);

    if (colors.length > 0) {
      this.colors = colors;
      this.demoMessage.emit({ cssText: this.cssText });
    }
  }

  componentWillLoad() {
    this.colors = convertCssToColors(this.cssText);
  }

  componentDidLoad() {
    this.demoMessage.emit({
      cssText: this.cssText
    });
  }

  render() {
    return [
      <color-gen-select-colors colors={this.colors}></color-gen-select-colors>,
      <color-gen-css-text cssText={this.cssText}></color-gen-css-text>
    ];
  }

}

const DEFAULT_CSS_TEXT = `
:root {
  --sen-color-primary: #3880ff;
  --sen-color-primary-rgb: 56,128,255;
  --sen-color-primary-contrast: #ffffff;
  --sen-color-primary-contrast-rgb: 255,255,255;
  --sen-color-primary-shade: #3171e0;
  --sen-color-primary-tint: #4c8dff;

  --sen-color-secondary: #3dc2ff;
  --sen-color-secondary-rgb: 61,194,255;
  --sen-color-secondary-contrast: #ffffff;
  --sen-color-secondary-contrast-rgb: 255,255,255;
  --sen-color-secondary-shade: #36abe0;
  --sen-color-secondary-tint: #50c8ff;

  --sen-color-tertiary: #5260ff;
  --sen-color-tertiary-rgb: 82,96,255;
  --sen-color-tertiary-contrast: #ffffff;
  --sen-color-tertiary-contrast-rgb: 255,255,255;
  --sen-color-tertiary-shade: #4854e0;
  --sen-color-tertiary-tint: #6370ff;

  --sen-color-success: #2dd36f;
  --sen-color-success-rgb: 45,211,111;
  --sen-color-success-contrast: #ffffff;
  --sen-color-success-contrast-rgb: 255,255,255;
  --sen-color-success-shade: #28ba62;
  --sen-color-success-tint: #42d77d;

  --sen-color-warning: #ffc409;
  --sen-color-warning-rgb: 255,196,9;
  --sen-color-warning-contrast: #000000;
  --sen-color-warning-contrast-rgb: 0,0,0;
  --sen-color-warning-shade: #e0ac08;
  --sen-color-warning-tint: #ffca22;

  --sen-color-danger: #eb445a;
  --sen-color-danger-rgb: 235,68,90;
  --sen-color-danger-contrast: #ffffff;
  --sen-color-danger-contrast-rgb: 255,255,255;
  --sen-color-danger-shade: #cf3c4f;
  --sen-color-danger-tint: #ed576b;

  --sen-color-dark: #222428;
  --sen-color-dark-rgb: 34,36,40;
  --sen-color-dark-contrast: #ffffff;
  --sen-color-dark-contrast-rgb: 255,255,255;
  --sen-color-dark-shade: #1e2023;
  --sen-color-dark-tint: #383a3e;

  --sen-color-medium: #92949c;
  --sen-color-medium-rgb: 146,148,156;
  --sen-color-medium-contrast: #ffffff;
  --sen-color-medium-contrast-rgb: 255,255,255;
  --sen-color-medium-shade: #808289;
  --sen-color-medium-tint: #9d9fa6;

  --sen-color-light: #f4f5f8;
  --sen-color-light-rgb: 244,245,248;
  --sen-color-light-contrast: #000000;
  --sen-color-light-contrast-rgb: 0,0,0;
  --sen-color-light-shade: #d7d8da;
  --sen-color-light-tint: #f5f6f9;
}
`.trim();
