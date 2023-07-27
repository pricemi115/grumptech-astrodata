import*as e from"node:https";var t={227:(e,t,n)=>{t.formatArgs=function(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;const n="color: "+this.color;t.splice(1,0,n,"color: inherit");let o=0,r=0;t[0].replace(/%[a-zA-Z%]/g,(e=>{"%%"!==e&&(o++,"%c"===e&&(r=o))})),t.splice(r,0,n)},t.save=function(e){try{e?t.storage.setItem("debug",e):t.storage.removeItem("debug")}catch(e){}},t.load=function(){let e;try{e=t.storage.getItem("debug")}catch(e){}return!e&&"undefined"!=typeof process&&"env"in process&&(e=process.env.DEBUG),e},t.useColors=function(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type&&!window.process.__nwjs)||("undefined"==typeof navigator||!navigator.userAgent||!navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))},t.storage=function(){try{return localStorage}catch(e){}}(),t.destroy=(()=>{let e=!1;return()=>{e||(e=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],t.log=console.debug||console.log||(()=>{}),e.exports=n(447)(t);const{formatters:o}=e.exports;o.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}},447:(e,t,n)=>{e.exports=function(e){function t(e){let n,r,a,i=null;function s(...e){if(!s.enabled)return;const o=s,r=Number(new Date),a=r-(n||r);o.diff=a,o.prev=n,o.curr=r,n=r,e[0]=t.coerce(e[0]),"string"!=typeof e[0]&&e.unshift("%O");let i=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,((n,r)=>{if("%%"===n)return"%";i++;const a=t.formatters[r];if("function"==typeof a){const t=e[i];n=a.call(o,t),e.splice(i,1),i--}return n})),t.formatArgs.call(o,e),(o.log||t.log).apply(o,e)}return s.namespace=e,s.useColors=t.useColors(),s.color=t.selectColor(e),s.extend=o,s.destroy=t.destroy,Object.defineProperty(s,"enabled",{enumerable:!0,configurable:!1,get:()=>null!==i?i:(r!==t.namespaces&&(r=t.namespaces,a=t.enabled(e)),a),set:e=>{i=e}}),"function"==typeof t.init&&t.init(s),s}function o(e,n){const o=t(this.namespace+(void 0===n?":":n)+e);return o.log=this.log,o}function r(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return t.debug=t,t.default=t,t.coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){const e=[...t.names.map(r),...t.skips.map(r).map((e=>"-"+e))].join(",");return t.enable(""),e},t.enable=function(e){let n;t.save(e),t.namespaces=e,t.names=[],t.skips=[];const o=("string"==typeof e?e:"").split(/[\s,]+/),r=o.length;for(n=0;n<r;n++)o[n]&&("-"===(e=o[n].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.slice(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){if("*"===e[e.length-1])return!0;let n,o;for(n=0,o=t.skips.length;n<o;n++)if(t.skips[n].test(e))return!1;for(n=0,o=t.names.length;n<o;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n(824),t.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")},Object.keys(e).forEach((n=>{t[n]=e[n]})),t.names=[],t.skips=[],t.formatters={},t.selectColor=function(e){let n=0;for(let t=0;t<e.length;t++)n=(n<<5)-n+e.charCodeAt(t),n|=0;return t.colors[Math.abs(n)%t.colors.length]},t.enable(t.load()),t}},187:e=>{var t,n="object"==typeof Reflect?Reflect:null,o=n&&"function"==typeof n.apply?n.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};t=n&&"function"==typeof n.ownKeys?n.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var r=Number.isNaN||function(e){return e!=e};function a(){a.init.call(this)}e.exports=a,e.exports.once=function(e,t){return new Promise((function(n,o){function r(n){e.removeListener(t,a),o(n)}function a(){"function"==typeof e.removeListener&&e.removeListener("error",r),n([].slice.call(arguments))}g(e,t,a,{once:!0}),"error"!==t&&function(e,t,n){"function"==typeof e.on&&g(e,"error",t,{once:!0})}(e,r)}))},a.EventEmitter=a,a.prototype._events=void 0,a.prototype._eventsCount=0,a.prototype._maxListeners=void 0;var i=10;function s(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function u(e){return void 0===e._maxListeners?a.defaultMaxListeners:e._maxListeners}function l(e,t,n,o){var r,a,i,l;if(s(n),void 0===(a=e._events)?(a=e._events=Object.create(null),e._eventsCount=0):(void 0!==a.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),a=e._events),i=a[t]),void 0===i)i=a[t]=n,++e._eventsCount;else if("function"==typeof i?i=a[t]=o?[n,i]:[i,n]:o?i.unshift(n):i.push(n),(r=u(e))>0&&i.length>r&&!i.warned){i.warned=!0;var c=new Error("Possible EventEmitter memory leak detected. "+i.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");c.name="MaxListenersExceededWarning",c.emitter=e,c.type=t,c.count=i.length,l=c,console&&console.warn&&console.warn(l)}return e}function c(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function d(e,t,n){var o={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},r=c.bind(o);return r.listener=n,o.wrapFn=r,r}function p(e,t,n){var o=e._events;if(void 0===o)return[];var r=o[t];return void 0===r?[]:"function"==typeof r?n?[r.listener||r]:[r]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(r):f(r,r.length)}function h(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function f(e,t){for(var n=new Array(t),o=0;o<t;++o)n[o]=e[o];return n}function g(e,t,n,o){if("function"==typeof e.on)o.once?e.once(t,n):e.on(t,n);else{if("function"!=typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function r(a){o.once&&e.removeEventListener(t,r),n(a)}))}}Object.defineProperty(a,"defaultMaxListeners",{enumerable:!0,get:function(){return i},set:function(e){if("number"!=typeof e||e<0||r(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");i=e}}),a.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},a.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||r(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},a.prototype.getMaxListeners=function(){return u(this)},a.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var r="error"===e,a=this._events;if(void 0!==a)r=r&&void 0===a.error;else if(!r)return!1;if(r){var i;if(t.length>0&&(i=t[0]),i instanceof Error)throw i;var s=new Error("Unhandled error."+(i?" ("+i.message+")":""));throw s.context=i,s}var u=a[e];if(void 0===u)return!1;if("function"==typeof u)o(u,this,t);else{var l=u.length,c=f(u,l);for(n=0;n<l;++n)o(c[n],this,t)}return!0},a.prototype.addListener=function(e,t){return l(this,e,t,!1)},a.prototype.on=a.prototype.addListener,a.prototype.prependListener=function(e,t){return l(this,e,t,!0)},a.prototype.once=function(e,t){return s(t),this.on(e,d(this,e,t)),this},a.prototype.prependOnceListener=function(e,t){return s(t),this.prependListener(e,d(this,e,t)),this},a.prototype.removeListener=function(e,t){var n,o,r,a,i;if(s(t),void 0===(o=this._events))return this;if(void 0===(n=o[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete o[e],o.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(r=-1,a=n.length-1;a>=0;a--)if(n[a]===t||n[a].listener===t){i=n[a].listener,r=a;break}if(r<0)return this;0===r?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,r),1===n.length&&(o[e]=n[0]),void 0!==o.removeListener&&this.emit("removeListener",e,i||t)}return this},a.prototype.off=a.prototype.removeListener,a.prototype.removeAllListeners=function(e){var t,n,o;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var r,a=Object.keys(n);for(o=0;o<a.length;++o)"removeListener"!==(r=a[o])&&this.removeAllListeners(r);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(o=t.length-1;o>=0;o--)this.removeListener(e,t[o]);return this},a.prototype.listeners=function(e){return p(this,e,!0)},a.prototype.rawListeners=function(e){return p(this,e,!1)},a.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):h.call(e,t)},a.prototype.listenerCount=h,a.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]}},284:function(e,t,n){var o,r,a;r=this,a=()=>{const e={VERSION:"1.0.12",not:{},all:{},any:{}},t=Object.prototype.toString,o=Array.prototype.slice,r=Object.prototype.hasOwnProperty,a=e=>(...t)=>!e(...o.call(t)),i=e=>(...t)=>{const n=c(t);for(const t of n)if(!e.call(null,t))return!1;return!0},s=e=>(...t)=>{const n=c(t);for(const t of n)if(e.call(null,t))return!0;return!1},u={"<":(e,t)=>e<t,"<=":(e,t)=>e<=t,">":(e,t)=>e>t,">=":(e,t)=>e>=t},l=(e,t)=>{const n=`${t}`,o=+(n.match(/\d+/)||NaN),r=n.match(/^[<>]=?|/)[0];return u[r]?u[r](e,o):e==o||o!=o},c=t=>{let n=o.call(t);return 1===n.length&&e.array(n[0])&&(n=n[0]),n};e.arguments=e=>"[object Arguments]"===t.call(e)||null!=e&&"object"==typeof e&&"callee"in e,e.array=e=>Array.isArray(e)&&"[object Array]"===t.call(e),e.boolean=e=>(!0===e||!1===e)&&new Boolean(e)instanceof Boolean&&"[object Boolean]"===t.call(e),e.char=t=>e.string(t)&&1===t.length,e.date=n=>new Date(n)instanceof Date&&e.not.nan(n)&&"[object Date]"===t.call(n),e.domNode=t=>e.object(t)&&t.nodeType>0,e.error=e=>"[object Error]"===t.call(e),e.function=e=>"[object Function]"===t.call(e)||"function"==typeof e,e.json=e=>"[object Object]"===t.call(e),e.nan=e=>Number.isNaN(e),e.null=e=>null===e,e.number=e=>new Number(e)instanceof Number&&"number"==typeof e&&Number.isFinite(e),e.object=e=>Object(e)===e,e.regexp=e=>"[object RegExp]"===t.call(e),e.sameType=(n,o)=>{const r=t.call(n);return r===t.call(o)&&("[object Number]"!==r||!e.any.nan(n,o)||e.all.nan(n,o))},e.sameType.api=["not"],e.string=e=>new String(e)instanceof String&&"string"==typeof e&&"[object String]"===t.call(e),e.undefined=e=>void 0===e,e.windowObject=e=>null!=e&&"object"==typeof e&&"setInterval"in e,e.stream=e=>null!==e&&"object"==typeof e&&"function"==typeof e.pipe,e.duplexStream=t=>e.writeableStream(t)&&e.readableStream(t),e.readableStream=t=>e.stream(t)&&!1!==t.readable&&"function"==typeof t._read&&"object"==typeof t._readableState,e.transformStream=t=>e.duplexStream(t)&&"function"==typeof t._transform,e.writeableStream=t=>e.stream(t)&&!1!==t.writable&&"function"==typeof t._write&&"object"==typeof t._writableState,e.empty=t=>{if(e.object(t)){const n=Object.getOwnPropertyNames(t).length;return!!(0===n||1===n&&e.array(t)||2===n&&e.arguments(t))}return""===t},e.map=e=>{const t=e.constructor?e.constructor+"":"";return/^function\s+Map\b/.test(t)},e.existy=e=>null!=e,e.falsy=e=>!e,e.truthy=a(e.falsy),e.above=(t,n)=>e.all.number(t,n)&&t>n,e.above.api=["not"],e.decimal=t=>e.number(t)&&t%1!=0,e.equal=(t,n)=>e.all.array(t,n)?t.length===n.length&&t.every((e=>n.includes(e))):e.all.object(t,n)?JSON.stringify(t)===JSON.stringify(n):e.all.number(t,n)?t===n&&1/t==1/n:e.all.string(t,n)||e.all.regexp(t,n)?`${t}`==`${n}`:!!e.all.boolean(t,n)&&t===n,e.equal.api=["not"],e.even=t=>e.number(t)&&t%2==0,e.finite=isFinite||(t=>e.not.infinite(t)&&e.not.nan(t)),e.infinite=e=>e===1/0||e===-1/0,e.integer=e=>Number.isInteger(e),e.negative=t=>e.number(t)&&t<0,e.odd=t=>e.number(t)&&(t%2==1||t%2==-1),e.positive=t=>e.number(t)&&t>0,e.under=(t,n)=>e.all.number(t,n)&&t<n,e.under.api=["not"],e.within=(t,n,o)=>e.all.number(t,n,o)&&t>n&&t<o,e.within.api=["not"];const d={affirmative:/^(?:1|t(?:rue)?|y(?:es)?|ok(?:ay)?)$/,alphaNumeric:/^[A-Za-z0-9]+$/,caPostalCode:/^(?!.*[DFIOQU])[A-VXY][0-9][A-Z]\s?[0-9][A-Z][0-9]$/,crawler:new RegExp("^.*("+["\\+https:\\/\\/developers.google.com\\/\\+\\/web\\/snippet\\/","ad\\smonitoring","adsbot","apex","applebot","archive.org_bot","baiduspider","bingbot","chromeheadless","cloudflare","cloudinary","crawler","curl","discordbot","duckduckbot","embedly","exabot","facebookexternalhit","facebot","flipboard","google","googlebot","gsa-crawler","gurujibot","guzzlehttp","heritrix","ia_archiver","insights","linkedinbot","ltx71","mediapartners","msnbot","odklbot","phantom\\.js","phantomjs","pingdom","pinterest","python","rtlnieuws","skypeuripreview","slackbot","slurp","spbot","telegrambot","test\\scertificate","testing","tiabot","tumblr ","twitterbot","vkshare","web\\sscraper","wget","yandexbot","whatsapp","orangebot","smtbot","qwantify","mj12bot","ahrefsbot","seznambot","panscient.com","duckduckgo-favicons-bot","uptimerobot","semrushbot","postman","dotbot","zoominfobot","ifttt","sogou","ru_bot","researchscan","nimbostratus-bot","slack-imgproxy","node-superagent","go-http-client","jersey","dataprovider.com","github-camo","dispatch","checkmarknetwork","screaming frog","whatweb","daum","netcraftsurveyagent","mojeekbot","surdotlybot","springbot"].join("|")+").*$","i"),creditCard:/^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/,dateString:/^(1[0-2]|0?[1-9])([/-])(3[01]|[12][0-9]|0?[1-9])(?:\2)(?:[0-9]{2})?[0-9]{2}$/,email:/^[a-zA-Z0-9][-_.+!#$%&'*/=?^`{|]{0,1}([a-zA-Z0-9][-_.+!#$%&'*/=?^`{|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-.]{0,1}([a-zA-Z][-.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([.-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i,eppPhone:/^\+[0-9]{1,3}\.[0-9]{4,14}(?:x.+)?$/,hexadecimal:/^(?:0x)?[0-9a-fA-F]+$/,hexColor:/^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/,ipv4:/^(?:(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.){3}(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])$/,ipv6:/^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i,macAddress:/^([0-9a-f]{2}[-:]){5}[0-9a-f]{2}$/i,nanpPhone:/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,socialSecurityNumber:/^(?!000|666)[0-8][0-9]{2}-?(?!00)[0-9]{2}-?(?!0000)[0-9]{4}$/,timeString:/^(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$/,ukPostCode:/^[A-Z]{1,2}[0-9RCHNQ][0-9A-Z]?\s?[0-9][ABD-HJLNP-UW-Z]{2}$|^[A-Z]{2}-?[0-9]{4}$/,url:/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/i,usZipCode:/^[0-9]{5}(?:-[0-9]{4})?$/},p=(t,n)=>{e[t]=o=>e.existy(o)&&n[t].test(o)};for(const e in d)Object.prototype.hasOwnProperty.call(d,e)&&p(e,d);e.ip=t=>e.ipv4(t)||e.ipv6(t),e.capitalized=t=>{if(e.not.string(t))return!1;const n=t.split(" ");for(const e of n)if(e.length){const t=e.charAt(0);if(t!==t.toUpperCase())return!1}return!0},e.endWith=(t,n)=>{if(e.not.string(t))return!1;n+="";const o=t.length-n.length;return o>=0&&t.indexOf(n,o)===o},e.endWith.api=["not"],e.include=(e,t)=>e.includes(t),e.include.api=["not"],e.umlaut=t=>e.string(t)&&e.array(t.match(/[\u00c4\u00e4\u00d6\u00f6\u00dc\u00fc\u00df]/g)),e.lowerCase=t=>e.string(t)&&t===t.toLowerCase(),e.palindrome=t=>!e.not.string(t)&&(t=t.replace(/[^a-zA-Z0-9]+/g,"").toLowerCase()).split("").every(((e,n)=>e===t[t.length-1-n])),e.space=t=>{if(e.not.char(t))return!1;const n=t.charCodeAt(0);return n>8&&n<14||32===n},e.startWith=(t,n)=>e.string(t)&&0===t.indexOf(n),e.startWith.api=["not"],e.upperCase=t=>e.string(t)&&t===t.toUpperCase();const h=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],f=["january","february","march","april","may","june","july","august","september","october","november","december"];e.day=(t,n)=>e.date(t)&&n.toLowerCase()===h[t.getDay()],e.day.api=["not"],e.dayLightSavingTime=e=>{const t=new Date(e.getFullYear(),0,1),n=new Date(e.getFullYear(),6,1),o=Math.max(t.getTimezoneOffset(),n.getTimezoneOffset());return e.getTimezoneOffset()<o},e.future=t=>{const n=new Date;return e.date(t)&&t.getTime()>n.getTime()},e.inDateRange=(t,n,o)=>{if(e.not.date(t)||e.not.date(n)||e.not.date(o))return!1;const r=t.getTime();return r>n.getTime()&&r<o.getTime()},e.inDateRange.api=["not"],e.inLastMonth=t=>e.inDateRange(t,new Date((new Date).setMonth((new Date).getMonth()-1)),new Date),e.inLastWeek=t=>e.inDateRange(t,new Date((new Date).setDate((new Date).getDate()-7)),new Date),e.inLastYear=t=>e.inDateRange(t,new Date((new Date).setFullYear((new Date).getFullYear()-1)),new Date),e.inNextMonth=t=>e.inDateRange(t,new Date,new Date((new Date).setMonth((new Date).getMonth()+1))),e.inNextWeek=t=>e.inDateRange(t,new Date,new Date((new Date).setDate((new Date).getDate()+7))),e.inNextYear=t=>e.inDateRange(t,new Date,new Date((new Date).setFullYear((new Date).getFullYear()+1))),e.leapYear=t=>e.number(t)&&(t%4==0&&t%100!=0||t%400==0),e.month=(t,n)=>e.date(t)&&n.toLowerCase()===f[t.getMonth()],e.month.api=["not"],e.past=t=>{const n=new Date;return e.date(t)&&t.getTime()<n.getTime()},e.quarterOfYear=(t,n)=>e.date(t)&&e.number(n)&&n===Math.floor((t.getMonth()+3)/3),e.quarterOfYear.api=["not"],e.today=t=>{const n=(new Date).toDateString();return e.date(t)&&t.toDateString()===n},e.tomorrow=t=>{const n=new Date,o=new Date(n.setDate(n.getDate()+1)).toDateString();return e.date(t)&&t.toDateString()===o},e.weekend=t=>e.date(t)&&(6===t.getDay()||0===t.getDay()),e.weekday=a(e.weekend),e.year=(t,n)=>e.date(t)&&e.number(n)&&n===t.getFullYear(),e.year.api=["not"],e.yesterday=t=>{const n=new Date,o=new Date(n.setDate(n.getDate()-1)).toDateString();return e.date(t)&&t.toDateString()===o};const g=e.windowObject("object"==typeof n.g&&n.g)&&n.g,m=e.windowObject("object"==typeof self&&self)&&self,w=e.windowObject("object"==typeof this&&this)&&this,y=g||m||w||Function("return this")(),b=m&&m.document,v=y.is,D=m?.navigator,C=(D?.userAgentData?.platform||D?.platform||"").toLowerCase(),_=(D?.userAgent||"").toLowerCase(),R=(D?.vendor||"").toLowerCase();return e.browser=()=>"undefined"!=typeof window&&void 0!==window.document,e.browser.api=["not"],e.nodejs=()=>"undefined"!=typeof process&&null!=process.versions&&null!=process.versions.node,e.nodejs.api=["not"],e.deno=()=>!1,e.deno.api=["not"],e.webworker=()=>"object"==typeof self&&self.constructor&&"DedicatedWorkerGlobalScope"===self.constructor.name,e.webworker.api=["not"],e.android=()=>/android/.test(_),e.android.api=["not"],e.androidPhone=()=>/android/.test(_)&&/mobile/.test(_),e.androidPhone.api=["not"],e.androidTablet=()=>/android/.test(_)&&!/mobile/.test(_),e.androidTablet.api=["not"],e.blackberry=()=>/blackberry/.test(_)||/bb10/.test(_),e.blackberry.api=["not"],e.chrome=t=>{const n=/google inc/.test(R)?_.match(/(?:chrome|crios)\/(\d+)/):null;return null!==n&&e.not.opera()&&l(n[1],t)},e.chrome.api=["not"],e.desktop=()=>e.not.mobile()&&e.not.tablet(),e.desktop.api=["not"],e.edge=e=>{const t=_.match(/edg(e|a|ios)?\/(\d+)/);return null!==t&&l(t[1],e)},e.edge.api=["not"],e.firefox=e=>{const t=_.match(/(?:firefox|fxios)\/(\d+)/);return null!==t&&l(t[1],e)},e.firefox.api=["not"],e.ie=e=>{const t=_.match(/(?:msie |trident.+?; rv:)(\d+)/);return null!==t&&l(t[1],e)},e.ie.api=["not"],e.ios=()=>e.iphone()||e.ipad()||e.ipod(),e.ios.api=["not"],e.ipad=e=>{const t=_.match(/\(ipad.*os (\d+)[._](\d+)/)||(_.includes("mac")&&"ontouchend"in b?_.match(/version\/(\d+)/):null);return null!==t&&l(t[1],e)},e.ipad.api=["not"],e.iphone=e=>{const t=_.match(/\(iphone.*os (\d+)[._](\d+)/);return null!==t&&l(t[1]||1,e)},e.iphone.api=["not"],e.ipod=e=>{const t=_.match(/ipod.+?os (\d+)/);return null!==t&&l(t[1],e)},e.ipod.api=["not"],e.linux=()=>/linux/.test(C)&&e.not.android(),e.linux.api=["not"],e.mac=()=>/mac/.test(C),e.mac.api=["not"],e.mobile=()=>e.iphone()||e.ipod()||e.androidPhone()||e.blackberry()||e.windowsPhone(),e.mobile.api=["not"],e.offline=a(e.online),e.offline.api=["not"],e.online=()=>!D||!0===D.onLine,e.online.api=["not"],e.opera=e=>{const t=_.match(/(?:^opera.+?version|opr)\/(\d+)/);return null!==t&&l(t[1],e)},e.opera.api=["not"],e.operaMini=e=>{const t=_.match(/opera mini\/(\d+)/);return null!==t&&l(t[1],e)},e.operaMini.api=["not"],e.phantom=e=>{const t=_.match(/phantomjs\/(\d+)/);return null!==t&&l(t[1],e)},e.phantom.api=["not"],e.safari=e=>{const t=_.match(/version\/(\d+)((?!chrome).)+?safari/);return null!==t&&l(t[1],e)},e.safari.api=["not"],e.tablet=()=>e.ipad()||e.androidTablet()||e.windowsTablet(),e.tablet.api=["not"],e.touchDevice=()=>!!b&&("ontouchstart"in m||"DocumentTouch"in m&&b instanceof DocumentTouch),e.touchDevice.api=["not"],e.windows=()=>/win/.test(C),e.windows.api=["not"],e.windowsPhone=()=>e.windows()&&/phone/.test(_),e.windowsPhone.api=["not"],e.windowsTablet=()=>e.windows()&&e.not.windowsPhone()&&/touch/.test(_),e.windowsTablet.api=["not"],e.propertyCount=(t,n)=>{if(e.not.object(t)||e.not.number(n))return!1;let o=0;for(const e in t)if(r.call(t,e)&&++o>n)return!1;return o===n},e.propertyCount.api=["not"],e.propertyDefined=(t,n)=>e.object(t)&&e.string(n)&&n in t,e.propertyDefined.api=["not"],e.thenable=t=>e.object(t)&&"function"==typeof t.then,e.inArray=(t,n)=>!e.not.array(n)&&n.includes(t),e.inArray.api=["not"],e.sorted=(t,n)=>{if(e.not.array(t))return!1;const o=u[n]||u[">="];for(const[e]of t.entries())if(e>=1&&!o(t[e],t[e-1]))return!1;return!0},(()=>{const t=e;for(const n in t)if(r.call(t,n)&&e.function(t[n])){const o=t[n].api||["not","all","any"];for(const t of o)"not"===t&&(e.not[n]=a(e[n])),"all"===t&&(e.all[n]=i(e[n])),"any"===t&&(e.any[n]=s(e[n]))}})(),e.setNamespace=()=>(y.is=v,this),e.setRegexp=(e,t)=>{for(const n in d)r.call(d,n)&&t===n&&(d[n]=e)},e},void 0===(o=(()=>r.is=a()).call(t,n,t,e))||(e.exports=o)},824:e=>{var t=1e3,n=60*t,o=60*n,r=24*o;function a(e,t,n,o){var r=t>=1.5*n;return Math.round(e/n)+" "+o+(r?"s":"")}e.exports=function(e,i){i=i||{};var s,u,l=typeof e;if("string"===l&&e.length>0)return function(e){if(!((e=String(e)).length>100)){var a=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(a){var i=parseFloat(a[1]);switch((a[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*i;case"weeks":case"week":case"w":return 6048e5*i;case"days":case"day":case"d":return i*r;case"hours":case"hour":case"hrs":case"hr":case"h":return i*o;case"minutes":case"minute":case"mins":case"min":case"m":return i*n;case"seconds":case"second":case"secs":case"sec":case"s":return i*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return i;default:return}}}}(e);if("number"===l&&isFinite(e))return i.long?(s=e,(u=Math.abs(s))>=r?a(s,u,r,"day"):u>=o?a(s,u,o,"hour"):u>=n?a(s,u,n,"minute"):u>=t?a(s,u,t,"second"):s+" ms"):function(e){var a=Math.abs(e);return a>=r?Math.round(e/r)+"d":a>=o?Math.round(e/o)+"h":a>=n?Math.round(e/n)+"m":a>=t?Math.round(e/t)+"s":e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var a=n[e]={exports:{}};return t[e].call(a.exports,a,a.exports,o),a.exports}o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var r={};(()=>{o.d(r,{Q:()=>h,I:()=>f});var t=o(187),n=o(227),a=o(284);const i=(c={default:()=>e.default},d={},o.d(d,c),d),s=n("astro_data"),u="astronomical_data_processing",l="astronomical_data_process_complete";var c,d;class p extends t{constructor(e){super(),this._reset()}get RawData(){return this._rawData}get Valid(){return this._isValid}get APIVersion(){let e;return this.Valid&&a.not.undefined(this.RawData)&&(e=this.RawData.apiversion),e}get Type(){let e;return this.Valid&&a.not.undefined(this.RawData)&&a.not.undefined(this.RawData.geometry)&&a.string(this.RawData.geometry.type)&&(e=this.RawData.geometry.type),e}get Latitude(){let e;return this.Valid&&a.not.undefined(this.RawData)&&a.not.undefined(this.RawData.geometry)&&a.array(this.RawData.geometry.coordinates)&&a.number(this.RawData.geometry.coordinates[1])&&(e=this.RawData.geometry.coordinates[1]),e}get Longitude(){let e;return this.Valid&&a.not.undefined(this.RawData)&&a.not.undefined(this.RawData.geometry)&&a.array(this.RawData.geometry.coordinates)&&a.number(this.RawData.geometry.coordinates[0])&&(e=this.RawData.geometry.coordinates[0]),e}get Date(){const e=this._internalDate;let t;return a.not.undefined(e)&&(t=new Date(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),0,0,0,0)),t}get LunarPhase(){let e;return this.Valid&&a.not.undefined(this.RawData)&&a.not.undefined(this.RawData.properties)&&a.not.undefined(this.RawData.properties.data)&&(a.string(this.RawData.properties.data.curphase)?e=this.RawData.properties.data.curphase:a.not.undefined(this.RawData.properties.data.closestphase)&&a.string(this.RawData.properties.data.closestphase.phase)&&(e=this.RawData.properties.data.closestphase.phase)),e}get TwilightStart(){return this._getSolarPhenomenonDateTime("Begin Civil Twilight")}get TwilightEnd(){return this._getSolarPhenomenonDateTime("End Civil Twilight")}get SolarRise(){return this._getSolarPhenomenonDateTime("Rise")}get SolarSet(){return this._getSolarPhenomenonDateTime("Set")}get SolarTransit(){return this._getSolarPhenomenonDateTime("Upper Transit")}get LunarRise(){return this._getLunarPhenomenonDateTime("Rise")}get LunarSet(){return this._getLunarPhenomenonDateTime("Set")}get LunarTransit(){return this._getLunarPhenomenonDateTime("Upper Transit")}get ObjectData(){return{valid:this.Valid,version:this.APIVersion,type:this.Type,date:this.Date,latitude:this.Latitude,longitude:this.Longitude,lunar_phase:this.LunarPhase,twilight_start:this.TwilightStart,twilight_end:this.TwilightEnd,solar_rise:this.SolarRise,solar_set:this.SolarSet,solar_transit:this.SolarTransit,lunar_rise:this.LunarRise,lunar_set:this.LunarSet,lunar_transit:this.LunarTransit}}RequestAstronomicalOneDayData(e){const t="{ID}",n="{YEAR}",o="{MONTH}",r="{DAY}",c="{LATITUDE}",d="{LONGITUDE}",h=`/api/rstt/oneday?ID=${t}&date=${n}-${o}-${r}&coords=${c},${d}&tz=0`;if(!a.not.undefined(e))throw new TypeError("config is unspecified.");if(a.not.object(e))throw new TypeError("Invalid configuration.");if(a.not.undefined(e.id)&&a.not.string(e.id))throw new RangeError(`Invalid configuration. ID=${e.id}`);if(a.not.undefined(e.date)&&a.not.date(e.date))throw new RangeError(`Invalid configuration. Date=${e.date}`);p.CheckLocation(e);let f="GrmpTech";a.not.undefined(e.id)&&a.above(e.id.length,0)&&a.not.equal(e.id,"AA")&&(f=e.id.substring(0,8));let g=new Date;a.not.undefined(e.date)&&(g=e.date);const m=new Date(Date.UTC(g.getFullYear(),g.getMonth(),g.getDate()));let w=h;w=w.replace(t,f),w=w.replace(n,m.getUTCFullYear().toString()),w=w.replace(o,(m.getUTCMonth()+1).toString()),w=w.replace(r,m.getUTCDate().toString()),w=w.replace(c,e.location.latitude.toString()),w=w.replace(d,e.location.longitude.toString()),this._reset();let y,b=0,v=!1,D=!1;const C={hostname:"aa.usno.navy.mil",protocol:"https:",port:443,path:w,method:"GET",timeout:1e4};s(`${e.location.latitude},${e.location.longitude}: request`);const _=i.default.request(C,(e=>{s(`statusCode: ${e.statusCode}`),s("headers:"),s(e.headers),e.on("data",(e=>{void 0===y?y=e:y+=e,b+=e.length})),e.on("end",(()=>{try{this._rawData=JSON.parse(y.toString()),s(`Response:\n${y.toString()}`),a.not.undefined(this.RawData.error)?(s(`Response error: '${this.RawData.error}'`),D=!0):this._isValid=!0}catch(e){s("Error parsing response."),s(e),D=!0}}))}));_.on("close",(()=>{setImmediate((()=>{this.emit(u,{processing:!1})})),a.falsy(v)&&(s("No response when getting astronomical data."),D=!0),s(`${e.location.latitude},${e.location.longitude}: close - resp:${v}  err:${D}`),setImmediate((()=>{this.emit(l,{status:D})}))})),_.on("response",(()=>{s(`${e.location.latitude},${e.location.longitude}: response`),v=!0})),_.on("timeout",(()=>{s(`${e.location.latitude},${e.location.longitude}: timeout - resp:${v}`),a.falsy(v)&&_.destroy()})),_.on("error",(t=>{s(`${e.location.latitude},${e.location.longitude}: error - ${v}`),s(t),D=!0})),this.emit(u,{processing:!0}),_.end()}_reset(){this._isValid=!1,this._rawData=void 0}get _internalDate(){let e;return this.Valid&&a.not.undefined(this.RawData)&&a.not.undefined(this.RawData.properties)&&a.not.undefined(this.RawData.properties.data)&&a.not.undefined(this.RawData.properties.data.year)&&a.not.undefined(this.RawData.properties.data.month)&&a.not.undefined(this.RawData.properties.data.day)&&a.not.undefined(this.RawData.properties.data.tz)&&a.equal(this.RawData.properties.data.tz,0)&&(e=new Date(Date.UTC(this.RawData.properties.data.year,this.RawData.properties.data.month-1,this.RawData.properties.data.day,0,0,0,0))),e}_getPhenomenonDateTime(e,t){const n=this._internalDate;let o;if(a.date(n)&&a.not.undefined(e)&&a.array(e)&&a.string(t)){const r=e.find((e=>{let n=!1;return a.not.undefined(e.phen)&&a.string(e.phen)&&a.not.undefined(e.time)&&a.string(e.time)&&(n=a.equal(e.phen.toLowerCase(),t.toLowerCase())),n}));if(a.not.undefined(r)&&a.not.undefined(r.time)&&a.string(r.time)){const e=r.time.split(":");a.array(e)&&a.equal(e.length,2)&&(n.setUTCHours(Number.parseInt(e[0])),n.setUTCMinutes(Number.parseInt(e[1])),o=new Date(n))}}return o}_getSolarPhenomenonDateTime(e){let t;return a.not.undefined(this.RawData)&&a.not.undefined(this.RawData.properties)&&a.not.undefined(this.RawData.properties.data)&&a.not.undefined(this.RawData.properties.data.sundata)&&a.array(this.RawData.properties.data.sundata)&&(t=this._getPhenomenonDateTime(this.RawData.properties.data.sundata,e)),t}_getLunarPhenomenonDateTime(e){let t;return a.not.undefined(this.RawData)&&a.not.undefined(this.RawData.properties)&&a.not.undefined(this.RawData.properties.data)&&a.not.undefined(this.RawData.properties.data.moondata)&&a.array(this.RawData.properties.data.moondata)&&(t=this._getPhenomenonDateTime(this.RawData.properties.data.moondata,e)),t}static CheckLocation(e){if(a.undefined(e.location)||a.not.object(e.location)||a.not.number(e.location.latitude)||a.not.number(e.location.longitude))throw new TypeError("Invalid configuration. Location");if(a.under(e.location.latitude,-90)||a.above(e.location.latitude,90))throw new RangeError(`Invalid Location. Latitide=${e.location.latitude}`);if(a.under(e.location.longitude,-180)||a.above(e.location.longitude,180))throw new RangeError(`Invalid Location. Longatude=${e.location.longitude}`)}}n("api");const h={API_EVENT_DATA_BUSY:"busy",API_EVENT_DATA_REQUEST_COMPLETE:"request_complete"};class f extends t{constructor(){super(),this._bindDestructorNormal=this._destructor.bind(this,{cleanup:!0}),this._bindDestructorAbnormal=this._destructor.bind(this,{exit:!0}),this._astroRSTOneDay=new p,this._astroRSTOneDay.on(u,this._handleRSTDataProcessing.bind(this)),this._astroRSTOneDay.on(l,this._handleRSTDataProcessComplete.bind(this)),this._busy=!1,this._pending=!1,process.on("exit",this._bindDestructorNormal.bind(this)),process.on("uncaughtException",this._bindDestructorAbnormal.bind(this))}async _destructor(e,t){(e.exit||e.cleanup)&&(this._log.debug("Terminating the astronomical data api."),this._log.debug(t))}get Version(){return"1.0.0"}get RSTOneDayData(){let e;return a.truthy(this._astroRSTOneDay)&&(e=this._astroRSTOneDay.ObjectData),e}RequestAstronomicalOneDayData(e){if(!a.not.undefined(e))throw new TypeError("config is unspecified.");if(a.not.object(e))throw new TypeError("Invalid configuration.");if(a.not.undefined(e.id)&&a.not.string(e.id))throw new RangeError(`Invalid configuration. ID=${e.id}`);if(a.not.undefined(e.date)&&a.not.date(e.date))throw new RangeError(`Invalid configuration. Date=${e.date}`);p.CheckLocation(e),e.id="GTAstro",this._astroRSTOneDay.RequestAstronomicalOneDayData(e)}_handleRSTDataProcessing(e){this._pending=!1,this._busy=e.processing,setImmediate((()=>{this.emit(h.API_EVENT_DATA_BUSY,{busy:this._busy})}))}_handleRSTDataProcessComplete(e){const t={status:e.status,data:this._astroRSTOneDay.ObjectData};setImmediate((()=>{this.emit(h.API_EVENT_DATA_REQUEST_COMPLETE,t)}))}}})();var a=r.Q,i=r.I;export{a as API_ASTRONOMICAL_DATA_EVENTS,i as AstronomicalDataAPI};