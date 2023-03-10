const lt=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=e(o);fetch(o.href,n)}};lt();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=window,D=O.ShadowRoot&&(O.ShadyCSS===void 0||O.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,V=Symbol(),q=new WeakMap;class it{constructor(t,e,i){if(this._$cssResult$=!0,i!==V)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(D&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=q.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&q.set(e,t))}return t}toString(){return this.cssText}}const at=s=>new it(typeof s=="string"?s:s+"",void 0,V),ht=(s,...t)=>{const e=s.length===1?s[0]:t.reduce((i,o,n)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+s[n+1],s[0]);return new it(e,s,V)},ct=(s,t)=>{D?s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),o=O.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=e.cssText,s.appendChild(i)})},W=D?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return at(e)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var T;const R=window,J=R.trustedTypes,dt=J?J.emptyScript:"",K=R.reactiveElementPolyfillSupport,B={toAttribute(s,t){switch(t){case Boolean:s=s?dt:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},ot=(s,t)=>t!==s&&(t==t||s==s),M={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:ot};class g extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const o=this._$Ep(i,e);o!==void 0&&(this._$Ev.set(o,i),t.push(o))}),t}static createProperty(t,e=M){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){const n=this[t];this[e]=o,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||M}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const o of i)this.createProperty(o,e[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const o of i)e.unshift(W(o))}else t!==void 0&&e.push(W(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return ct(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=M){var o;const n=this.constructor._$Ep(t,i);if(n!==void 0&&i.reflect===!0){const r=(((o=i.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?i.converter:B).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,e){var i;const o=this.constructor,n=o._$Ev.get(t);if(n!==void 0&&this._$El!==n){const r=o.getPropertyOptions(n),c=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:B;this._$El=n,this[n]=c.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let o=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||ot)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,n)=>this[n]=o),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var n;return(n=o.hostUpdate)===null||n===void 0?void 0:n.call(o)}),this.update(i)):this._$Ek()}catch(o){throw e=!1,this._$Ek(),o}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var o;return(o=i.hostUpdated)===null||o===void 0?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}g.finalized=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},K==null||K({ReactiveElement:g}),((T=R.reactiveElementVersions)!==null&&T!==void 0?T:R.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var I;const H=window,_=H.trustedTypes,Z=_?_.createPolicy("lit-html",{createHTML:s=>s}):void 0,v=`lit$${(Math.random()+"").slice(9)}$`,st="?"+v,ut=`<${st}>`,y=document,S=(s="")=>y.createComment(s),x=s=>s===null||typeof s!="object"&&typeof s!="function",nt=Array.isArray,pt=s=>nt(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,F=/-->/g,G=/>/g,$=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Q=/'/g,X=/"/g,rt=/^(?:script|style|textarea|title)$/i,mt=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),w=mt(1),b=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),Y=new WeakMap,f=y.createTreeWalker(y,129,null,!1),vt=(s,t)=>{const e=s.length-1,i=[];let o,n=t===2?"<svg>":"",r=C;for(let l=0;l<e;l++){const a=s[l];let m,h,d=-1,p=0;for(;p<a.length&&(r.lastIndex=p,h=r.exec(a),h!==null);)p=r.lastIndex,r===C?h[1]==="!--"?r=F:h[1]!==void 0?r=G:h[2]!==void 0?(rt.test(h[2])&&(o=RegExp("</"+h[2],"g")),r=$):h[3]!==void 0&&(r=$):r===$?h[0]===">"?(r=o!=null?o:C,d=-1):h[1]===void 0?d=-2:(d=r.lastIndex-h[2].length,m=h[1],r=h[3]===void 0?$:h[3]==='"'?X:Q):r===X||r===Q?r=$:r===F||r===G?r=C:(r=$,o=void 0);const N=r===$&&s[l+1].startsWith("/>")?" ":"";n+=r===C?a+ut:d>=0?(i.push(m),a.slice(0,d)+"$lit$"+a.slice(d)+v+N):a+v+(d===-2?(i.push(void 0),l):N)}const c=n+(s[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Z!==void 0?Z.createHTML(c):c,i]};class E{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let n=0,r=0;const c=t.length-1,l=this.parts,[a,m]=vt(t,e);if(this.el=E.createElement(a,i),f.currentNode=this.el.content,e===2){const h=this.el.content,d=h.firstChild;d.remove(),h.append(...d.childNodes)}for(;(o=f.nextNode())!==null&&l.length<c;){if(o.nodeType===1){if(o.hasAttributes()){const h=[];for(const d of o.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith(v)){const p=m[r++];if(h.push(d),p!==void 0){const N=o.getAttribute(p.toLowerCase()+"$lit$").split(v),U=/([.?@])?(.*)/.exec(p);l.push({type:1,index:n,name:U[2],strings:N,ctor:U[1]==="."?gt:U[1]==="?"?_t:U[1]==="@"?yt:L})}else l.push({type:6,index:n})}for(const d of h)o.removeAttribute(d)}if(rt.test(o.tagName)){const h=o.textContent.split(v),d=h.length-1;if(d>0){o.textContent=_?_.emptyScript:"";for(let p=0;p<d;p++)o.append(h[p],S()),f.nextNode(),l.push({type:2,index:++n});o.append(h[d],S())}}}else if(o.nodeType===8)if(o.data===st)l.push({type:2,index:n});else{let h=-1;for(;(h=o.data.indexOf(v,h+1))!==-1;)l.push({type:7,index:n}),h+=v.length-1}n++}}static createElement(t,e){const i=y.createElement("template");return i.innerHTML=t,i}}function A(s,t,e=s,i){var o,n,r,c;if(t===b)return t;let l=i!==void 0?(o=e._$Co)===null||o===void 0?void 0:o[i]:e._$Cl;const a=x(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((n=l==null?void 0:l._$AO)===null||n===void 0||n.call(l,!1),a===void 0?l=void 0:(l=new a(s),l._$AT(s,e,i)),i!==void 0?((r=(c=e)._$Co)!==null&&r!==void 0?r:c._$Co=[])[i]=l:e._$Cl=l),l!==void 0&&(t=A(s,l._$AS(s,t.values),l,i)),t}class $t{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:o}=this._$AD,n=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:y).importNode(i,!0);f.currentNode=n;let r=f.nextNode(),c=0,l=0,a=o[0];for(;a!==void 0;){if(c===a.index){let m;a.type===2?m=new P(r,r.nextSibling,this,t):a.type===1?m=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(m=new bt(r,this,t)),this.u.push(m),a=o[++l]}c!==(a==null?void 0:a.index)&&(r=f.nextNode(),c++)}return n}p(t){let e=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class P{constructor(t,e,i,o){var n;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cm=(n=o==null?void 0:o.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=A(this,t,e),x(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==b&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):pt(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==u&&x(this._$AH)?this._$AA.nextSibling.data=t:this.T(y.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:o}=t,n=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=E.createElement(o.h,this.options)),o);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.p(i);else{const r=new $t(n,this),c=r.v(this.options);r.p(i),this.T(c),this._$AH=r}}_$AC(t){let e=Y.get(t.strings);return e===void 0&&Y.set(t.strings,e=new E(t)),e}k(t){nt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const n of t)o===e.length?e.push(i=new P(this.O(S()),this.O(S()),this,this.options)):i=e[o],i._$AI(n),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class L{constructor(t,e,i,o,n){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){const n=this.strings;let r=!1;if(n===void 0)t=A(this,t,e,0),r=!x(t)||t!==this._$AH&&t!==b,r&&(this._$AH=t);else{const c=t;let l,a;for(t=n[0],l=0;l<n.length-1;l++)a=A(this,c[i+l],e,l),a===b&&(a=this._$AH[l]),r||(r=!x(a)||a!==this._$AH[l]),a===u?t=u:t!==u&&(t+=(a!=null?a:"")+n[l+1]),this._$AH[l]=a}r&&!o&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class gt extends L{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}}const ft=_?_.emptyScript:"";class _t extends L{constructor(){super(...arguments),this.type=4}j(t){t&&t!==u?this.element.setAttribute(this.name,ft):this.element.removeAttribute(this.name)}}class yt extends L{constructor(t,e,i,o,n){super(t,e,i,o,n),this.type=5}_$AI(t,e=this){var i;if((t=(i=A(this,t,e,0))!==null&&i!==void 0?i:u)===b)return;const o=this._$AH,n=t===u&&o!==u||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,r=t!==u&&(o===u||n);n&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class bt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){A(this,t)}}const tt=H.litHtmlPolyfillSupport;tt==null||tt(E,P),((I=H.litHtmlVersions)!==null&&I!==void 0?I:H.litHtmlVersions=[]).push("2.6.1");const At=(s,t,e)=>{var i,o;const n=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let r=n._$litPart$;if(r===void 0){const c=(o=e==null?void 0:e.renderBefore)!==null&&o!==void 0?o:null;n._$litPart$=r=new P(t.insertBefore(S(),c),c,void 0,e!=null?e:{})}return r._$AI(s),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var z,j;class k extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=At(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return b}}k.finalized=!0,k._$litElement$=!0,(z=globalThis.litElementHydrateSupport)===null||z===void 0||z.call(globalThis,{LitElement:k});const et=globalThis.litElementPolyfillSupport;et==null||et({LitElement:k});((j=globalThis.litElementVersions)!==null&&j!==void 0?j:globalThis.litElementVersions=[]).push("3.2.2");class Ct extends k{static get properties(){return{docsHint:{type:String},count:{type:Number},imageUrl:{type:String},pokemonName:{type:String},hasLost:{type:Boolean},totalPokemonCount:{type:Number},correctCount:{type:Number},incorrectCount:{type:Number},wonPokemon:{type:Array},lostPokemon:{type:Array}}}constructor(){super(),this.docsHint="G\xE9n\xE9rer un pokemon al\xE9atoire",this.count=0,this.imageUrl="",this.pokemonName="",this.hasLost=!1,this.totalPokemonCount=0,this.correctCount=0,this.incorrectCount=0,this.wonPokemon=[],this.lostPokemon=[]}render(){return w`
      <slot></slot>
      <div class="card">
        <p class="read-the-docs">${this.docsHint}</p>
        <div class="mb-3">
          <img
            src=${this.imageUrl?this.imageUrl:""}
            alt=${this.pokemonName}
            width="100"
            height="100"
          />
        </div>
        <div>
          <button @click=${this._onClick} part="button">NEW POKEMON</button>
          <button @click=${this._onResetClick}>Reset</button>
        </div>
        ${this.hasLost?w`
              <div>
                <p>Comment s'apelle ce pokemon ?</p>
                <p>Réponse : ${this.pokemonName}</p>
              </div>
            `:w`
              <div>
                <p>Essayez de deviner le nom de ce Pokemon !</p>
                <p>(En Anglais !)</p>
              </div>
            `}
        <div>
          <input type="text" id="pokemonNameInput" />
          <button type="submit" @click=${this._onValidateClick}>Valider</button>
        </div>
  
        <div>
          <label for="totalPokemonCountInput">Total de Clic: </label>
          <input
            type="number"
            id="totalPokemonCountInput"
            value=${this.totalPokemonCount}
            disabled
          />
        </div>
        <div>
          <label for="correctCountInput">Réponse correct : </label>
          <input
            type="number"
            id="correctCountInput"
            value=${this.correctCount}
            disabled
          />
        </div>
        <div>
          <label for="incorrectCountInput">Réponse incorrect : </label>
          <input
            type="number"
            id="incorrectCountInput"
            value=${this.incorrectCount}
            disabled
          />
        </div>
        <div>
          <div>
            <label>Pokemon gagnés:</label>
            <div class="cards-container" id="wonCardsContainer">
              ${this.wonPokemon.map(t=>w`
                  <div class="cardWon">
                    <img class="pokemon-image" src=${t.imageUrl} alt=${t.name}>
                    <p>${t.name}</p>
                  </div>
                `)}
            </div>
          </div>
  
          <div>
            <label>Pokemon perdus:</label>
            <div class="cards-container" id="lostCardsContainer">
              ${this.lostPokemon.map(t=>w`
                  <div class="cardLost">
                    <img class="pokemon-image" src=${t.imageUrl} alt=${t.name}>
                    <p>${t.name}</p>
                  </div>
                `)}
            </div>
          </div>
        </div>
        <div>
          <button @click=${this._onCountResetClick}>Reset Compteur</button>
        </div>
        <div>
          <button @click=${this._onAllResetClick}>Reset Tout</button>
        </div>
      </div>
    `}async _onClick(){this.count++,this.totalPokemonCount++;const t=Math.floor(Math.random()*898)+1;console.log("Pokemon number: ",t);const i=await(await fetch("https://pokeapi.co/api/v2/pokemon/"+t)).json();this.imageUrl=i.sprites.other["official-artwork"].front_shiny,this.pokemonName=i.name}_onResetClick(){this.count=0,this.imageUrl="",this.pokemonName="",this.hasLost=!1,document.querySelector("#pokemonNameInput").value=""}_onCountResetClick(){this.totalPokemonCount=0,this.correctCount=0,this.incorrectCount=0}_onAllResetClick(){this.count=0,this.imageUrl="",this.pokemonName="",this.hasLost=!1,this.totalPokemonCount=0,this.correctCount=0,this.incorrectCount=0;const t=document.querySelector("#pokemonNameInput");t&&(t.value=""),this.wonPokemon=[],this.lostPokemon=[],this.requestUpdate();const e=this.shadowRoot.querySelector("#wonCardsContainer");e&&(e.innerHTML="");const i=this.shadowRoot.querySelector("#lostCardsContainer");i&&(i.innerHTML="")}_onValidateClick(){const t=this.shadowRoot.querySelector("#pokemonNameInput");t.value.trim().toLowerCase()===this.pokemonName.toLowerCase()?(alert("F\xE9licitations, vous avez gagn\xE9 !"),this.hasLost=!1,this.pokemonName="",this.imageUrl="",this.count=0,this.correctCount++,t.value="",this._addToWonCards()):(alert("Dommage, vous avez perdu !"),this.hasLost=!0,this.incorrectCount++,this._addToLostCards()),this.totalPokemonCount++,this._onClick(),this.requestUpdate()}_addToWonCards(){const t={name:this.pokemonName,imageUrl:this.imageUrl};this.wonPokemon=[...this.wonPokemon,t],localStorage.setItem("wonPokemon",JSON.stringify(this.wonPokemon))}_addToLostCards(){const t=this.shadowRoot.querySelector("#lostCardsContainer"),e=document.createElement("div");e.classList.add("cardLost"),e.innerHTML=`
    <img class="pokemon-image" src="${this.imageUrl}" alt="${this.pokemonName}">
    <p>${this.pokemonName}</p>
  `,t.appendChild(e);const i={name:this.pokemonName,imageUrl:this.imageUrl},o=localStorage.getItem("lostPokemon"),n=o?JSON.parse(o):[];n.push(i),localStorage.setItem("lostPokemon",JSON.stringify(n))}static get styles(){return ht`
      :host {
        width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }

      input[type="text"],
      button[type="submit"] {
        margin-top: 10px;
      }

      .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
        transition: filter 300ms;
      }
      .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
      }
      .logo.lit:hover {
        filter: drop-shadow(0 0 2em #325cffaa);
      }
      .cardOwn,
      .cardLost {
  font-family: sans-serif;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;
}

.cardOwn img,
.cardLost img {
  width: 25px;
  height: 25px;
  margin-right: 5px;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
}

.cards-container .cardLost,
.cards-container .cardOwn {
  margin-right: 10px;
  margin-bottom: 10px;
}
      .card {
        max-width : 100%;
        margin: 16px;
        padding: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-image: url("./assets/bg-pokemon.jpg");
        background-size: cover;
        background-position: center;
        border-radius: 8px;
        box-shadow: 0 0 2em #000000aa;
      }

      .card > * {
        margin: 8px;
      }

      input[type="number"] {
        width: 50px;
      }
      .cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
}

.cards-container .card {
  max-width: 150px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.cards-container .card img {
  width: 100%;
  height: auto;
}

.cards-container .card p {
  margin: 0;
  padding: 10px;
  text-align: center;
}
      .read-the-docs {
        color: #888;
      }

      a {
        font-weight: 500;
        color: #646cff;
        text-decoration: inherit;
      }
      a:hover {
        color: #535bf2;
      }

      h1 {
        font-size: 3.2em;
        line-height: 1.1;
      }

      button {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        background-color: #1a1a1a;
        cursor: pointer;
        transition: border-color 0.25s;
        margin: 8px;
      }
      button:hover {
        border-color: #646cff;
      }
      button:focus,
      button:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
      }

      img {
        width: 200px;
        height: 200px;
        max-width: 100%;
        margin-top: 1rem;
      }

      @media (prefers-color-scheme: light) {
        a:hover {
          color: #747bff;
        }
        button {
          background-color: #f9f9f9;
        }
      }
    `}}window.customElements.define("my-element",Ct);
