import{r as t,c as s,h as i,H as e,g as h}from"./p-0466bc77.js";let n=0;const a=class{constructor(i){t(this,i),this.senInput=s(this,"senInput",7),this.senChange=s(this,"senChange",7),this.inputId="sen-input-"+n++,this.hasFocus=!1,this.autocapitalize="off",this.autocomplete="off",this.autocorrect="off",this.autofocus=!1,this.clearInput=!1,this.debounce=0,this.disabled=!1,this.name=this.inputId,this.readonly=!1,this.required=!1,this.spellcheck=!1,this.type="text",this.value="",this.onInput=t=>{const s=t.target;s&&(this.value=s.value||""),this.senInput.emit(t)}}valueChanged(){this.senChange.emit({value:null==this.value?this.value:this.value.toString()})}async setFocus(){this.nativeInput&&this.nativeInput.focus()}getValue(){return"number"==typeof this.value?this.value.toString():(this.value||"").toString()}render(){const t=this.getValue();return i(e,null,i("input",{class:"native-input",ref:t=>this.nativeInput=t,"aria-labelledby":this.inputId+"-lbl",disabled:this.disabled,accept:this.accept,autoCapitalize:this.autocapitalize,autoComplete:this.autocomplete,autoCorrect:this.autocorrect,autoFocus:this.autofocus,min:this.min,max:this.max,minLength:this.minlength,maxLength:this.maxlength,name:this.name,pattern:this.pattern,placeholder:this.placeholder||"",readOnly:this.readonly,required:this.required,spellcheck:this.spellcheck,step:this.step,size:this.size,tabindex:this.tabindex,type:this.type,value:t,onInput:this.onInput}))}get el(){return h(this)}static get watchers(){return{value:["valueChanged"]}}};a.style='.sc-sen-input-h{display:contents}.sc-sen-input-h input.sc-sen-input{box-sizing:border-box;padding:4px 6.4px;font-size:13px;font-family:var(--sen-font-family, "Source Sans Pro", Helvetica, sans-serif);border:0 solid #E9E6E6;background:#E9E6E6;line-height:1em}.sc-sen-input-h input[type=text].sc-sen-input{display:block;width:100%}';export{a as sen_input}