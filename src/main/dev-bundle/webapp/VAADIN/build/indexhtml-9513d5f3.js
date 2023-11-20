import{p as g,C as te,_ as b,a as ko,h as p,s as W,c as _,L as N,b as A,d as Gt,n as lt,r as Wt,e as Co}from"./theme-d6a0ec78.js";window.Vaadin=window.Vaadin||{};window.Vaadin.featureFlags=window.Vaadin.featureFlags||{};window.Vaadin.featureFlags.exampleFeatureFlag=!1;window.Vaadin.featureFlags.collaborationEngineBackend=!1;window.Vaadin.featureFlags.sideNavComponent=!0;function ke(o){return o=o||[],Array.isArray(o)?o:[o]}function P(o){return`[Vaadin.Router] ${o}`}function So(o){if(typeof o!="object")return String(o);const e=Object.prototype.toString.call(o).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(o)}`:e}const Ce="module",Se="nomodule",We=[Ce,Se];function dt(o){if(!o.match(/.+\.[m]?js$/))throw new Error(P(`Unsupported type for bundle "${o}": .js or .mjs expected.`))}function Kt(o){if(!o||!O(o.path))throw new Error(P('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=o.bundle,t=["component","redirect","bundle"];if(!H(o.action)&&!Array.isArray(o.children)&&!H(o.children)&&!$e(e)&&!t.some(n=>O(o[n])))throw new Error(P(`Expected route config "${o.path}" to include either "${t.join('", "')}" or "action" function but none found.`));if(e)if(O(e))dt(e);else if(We.some(n=>n in e))We.forEach(n=>n in e&&dt(e[n]));else throw new Error(P('Expected route bundle to include either "'+Se+'" or "'+Ce+'" keys, or both'));o.redirect&&["bundle","component"].forEach(n=>{n in o&&console.warn(P(`Route config "${o.path}" has both "redirect" and "${n}" properties, and "redirect" will always override the latter. Did you mean to only use "${n}"?`))})}function ct(o){ke(o).forEach(e=>Kt(e))}function ht(o,e){let t=document.head.querySelector('script[src="'+o+'"][async]');return t||(t=document.createElement("script"),t.setAttribute("src",o),e===Ce?t.setAttribute("type",Ce):e===Se&&t.setAttribute(Se,""),t.async=!0),new Promise((n,i)=>{t.onreadystatechange=t.onload=r=>{t.__dynamicImportLoaded=!0,n(r)},t.onerror=r=>{t.parentNode&&t.parentNode.removeChild(t),i(r)},t.parentNode===null?document.head.appendChild(t):t.__dynamicImportLoaded&&n()})}function $o(o){return O(o)?ht(o):Promise.race(We.filter(e=>e in o).map(e=>ht(o[e],e)))}function ie(o,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${o}`,{cancelable:o==="go",detail:e}))}function $e(o){return typeof o=="object"&&!!o}function H(o){return typeof o=="function"}function O(o){return typeof o=="string"}function Yt(o){const e=new Error(P(`Page not found (${o.pathname})`));return e.context=o,e.code=404,e}const Y=new class{};function Io(o){const e=o.port,t=o.protocol,r=t==="http:"&&e==="80"||t==="https:"&&e==="443"?o.hostname:o.host;return`${t}//${r}`}function pt(o){if(o.defaultPrevented||o.button!==0||o.shiftKey||o.ctrlKey||o.altKey||o.metaKey)return;let e=o.target;const t=o.composedPath?o.composedPath():o.path||[];for(let l=0;l<t.length;l++){const a=t[l];if(a.nodeName&&a.nodeName.toLowerCase()==="a"){e=a;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||Io(e))!==window.location.origin)return;const{pathname:i,search:r,hash:s}=e;ie("go",{pathname:i,search:r,hash:s})&&(o.preventDefault(),o&&o.type==="click"&&window.scrollTo(0,0))}const Ao={activate(){window.document.addEventListener("click",pt)},inactivate(){window.document.removeEventListener("click",pt)}},To=/Trident/.test(navigator.userAgent);To&&!H(window.PopStateEvent)&&(window.PopStateEvent=function(o,e){e=e||{};var t=document.createEvent("Event");return t.initEvent(o,!!e.bubbles,!!e.cancelable),t.state=e.state||null,t},window.PopStateEvent.prototype=window.Event.prototype);function ut(o){if(o.state==="vaadin-router-ignore")return;const{pathname:e,search:t,hash:n}=window.location;ie("go",{pathname:e,search:t,hash:n})}const No={activate(){window.addEventListener("popstate",ut)},inactivate(){window.removeEventListener("popstate",ut)}};var ee=to,Ro=Xe,Oo=Mo,Po=Qt,Lo=eo,Jt="/",Xt="./",Vo=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function Xe(o,e){for(var t=[],n=0,i=0,r="",s=e&&e.delimiter||Jt,l=e&&e.delimiters||Xt,a=!1,d;(d=Vo.exec(o))!==null;){var c=d[0],u=d[1],h=d.index;if(r+=o.slice(i,h),i=h+c.length,u){r+=u[1],a=!0;continue}var m="",rt=o[i],yo=d[2],bo=d[3],wo=d[4],ve=d[5];if(!a&&r.length){var De=r.length-1;l.indexOf(r[De])>-1&&(m=r[De],r=r.slice(0,De))}r&&(t.push(r),r="",a=!1);var _o=m!==""&&rt!==void 0&&rt!==m,xo=ve==="+"||ve==="*",Eo=ve==="?"||ve==="*",st=m||s,at=bo||wo;t.push({name:yo||n++,prefix:m,delimiter:st,optional:Eo,repeat:xo,partial:_o,pattern:at?Do(at):"[^"+D(st)+"]+?"})}return(r||i<o.length)&&t.push(r+o.substr(i)),t}function Mo(o,e){return Qt(Xe(o,e))}function Qt(o){for(var e=new Array(o.length),t=0;t<o.length;t++)typeof o[t]=="object"&&(e[t]=new RegExp("^(?:"+o[t].pattern+")$"));return function(n,i){for(var r="",s=i&&i.encode||encodeURIComponent,l=0;l<o.length;l++){var a=o[l];if(typeof a=="string"){r+=a;continue}var d=n?n[a.name]:void 0,c;if(Array.isArray(d)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(d.length===0){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var u=0;u<d.length;u++){if(c=s(d[u],a),!e[l].test(c))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');r+=(u===0?a.prefix:a.delimiter)+c}continue}if(typeof d=="string"||typeof d=="number"||typeof d=="boolean"){if(c=s(String(d),a),!e[l].test(c))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+c+'"');r+=a.prefix+c;continue}if(a.optional){a.partial&&(r+=a.prefix);continue}throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"))}return r}}function D(o){return o.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Do(o){return o.replace(/([=!:$/()])/g,"\\$1")}function Zt(o){return o&&o.sensitive?"":"i"}function jo(o,e){if(!e)return o;var t=o.source.match(/\((?!\?)/g);if(t)for(var n=0;n<t.length;n++)e.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return o}function zo(o,e,t){for(var n=[],i=0;i<o.length;i++)n.push(to(o[i],e,t).source);return new RegExp("(?:"+n.join("|")+")",Zt(t))}function Uo(o,e,t){return eo(Xe(o,t),e,t)}function eo(o,e,t){t=t||{};for(var n=t.strict,i=t.start!==!1,r=t.end!==!1,s=D(t.delimiter||Jt),l=t.delimiters||Xt,a=[].concat(t.endsWith||[]).map(D).concat("$").join("|"),d=i?"^":"",c=o.length===0,u=0;u<o.length;u++){var h=o[u];if(typeof h=="string")d+=D(h),c=u===o.length-1&&l.indexOf(h[h.length-1])>-1;else{var m=h.repeat?"(?:"+h.pattern+")(?:"+D(h.delimiter)+"(?:"+h.pattern+"))*":h.pattern;e&&e.push(h),h.optional?h.partial?d+=D(h.prefix)+"("+m+")?":d+="(?:"+D(h.prefix)+"("+m+"))?":d+=D(h.prefix)+"("+m+")"}}return r?(n||(d+="(?:"+s+")?"),d+=a==="$"?"$":"(?="+a+")"):(n||(d+="(?:"+s+"(?="+a+"))?"),c||(d+="(?="+s+"|"+a+")")),new RegExp(d,Zt(t))}function to(o,e,t){return o instanceof RegExp?jo(o,e):Array.isArray(o)?zo(o,e,t):Uo(o,e,t)}ee.parse=Ro;ee.compile=Oo;ee.tokensToFunction=Po;ee.tokensToRegExp=Lo;const{hasOwnProperty:Fo}=Object.prototype,Ke=new Map;Ke.set("|false",{keys:[],pattern:/(?:)/});function mt(o){try{return decodeURIComponent(o)}catch{return o}}function Bo(o,e,t,n,i){t=!!t;const r=`${o}|${t}`;let s=Ke.get(r);if(!s){const d=[];s={keys:d,pattern:ee(o,d,{end:t,strict:o===""})},Ke.set(r,s)}const l=s.pattern.exec(e);if(!l)return null;const a=Object.assign({},i);for(let d=1;d<l.length;d++){const c=s.keys[d-1],u=c.name,h=l[d];(h!==void 0||!Fo.call(a,u))&&(c.repeat?a[u]=h?h.split(c.delimiter).map(mt):[]:a[u]=h&&mt(h))}return{path:l[0],keys:(n||[]).concat(s.keys),params:a}}function oo(o,e,t,n,i){let r,s,l=0,a=o.path||"";return a.charAt(0)==="/"&&(t&&(a=a.substr(1)),t=!0),{next(d){if(o===d)return{done:!0};const c=o.__children=o.__children||o.children;if(!r&&(r=Bo(a,e,!c,n,i),r))return{done:!1,value:{route:o,keys:r.keys,params:r.params,path:r.path}};if(r&&c)for(;l<c.length;){if(!s){const h=c[l];h.parent=o;let m=r.path.length;m>0&&e.charAt(m)==="/"&&(m+=1),s=oo(h,e.substr(m),t,r.keys,r.params)}const u=s.next(d);if(!u.done)return{done:!1,value:u.value};s=null,l++}return{done:!0}}}}function qo(o){if(H(o.route.action))return o.route.action(o)}function Ho(o,e){let t=e;for(;t;)if(t=t.parent,t===o)return!0;return!1}function Go(o){let e=`Path '${o.pathname}' is not properly resolved due to an error.`;const t=(o.route||{}).path;return t&&(e+=` Resolution had failed on route: '${t}'`),e}function Wo(o,e){const{route:t,path:n}=e;if(t&&!t.__synthetic){const i={path:n,route:t};if(!o.chain)o.chain=[];else if(t.parent){let r=o.chain.length;for(;r--&&o.chain[r].route&&o.chain[r].route!==t.parent;)o.chain.pop()}o.chain.push(i)}}class se{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||qo,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){ct(e);const t=[...ke(e)];this.root.__children=t}addRoutes(e){return ct(e),this.root.__children.push(...ke(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,O(e)?{pathname:e}:e),n=oo(this.root,this.__normalizePathname(t.pathname),this.baseUrl),i=this.resolveRoute;let r=null,s=null,l=t;function a(d,c=r.value.route,u){const h=u===null&&r.value.route;return r=s||n.next(h),s=null,!d&&(r.done||!Ho(c,r.value.route))?(s=r,Promise.resolve(Y)):r.done?Promise.reject(Yt(t)):(l=Object.assign(l?{chain:l.chain?l.chain.slice(0):[]}:{},t,r.value),Wo(l,r.value),Promise.resolve(i(l)).then(m=>m!=null&&m!==Y?(l.result=m.result||m,l):a(d,c,m)))}return t.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(d=>{const c=Go(l);if(d?console.warn(c):d=new Error(c),d.context=d.context||l,d instanceof DOMException||(d.code=d.code||500),this.errorHandler)return l.result=this.errorHandler(d),l;throw d})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,n=this.constructor.__createUrl(e,t).href;if(n.slice(0,t.length)===t)return n.slice(t.length)}}se.pathToRegexp=ee;const{pathToRegexp:vt}=se,gt=new Map;function no(o,e,t){const n=e.name||e.component;if(n&&(o.has(n)?o.get(n).push(e):o.set(n,[e])),Array.isArray(t))for(let i=0;i<t.length;i++){const r=t[i];r.parent=e,no(o,r,r.__children||r.children)}}function ft(o,e){const t=o.get(e);if(t&&t.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return t&&t[0]}function yt(o){let e=o.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function Ko(o,e={}){if(!(o instanceof se))throw new TypeError("An instance of Resolver is expected");const t=new Map;return(n,i)=>{let r=ft(t,n);if(!r&&(t.clear(),no(t,o.root,o.root.__children),r=ft(t,n),!r))throw new Error(`Route "${n}" not found`);let s=gt.get(r.fullPath);if(!s){let a=yt(r),d=r.parent;for(;d;){const m=yt(d);m&&(a=m.replace(/\/$/,"")+"/"+a.replace(/^\//,"")),d=d.parent}const c=vt.parse(a),u=vt.tokensToFunction(c),h=Object.create(null);for(let m=0;m<c.length;m++)O(c[m])||(h[c[m].name]=!0);s={toPath:u,keys:h},gt.set(a,s),r.fullPath=a}let l=s.toPath(i,e)||"/";if(e.stringifyQueryParams&&i){const a={},d=Object.keys(i);for(let u=0;u<d.length;u++){const h=d[u];s.keys[h]||(a[h]=i[h])}const c=e.stringifyQueryParams(a);c&&(l+=c.charAt(0)==="?"?c:`?${c}`)}return l}}let bt=[];function Yo(o){bt.forEach(e=>e.inactivate()),o.forEach(e=>e.activate()),bt=o}const Jo=o=>{const e=getComputedStyle(o).getPropertyValue("animation-name");return e&&e!=="none"},Xo=(o,e)=>{const t=()=>{o.removeEventListener("animationend",t),e()};o.addEventListener("animationend",t)};function wt(o,e){return o.classList.add(e),new Promise(t=>{if(Jo(o)){const n=o.getBoundingClientRect(),i=`height: ${n.bottom-n.top}px; width: ${n.right-n.left}px`;o.setAttribute("style",`position: absolute; ${i}`),Xo(o,()=>{o.classList.remove(e),o.removeAttribute("style"),t()})}else o.classList.remove(e),t()})}const Qo=256;function je(o){return o!=null}function Zo(o){const e=Object.assign({},o);return delete e.next,e}function R({pathname:o="",search:e="",hash:t="",chain:n=[],params:i={},redirectFrom:r,resolver:s},l){const a=n.map(d=>d.route);return{baseUrl:s&&s.baseUrl||"",pathname:o,search:e,hash:t,routes:a,route:l||a.length&&a[a.length-1]||null,params:i,redirectFrom:r,getUrl:(d={})=>_e(j.pathToRegexp.compile(io(a))(Object.assign({},i,d)),s)}}function _t(o,e){const t=Object.assign({},o.params);return{redirect:{pathname:e,from:o.pathname,params:t}}}function en(o,e){e.location=R(o);const t=o.chain.map(n=>n.route).indexOf(o.route);return o.chain[t].element=e,e}function we(o,e,t){if(H(o))return o.apply(t,e)}function xt(o,e,t){return n=>{if(n&&(n.cancel||n.redirect))return n;if(t)return we(t[o],e,t)}}function tn(o,e){if(!Array.isArray(o)&&!$e(o))throw new Error(P(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${o}`));e.__children=[];const t=ke(o);for(let n=0;n<t.length;n++)Kt(t[n]),e.__children.push(t[n])}function ge(o){if(o&&o.length){const e=o[0].parentNode;for(let t=0;t<o.length;t++)e.removeChild(o[t])}}function _e(o,e){const t=e.__effectiveBaseUrl;return t?e.constructor.__createUrl(o.replace(/^\//,""),t).pathname:o}function io(o){return o.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class j extends se{constructor(e,t){const n=document.head.querySelector("base"),i=n&&n.getAttribute("href");super([],Object.assign({baseUrl:i&&se.__createUrl(i,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=s=>this.__resolveRoute(s);const r=j.NavigationTrigger;j.setTriggers.apply(j,Object.keys(r).map(s=>r[s])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=R({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let n=Promise.resolve();H(t.children)&&(n=n.then(()=>t.children(Zo(e))).then(r=>{!je(r)&&!H(t.children)&&(r=t.children),tn(r,t)}));const i={redirect:r=>_t(e,r),component:r=>{const s=document.createElement(r);return this.__createdByRouter.set(s,!0),s}};return n.then(()=>{if(this.__isLatestRender(e))return we(t.action,[e,i],t)}).then(r=>{if(je(r)&&(r instanceof HTMLElement||r.redirect||r===Y))return r;if(O(t.redirect))return i.redirect(t.redirect);if(t.bundle)return $o(t.bundle).then(()=>{},()=>{throw new Error(P(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})}).then(r=>{if(je(r))return r;if(O(t.component))return i.component(t.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const n=++this.__lastStartedRenderId,i=Object.assign({search:"",hash:""},O(e)?{pathname:e}:e,{__renderId:n});return this.ready=this.resolve(i).then(r=>this.__fullyResolveChain(r)).then(r=>{if(this.__isLatestRender(r)){const s=this.__previousContext;if(r===s)return this.__updateBrowserHistory(s,!0),this.location;if(this.location=R(r),t&&this.__updateBrowserHistory(r,n===1),ie("location-changed",{router:this,location:this.location}),r.__skipAttach)return this.__copyUnchangedElements(r,s),this.__previousContext=r,this.location;this.__addAppearingContent(r,s);const l=this.__animateIfNeeded(r);return this.__runOnAfterEnterCallbacks(r),this.__runOnAfterLeaveCallbacks(r,s),l.then(()=>{if(this.__isLatestRender(r))return this.__removeDisappearingContent(),this.__previousContext=r,this.location})}}).catch(r=>{if(n===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(i),ge(this.__outlet&&this.__outlet.children),this.location=R(Object.assign(i,{resolver:this})),ie("error",Object.assign({router:this,error:r},i)),r}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(n=>{const r=n!==t?n:e,l=_e(io(n.chain),n.resolver)===n.pathname,a=(d,c=d.route,u)=>d.next(void 0,c,u).then(h=>h===null||h===Y?l?d:c.parent!==null?a(d,c.parent,h):h:h);return a(n).then(d=>{if(d===null||d===Y)throw Yt(r);return d&&d!==Y&&d!==n?this.__fullyResolveChain(r,d):this.__amendWithOnBeforeCallbacks(n)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(en(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(n=>this.__findComponentContextAfterAllRedirects(n)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(P(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${So(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},n=t.chain||[],i=e.chain;let r=Promise.resolve();const s=()=>({cancel:!0}),l=a=>_t(e,a);if(e.__divergedChainIndex=0,e.__skipAttach=!1,n.length){for(let a=0;a<Math.min(n.length,i.length)&&!(n[a].route!==i[a].route||n[a].path!==i[a].path&&n[a].element!==i[a].element||!this.__isReusableElement(n[a].element,i[a].element));a=++e.__divergedChainIndex);if(e.__skipAttach=i.length===n.length&&e.__divergedChainIndex==i.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let a=i.length-1;a>=0;a--)r=this.__runOnBeforeLeaveCallbacks(r,e,{prevent:s},n[a]);for(let a=0;a<i.length;a++)r=this.__runOnBeforeEnterCallbacks(r,e,{prevent:s,redirect:l},i[a]),n[a].element.location=R(e,n[a].route)}else for(let a=n.length-1;a>=e.__divergedChainIndex;a--)r=this.__runOnBeforeLeaveCallbacks(r,e,{prevent:s},n[a])}if(!e.__skipAttach)for(let a=0;a<i.length;a++)a<e.__divergedChainIndex?a<n.length&&n[a].element&&(n[a].element.location=R(e,n[a].route)):(r=this.__runOnBeforeEnterCallbacks(r,e,{prevent:s,redirect:l},i[a]),i[a].element&&(i[a].element.location=R(e,i[a].route)));return r.then(a=>{if(a){if(a.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(a.redirect)return this.__redirect(a.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,n,i){const r=R(t);return e.then(s=>{if(this.__isLatestRender(t))return xt("onBeforeLeave",[r,n,this],i.element)(s)}).then(s=>{if(!(s||{}).redirect)return s})}__runOnBeforeEnterCallbacks(e,t,n,i){const r=R(t,i.route);return e.then(s=>{if(this.__isLatestRender(t))return xt("onBeforeEnter",[r,n,this],i.element)(s)})}__isReusableElement(e,t){return e&&t?this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,n){if(t>Qo)throw new Error(P(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:n})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(P(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:n=""},i){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==n){const r=i?"replaceState":"pushState";window.history[r](null,document.title,e+t+n),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let n=this.__outlet;for(let i=0;i<e.__divergedChainIndex;i++){const r=t&&t.chain[i].element;if(r)if(r.parentNode===n)e.chain[i].element=r,n=r;else break}return n}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const n=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(n.children).filter(r=>this.__addedByRouter.get(r)&&r!==e.result);let i=n;for(let r=e.__divergedChainIndex;r<e.chain.length;r++){const s=e.chain[r].element;s&&(i.appendChild(s),this.__addedByRouter.set(s,!0),i===n&&this.__appearingContent.push(s),i=s)}}__removeDisappearingContent(){this.__disappearingContent&&ge(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(ge(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let n=t.chain.length-1;n>=e.__divergedChainIndex&&this.__isLatestRender(e);n--){const i=t.chain[n].element;if(i)try{const r=R(e);we(i.onAfterLeave,[r,{},t.resolver],i)}finally{this.__disappearingContent.indexOf(i)>-1&&ge(i.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const n=e.chain[t].element||{},i=R(e,e.chain[t].route);we(n.onAfterEnter,[i,{},e.resolver],n)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],n=(this.__appearingContent||[])[0],i=[],r=e.chain;let s;for(let l=r.length;l>0;l--)if(r[l-1].route.animate){s=r[l-1].route.animate;break}if(t&&n&&s){const l=$e(s)&&s.leave||"leaving",a=$e(s)&&s.enter||"entering";i.push(wt(t,l)),i.push(wt(n,a))}return Promise.all(i).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:n,hash:i}=e?e.detail:window.location;O(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:n,hash:i},!0))}static setTriggers(...e){Yo(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=Ko(this)),_e(this.__urlForName(e,t),this)}urlForPath(e,t){return _e(j.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:n,hash:i}=O(e)?this.__createUrl(e,"http://a"):e;return ie("go",{pathname:t,search:n,hash:i})}}const on=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,xe=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function nn(){function o(){return!0}return ro(o)}function rn(){try{return sn()?!0:an()?xe?!ln():!nn():!1}catch{return!1}}function sn(){return localStorage.getItem("vaadin.developmentmode.force")}function an(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function ln(){return!!(xe&&Object.keys(xe).map(e=>xe[e]).filter(e=>e.productionMode).length>0)}function ro(o,e){if(typeof o!="function")return;const t=on.exec(o.toString());if(t)try{o=new Function(t[1])}catch(n){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",n)}return o(e)}window.Vaadin=window.Vaadin||{};const Et=function(o,e){if(window.Vaadin.developmentMode)return ro(o,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=rn());function dn(){}const cn=function(){if(typeof Et=="function")return Et(dn)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});cn();j.NavigationTrigger={POPSTATE:No,CLICK:Ao};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function x(o){return g({...o,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hn=({finisher:o,descriptor:e})=>(t,n)=>{var i;if(n!==void 0){const r=t.constructor;e!==void 0&&Object.defineProperty(t,n,e(n)),o==null||o(r,n)}else{const r=(i=t.originalKey)!==null&&i!==void 0?i:t.key,s=e!=null?{kind:"method",placement:"prototype",key:r,descriptor:e(t.key)}:{...t,key:r};return o!=null&&(s.finisher=function(l){o(l,r)}),s}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ue(o,e){return hn({descriptor:t=>{const n={get(){var i,r;return(r=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(o))!==null&&r!==void 0?r:null},enumerable:!0,configurable:!0};if(e){const i=typeof t=="symbol"?Symbol():`__${t}`;n.get=function(){var r,s;return this[i]===void 0&&(this[i]=(s=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(o))!==null&&s!==void 0?s:null),this[i]}}return n}})}const ae=window;ae.Vaadin=ae.Vaadin||{};ae.Vaadin.registrations=ae.Vaadin.registrations||[];ae.Vaadin.registrations.push({is:"@vaadin/common-frontend",version:"0.0.18"});class kt extends Error{}const oe=window.document.body,f=window;class pn{constructor(e){this.response=void 0,this.pathname="",this.isActive=!1,this.baseRegex=/^\//,this.navigation="",oe.$=oe.$||[],this.config=e||{},f.Vaadin=f.Vaadin||{},f.Vaadin.Flow=f.Vaadin.Flow||{},f.Vaadin.Flow.clients={TypeScript:{isActive:()=>this.isActive}};const t=document.head.querySelector("base");this.baseRegex=new RegExp(`^${(document.baseURI||t&&t.href||"/").replace(/^https?:\/\/[^/]+/i,"")}`),this.appShellTitle=document.title,this.addConnectionIndicator()}get serverSideRoutes(){return[{path:"(.*)",action:this.action}]}loadingStarted(){this.isActive=!0,f.Vaadin.connectionState.loadingStarted()}loadingFinished(){this.isActive=!1,f.Vaadin.connectionState.loadingFinished(),!f.Vaadin.listener&&(f.Vaadin.listener={},document.addEventListener("click",e=>{e.target&&(e.target.hasAttribute("router-link")?this.navigation="link":e.composedPath().some(t=>t.nodeName==="A")&&(this.navigation="client"))},{capture:!0}))}get action(){return async e=>{if(this.pathname=e.pathname,f.Vaadin.connectionState.online)try{await this.flowInit()}catch(t){if(t instanceof kt)return f.Vaadin.connectionState.state=te.CONNECTION_LOST,this.offlineStubAction();throw t}else return this.offlineStubAction();return this.container.onBeforeEnter=(t,n)=>this.flowNavigate(t,n),this.container.onBeforeLeave=(t,n)=>this.flowLeave(t,n),this.container}}async flowLeave(e,t){const{connectionState:n}=f.Vaadin;return this.pathname===e.pathname||!this.isFlowClientLoaded()||n.offline?Promise.resolve({}):new Promise(i=>{this.loadingStarted(),this.container.serverConnected=r=>{i(t&&r?t.prevent():{}),this.loadingFinished()},oe.$server.leaveNavigation(this.getFlowRoutePath(e),this.getFlowRouteQuery(e))})}async flowNavigate(e,t){return this.response?new Promise(n=>{this.loadingStarted(),this.container.serverConnected=(i,r)=>{t&&i?n(t.prevent()):t&&t.redirect&&r?n(t.redirect(r.pathname)):(this.container.style.display="",n(this.container)),this.loadingFinished()},this.container.serverPaused=()=>{this.loadingFinished()},oe.$server.connectClient(this.getFlowRoutePath(e),this.getFlowRouteQuery(e),this.appShellTitle,history.state,this.navigation),this.navigation="history"}):Promise.resolve(this.container)}getFlowRoutePath(e){return decodeURIComponent(e.pathname).replace(this.baseRegex,"")}getFlowRouteQuery(e){return e.search&&e.search.substring(1)||""}async flowInit(){if(!this.isFlowClientLoaded()){this.loadingStarted(),this.response=await this.flowInitUi();const{pushScript:e,appConfig:t}=this.response;typeof e=="string"&&await this.loadScript(e);const{appId:n}=t;await(await b(()=>import("./FlowBootstrap-feff2646.js"),[],import.meta.url)).init(this.response),typeof this.config.imports=="function"&&(this.injectAppIdScript(n),await this.config.imports());const r=`flow-container-${n.toLowerCase()}`,s=document.querySelector(r);s?this.container=s:(this.container=document.createElement(r),this.container.id=n),oe.$[n]=this.container;const l=await b(()=>import("./FlowClient-341d667e.js"),[],import.meta.url);await this.flowInitClient(l),this.loadingFinished()}return this.container&&!this.container.isConnected&&(this.container.style.display="none",document.body.appendChild(this.container)),this.response}async loadScript(e){return new Promise((t,n)=>{const i=document.createElement("script");i.onload=()=>t(),i.onerror=n,i.src=e,document.body.appendChild(i)})}injectAppIdScript(e){const t=e.substring(0,e.lastIndexOf("-")),n=document.createElement("script");n.type="module",n.setAttribute("data-app-id",t),document.body.append(n)}async flowInitClient(e){return e.init(),new Promise(t=>{const n=setInterval(()=>{Object.keys(f.Vaadin.Flow.clients).filter(r=>r!=="TypeScript").reduce((r,s)=>r||f.Vaadin.Flow.clients[s].isActive(),!1)||(clearInterval(n),t())},5)})}async flowInitUi(){const e=f.Vaadin&&f.Vaadin.TypeScript&&f.Vaadin.TypeScript.initial;return e?(f.Vaadin.TypeScript.initial=void 0,Promise.resolve(e)):new Promise((t,n)=>{const r=new XMLHttpRequest,s=`?v-r=init&location=${encodeURIComponent(this.getFlowRoutePath(location))}&query=${encodeURIComponent(this.getFlowRouteQuery(location))}`;r.open("GET",s),r.onerror=()=>n(new kt(`Invalid server response when initializing Flow UI.
        ${r.status}
        ${r.responseText}`)),r.onload=()=>{const l=r.getResponseHeader("content-type");l&&l.indexOf("application/json")!==-1?t(JSON.parse(r.responseText)):r.onerror()},r.send()})}addConnectionIndicator(){ko.create(),f.addEventListener("online",()=>{if(!this.isFlowClientLoaded()){f.Vaadin.connectionState.state=te.RECONNECTING;const e=new XMLHttpRequest;e.open("HEAD","sw.js"),e.onload=()=>{f.Vaadin.connectionState.state=te.CONNECTED},e.onerror=()=>{f.Vaadin.connectionState.state=te.CONNECTION_LOST},setTimeout(()=>e.send(),50)}}),f.addEventListener("offline",()=>{this.isFlowClientLoaded()||(f.Vaadin.connectionState.state=te.CONNECTION_LOST)})}async offlineStubAction(){const e=document.createElement("iframe"),t="./offline-stub.html";e.setAttribute("src",t),e.setAttribute("style","width: 100%; height: 100%; border: 0"),this.response=void 0;let n;const i=()=>{n!==void 0&&(f.Vaadin.connectionState.removeStateChangeListener(n),n=void 0)};return e.onBeforeEnter=(r,s,l)=>{n=()=>{f.Vaadin.connectionState.online&&(i(),l.render(r,!1))},f.Vaadin.connectionState.addStateChangeListener(n)},e.onBeforeLeave=(r,s,l)=>{i()},e}isFlowClientLoaded(){return this.response!==void 0}}const{serverSideRoutes:un}=new pn({imports:()=>b(()=>import("./generated-flow-imports-836c5ffd.js"),["./generated-flow-imports-836c5ffd.js","./theme-d6a0ec78.js"],import.meta.url)}),mn=[...un],vn=new j(document.querySelector("#outlet"));vn.setRoutes(mn);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const so=Symbol.for(""),gn=o=>{if((o==null?void 0:o.r)===so)return o==null?void 0:o._$litStatic$},fn=o=>{if(o._$litStatic$!==void 0)return o._$litStatic$;throw new Error(`Value passed to 'literal' function must be a 'literal' result: ${o}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)},fe=(o,...e)=>({_$litStatic$:e.reduce((t,n,i)=>t+fn(n)+o[i+1],o[0]),r:so}),Ct=new Map,yn=o=>(e,...t)=>{const n=t.length;let i,r;const s=[],l=[];let a=0,d=!1,c;for(;a<n;){for(c=e[a];a<n&&(r=t[a],(i=gn(r))!==void 0);)c+=i+e[++a],d=!0;a!==n&&l.push(r),s.push(c),a++}if(a===n&&s.push(e[n]),d){const u=s.join("$$lit$$");e=Ct.get(u),e===void 0&&(s.raw=s,Ct.set(u,e=s)),t=l}return o(e,...t)},bn=yn(p),wn="modulepreload",_n=function(o){return"/"+o},St={},y=function(o,e,t){if(!e||e.length===0)return o();const n=document.getElementsByTagName("link");return Promise.all(e.map(i=>{if(i=_n(i),i in St)return;St[i]=!0;const r=i.endsWith(".css"),s=r?'[rel="stylesheet"]':"";if(t)for(let a=n.length-1;a>=0;a--){const d=n[a];if(d.href===i&&(!r||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${s}`))return;const l=document.createElement("link");if(l.rel=r?"stylesheet":wn,r||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),r)return new Promise((a,d)=>{l.addEventListener("load",a),l.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>o()).catch(i=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=i,window.dispatchEvent(r),!r.defaultPrevented)throw i})};function xn(o){var e;const t=[];for(;o&&o.parentNode;){const n=En(o);if(n.nodeId!==-1){if((e=n.element)!=null&&e.tagName.startsWith("FLOW-CONTAINER-"))break;t.push(n)}o=o.parentElement?o.parentElement:o.parentNode.host}return t.reverse()}function En(o){const e=window.Vaadin;if(e&&e.Flow){const{clients:t}=e.Flow,n=Object.keys(t);for(const i of n){const r=t[i];if(r.getNodeId){const s=r.getNodeId(o);if(s>=0)return{nodeId:s,uiId:r.getUIId(),element:o}}}}return{nodeId:-1,uiId:-1,element:void 0}}function kn(o,e){if(o.contains(e))return!0;let t=e;const n=e.ownerDocument;for(;t&&t!==n&&t!==o;)t=t.parentNode||(t instanceof ShadowRoot?t.host:null);return t===o}const Cn=(o,e)=>{const t=o[e];return t?typeof t=="function"?t():Promise.resolve(t):new Promise((n,i)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(i.bind(null,new Error("Unknown variable dynamic import: "+e)))})};var k=(o=>(o.text="text",o.checkbox="checkbox",o.range="range",o.color="color",o))(k||{});const L={lumoSize:["--lumo-size-xs","--lumo-size-s","--lumo-size-m","--lumo-size-l","--lumo-size-xl"],lumoSpace:["--lumo-space-xs","--lumo-space-s","--lumo-space-m","--lumo-space-l","--lumo-space-xl"],lumoBorderRadius:["0","--lumo-border-radius-m","--lumo-border-radius-l"],lumoFontSize:["--lumo-font-size-xxs","--lumo-font-size-xs","--lumo-font-size-s","--lumo-font-size-m","--lumo-font-size-l","--lumo-font-size-xl","--lumo-font-size-xxl","--lumo-font-size-xxxl"],lumoTextColor:["--lumo-header-text-color","--lumo-body-text-color","--lumo-secondary-text-color","--lumo-tertiary-text-color","--lumo-disabled-text-color","--lumo-primary-text-color","--lumo-error-text-color","--lumo-success-text-color"],basicBorderSize:["0px","1px","2px","3px"]},Sn=Object.freeze(Object.defineProperty({__proto__:null,presets:L},Symbol.toStringTag,{value:"Module"})),ne={textColor:{propertyName:"color",displayName:"Text color",editorType:k.color,presets:L.lumoTextColor},fontSize:{propertyName:"font-size",displayName:"Font size",editorType:k.range,presets:L.lumoFontSize,icon:"font"},fontWeight:{propertyName:"font-weight",displayName:"Bold",editorType:k.checkbox,checkedValue:"bold"},fontStyle:{propertyName:"font-style",displayName:"Italic",editorType:k.checkbox,checkedValue:"italic"}},K={backgroundColor:{propertyName:"background-color",displayName:"Background color",editorType:k.color},borderColor:{propertyName:"border-color",displayName:"Border color",editorType:k.color},borderWidth:{propertyName:"border-width",displayName:"Border width",editorType:k.range,presets:L.basicBorderSize,icon:"square"},borderRadius:{propertyName:"border-radius",displayName:"Border radius",editorType:k.range,presets:L.lumoBorderRadius,icon:"square"},padding:{propertyName:"padding",displayName:"Padding",editorType:k.range,presets:L.lumoSpace,icon:"square"},gap:{propertyName:"gap",displayName:"Spacing",editorType:k.range,presets:L.lumoSpace,icon:"square"}},$n={height:{propertyName:"height",displayName:"Size",editorType:k.range,presets:L.lumoSize,icon:"square"},paddingInline:{propertyName:"padding-inline",displayName:"Padding",editorType:k.range,presets:L.lumoSpace,icon:"square"}},In={iconColor:{propertyName:"color",displayName:"Icon color",editorType:k.color,presets:L.lumoTextColor},iconSize:{propertyName:"font-size",displayName:"Icon size",editorType:k.range,presets:L.lumoFontSize,icon:"font"}},An=Object.freeze(Object.defineProperty({__proto__:null,fieldProperties:$n,iconProperties:In,shapeProperties:K,textProperties:ne},Symbol.toStringTag,{value:"Module"}));function ao(o){const e=o.charAt(0).toUpperCase()+o.slice(1);return{tagName:o,displayName:e,elements:[{selector:o,displayName:"Element",properties:[K.backgroundColor,K.borderColor,K.borderWidth,K.borderRadius,K.padding,ne.textColor,ne.fontSize,ne.fontWeight,ne.fontStyle]}]}}const Tn=Object.freeze(Object.defineProperty({__proto__:null,createGenericMetadata:ao},Symbol.toStringTag,{value:"Module"})),Nn=o=>Cn(Object.assign({"./components/defaults.ts":()=>y(()=>Promise.resolve().then(()=>An),void 0),"./components/generic.ts":()=>y(()=>Promise.resolve().then(()=>Tn),void 0),"./components/presets.ts":()=>y(()=>Promise.resolve().then(()=>Sn),void 0),"./components/vaadin-app-layout.ts":()=>y(()=>b(()=>import("./vaadin-app-layout-37492a04-d3b940c4.js"),["./vaadin-app-layout-37492a04-d3b940c4.js","./theme-d6a0ec78.js"],import.meta.url),[]),"./components/vaadin-avatar.ts":()=>y(()=>b(()=>import("./vaadin-avatar-7047be31-484db152.js"),["./vaadin-avatar-7047be31-484db152.js","./theme-d6a0ec78.js"],import.meta.url),[]),"./components/vaadin-big-decimal-field.ts":()=>y(()=>b(()=>import("./vaadin-big-decimal-field-b42c1de1-81e8e539.js"),["./vaadin-big-decimal-field-b42c1de1-81e8e539.js","./vaadin-text-field-e82c445d-1d6d3772.js","./theme-d6a0ec78.js"],import.meta.url),["assets/vaadin-big-decimal-field-b42c1de1.js","assets/vaadin-text-field-e82c445d.js"]),"./components/vaadin-button.ts":()=>y(()=>b(()=>import("./vaadin-button-79ad9d5f-561e851e.js"),["./vaadin-button-79ad9d5f-561e851e.js","./theme-d6a0ec78.js"],import.meta.url),[]),"./components/vaadin-checkbox-group.ts":()=>y(()=>b(()=>import("./vaadin-checkbox-group-a9a9e85d-64a93274.js"),["./vaadin-checkbox-group-a9a9e85d-64a93274.js","./vaadin-text-field-e82c445d-1d6d3772.js","./theme-d6a0ec78.js","./vaadin-checkbox-13797fc9-0e4ded26.js"],import.meta.url),["assets/vaadin-checkbox-group-a9a9e85d.js","assets/vaadin-text-field-e82c445d.js","assets/vaadin-checkbox-13797fc9.js"]),"./components/vaadin-checkbox.ts":()=>y(()=>b(()=>import("./vaadin-checkbox-13797fc9-0e4ded26.js"),["./vaadin-checkbox-13797fc9-0e4ded26.js","./theme-d6a0ec78.js"],import.meta.url),[]),"./components/vaadin-combo-box.ts":()=>y(()=>b(()=>import("./vaadin-combo-box-9046f78f-c20fa7d9.js"),["./vaadin-combo-box-9046f78f-c20fa7d9.js","./vaadin-text-field-e82c445d-1d6d3772.js","./theme-d6a0ec78.js"],import.meta.url),["assets/vaadin-combo-box-9046f78f.js","assets/vaadin-text-field-e82c445d.js"]),"./components/vaadin-email-field.ts":()=>y(()=>b(()=>import("./vaadin-email-field-da851bcb-8810e4ca.js"),["./vaadin-email-field-da851bcb-8810e4ca.js","./vaadin-text-field-e82c445d-1d6d3772.js","./theme-d6a0ec78.js"],import.meta.url),["assets/vaadin-email-field-da851bcb.js","assets/vaadin-text-field-e82c445d.js"]),"./components/vaadin-horizontal-layout.ts":()=>y(()=>b(()=>import("./vaadin-horizontal-layout-f7b1ab51-5ceb2543.js"),["./vaadin-horizontal-layout-f7b1ab51-5ceb2543.js","./theme-d6a0ec78.js"],import.meta.url),[]),"./components/vaadin-integer-field.ts":()=>y(()=>b(()=>import("./vaadin-integer-field-6e2954cf-aee11f12.js"),["./vaadin-integer-field-6e2954cf-aee11f12.js","./vaadin-text-field-e82c445d-1d6d3772.js","./theme-d6a0ec78.js"],import.meta.url),["assets/vaadin-integer-field-6e2954cf.js","assets/vaadin-text-field-e82c445d.js"]),"./components/vaadin-menu-bar.ts":()=>y(()=>b(()=>import("./vaadin-menu-bar-be33385c-f06e5a77.js"),["./vaadin-menu-bar-be33385c-f06e5a77.js","./theme-d6a0ec78.js"],import.meta.url),[]),"./components/vaadin-number-field.ts":()=>y(()=>b(()=>import("./vaadin-number-field-31df11f5-3a08b7e4.js"),["./vaadin-number-field-31df11f5-3a08b7e4.js","./vaadin-text-field-e82c445d-1d6d3772.js","./theme-d6a0ec78.js"],import.meta.url),["assets/vaadin-number-field-31df11f5.js","assets/vaadin-text-field-e82c445d.js"]),"./components/vaadin-password-field.ts":()=>y(()=>b(()=>import("./vaadin-password-field-49ffb113-c8812236.js"),["./vaadin-password-field-49ffb113-c8812236.js","./vaadin-text-field-e82c445d-1d6d3772.js","./theme-d6a0ec78.js"],import.meta.url),["assets/vaadin-password-field-49ffb113.js","assets/vaadin-text-field-e82c445d.js"]),"./components/vaadin-progress-bar.ts":()=>y(()=>b(()=>import("./vaadin-progress-bar-3b53bb70-b3993241.js"),["./vaadin-progress-bar-3b53bb70-b3993241.js","./theme-d6a0ec78.js"],import.meta.url),[]),"./components/vaadin-radio-group.ts":()=>y(()=>b(()=>import("./vaadin-radio-group-4a6e2cf4-e8270259.js"),["./vaadin-radio-group-4a6e2cf4-e8270259.js","./vaadin-text-field-e82c445d-1d6d3772.js","./theme-d6a0ec78.js"],import.meta.url),["assets/vaadin-radio-group-4a6e2cf4.js","assets/vaadin-text-field-e82c445d.js"]),"./components/vaadin-scroller.ts":()=>y(()=>b(()=>import("./vaadin-scroller-35e68818-a268db07.js"),["./vaadin-scroller-35e68818-a268db07.js","./theme-d6a0ec78.js"],import.meta.url),[]),"./components/vaadin-select.ts":()=>y(()=>b(()=>import("./vaadin-select-5d6ab45b-5b9ddc2c.js"),["./vaadin-select-5d6ab45b-5b9ddc2c.js","./vaadin-text-field-e82c445d-1d6d3772.js","./theme-d6a0ec78.js"],import.meta.url),["assets/vaadin-select-5d6ab45b.js","assets/vaadin-text-field-e82c445d.js"]),"./components/vaadin-split-layout.ts":()=>y(()=>b(()=>import("./vaadin-split-layout-10c9713b-be9a6b1c.js"),["./vaadin-split-layout-10c9713b-be9a6b1c.js","./theme-d6a0ec78.js"],import.meta.url),[]),"./components/vaadin-text-area.ts":()=>y(()=>b(()=>import("./vaadin-text-area-41c5f60c-1edb8ae4.js"),["./vaadin-text-area-41c5f60c-1edb8ae4.js","./vaadin-text-field-e82c445d-1d6d3772.js","./theme-d6a0ec78.js"],import.meta.url),["assets/vaadin-text-area-41c5f60c.js","assets/vaadin-text-field-e82c445d.js"]),"./components/vaadin-text-field.ts":()=>y(()=>b(()=>import("./vaadin-text-field-e82c445d-1d6d3772.js"),["./vaadin-text-field-e82c445d-1d6d3772.js","./theme-d6a0ec78.js"],import.meta.url),[]),"./components/vaadin-time-picker.ts":()=>y(()=>b(()=>import("./vaadin-time-picker-2fa5314f-67c4c5a9.js"),["./vaadin-time-picker-2fa5314f-67c4c5a9.js","./vaadin-text-field-e82c445d-1d6d3772.js","./theme-d6a0ec78.js"],import.meta.url),["assets/vaadin-time-picker-2fa5314f.js","assets/vaadin-text-field-e82c445d.js"]),"./components/vaadin-vertical-layout.ts":()=>y(()=>b(()=>import("./vaadin-vertical-layout-ff73c403-777a7198.js"),["./vaadin-vertical-layout-ff73c403-777a7198.js","./theme-d6a0ec78.js"],import.meta.url),[]),"./components/vaadin-virtual-list.ts":()=>y(()=>b(()=>import("./vaadin-virtual-list-62d4499a-98668792.js"),["./vaadin-virtual-list-62d4499a-98668792.js","./theme-d6a0ec78.js"],import.meta.url),[])}),`./components/${o}.ts`);class Rn{constructor(e=Nn){this.loader=e,this.metadata={}}async getMetadata(e){var t;const n=(t=e.element)==null?void 0:t.localName;if(!n)return null;if(!n.startsWith("vaadin-"))return ao(n);let i=this.metadata[n];if(i)return i;try{i=(await this.loader(n)).default,this.metadata[n]=i}catch{console.warn(`Failed to load metadata for component: ${n}`)}return i||null}}const On=new Rn,Ee={crosshair:W`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M4 8v-2a2 2 0 0 1 2 -2h2"></path>
   <path d="M4 16v2a2 2 0 0 0 2 2h2"></path>
   <path d="M16 4h2a2 2 0 0 1 2 2v2"></path>
   <path d="M16 20h2a2 2 0 0 0 2 -2v-2"></path>
   <path d="M9 12l6 0"></path>
   <path d="M12 9l0 6"></path>
</svg>`,square:W`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="currentColor" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
</svg>`,font:W`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M4 20l3 0"></path>
   <path d="M14 20l7 0"></path>
   <path d="M6.9 15l6.9 0"></path>
   <path d="M10.2 6.3l5.8 13.7"></path>
   <path d="M5 20l6 -16l2 0l7 16"></path>
</svg>`,undo:W`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1"></path>
</svg>`,redo:W`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M15 13l4 -4l-4 -4m4 4h-11a4 4 0 0 0 0 8h1"></path>
</svg>`,cross:W`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M18 6l-12 12"></path>
   <path d="M6 6l12 12"></path>
</svg>`};var le=(o=>(o.disabled="disabled",o.enabled="enabled",o.missing_theme="missing_theme",o))(le||{}),I=(o=>(o.local="local",o.global="global",o))(I||{});function ze(o,e){return`${o}|${e}`}class z{constructor(e){this._properties={},this._metadata=e}get metadata(){return this._metadata}get properties(){return Object.values(this._properties)}getPropertyValue(e,t){return this._properties[ze(e,t)]||null}updatePropertyValue(e,t,n,i){if(!n){delete this._properties[ze(e,t)];return}let r=this.getPropertyValue(e,t);r?(r.value=n,r.modified=i||!1):(r={elementSelector:e,propertyName:t,value:n,modified:i||!1},this._properties[ze(e,t)]=r)}addPropertyValues(e){e.forEach(t=>{this.updatePropertyValue(t.elementSelector,t.propertyName,t.value,t.modified)})}getPropertyValuesForElement(e){return this.properties.filter(t=>t.elementSelector===e)}static combine(...e){if(e.length<2)throw new Error("Must provide at least two themes");const t=new z(e[0].metadata);return e.forEach(n=>t.addPropertyValues(n.properties)),t}static fromServerRules(e,t,n){const i=new z(e);return e.elements.forEach(r=>{const s=X(r,t),l=n.find(a=>a.selector===s);l&&r.properties.forEach(a=>{const d=l.properties[a.propertyName];d&&i.updatePropertyValue(r.selector,a.propertyName,d,!0)})}),i}}function X(o,e){const t=o.selector;if(e.themeScope==="global")return t;if(!e.localClassName)throw new Error("Can not build local scoped selector without instance class name");const n=t.match(/^[\w\d-_]+/),i=n&&n[0];if(!i)throw new Error(`Selector does not start with a tag name: ${t}`);return`${i}.${e.localClassName}${t.substring(i.length,t.length)}`}function Pn(o,e,t,n){const i=X(o,e),r={[t]:n};return t==="border-width"&&(parseInt(n)>0?r["border-style"]="solid":r["border-style"]=""),{selector:i,properties:r}}function Ln(o){const e=Object.entries(o.properties).map(([t,n])=>`${t}: ${n};`).join(" ");return`${o.selector} { ${e} }`}let ye,$t="";function Qe(o){ye||(ye=new CSSStyleSheet,document.adoptedStyleSheets=[...document.adoptedStyleSheets,ye]),$t+=o.cssText,ye.replaceSync($t)}const lo=_`
  .editor-row {
    display: flex;
    align-items: baseline;
    padding: var(--theme-editor-section-horizontal-padding);
    gap: 10px;
  }

  .editor-row > .label {
    flex: 0 0 auto;
    width: 120px;
  }

  .editor-row > .editor {
    flex: 1 1 0;
  }
`,It="__vaadin-theme-editor-measure-element",At=/((::before)|(::after))$/,Tt=/::part\(([\w\d_-]+)\)$/;Qe(_`
  .__vaadin-theme-editor-measure-element {
    position: absolute;
    top: 0;
    left: 0;
    visibility: hidden;
  }
`);async function Vn(o){const e=new z(o),t=document.createElement(o.tagName);t.classList.add(It),document.body.append(t),o.setupElement&&await o.setupElement(t);const n={themeScope:I.local,localClassName:It};try{o.elements.forEach(i=>{Nt(t,i,n,!0);let r=X(i,n);const s=r.match(At);r=r.replace(At,"");const l=r.match(Tt),a=r.replace(Tt,"");let d=document.querySelector(a);if(d&&l){const h=`[part~="${l[1]}"]`;d=d.shadowRoot.querySelector(h)}if(!d)return;d.style.transition="none";const c=s?s[1]:null,u=getComputedStyle(d,c);i.properties.forEach(h=>{const m=u.getPropertyValue(h.propertyName)||h.defaultValue||"";e.updatePropertyValue(i.selector,h.propertyName,m)}),Nt(t,i,n,!1)})}finally{try{o.cleanupElement&&await o.cleanupElement(t)}finally{t.remove()}}return e}function Nt(o,e,t,n){if(e.stateAttribute){if(e.stateElementSelector){const i=X({...e,selector:e.stateElementSelector},t);o=document.querySelector(i)}o&&(n?o.setAttribute(e.stateAttribute,""):o.removeAttribute(e.stateAttribute))}}function Rt(o){return o.trim()}function Mn(o){const e=o.element;if(!e)return null;const t=e.querySelector("label");if(t&&t.textContent)return Rt(t.textContent);const n=e.textContent;return n?Rt(n):null}class Dn{constructor(){this._localClassNameMap=new Map}get stylesheet(){return this.ensureStylesheet(),this._stylesheet}add(e){this.ensureStylesheet(),this._stylesheet.replaceSync(e)}clear(){this.ensureStylesheet(),this._stylesheet.replaceSync("")}previewLocalClassName(e,t){if(!e)return;const n=this._localClassNameMap.get(e);n&&(e.classList.remove(n),e.overlayClass=null),t?(e.classList.add(t),e.overlayClass=t,this._localClassNameMap.set(e,t)):this._localClassNameMap.delete(e)}ensureStylesheet(){this._stylesheet||(this._stylesheet=new CSSStyleSheet,this._stylesheet.replaceSync(""),document.adoptedStyleSheets=[...document.adoptedStyleSheets,this._stylesheet])}}const q=new Dn;class jn{constructor(e){this.pendingRequests={},this.requestCounter=0,this.globalUiId=this.getGlobalUiId(),this.wrappedConnection=e;const t=this.wrappedConnection.onMessage;this.wrappedConnection.onMessage=n=>{n.command==="themeEditorResponse"?this.handleResponse(n.data):t.call(this.wrappedConnection,n)}}sendRequest(e,t){const n=(this.requestCounter++).toString(),i=t.uiId??this.globalUiId;return new Promise((r,s)=>{this.wrappedConnection.send(e,{...t,requestId:n,uiId:i}),this.pendingRequests[n]={resolve:r,reject:s}})}handleResponse(e){const t=this.pendingRequests[e.requestId];if(!t){console.warn("Received response for unknown request");return}delete this.pendingRequests[e.requestId],e.code==="ok"?t.resolve(e):t.reject(e)}loadComponentMetadata(e){return this.sendRequest("themeEditorComponentMetadata",{nodeId:e.nodeId})}setLocalClassName(e,t){return this.sendRequest("themeEditorLocalClassName",{nodeId:e.nodeId,className:t})}setCssRules(e){return this.sendRequest("themeEditorRules",{rules:e})}loadRules(e){return this.sendRequest("themeEditorLoadRules",{selectors:e})}markAsUsed(){return this.sendRequest("themeEditorMarkAsUsed",{})}undo(e){return this.sendRequest("themeEditorHistory",{undo:e})}redo(e){return this.sendRequest("themeEditorHistory",{redo:e})}openCss(e){return this.sendRequest("themeEditorOpenCss",{selector:e})}getGlobalUiId(){const e=window.Vaadin;if(e&&e.Flow){const{clients:t}=e.Flow,n=Object.keys(t);for(const i of n){const r=t[i];if(r.getNodeId)return r.getUIId()}}return-1}}const C={index:-1,entries:[]};class zn{constructor(e){this.api=e}get allowUndo(){return C.index>=0}get allowRedo(){return C.index<C.entries.length-1}get allowedActions(){return{allowUndo:this.allowUndo,allowRedo:this.allowRedo}}push(e,t,n){const i={requestId:e,execute:t,rollback:n};if(C.index++,C.entries=C.entries.slice(0,C.index),C.entries.push(i),t)try{t()}catch(r){console.error("Execute history entry failed",r)}return this.allowedActions}async undo(){if(!this.allowUndo)return this.allowedActions;const e=C.entries[C.index];C.index--;try{await this.api.undo(e.requestId),e.rollback&&e.rollback()}catch(t){console.error("Undo failed",t)}return this.allowedActions}async redo(){if(!this.allowRedo)return this.allowedActions;C.index++;const e=C.entries[C.index];try{await this.api.redo(e.requestId),e.execute&&e.execute()}catch(t){console.error("Redo failed",t)}return this.allowedActions}static clear(){C.entries=[],C.index=-1}}var Un=Object.defineProperty,Fn=Object.getOwnPropertyDescriptor,F=(o,e,t,n)=>{for(var i=n>1?void 0:n?Fn(e,t):e,r=o.length-1,s;r>=0;r--)(s=o[r])&&(i=(n?s(e,t,i):s(i))||i);return n&&i&&Un(e,t,i),i};class Bn extends CustomEvent{constructor(e,t,n){super("theme-property-value-change",{bubbles:!0,composed:!0,detail:{element:e,property:t,value:n}})}}class T extends N{constructor(){super(...arguments),this.value=""}static get styles(){return[lo,_`
        :host {
          display: block;
        }

        .editor-row .label .modified {
          display: inline-block;
          width: 6px;
          height: 6px;
          background: orange;
          border-radius: 3px;
          margin-left: 3px;
        }
      `]}update(e){super.update(e),(e.has("propertyMetadata")||e.has("theme"))&&this.updateValueFromTheme()}render(){var e;return p`
      <div class="editor-row">
        <div class="label">
          ${this.propertyMetadata.displayName}
          ${(e=this.propertyValue)!=null&&e.modified?p`<span class="modified"></span>`:null}
        </div>
        <div class="editor">${this.renderEditor()}</div>
      </div>
    `}updateValueFromTheme(){var e;this.propertyValue=this.theme.getPropertyValue(this.elementMetadata.selector,this.propertyMetadata.propertyName),this.value=((e=this.propertyValue)==null?void 0:e.value)||""}dispatchChange(e){this.dispatchEvent(new Bn(this.elementMetadata,this.propertyMetadata,e))}}F([g({})],T.prototype,"elementMetadata",2);F([g({})],T.prototype,"propertyMetadata",2);F([g({})],T.prototype,"theme",2);F([x()],T.prototype,"propertyValue",2);F([x()],T.prototype,"value",2);class Ie{constructor(e){if(this._values=[],this._rawValues={},e){const t=e.propertyName,n=e.presets??[];this._values=(n||[]).map(r=>r.startsWith("--")?`var(${r})`:r);const i=document.createElement("div");i.style.borderStyle="solid",i.style.visibility="hidden",document.body.append(i);try{this._values.forEach(r=>{i.style.setProperty(t,r);const s=getComputedStyle(i);this._rawValues[r]=s.getPropertyValue(t).trim()})}finally{i.remove()}}}get values(){return this._values}get rawValues(){return this._rawValues}tryMapToRawValue(e){return this._rawValues[e]??e}tryMapToPreset(e){return this.findPreset(e)??e}findPreset(e){const t=e&&e.trim();return this.values.find(n=>this._rawValues[n]===t)}}class Ot extends CustomEvent{constructor(e){super("change",{detail:{value:e}})}}let Ae=class extends N{constructor(){super(...arguments),this.value="",this.showClearButton=!1}static get styles(){return _`
      :host {
        display: inline-block;
        width: 100%;
        position: relative;
      }

      input {
        width: 100%;
        box-sizing: border-box;
        padding: 0.25rem 0.375rem;
        color: inherit;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 0.25rem;
        border: none;
      }

      button {
        display: none;
        position: absolute;
        right: 4px;
        top: 4px;
        padding: 0;
        line-height: 0;
        border: none;
        background: none;
        color: var(--dev-tools-text-color);
      }

      button svg {
        width: 16px;
        height: 16px;
      }

      button:not(:disabled):hover {
        color: var(--dev-tools-text-color-emphasis);
      }

      :host(.show-clear-button) input {
        padding-right: 20px;
      }

      :host(.show-clear-button) button {
        display: block;
      }
    `}update(o){super.update(o),o.has("showClearButton")&&(this.showClearButton?this.classList.add("show-clear-button"):this.classList.remove("show-clear-button"))}render(){return p`
      <input class="input" .value=${this.value} @change=${this.handleInputChange} />
      <button @click=${this.handleClearClick}>${Ee.cross}</button>
    `}handleInputChange(o){const e=o.target;this.dispatchEvent(new Ot(e.value))}handleClearClick(){this.dispatchEvent(new Ot(""))}};F([g({})],Ae.prototype,"value",2);F([g({})],Ae.prototype,"showClearButton",2);Ae=F([A("vaadin-dev-tools-theme-text-input")],Ae);var qn=Object.defineProperty,Hn=Object.getOwnPropertyDescriptor,Ve=(o,e,t,n)=>{for(var i=n>1?void 0:n?Hn(e,t):e,r=o.length-1,s;r>=0;r--)(s=o[r])&&(i=(n?s(e,t,i):s(i))||i);return n&&i&&qn(e,t,i),i};class Gn extends CustomEvent{constructor(e){super("class-name-change",{detail:{value:e}})}}let de=class extends N{constructor(){super(...arguments),this.editedClassName="",this.invalid=!1}static get styles(){return[lo,_`
        .editor-row {
          padding-top: 0;
        }

        .editor-row .editor .error {
          display: inline-block;
          color: var(--dev-tools-red-color);
          margin-top: 4px;
        }
      `]}update(o){super.update(o),o.has("className")&&(this.editedClassName=this.className,this.invalid=!1)}render(){return p` <div class="editor-row local-class-name">
      <div class="label">CSS class name</div>
      <div class="editor">
        <vaadin-dev-tools-theme-text-input
          type="text"
          .value=${this.editedClassName}
          @change=${this.handleInputChange}
        ></vaadin-dev-tools-theme-text-input>
        ${this.invalid?p`<br /><span class="error">Please enter a valid CSS class name</span>`:null}
      </div>
    </div>`}handleInputChange(o){this.editedClassName=o.detail.value;const e=/^-?[_a-zA-Z]+[_a-zA-Z0-9-]*$/;this.invalid=!this.editedClassName.match(e),!this.invalid&&this.editedClassName!==this.className&&this.dispatchEvent(new Gn(this.editedClassName))}};Ve([g({})],de.prototype,"className",2);Ve([x()],de.prototype,"editedClassName",2);Ve([x()],de.prototype,"invalid",2);de=Ve([A("vaadin-dev-tools-theme-class-name-editor")],de);var Wn=Object.defineProperty,Kn=Object.getOwnPropertyDescriptor,Me=(o,e,t,n)=>{for(var i=n>1?void 0:n?Kn(e,t):e,r=o.length-1,s;r>=0;r--)(s=o[r])&&(i=(n?s(e,t,i):s(i))||i);return n&&i&&Wn(e,t,i),i};class Yn extends CustomEvent{constructor(e){super("scope-change",{detail:{value:e}})}}Qe(_`
  vaadin-select-overlay[theme~='vaadin-dev-tools-theme-scope-selector'] {
    --lumo-primary-color-50pct: rgba(255, 255, 255, 0.5);
    z-index: 100000 !important;
  }

  vaadin-select-overlay[theme~='vaadin-dev-tools-theme-scope-selector']::part(overlay) {
    background: #333;
  }

  vaadin-select-overlay[theme~='vaadin-dev-tools-theme-scope-selector'] vaadin-item {
    color: rgba(255, 255, 255, 0.8);
  }

  vaadin-select-overlay[theme~='vaadin-dev-tools-theme-scope-selector'] vaadin-item::part(content) {
    font-size: 13px;
  }

  vaadin-select-overlay[theme~='vaadin-dev-tools-theme-scope-selector'] vaadin-item .title {
    color: rgba(255, 255, 255, 0.95);
    font-weight: bold;
  }

  vaadin-select-overlay[theme~='vaadin-dev-tools-theme-scope-selector'] vaadin-item::part(checkmark) {
    margin: 6px;
  }

  vaadin-select-overlay[theme~='vaadin-dev-tools-theme-scope-selector'] vaadin-item::part(checkmark)::before {
    color: rgba(255, 255, 255, 0.95);
  }

  vaadin-select-overlay[theme~='vaadin-dev-tools-theme-scope-selector'] vaadin-item:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`);let ce=class extends N{constructor(){super(...arguments),this.value=I.local}static get styles(){return _`
      vaadin-select {
        --lumo-primary-color-50pct: rgba(255, 255, 255, 0.5);
        width: 100px;
      }

      vaadin-select::part(input-field) {
        background: rgba(0, 0, 0, 0.2);
      }

      vaadin-select vaadin-select-value-button,
      vaadin-select::part(toggle-button) {
        color: var(--dev-tools-text-color);
      }

      vaadin-select:hover vaadin-select-value-button,
      vaadin-select:hover::part(toggle-button) {
        color: var(--dev-tools-text-color-emphasis);
      }

      vaadin-select vaadin-select-item {
        font-size: 13px;
      }
    `}update(o){var e;super.update(o),o.has("metadata")&&((e=this.select)==null||e.requestContentUpdate())}render(){return p` <vaadin-select
      theme="small vaadin-dev-tools-theme-scope-selector"
      .value=${this.value}
      .renderer=${this.selectRenderer.bind(this)}
      @value-changed=${this.handleValueChange}
    ></vaadin-select>`}selectRenderer(o){var e;const t=((e=this.metadata)==null?void 0:e.displayName)||"Component",n=`${t}s`;Wt(p`
        <vaadin-list-box>
          <vaadin-item value=${I.local} label="Local">
            <span class="title">Local</span>
            <br />
            <span>Edit styles for this ${t}</span>
          </vaadin-item>
          <vaadin-item value=${I.global} label="Global">
            <span class="title">Global</span>
            <br />
            <span>Edit styles for all ${n}</span>
          </vaadin-item>
        </vaadin-list-box>
      `,o)}handleValueChange(o){const e=o.detail.value;e!==this.value&&this.dispatchEvent(new Yn(e))}};Me([g({})],ce.prototype,"value",2);Me([g({})],ce.prototype,"metadata",2);Me([ue("vaadin-select")],ce.prototype,"select",2);ce=Me([A("vaadin-dev-tools-theme-scope-selector")],ce);var Jn=Object.defineProperty,Xn=Object.getOwnPropertyDescriptor,Qn=(o,e,t,n)=>{for(var i=n>1?void 0:n?Xn(e,t):e,r=o.length-1,s;r>=0;r--)(s=o[r])&&(i=(n?s(e,t,i):s(i))||i);return n&&i&&Jn(e,t,i),i};let Pt=class extends T{static get styles(){return[T.styles,_`
        .editor-row {
          align-items: center;
        }
      `]}handleInputChange(o){const e=o.target.checked?this.propertyMetadata.checkedValue:"";this.dispatchChange(e||"")}renderEditor(){const o=this.value===this.propertyMetadata.checkedValue;return p` <input type="checkbox" .checked=${o} @change=${this.handleInputChange} /> `}};Pt=Qn([A("vaadin-dev-tools-theme-checkbox-property-editor")],Pt);var Zn=Object.defineProperty,ei=Object.getOwnPropertyDescriptor,ti=(o,e,t,n)=>{for(var i=n>1?void 0:n?ei(e,t):e,r=o.length-1,s;r>=0;r--)(s=o[r])&&(i=(n?s(e,t,i):s(i))||i);return n&&i&&Zn(e,t,i),i};let Lt=class extends T{handleInputChange(o){this.dispatchChange(o.detail.value)}renderEditor(){var o;return p`
      <vaadin-dev-tools-theme-text-input
        .value=${this.value}
        .showClearButton=${((o=this.propertyValue)==null?void 0:o.modified)||!1}
        @change=${this.handleInputChange}
      ></vaadin-dev-tools-theme-text-input>
    `}};Lt=ti([A("vaadin-dev-tools-theme-text-property-editor")],Lt);var oi=Object.defineProperty,ni=Object.getOwnPropertyDescriptor,Ze=(o,e,t,n)=>{for(var i=n>1?void 0:n?ni(e,t):e,r=o.length-1,s;r>=0;r--)(s=o[r])&&(i=(n?s(e,t,i):s(i))||i);return n&&i&&oi(e,t,i),i};let Te=class extends T{constructor(){super(...arguments),this.selectedPresetIndex=-1,this.presets=new Ie}static get styles(){return[T.styles,_`
        :host {
          --preset-count: 3;
          --slider-bg: #fff;
          --slider-border: #333;
        }

        .editor-row {
          align-items: center;
        }

        .editor-row > .editor {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .editor-row .input {
          flex: 0 0 auto;
          width: 80px;
        }

        .slider-wrapper {
          flex: 1 1 0;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .icon {
          width: 20px;
          height: 20px;
          color: #aaa;
        }

        .icon.prefix > svg {
          transform: scale(0.75);
        }

        .slider {
          flex: 1 1 0;
          -webkit-appearance: none;
          background: linear-gradient(to right, #666, #666 2px, transparent 2px);
          background-size: calc((100% - 13px) / (var(--preset-count) - 1)) 8px;
          background-position: 5px 50%;
          background-repeat: repeat-x;
        }

        .slider::-webkit-slider-runnable-track {
          width: 100%;
          box-sizing: border-box;
          height: 16px;
          background-image: linear-gradient(#666, #666);
          background-size: calc(100% - 12px) 2px;
          background-repeat: no-repeat;
          background-position: 6px 50%;
        }

        .slider::-moz-range-track {
          width: 100%;
          box-sizing: border-box;
          height: 16px;
          background-image: linear-gradient(#666, #666);
          background-size: calc(100% - 12px) 2px;
          background-repeat: no-repeat;
          background-position: 6px 50%;
        }

        .slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 16px;
          width: 16px;
          border: 2px solid var(--slider-border);
          border-radius: 50%;
          background: var(--slider-bg);
          cursor: pointer;
        }

        .slider::-moz-range-thumb {
          height: 16px;
          width: 16px;
          border: 2px solid var(--slider-border);
          border-radius: 50%;
          background: var(--slider-bg);
          cursor: pointer;
        }

        .custom-value {
          opacity: 0.5;
        }

        .custom-value:hover,
        .custom-value:focus-within {
          opacity: 1;
        }

        .custom-value:not(:hover, :focus-within) {
          --slider-bg: #333;
          --slider-border: #666;
        }
      `]}update(o){o.has("propertyMetadata")&&(this.presets=new Ie(this.propertyMetadata)),super.update(o)}renderEditor(){var o;const e={"slider-wrapper":!0,"custom-value":this.selectedPresetIndex<0},t=this.presets.values.length;return p`
      <div class=${Gt(e)}>
        ${null}
        <input
          type="range"
          class="slider"
          style="--preset-count: ${t}"
          step="1"
          min="0"
          .max=${(t-1).toString()}
          .value=${this.selectedPresetIndex}
          @input=${this.handleSliderInput}
          @change=${this.handleSliderChange}
        />
        ${null}
      </div>
      <vaadin-dev-tools-theme-text-input
        class="input"
        .value=${this.value}
        .showClearButton=${((o=this.propertyValue)==null?void 0:o.modified)||!1}
        @change=${this.handleValueChange}
      ></vaadin-dev-tools-theme-text-input>
    `}handleSliderInput(o){const e=o.target,t=parseInt(e.value),n=this.presets.values[t];this.selectedPresetIndex=t,this.value=this.presets.rawValues[n]}handleSliderChange(){this.dispatchChange(this.value)}handleValueChange(o){this.value=o.detail.value,this.updateSliderValue(),this.dispatchChange(this.value)}dispatchChange(o){const e=this.presets.tryMapToPreset(o);super.dispatchChange(e)}updateValueFromTheme(){var o;super.updateValueFromTheme(),this.value=this.presets.tryMapToRawValue(((o=this.propertyValue)==null?void 0:o.value)||""),this.updateSliderValue()}updateSliderValue(){const o=this.presets.findPreset(this.value);this.selectedPresetIndex=o?this.presets.values.indexOf(o):-1}};Ze([x()],Te.prototype,"selectedPresetIndex",2);Ze([x()],Te.prototype,"presets",2);Te=Ze([A("vaadin-dev-tools-theme-range-property-editor")],Te);const Q=(o,e=0,t=1)=>o>t?t:o<e?e:o,$=(o,e=0,t=Math.pow(10,e))=>Math.round(t*o)/t,co=({h:o,s:e,v:t,a:n})=>{const i=(200-e)*t/100;return{h:$(o),s:$(i>0&&i<200?e*t/100/(i<=100?i:200-i)*100:0),l:$(i/2),a:$(n,2)}},Ye=o=>{const{h:e,s:t,l:n}=co(o);return`hsl(${e}, ${t}%, ${n}%)`},Ue=o=>{const{h:e,s:t,l:n,a:i}=co(o);return`hsla(${e}, ${t}%, ${n}%, ${i})`},ii=({h:o,s:e,v:t,a:n})=>{o=o/360*6,e=e/100,t=t/100;const i=Math.floor(o),r=t*(1-e),s=t*(1-(o-i)*e),l=t*(1-(1-o+i)*e),a=i%6;return{r:$([t,s,r,r,l,t][a]*255),g:$([l,t,t,s,r,r][a]*255),b:$([r,r,l,t,t,s][a]*255),a:$(n,2)}},ri=o=>{const{r:e,g:t,b:n,a:i}=ii(o);return`rgba(${e}, ${t}, ${n}, ${i})`},si=o=>{const e=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(o);return e?ai({r:Number(e[1])/(e[2]?100/255:1),g:Number(e[3])/(e[4]?100/255:1),b:Number(e[5])/(e[6]?100/255:1),a:e[7]===void 0?1:Number(e[7])/(e[8]?100:1)}):{h:0,s:0,v:0,a:1}},ai=({r:o,g:e,b:t,a:n})=>{const i=Math.max(o,e,t),r=i-Math.min(o,e,t),s=r?i===o?(e-t)/r:i===e?2+(t-o)/r:4+(o-e)/r:0;return{h:$(60*(s<0?s+6:s)),s:$(i?r/i*100:0),v:$(i/255*100),a:n}},li=(o,e)=>{if(o===e)return!0;for(const t in o)if(o[t]!==e[t])return!1;return!0},di=(o,e)=>o.replace(/\s/g,"")===e.replace(/\s/g,""),Vt={},ho=o=>{let e=Vt[o];return e||(e=document.createElement("template"),e.innerHTML=o,Vt[o]=e),e},et=(o,e,t)=>{o.dispatchEvent(new CustomEvent(e,{bubbles:!0,detail:t}))};let J=!1;const Je=o=>"touches"in o,ci=o=>J&&!Je(o)?!1:(J||(J=Je(o)),!0),Mt=(o,e)=>{const t=Je(e)?e.touches[0]:e,n=o.el.getBoundingClientRect();et(o.el,"move",o.getMove({x:Q((t.pageX-(n.left+window.pageXOffset))/n.width),y:Q((t.pageY-(n.top+window.pageYOffset))/n.height)}))},hi=(o,e)=>{const t=e.keyCode;t>40||o.xy&&t<37||t<33||(e.preventDefault(),et(o.el,"move",o.getMove({x:t===39?.01:t===37?-.01:t===34?.05:t===33?-.05:t===35?1:t===36?-1:0,y:t===40?.01:t===38?-.01:0},!0)))};class tt{constructor(e,t,n,i){const r=ho(`<div role="slider" tabindex="0" part="${t}" ${n}><div part="${t}-pointer"></div></div>`);e.appendChild(r.content.cloneNode(!0));const s=e.querySelector(`[part=${t}]`);s.addEventListener("mousedown",this),s.addEventListener("touchstart",this),s.addEventListener("keydown",this),this.el=s,this.xy=i,this.nodes=[s.firstChild,s]}set dragging(e){const t=e?document.addEventListener:document.removeEventListener;t(J?"touchmove":"mousemove",this),t(J?"touchend":"mouseup",this)}handleEvent(e){switch(e.type){case"mousedown":case"touchstart":if(e.preventDefault(),!ci(e)||!J&&e.button!=0)return;this.el.focus(),Mt(this,e),this.dragging=!0;break;case"mousemove":case"touchmove":e.preventDefault(),Mt(this,e);break;case"mouseup":case"touchend":this.dragging=!1;break;case"keydown":hi(this,e);break}}style(e){e.forEach((t,n)=>{for(const i in t)this.nodes[n].style.setProperty(i,t[i])})}}class pi extends tt{constructor(e){super(e,"hue",'aria-label="Hue" aria-valuemin="0" aria-valuemax="360"',!1)}update({h:e}){this.h=e,this.style([{left:`${e/360*100}%`,color:Ye({h:e,s:100,v:100,a:1})}]),this.el.setAttribute("aria-valuenow",`${$(e)}`)}getMove(e,t){return{h:t?Q(this.h+e.x*360,0,360):360*e.x}}}class ui extends tt{constructor(e){super(e,"saturation",'aria-label="Color"',!0)}update(e){this.hsva=e,this.style([{top:`${100-e.v}%`,left:`${e.s}%`,color:Ye(e)},{"background-color":Ye({h:e.h,s:100,v:100,a:1})}]),this.el.setAttribute("aria-valuetext",`Saturation ${$(e.s)}%, Brightness ${$(e.v)}%`)}getMove(e,t){return{s:t?Q(this.hsva.s+e.x*100,0,100):e.x*100,v:t?Q(this.hsva.v-e.y*100,0,100):Math.round(100-e.y*100)}}}const mi=':host{display:flex;flex-direction:column;position:relative;width:200px;height:200px;user-select:none;-webkit-user-select:none;cursor:default}:host([hidden]){display:none!important}[role=slider]{position:relative;touch-action:none;user-select:none;-webkit-user-select:none;outline:0}[role=slider]:last-child{border-radius:0 0 8px 8px}[part$=pointer]{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;display:flex;place-content:center center;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}[part$=pointer]::after{content:"";width:100%;height:100%;border-radius:inherit;background-color:currentColor}[role=slider]:focus [part$=pointer]{transform:translate(-50%,-50%) scale(1.1)}',vi="[part=hue]{flex:0 0 24px;background:linear-gradient(to right,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red 100%)}[part=hue-pointer]{top:50%;z-index:2}",gi="[part=saturation]{flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(to top,#000,transparent),linear-gradient(to right,#fff,rgba(255,255,255,0));box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}[part=saturation-pointer]{z-index:3}",be=Symbol("same"),Fe=Symbol("color"),Dt=Symbol("hsva"),Be=Symbol("update"),jt=Symbol("parts"),Ne=Symbol("css"),Re=Symbol("sliders");let fi=class extends HTMLElement{static get observedAttributes(){return["color"]}get[Ne](){return[mi,vi,gi]}get[Re](){return[ui,pi]}get color(){return this[Fe]}set color(o){if(!this[be](o)){const e=this.colorModel.toHsva(o);this[Be](e),this[Fe]=o}}constructor(){super();const o=ho(`<style>${this[Ne].join("")}</style>`),e=this.attachShadow({mode:"open"});e.appendChild(o.content.cloneNode(!0)),e.addEventListener("move",this),this[jt]=this[Re].map(t=>new t(e))}connectedCallback(){if(this.hasOwnProperty("color")){const o=this.color;delete this.color,this.color=o}else this.color||(this.color=this.colorModel.defaultColor)}attributeChangedCallback(o,e,t){const n=this.colorModel.fromAttr(t);this[be](n)||(this.color=n)}handleEvent(o){const e=this[Dt],t={...e,...o.detail};this[Be](t);let n;!li(t,e)&&!this[be](n=this.colorModel.fromHsva(t))&&(this[Fe]=n,et(this,"color-changed",{value:n}))}[be](o){return this.color&&this.colorModel.equal(o,this.color)}[Be](o){this[Dt]=o,this[jt].forEach(e=>e.update(o))}};class yi extends tt{constructor(e){super(e,"alpha",'aria-label="Alpha" aria-valuemin="0" aria-valuemax="1"',!1)}update(e){this.hsva=e;const t=Ue({...e,a:0}),n=Ue({...e,a:1}),i=e.a*100;this.style([{left:`${i}%`,color:Ue(e)},{"--gradient":`linear-gradient(90deg, ${t}, ${n}`}]);const r=$(i);this.el.setAttribute("aria-valuenow",`${r}`),this.el.setAttribute("aria-valuetext",`${r}%`)}getMove(e,t){return{a:t?Q(this.hsva.a+e.x):e.x}}}const bi=`[part=alpha]{flex:0 0 24px}[part=alpha]::after{display:block;content:"";position:absolute;top:0;left:0;right:0;bottom:0;border-radius:inherit;background-image:var(--gradient);box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}[part^=alpha]{background-color:#fff;background-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><rect x="8" width="8" height="8"/><rect y="8" width="8" height="8"/></svg>')}[part=alpha-pointer]{top:50%}`;class wi extends fi{get[Ne](){return[...super[Ne],bi]}get[Re](){return[...super[Re],yi]}}const _i={defaultColor:"rgba(0, 0, 0, 1)",toHsva:si,fromHsva:ri,equal:di,fromAttr:o=>o};class xi extends wi{get colorModel(){return _i}}/**
* @license
* Copyright (c) 2017 - 2023 Vaadin Ltd.
* This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/function Ei(o){const e=[];for(;o;){if(o.nodeType===Node.DOCUMENT_NODE){e.push(o);break}if(o.nodeType===Node.DOCUMENT_FRAGMENT_NODE){e.push(o),o=o.host;continue}if(o.assignedSlot){o=o.assignedSlot;continue}o=o.parentNode}return e}const qe={start:"top",end:"bottom"},He={start:"left",end:"right"},zt=new ResizeObserver(o=>{setTimeout(()=>{o.forEach(e=>{e.target.__overlay&&e.target.__overlay._updatePosition()})})}),ki=o=>class extends o{static get properties(){return{positionTarget:{type:Object,value:null},horizontalAlign:{type:String,value:"start"},verticalAlign:{type:String,value:"top"},noHorizontalOverlap:{type:Boolean,value:!1},noVerticalOverlap:{type:Boolean,value:!1},requiredVerticalSpace:{type:Number,value:0}}}static get observers(){return["__positionSettingsChanged(horizontalAlign, verticalAlign, noHorizontalOverlap, noVerticalOverlap, requiredVerticalSpace)","__overlayOpenedChanged(opened, positionTarget)"]}constructor(){super(),this.__onScroll=this.__onScroll.bind(this),this._updatePosition=this._updatePosition.bind(this)}connectedCallback(){super.connectedCallback(),this.opened&&this.__addUpdatePositionEventListeners()}disconnectedCallback(){super.disconnectedCallback(),this.__removeUpdatePositionEventListeners()}__addUpdatePositionEventListeners(){window.addEventListener("resize",this._updatePosition),this.__positionTargetAncestorRootNodes=Ei(this.positionTarget),this.__positionTargetAncestorRootNodes.forEach(e=>{e.addEventListener("scroll",this.__onScroll,!0)})}__removeUpdatePositionEventListeners(){window.removeEventListener("resize",this._updatePosition),this.__positionTargetAncestorRootNodes&&(this.__positionTargetAncestorRootNodes.forEach(e=>{e.removeEventListener("scroll",this.__onScroll,!0)}),this.__positionTargetAncestorRootNodes=null)}__overlayOpenedChanged(e,t){if(this.__removeUpdatePositionEventListeners(),t&&(t.__overlay=null,zt.unobserve(t),e&&(this.__addUpdatePositionEventListeners(),t.__overlay=this,zt.observe(t))),e){const n=getComputedStyle(this);this.__margins||(this.__margins={},["top","bottom","left","right"].forEach(i=>{this.__margins[i]=parseInt(n[i],10)})),this.setAttribute("dir",n.direction),this._updatePosition(),requestAnimationFrame(()=>this._updatePosition())}}__positionSettingsChanged(){this._updatePosition()}__onScroll(e){this.contains(e.target)||this._updatePosition()}_updatePosition(){if(!this.positionTarget||!this.opened)return;const e=this.positionTarget.getBoundingClientRect(),t=this.__shouldAlignStartVertically(e);this.style.justifyContent=t?"flex-start":"flex-end";const n=this.__isRTL,i=this.__shouldAlignStartHorizontally(e,n),r=!n&&i||n&&!i;this.style.alignItems=r?"flex-start":"flex-end";const s=this.getBoundingClientRect(),l=this.__calculatePositionInOneDimension(e,s,this.noVerticalOverlap,qe,this,t),a=this.__calculatePositionInOneDimension(e,s,this.noHorizontalOverlap,He,this,i);Object.assign(this.style,l,a),this.toggleAttribute("bottom-aligned",!t),this.toggleAttribute("top-aligned",t),this.toggleAttribute("end-aligned",!r),this.toggleAttribute("start-aligned",r)}__shouldAlignStartHorizontally(e,t){const n=Math.max(this.__oldContentWidth||0,this.$.overlay.offsetWidth);this.__oldContentWidth=this.$.overlay.offsetWidth;const i=Math.min(window.innerWidth,document.documentElement.clientWidth),r=!t&&this.horizontalAlign==="start"||t&&this.horizontalAlign==="end";return this.__shouldAlignStart(e,n,i,this.__margins,r,this.noHorizontalOverlap,He)}__shouldAlignStartVertically(e){const t=this.requiredVerticalSpace||Math.max(this.__oldContentHeight||0,this.$.overlay.offsetHeight);this.__oldContentHeight=this.$.overlay.offsetHeight;const n=Math.min(window.innerHeight,document.documentElement.clientHeight),i=this.verticalAlign==="top";return this.__shouldAlignStart(e,t,n,this.__margins,i,this.noVerticalOverlap,qe)}__shouldAlignStart(e,t,n,i,r,s,l){const a=n-e[s?l.end:l.start]-i[l.end],d=e[s?l.start:l.end]-i[l.start],c=r?a:d,u=c>(r?d:a)||c>t;return r===u}__adjustBottomProperty(e,t,n){let i;if(e===t.end){if(t.end===qe.end){const r=Math.min(window.innerHeight,document.documentElement.clientHeight);if(n>r&&this.__oldViewportHeight){const s=this.__oldViewportHeight-r;i=n-s}this.__oldViewportHeight=r}if(t.end===He.end){const r=Math.min(window.innerWidth,document.documentElement.clientWidth);if(n>r&&this.__oldViewportWidth){const s=this.__oldViewportWidth-r;i=n-s}this.__oldViewportWidth=r}}return i}__calculatePositionInOneDimension(e,t,n,i,r,s){const l=s?i.start:i.end,a=s?i.end:i.start,d=parseFloat(r.style[l]||getComputedStyle(r)[l]),c=this.__adjustBottomProperty(l,i,d),u=t[s?i.start:i.end]-e[n===s?i.end:i.start],h=c?`${c}px`:`${d+u*(s?-1:1)}px`;return{[l]:h,[a]:""}}};var Ci=Object.defineProperty,Si=Object.getOwnPropertyDescriptor,G=(o,e,t,n)=>{for(var i=n>1?void 0:n?Si(e,t):e,r=o.length-1,s;r>=0;r--)(s=o[r])&&(i=(n?s(e,t,i):s(i))||i);return n&&i&&Ci(e,t,i),i};class $i extends CustomEvent{constructor(e){super("color-picker-change",{detail:{value:e}})}}const po=_`
  :host {
    --preview-size: 24px;
    --preview-color: rgba(0, 0, 0, 0);
  }

  .preview {
    --preview-bg-size: calc(var(--preview-size) / 2);
    --preview-bg-pos: calc(var(--preview-size) / 4);

    width: var(--preview-size);
    height: var(--preview-size);
    padding: 0;
    position: relative;
    overflow: hidden;
    background: none;
    border: solid 2px #888;
    border-radius: 4px;
    box-sizing: content-box;
  }

  .preview::before,
  .preview::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .preview::before {
    content: '';
    background: white;
    background-image: linear-gradient(45deg, #666 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, #666 75%), linear-gradient(45deg, transparent 75%, #666 75%),
      linear-gradient(45deg, #666 25%, transparent 25%);
    background-size: var(--preview-bg-size) var(--preview-bg-size);
    background-position: 0 0, 0 0, calc(var(--preview-bg-pos) * -1) calc(var(--preview-bg-pos) * -1),
      var(--preview-bg-pos) var(--preview-bg-pos);
  }

  .preview::after {
    content: '';
    background-color: var(--preview-color);
  }
`;let he=class extends N{constructor(){super(...arguments),this.commitValue=!1}static get styles(){return[po,_`
        #toggle {
          display: block;
        }
      `]}update(o){super.update(o),o.has("value")&&this.overlay&&this.overlay.requestContentUpdate()}firstUpdated(){this.overlay=document.createElement("vaadin-dev-tools-color-picker-overlay"),this.overlay.renderer=this.renderOverlayContent.bind(this),this.overlay.owner=this,this.overlay.positionTarget=this.toggle,this.overlay.noVerticalOverlap=!0,this.overlay.addEventListener("vaadin-overlay-escape-press",this.handleOverlayEscape.bind(this)),this.overlay.addEventListener("vaadin-overlay-close",this.handleOverlayClose.bind(this)),this.append(this.overlay)}render(){const o=this.value||"rgba(0, 0, 0, 0)";return p` <button
      id="toggle"
      class="preview"
      style="--preview-color: ${o}"
      @click=${this.open}
    ></button>`}open(){this.commitValue=!1,this.overlay.opened=!0,this.overlay.style.zIndex="1000000";const o=this.overlay.shadowRoot.querySelector('[part="overlay"]');o.style.background="#333"}renderOverlayContent(o){const e=getComputedStyle(this.toggle,"::after").getPropertyValue("background-color");Wt(p` <div>
        <vaadin-dev-tools-color-picker-overlay-content
          .value=${e}
          .presets=${this.presets}
          @color-changed=${this.handleColorChange.bind(this)}
        ></vaadin-dev-tools-color-picker-overlay-content>
      </div>`,o)}handleColorChange(o){this.commitValue=!0,this.dispatchEvent(new $i(o.detail.value)),o.detail.close&&(this.overlay.opened=!1,this.handleOverlayClose())}handleOverlayEscape(){this.commitValue=!1}handleOverlayClose(){const o=this.commitValue?"color-picker-commit":"color-picker-cancel";this.dispatchEvent(new CustomEvent(o))}};G([g({})],he.prototype,"value",2);G([g({})],he.prototype,"presets",2);G([ue("#toggle")],he.prototype,"toggle",2);he=G([A("vaadin-dev-tools-color-picker")],he);let Oe=class extends N{static get styles(){return[po,_`
        :host {
          display: block;
          padding: 12px;
        }

        .picker::part(saturation),
        .picker::part(hue) {
          margin-bottom: 10px;
        }

        .picker::part(hue),
        .picker::part(alpha) {
          flex: 0 0 20px;
        }

        .picker::part(saturation),
        .picker::part(hue),
        .picker::part(alpha) {
          border-radius: 3px;
        }

        .picker::part(saturation-pointer),
        .picker::part(hue-pointer),
        .picker::part(alpha-pointer) {
          width: 20px;
          height: 20px;
        }

        .swatches {
          display: grid;
          grid-template-columns: repeat(6, var(--preview-size));
          grid-column-gap: 10px;
          grid-row-gap: 6px;
          margin-top: 16px;
        }
      `]}render(){return p` <div>
      <vaadin-dev-tools-rgba-string-color-picker
        class="picker"
        .color=${this.value}
        @color-changed=${this.handlePickerChange}
      ></vaadin-dev-tools-rgba-string-color-picker>
      ${this.renderSwatches()}
    </div>`}renderSwatches(){if(!this.presets||this.presets.length===0)return;const o=this.presets.map(e=>p` <button
        class="preview"
        style="--preview-color: ${e}"
        @click=${()=>this.selectPreset(e)}
      ></button>`);return p` <div class="swatches">${o}</div>`}handlePickerChange(o){this.dispatchEvent(new CustomEvent("color-changed",{detail:{value:o.detail.value}}))}selectPreset(o){this.dispatchEvent(new CustomEvent("color-changed",{detail:{value:o,close:!0}}))}};G([g({})],Oe.prototype,"value",2);G([g({})],Oe.prototype,"presets",2);Oe=G([A("vaadin-dev-tools-color-picker-overlay-content")],Oe);customElements.whenDefined("vaadin-overlay").then(()=>{const o=customElements.get("vaadin-overlay");class e extends ki(o){}customElements.define("vaadin-dev-tools-color-picker-overlay",e)});customElements.define("vaadin-dev-tools-rgba-string-color-picker",xi);var Ii=Object.defineProperty,Ai=Object.getOwnPropertyDescriptor,Ti=(o,e,t,n)=>{for(var i=n>1?void 0:n?Ai(e,t):e,r=o.length-1,s;r>=0;r--)(s=o[r])&&(i=(n?s(e,t,i):s(i))||i);return n&&i&&Ii(e,t,i),i};let Ut=class extends T{constructor(){super(...arguments),this.presets=new Ie}static get styles(){return[T.styles,_`
        .editor-row {
          align-items: center;
        }

        .editor-row > .editor {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
      `]}update(o){o.has("propertyMetadata")&&(this.presets=new Ie(this.propertyMetadata)),super.update(o)}renderEditor(){var o;return p`
      <vaadin-dev-tools-color-picker
        .value=${this.value}
        .presets=${this.presets.values}
        @color-picker-change=${this.handleColorPickerChange}
        @color-picker-commit=${this.handleColorPickerCommit}
        @color-picker-cancel=${this.handleColorPickerCancel}
      ></vaadin-dev-tools-color-picker>
      <vaadin-dev-tools-theme-text-input
        .value=${this.value}
        .showClearButton=${((o=this.propertyValue)==null?void 0:o.modified)||!1}
        @change=${this.handleInputChange}
      ></vaadin-dev-tools-theme-text-input>
    `}handleInputChange(o){this.value=o.detail.value,this.dispatchChange(this.value)}handleColorPickerChange(o){this.value=o.detail.value}handleColorPickerCommit(){this.dispatchChange(this.value)}handleColorPickerCancel(){this.updateValueFromTheme()}dispatchChange(o){const e=this.presets.tryMapToPreset(o);super.dispatchChange(e)}updateValueFromTheme(){var o;super.updateValueFromTheme(),this.value=this.presets.tryMapToRawValue(((o=this.propertyValue)==null?void 0:o.value)||"")}};Ut=Ti([A("vaadin-dev-tools-theme-color-property-editor")],Ut);var Ni=Object.defineProperty,Ri=Object.getOwnPropertyDescriptor,ot=(o,e,t,n)=>{for(var i=n>1?void 0:n?Ri(e,t):e,r=o.length-1,s;r>=0;r--)(s=o[r])&&(i=(n?s(e,t,i):s(i))||i);return n&&i&&Ni(e,t,i),i};class Oi extends CustomEvent{constructor(e){super("open-css",{detail:{element:e}})}}let Pe=class extends N{static get styles(){return _`
      .section .header {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        padding: 0.4rem var(--theme-editor-section-horizontal-padding);
        color: var(--dev-tools-text-color-emphasis);
        background-color: rgba(0, 0, 0, 0.2);
      }

      .section .property-list .property-editor:not(:last-child) {
        border-bottom: solid 1px rgba(0, 0, 0, 0.2);
      }

      .section .header .open-css {
        all: initial;
        font-family: inherit;
        font-size: var(--dev-tools-font-size-small);
        line-height: 1;
        white-space: nowrap;
        background-color: rgba(255, 255, 255, 0.12);
        color: var(--dev-tools-text-color);
        font-weight: 600;
        padding: 0.25rem 0.375rem;
        border-radius: 0.25rem;
      }

      .section .header .open-css:hover {
        color: var(--dev-tools-text-color-emphasis);
      }
    `}render(){const o=this.metadata.elements.map(e=>this.renderSection(e));return p` <div>${o}</div> `}renderSection(o){const e=o.properties.map(t=>this.renderPropertyEditor(o,t));return p`
      <div class="section" data-testid=${o==null?void 0:o.displayName}>
        <div class="header">
          <span> ${o.displayName} </span>
          <button class="open-css" @click=${()=>this.handleOpenCss(o)}>Edit CSS</button>
        </div>
        <div class="property-list">${e}</div>
      </div>
    `}handleOpenCss(o){this.dispatchEvent(new Oi(o))}renderPropertyEditor(o,e){let t;switch(e.editorType){case k.checkbox:t=fe`vaadin-dev-tools-theme-checkbox-property-editor`;break;case k.range:t=fe`vaadin-dev-tools-theme-range-property-editor`;break;case k.color:t=fe`vaadin-dev-tools-theme-color-property-editor`;break;default:t=fe`vaadin-dev-tools-theme-text-property-editor`}return bn` <${t}
          class="property-editor"
          .elementMetadata=${o}
          .propertyMetadata=${e}
          .theme=${this.theme}
          data-testid=${e.propertyName}
        >
        </${t}>`}};ot([g({})],Pe.prototype,"metadata",2);ot([g({})],Pe.prototype,"theme",2);Pe=ot([A("vaadin-dev-tools-theme-property-list")],Pe);var Pi=Object.defineProperty,Li=Object.getOwnPropertyDescriptor,Vi=(o,e,t,n)=>{for(var i=n>1?void 0:n?Li(e,t):e,r=o.length-1,s;r>=0;r--)(s=o[r])&&(i=(n?s(e,t,i):s(i))||i);return n&&i&&Pi(e,t,i),i};let Le=class extends N{render(){return p`<div
      tabindex="-1"
      @mousemove=${this.onMouseMove}
      @click=${this.onClick}
      @keydown=${this.onKeyDown}
    ></div>`}onClick(o){const e=this.getTargetElement(o);this.dispatchEvent(new CustomEvent("shim-click",{detail:{target:e}}))}onMouseMove(o){const e=this.getTargetElement(o);this.dispatchEvent(new CustomEvent("shim-mousemove",{detail:{target:e}}))}onKeyDown(o){this.dispatchEvent(new CustomEvent("shim-keydown",{detail:{originalEvent:o}}))}getTargetElement(o){this.style.display="none";const e=document.elementFromPoint(o.clientX,o.clientY);return this.style.display="",e}};Le.shadowRootOptions={...N.shadowRootOptions,delegatesFocus:!0};Le.styles=[_`
      div {
        pointer-events: auto;
        background: rgba(255, 255, 255, 0);
        position: fixed;
        inset: 0px;
        z-index: 1000000;
      }
    `];Le=Vi([A("vaadin-dev-tools-shim")],Le);const uo=_`
  .popup {
    width: auto;
    position: fixed;
    background-color: var(--dev-tools-background-color-active-blurred);
    color: var(--dev-tools-text-color-primary);
    padding: 0.1875rem 0.75rem 0.1875rem 1rem;
    background-clip: padding-box;
    border-radius: var(--dev-tools-border-radius);
    overflow: hidden;
    margin: 0.5rem;
    width: 30rem;
    max-width: calc(100% - 1rem);
    max-height: calc(100vh - 1rem);
    flex-shrink: 1;
    background-color: var(--dev-tools-background-color-active);
    color: var(--dev-tools-text-color);
    transition: var(--dev-tools-transition-duration);
    transform-origin: bottom right;
    display: flex;
    flex-direction: column;
    box-shadow: var(--dev-tools-box-shadow);
    outline: none;
  }
`;var Mi=Object.defineProperty,Di=Object.getOwnPropertyDescriptor,me=(o,e,t,n)=>{for(var i=n>1?void 0:n?Di(e,t):e,r=o.length-1,s;r>=0;r--)(s=o[r])&&(i=(n?s(e,t,i):s(i))||i);return n&&i&&Mi(e,t,i),i};let U=class extends N{constructor(){super(...arguments),this.active=!1,this.components=[],this.selected=0}connectedCallback(){super.connectedCallback();const o=new CSSStyleSheet;o.replaceSync(`
    .vaadin-dev-tools-highlight-overlay {
      pointer-events: none;
      position: absolute;
      z-index: 10000;
      background: rgba(158,44,198,0.25);
    }`),document.adoptedStyleSheets=[...document.adoptedStyleSheets,o],this.overlayElement=document.createElement("div"),this.overlayElement.classList.add("vaadin-dev-tools-highlight-overlay")}render(){var o;return this.active?(this.style.display="block",p`
      <vaadin-dev-tools-shim
        @shim-click=${this.shimClick}
        @shim-mousemove=${this.shimMove}
        @shim-keydown=${this.shimKeydown}
      ></vaadin-dev-tools-shim>
      <div class="window popup component-picker-info">${(o=this.options)==null?void 0:o.infoTemplate}</div>
      <div class="window popup component-picker-components-info">
        <div>
          ${this.components.map((e,t)=>p`<div class=${t===this.selected?"selected":""}>
                ${e.element.tagName.toLowerCase()}
              </div>`)}
        </div>
      </div>
    `):(this.style.display="none",null)}open(o){this.options=o,this.active=!0,this.dispatchEvent(new CustomEvent("component-picker-opened",{}))}close(){this.active=!1,this.dispatchEvent(new CustomEvent("component-picker-closed",{}))}update(o){var e;if(super.update(o),(o.has("selected")||o.has("components"))&&this.highlight((e=this.components[this.selected])==null?void 0:e.element),o.has("active")){const t=o.get("active"),n=this.active;!t&&n?requestAnimationFrame(()=>this.shim.focus()):t&&!n&&this.highlight(void 0)}}shimKeydown(o){const e=o.detail.originalEvent;if(e.key==="Escape")this.close(),o.stopPropagation(),o.preventDefault();else if(e.key==="ArrowUp"){let t=this.selected-1;t<0&&(t=this.components.length-1),this.selected=t}else e.key==="ArrowDown"?this.selected=(this.selected+1)%this.components.length:e.key==="Enter"&&(this.pickSelectedComponent(),o.stopPropagation(),o.preventDefault())}shimMove(o){const e=o.detail.target;this.components=xn(e),this.selected=this.components.length-1}shimClick(o){this.pickSelectedComponent()}pickSelectedComponent(){const o=this.components[this.selected];if(o&&this.options)try{this.options.pickCallback(o)}catch(e){console.error("Pick callback failed",e)}this.close()}highlight(o){if(this.highlighted!==o)if(o){const e=o.getBoundingClientRect(),t=getComputedStyle(o);this.overlayElement.style.top=`${e.top}px`,this.overlayElement.style.left=`${e.left}px`,this.overlayElement.style.width=`${e.width}px`,this.overlayElement.style.height=`${e.height}px`,this.overlayElement.style.borderRadius=t.borderRadius,document.body.append(this.overlayElement)}else this.overlayElement.remove();this.highlighted=o}};U.styles=[uo,_`
      .component-picker-info {
        left: 1em;
        bottom: 1em;
      }

      .component-picker-components-info {
        right: 3em;
        bottom: 1em;
      }

      .component-picker-components-info .selected {
        font-weight: bold;
      }
    `];me([x()],U.prototype,"active",2);me([x()],U.prototype,"components",2);me([x()],U.prototype,"selected",2);me([ue("vaadin-dev-tools-shim")],U.prototype,"shim",2);U=me([A("vaadin-dev-tools-component-picker")],U);const ji=Object.freeze(Object.defineProperty({__proto__:null,get ComponentPicker(){return U}},Symbol.toStringTag,{value:"Module"}));var zi=Object.defineProperty,Ui=Object.getOwnPropertyDescriptor,B=(o,e,t,n)=>{for(var i=n>1?void 0:n?Ui(e,t):e,r=o.length-1,s;r>=0;r--)(s=o[r])&&(i=(n?s(e,t,i):s(i))||i);return n&&i&&zi(e,t,i),i};Qe(_`
  .vaadin-theme-editor-highlight {
    outline: solid 2px #9e2cc6;
    outline-offset: 3px;
  }
`);let M=class extends N{constructor(){super(...arguments),this.expanded=!1,this.themeEditorState=le.enabled,this.context=null,this.baseTheme=null,this.editedTheme=null,this.effectiveTheme=null}static get styles(){return _`
      :host {
        animation: fade-in var(--dev-tools-transition-duration) ease-in;
        --theme-editor-section-horizontal-padding: 0.75rem;
        display: flex;
        flex-direction: column;
        max-height: 400px;
      }

      .notice {
        padding: var(--theme-editor-section-horizontal-padding);
      }

      .notice a {
        color: var(--dev-tools-text-color-emphasis);
      }

      .header {
        flex: 0 0 auto;
        border-bottom: solid 1px rgba(0, 0, 0, 0.2);
      }

      .header .picker-row {
        padding: var(--theme-editor-section-horizontal-padding);
        display: flex;
        gap: 20px;
        align-items: center;
        justify-content: space-between;
      }

      .picker {
        flex: 1 1 0;
        min-width: 0;
        display: flex;
        align-items: center;
      }

      .picker button {
        min-width: 0;
        display: inline-flex;
        align-items: center;
        padding: 0;
        line-height: 20px;
        border: none;
        background: none;
        color: var(--dev-tools-text-color);
      }

      .picker button:not(:disabled):hover {
        color: var(--dev-tools-text-color-emphasis);
      }

      .picker svg,
      .picker .component-type {
        flex: 0 0 auto;
        margin-right: 4px;
      }

      .picker .instance-name {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #e5a2fce5;
      }

      .picker .instance-name-quote {
        color: #e5a2fce5;
      }

      .picker .no-selection {
        font-style: italic;
      }

      .actions {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .property-list {
        flex: 1 1 auto;
        overflow-y: auto;
      }

      .link-button {
        all: initial;
        font-family: inherit;
        font-size: var(--dev-tools-font-size-small);
        line-height: 1;
        white-space: nowrap;
        color: inherit;
        font-weight: 600;
        text-decoration: underline;
      }

      .link-button:focus,
      .link-button:hover {
        color: var(--dev-tools-text-color-emphasis);
      }

      .icon-button {
        padding: 0;
        line-height: 0;
        border: none;
        background: none;
        color: var(--dev-tools-text-color);
      }

      .icon-button:disabled {
        opacity: 0.5;
      }

      .icon-button:not(:disabled):hover {
        color: var(--dev-tools-text-color-emphasis);
      }
    `}firstUpdated(){this.api=new jn(this.connection),this.history=new zn(this.api),this.historyActions=this.history.allowedActions,this.api.markAsUsed(),document.addEventListener("vaadin-theme-updated",()=>{q.clear(),this.refreshTheme()})}update(o){var e,t;super.update(o),o.has("expanded")&&(this.expanded?this.highlightElement((e=this.context)==null?void 0:e.component.element):this.removeElementHighlight((t=this.context)==null?void 0:t.component.element))}disconnectedCallback(){var o;super.disconnectedCallback(),this.removeElementHighlight((o=this.context)==null?void 0:o.component.element)}render(){var o,e,t;return this.themeEditorState===le.missing_theme?this.renderMissingThemeNotice():p`
      <div class="header">
        <div class="picker-row">
          ${this.renderPicker()}
          <div class="actions">
            ${(o=this.context)!=null&&o.metadata?p` <vaadin-dev-tools-theme-scope-selector
                  .value=${this.context.scope}
                  .metadata=${this.context.metadata}
                  @scope-change=${this.handleScopeChange}
                ></vaadin-dev-tools-theme-scope-selector>`:null}
            <button
              class="icon-button"
              data-testid="undo"
              ?disabled=${!((e=this.historyActions)!=null&&e.allowUndo)}
              @click=${this.handleUndo}
            >
              ${Ee.undo}
            </button>
            <button
              class="icon-button"
              data-testid="redo"
              ?disabled=${!((t=this.historyActions)!=null&&t.allowRedo)}
              @click=${this.handleRedo}
            >
              ${Ee.redo}
            </button>
          </div>
        </div>
        ${this.renderLocalClassNameEditor()}
      </div>
      ${this.renderPropertyList()}
    `}renderMissingThemeNotice(){return p`
      <div class="notice">
        It looks like you have not set up a custom theme yet. Theme editor requires an existing theme to work with.
        Please check our
        <a href="https://vaadin.com/docs/latest/styling/custom-theme/creating-custom-theme" target="_blank"
          >documentation</a
        >
        on how to set up a custom theme.
      </div>
    `}renderPropertyList(){if(!this.context)return null;if(!this.context.metadata){const o=this.context.component.element.localName;return p`
        <div class="notice">Styling <code>&lt;${o}&gt;</code> components is not supported at the moment.</div>
      `}if(this.context.scope===I.local&&!this.context.accessible){const o=this.context.metadata.displayName;return p`
        <div class="notice">
          The selected ${o} can not be styled locally. Currently, theme editor only supports styling
          instances that are assigned to a local variable, like so:
          <pre><code>Button saveButton = new Button("Save");</code></pre>
          If you want to modify the code so that it satisfies this requirement,
          <button class="link-button" @click=${this.handleShowComponent}>click here</button>
          to open it in your IDE. Alternatively you can choose to style all ${o}s by selecting "Global" from
          the scope dropdown above.
        </div>
      `}return p` <vaadin-dev-tools-theme-property-list
      class="property-list"
      .metadata=${this.context.metadata}
      .theme=${this.effectiveTheme}
      @theme-property-value-change=${this.handlePropertyChange}
      @open-css=${this.handleOpenCss}
    ></vaadin-dev-tools-theme-property-list>`}handleShowComponent(){if(!this.context)return;const o=this.context.component,e={nodeId:o.nodeId,uiId:o.uiId};this.connection.sendShowComponentCreateLocation(e)}async handleOpenCss(o){if(!this.context)return;await this.ensureLocalClassName();const e={themeScope:this.context.scope,localClassName:this.context.localClassName},t=X(o.detail.element,e);await this.api.openCss(t)}renderPicker(){var o;let e;if((o=this.context)!=null&&o.metadata){const t=this.context.scope===I.local?this.context.metadata.displayName:`All ${this.context.metadata.displayName}s`,n=p`<span class="component-type">${t}</span>`,i=this.context.scope===I.local?Mn(this.context.component):null,r=i?p` <span class="instance-name-quote">"</span><span class="instance-name">${i}</span
            ><span class="instance-name-quote">"</span>`:null;e=p`${n} ${r}`}else e=p`<span class="no-selection">Pick an element to get started</span>`;return p`
      <div class="picker">
        <button @click=${this.pickComponent}>${Ee.crosshair} ${e}</button>
      </div>
    `}renderLocalClassNameEditor(){var o;const e=((o=this.context)==null?void 0:o.scope)===I.local&&this.context.accessible;if(!this.context||!e)return null;const t=this.context.localClassName||this.context.suggestedClassName;return p` <vaadin-dev-tools-theme-class-name-editor
      .className=${t}
      @class-name-change=${this.handleClassNameChange}
    >
    </vaadin-dev-tools-theme-class-name-editor>`}async handleClassNameChange(o){if(!this.context)return;const e=this.context.localClassName,t=o.detail.value;if(e){const n=this.context.component.element;this.context.localClassName=t;const i=await this.api.setLocalClassName(this.context.component,t);this.historyActions=this.history.push(i.requestId,()=>q.previewLocalClassName(n,t),()=>q.previewLocalClassName(n,e))}else this.context={...this.context,suggestedClassName:t}}async pickComponent(){var o;this.removeElementHighlight((o=this.context)==null?void 0:o.component.element),this.pickerProvider().open({infoTemplate:p`
        <div>
          <h3>Locate the component to style</h3>
          <p>Use the mouse cursor to highlight components in the UI.</p>
          <p>Use arrow down/up to cycle through and highlight specific components under the cursor.</p>
          <p>Click the primary mouse button to select the component.</p>
        </div>
      `,pickCallback:async e=>{var t;const n=await On.getMetadata(e);if(!n){this.context={component:e,scope:((t=this.context)==null?void 0:t.scope)||I.local},this.baseTheme=null,this.editedTheme=null,this.effectiveTheme=null;return}this.highlightElement(e.element),this.refreshComponentAndTheme(e,n)}})}handleScopeChange(o){this.context&&this.refreshTheme({...this.context,scope:o.detail.value})}async handlePropertyChange(o){if(!this.context||!this.baseTheme||!this.editedTheme)return;const{element:e,property:t,value:n}=o.detail;this.editedTheme.updatePropertyValue(e.selector,t.propertyName,n,!0),this.effectiveTheme=z.combine(this.baseTheme,this.editedTheme),await this.ensureLocalClassName();const i={themeScope:this.context.scope,localClassName:this.context.localClassName},r=Pn(e,i,t.propertyName,n);try{const s=await this.api.setCssRules([r]);this.historyActions=this.history.push(s.requestId);const l=Ln(r);q.add(l)}catch(s){console.error("Failed to update property value",s)}}async handleUndo(){this.historyActions=await this.history.undo(),await this.refreshComponentAndTheme()}async handleRedo(){this.historyActions=await this.history.redo(),await this.refreshComponentAndTheme()}async ensureLocalClassName(){if(!this.context||this.context.scope===I.global||this.context.localClassName)return;if(!this.context.localClassName&&!this.context.suggestedClassName)throw new Error("Cannot assign local class name for the component because it does not have a suggested class name");const o=this.context.component.element,e=this.context.suggestedClassName;this.context.localClassName=e;const t=await this.api.setLocalClassName(this.context.component,e);this.historyActions=this.history.push(t.requestId,()=>q.previewLocalClassName(o,e),()=>q.previewLocalClassName(o))}async refreshComponentAndTheme(o,e){var t,n,i;if(o=o||((t=this.context)==null?void 0:t.component),e=e||((n=this.context)==null?void 0:n.metadata),!o||!e)return;const r=await this.api.loadComponentMetadata(o);q.previewLocalClassName(o.element,r.className),await this.refreshTheme({scope:((i=this.context)==null?void 0:i.scope)||I.local,metadata:e,component:o,localClassName:r.className,suggestedClassName:r.suggestedClassName,accessible:r.accessible})}async refreshTheme(o){const e=o||this.context;if(!e||!e.metadata)return;if(e.scope===I.local&&!e.accessible){this.context=e,this.baseTheme=null,this.editedTheme=null,this.effectiveTheme=null;return}let t=new z(e.metadata);if(!(e.scope===I.local&&!e.localClassName)){const i={themeScope:e.scope,localClassName:e.localClassName},r=e.metadata.elements.map(l=>X(l,i)),s=await this.api.loadRules(r);t=z.fromServerRules(e.metadata,i,s.rules)}const n=await Vn(e.metadata);this.context=e,this.baseTheme=n,this.editedTheme=t,this.effectiveTheme=z.combine(n,this.editedTheme)}highlightElement(o){o&&o.classList.add("vaadin-theme-editor-highlight")}removeElementHighlight(o){o&&o.classList.remove("vaadin-theme-editor-highlight")}};B([g({})],M.prototype,"expanded",2);B([g({})],M.prototype,"themeEditorState",2);B([g({})],M.prototype,"pickerProvider",2);B([g({})],M.prototype,"connection",2);B([x()],M.prototype,"historyActions",2);B([x()],M.prototype,"context",2);B([x()],M.prototype,"effectiveTheme",2);M=B([A("vaadin-dev-tools-theme-editor")],M);var Fi=function(){var o=document.getSelection();if(!o.rangeCount)return function(){};for(var e=document.activeElement,t=[],n=0;n<o.rangeCount;n++)t.push(o.getRangeAt(n));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null;break}return o.removeAllRanges(),function(){o.type==="Caret"&&o.removeAllRanges(),o.rangeCount||t.forEach(function(i){o.addRange(i)}),e&&e.focus()}},Ft={"text/plain":"Text","text/html":"Url",default:"Text"},Bi="Copy to clipboard: #{key}, Enter";function qi(o){var e=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return o.replace(/#{\s*key\s*}/g,e)}function Hi(o,e){var t,n,i,r,s,l,a=!1;e||(e={}),t=e.debug||!1;try{i=Fi(),r=document.createRange(),s=document.getSelection(),l=document.createElement("span"),l.textContent=o,l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",function(c){if(c.stopPropagation(),e.format)if(c.preventDefault(),typeof c.clipboardData>"u"){t&&console.warn("unable to use e.clipboardData"),t&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var u=Ft[e.format]||Ft.default;window.clipboardData.setData(u,o)}else c.clipboardData.clearData(),c.clipboardData.setData(e.format,o);e.onCopy&&(c.preventDefault(),e.onCopy(c.clipboardData))}),document.body.appendChild(l),r.selectNodeContents(l),s.addRange(r);var d=document.execCommand("copy");if(!d)throw new Error("copy command was unsuccessful");a=!0}catch(c){t&&console.error("unable to copy using execCommand: ",c),t&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",o),e.onCopy&&e.onCopy(window.clipboardData),a=!0}catch(u){t&&console.error("unable to copy using clipboardData: ",u),t&&console.error("falling back to prompt"),n=qi("message"in e?e.message:Bi),window.prompt(n,o)}}finally{s&&(typeof s.removeRange=="function"?s.removeRange(r):s.removeAllRanges()),l&&document.body.removeChild(l),i()}return a}const nt=1e3,it=(o,e)=>{const t=Array.from(o.querySelectorAll(e.join(", "))),n=Array.from(o.querySelectorAll("*")).filter(i=>i.shadowRoot).flatMap(i=>it(i.shadowRoot,e));return[...t,...n]};let Bt=!1;const pe=(o,e)=>{Bt||(window.addEventListener("message",i=>{i.data==="validate-license"&&window.location.reload()},!1),Bt=!0);const t=o._overlayElement;if(t){if(t.shadowRoot){const i=t.shadowRoot.querySelector("slot:not([name])");if(i&&i.assignedElements().length>0){pe(i.assignedElements()[0],e);return}}pe(t,e);return}const n=e.messageHtml?e.messageHtml:`${e.message} <p>Component: ${e.product.name} ${e.product.version}</p>`.replace(/https:([^ ]*)/g,"<a href='https:$1'>https:$1</a>");o.isConnected&&(o.outerHTML=`<no-license style="display:flex;align-items:center;text-align:center;justify-content:center;"><div>${n}</div></no-license>`)},re={},qt={},Z={},mo={},V=o=>`${o.name}_${o.version}`,Ht=o=>{const{cvdlName:e,version:t}=o.constructor,n={name:e,version:t},i=o.tagName.toLowerCase();re[e]=re[e]??[],re[e].push(i);const r=Z[V(n)];r&&setTimeout(()=>pe(o,r),nt),Z[V(n)]||mo[V(n)]||qt[V(n)]||(qt[V(n)]=!0,window.Vaadin.devTools.checkLicense(n))},Gi=o=>{mo[V(o)]=!0,console.debug("License check ok for",o)},vo=o=>{const e=o.product.name;Z[V(o.product)]=o,console.error("License check failed for",e);const t=re[e];(t==null?void 0:t.length)>0&&it(document,t).forEach(n=>{setTimeout(()=>pe(n,Z[V(o.product)]),nt)})},Wi=o=>{const e=o.message,t=o.product.name;o.messageHtml=`No license found. <a target=_blank onclick="javascript:window.open(this.href);return false;" href="${e}">Go here to start a trial or retrieve your license.</a>`,Z[V(o.product)]=o,console.error("No license found when checking",t);const n=re[t];(n==null?void 0:n.length)>0&&it(document,n).forEach(i=>{setTimeout(()=>pe(i,Z[V(o.product)]),nt)})},Ki=()=>{window.Vaadin.devTools.createdCvdlElements.forEach(o=>{Ht(o)}),window.Vaadin.devTools.createdCvdlElements={push:o=>{Ht(o)}}};var S=(o=>(o.ACTIVE="active",o.INACTIVE="inactive",o.UNAVAILABLE="unavailable",o.ERROR="error",o))(S||{});const go=class fo extends Object{constructor(e){super(),this.status="unavailable",e&&(this.webSocket=new WebSocket(e),this.webSocket.onmessage=t=>this.handleMessage(t),this.webSocket.onerror=t=>this.handleError(t),this.webSocket.onclose=t=>{this.status!=="error"&&this.setStatus("unavailable"),this.webSocket=void 0}),setInterval(()=>{this.webSocket&&self.status!=="error"&&this.status!=="unavailable"&&this.webSocket.send("")},fo.HEARTBEAT_INTERVAL)}onHandshake(){}onReload(){}onUpdate(e,t){}onConnectionError(e){}onStatusChange(e){}onMessage(e){console.error("Unknown message received from the live reload server:",e)}handleMessage(e){let t;try{t=JSON.parse(e.data)}catch(n){this.handleError(`[${n.name}: ${n.message}`);return}t.command==="hello"?(this.setStatus("active"),this.onHandshake()):t.command==="reload"?this.status==="active"&&this.onReload():t.command==="update"?this.status==="active"&&this.onUpdate(t.path,t.content):t.command==="license-check-ok"?Gi(t.data):t.command==="license-check-failed"?vo(t.data):t.command==="license-check-nokey"?Wi(t.data):this.onMessage(t)}handleError(e){console.error(e),this.setStatus("error"),e instanceof Event&&this.webSocket?this.onConnectionError(`Error in WebSocket connection to ${this.webSocket.url}`):this.onConnectionError(e)}setActive(e){!e&&this.status==="active"?this.setStatus("inactive"):e&&this.status==="inactive"&&this.setStatus("active")}setStatus(e){this.status!==e&&(this.status=e,this.onStatusChange(e))}send(e,t){const n=JSON.stringify({command:e,data:t});this.webSocket?this.webSocket.readyState!==WebSocket.OPEN?this.webSocket.addEventListener("open",()=>this.webSocket.send(n)):this.webSocket.send(n):console.error(`Unable to send message ${e}. No websocket is available`)}setFeature(e,t){this.send("setFeature",{featureId:e,enabled:t})}sendTelemetry(e){this.send("reportTelemetry",{browserData:e})}sendLicenseCheck(e){this.send("checkLicense",e)}sendShowComponentCreateLocation(e){this.send("showComponentCreateLocation",e)}sendShowComponentAttachLocation(e){this.send("showComponentAttachLocation",e)}};go.HEARTBEAT_INTERVAL=18e4;let Ge=go;var Yi=Object.defineProperty,Ji=Object.getOwnPropertyDescriptor,E=(o,e,t,n)=>{for(var i=n>1?void 0:n?Ji(e,t):e,r=o.length-1,s;r>=0;r--)(s=o[r])&&(i=(n?s(e,t,i):s(i))||i);return n&&i&&Yi(e,t,i),i};const v=class w extends N{constructor(){super(),this.expanded=!1,this.messages=[],this.notifications=[],this.frontendStatus=S.UNAVAILABLE,this.javaStatus=S.UNAVAILABLE,this.tabs=[{id:"log",title:"Log",render:()=>this.renderLog(),activate:this.activateLog},{id:"info",title:"Info",render:()=>this.renderInfo()},{id:"features",title:"Feature Flags",render:()=>this.renderFeatures()}],this.activeTab="log",this.serverInfo={flowVersion:"",vaadinVersion:"",javaVersion:"",osVersion:"",productName:""},this.features=[],this.unreadErrors=!1,this.componentPickActive=!1,this.themeEditorState=le.disabled,this.nextMessageId=1,this.transitionDuration=0,this.disableLiveReloadTimeout=null,window.Vaadin.Flow&&this.tabs.push({id:"code",title:"Code",render:()=>this.renderCode()})}static get styles(){return[_`
        :host {
          --dev-tools-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell,
            'Helvetica Neue', sans-serif;
          --dev-tools-font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
            monospace;

          --dev-tools-font-size: 0.8125rem;
          --dev-tools-font-size-small: 0.75rem;

          --dev-tools-text-color: rgba(255, 255, 255, 0.8);
          --dev-tools-text-color-secondary: rgba(255, 255, 255, 0.65);
          --dev-tools-text-color-emphasis: rgba(255, 255, 255, 0.95);
          --dev-tools-text-color-active: rgba(255, 255, 255, 1);

          --dev-tools-background-color-inactive: rgba(45, 45, 45, 0.25);
          --dev-tools-background-color-active: rgba(45, 45, 45, 0.98);
          --dev-tools-background-color-active-blurred: rgba(45, 45, 45, 0.85);

          --dev-tools-border-radius: 0.5rem;
          --dev-tools-box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05), 0 4px 12px -2px rgba(0, 0, 0, 0.4);

          --dev-tools-blue-hsl: 206, 100%, 70%;
          --dev-tools-blue-color: hsl(var(--dev-tools-blue-hsl));
          --dev-tools-green-hsl: 145, 80%, 42%;
          --dev-tools-green-color: hsl(var(--dev-tools-green-hsl));
          --dev-tools-grey-hsl: 0, 0%, 50%;
          --dev-tools-grey-color: hsl(var(--dev-tools-grey-hsl));
          --dev-tools-yellow-hsl: 38, 98%, 64%;
          --dev-tools-yellow-color: hsl(var(--dev-tools-yellow-hsl));
          --dev-tools-red-hsl: 355, 100%, 68%;
          --dev-tools-red-color: hsl(var(--dev-tools-red-hsl));

          /* Needs to be in ms, used in JavaScript as well */
          --dev-tools-transition-duration: 180ms;

          all: initial;

          direction: ltr;
          cursor: default;
          font: normal 400 var(--dev-tools-font-size) / 1.125rem var(--dev-tools-font-family);
          color: var(--dev-tools-text-color);
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
          color-scheme: dark;

          position: fixed;
          z-index: 20000;
          pointer-events: none;
          bottom: 0;
          right: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column-reverse;
          align-items: flex-end;
        }

        .dev-tools {
          pointer-events: auto;
          display: flex;
          align-items: center;
          position: fixed;
          z-index: inherit;
          right: 0.5rem;
          bottom: 0.5rem;
          min-width: 1.75rem;
          height: 1.75rem;
          max-width: 1.75rem;
          border-radius: 0.5rem;
          padding: 0.375rem;
          box-sizing: border-box;
          background-color: var(--dev-tools-background-color-inactive);
          box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
          color: var(--dev-tools-text-color);
          transition: var(--dev-tools-transition-duration);
          white-space: nowrap;
          line-height: 1rem;
        }

        .dev-tools:hover,
        .dev-tools.active {
          background-color: var(--dev-tools-background-color-active);
          box-shadow: var(--dev-tools-box-shadow);
        }

        .dev-tools.active {
          max-width: calc(100% - 1rem);
        }

        .dev-tools .dev-tools-icon {
          flex: none;
          pointer-events: none;
          display: inline-block;
          width: 1rem;
          height: 1rem;
          fill: #fff;
          transition: var(--dev-tools-transition-duration);
          margin: 0;
        }

        .dev-tools.active .dev-tools-icon {
          opacity: 0;
          position: absolute;
          transform: scale(0.5);
        }

        .dev-tools .status-blip {
          flex: none;
          display: block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          z-index: 20001;
          background: var(--dev-tools-grey-color);
          position: absolute;
          top: -1px;
          right: -1px;
        }

        .dev-tools .status-description {
          overflow: hidden;
          text-overflow: ellipsis;
          padding: 0 0.25rem;
        }

        .dev-tools.error {
          background-color: hsla(var(--dev-tools-red-hsl), 0.15);
          animation: bounce 0.5s;
          animation-iteration-count: 2;
        }

        .switch {
          display: inline-flex;
          align-items: center;
        }

        .switch input {
          opacity: 0;
          width: 0;
          height: 0;
          position: absolute;
        }

        .switch .slider {
          display: block;
          flex: none;
          width: 28px;
          height: 18px;
          border-radius: 9px;
          background-color: rgba(255, 255, 255, 0.3);
          transition: var(--dev-tools-transition-duration);
          margin-right: 0.5rem;
        }

        .switch:focus-within .slider,
        .switch .slider:hover {
          background-color: rgba(255, 255, 255, 0.35);
          transition: none;
        }

        .switch input:focus-visible ~ .slider {
          box-shadow: 0 0 0 2px var(--dev-tools-background-color-active), 0 0 0 4px var(--dev-tools-blue-color);
        }

        .switch .slider::before {
          content: '';
          display: block;
          margin: 2px;
          width: 14px;
          height: 14px;
          background-color: #fff;
          transition: var(--dev-tools-transition-duration);
          border-radius: 50%;
        }

        .switch input:checked + .slider {
          background-color: var(--dev-tools-green-color);
        }

        .switch input:checked + .slider::before {
          transform: translateX(10px);
        }

        .switch input:disabled + .slider::before {
          background-color: var(--dev-tools-grey-color);
        }

        .window.hidden {
          opacity: 0;
          transform: scale(0);
          position: absolute;
        }

        .window.visible {
          transform: none;
          opacity: 1;
          pointer-events: auto;
        }

        .window.visible ~ .dev-tools {
          opacity: 0;
          pointer-events: none;
        }

        .window.visible ~ .dev-tools .dev-tools-icon,
        .window.visible ~ .dev-tools .status-blip {
          transition: none;
          opacity: 0;
        }

        .window {
          border-radius: var(--dev-tools-border-radius);
          overflow: auto;
          margin: 0.5rem;
          min-width: 30rem;
          max-width: calc(100% - 1rem);
          max-height: calc(100vh - 1rem);
          flex-shrink: 1;
          background-color: var(--dev-tools-background-color-active);
          color: var(--dev-tools-text-color);
          transition: var(--dev-tools-transition-duration);
          transform-origin: bottom right;
          display: flex;
          flex-direction: column;
          box-shadow: var(--dev-tools-box-shadow);
          outline: none;
        }

        .window-toolbar {
          display: flex;
          flex: none;
          align-items: center;
          padding: 0.375rem;
          white-space: nowrap;
          order: 1;
          background-color: rgba(0, 0, 0, 0.2);
          gap: 0.5rem;
        }

        .tab {
          color: var(--dev-tools-text-color-secondary);
          font: inherit;
          font-size: var(--dev-tools-font-size-small);
          font-weight: 500;
          line-height: 1;
          padding: 0.25rem 0.375rem;
          background: none;
          border: none;
          margin: 0;
          border-radius: 0.25rem;
          transition: var(--dev-tools-transition-duration);
        }

        .tab:hover,
        .tab.active {
          color: var(--dev-tools-text-color-active);
        }

        .tab.active {
          background-color: rgba(255, 255, 255, 0.12);
        }

        .tab.unreadErrors::after {
          content: '•';
          color: hsl(var(--dev-tools-red-hsl));
          font-size: 1.5rem;
          position: absolute;
          transform: translate(0, -50%);
        }

        .ahreflike {
          font-weight: 500;
          color: var(--dev-tools-text-color-secondary);
          text-decoration: underline;
          cursor: pointer;
        }

        .ahreflike:hover {
          color: var(--dev-tools-text-color-emphasis);
        }

        .button {
          all: initial;
          font-family: inherit;
          font-size: var(--dev-tools-font-size-small);
          line-height: 1;
          white-space: nowrap;
          background-color: rgba(0, 0, 0, 0.2);
          color: inherit;
          font-weight: 600;
          padding: 0.25rem 0.375rem;
          border-radius: 0.25rem;
        }

        .button:focus,
        .button:hover {
          color: var(--dev-tools-text-color-emphasis);
        }

        .minimize-button {
          flex: none;
          width: 1rem;
          height: 1rem;
          color: inherit;
          background-color: transparent;
          border: 0;
          padding: 0;
          margin: 0 0 0 auto;
          opacity: 0.8;
        }

        .minimize-button:hover {
          opacity: 1;
        }

        .minimize-button svg {
          max-width: 100%;
        }

        .message.information {
          --dev-tools-notification-color: var(--dev-tools-blue-color);
        }

        .message.warning {
          --dev-tools-notification-color: var(--dev-tools-yellow-color);
        }

        .message.error {
          --dev-tools-notification-color: var(--dev-tools-red-color);
        }

        .message {
          display: flex;
          padding: 0.1875rem 0.75rem 0.1875rem 2rem;
          background-clip: padding-box;
        }

        .message.log {
          padding-left: 0.75rem;
        }

        .message-content {
          margin-right: 0.5rem;
          -webkit-user-select: text;
          -moz-user-select: text;
          user-select: text;
        }

        .message-heading {
          position: relative;
          display: flex;
          align-items: center;
          margin: 0.125rem 0;
        }

        .message.log {
          color: var(--dev-tools-text-color-secondary);
        }

        .message:not(.log) .message-heading {
          font-weight: 500;
        }

        .message.has-details .message-heading {
          color: var(--dev-tools-text-color-emphasis);
          font-weight: 600;
        }

        .message-heading::before {
          position: absolute;
          margin-left: -1.5rem;
          display: inline-block;
          text-align: center;
          font-size: 0.875em;
          font-weight: 600;
          line-height: calc(1.25em - 2px);
          width: 14px;
          height: 14px;
          box-sizing: border-box;
          border: 1px solid transparent;
          border-radius: 50%;
        }

        .message.information .message-heading::before {
          content: 'i';
          border-color: currentColor;
          color: var(--dev-tools-notification-color);
        }

        .message.warning .message-heading::before,
        .message.error .message-heading::before {
          content: '!';
          color: var(--dev-tools-background-color-active);
          background-color: var(--dev-tools-notification-color);
        }

        .features-tray {
          padding: 0.75rem;
          flex: auto;
          overflow: auto;
          animation: fade-in var(--dev-tools-transition-duration) ease-in;
          user-select: text;
        }

        .features-tray p {
          margin-top: 0;
          color: var(--dev-tools-text-color-secondary);
        }

        .features-tray .feature {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding-bottom: 0.5em;
        }

        .message .message-details {
          font-weight: 400;
          color: var(--dev-tools-text-color-secondary);
          margin: 0.25rem 0;
        }

        .message .message-details[hidden] {
          display: none;
        }

        .message .message-details p {
          display: inline;
          margin: 0;
          margin-right: 0.375em;
          word-break: break-word;
        }

        .message .persist {
          color: var(--dev-tools-text-color-secondary);
          white-space: nowrap;
          margin: 0.375rem 0;
          display: flex;
          align-items: center;
          position: relative;
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
        }

        .message .persist::before {
          content: '';
          width: 1em;
          height: 1em;
          border-radius: 0.2em;
          margin-right: 0.375em;
          background-color: rgba(255, 255, 255, 0.3);
        }

        .message .persist:hover::before {
          background-color: rgba(255, 255, 255, 0.4);
        }

        .message .persist.on::before {
          background-color: rgba(255, 255, 255, 0.9);
        }

        .message .persist.on::after {
          content: '';
          order: -1;
          position: absolute;
          width: 0.75em;
          height: 0.25em;
          border: 2px solid var(--dev-tools-background-color-active);
          border-width: 0 0 2px 2px;
          transform: translate(0.05em, -0.05em) rotate(-45deg) scale(0.8, 0.9);
        }

        .message .dismiss-message {
          font-weight: 600;
          align-self: stretch;
          display: flex;
          align-items: center;
          padding: 0 0.25rem;
          margin-left: 0.5rem;
          color: var(--dev-tools-text-color-secondary);
        }

        .message .dismiss-message:hover {
          color: var(--dev-tools-text-color);
        }

        .notification-tray {
          display: flex;
          flex-direction: column-reverse;
          align-items: flex-end;
          margin: 0.5rem;
          flex: none;
        }

        .window.hidden + .notification-tray {
          margin-bottom: 3rem;
        }

        .notification-tray .message {
          pointer-events: auto;
          background-color: var(--dev-tools-background-color-active);
          color: var(--dev-tools-text-color);
          max-width: 30rem;
          box-sizing: border-box;
          border-radius: var(--dev-tools-border-radius);
          margin-top: 0.5rem;
          transition: var(--dev-tools-transition-duration);
          transform-origin: bottom right;
          animation: slideIn var(--dev-tools-transition-duration);
          box-shadow: var(--dev-tools-box-shadow);
          padding-top: 0.25rem;
          padding-bottom: 0.25rem;
        }

        .notification-tray .message.animate-out {
          animation: slideOut forwards var(--dev-tools-transition-duration);
        }

        .notification-tray .message .message-details {
          max-height: 10em;
          overflow: hidden;
        }

        .message-tray {
          flex: auto;
          overflow: auto;
          max-height: 20rem;
          user-select: text;
        }

        .message-tray .message {
          animation: fade-in var(--dev-tools-transition-duration) ease-in;
          padding-left: 2.25rem;
        }

        .message-tray .message.warning {
          background-color: hsla(var(--dev-tools-yellow-hsl), 0.09);
        }

        .message-tray .message.error {
          background-color: hsla(var(--dev-tools-red-hsl), 0.09);
        }

        .message-tray .message.error .message-heading {
          color: hsl(var(--dev-tools-red-hsl));
        }

        .message-tray .message.warning .message-heading {
          color: hsl(var(--dev-tools-yellow-hsl));
        }

        .message-tray .message + .message {
          border-top: 1px solid rgba(255, 255, 255, 0.07);
        }

        .message-tray .dismiss-message,
        .message-tray .persist {
          display: none;
        }

        .info-tray {
          padding: 0.75rem;
          position: relative;
          flex: auto;
          overflow: auto;
          animation: fade-in var(--dev-tools-transition-duration) ease-in;
          user-select: text;
        }

        .info-tray dl {
          margin: 0;
          display: grid;
          grid-template-columns: max-content 1fr;
          column-gap: 0.75rem;
          position: relative;
        }

        .info-tray dt {
          grid-column: 1;
          color: var(--dev-tools-text-color-emphasis);
        }

        .info-tray dt:not(:first-child)::before {
          content: '';
          width: 100%;
          position: absolute;
          height: 1px;
          background-color: rgba(255, 255, 255, 0.1);
          margin-top: -0.375rem;
        }

        .info-tray dd {
          grid-column: 2;
          margin: 0;
        }

        .info-tray :is(dt, dd):not(:last-child) {
          margin-bottom: 0.75rem;
        }

        .info-tray dd + dd {
          margin-top: -0.5rem;
        }

        .info-tray .live-reload-status::before {
          content: '•';
          color: var(--status-color);
          width: 0.75rem;
          display: inline-block;
          font-size: 1rem;
          line-height: 0.5rem;
        }

        .info-tray .copy {
          position: fixed;
          z-index: 1;
          top: 0.5rem;
          right: 0.5rem;
        }

        .info-tray .switch {
          vertical-align: -4px;
        }

        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0%);
            opacity: 1;
          }
        }

        @keyframes slideOut {
          from {
            transform: translateX(0%);
            opacity: 1;
          }
          to {
            transform: translateX(100%);
            opacity: 0;
          }
        }

        @keyframes fade-in {
          0% {
            opacity: 0;
          }
        }

        @keyframes bounce {
          0% {
            transform: scale(0.8);
          }
          50% {
            transform: scale(1.5);
            background-color: hsla(var(--dev-tools-red-hsl), 1);
          }
          100% {
            transform: scale(1);
          }
        }

        @supports (backdrop-filter: blur(1px)) {
          .dev-tools,
          .window,
          .notification-tray .message {
            backdrop-filter: blur(8px);
          }
          .dev-tools:hover,
          .dev-tools.active,
          .window,
          .notification-tray .message {
            background-color: var(--dev-tools-background-color-active-blurred);
          }
        }
      `,uo]}static get isActive(){const e=window.sessionStorage.getItem(w.ACTIVE_KEY_IN_SESSION_STORAGE);return e===null||e!=="false"}static notificationDismissed(e){const t=window.localStorage.getItem(w.DISMISSED_NOTIFICATIONS_IN_LOCAL_STORAGE);return t!==null&&t.includes(e)}elementTelemetry(){let e={};try{const t=localStorage.getItem("vaadin.statistics.basket");if(!t)return;e=JSON.parse(t)}catch{return}this.frontendConnection&&this.frontendConnection.sendTelemetry(e)}openWebSocketConnection(){this.frontendStatus=S.UNAVAILABLE,this.javaStatus=S.UNAVAILABLE;const e=a=>this.log("error",a),t=()=>{this.showSplashMessage("Reloading…");const a=window.sessionStorage.getItem(w.TRIGGERED_COUNT_KEY_IN_SESSION_STORAGE),d=a?parseInt(a,10)+1:1;window.sessionStorage.setItem(w.TRIGGERED_COUNT_KEY_IN_SESSION_STORAGE,d.toString()),window.sessionStorage.setItem(w.TRIGGERED_KEY_IN_SESSION_STORAGE,"true"),window.location.reload()},n=(a,d)=>{let c=document.head.querySelector(`style[data-file-path='${a}']`);c?(this.log("information","Hot update of "+a),c.textContent=d,document.dispatchEvent(new CustomEvent("vaadin-theme-updated"))):t()},i=new Ge(this.getDedicatedWebSocketUrl());i.onHandshake=()=>{this.log("log","Vaadin development mode initialized"),w.isActive||i.setActive(!1),this.elementTelemetry()},i.onConnectionError=e,i.onReload=t,i.onUpdate=n,i.onStatusChange=a=>{this.frontendStatus=a},i.onMessage=a=>this.handleFrontendMessage(a),this.frontendConnection=i;let r;this.backend===w.SPRING_BOOT_DEVTOOLS&&this.springBootLiveReloadPort?(r=new Ge(this.getSpringBootWebSocketUrl(window.location)),r.onHandshake=()=>{w.isActive||r.setActive(!1)},r.onReload=t,r.onConnectionError=e):this.backend===w.JREBEL||this.backend===w.HOTSWAP_AGENT?r=i:r=new Ge(void 0);const s=r.onStatusChange;r.onStatusChange=a=>{s(a),this.javaStatus=a};const l=r.onHandshake;r.onHandshake=()=>{l(),this.backend&&this.log("information",`Java live reload available: ${w.BACKEND_DISPLAY_NAME[this.backend]}`)},this.javaConnection=r,this.backend||this.showNotification("warning","Java live reload unavailable","Live reload for Java changes is currently not set up. Find out how to make use of this functionality to boost your workflow.","https://vaadin.com/docs/latest/flow/configuration/live-reload","liveReloadUnavailable")}handleFrontendMessage(e){if((e==null?void 0:e.command)==="serverInfo")this.serverInfo=e.data;else if((e==null?void 0:e.command)==="featureFlags")this.features=e.data.features;else if((e==null?void 0:e.command)==="themeEditorState"){const t=!!window.Vaadin.Flow;this.themeEditorState=e.data,t&&this.themeEditorState!==le.disabled&&(this.tabs.push({id:"theme-editor",title:"Theme Editor (Preview)",render:()=>this.renderThemeEditor()}),this.requestUpdate())}else console.error("Unknown message from front-end connection:",JSON.stringify(e))}getDedicatedWebSocketUrl(){function e(n){const i=document.createElement("div");return i.innerHTML=`<a href="${n}"/>`,i.firstChild.href}if(this.url===void 0)return;const t=e(this.url);if(!t.startsWith("http://")&&!t.startsWith("https://")){console.error("The protocol of the url should be http or https for live reload to work.");return}return`${t.replace(/^http/,"ws")}?v-r=push&debug_window`}getSpringBootWebSocketUrl(e){const{hostname:t}=e,n=e.protocol==="https:"?"wss":"ws";if(t.endsWith("gitpod.io")){const i=t.replace(/.*?-/,"");return`${n}://${this.springBootLiveReloadPort}-${i}`}else return`${n}://${t}:${this.springBootLiveReloadPort}`}connectedCallback(){if(super.connectedCallback(),this.catchErrors(),this.disableEventListener=t=>this.demoteSplashMessage(),document.body.addEventListener("focus",this.disableEventListener),document.body.addEventListener("click",this.disableEventListener),this.openWebSocketConnection(),window.sessionStorage.getItem(w.TRIGGERED_KEY_IN_SESSION_STORAGE)){const t=new Date,n=`${`0${t.getHours()}`.slice(-2)}:${`0${t.getMinutes()}`.slice(-2)}:${`0${t.getSeconds()}`.slice(-2)}`;this.showSplashMessage(`Page reloaded at ${n}`),window.sessionStorage.removeItem(w.TRIGGERED_KEY_IN_SESSION_STORAGE)}this.transitionDuration=parseInt(window.getComputedStyle(this).getPropertyValue("--dev-tools-transition-duration"),10);const e=window;e.Vaadin=e.Vaadin||{},e.Vaadin.devTools=Object.assign(this,e.Vaadin.devTools),Ki(),document.documentElement.addEventListener("vaadin-overlay-outside-click",t=>{const n=t,i=n.target.owner;i&&kn(this,i)||n.detail.sourceEvent.composedPath().includes(this)&&t.preventDefault()})}format(e){return e.toString()}catchErrors(){const e=window.Vaadin.ConsoleErrors;e&&e.forEach(t=>{this.log("error",t.map(n=>this.format(n)).join(" "))}),window.Vaadin.ConsoleErrors={push:t=>{this.log("error",t.map(n=>this.format(n)).join(" "))}}}disconnectedCallback(){this.disableEventListener&&(document.body.removeEventListener("focus",this.disableEventListener),document.body.removeEventListener("click",this.disableEventListener)),super.disconnectedCallback()}toggleExpanded(){this.notifications.slice().forEach(e=>this.dismissNotification(e.id)),this.expanded=!this.expanded,this.expanded&&this.root.focus()}showSplashMessage(e){this.splashMessage=e,this.splashMessage&&(this.expanded?this.demoteSplashMessage():setTimeout(()=>{this.demoteSplashMessage()},w.AUTO_DEMOTE_NOTIFICATION_DELAY))}demoteSplashMessage(){this.splashMessage&&this.log("log",this.splashMessage),this.showSplashMessage(void 0)}checkLicense(e){this.frontendConnection?this.frontendConnection.sendLicenseCheck(e):vo({message:"Internal error: no connection",product:e})}log(e,t,n,i){const r=this.nextMessageId;for(this.nextMessageId+=1,this.messages.push({id:r,type:e,message:t,details:n,link:i,dontShowAgain:!1,deleted:!1});this.messages.length>w.MAX_LOG_ROWS;)this.messages.shift();this.requestUpdate(),this.updateComplete.then(()=>{const s=this.renderRoot.querySelector(".message-tray .message:last-child");this.expanded&&s?(setTimeout(()=>s.scrollIntoView({behavior:"smooth"}),this.transitionDuration),this.unreadErrors=!1):e==="error"&&(this.unreadErrors=!0)})}showNotification(e,t,n,i,r){if(r===void 0||!w.notificationDismissed(r)){if(this.notifications.filter(l=>l.persistentId===r).filter(l=>!l.deleted).length>0)return;const s=this.nextMessageId;this.nextMessageId+=1,this.notifications.push({id:s,type:e,message:t,details:n,link:i,persistentId:r,dontShowAgain:!1,deleted:!1}),i===void 0&&setTimeout(()=>{this.dismissNotification(s)},w.AUTO_DEMOTE_NOTIFICATION_DELAY),this.requestUpdate()}else this.log(e,t,n,i)}dismissNotification(e){const t=this.findNotificationIndex(e);if(t!==-1&&!this.notifications[t].deleted){const n=this.notifications[t];if(n.dontShowAgain&&n.persistentId&&!w.notificationDismissed(n.persistentId)){let i=window.localStorage.getItem(w.DISMISSED_NOTIFICATIONS_IN_LOCAL_STORAGE);i=i===null?n.persistentId:`${i},${n.persistentId}`,window.localStorage.setItem(w.DISMISSED_NOTIFICATIONS_IN_LOCAL_STORAGE,i)}n.deleted=!0,this.log(n.type,n.message,n.details,n.link),setTimeout(()=>{const i=this.findNotificationIndex(e);i!==-1&&(this.notifications.splice(i,1),this.requestUpdate())},this.transitionDuration)}}findNotificationIndex(e){let t=-1;return this.notifications.some((n,i)=>n.id===e?(t=i,!0):!1),t}toggleDontShowAgain(e){const t=this.findNotificationIndex(e);if(t!==-1&&!this.notifications[t].deleted){const n=this.notifications[t];n.dontShowAgain=!n.dontShowAgain,this.requestUpdate()}}setActive(e){var t,n;(t=this.frontendConnection)==null||t.setActive(e),(n=this.javaConnection)==null||n.setActive(e),window.sessionStorage.setItem(w.ACTIVE_KEY_IN_SESSION_STORAGE,e?"true":"false")}getStatusColor(e){return e===S.ACTIVE?"var(--dev-tools-green-color)":e===S.INACTIVE?"var(--dev-tools-grey-color)":e===S.UNAVAILABLE?"var(--dev-tools-yellow-hsl)":e===S.ERROR?"var(--dev-tools-red-color)":"none"}renderMessage(e){return p`
      <div
        class="message ${e.type} ${e.deleted?"animate-out":""} ${e.details||e.link?"has-details":""}"
      >
        <div class="message-content">
          <div class="message-heading">${e.message}</div>
          <div class="message-details" ?hidden="${!e.details&&!e.link}">
            ${e.details?p`<p>${e.details}</p>`:""}
            ${e.link?p`<a class="ahreflike" href="${e.link}" target="_blank">Learn more</a>`:""}
          </div>
          ${e.persistentId?p`<div
                class="persist ${e.dontShowAgain?"on":"off"}"
                @click=${()=>this.toggleDontShowAgain(e.id)}
              >
                Don’t show again
              </div>`:""}
        </div>
        <div class="dismiss-message" @click=${()=>this.dismissNotification(e.id)}>Dismiss</div>
      </div>
    `}render(){return p` <div
        class="window ${this.expanded&&!this.componentPickActive?"visible":"hidden"}"
        tabindex="0"
        @keydown=${e=>e.key==="Escape"&&this.expanded&&this.toggleExpanded()}
      >
        <div class="window-toolbar">
          ${this.tabs.map(e=>p`<button
                class=${Gt({tab:!0,active:this.activeTab===e.id,unreadErrors:e.id==="log"&&this.unreadErrors})}
                id="${e.id}"
                @click=${()=>{this.activeTab=e.id,e.activate&&e.activate.call(this)}}
              >
                ${e.title}
              </button> `)}
          <button class="minimize-button" title="Minimize" @click=${()=>this.toggleExpanded()}>
            <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
              <g fill="#fff" opacity=".8">
                <path
                  d="m7.25 1.75c0-.41421.33579-.75.75-.75h3.25c2.0711 0 3.75 1.67893 3.75 3.75v6.5c0 2.0711-1.6789 3.75-3.75 3.75h-6.5c-2.07107 0-3.75-1.6789-3.75-3.75v-3.25c0-.41421.33579-.75.75-.75s.75.33579.75.75v3.25c0 1.2426 1.00736 2.25 2.25 2.25h6.5c1.2426 0 2.25-1.0074 2.25-2.25v-6.5c0-1.24264-1.0074-2.25-2.25-2.25h-3.25c-.41421 0-.75-.33579-.75-.75z"
                />
                <path
                  d="m2.96967 2.96967c.29289-.29289.76777-.29289 1.06066 0l5.46967 5.46967v-2.68934c0-.41421.33579-.75.75-.75.4142 0 .75.33579.75.75v4.5c0 .4142-.3358.75-.75.75h-4.5c-.41421 0-.75-.3358-.75-.75 0-.41421.33579-.75.75-.75h2.68934l-5.46967-5.46967c-.29289-.29289-.29289-.76777 0-1.06066z"
                />
              </g>
            </svg>
          </button>
        </div>
        ${this.tabs.map(e=>this.activeTab===e.id?e.render():lt)}
      </div>

      <div class="notification-tray">${this.notifications.map(e=>this.renderMessage(e))}</div>
      <vaadin-dev-tools-component-picker
        .active=${this.componentPickActive}
        @component-picker-opened=${()=>{this.componentPickActive=!0}}
        @component-picker-closed=${()=>{this.componentPickActive=!1}}
      ></vaadin-dev-tools-component-picker>
      <div
        class="dev-tools ${this.splashMessage?"active":""}${this.unreadErrors?" error":""}"
        @click=${()=>this.toggleExpanded()}
      >
        ${this.unreadErrors?p`<svg
              fill="none"
              height="16"
              viewBox="0 0 16 16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              class="dev-tools-icon error"
            >
              <clipPath id="a"><path d="m0 0h16v16h-16z" /></clipPath>
              <g clip-path="url(#a)">
                <path
                  d="m6.25685 2.09894c.76461-1.359306 2.72169-1.359308 3.4863 0l5.58035 9.92056c.7499 1.3332-.2135 2.9805-1.7432 2.9805h-11.1606c-1.529658 0-2.4930857-1.6473-1.743156-2.9805z"
                  fill="#ff5c69"
                />
                <path
                  d="m7.99699 4c-.45693 0-.82368.37726-.81077.834l.09533 3.37352c.01094.38726.32803.69551.71544.69551.38741 0 .70449-.30825.71544-.69551l.09533-3.37352c.0129-.45674-.35384-.834-.81077-.834zm.00301 8c.60843 0 1-.3879 1-.979 0-.5972-.39157-.9851-1-.9851s-1 .3879-1 .9851c0 .5911.39157.979 1 .979z"
                  fill="#fff"
                />
              </g>
            </svg>`:p`<svg
              fill="none"
              height="17"
              viewBox="0 0 16 17"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
              class="dev-tools-icon logo"
            >
              <g fill="#fff">
                <path
                  d="m8.88273 5.97926c0 .04401-.0032.08898-.00801.12913-.02467.42848-.37813.76767-.8117.76767-.43358 0-.78704-.34112-.81171-.76928-.00481-.04015-.00801-.08351-.00801-.12752 0-.42784-.10255-.87656-1.14434-.87656h-3.48364c-1.57118 0-2.315271-.72849-2.315271-2.21758v-1.26683c0-.42431.324618-.768314.748261-.768314.42331 0 .74441.344004.74441.768314v.42784c0 .47924.39576.81265 1.11293.81265h3.41538c1.5542 0 1.67373 1.156 1.725 1.7679h.03429c.05095-.6119.17048-1.7679 1.72468-1.7679h3.4154c.7172 0 1.0145-.32924 1.0145-.80847l-.0067-.43202c0-.42431.3227-.768314.7463-.768314.4234 0 .7255.344004.7255.768314v1.26683c0 1.48909-.6181 2.21758-2.1893 2.21758h-3.4836c-1.04182 0-1.14437.44872-1.14437.87656z"
                />
                <path
                  d="m8.82577 15.1648c-.14311.3144-.4588.5335-.82635.5335-.37268 0-.69252-.2249-.83244-.5466-.00206-.0037-.00412-.0073-.00617-.0108-.00275-.0047-.00549-.0094-.00824-.0145l-3.16998-5.87318c-.08773-.15366-.13383-.32816-.13383-.50395 0-.56168.45592-1.01879 1.01621-1.01879.45048 0 .75656.22069.96595.6993l2.16882 4.05042 2.17166-4.05524c.2069-.47379.513-.69448.9634-.69448.5603 0 1.0166.45711 1.0166 1.01879 0 .17579-.0465.35029-.1348.50523l-3.1697 5.8725c-.00503.0096-.01006.0184-.01509.0272-.00201.0036-.00402.0071-.00604.0106z"
                />
              </g>
            </svg>`}

        <span
          class="status-blip"
          style="background: linear-gradient(to right, ${this.getStatusColor(this.frontendStatus)} 50%, ${this.getStatusColor(this.javaStatus)} 50%)"
        ></span>
        ${this.splashMessage?p`<span class="status-description">${this.splashMessage}</span></div>`:lt}
      </div>`}renderLog(){return p`<div class="message-tray">${this.messages.map(e=>this.renderMessage(e))}</div>`}activateLog(){this.unreadErrors=!1,this.updateComplete.then(()=>{const e=this.renderRoot.querySelector(".message-tray .message:last-child");e&&e.scrollIntoView()})}renderCode(){return p`<div class="info-tray">
      <div>
        <select id="locationType">
          <option value="create" selected>Create</option>
          <option value="attach">Attach</option>
        </select>
        <button
          class="button pick"
          @click=${async()=>{await y(()=>Promise.resolve().then(()=>ji),void 0),this.componentPicker.open({infoTemplate:p`
                <div>
                  <h3>Locate a component in source code</h3>
                  <p>Use the mouse cursor to highlight components in the UI.</p>
                  <p>Use arrow down/up to cycle through and highlight specific components under the cursor.</p>
                  <p>
                    Click the primary mouse button to open the corresponding source code line of the highlighted
                    component in your IDE.
                  </p>
                </div>
              `,pickCallback:e=>{const t={nodeId:e.nodeId,uiId:e.uiId};this.renderRoot.querySelector("#locationType").value==="create"?this.frontendConnection.sendShowComponentCreateLocation(t):this.frontendConnection.sendShowComponentAttachLocation(t)}})}}
        >
          Find component in code
        </button>
      </div>
      </div>
    </div>`}renderInfo(){return p`<div class="info-tray">
      <button class="button copy" @click=${this.copyInfoToClipboard}>Copy</button>
      <dl>
        <dt>${this.serverInfo.productName}</dt>
        <dd>${this.serverInfo.vaadinVersion}</dd>
        <dt>Flow</dt>
        <dd>${this.serverInfo.flowVersion}</dd>
        <dt>Java</dt>
        <dd>${this.serverInfo.javaVersion}</dd>
        <dt>OS</dt>
        <dd>${this.serverInfo.osVersion}</dd>
        <dt>Browser</dt>
        <dd>${navigator.userAgent}</dd>
        <dt>
          Live reload
          <label class="switch">
            <input
              id="toggle"
              type="checkbox"
              ?disabled=${this.liveReloadDisabled||(this.frontendStatus===S.UNAVAILABLE||this.frontendStatus===S.ERROR)&&(this.javaStatus===S.UNAVAILABLE||this.javaStatus===S.ERROR)}
              ?checked="${this.frontendStatus===S.ACTIVE||this.javaStatus===S.ACTIVE}"
              @change=${e=>this.setActive(e.target.checked)}
            />
            <span class="slider"></span>
          </label>
        </dt>
        <dd class="live-reload-status" style="--status-color: ${this.getStatusColor(this.javaStatus)}">
          Java ${this.javaStatus} ${this.backend?`(${w.BACKEND_DISPLAY_NAME[this.backend]})`:""}
        </dd>
        <dd class="live-reload-status" style="--status-color: ${this.getStatusColor(this.frontendStatus)}">
          Front end ${this.frontendStatus}
        </dd>
      </dl>
    </div>`}renderFeatures(){return p`<div class="features-tray">
      ${this.features.map(e=>p`<div class="feature">
          <label class="switch">
            <input
              class="feature-toggle"
              id="feature-toggle-${e.id}"
              type="checkbox"
              ?checked=${e.enabled}
              @change=${t=>this.toggleFeatureFlag(t,e)}
            />
            <span class="slider"></span>
            ${e.title}
          </label>
          <a class="ahreflike" href="${e.moreInfoLink}" target="_blank">Learn more</a>
        </div>`)}
    </div>`}renderThemeEditor(){return p` <vaadin-dev-tools-theme-editor
      .expanded=${this.expanded}
      .themeEditorState=${this.themeEditorState}
      .pickerProvider=${()=>this.componentPicker}
      .connection=${this.frontendConnection}
    ></vaadin-dev-tools-theme-editor>`}copyInfoToClipboard(){const e=this.renderRoot.querySelectorAll(".info-tray dt, .info-tray dd"),t=Array.from(e).map(n=>(n.localName==="dd"?": ":`
`)+n.textContent.trim()).join("").replace(/^\n/,"");Hi(t),this.showNotification("information","Environment information copied to clipboard",void 0,void 0,"versionInfoCopied")}toggleFeatureFlag(e,t){const n=e.target.checked;this.frontendConnection?(this.frontendConnection.setFeature(t.id,n),this.showNotification("information",`“${t.title}” ${n?"enabled":"disabled"}`,t.requiresServerRestart?"This feature requires a server restart":void 0,void 0,`feature${t.id}${n?"Enabled":"Disabled"}`)):this.log("error",`Unable to toggle feature ${t.title}: No server connection available`)}};v.MAX_LOG_ROWS=1e3;v.DISMISSED_NOTIFICATIONS_IN_LOCAL_STORAGE="vaadin.live-reload.dismissedNotifications";v.ACTIVE_KEY_IN_SESSION_STORAGE="vaadin.live-reload.active";v.TRIGGERED_KEY_IN_SESSION_STORAGE="vaadin.live-reload.triggered";v.TRIGGERED_COUNT_KEY_IN_SESSION_STORAGE="vaadin.live-reload.triggeredCount";v.AUTO_DEMOTE_NOTIFICATION_DELAY=5e3;v.HOTSWAP_AGENT="HOTSWAP_AGENT";v.JREBEL="JREBEL";v.SPRING_BOOT_DEVTOOLS="SPRING_BOOT_DEVTOOLS";v.BACKEND_DISPLAY_NAME={HOTSWAP_AGENT:"HotswapAgent",JREBEL:"JRebel",SPRING_BOOT_DEVTOOLS:"Spring Boot Devtools"};E([g({type:String})],v.prototype,"url",2);E([g({type:Boolean,attribute:!0})],v.prototype,"liveReloadDisabled",2);E([g({type:String})],v.prototype,"backend",2);E([g({type:Number})],v.prototype,"springBootLiveReloadPort",2);E([g({type:Boolean,attribute:!1})],v.prototype,"expanded",2);E([g({type:Array,attribute:!1})],v.prototype,"messages",2);E([g({type:String,attribute:!1})],v.prototype,"splashMessage",2);E([g({type:Array,attribute:!1})],v.prototype,"notifications",2);E([g({type:String,attribute:!1})],v.prototype,"frontendStatus",2);E([g({type:String,attribute:!1})],v.prototype,"javaStatus",2);E([x()],v.prototype,"tabs",2);E([x()],v.prototype,"activeTab",2);E([x()],v.prototype,"serverInfo",2);E([x()],v.prototype,"features",2);E([x()],v.prototype,"unreadErrors",2);E([ue(".window")],v.prototype,"root",2);E([ue("vaadin-dev-tools-component-picker")],v.prototype,"componentPicker",2);E([x()],v.prototype,"componentPickActive",2);E([x()],v.prototype,"themeEditorState",2);let Xi=v;customElements.get("vaadin-dev-tools")===void 0&&customElements.define("vaadin-dev-tools",Xi);Co(document);export{ne as F,L as T,K as U,In as b,$n as f,k as y};
