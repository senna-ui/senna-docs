var __awaiter=this&&this.__awaiter||function(t,e,n,i){function r(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,s){function a(t){try{o(i.next(t))}catch(e){s(e)}}function u(t){try{o(i["throw"](t))}catch(e){s(e)}}function o(t){t.done?n(t.value):r(t.value).then(a,u)}o((i=i.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},i,r,s,a;return a={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function u(t){return function(e){return o([t,e])}}function o(a){if(i)throw new TypeError("Generator is already executing.");while(n)try{if(i=1,r&&(s=a[0]&2?r["return"]:a[0]?r["throw"]||((s=r["return"])&&s.call(r),0):r.next)&&!(s=s.call(r,a[1])).done)return s;if(r=0,s)a=[a[0]&2,s.value];switch(a[0]){case 0:case 1:s=a;break;case 4:n.label++;return{value:a[1],done:false};case 5:n.label++;r=a[1];a=[0];continue;case 7:a=n.ops.pop();n.trys.pop();continue;default:if(!(s=n.trys,s=s.length>0&&s[s.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!s||a[1]>s[0]&&a[1]<s[3])){n.label=a[1];break}if(a[0]===6&&n.label<s[1]){n.label=s[1];s=a;break}if(s&&n.label<s[2]){n.label=s[2];n.ops.push(a);break}if(s[2])n.ops.pop();n.trys.pop();continue}a=e.call(t,n)}catch(u){a=[6,u];r=0}finally{i=s=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-11664c1d.system.js"],(function(t){"use strict";var e,n,i,r,s;return{setters:[function(t){e=t.r;n=t.c;i=t.h;r=t.H;s=t.g}],execute:function(){var a='.sc-sen-input-h{display:contents}.sc-sen-input-h input.sc-sen-input{-webkit-box-sizing:border-box;box-sizing:border-box;padding:4px 6.4px;font-size:13px;font-family:var(--sen-font-family, "Source Sans Pro", Helvetica, sans-serif);border:0 solid #E9E6E6;background:#E9E6E6;line-height:1em}.sc-sen-input-h input[type=text].sc-sen-input{display:block;width:100%}';var u=0;var o=t("sen_input",function(){function t(t){var i=this;e(this,t);this.inputId="sen-input-"+u++;this.hasFocus=false;this.autocapitalize="off";this.autocomplete="off";this.autocorrect="off";this.autofocus=false;this.clearInput=false;this.debounce=0;this.disabled=false;this.name=this.inputId;this.readonly=false;this.required=false;this.spellcheck=false;this.type="text";this.value="";this.onInput=function(t){var e=t.target;if(e){i.value=e.value||""}i.senInput.emit(t)};this.senInput=n(this,"senInput",7);this.senChange=n(this,"senChange",7)}t.prototype.valueChanged=function(){this.senChange.emit({value:this.value==null?this.value:this.value.toString()})};t.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){if(this.nativeInput){this.nativeInput.focus()}return[2]}))}))};t.prototype.getValue=function(){return typeof this.value==="number"?this.value.toString():(this.value||"").toString()};t.prototype.render=function(){var t=this;var e=this.getValue();var n=this.inputId+"-lbl";return i(r,null,i("input",{class:"native-input",ref:function(e){return t.nativeInput=e},"aria-labelledby":n,disabled:this.disabled,accept:this.accept,autoCapitalize:this.autocapitalize,autoComplete:this.autocomplete,autoCorrect:this.autocorrect,autoFocus:this.autofocus,min:this.min,max:this.max,minLength:this.minlength,maxLength:this.maxlength,name:this.name,pattern:this.pattern,placeholder:this.placeholder||"",readOnly:this.readonly,required:this.required,spellcheck:this.spellcheck,step:this.step,size:this.size,tabindex:this.tabindex,type:this.type,value:e,onInput:this.onInput}))};Object.defineProperty(t.prototype,"el",{get:function(){return s(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{value:["valueChanged"]}},enumerable:true,configurable:true});return t}());o.style=a}}}));