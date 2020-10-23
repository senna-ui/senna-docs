import { Component, Element, Listen, State, h } from '@stencil/core';

import { generateColor } from '../color-gen/parse-css';

@Component({
  tag: 'new-color-generator',
  styleUrl: 'new-color-generator.css',
})
export class ColorGenerator {
  @State() cssText = DEFAULT_CSS_TEXT;

  @State() name = 'New';
  @State() value = '#69bb7b';

  @Element() el!: HTMLElement;

  @Listen('nameChange')
  onNameChange(ev: any) {
    this.name = ev.detail.name;
    this.updateCssText();
  }

  @Listen('colorChange')
  onColorChange(ev: any) {
    this.value = ev.detail.value;
    this.updateCssText();
  }

  updateCssText() {
    const name = this.name.toLowerCase();
    const value = this.value;
    const selector = `.sen-color-${name}`;

    const color = generateColor(name, selector, value);

    this.cssText = `:root {
  --sen-color-${name}: <code-color mode="md" value="${color.value}"></code-color>;
  --sen-color-${name}-rgb: <code-color mode="md" value="${color.value}" display="${color.valueRgb}"></code-color>;
  --sen-color-${name}-contrast: <code-color mode="md" value="${color.contrast}"></code-color>;
  --sen-color-${name}-contrast-rgb: <code-color mode="md" value="${color.contrast}" display="${color.contrastRgb}"></code-color>;
  --sen-color-${name}-shade: <code-color mode="md" value="${color.shade}"></code-color>;
  --sen-color-${name}-tint: <code-color mode="md" value="${color.tint}"></code-color>;
}

${selector} {
  --sen-color-base: var(--sen-color-${name});
  --sen-color-base-rgb: var(--sen-color-${name}-rgb);
  --sen-color-contrast: var(--sen-color-${name}-contrast);
  --sen-color-contrast-rgb: var(--sen-color-${name}-contrast-rgb);
  --sen-color-shade: var(--sen-color-${name}-shade);
  --sen-color-tint: var(--sen-color-${name}-tint);
}
`;
  }

  @Listen('cssTextChange')
  onCssTextChange(ev: any) {
    this.cssText = ev.detail;
  }

  render() {
    return [
      <color-gen-variable-selector
        id="base"
        is-new="true"
        name={this.name}
        value={this.value}
      ></color-gen-variable-selector>,
      <color-gen-css-text header={false} cssText={this.cssText}></color-gen-css-text>,
    ];
  }
}

const DEFAULT_CSS_TEXT = `
:root {
  --sen-color-new: <code-color mode="md" value="#69bb7b"></code-color>;
  --sen-color-new-rgb: <code-color mode="md" value="#69bb7b" display="105,187,123"></code-color>;
  --sen-color-new-contrast: <code-color mode="md" value="#ffffff"></code-color>;
  --sen-color-new-contrast-rgb: <code-color mode="md" value="#ffffff" display="255,255,255"></code-color>;
  --sen-color-new-shade: <code-color mode="md" value="#5ca56c"></code-color>;
  --sen-color-new-tint: <code-color mode="md" value="#78c288"></code-color>;
}

.sen-color-new {
  --sen-color-base: var(--sen-color-new);
  --sen-color-base-rgb: var(--sen-color-new-rgb);
  --sen-color-contrast: var(--sen-color-new-contrast);
  --sen-color-contrast-rgb: var(--sen-color-new-contrast-rgb);
  --sen-color-shade: var(--sen-color-new-shade);
  --sen-color-tint: var(--sen-color-new-tint);
}
`.trim();
