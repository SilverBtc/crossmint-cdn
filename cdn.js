(()=>{var ft=Object.defineProperty,Jt=Object.defineProperties,Kt=Object.getOwnPropertyDescriptor,Gt=Object.getOwnPropertyDescriptors;var gt=Object.getOwnPropertySymbols;var Zt=Object.prototype.hasOwnProperty,Qt=Object.prototype.propertyIsEnumerable;var vt=(n,t,e)=>t in n?ft(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,$t=(n,t)=>{for(var e in t||(t={}))Zt.call(t,e)&&vt(n,e,t[e]);if(gt)for(var e of gt(t))Qt.call(t,e)&&vt(n,e,t[e]);return n},yt=(n,t)=>Jt(n,Gt(t));var d=(n,t,e,i)=>{for(var s=i>1?void 0:i?Kt(t,e):t,o=n.length-1,r;o>=0;o--)(r=n[o])&&(s=(i?r(t,e,s):r(s))||s);return i&&s&&ft(t,e,s),s};var q=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,tt=Symbol(),_t=new Map,F=class{constructor(t,e){if(this._$cssResult$=!0,e!==tt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=_t.get(this.cssText);return q&&t===void 0&&(_t.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}},At=n=>new F(typeof n=="string"?n:n+"",tt),et=(n,...t)=>{let e=n.length===1?n[0]:t.reduce((i,s,o)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[o+1],n[0]);return new F(e,tt)},it=(n,t)=>{q?n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{let i=document.createElement("style"),s=window.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,n.appendChild(i)})},J=q?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return At(e)})(n):n;var nt,bt=window.trustedTypes,te=bt?bt.emptyScript:"",St=window.reactiveElementPolyfillSupport,ot={toAttribute(n,t){switch(t){case Boolean:n=n?te:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},Ct=(n,t)=>t!==n&&(t==t||n==n),st={attribute:!0,type:String,converter:ot,reflect:!1,hasChanged:Ct},w=class extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;(e=this.l)!==null&&e!==void 0||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,i)=>{let s=this._$Eh(i,e);s!==void 0&&(this._$Eu.set(s,i),t.push(s))}),t}static createProperty(t,e=st){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){let o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||st}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){let e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let s of i)e.unshift(J(s))}else t!==void 0&&e.push(J(t));return e}static _$Eh(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Em(),this.requestUpdate(),(t=this.constructor.l)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$Eg)!==null&&e!==void 0?e:this._$Eg=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$Eg)===null||e===void 0||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return it(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=st){var s,o;let r=this.constructor._$Eh(t,i);if(r!==void 0&&i.reflect===!0){let h=((o=(s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==null&&o!==void 0?o:ot.toAttribute)(e,i.type);this._$Ei=t,h==null?this.removeAttribute(r):this.setAttribute(r,h),this._$Ei=null}}_$AK(t,e){var i,s,o;let r=this.constructor,h=r._$Eu.get(t);if(h!==void 0&&this._$Ei!==h){let l=r.getPropertyOptions(h),a=l.converter,g=(o=(s=(i=a)===null||i===void 0?void 0:i.fromAttribute)!==null&&s!==void 0?s:typeof a=="function"?a:null)!==null&&o!==void 0?o:ot.fromAttribute;this._$Ei=h,this[h]=g(e,l.type),this._$Ei=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Ct)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Ei!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((s,o)=>this[o]=s),this._$Et=void 0);let e=!1,i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$Eg)===null||t===void 0||t.forEach(s=>{var o;return(o=s.hostUpdate)===null||o===void 0?void 0:o.call(s)}),this.update(i)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$Eg)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$ES(i,this[i],e)),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}};w.finalized=!0,w.elementProperties=new Map,w.elementStyles=[],w.shadowRootOptions={mode:"open"},St==null||St({ReactiveElement:w}),((nt=globalThis.reactiveElementVersions)!==null&&nt!==void 0?nt:globalThis.reactiveElementVersions=[]).push("1.3.1");var rt,O=globalThis.trustedTypes,wt=O?O.createPolicy("lit-html",{createHTML:n=>n}):void 0,E=`lit$${(Math.random()+"").slice(9)}$`,Ut="?"+E,ee=`<${Ut}>`,N=document,L=(n="")=>N.createComment(n),D=n=>n===null||typeof n!="object"&&typeof n!="function",kt=Array.isArray,ie=n=>{var t;return kt(n)||typeof((t=n)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Et=/-->/g,It=/>/g,I=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Tt=/'/g,xt=/"/g,Pt=/^(?:script|style|textarea|title)$/i,Rt=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),X=Rt(1),Ae=Rt(2),S=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),Ot=new WeakMap,Mt=(n,t,e)=>{var i,s;let o=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t,r=o._$litPart$;if(r===void 0){let h=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:null;o._$litPart$=r=new P(t.insertBefore(L(),h),h,void 0,e!=null?e:{})}return r._$AI(n),r},x=N.createTreeWalker(N,129,null,!1),ne=(n,t)=>{let e=n.length-1,i=[],s,o=t===2?"<svg>":"",r=H;for(let l=0;l<e;l++){let a=n[l],g,c,p=-1,v=0;for(;v<a.length&&(r.lastIndex=v,c=r.exec(a),c!==null);)v=r.lastIndex,r===H?c[1]==="!--"?r=Et:c[1]!==void 0?r=It:c[2]!==void 0?(Pt.test(c[2])&&(s=RegExp("</"+c[2],"g")),r=I):c[3]!==void 0&&(r=I):r===I?c[0]===">"?(r=s!=null?s:H,p=-1):c[1]===void 0?p=-2:(p=r.lastIndex-c[2].length,g=c[1],r=c[3]===void 0?I:c[3]==='"'?xt:Tt):r===xt||r===Tt?r=I:r===Et||r===It?r=H:(r=I,s=void 0);let A=r===I&&n[l+1].startsWith("/>")?" ":"";o+=r===H?a+ee:p>=0?(i.push(g),a.slice(0,p)+"$lit$"+a.slice(p)+E+A):a+E+(p===-2?(i.push(void 0),l):A)}let h=o+(n[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[wt!==void 0?wt.createHTML(h):h,i]},U=class{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0,h=t.length-1,l=this.parts,[a,g]=ne(t,e);if(this.el=U.createElement(a,i),x.currentNode=this.el.content,e===2){let c=this.el.content,p=c.firstChild;p.remove(),c.append(...p.childNodes)}for(;(s=x.nextNode())!==null&&l.length<h;){if(s.nodeType===1){if(s.hasAttributes()){let c=[];for(let p of s.getAttributeNames())if(p.endsWith("$lit$")||p.startsWith(E)){let v=g[r++];if(c.push(p),v!==void 0){let A=s.getAttribute(v.toLowerCase()+"$lit$").split(E),b=/([.?@])?(.*)/.exec(v);l.push({type:1,index:o,name:b[2],strings:A,ctor:b[1]==="."?Lt:b[1]==="?"?Dt:b[1]==="@"?Xt:V})}else l.push({type:6,index:o})}for(let p of c)s.removeAttribute(p)}if(Pt.test(s.tagName)){let c=s.textContent.split(E),p=c.length-1;if(p>0){s.textContent=O?O.emptyScript:"";for(let v=0;v<p;v++)s.append(c[v],L()),x.nextNode(),l.push({type:2,index:++o});s.append(c[p],L())}}}else if(s.nodeType===8)if(s.data===Ut)l.push({type:2,index:o});else{let c=-1;for(;(c=s.data.indexOf(E,c+1))!==-1;)l.push({type:7,index:o}),c+=E.length-1}o++}}static createElement(t,e){let i=N.createElement("template");return i.innerHTML=t,i}};function k(n,t,e=n,i){var s,o,r,h;if(t===S)return t;let l=i!==void 0?(s=e._$Cl)===null||s===void 0?void 0:s[i]:e._$Cu,a=D(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l,!1),a===void 0?l=void 0:(l=new a(n),l._$AT(n,e,i)),i!==void 0?((r=(h=e)._$Cl)!==null&&r!==void 0?r:h._$Cl=[])[i]=l:e._$Cu=l),l!==void 0&&(t=k(n,l._$AS(n,t.values),l,i)),t}var Ht=class{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;let{el:{content:i},parts:s}=this._$AD,o=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:N).importNode(i,!0);x.currentNode=o;let r=x.nextNode(),h=0,l=0,a=s[0];for(;a!==void 0;){if(h===a.index){let g;a.type===2?g=new P(r,r.nextSibling,this,t):a.type===1?g=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(g=new Vt(r,this,t)),this.v.push(g),a=s[++l]}h!==(a==null?void 0:a.index)&&(r=x.nextNode(),h++)}return o}m(t){let e=0;for(let i of this.v)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},P=class{constructor(t,e,i,s){var o;this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cg=(o=s==null?void 0:s.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=k(this,t,e),D(t)?t===f||t==null||t===""?(this._$AH!==f&&this._$AR(),this._$AH=f):t!==this._$AH&&t!==S&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):ie(t)?this.S(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==f&&D(this._$AH)?this._$AA.nextSibling.data=t:this.k(N.createTextNode(t)),this._$AH=t}T(t){var e;let{values:i,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=U.createElement(s.h,this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.m(i);else{let r=new Ht(o,this),h=r.p(this.options);r.m(i),this.k(h),this._$AH=r}}_$AC(t){let e=Ot.get(t.strings);return e===void 0&&Ot.set(t.strings,e=new U(t)),e}S(t){kt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,s=0;for(let o of t)s===e.length?e.push(i=new P(this.A(L()),this.A(L()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){let s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},V=class{constructor(t,e,i,s,o){this.type=1,this._$AH=f,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=f}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){let o=this.strings,r=!1;if(o===void 0)t=k(this,t,e,0),r=!D(t)||t!==this._$AH&&t!==S,r&&(this._$AH=t);else{let h=t,l,a;for(t=o[0],l=0;l<o.length-1;l++)a=k(this,h[i+l],e,l),a===S&&(a=this._$AH[l]),r||(r=!D(a)||a!==this._$AH[l]),a===f?t=f:t!==f&&(t+=(a!=null?a:"")+o[l+1]),this._$AH[l]=a}r&&!s&&this.C(t)}C(t){t===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}},Lt=class extends V{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===f?void 0:t}},se=O?O.emptyScript:"",Dt=class extends V{constructor(){super(...arguments),this.type=4}C(t){t&&t!==f?this.element.setAttribute(this.name,se):this.element.removeAttribute(this.name)}},Xt=class extends V{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=(i=k(this,t,e,0))!==null&&i!==void 0?i:f)===S)return;let s=this._$AH,o=t===f&&s!==f||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==f&&(s===f||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},Vt=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){k(this,t)}};var Nt=window.litHtmlPolyfillSupport;Nt==null||Nt(U,P),((rt=globalThis.litHtmlVersions)!==null&&rt!==void 0?rt:globalThis.litHtmlVersions=[]).push("2.2.1");var lt,at;var C=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;let i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=Mt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return S}};C.finalized=!0,C._$litElement$=!0,(lt=globalThis.litElementHydrateSupport)===null||lt===void 0||lt.call(globalThis,{LitElement:C});var Bt=globalThis.litElementPolyfillSupport;Bt==null||Bt({LitElement:C});((at=globalThis.litElementVersions)!==null&&at!==void 0?at:globalThis.litElementVersions=[]).push("3.2.0");var jt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},zt=n=>(...t)=>({_$litDirective$:n,values:t}),ct=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var K=zt(class extends ct{constructor(n){var t;if(super(n),n.type!==jt.ATTRIBUTE||n.name!=="class"||((t=n.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(n){return" "+Object.keys(n).filter(t=>n[t]).join(" ")+" "}update(n,[t]){var e,i;if(this.et===void 0){this.et=new Set,n.strings!==void 0&&(this.st=new Set(n.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(let o in t)t[o]&&!(!((e=this.st)===null||e===void 0)&&e.has(o))&&this.et.add(o);return this.render(t)}let s=n.element.classList;this.et.forEach(o=>{o in t||(s.remove(o),this.et.delete(o))});for(let o in t){let r=!!t[o];r===this.et.has(o)||((i=this.st)===null||i===void 0?void 0:i.has(o))||(r?(s.add(o),this.et.add(o)):(s.remove(o),this.et.delete(o)))}return S}});var oe=(n,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?yt($t({},t),{finisher(e){e.createProperty(t.key,n)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,n)}};function u(n){return(t,e)=>e!==void 0?((i,s,o)=>{s.constructor.createProperty(o,i)})(n,t,e):oe(n,t)}var G=n=>t=>typeof t=="function"?((e,i)=>(window.customElements.define(e,i),i))(n,t):((e,i)=>{let{kind:s,elements:o}=i;return{kind:s,elements:o,finisher(r){window.customElements.define(e,r)}}})(n,t);var T=(n=>(n.reactUi="client-sdk-react-ui",n.vanillaUi="client-sdk-vanilla-ui",n))(T||{}),re=(n=>(n.prod="https://www.crossmint.io",n.staging="https://staging.crossmint.io/",n.dev="http://localhost:3001",n))(re||{}),le=(n=>(n.clientVersion="X-Client-Version",n.clientName="X-Client-Name",n))(le||{}),ae=n=>n==="ETH",Z=(n=>(n.CANDY_MACHINE="candy-machine",n.SOLANA_AUCTION="solana-auction",n.ERC_721="erc-721",n))(Z||{}),B=(n=>(n.WAITING_SUBMISSION="waiting-submission",n.PENDING="pending",n.REJECTED="rejected",n.ACCEPTED="accepted",n.INVALID="invalid",n))(B||{}),ht=(n="")=>n==="staging"?"https://staging.crossmint.io/":["prod","production"].includes(n)||!n?"https://www.crossmint.io":n,Wt="__crossmint-overlay__",ce=()=>{let n=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);return n?parseInt(n[2]):null};function he(){let n=window.innerWidth/2-200,t=window.innerHeight/2-375,e=ce();return`${e&&e>99?"popup=true,":""}height=750,width=400,left=${n},top=${t},resizable=yes,scrollbars=yes,toolbar=yes,menubar=true,location=no,directories=no, status=yes`}var de=()=>{let n=document.createElement("div");n.setAttribute("id",Wt);let t={width:"100vw",height:"100vh","background-color":"rgba(0, 0, 0, 0.5)",position:"fixed","z-index":"99999999",top:"0",left:"0"};Object.assign(n.style,t),document.body.appendChild(n)},pe=()=>{let n=document.getElementById(Wt);n&&n.remove()};function Yt({clientId:n,libVersion:t,showOverlay:e,setConnecting:i,environment:s,clientName:o}){let r=(a,g,c,p,v,A,b,z,W,Y)=>{let pt=ht(s),Ft=encodeURIComponent(`${pt}/checkout/mint?${(()=>{let _={clientId:n,closeOnSuccess:"false",clientName:o,clientVersion:t,mintConfig:JSON.stringify(a)};return g&&(_.collectionTitle=g),c&&(_.collectionDescription=c),p&&(_.collectionPhoto=p),v&&(_.mintTo=v),A&&(_.emailTo=A),b&&(_.listingId=b),z&&(_.whPassThroughArgs=JSON.stringify(z)),W&&(_.paymentMethod=W),Y&&(_.preferredSigninMethod=Y),new URLSearchParams(_).toString()})()}`),ut=`${pt}/signin?callbackUrl=${Ft}`,mt=window.open(ut,"popUpWindow",he());if(mt){l(mt),e&&de();return}i(!1),window.open(ut,"_blank")||console.error("Failed to open popup window and new tab")},h=(a,g,c,p,v,A,b,z,W,Y)=>{i(!0),r(a,g,c,p,v,A,b,z,W,Y)};function l(a){let g=setInterval(function(){a.closed&&(clearInterval(g),i(!1),e&&pe())},500)}return{connect:h}}function dt({onClick:n,connecting:t,paymentMethod:e}){return{checkProps:({collectionTitle:i,collectionDescription:s,collectionPhoto:o})=>{let r=i,h=s,l=o;return i==="<TITLE_FOR_YOUR_COLLECTION>"&&(console.warn("No collection title specified. Please add a collection title to your <CrossmintPayButton />"),r=""),s==="<DESCRIPTION_OF_YOUR_COLLECTION>"&&(console.warn("No collection description specified. Please add a collection description to your <CrossmintPayButton />"),h=""),o==="<OPT_URL_TO_PHOTO_COVER>"&&(console.warn("No collection photo specified. Please add a collection photo to your <CrossmintPayButton />"),l=""),[r,h,l]},getButtonText:i=>i?"Connecting...":ae(e)?"Buy with ETH":"Buy with credit card",shouldHideButton:({hideMintOnInactiveClient:i,status:s})=>i&&s!=="accepted",handleClick:(i,s)=>{n&&n(i),!t&&(i.defaultPrevented||s())}}}var ue=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function me(n){return typeof n=="string"&&ue.test(n)}var ge=n=>{try{return me(n)}catch(t){return console.error(t),!1}};function j({libVersion:n,clientId:t,platformId:e,auctionId:i,mintConfig:s,setStatus:o,environment:r,clientName:h}){async function l(){if(!t||t===""||t==="<YOUR_CLIENT_ID>"){console.error("You must enter your own Crossmint client ID in <CrossmintPayButton clientId=XXX>");return}if(!ge(t)){console.error("The clientId passed to is invalid. Make sure to pass the clientId obtained from the crossmint team, with format XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXX");return}let c=ht(r),p=await fetch(`${c}/api/crossmint/onboardingRequests/${t}/status`,{headers:{["X-Client-Version"]:n,["X-Client-Name"]:h}});if(p.status===200){let v=await p.json();o(v.status)}else o("invalid")}let a=()=>{let c=ht(r);window.open(`${c}/developers/onboarding?${g()}`,"_blank")},g=()=>{let c={clientId:t};return e&&(c.platformId=e),i&&(c.auctionId=i),s&&(c.mintConfig=JSON.stringify(s)),new URLSearchParams(c).toString()};return{fetchClientIntegration:l,goToOnboarding:a}}function qt({onClick:n}){return{getButtonText:t=>{switch(t){case"invalid":return"Invalid clientId";case"waiting-submission":return"Click here to setup Crossmint";case"pending":return"Your application is under review";case"accepted":return"You're good to go!";case"rejected":return"Your application was rejected"}},isButtonDisabled:t=>t!=="waiting-submission",handleClick:(t,e,i)=>{n&&n(t),e==="waiting-submission"&&i()}}}var R="0.0.3-alpha.0";var Q=et`
    button {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0.875rem 0.875rem;
        font-weight: 900;
        transition: opacity ease-in-out 0.25s;
        border-radius: 0.5rem;
        font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans,
            Helvetica Neue, sans-serif;
        outline: none;
        border: none;
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
        justify-content: center;
        background: #1e1e1e;
        color: white;
    }
    button.light {
        background: white;
    }

    button:hover:enabled {
        opacity: 0.6;
        cursor: pointer;
    }

    img {
        width: 21px;
        height: 21px;
        margin-right: 0.875rem;
    }

    p {
        color: white;
        margin: 0;
    }

    button.light p {
        color: black;
    }
`;var $={className:"",theme:"dark",disabled:!1,tabIndex:0,collectionTitle:"",collectionDescription:"",collectionPhoto:"",mintTo:"",emailTo:"",listingId:"",clientId:"",auctionId:"",environment:"",hideMintOnInactiveClient:!1,showOverlay:!0,mintConfig:{type:Z.CANDY_MACHINE},onClick:void 0,whPassThroughArgs:void 0,paymentMethod:void 0,preferredSigninMethod:void 0},m=class extends C{constructor(){super(...arguments);this.theme=$.theme;this.disabled=$.disabled;this.collectionTitle=$.collectionTitle;this.collectionDescription=$.collectionDescription;this.collectionPhoto=$.collectionPhoto;this.mintTo=$.mintTo;this.emailTo=$.emailTo;this.listingId=$.listingId;this.clientId=$.clientId;this.auctionId=$.auctionId;this.environment=$.environment;this.hideMintOnInactiveClient=$.hideMintOnInactiveClient;this.showOverlay=$.showOverlay;this.mintConfig={type:Z.CANDY_MACHINE};this.onClick=$.onClick;this.whPassThroughArgs=$.whPassThroughArgs;this.paymentMethod=$.paymentMethod;this.preferredSigninMethod=$.preferredSigninMethod;this.connecting=!1;this.setConnecting=t=>{this.connecting=t};this.status=B.WAITING_SUBMISSION;this.setStatus=t=>{this.status=t};this.classes={light:!1};this.statusService=null;this.modalService=null}connectedCallback(){super.connectedCallback();let{fetchClientIntegration:t}=j({libVersion:R,clientId:this.clientId,environment:this.environment,auctionId:this.auctionId,mintConfig:this.mintConfig,setStatus:this.setStatus,clientName:T.vanillaUi});this.hideMintOnInactiveClient&&t();let{checkProps:e}=dt({onClick:this.onClick,connecting:this.connecting}),[i,s,o]=e({collectionTitle:this.collectionTitle,collectionPhoto:this.collectionPhoto,collectionDescription:this.collectionDescription});this.collectionTitle=i,this.collectionDescription=s,this.collectionPhoto=o}render(){let{shouldHideButton:t,handleClick:e,getButtonText:i}=dt({onClick:this.onClick,connecting:this.connecting,paymentMethod:this.paymentMethod});if(t({hideMintOnInactiveClient:this.hideMintOnInactiveClient,status:this.status}))return X``;let s=i(this.connecting),{connect:o}=Yt({environment:this.environment,clientId:this.clientId,showOverlay:this.showOverlay||!0,setConnecting:this.setConnecting,libVersion:R,clientName:T.vanillaUi}),r=h=>e(h,()=>{o(this.mintConfig,this.collectionTitle,this.collectionDescription,this.collectionPhoto,this.mintTo,this.emailTo,this.listingId,this.whPassThroughArgs,this.paymentMethod,this.preferredSigninMethod)});return this.classes.light=this.theme==="light",X`
            <button
                class=${K(this.classes)}
                .disabled=${this.disabled}
                @click=${r}
                tabindex=${this.tabIndex}
                part="button"
            >
                <img src="https://www.crossmint.io/assets/crossmint/logo.png" alt="Crossmint logo" />
                <span part="contentParagraph">boum ca mint</span>
            </button>
        `}};m.styles=Q,d([u({type:String})],m.prototype,"theme",2),d([u({type:Boolean})],m.prototype,"disabled",2),d([u({type:String})],m.prototype,"collectionTitle",2),d([u({type:String})],m.prototype,"collectionDescription",2),d([u({type:String})],m.prototype,"collectionPhoto",2),d([u({type:String})],m.prototype,"mintTo",2),d([u({type:String})],m.prototype,"emailTo",2),d([u({type:String})],m.prototype,"listingId",2),d([u({type:String})],m.prototype,"clientId",2),d([u({type:String})],m.prototype,"auctionId",2),d([u({type:String})],m.prototype,"environment",2),d([u({type:Boolean})],m.prototype,"hideMintOnInactiveClient",2),d([u({type:Boolean})],m.prototype,"showOverlay",2),d([u({type:Object})],m.prototype,"mintConfig",2),d([u({type:Function})],m.prototype,"onClick",2),d([u({type:Object})],m.prototype,"whPassThroughArgs",2),d([u({type:String})],m.prototype,"paymentMethod",2),d([u({type:String})],m.prototype,"preferredSigninMethod",2),m=d([G("crossmint-pay-button")],m);var M={className:"",theme:"dark",disabled:!1,tabIndex:0,clientId:"",auctionId:"",environment:"",platformId:"",mintConfig:{},onClick:void 0},y=class extends C{constructor(){super(...arguments);this.theme=M.theme;this.disabled=M.disabled;this.clientId=M.clientId;this.auctionId=M.auctionId;this.environment=M.environment;this.mintConfig={};this.onClick=M.onClick;this.status=B.WAITING_SUBMISSION;this.setStatus=t=>{this.status=t};this.classes={light:!1};this.interval=null}connectedCallback(){super.connectedCallback();let{fetchClientIntegration:t}=j({libVersion:R,clientId:this.clientId,environment:this.environment,auctionId:this.auctionId,mintConfig:this.mintConfig,setStatus:this.setStatus,clientName:T.vanillaUi});t(),this.interval=setInterval(()=>{t()},60*1e3)}disconnectedCallback(){clearInterval(this.interval)}render(){let{getButtonText:t,isButtonDisabled:e,handleClick:i}=qt({onClick:this.onClick}),{goToOnboarding:s}=j({libVersion:R,clientId:this.clientId,environment:this.environment,auctionId:this.auctionId,mintConfig:this.mintConfig,setStatus:this.setStatus,clientName:T.vanillaUi}),o=t(this.status),r=e(this.status)||this.disabled,h=l=>i(l,this.status,s);return this.classes.light=this.theme==="light",X`
            <button
                class=${K(this.classes)}
                .disabled=${r}
                @click=${h}
                tabindex=${this.tabIndex}
            >
                <img src="https://www.crossmint.io/assets/crossmint/logo.png" alt="Crossmint logo" />
                <span>${o}</span>
            </button>
        `}};y.styles=Q,d([u({type:String})],y.prototype,"theme",2),d([u({type:Boolean})],y.prototype,"disabled",2),d([u({type:String})],y.prototype,"clientId",2),d([u({type:String})],y.prototype,"auctionId",2),d([u({type:String})],y.prototype,"environment",2),d([u({type:Object})],y.prototype,"mintConfig",2),d([u({type:Function})],y.prototype,"onClick",2),y=d([G("crossmint-status-button")],y);})();
