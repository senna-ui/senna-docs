System.register(["./p-9545a4b3.system.js"],(function(r){"use strict";var e;return{setters:[function(r){e=r.C}],execute:function(){var n=[{name:"Primary",property:"--sen-color-primary"},{name:"Secondary",property:"--sen-color-secondary"},{name:"Tertiary",property:"--sen-color-tertiary"},{name:"Success",property:"--sen-color-success"},{name:"Warning",property:"--sen-color-warning"},{name:"Danger",property:"--sen-color-danger"},{name:"Dark",property:"--sen-color-dark"},{name:"Medium",property:"--sen-color-medium"},{name:"Light",property:"--sen-color-light"}];var t=r("g",(function(r,n,t){var a=new e(t);var o=a.contrast();var s=a.tint();var c=a.shade();return{name:r,property:n,value:t,valueRgb:i(a.rgb),contrast:o.hex,contrastRgb:i(o.rgb),tint:s.hex,shade:c.hex}}));var a=r("c",(function(r){var e=[];n.forEach((function(n){var t={value:"",valueRgb:"-rgb",contrast:"-contrast",contrastRgb:"-contrast-rgb",shade:"-shade",tint:"-tint"};var a=Object.assign({},n);var o=Object.keys(t);for(var c=0,i=o;c<i.length;c++){var u=i[c];a[u]=s(n.property+t[u],r)}e.push(a)}));return e}));var o=r("u",(function(r,e,n){if(typeof n==="undefined"){return e}var t=c(r,e);var a=r+": "+n;e=e.replace(t,a);return e}));var s=function(r,e){var n=c(r,e);return n.trim().split(":")[1].trim()};var c=function(r,e){var n=e.indexOf(r);var t=e.substring(n+r.length);var a=t.indexOf("}");var o=t.indexOf(";");var s=n+r.length+Math.min(a,o);return e.substring(n,s)};var i=function(r){return r.r+","+r.g+","+r.b}}}}));