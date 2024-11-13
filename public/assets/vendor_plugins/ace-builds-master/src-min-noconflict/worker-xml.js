"no use strict";(function(e){function t(e,t){var n=e,r="";while(n){var i=t[n];if(typeof i=="string")return i+r;if(i)return i.location.replace(/\/*$/,"/")+(r||i.main||i.name);if(i===!1)return"";var s=n.lastIndexOf("/");if(s===-1)break;r=n.substr(s)+r,n=n.slice(0,s)}return e}if(typeof e.window!="undefined"&&e.document)return;if(e.require&&e.define)return;e.console||(e.console=function(){var e=Array.prototype.slice.call(arguments,0);postMessage({type:"log",data:e})},e.console.error=e.console.warn=e.console.log=e.console.trace=e.console),e.window=e,e.ace=e,e.onerror=function(e,t,n,r,i){postMessage({type:"error",data:{message:e,data:i.data,file:t,line:n,col:r,stack:i.stack}})},e.normalizeModule=function(t,n){if(n.indexOf("!")!==-1){var r=n.split("!");return e.normalizeModule(t,r[0])+"!"+e.normalizeModule(t,r[1])}if(n.charAt(0)=="."){var i=t.split("/").slice(0,-1).join("/");n=(i?i+"/":"")+n;while(n.indexOf(".")!==-1&&s!=n){var s=n;n=n.replace(/^\.\//,"").replace(/\/\.\//,"/").replace(/[^\/]+\/\.\.\//,"")}}return n},e.require=function(r,i){i||(i=r,r=null);if(!i.charAt)throw new Error("worker.js require() accepts only (parentId, id) as arguments");i=e.normalizeModule(r,i);var s=e.require.modules[i];if(s)return s.initialized||(s.initialized=!0,s.exports=s.factory().exports),s.exports;if(!e.require.tlns)return console.log("unable to load "+i);var o=t(i,e.require.tlns);return o.slice(-3)!=".js"&&(o+=".js"),e.require.id=i,e.require.modules[i]={},importScripts(o),e.require(r,i)},e.require.modules={},e.require.tlns={},e.define=function(t,n,r){arguments.length==2?(r=n,typeof t!="string"&&(n=t,t=e.require.id)):arguments.length==1&&(r=t,n=[],t=e.require.id);if(typeof r!="function"){e.require.modules[t]={exports:r,initialized:!0};return}n.length||(n=["require","exports","module"]);var i=function(n){return e.require(t,n)};e.require.modules[t]={exports:{},factory:function(){var e=this,t=r.apply(this,n.map(function(t){switch(t){case"require":return i;case"exports":return e.exports;case"module":return e;default:return i(t)}}));return t&&(e.exports=t),e}}},e.define.amd={},require.tlns={},e.initBaseUrls=function(t){for(var n in t)require.tlns[n]=t[n]},e.initSender=function(){var n=e.require("ace/lib/event_emitter").EventEmitter,r=e.require("ace/lib/oop"),i=function(){};return function(){r.implement(this,n),this.callback=function(e,t){postMessage({type:"call",id:t,data:e})},this.emit=function(e,t){postMessage({type:"event",name:e,data:t})}}.call(i.prototype),new i};var n=e.main=null,r=e.sender=null;e.onmessage=function(t){var i=t.data;if(i.event&&r)r._signal(i.event,i.data);else if(i.command)if(n[i.command])n[i.command].apply(n,i.args);else{if(!e[i.command])throw new Error("Unknown command:"+i.command);e[i.command].apply(e,i.args)}else if(i.init){e.initBaseUrls(i.tlns),require("ace/lib/es5-shim"),r=e.sender=e.initSender();var s=require(i.module)[i.classname];n=e.main=new s(r)}}})(this),ace.define("ace/lib/oop",["require","exports","module"],function(e,t,n){"use strict";t.inherits=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})},t.mixin=function(e,t){for(var n in t)e[n]=t[n];return e},t.implement=function(e,n){t.mixin(e,n)}}),ace.define("ace/lib/lang",["require","exports","module"],function(e,t,n){"use strict";t.last=function(e){return e[e.length-1]},t.stringReverse=function(e){return e.split("").reverse().join("")},t.stringRepeat=function(e,t){var n="";while(t>0){t&1&&(n+=e);if(t>>=1)e+=e}return n};var r=/^\s\s*/,i=/\s\s*$/;t.stringTrimLeft=function(e){return e.replace(r,"")},t.stringTrimRight=function(e){return e.replace(i,"")},t.copyObject=function(e){var t={};for(var n in e)t[n]=e[n];return t},t.copyArray=function(e){var t=[];for(var n=0,r=e.length;n<r;n++)e[n]&&typeof e[n]=="object"?t[n]=this.copyObject(e[n]):t[n]=e[n];return t},t.deepCopy=function s(e){if(typeof e!="object"||!e)return e;var t;if(Array.isArray(e)){t=[];for(var n=0;n<e.length;n++)t[n]=s(e[n]);return t}if(Object.prototype.toString.call(e)!=="[object Object]")return e;t={};for(var n in e)t[n]=s(e[n]);return t},t.arrayToMap=function(e){var t={};for(var n=0;n<e.length;n++)t[e[n]]=1;return t},t.createMap=function(e){var t=Object.create(null);for(var n in e)t[n]=e[n];return t},t.arrayRemove=function(e,t){for(var n=0;n<=e.length;n++)t===e[n]&&e.splice(n,1)},t.escapeRegExp=function(e){return e.replace(/([.*+?^${}()|[\]\/\\])/g,"\\$1")},t.escapeHTML=function(e){return e.replace(/&/g,"&#38;").replace(/"/g,"&#34;").replace(/'/g,"&#39;").replace(/</g,"&#60;")},t.getMatchOffsets=function(e,t){var n=[];return e.replace(t,function(e){n.push({offset:arguments[arguments.length-2],length:e.length})}),n},t.deferredCall=function(e){var t=null,n=function(){t=null,e()},r=function(e){return r.cancel(),t=setTimeout(n,e||0),r};return r.schedule=r,r.call=function(){return this.cancel(),e(),r},r.cancel=function(){return clearTimeout(t),t=null,r},r.isPending=function(){return t},r},t.delayedCall=function(e,t){var n=null,r=function(){n=null,e()},i=function(e){n==null&&(n=setTimeout(r,e||t))};return i.delay=function(e){n&&clearTimeout(n),n=setTimeout(r,e||t)},i.schedule=i,i.call=function(){this.cancel(),e()},i.cancel=function(){n&&clearTimeout(n),n=null},i.isPending=function(){return n},i}}),ace.define("ace/range",["require","exports","module"],function(e,t,n){"use strict";var r=function(e,t){return e.row-t.row||e.column-t.column},i=function(e,t,n,r){this.start={row:e,column:t},this.end={row:n,column:r}};(function(){this.isEqual=function(e){return this.start.row===e.start.row&&this.end.row===e.end.row&&this.start.column===e.start.column&&this.end.column===e.end.column},this.toString=function(){return"Range: ["+this.start.row+"/"+this.start.column+"] -> ["+this.end.row+"/"+this.end.column+"]"},this.contains=function(e,t){return this.compare(e,t)==0},this.compareRange=function(e){var t,n=e.end,r=e.start;return t=this.compare(n.row,n.column),t==1?(t=this.compare(r.row,r.column),t==1?2:t==0?1:0):t==-1?-2:(t=this.compare(r.row,r.column),t==-1?-1:t==1?42:0)},this.comparePoint=function(e){return this.compare(e.row,e.column)},this.containsRange=function(e){return this.comparePoint(e.start)==0&&this.comparePoint(e.end)==0},this.intersects=function(e){var t=this.compareRange(e);return t==-1||t==0||t==1},this.isEnd=function(e,t){return this.end.row==e&&this.end.column==t},this.isStart=function(e,t){return this.start.row==e&&this.start.column==t},this.setStart=function(e,t){typeof e=="object"?(this.start.column=e.column,this.start.row=e.row):(this.start.row=e,this.start.column=t)},this.setEnd=function(e,t){typeof e=="object"?(this.end.column=e.column,this.end.row=e.row):(this.end.row=e,this.end.column=t)},this.inside=function(e,t){return this.compare(e,t)==0?this.isEnd(e,t)||this.isStart(e,t)?!1:!0:!1},this.insideStart=function(e,t){return this.compare(e,t)==0?this.isEnd(e,t)?!1:!0:!1},this.insideEnd=function(e,t){return this.compare(e,t)==0?this.isStart(e,t)?!1:!0:!1},this.compare=function(e,t){return!this.isMultiLine()&&e===this.start.row?t<this.start.column?-1:t>this.end.column?1:0:e<this.start.row?-1:e>this.end.row?1:this.start.row===e?t>=this.start.column?0:-1:this.end.row===e?t<=this.end.column?0:1:0},this.compareStart=function(e,t){return this.start.row==e&&this.start.column==t?-1:this.compare(e,t)},this.compareEnd=function(e,t){return this.end.row==e&&this.end.column==t?1:this.compare(e,t)},this.compareInside=function(e,t){return this.end.row==e&&this.end.column==t?1:this.start.row==e&&this.start.column==t?-1:this.compare(e,t)},this.clipRows=function(e,t){if(this.end.row>t)var n={row:t+1,column:0};else if(this.end.row<e)var n={row:e,column:0};if(this.start.row>t)var r={row:t+1,column:0};else if(this.start.row<e)var r={row:e,column:0};return i.fromPoints(r||this.start,n||this.end)},this.extend=function(e,t){var n=this.compare(e,t);if(n==0)return this;if(n==-1)var r={row:e,column:t};else var s={row:e,column:t};return i.fromPoints(r||this.start,s||this.end)},this.isEmpty=function(){return this.start.row===this.end.row&&this.start.column===this.end.column},this.isMultiLine=function(){return this.start.row!==this.end.row},this.clone=function(){return i.fromPoints(this.start,this.end)},this.collapseRows=function(){return this.end.column==0?new i(this.start.row,0,Math.max(this.start.row,this.end.row-1),0):new i(this.start.row,0,this.end.row,0)},this.toScreenRange=function(e){var t=e.documentToScreenPosition(this.start),n=e.documentToScreenPosition(this.end);return new i(t.row,t.column,n.row,n.column)},this.moveBy=function(e,t){this.start.row+=e,this.start.column+=t,this.end.row+=e,this.end.column+=t}}).call(i.prototype),i.fromPoints=function(e,t){return new i(e.row,e.column,t.row,t.column)},i.comparePoints=r,i.comparePoints=function(e,t){return e.row-t.row||e.column-t.column},t.Range=i}),ace.define("ace/apply_delta",["require","exports","module"],function(e,t,n){"use strict";function r(e,t){throw console.log("Invalid Delta:",e),"Invalid Delta: "+t}function i(e,t){return t.row>=0&&t.row<e.length&&t.column>=0&&t.column<=e[t.row].length}function s(e,t){t.action!="insert"&&t.action!="remove"&&r(t,"delta.action must be 'insert' or 'remove'"),t.lines instanceof Array||r(t,"delta.lines must be an Array"),(!t.start||!t.end)&&r(t,"delta.start/end must be an present");var n=t.start;i(e,t.start)||r(t,"delta.start must be contained in document");var s=t.end;t.action=="remove"&&!i(e,s)&&r(t,"delta.end must contained in document for 'remove' actions");var o=s.row-n.row,u=s.column-(o==0?n.column:0);(o!=t.lines.length-1||t.lines[o].length!=u)&&r(t,"delta.range must match delta lines")}t.applyDelta=function(e,t,n){var r=t.start.row,i=t.start.column,s=e[r]||"";switch(t.action){case"insert":var o=t.lines;if(o.length===1)e[r]=s.substring(0,i)+t.lines[0]+s.substring(i);else{var u=[r,1].concat(t.lines);e.splice.apply(e,u),e[r]=s.substring(0,i)+e[r],e[r+t.lines.length-1]+=s.substring(i)}break;case"remove":var a=t.end.column,f=t.end.row;r===f?e[r]=s.substring(0,i)+s.substring(a):e.splice(r,f-r+1,s.substring(0,i)+e[f].substring(a))}}}),ace.define("ace/lib/event_emitter",["require","exports","module"],function(e,t,n){"use strict";var r={},i=function(){this.propagationStopped=!0},s=function(){this.defaultPrevented=!0};r._emit=r._dispatchEvent=function(e,t){this._eventRegistry||(this._eventRegistry={}),this._defaultHandlers||(this._defaultHandlers={});var n=this._eventRegistry[e]||[],r=this._defaultHandlers[e];if(!n.length&&!r)return;if(typeof t!="object"||!t)t={};t.type||(t.type=e),t.stopPropagation||(t.stopPropagation=i),t.preventDefault||(t.preventDefault=s),n=n.slice();for(var o=0;o<n.length;o++){n[o](t,this);if(t.propagationStopped)break}if(r&&!t.defaultPrevented)return r(t,this)},r._signal=function(e,t){var n=(this._eventRegistry||{})[e];if(!n)return;n=n.slice();for(var r=0;r<n.length;r++)n[r](t,this)},r.once=function(e,t){var n=this;t&&this.addEventListener(e,function r(){n.removeEventListener(e,r),t.apply(null,arguments)})},r.setDefaultHandler=function(e,t){var n=this._defaultHandlers;n||(n=this._defaultHandlers={_disabled_:{}});if(n[e]){var r=n[e],i=n._disabled_[e];i||(n._disabled_[e]=i=[]),i.push(r);var s=i.indexOf(t);s!=-1&&i.splice(s,1)}n[e]=t},r.removeDefaultHandler=function(e,t){var n=this._defaultHandlers;if(!n)return;var r=n._disabled_[e];if(n[e]==t){var i=n[e];r&&this.setDefaultHandler(e,r.pop())}else if(r){var s=r.indexOf(t);s!=-1&&r.splice(s,1)}},r.on=r.addEventListener=function(e,t,n){this._eventRegistry=this._eventRegistry||{};var r=this._eventRegistry[e];return r||(r=this._eventRegistry[e]=[]),r.indexOf(t)==-1&&r[n?"unshift":"push"](t),t},r.off=r.removeListener=r.removeEventListener=function(e,t){this._eventRegistry=this._eventRegistry||{};var n=this._eventRegistry[e];if(!n)return;var r=n.indexOf(t);r!==-1&&n.splice(r,1)},r.removeAllListeners=function(e){this._eventRegistry&&(this._eventRegistry[e]=[])},t.EventEmitter=r}),ace.define("ace/anchor",["require","exports","module","ace/lib/oop","ace/lib/event_emitter"],function(e,t,n){"use strict";var r=e("./lib/oop"),i=e("./lib/event_emitter").EventEmitter,s=t.Anchor=function(e,t,n){this.$onChange=this.onChange.bind(this),this.attach(e),typeof n=="undefined"?this.setPosition(t.row,t.column):this.setPosition(t,n)};(function(){function e(e,t,n){var r=n?e.column<=t.column:e.column<t.column;return e.row<t.row||e.row==t.row&&r}function t(t,n,r){var i=t.action=="insert",s=(i?1:-1)*(t.end.row-t.start.row),o=(i?1:-1)*(t.end.column-t.start.column),u=t.start,a=i?u:t.end;return e(n,u,r)?{row:n.row,column:n.column}:e(a,n,!r)?{row:n.row+s,column:n.column+(n.row==a.row?o:0)}:{row:u.row,column:u.column}}r.implement(this,i),this.getPosition=function(){return this.$clipPositionToDocument(this.row,this.column)},this.getDocument=function(){return this.document},this.$insertRight=!1,this.onChange=function(e){if(e.start.row==e.end.row&&e.start.row!=this.row)return;if(e.start.row>this.row)return;var n=t(e,{row:this.row,column:this.column},this.$insertRight);this.setPosition(n.row,n.column,!0)},this.setPosition=function(e,t,n){var r;n?r={row:e,column:t}:r=this.$clipPositionToDocument(e,t);if(this.row==r.row&&this.column==r.column)return;var i={row:this.row,column:this.column};this.row=r.row,this.column=r.column,this._signal("change",{old:i,value:r})},this.detach=function(){this.document.removeEventListener("change",this.$onChange)},this.attach=function(e){this.document=e||this.document,this.document.on("change",this.$onChange)},this.$clipPositionToDocument=function(e,t){var n={};return e>=this.document.getLength()?(n.row=Math.max(0,this.document.getLength()-1),n.column=this.document.getLine(n.row).length):e<0?(n.row=0,n.column=0):(n.row=e,n.column=Math.min(this.document.getLine(n.row).length,Math.max(0,t))),t<0&&(n.column=0),n}}).call(s.prototype)}),ace.define("ace/document",["require","exports","module","ace/lib/oop","ace/apply_delta","ace/lib/event_emitter","ace/range","ace/anchor"],function(e,t,n){"use strict";var r=e("./lib/oop"),i=e("./apply_delta").applyDelta,s=e("./lib/event_emitter").EventEmitter,o=e("./range").Range,u=e("./anchor").Anchor,a=function(e){this.$lines=[""],e.length===0?this.$lines=[""]:Array.isArray(e)?this.insertMergedLines({row:0,column:0},e):this.insert({row:0,column:0},e)};(function(){r.implement(this,s),this.setValue=function(e){var t=this.getLength()-1;this.remove(new o(0,0,t,this.getLine(t).length)),this.insert({row:0,column:0},e)},this.getValue=function(){return this.getAllLines().join(this.getNewLineCharacter())},this.createAnchor=function(e,t){return new u(this,e,t)},"aaa".split(/a/).length===0?this.$split=function(e){return e.replace(/\r\n|\r/g,"\n").split("\n")}:this.$split=function(e){return e.split(/\r\n|\r|\n/)},this.$detectNewLine=function(e){var t=e.match(/^.*?(\r\n|\r|\n)/m);this.$autoNewLine=t?t[1]:"\n",this._signal("changeNewLineMode")},this.getNewLineCharacter=function(){switch(this.$newLineMode){case"windows":return"\r\n";case"unix":return"\n";default:return this.$autoNewLine||"\n"}},this.$autoNewLine="",this.$newLineMode="auto",this.setNewLineMode=function(e){if(this.$newLineMode===e)return;this.$newLineMode=e,this._signal("changeNewLineMode")},this.getNewLineMode=function(){return this.$newLineMode},this.isNewLine=function(e){return e=="\r\n"||e=="\r"||e=="\n"},this.getLine=function(e){return this.$lines[e]||""},this.getLines=function(e,t){return this.$lines.slice(e,t+1)},this.getAllLines=function(){return this.getLines(0,this.getLength())},this.getLength=function(){return this.$lines.length},this.getTextRange=function(e){return this.getLinesForRange(e).join(this.getNewLineCharacter())},this.getLinesForRange=function(e){var t;if(e.start.row===e.end.row)t=[this.getLine(e.start.row).substring(e.start.column,e.end.column)];else{t=this.getLines(e.start.row,e.end.row),t[0]=(t[0]||"").substring(e.start.column);var n=t.length-1;e.end.row-e.start.row==n&&(t[n]=t[n].substring(0,e.end.column))}return t},this.insertLines=function(e,t){return console.warn("Use of document.insertLines is deprecated. Use the insertFullLines method instead."),this.insertFullLines(e,t)},this.removeLines=function(e,t){return console.warn("Use of document.removeLines is deprecated. Use the removeFullLines method instead."),this.removeFullLines(e,t)},this.insertNewLine=function(e){return console.warn("Use of document.insertNewLine is deprecated. Use insertMergedLines(position, ['', '']) instead."),this.insertMergedLines(e,["",""])},this.insert=function(e,t){return this.getLength()<=1&&this.$detectNewLine(t),this.insertMergedLines(e,this.$split(t))},this.insertInLine=function(e,t){var n=this.clippedPos(e.row,e.column),r=this.pos(e.row,e.column+t.length);return this.applyDelta({start:n,end:r,action:"insert",lines:[t]},!0),this.clonePos(r)},this.clippedPos=function(e,t){var n=this.getLength();e===undefined?e=n:e<0?e=0:e>=n&&(e=n-1,t=undefined);var r=this.getLine(e);return t==undefined&&(t=r.length),t=Math.min(Math.max(t,0),r.length),{row:e,column:t}},this.clonePos=function(e){return{row:e.row,column:e.column}},this.pos=function(e,t){return{row:e,column:t}},this.$clipPosition=function(e){var t=this.getLength();return e.row>=t?(e.row=Math.max(0,t-1),e.column=this.getLine(t-1).length):(e.row=Math.max(0,e.row),e.column=Math.min(Math.max(e.column,0),this.getLine(e.row).length)),e},this.insertFullLines=function(e,t){e=Math.min(Math.max(e,0),this.getLength());var n=0;e<this.getLength()?(t=t.concat([""]),n=0):(t=[""].concat(t),e--,n=this.$lines[e].length),this.insertMergedLines({row:e,column:n},t)},this.insertMergedLines=function(e,t){var n=this.clippedPos(e.row,e.column),r={row:n.row+t.length-1,column:(t.length==1?n.column:0)+t[t.length-1].length};return this.applyDelta({start:n,end:r,action:"insert",lines:t}),this.clonePos(r)},this.remove=function(e){var t=this.clippedPos(e.start.row,e.start.column),n=this.clippedPos(e.end.row,e.end.column);return this.applyDelta({start:t,end:n,action:"remove",lines:this.getLinesForRange({start:t,end:n})}),this.clonePos(t)},this.removeInLine=function(e,t,n){var r=this.clippedPos(e,t),i=this.clippedPos(e,n);return this.applyDelta({start:r,end:i,action:"remove",lines:this.getLinesForRange({start:r,end:i})},!0),this.clonePos(r)},this.removeFullLines=function(e,t){e=Math.min(Math.max(0,e),this.getLength()-1),t=Math.min(Math.max(0,t),this.getLength()-1);var n=t==this.getLength()-1&&e>0,r=t<this.getLength()-1,i=n?e-1:e,s=n?this.getLine(i).length:0,u=r?t+1:t,a=r?0:this.getLine(u).length,f=new o(i,s,u,a),l=this.$lines.slice(e,t+1);return this.applyDelta({start:f.start,end:f.end,action:"remove",lines:this.getLinesForRange(f)}),l},this.removeNewLine=function(e){e<this.getLength()-1&&e>=0&&this.applyDelta({start:this.pos(e,this.getLine(e).length),end:this.pos(e+1,0),action:"remove",lines:["",""]})},this.replace=function(e,t){e instanceof o||(e=o.fromPoints(e.start,e.end));if(t.length===0&&e.isEmpty())return e.start;if(t==this.getTextRange(e))return e.end;this.remove(e);var n;return t?n=this.insert(e.start,t):n=e.start,n},this.applyDeltas=function(e){for(var t=0;t<e.length;t++)this.applyDelta(e[t])},this.revertDeltas=function(e){for(var t=e.length-1;t>=0;t--)this.revertDelta(e[t])},this.applyDelta=function(e,t){var n=e.action=="insert";if(n?e.lines.length<=1&&!e.lines[0]:!o.comparePoints(e.start,e.end))return;n&&e.lines.length>2e4&&this.$splitAndapplyLargeDelta(e,2e4),i(this.$lines,e,t),this._signal("change",e)},this.$splitAndapplyLargeDelta=function(e,t){var n=e.lines,r=n.length,i=e.start.row,s=e.start.column,o=0,u=0;do{o=u,u+=t-1;var a=n.slice(o,u);if(u>r){e.lines=a,e.start.row=i+o,e.start.column=s;break}a.push(""),this.applyDelta({start:this.pos(i+o,s),end:this.pos(i+u,s=0),action:e.action,lines:a},!0)}while(!0)},this.revertDelta=function(e){this.applyDelta({start:this.clonePos(e.start),end:this.clonePos(e.end),action:e.action=="insert"?"remove":"insert",lines:e.lines.slice()})},this.indexToPosition=function(e,t){var n=this.$lines||this.getAllLines(),r=this.getNewLineCharacter().length;for(var i=t||0,s=n.length;i<s;i++){e-=n[i].length+r;if(e<0)return{row:i,column:e+n[i].length+r}}return{row:s-1,column:n[s-1].length}},this.positionToIndex=function(e,t){var n=this.$lines||this.getAllLines(),r=this.getNewLineCharacter().length,i=0,s=Math.min(e.row,n.length);for(var o=t||0;o<s;++o)i+=n[o].length+r;return i+e.column}}).call(a.prototype),t.Document=a}),ace.define("ace/worker/mirror",["require","exports","module","ace/range","ace/document","ace/lib/lang"],function(e,t,n){"use strict";var r=e("../range").Range,i=e("../document").Document,s=e("../lib/lang"),o=t.Mirror=function(e){this.sender=e;var t=this.doc=new i(""),n=this.deferredUpdate=s.delayedCall(this.onUpdate.bind(this)),r=this;e.on("change",function(e){var i=e.data;if(i[0].start)t.applyDeltas(i);else for(var s=0;s<i.length;s+=2){if(Array.isArray(i[s+1]))var o={action:"insert",start:i[s],lines:i[s+1]};else var o={action:"remove",start:i[s],end:i[s+1]};t.applyDelta(o,!0)}if(r.$timeout)return n.schedule(r.$timeout);r.onUpdate()})};(function(){this.$timeout=500,this.setTimeout=function(e){this.$timeout=e},this.setValue=function(e){this.doc.setValue(e),this.deferredUpdate.schedule(this.$timeout)},this.getValue=function(e){this.sender.callback(this.doc.getValue(),e)},this.onUpdate=function(){},this.isPending=function(){return this.deferredUpdate.isPending()}}).call(o.prototype)}),ace.define("ace/mode/xml/sax",["require","exports","module"],function(e,t,n){function d(){}function v(e,t,n,r,i){function s(e){if(e>65535){e-=65536;var t=55296+(e>>10),n=56320+(e&1023);return String.fromCharCode(t,n)}return String.fromCharCode(e)}function o(e){var t=e.slice(1,-1);return t in n?n[t]:t.charAt(0)==="#"?s(parseInt(t.substr(1).replace("x","0x"))):(i.error("entity not found:"+e),e)}function u(t){var n=e.substring(v,t).replace(/&#?\w+;/g,o);h&&a(v),r.characters(n,0,t-v),v=t}function a(t,n){while(t>=l&&(n=c.exec(e)))f=n.index,l=f+n[0].length,h.lineNumber++;h.columnNumber=t-f+1}var f=0,l=0,c=/.+(?:\r\n?|\n)|.*$/g,h=r.locator,p=[{currentNSMap:t}],d={},v=0;for(;;){var E=e.indexOf("<",v);if(E<0){if(!e.substr(v).match(/^\s*$/)){var N=r.document,C=N.createTextNode(e.substr(v));N.appendChild(C),r.currentElement=C}return}E>v&&u(E);switch(e.charAt(E+1)){case"/":var k=e.indexOf(">",E+3),L=e.substring(E+2,k),A;if(!(p.length>1)){i.fatalError("end tag name not found for: "+L);break}A=p.pop();var O=A.localNSMap;A.tagName!=L&&i.fatalError("end tag name: "+L+" does not match the current start tagName: "+A.tagName),r.endElement(A.uri,A.localName,L);if(O)for(var M in O)r.endPrefixMapping(M);k++;break;case"?":h&&a(E),k=x(e,E,r);break;case"!":h&&a(E),k=S(e,E,r,i);break;default:try{h&&a(E);var _=new T,k=g(e,E,_,o,i),D=_.length;if(D&&h){var P=m(h,{});for(var E=0;E<D;E++){var H=_[E];a(H.offset),H.offset=m(h,{})}m(P,h)}!_.closed&&w(e,k,_.tagName,d)&&(_.closed=!0,n.nbsp||i.warning("unclosed xml attribute")),y(_,r,p),_.uri==="http://www.w3.org/1999/xhtml"&&!_.closed?k=b(e,k,_.tagName,o,r):k++}catch(B){i.error("element parse error: "+B),k=-1}}k<0?u(E+1):v=k}}function m(e,t){return t.lineNumber=e.lineNumber,t.columnNumber=e.columnNumber,t}function g(e,t,n,r,i){var s,d,v=++t,m=o;for(;;){var g=e.charAt(v);switch(g){case"=":if(m===u)s=e.slice(t,v),m=f;else{if(m!==a)throw new Error("attribute equal must after attrName");m=f}break;case"'":case'"':if(m===f){t=v+1,v=e.indexOf(g,t);if(!(v>0))throw new Error("attribute value no end '"+g+"' match");d=e.slice(t,v).replace(/&#?\w+;/g,r),n.add(s,d,t-1),m=c}else{if(m!=l)throw new Error('attribute value must after "="');d=e.slice(t,v).replace(/&#?\w+;/g,r),n.add(s,d,t),i.warning('attribute "'+s+'" missed start quot('+g+")!!"),t=v+1,m=c}break;case"/":switch(m){case o:n.setTagName(e.slice(t,v));case c:case h:case p:m=p,n.closed=!0;case l:case u:case a:break;default:throw new Error("attribute invalid close char('/')")}break;case"":i.error("unexpected end of input");case">":switch(m){case o:n.setTagName(e.slice(t,v));case c:case h:case p:break;case l:case u:d=e.slice(t,v),d.slice(-1)==="/"&&(n.closed=!0,d=d.slice(0,-1));case a:m===a&&(d=s),m==l?(i.warning('attribute "'+d+'" missed quot(")!!'),n.add(s,d.replace(/&#?\w+;/g,r),t)):(i.warning('attribute "'+d+'" missed value!! "'+d+'" instead!!'),n.add(d,d,t));break;case f:throw new Error("attribute value missed!!")}return v;case"\u0080":g=" ";default:if(g<=" ")switch(m){case o:n.setTagName(e.slice(t,v)),m=h;break;case u:s=e.slice(t,v),m=a;break;case l:var d=e.slice(t,v).replace(/&#?\w+;/g,r);i.warning('attribute "'+d+'" missed quot(")!!'),n.add(s,d,t);case c:m=h}else switch(m){case a:i.warning('attribute "'+s+'" missed value!! "'+s+'" instead!!'),n.add(s,s,t),t=v,m=u;break;case c:i.warning('attribute space is required"'+s+'"!!');case h:m=u,t=v;break;case f:m=l,t=v;break;case p:throw new Error("elements closed character '/' and '>' must be connected to")}}v++}}function y(e,t,n){var r=e.tagName,i=null,s=n[n.length-1].currentNSMap,o=e.length;while(o--){var u=e[o],a=u.qName,f=u.value,l=a.indexOf(":");if(l>0)var c=u.prefix=a.slice(0,l),h=a.slice(l+1),p=c==="xmlns"&&h;else h=a,c=null,p=a==="xmlns"&&"";u.localName=h,p!==!1&&(i==null&&(i={},E(s,s={})),s[p]=i[p]=f,u.uri="http://www.w3.org/2000/xmlns/",t.startPrefixMapping(p,f))}var o=e.length;while(o--){u=e[o];var c=u.prefix;c&&(c==="xml"&&(u.uri="http://www.w3.org/XML/1998/namespace"),c!=="xmlns"&&(u.uri=s[c]))}var l=r.indexOf(":");l>0?(c=e.prefix=r.slice(0,l),h=e.localName=r.slice(l+1)):(c=null,h=e.localName=r);var d=e.uri=s[c||""];t.startElement(d,h,r,e);if(e.closed){t.endElement(d,h,r);if(i)for(c in i)t.endPrefixMapping(c)}else e.currentNSMap=s,e.localNSMap=i,n.push(e)}function b(e,t,n,r,i){if(/^(?:script|textarea)$/i.test(n)){var s=e.indexOf("</"+n+">",t),o=e.substring(t+1,s);if(/[&<]/.test(o))return/^script$/i.test(n)?(i.characters(o,0,o.length),s):(o=o.replace(/&#?\w+;/g,r),i.characters(o,0,o.length),s)}return t+1}function w(e,t,n,r){var i=r[n];return i==null&&(i=r[n]=e.lastIndexOf("</"+n+">")),i<t}function E(e,t){for(var n in e)t[n]=e[n]}function S(e,t,n,r){var i=e.charAt(t+2);switch(i){case"-":if(e.charAt(t+3)==="-"){var s=e.indexOf("-->",t+4);return s>t?(n.comment(e,t+4,s-t-4),s+3):(r.error("Unclosed comment"),-1)}return-1;default:if(e.substr(t+3,6)=="CDATA["){var s=e.indexOf("]]>",t+9);return n.startCDATA(),n.characters(e,t+9,s-t-9),n.endCDATA(),s+3}var o=C(e,t),u=o.length;if(u>1&&/!doctype/i.test(o[0][0])){var a=o[1][0],f=u>3&&/^public$/i.test(o[2][0])&&o[3][0],l=u>4&&o[4][0],c=o[u-1];return n.startDTD(a,f&&f.replace(/^(['"])(.*?)\1$/,"$2"),l&&l.replace(/^(['"])(.*?)\1$/,"$2")),n.endDTD(),c.index+c[0].length}}return-1}function x(e,t,n){var r=e.indexOf("?>",t);if(r){var i=e.substring(t,r).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);if(i){var s=i[0].length;return n.processingInstruction(i[1],i[2]),r+2}return-1}return-1}function T(e){}function N(e,t){return e.__proto__=t,e}function C(e,t){var n,r=[],i=/'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;i.lastIndex=t,i.exec(e);while(n=i.exec(e)){r.push(n);if(n[1])return r}}var r=/[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,i=new RegExp("[\\-\\.0-9"+r.source.slice(1,-1)+"\u00b7\u0300-\u036f\\ux203F-\u2040]"),s=new RegExp("^"+r.source+i.source+"*(?::"+r.source+i.source+"*)?$"),o=0,u=1,a=2,f=3,l=4,c=5,h=6,p=7;return d.prototype={parse:function(e,t,n){var r=this.domBuilder;r.startDocument(),E(t,t={}),v(e,t,n,r,this.errorHandler),r.endDocument()}},T.prototype={setTagName:function(e){if(!s.test(e))throw new Error("invalid tagName:"+e);this.tagName=e},add:function(e,t,n){if(!s.test(e))throw new Error("invalid attribute:"+e);this[this.length++]={qName:e,value:t,offset:n}},length:0,getLocalName:function(e){return this[e].localName},getOffset:function(e){return this[e].offset},getQName:function(e){return this[e].qName},getURI:function(e){return this[e].uri},getValue:function(e){return this[e].value}},N({},N.prototype)instanceof N||(N=function(e,t){function n(){}n.prototype=t,n=new n;for(t in e)n[t]=e[t];return n}),d}),ace.define("ace/mode/xml/dom",["require","exports","module"],function(e,t,n){function r(e,t){for(var n in e)t[n]=e[n]}function i(e,t){var n=e.prototype;if(Object.create){var i=Object.create(t.prototype);n.__proto__=i}if(!(n instanceof t)){function s(){}s.prototype=t.prototype,s=new s,r(n,s),e.prototype=n=s}n.constructor!=e&&(typeof e!="function"&&console.error("unknow Class:"+e),n.constructor=e)}function B(e,t){if(t instanceof Error)var n=t;else n=this,Error.call(this,w[e]),this.message=w[e],Error.captureStackTrace&&Error.captureStackTrace(this,B);return n.code=e,t&&(this.message=this.message+": "+t),n}function j(){}function F(e,t){this._node=e,this._refresh=t,I(this)}function I(e){var t=e._node._inc||e._node.ownerDocument._inc;if(e._inc!=t){var n=e._refresh(e._node);gt(e,"length",n.length),r(n,e),e._inc=t}}function q(){}function R(e,t){var n=e.length;while(n--)if(e[n]===t)return n}function U(e,t,n,r){r?t[R(t,r)]=n:t[t.length++]=n;if(e){n.ownerElement=e;var i=e.ownerDocument;i&&(r&&Q(i,e,r),K(i,e,n))}}function z(e,t,n){var r=R(t,n);if(!(r>=0))throw B(L,new Error);var i=t.length-1;while(r<i)t[r]=t[++r];t.length=i;if(e){var s=e.ownerDocument;s&&(Q(s,e,n),n.ownerElement=null)}}function W(e){this._features={};if(e)for(var t in e)this._features=e[t]}function X(){}function V(e){return e=="<"&&"&lt;"||e==">"&&"&gt;"||e=="&"&&"&amp;"||e=='"'&&"&quot;"||"&#"+e.charCodeAt()+";"}function $(e,t){if(t(e))return!0;if(e=e.firstChild)do if($(e,t))return!0;while(e=e.nextSibling)}function J(){}function K(e,t,n){e&&e._inc++;var r=n.namespaceURI;r=="http://www.w3.org/2000/xmlns/"&&(t._nsMap[n.prefix?n.localName:""]=n.value)}function Q(e,t,n,r){e&&e._inc++;var i=n.namespaceURI;i=="http://www.w3.org/2000/xmlns/"&&delete t._nsMap[n.prefix?n.localName:""]}function G(e,t,n){if(e&&e._inc){e._inc++;var r=t.childNodes;if(n)r[r.length++]=n;else{var i=t.firstChild,s=0;while(i)r[s++]=i,i=i.nextSibling;r.length=s}}}function Y(e,t){var n=t.previousSibling,r=t.nextSibling;return n?n.nextSibling=r:e.firstChild=r,r?r.previousSibling=n:e.lastChild=n,G(e.ownerDocument,e),t}function Z(e,t,n){var r=t.parentNode;r&&r.removeChild(t);if(t.nodeType===g){var i=t.firstChild;if(i==null)return t;var s=t.lastChild}else i=s=t;var o=n?n.previousSibling:e.lastChild;i.previousSibling=o,s.nextSibling=n,o?o.nextSibling=i:e.firstChild=i,n==null?e.lastChild=s:n.previousSibling=s;do i.parentNode=e;while(i!==s&&(i=i.nextSibling));return G(e.ownerDocument||e,e),t.nodeType==g&&(t.firstChild=t.lastChild=null),t}function et(e,t){var n=t.parentNode;if(n){var r=e.lastChild;n.removeChild(t);var r=e.lastChild}var r=e.lastChild;return t.parentNode=e,t.previousSibling=r,t.nextSibling=null,r?r.nextSibling=t:e.firstChild=t,e.lastChild=t,G(e.ownerDocument,e,t),t}function tt(){t