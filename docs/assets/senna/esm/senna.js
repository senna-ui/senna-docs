import { p as promiseResolve, b as bootstrapLazy } from './index-7505fb17.js';

/*
 Stencil Client Patch Browser v2.3.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts =  {};
    if ( importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["sen-menu",[[1,"sen-menu",{"items":[16]}]]],["sen-typeahead",[[1,"sen-typeahead",{"options":[16],"value":[1537],"selectedIndex":[32],"matchedOptions":[32],"open":[32]}]]],["sen-alert",[[1,"sen-alert",{"color":[1]}]]],["sen-button-group",[[1,"sen-button-group"]]],["sen-card",[[1,"sen-card"]]],["sen-card-actions",[[1,"sen-card-actions"]]],["sen-card-body",[[1,"sen-card-body"]]],["sen-card-title",[[1,"sen-card-title"]]],["sen-text",[[1,"sen-text",{"tag":[1],"weight":[1],"align":[1],"letterSpacing":[1,"letter-spacing"],"textTransform":[1,"text-transform"]}]]],["sen-menu-item",[[1,"sen-menu-item",{"value":[8],"active":[4]}]]],["demo-form_20",[[1,"demo-form"],[1,"demo-table"],[1,"sen-app"],[1,"sen-data-table",{"headers":[16],"data":[16]}],[1,"sen-form-field",{"label":[1]}],[1,"sen-button",{"type":[1],"color":[1],"disabled":[516],"icon":[1]}],[1,"sen-fieldset",{"legend":[1]}],[6,"sen-checkbox",{"disabled":[4],"label":[1],"name":[1],"readonly":[4],"value":[1540],"hasFocus":[32],"setFocus":[64]}],[6,"sen-radio",{"disabled":[4],"label":[1],"name":[1],"readonly":[4],"value":[1544],"options":[16],"hasFocus":[32],"setFocus":[64]}],[2,"sen-select",{"disabled":[4],"label":[1],"name":[1],"readonly":[4],"required":[4],"emptyLabel":[1,"empty-label"],"value":[1544],"options":[16],"hasFocus":[32],"setFocus":[64]}],[1,"sen-col",{"offset":[1],"offsetXs":[1,"offset-xs"],"offsetSm":[1,"offset-sm"],"offsetMd":[1,"offset-md"],"offsetLg":[1,"offset-lg"],"offsetXl":[1,"offset-xl"],"pull":[1],"pullXs":[1,"pull-xs"],"pullSm":[1,"pull-sm"],"pullMd":[1,"pull-md"],"pullLg":[1,"pull-lg"],"pullXl":[1,"pull-xl"],"push":[1],"pushXs":[1,"push-xs"],"pushSm":[1,"push-sm"],"pushMd":[1,"push-md"],"pushLg":[1,"push-lg"],"pushXl":[1,"push-xl"],"size":[1],"sizeXs":[1,"size-xs"],"sizeSm":[1,"size-sm"],"sizeMd":[1,"size-md"],"sizeLg":[1,"size-lg"],"sizeXl":[1,"size-xl"]},[[9,"resize","onResize"]]],[1,"sen-grid",{"fixed":[4]}],[1,"sen-icon",{"name":[1],"color":[1],"sanitize":[4],"svgContent":[32]}],[2,"sen-input",{"color":[1],"accept":[1],"autocapitalize":[1],"autocomplete":[1],"autocorrect":[1],"autofocus":[4],"clearInput":[4,"clear-input"],"clearOnEdit":[4,"clear-on-edit"],"debounce":[2],"disabled":[4],"enterkeyhint":[1],"inputmode":[1],"max":[1],"maxlength":[2],"min":[1],"minlength":[2],"multiple":[4],"name":[1],"pattern":[1],"placeholder":[1],"readonly":[4],"required":[4],"spellcheck":[4],"step":[1],"size":[2],"type":[1],"value":[1032],"hasFocus":[32],"setFocus":[64]}],[1,"sen-row"],[1,"sen-table"],[1,"sen-table-body"],[1,"sen-table-cell",{"colspan":[8],"rowspan":[8],"align":[1]}],[1,"sen-table-head"],[1,"sen-table-row"]]]], options);
});
