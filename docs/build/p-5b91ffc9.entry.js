import{r as o,h as e,g as r}from"./p-2bb7e3b8.js";import"./p-7f4bf43e.js";import{g as n}from"./p-21bfeb37.js";class c{constructor(e){o(this,e),this.cssText=s,this.name="New",this.value="#69bb7b"}onNameChange(o){this.name=o.detail.name,this.updateCssText()}onColorChange(o){this.value=o.detail.value,this.updateCssText()}updateCssText(){const o=this.name.toLowerCase(),e=".sen-color-"+o,r=n(o,e,this.value);this.cssText=`:root {\n  --sen-color-${o}: <code-color mode="md" value="${r.value}"></code-color>;\n  --sen-color-${o}-rgb: <code-color mode="md" value="${r.value}" display="${r.valueRgb}"></code-color>;\n  --sen-color-${o}-contrast: <code-color mode="md" value="${r.contrast}"></code-color>;\n  --sen-color-${o}-contrast-rgb: <code-color mode="md" value="${r.contrast}" display="${r.contrastRgb}"></code-color>;\n  --sen-color-${o}-shade: <code-color mode="md" value="${r.shade}"></code-color>;\n  --sen-color-${o}-tint: <code-color mode="md" value="${r.tint}"></code-color>;\n}\n\n${e} {\n  --sen-color-base: var(--sen-color-${o});\n  --sen-color-base-rgb: var(--sen-color-${o}-rgb);\n  --sen-color-contrast: var(--sen-color-${o}-contrast);\n  --sen-color-contrast-rgb: var(--sen-color-${o}-contrast-rgb);\n  --sen-color-shade: var(--sen-color-${o}-shade);\n  --sen-color-tint: var(--sen-color-${o}-tint);\n}\n`}onCssTextChange(o){this.cssText=o.detail}render(){return[e("color-gen-variable-selector",{id:"base","is-new":"true",name:this.name,value:this.value}),e("color-gen-css-text",{header:!1,cssText:this.cssText})]}get el(){return r(this)}}const s='\n:root {\n  --sen-color-new: <code-color mode="md" value="#69bb7b"></code-color>;\n  --sen-color-new-rgb: <code-color mode="md" value="#69bb7b" display="105,187,123"></code-color>;\n  --sen-color-new-contrast: <code-color mode="md" value="#ffffff"></code-color>;\n  --sen-color-new-contrast-rgb: <code-color mode="md" value="#ffffff" display="255,255,255"></code-color>;\n  --sen-color-new-shade: <code-color mode="md" value="#5ca56c"></code-color>;\n  --sen-color-new-tint: <code-color mode="md" value="#78c288"></code-color>;\n}\n\n.sen-color-new {\n  --sen-color-base: var(--sen-color-new);\n  --sen-color-base-rgb: var(--sen-color-new-rgb);\n  --sen-color-contrast: var(--sen-color-new-contrast);\n  --sen-color-contrast-rgb: var(--sen-color-new-contrast-rgb);\n  --sen-color-shade: var(--sen-color-new-shade);\n  --sen-color-tint: var(--sen-color-new-tint);\n}\n'.trim();c.style="color-gen-variable-selector{display:block;width:100%;margin:0 0 20px 0;border:0;-webkit-box-shadow:0 4px 6px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.08);box-shadow:0 4px 6px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.08);border-radius:4px}color-gen-css-text .css-text__code{margin-top:0;height:430px}color-gen-css-text code-color code{background:transparent;color:inherit;margin:0 0 0 6px;padding:0}new-color-generator .new-color-header h3{margin-bottom:1.5em}";export{c as new_color_generator}