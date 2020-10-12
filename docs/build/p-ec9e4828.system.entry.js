System.register(["./p-3caa821a.system.js","./p-4bf330c1.system.js"],(function(t){"use strict";var e,i,a,r;return{setters:[function(t){e=t.r;i=t.h;a=t.H},function(t){r=t.O}],execute:function(){var o='docs-card{display:block;font-size:12px;max-width:30em}.Card{background-color:var(--background);border-radius:4px;-webkit-box-shadow:0px 0.175em 0.5em rgba(2, 8, 20, 0.1), 0px 0.085em 0.175em rgba(2, 8, 20, 0.08);box-shadow:0px 0.175em 0.5em rgba(2, 8, 20, 0.1), 0px 0.085em 0.175em rgba(2, 8, 20, 0.08);color:var(--text-color--light);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;font-size:inherit;font-weight:normal;height:100%;-ms-flex-pack:start;justify-content:flex-start;line-height:1.6;-webkit-transition:-webkit-box-shadow 150ms ease, -webkit-transform 150ms ease;transition:-webkit-box-shadow 150ms ease, -webkit-transform 150ms ease;transition:box-shadow 150ms ease, transform 150ms ease;transition:box-shadow 150ms ease, transform 150ms ease, -webkit-box-shadow 150ms ease, -webkit-transform 150ms ease;width:100%;overflow:hidden}.Card-with-image{grid-row:span 2}.Card-without-image{font-size:12px}.Card-container{padding:1.65em 2em 1.65em}.Card-image{width:100%;height:auto}.Card-icon,.Card-iconset__container{width:48px;height:48px;margin-bottom:1.2em;border-radius:50%;-o-object-fit:cover;object-fit:cover}.Card-icon-hover{display:none}.Card-iconset__container{position:relative}.Card-iconset__container .Card-icon{position:absolute;opacity:0;-webkit-transition:.8s opacity;transition:.8s opacity}.Card-iconset__container .Card-icon--active{opacity:1}.Card-ionicon{width:48px;height:48px;float:left;margin-right:1em}@media (hover: hover){.Card[href]:hover{-webkit-box-shadow:0 0.35em 1.175em rgba(2, 8, 20, 0.1), 0 0.175em 0.5em rgba(2, 8, 20, 0.08);box-shadow:0 0.35em 1.175em rgba(2, 8, 20, 0.1), 0 0.175em 0.5em rgba(2, 8, 20, 0.08);-webkit-transform:translateY(-1px);transform:translateY(-1px)}.Card[href]:hover .Card-icon-default{display:none}.Card[href]:hover .Card-icon-hover{display:block}}.Card-content>*:first-child{margin-top:0}.Card-content>*:last-child{margin-bottom:0}.Card-content>*{margin:0 0 0.65em}.Card-header{color:var(--text-color--dark);font-size:1.4em;font-weight:500;line-height:1.4;margin-bottom:0.45em}.Card-without-image .Card-header{margin-bottom:0.3em}.Card-header>svg{fill:currentColor;height:1em;margin-bottom:-0.125em;width:auto}.Card-size-lg{font-size:14px}.Card-size-lg .Card-icon,.Card-size-lg .Card-ionicon,.Card-size-lg .Card-iconset__container{width:80px;height:80px}.Card-size-lg.Card-without-image .Card-header{font-size:20px}docs-card.disabled,docs-card[disabled]{position:relative}docs-card.disabled::after,docs-card[disabled]::after{position:absolute;top:0;right:0;left:0;bottom:0;background:rgba(232, 232, 232, 0.5);pointer-events:none;content:\'\'}aside docs-card{max-width:240px}aside .Card-container{display:grid;grid-template-columns:minmax(0, -webkit-max-content) 1fr;grid-template-columns:minmax(0, max-content) 1fr;grid-template-rows:minmax(0, -webkit-min-content);grid-template-rows:minmax(0, min-content);grid-template-areas:"icon title"\n    "icon body"}aside .Card-icon{width:32px;height:32px;margin-right:16px;margin-bottom:0;grid-area:icon}aside .Card-header{grid-area:title}aside .Card-header::after{background-image:url("/docs/assets/img/new-tab.svg");display:inline-block;height:13px;width:13px;background-size:13px 13px;margin-left:4px;content:\'\'}aside .Card-content{grid-area:body;max-height:42px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}aside .Card-icon+.Card-content{margin-top:-6px}.markdown-content p docs-card{margin-top:1em}';var n=function(){function t(t){e(this,t);this.activeIndex=0;this.rotationTime=6e3}t.prototype.hostData=function(){return{class:{"Card-with-image":typeof this.img!=="undefined","Card-without-image":typeof this.img==="undefined","Card-size-lg":this.size==="lg"}}};t.prototype.componentWillLoad=function(){if(typeof this.iconset!=="undefined"){return}this.activeIndex=0;this.rotationTime=4e3+Math.random()*2e3;setInterval(this.tic.bind(this),this.rotationTime);setTimeout(this.tic.bind(this),this.rotationTime/3)};t.prototype.componentWillUnload=function(){clearInterval(this.interval)};t.prototype.tic=function(){if(typeof this.iconset!=="undefined"&&this.activeIndex>=this.iconset.split(",").length-1){return this.activeIndex=0}this.activeIndex++};t.prototype.__stencil_render=function(){var t=this;var e=typeof this.href==="undefined";var a=typeof this.href!=="undefined"?/^http/.test(this.href):false;var o=this.header==="undefined"?null:i("header",{class:"Card-header"},this.header," ",a?i(r,null):null);var n=this.hoverIcon||this.icon;var s=[this.img&&i("img",{src:this.img,class:"Card-image"}),i("div",{class:"Card-container"},this.icon&&i("img",{src:this.icon,class:"Card-icon Card-icon-default"}),n&&i("img",{src:n,class:"Card-icon Card-icon-hover"}),this.ionicon&&i("ion-icon",{name:this.ionicon,class:"Card-ionicon"}),this.iconset&&i("div",{class:"Card-iconset__container"},this.iconset.split(",").map((function(e,a){return i("img",{src:e,class:"Card-icon "+(a===t.activeIndex?"Card-icon--active":""),"data-index":a})}))),o,i("div",{class:"Card-content"},i("slot",null)))];if(e){return i("div",{class:"Card"},s)}if(a){return i("a",{class:"Card",href:this.href},s)}return i("stencil-route-link",{url:this.href,anchorClass:"Card"},s)};t.prototype.render=function(){return i(a,this.hostData(),this.__stencil_render())};return t}();t("docs_card",n);n.style=o}}}));