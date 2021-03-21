!function(e,n){"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?module.exports=n():e.Decoder=n()}(this,(function(){var e;!function(){(e=this)||("undefined"!=typeof window?e=window:"undefined"!=typeof self&&(e=self))}();var n=function(n,t){var r,a=void 0!==a?a:{},i={};for(r in a)a.hasOwnProperty(r)&&(i[r]=a[r]);a.arguments=[],a.thisProgram="./this.program",a.quit=function(e,n){throw n},a.preRun=[],a.postRun=[];var o,f,s=!1,u=!1,c=!1,l=!1;if(a.ENVIRONMENT)if("WEB"===a.ENVIRONMENT)s=!0;else if("WORKER"===a.ENVIRONMENT)u=!0;else if("NODE"===a.ENVIRONMENT)c=!0;else{if("SHELL"!==a.ENVIRONMENT)throw new Error("Module['ENVIRONMENT'] value is not valid. must be one of: WEB|WORKER|NODE|SHELL.");l=!0}else s="object"==typeof window,u="function"==typeof importScripts,c="object"==typeof process&&!1,l=!s&&!c&&!u;if(c)a.read=function(e,n){var t;return o||(o=null("fs")),f||(f=null("path")),e=f.normalize(e),t=o.readFileSync(e),n?t:t.toString()},a.readBinary=function(e){var n=a.read(e,!0);return n.buffer||(n=new Uint8Array(n)),b(n.buffer),n},process.argv.length>1&&(a.thisProgram=process.argv[1].replace(/\\/g,"/")),a.arguments=process.argv.slice(2),"undefined"!=typeof module&&(module.exports=a),process.on("uncaughtException",(function(e){if(!(e instanceof Se))throw e})),process.on("unhandledRejection",(function(e,n){process.exit(1)})),a.inspect=function(){return"[Emscripten Module object]"};else if(l)"undefined"!=typeof read&&(a.read=function(e){return read(e)}),a.readBinary=function(e){var n;return"function"==typeof readbuffer?new Uint8Array(readbuffer(e)):(b("object"==typeof(n=read(e,"binary"))),n)},"undefined"!=typeof scriptArgs?a.arguments=scriptArgs:void 0!==arguments&&(a.arguments=arguments),"function"==typeof quit&&(a.quit=function(e,n){quit(e)});else{if(!s&&!u)throw new Error("not compiled for this environment");a.read=function(e){var n=new XMLHttpRequest;return n.open("GET",e,!1),n.send(null),n.responseText},u&&(a.readBinary=function(e){var n=new XMLHttpRequest;return n.open("GET",e,!1),n.responseType="arraybuffer",n.send(null),new Uint8Array(n.response)}),a.readAsync=function(e,n,t){var r=new XMLHttpRequest;r.open("GET",e,!0),r.responseType="arraybuffer",r.onload=function(){200==r.status||0==r.status&&r.response?n(r.response):t()},r.onerror=t,r.send(null)},a.setWindowTitle=function(e){document.title=e}}for(r in a.print="undefined"!=typeof console?console.log.bind(console):"undefined"!=typeof print?print:null,a.printErr="undefined"!=typeof printErr?printErr:"undefined"!=typeof console&&console.warn.bind(console)||a.print,a.print=a.print,a.printErr=a.printErr,i)i.hasOwnProperty(r)&&(a[r]=i[r]);i=void 0;var d=16;function p(e){b(!D);var n=B;return B=B+e+15&-16,n}function y(e,n){return n||(n=d),Math.ceil(e/n)*n}var m={"f64-rem":function(e,n){return e%n},debugger:function(){}},h=(new Array(0),1024),w=0;function b(e,n){e||Be("Assertion failed: "+n)}function v(e,n){if(0===n||!e)return"";for(var t,r=0,a=0;r|=t=_[e+a>>0],(0!=t||n)&&(a++,!n||a!=n););n||(n=a);var i="";if(r<128){for(var o,f=1024;n>0;)o=String.fromCharCode.apply(String,_.subarray(e,e+Math.min(n,f))),i=i?i+o:o,e+=f,n-=f;return i}return M(e)}var g="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function A(e,n){for(var t=n;e[t];)++t;if(t-n>16&&e.subarray&&g)return g.decode(e.subarray(n,t));for(var r,a,i,o,f,s="";;){if(!(r=e[n++]))return s;if(128&r)if(a=63&e[n++],192!=(224&r))if(i=63&e[n++],224==(240&r)?r=(15&r)<<12|a<<6|i:(o=63&e[n++],240==(248&r)?r=(7&r)<<18|a<<12|i<<6|o:(f=63&e[n++],r=248==(252&r)?(3&r)<<24|a<<18|i<<12|o<<6|f:(1&r)<<30|a<<24|i<<18|o<<12|f<<6|63&e[n++])),r<65536)s+=String.fromCharCode(r);else{var u=r-65536;s+=String.fromCharCode(55296|u>>10,56320|1023&u)}else s+=String.fromCharCode((31&r)<<6|a);else s+=String.fromCharCode(r)}}function M(e){return A(_,e)}"undefined"!=typeof TextDecoder&&new TextDecoder("utf-16le");var E,_,S,T,R,B,D,O,P,I,C,N=65536,x=16777216;function U(e,n){return e%n>0&&(e+=n-e%n),e}function L(e){a.buffer=E=e}function W(){a.HEAP8=new Int8Array(E),a.HEAP16=S=new Int16Array(E),a.HEAP32=T=new Int32Array(E),a.HEAPU8=_=new Uint8Array(E),a.HEAPU16=new Uint16Array(E),a.HEAPU32=new Uint32Array(E),a.HEAPF32=new Float32Array(E),a.HEAPF64=new Float64Array(E)}function F(){Be("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value "+z+", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")}function H(){F()}R=B=O=P=I=C=0,D=!1;var j=a.TOTAL_STACK||5242880,z=a.TOTAL_MEMORY||52428800;function G(){return z}if(z<j&&a.printErr("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+z+"! (TOTAL_STACK="+j+")"),a.buffer?E=a.buffer:("object"==typeof WebAssembly&&"function"==typeof WebAssembly.Memory?(a.wasmMemory=new WebAssembly.Memory({initial:z/N,maximum:z/N}),E=a.wasmMemory.buffer):E=new ArrayBuffer(z),a.buffer=E),W(),T[0]=1668509029,S[1]=25459,115!==_[2]||99!==_[3])throw"Runtime error: expected the system to be little-endian!";function V(e){for(;e.length>0;){var n=e.shift();if("function"!=typeof n){var t=n.func;"number"==typeof t?void 0===n.arg?a.dynCall_v(t):a.dynCall_vi(t,n.arg):t(void 0===n.arg?null:n.arg)}else n()}}var q=[],k=[],K=[],X=[],Y=[],J=!1;function Z(){if(a.preRun)for("function"==typeof a.preRun&&(a.preRun=[a.preRun]);a.preRun.length;)te(a.preRun.shift());V(q)}function Q(){J||(J=!0,V(k))}function $(){V(K)}function ee(){V(X)}function ne(){if(a.postRun)for("function"==typeof a.postRun&&(a.postRun=[a.postRun]);a.postRun.length;)re(a.postRun.shift());V(Y)}function te(e){q.unshift(e)}function re(e){Y.unshift(e)}Math.abs,Math.cos,Math.sin,Math.tan,Math.acos,Math.asin,Math.atan,Math.atan2,Math.exp,Math.log,Math.sqrt,Math.ceil,Math.floor,Math.pow,Math.imul,Math.fround,Math.round,Math.min,Math.max,Math.clz32,Math.trunc;var ae=0,ie=null,oe=null;function fe(e){ae++,a.monitorRunDependencies&&a.monitorRunDependencies(ae)}function se(e){if(ae--,a.monitorRunDependencies&&a.monitorRunDependencies(ae),0==ae&&(null!==ie&&(clearInterval(ie),ie=null),oe)){var n=oe;oe=null,n()}}a.preloadedImages={},a.preloadedAudios={};var ue="data:application/octet-stream;base64,";function ce(e){return String.prototype.startsWith?e.startsWith(ue):0===e.indexOf(ue)}function le(){var e="avc.wast",n="avc.wasm",t="avc.temp.asm.js";"function"==typeof a.locateFile&&(ce(e)||(e=a.locateFile(e)),ce(n)||(n=a.locateFile(n)),ce(t)||(t=a.locateFile(t)));var r={global:null,env:null,asm2wasm:m,parent:a},i=null;function o(){try{if(a.wasmBinary)return new Uint8Array(a.wasmBinary);if(a.readBinary)return a.readBinary(n);throw"on the web, we need the wasm binary to be preloaded and set on Module['wasmBinary']. emcc.py will do that for you when generating HTML (but not JS)"}catch(e){Be(e)}}function f(e,t,f){if("object"!=typeof WebAssembly)return a.printErr("no native wasm support detected"),!1;if(!(a.wasmMemory instanceof WebAssembly.Memory))return a.printErr("no native wasm Memory in use"),!1;function c(e,n){(i=e.exports).memory&&function(e){var n=a.buffer;e.byteLength<n.byteLength&&a.printErr("the new buffer in mergeMemory is smaller than the previous one. in native wasm, we should grow memory here");var t=new Int8Array(n);new Int8Array(e).set(t),L(e),W()}(i.memory),a.asm=i,a.usingWasm=!0,se()}if(t.memory=a.wasmMemory,r.global={NaN:NaN,Infinity:1/0},r["global.Math"]=Math,r.env=t,fe(),a.instantiateWasm)try{return a.instantiateWasm(r,c)}catch(e){return a.printErr("Module.instantiateWasm callback failed with error: "+e),!1}function l(e){c(e.instance,e.module)}function d(e){(a.wasmBinary||!s&&!u||"function"!=typeof fetch?new Promise((function(e,n){e(o())})):fetch(n,{credentials:"same-origin"}).then((function(e){if(!e.ok)throw"failed to load wasm binary file at '"+n+"'";return e.arrayBuffer()})).catch((function(){return o()}))).then((function(e){return WebAssembly.instantiate(e,r)})).then(e).catch((function(e){a.printErr("failed to asynchronously prepare wasm: "+e),Be(e)}))}return a.wasmBinary||"function"!=typeof WebAssembly.instantiateStreaming||ce(n)||"function"!=typeof fetch?d(l):WebAssembly.instantiateStreaming(fetch(n,{credentials:"same-origin"}),r).then(l).catch((function(e){a.printErr("wasm streaming compile failed: "+e),a.printErr("falling back to ArrayBuffer instantiation"),d(l)})),{}}a.asmPreload=a.asm;var c=a.reallocBuffer;a.reallocBuffer=function(e){return"asmjs"===l?c(e):function(e){e=U(e,a.usingWasm?N:x);var n=a.buffer.byteLength;if(a.usingWasm)try{return-1!==a.wasmMemory.grow((e-n)/65536)?a.buffer=a.wasmMemory.buffer:null}catch(e){return null}}(e)};var l="";a.asm=function(e,n,t){if(!(n=n).table){var r=a.wasmTableSize;void 0===r&&(r=1024);var i=a.wasmMaxTableSize;"object"==typeof WebAssembly&&"function"==typeof WebAssembly.Table?n.table=void 0!==i?new WebAssembly.Table({initial:r,maximum:i,element:"anyfunc"}):new WebAssembly.Table({initial:r,element:"anyfunc"}):n.table=new Array(r),a.wasmTable=n.table}var o;return n.memoryBase||(n.memoryBase=a.STATIC_BASE),n.tableBase||(n.tableBase=0),b(o=f(0,n),"no binaryen method succeeded."),o}}le(),B=(R=h)+9888,k.push();var de=9888;a.STATIC_BASE=R,a.STATIC_BUMP=de,B+=16;var pe={varargs:0,get:function(e){return pe.varargs+=4,T[pe.varargs-4>>2]},getStr:function(){return v(pe.get())},get64:function(){var e=pe.get(),n=pe.get();return b(e>=0?0===n:-1===n),e},getZero:function(){b(0===pe.get())}};function ye(e,n){pe.varargs=n;try{var t=pe.getStreamFromFD(),r=(pe.get(),pe.get()),a=pe.get(),i=pe.get(),o=r;return FS.llseek(t,o,i),T[a>>2]=t.position,t.getdents&&0===o&&0===i&&(t.getdents=null),0}catch(e){return"undefined"!=typeof FS&&e instanceof FS.ErrnoError||Be(e),-e.errno}}function me(e,n){pe.varargs=n;try{var t=pe.get(),r=pe.get(),i=pe.get(),o=0;me.buffers||(me.buffers=[null,[],[]],me.printChar=function(e,n){var t=me.buffers[e];b(t),0===n||10===n?((1===e?a.print:a.printErr)(A(t,0)),t.length=0):t.push(n)});for(var f=0;f<i;f++){for(var s=T[r+8*f>>2],u=T[r+(8*f+4)>>2],c=0;c<u;c++)me.printChar(t,_[s+c]);o+=u}return o}catch(e){return"undefined"!=typeof FS&&e instanceof FS.ErrnoError||Be(e),-e.errno}}function he(e,n){pe.varargs=n;try{return 0}catch(e){return"undefined"!=typeof FS&&e instanceof FS.ErrnoError||Be(e),-e.errno}}function we(e,n){pe.varargs=n;try{var t=pe.getStreamFromFD();return FS.close(t),0}catch(e){return"undefined"!=typeof FS&&e instanceof FS.ErrnoError||Be(e),-e.errno}}function be(){n()}function ve(e,n,r){t(e,n,r)}function ge(e,n,t){return _.set(_.subarray(n,n+t),e),e}function Ae(e){return a.___errno_location&&(T[a.___errno_location()>>2]=e),e}a._broadwayOnHeadersDecoded=be,a._broadwayOnPictureDecoded=ve,C=p(4),O=P=y(B),I=y(O+j),T[C>>2]=I,D=!0,a.wasmTableSize=10,a.wasmMaxTableSize=10,a.asmGlobalArg={},a.asmLibraryArg={abort:Be,enlargeMemory:H,getTotalMemory:G,abortOnCannotGrowMemory:F,___setErrNo:Ae,___syscall140:ye,___syscall146:me,___syscall54:he,___syscall6:we,_broadwayOnHeadersDecoded:be,_broadwayOnPictureDecoded:ve,_emscripten_memcpy_big:ge,DYNAMICTOP_PTR:C,STACKTOP:P};var Me,Ee,_e=a.asm(a.asmGlobalArg,a.asmLibraryArg,E);function Se(e){this.name="ExitStatus",this.message="Program terminated with exit("+e+")",this.status=e}function Te(e){function n(){a.calledRun||(a.calledRun=!0,w||(Q(),$(),a.onRuntimeInitialized&&a.onRuntimeInitialized(),ne()))}e=e||a.arguments,ae>0||(Z(),ae>0||a.calledRun||(a.setStatus?(a.setStatus("Running..."),setTimeout((function(){setTimeout((function(){a.setStatus("")}),1),n()}),1)):n()))}function Re(e,n){n&&a.noExitRuntime&&0===e||(a.noExitRuntime||(w=!0,P=Me,ee(),a.onExit&&a.onExit(e)),c&&process.exit(e),a.quit(e,new Se(e)))}function Be(e){throw a.onAbort&&a.onAbort(e),void 0!==e?(a.print(e),a.printErr(e),e=JSON.stringify(e)):e="",w=!0,"abort("+e+"). Build with -s ASSERTIONS=1 for more info."}if(a.asm=_e,a._broadwayCreateStream=function(){return a.asm._broadwayCreateStream.apply(null,arguments)},a._broadwayExit=function(){return a.asm._broadwayExit.apply(null,arguments)},a._broadwayGetMajorVersion=function(){return a.asm._broadwayGetMajorVersion.apply(null,arguments)},a._broadwayGetMinorVersion=function(){return a.asm._broadwayGetMinorVersion.apply(null,arguments)},a._broadwayInit=function(){return a.asm._broadwayInit.apply(null,arguments)},a._broadwayPlayStream=function(){return a.asm._broadwayPlayStream.apply(null,arguments)},a.asm=_e,Se.prototype=new Error,Se.prototype.constructor=Se,oe=function e(){a.calledRun||Te(),a.calledRun||(oe=e)},a.run=Te,a.exit=Re,a.abort=Be,a.preInit)for("function"==typeof a.preInit&&(a.preInit=[a.preInit]);a.preInit.length>0;)a.preInit.pop()();a.noExitRuntime=!0,Te(),void 0!==e&&e.Module&&(Ee=e.Module),void 0!==a&&(Ee=a),Ee._broadwayOnHeadersDecoded=n,Ee._broadwayOnPictureDecoded=t;var De,Oe=!1,Pe=function(){Oe=!0,De&&De(Ee)};return Ee.onRuntimeInitialized=function(){Pe(Ee)},function(e){Oe?e(Ee):De=e}};return function(){"use strict";var t=function(){return(new Date).getTime()};"undefined"!=typeof performance&&performance.now&&(t=function(){return performance.now()});var r=function(e){var r;this.options=e||{},this.now=t;var a,o,f=function(e,n,o){var f,s=this.pictureBuffers[e];s||(s=this.pictureBuffers[e]=a(e,n*o*3/2));var u=!1;if(this.infoAr.length&&(u=!0,f=this.infoAr),this.infoAr=[],this.options.rgb){r||(r=i(n,o)),r.inp.set(s),r.doit();var c=new Uint8Array(r.outSize);return c.set(r.out),u&&(f[0].finishDecoding=t()),void this.onPictureDecoded(c,n,o,f)}u&&(f[0].finishDecoding=t()),this.onPictureDecoded(s,n,o,f)}.bind(this);this.options.sliceMode&&(f=function(e,n,r,i){var f=this.pictureBuffers[e];f||(f=this.pictureBuffers[e]=a(e,n*r*3/2));var s,u=this.pictureBuffers[i];u||(u=this.pictureBuffers[i]=o(i,18)),this.infoAr.length&&(s=this.infoAr),this.infoAr=[],s[0].finishDecoding=t();for(var c=[],l=0;l<20;++l)c.push(u[l]);s[0].sliceInfoAr=c,this.onPictureDecoded(f,n,r,s)}.bind(this));var s=n.apply({},[function(){},f]),u=1048576,c=this;this.onPictureDecoded=function(e,n,t,r){},this.onDecoderReady=function(){};var l=[];this.decode=function(e,n,t){l.push([e,n,t])},s((function(e){e.HEAP8;var n=e.HEAPU8;e.HEAP16,e.HEAP32,e._broadwayInit(),a=function(e,t){return n.subarray(e,e+t)},o=function(e,t){return new Uint32Array(n.buffer,e,t)},c.streamBuffer=a(e._broadwayCreateStream(u),u),c.pictureBuffers={},c.infoAr=[];var r=0;if(c.options.sliceMode?(r=c.options.sliceNum,c.decode=function(n,a,i){c.infoAr.push(a),a.startDecoding=t();var o,f=a.nals;if(!f){f=[],a.nals=f;var s=n.length,u=!1,l=0,d=0;for(o=0;o<s;++o)if(1===n[o]&&0===n[o-1]&&0===n[o-2]){var p=o-2;0===n[o-3]&&(p=o-3),u&&f.push({offset:l,end:p,type:31&n[d]}),l=p,d=p+3,0===n[o-3]&&(d=p+4),u=!0}u&&f.push({offset:l,end:o,type:31&n[d]})}var y,m=0,h=0;for(o=0;o<f.length;++o)1===f[o].type||5===f[o].type?(m===r&&(y=n.subarray(f[o].offset,f[o].end),c.streamBuffer[h]=0,h+=1,c.streamBuffer.set(y,h),h+=y.length),m+=1):(y=n.subarray(f[o].offset,f[o].end),c.streamBuffer[h]=0,h+=1,c.streamBuffer.set(y,h),h+=y.length,e._broadwayPlayStream(h),h=0);i(),e._broadwayPlayStream(h)}):c.decode=function(n,r){r&&(c.infoAr.push(r),r.startDecoding=t()),c.streamBuffer.set(n),e._broadwayPlayStream(n.length)},l.length){var i=0;for(i=0;i<l.length;++i)c.decode(l[i][0],l[i][1],l[i][2]);l=[]}c.onDecoderReady(c)}))};r.prototype={};var a={},i=function(n,t){var r=n+"x"+t;if(a[r])return a[r];for(var i=n*t,o=(0|i)>>2,f=i+o+o,s=n*t*4,u=f+s+4*Math.pow(2,24),c=Math.pow(2,24),l=c;l<u;)l+=c;var d=new ArrayBuffer(l),p=function(e,n,t){"use asm";var r=e.Math.imul,a=e.Math.min,i=e.Math.max,o=e.Math.pow,f=new e.Uint8Array(t),s=new e.Uint32Array(t),u=new e.Uint8Array(t),c=new e.Uint8Array(t),l=new e.Uint32Array(t),d=0,p=0,y=0,m=0,h=0,w=0,b=0,v=0,g=0,A=0;function M(e,n){e=e|0;n=n|0;var t=0;var a=0;d=e;g=r(e,4)|0;p=n;y=r(d|0,p|0)|0;m=(y|0)>>2;w=r(r(d,p)|0,4)|0;h=y+m|0+m|0;v=0;b=v+w|0;A=b+h|0;a=~~+o(+2,+24);a=r(a,4)|0;for(t=0|0;(t|0)<(a|0)|0;t=t+4|0){l[(A+t|0)>>2]=0}}function E(){var e=0;var n=0;var t=0;var r=0;var a=0;var i=0;var o=0;var f=0;var s=0;var c=0;var h=0;var w=0;var M=0;var E=0;M=v|0;e=b|0;n=e+y|0|0;t=n+m|0;for(s=0;(s|0)<(p|0);s=s+2|0){h=n;w=t;for(c=0;(c|0)<(d|0);c=c+2|0){r=u[e>>0]|0;a=u[(e+d|0)>>0]|0;i=u[n>>0]|0;o=u[t>>0]|0;E=((r<<16|0)+(i<<8|0)|0)+o|0;f=l[(A+E|0)>>2]|0;if(f){}else{f=_(r,i,o)|0;l[(A+E|0)>>2]=f|0}l[M>>2]=f;E=((a<<16|0)+(i<<8|0)|0)+o|0;f=l[(A+E|0)>>2]|0;if(f){}else{f=_(a,i,o)|0;l[(A+E|0)>>2]=f|0}l[(M+g|0)>>2]=f;M=M+4|0;e=e+1|0;r=u[e>>0]|0;a=u[(e+d|0)>>0]|0;E=((r<<16|0)+(i<<8|0)|0)+o|0;f=l[(A+E|0)>>2]|0;if(f){}else{f=_(r,i,o)|0;l[(A+E|0)>>2]=f|0}l[M>>2]=f;E=((a<<16|0)+(i<<8|0)|0)+o|0;f=l[(A+E|0)>>2]|0;if(f){}else{f=_(a,i,o)|0;l[(A+E|0)>>2]=f|0}l[(M+g|0)>>2]=f;M=M+4|0;e=e+1|0;n=n+1|0;t=t+1|0}M=M+g|0;e=e+d|0}}function _(e,n,t){e=e|0;n=n|0;t=t|0;var o=0;var f=0;var s=0;var u=0;var c=0;var l=0;var d=0;var p=0;var y=0;c=r(1192,e-16|0)|0;l=r(1634,t-128|0)|0;d=r(832,t-128|0)|0;p=r(400,n-128|0)|0;y=r(2066,n-128|0)|0;o=(c+l|0)>>10|0;f=((c-d|0)-p|0)>>10|0;s=(c+y|0)>>10|0;if((o&255|0)!=(o|0)|0){o=a(255,i(0,o|0)|0)|0}if((f&255|0)!=(f|0)|0){f=a(255,i(0,f|0)|0)|0}if((s&255|0)!=(s|0)|0){s=a(255,i(0,s|0)|0)|0}u=255;u=u<<8|0;u=u+s|0;u=u<<8|0;u=u+f|0;u=u<<8|0;u=u+o|0;return u|0}return{init:M,doit:E}}(e,0,d);return p.init(n,t),a[r]=p,p.heap=d,p.out=new Uint8Array(d,0,s),p.inp=new Uint8Array(d,s,f),p.outSize=s,p};if("undefined"!=typeof self){var o,f,s,u,c,l,d=!1,p=!1,y=!1,m=0,h=0,w=0,b=0,v=[],g=[],A=function(e){if(g.length){for(var n=g.shift();n&&n.byteLength!==e;)n=g.shift();if(n)return n}return new ArrayBuffer(e)},M=function(e,n,t,r,a){var i=function(t,a){var i=0;for(i=0;i<16;++i){var o=t+r*i,f=a+r*i;n.set(e.subarray(o,f),o)}},o=function(t,a){var i=0;for(i=0;i<8;++i){var o=t+r/2*i,f=a+r/2*i;n.set(e.subarray(o,f),o)}},f=function(t,r){n.set(e.subarray(t,r),t)},s=t[0],u=t[1];u>0&&(i(s,u),o(t[2],t[3]),o(t[4],t[5])),s=t[6],(u=t[7])>0&&(i(s,u),o(t[8],t[9]),o(t[10],t[11])),s=t[12],(u=t[15])>0&&(f(s,u),f(t[13],t[16]),f(t[14],t[17]))},E=function(e){w=(h=e)-1};self.addEventListener("message",(function(e){if(d){if(p&&e.data.reuse&&g.push(e.data.reuse),e.data.buf)return void(y&&0!==b?v.push(e.data):o.decode(new Uint8Array(e.data.buf,e.data.offset||0,e.data.length),e.data.info,(function(){y&&m!==w&&postMessage(e.data,[e.data.buf])})));if(e.data.slice){var n=t();if(M(new Uint8Array(e.data.slice),s,e.data.infos[0].sliceInfoAr,e.data.width,e.data.height),e.data.theOne&&(M(s,new Uint8Array(e.data.slice),f,e.data.width,e.data.height),l>e.data.infos[0].timeDecoding&&(e.data.infos[0].timeDecoding=l),e.data.infos[0].timeCopy+=t()-n),postMessage(e.data,[e.data.slice]),0==(b-=1)&&v.length){var a=v.shift();o.decode(new Uint8Array(a.buf,a.offset||0,a.length),a.info,(function(){y&&m!==w&&postMessage(a,[a.buf])}))}return}if(e.data.setSliceCnt)return void E(e.data.sliceCnt)}else e.data&&"Broadway.js - Worker init"===e.data.type&&(d=!0,o=new r(e.data.options),e.data.options.sliceMode?(p=!0,y=!0,m=e.data.options.sliceNum,E(e.data.options.sliceCnt),o.onPictureDecoded=function(e,n,t,r){var a=new Uint8Array(A(e.length));M(e,a,r[0].sliceInfoAr,n),u=r[0].startDecoding,c=r[0].finishDecoding,l=c-u,r[0].timeDecoding=l,r[0].timeCopy=0,postMessage({slice:a.buffer,sliceNum:m,width:n,height:t,infos:r},[a.buffer]),b=h-1,s=e,f=r[0].sliceInfoAr}):e.data.options.reuseMemory?(p=!0,o.onPictureDecoded=function(e,n,t,r){var a=new Uint8Array(A(e.length));a.set(e,0,e.length),postMessage({buf:a.buffer,length:e.length,width:n,height:t,infos:r},[a.buffer])}):o.onPictureDecoded=function(e,n,t,r){e&&(e=new Uint8Array(e));var a=new Uint8Array(e.length);a.set(e,0,e.length),postMessage({buf:a.buffer,length:e.length,width:n,height:t,infos:r},[a.buffer])},postMessage({consoleLog:"broadway worker initialized"}))}),!1)}return r.nowValue=t,r}()}));