import{r as t,h as s}from"./p-2bb7e3b8.js";class e{constructor(e){t(this,e),this.links=[],this.label="Contents",this.basepath="",this.itemOffsets=[],this.selectedId=null,this.pageWidth=document.body.offsetWidth,this.toItem=({text:t,href:e})=>s("li",null,s("stencil-route-link",{url:`${this.basepath}${e}`,class:"Nav-link "+(this.selectedId===e?"selected":"")},t))}function(){this.pageWidth<1234||requestAnimationFrame(()=>{const t=this.itemOffsets.findIndex(t=>t.topOffset>window.scrollY);this.selectedId=0===t||void 0===this.itemOffsets[this.itemOffsets.length-1]?null:-1===t?this.itemOffsets[this.itemOffsets.length-1].id:this.itemOffsets[t-1].id})}updateItemOffsets(){requestAnimationFrame(()=>{this.pageWidth=document.body.offsetWidth,this.itemOffsets=this.links.map(t=>{const s=document.getElementById(t.href.substring(1));return{id:t.href,topOffset:s.getBoundingClientRect().top+window.scrollY}})})}componentDidLoad(){this.updateItemOffsets()}render(){return this.links.length<1?null:[s("strong",{class:"Nav-header"},this.label),s("nav",null,s("ul",{class:"Nav-subnav"},this.links.map(this.toItem)))]}static get watchers(){return{links:["updateItemOffsets"]}}}e.style="docs-table-of-contents{display:block;font-size:13px;margin-bottom:2rem}docs-table-of-contents .Nav-header{color:var(--text-color--lighter);font-size:0.75em;font-weight:800;letter-spacing:1px;text-transform:uppercase;padding-left:0}docs-table-of-contents ul{padding:0;list-style:none;line-height:1.23em}docs-table-of-contents .Nav-link{padding-left:0;margin-left:0}docs-table-of-contents a{color:inherit;display:inline-block;-webkit-transition:.2s color, .3s transform ease-out;transition:.2s color, .3s transform ease-out}docs-table-of-contents .Nav-link.selected a{color:var(--accent-color);-webkit-transform:translateX(2px);transform:translateX(2px)}";export{e as docs_table_of_contents}