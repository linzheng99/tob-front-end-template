import{_ as Rt,u as nt}from"./index.vue_vue_type_script_setup_true_lang-049e3bc3.js";import{t as Q,r as j,a as ee,b as re,c as W,h as _e,d as se,e as f,f as M,g as c,o as ve,i as ge,j as p,k as Pt,l as ot,w as at,N as Vt,m as ye,n as Ne,p as qe,q as Ee,s as Tt,u as Dt,v as pe,x as S,y as zt,z as H,A as Je,B as Bt,C as Ht,D as Ft,E as rt,F as Nt,G as qt,H as Fe,I as Qe,J as st,K as et,L as Et,M as Lt,O as Le,P as Ot,V as jt,Q as Wt,R as Kt,T as Xt,S as Zt,U as Gt,W as $e,_ as Ue,X as lt,Y as h,Z as U,$ as _,a0 as V,a1 as Yt,a2 as Ke,a3 as F,a4 as N,a5 as $,a6 as Jt,a7 as P,a8 as Xe,a9 as it,aa as fe,ab as Qt,ac as en,ad as tn,ae as nn,af as on,ag as an,ah as Pe,ai as rn,aj as Ze,ak as Y,al as ct,am as sn,an as Re,ao as ut,ap as ke,aq as ln,ar as cn,as as un,at as be,au as dn,av as pn,aw as hn,ax as fn,ay as _n,az as vn}from"./index-7ac5122e.js";import{_ as K}from"./index.vue_vue_type_script_setup_true_lang-d857363d.js";import{u as dt}from"./useIconRender-4740b947.js";function pt(e,t,n){t/=100,n/=100;const o=t*Math.min(n,1-n)+n;return[e,o?(2-2*n/o)*100:0,o*100]}function Ie(e,t,n){t/=100,n/=100;const o=n-n*t/2,a=Math.min(o,1-o);return[e,a?(n-o)/a*100:0,o*100]}function J(e,t,n){t/=100,n/=100;let o=(a,r=(a+e/60)%6)=>n-n*t*Math.max(Math.min(r,4-r,1),0);return[o(5)*255,o(3)*255,o(1)*255]}function Oe(e,t,n){e/=255,t/=255,n/=255;let o=Math.max(e,t,n),a=o-Math.min(e,t,n),r=a&&(o==e?(t-n)/a:o==t?2+(n-e)/a:4+(e-t)/a);return[60*(r<0?r+6:r),o&&a/o*100,o*100]}function je(e,t,n){e/=255,t/=255,n/=255;let o=Math.max(e,t,n),a=o-Math.min(e,t,n),r=1-Math.abs(o+o-a-1),s=a&&(o==e?(t-n)/a:o==t?2+(n-e)/a:4+(e-t)/a);return[60*(s<0?s+6:s),r?a/r*100:0,(o+o-a)*50]}function We(e,t,n){t/=100,n/=100;let o=t*Math.min(n,1-n),a=(r,s=(r+e/30)%12)=>n-o*Math.max(Math.min(s-3,9-s,1),-1);return[a(0)*255,a(8)*255,a(4)*255]}function gn(e,t){switch(e[0]){case"hex":return t?"#000000FF":"#000000";case"rgb":return t?"rgba(0, 0, 0, 1)":"rgb(0, 0, 0)";case"hsl":return t?"hsla(0, 0%, 0%, 1)":"hsl(0, 0%, 0%)";case"hsv":return t?"hsva(0, 0%, 0%, 1)":"hsv(0, 0%, 0%)"}return"#000000"}function we(e){return e===null?null:/^ *#/.test(e)?"hex":e.includes("rgb")?"rgb":e.includes("hsl")?"hsl":e.includes("hsv")?"hsv":null}function mn(e){return e=Math.round(e),e>=360?359:e<0?0:e}function bn(e){return e=Math.round(e*100)/100,e>1?1:e<0?0:e}const xn={rgb:{hex(e){return Q(j(e))},hsl(e){const[t,n,o,a]=j(e);return ee([...je(t,n,o),a])},hsv(e){const[t,n,o,a]=j(e);return re([...Oe(t,n,o),a])}},hex:{rgb(e){return W(j(e))},hsl(e){const[t,n,o,a]=j(e);return ee([...je(t,n,o),a])},hsv(e){const[t,n,o,a]=j(e);return re([...Oe(t,n,o),a])}},hsl:{hex(e){const[t,n,o,a]=_e(e);return Q([...We(t,n,o),a])},rgb(e){const[t,n,o,a]=_e(e);return W([...We(t,n,o),a])},hsv(e){const[t,n,o,a]=_e(e);return re([...pt(t,n,o),a])}},hsv:{hex(e){const[t,n,o,a]=se(e);return Q([...J(t,n,o),a])},rgb(e){const[t,n,o,a]=se(e);return W([...J(t,n,o),a])},hsl(e){const[t,n,o,a]=se(e);return ee([...Ie(t,n,o),a])}}};function ht(e,t,n){return n=n||we(e),n?n===t?e:xn[n][t](e):null}const he="12px",yn=12,oe="6px",kn=6,wn="linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)",Cn=f({name:"HueSlider",props:{clsPrefix:{type:String,required:!0},hue:{type:Number,required:!0},onUpdateHue:{type:Function,required:!0},onComplete:Function},setup(e){const t=M(null);function n(r){t.value&&(ve("mousemove",document,o),ve("mouseup",document,a),o(r))}function o(r){const{value:s}=t;if(!s)return;const{width:i,left:u}=s.getBoundingClientRect(),v=mn((r.clientX-u-kn)/(i-yn)*360);e.onUpdateHue(v)}function a(){var r;ge("mousemove",document,o),ge("mouseup",document,a),(r=e.onComplete)===null||r===void 0||r.call(e)}return{railRef:t,handleMouseDown:n}},render(){const{clsPrefix:e}=this;return c("div",{class:`${e}-color-picker-slider`,style:{height:he,borderRadius:oe}},c("div",{ref:"railRef",style:{boxShadow:"inset 0 0 2px 0 rgba(0, 0, 0, .24)",boxSizing:"border-box",backgroundImage:wn,height:he,borderRadius:oe,position:"relative"},onMousedown:this.handleMouseDown},c("div",{style:{position:"absolute",left:oe,right:oe,top:0,bottom:0}},c("div",{class:`${e}-color-picker-handle`,style:{left:`calc((${this.hue}%) / 359 * 100 - ${oe})`,borderRadius:oe,width:he,height:he}},c("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:`hsl(${this.hue}, 100%, 50%)`,borderRadius:oe,width:he,height:he}})))))}}),xe="12px",Sn=12,ae="6px",$n=f({name:"AlphaSlider",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},alpha:{type:Number,default:0},onUpdateAlpha:{type:Function,required:!0},onComplete:Function},setup(e){const t=M(null);function n(r){!t.value||!e.rgba||(ve("mousemove",document,o),ve("mouseup",document,a),o(r))}function o(r){const{value:s}=t;if(!s)return;const{width:i,left:u}=s.getBoundingClientRect(),v=(r.clientX-u)/(i-Sn);e.onUpdateAlpha(bn(v))}function a(){var r;ge("mousemove",document,o),ge("mouseup",document,a),(r=e.onComplete)===null||r===void 0||r.call(e)}return{railRef:t,railBackgroundImage:p(()=>{const{rgba:r}=e;return r?`linear-gradient(to right, rgba(${r[0]}, ${r[1]}, ${r[2]}, 0) 0%, rgba(${r[0]}, ${r[1]}, ${r[2]}, 1) 100%)`:""}),handleMouseDown:n}},render(){const{clsPrefix:e}=this;return c("div",{class:`${e}-color-picker-slider`,ref:"railRef",style:{height:xe,borderRadius:ae},onMousedown:this.handleMouseDown},c("div",{style:{borderRadius:ae,position:"absolute",left:0,right:0,top:0,bottom:0,overflow:"hidden"}},c("div",{class:`${e}-color-picker-checkboard`}),c("div",{class:`${e}-color-picker-slider__image`,style:{backgroundImage:this.railBackgroundImage}})),this.rgba&&c("div",{style:{position:"absolute",left:ae,right:ae,top:0,bottom:0}},c("div",{class:`${e}-color-picker-handle`,style:{left:`calc(${this.alpha*100}% - ${ae})`,borderRadius:ae,width:xe,height:xe}},c("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:W(this.rgba),borderRadius:ae,width:xe,height:xe}}))))}}),Ae="12px",Me="6px",Un=f({name:"Pallete",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},displayedHue:{type:Number,required:!0},displayedSv:{type:Array,required:!0},onUpdateSV:{type:Function,required:!0},onComplete:Function},setup(e){const t=M(null);function n(r){t.value&&(ve("mousemove",document,o),ve("mouseup",document,a),o(r))}function o(r){const{value:s}=t;if(!s)return;const{width:i,height:u,left:v,bottom:k}=s.getBoundingClientRect(),C=(k-r.clientY)/u,T=(r.clientX-v)/i,g=100*(T>1?1:T<0?0:T),q=100*(C>1?1:C<0?0:C);e.onUpdateSV(g,q)}function a(){var r;ge("mousemove",document,o),ge("mouseup",document,a),(r=e.onComplete)===null||r===void 0||r.call(e)}return{palleteRef:t,handleColor:p(()=>{const{rgba:r}=e;return r?`rgb(${r[0]}, ${r[1]}, ${r[2]})`:""}),handleMouseDown:n}},render(){const{clsPrefix:e}=this;return c("div",{class:`${e}-color-picker-pallete`,onMousedown:this.handleMouseDown,ref:"palleteRef"},c("div",{class:`${e}-color-picker-pallete__layer`,style:{backgroundImage:`linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`}}),c("div",{class:`${e}-color-picker-pallete__layer ${e}-color-picker-pallete__layer--shadowed`,style:{backgroundImage:"linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))"}}),this.rgba&&c("div",{class:`${e}-color-picker-handle`,style:{width:Ae,height:Ae,borderRadius:Me,left:`calc(${this.displayedSv[0]}% - ${Me})`,bottom:`calc(${this.displayedSv[1]}% - ${Me})`}},c("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:this.handleColor,borderRadius:Me,width:Ae,height:Ae}})))}}),Ge=Pt("n-color-picker");function An(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),255)):!1}function Mn(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),360)):!1}function In(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),100)):!1}function Rn(e){const t=e.trim();return/^#[0-9a-fA-F]+$/.test(t)?[4,5,7,9].includes(t.length):!1}function Pn(e){return/^\d{1,3}\.?\d*%$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e)/100,100)):!1}const Vn={paddingSmall:"0 4px"},tt=f({name:"ColorInputUnit",props:{label:{type:String,required:!0},value:{type:[Number,String],default:null},showAlpha:Boolean,onUpdateValue:{type:Function,required:!0}},setup(e){const t=M(""),{themeRef:n}=ot(Ge,null);at(()=>{t.value=o()});function o(){const{value:s}=e;if(s===null)return"";const{label:i}=e;return i==="HEX"?s:i==="A"?`${Math.floor(s*100)}%`:String(Math.floor(s))}function a(s){t.value=s}function r(s){let i,u;switch(e.label){case"HEX":u=Rn(s),u&&e.onUpdateValue(s),t.value=o();break;case"H":i=Mn(s),i===!1?t.value=o():e.onUpdateValue(i);break;case"S":case"L":case"V":i=In(s),i===!1?t.value=o():e.onUpdateValue(i);break;case"A":i=Pn(s),i===!1?t.value=o():e.onUpdateValue(i);break;case"R":case"G":case"B":i=An(s),i===!1?t.value=o():e.onUpdateValue(i);break}}return{mergedTheme:n,inputValue:t,handleInputChange:r,handleInputUpdateValue:a}},render(){const{mergedTheme:e}=this;return c(Vt,{size:"small",placeholder:this.label,theme:e.peers.Input,themeOverrides:e.peerOverrides.Input,builtinThemeOverrides:Vn,value:this.inputValue,onUpdateValue:this.handleInputUpdateValue,onChange:this.handleInputChange,style:this.label==="A"?"flex-grow: 1.25;":""})}}),Tn=f({name:"ColorInput",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},modes:{type:Array,required:!0},showAlpha:{type:Boolean,required:!0},value:{type:String,default:null},valueArr:{type:Array,default:null},onUpdateValue:{type:Function,required:!0},onUpdateMode:{type:Function,required:!0}},setup(e){return{handleUnitUpdateValue(t,n){const{showAlpha:o}=e;if(e.mode==="hex"){e.onUpdateValue((o?Q:ye)(n));return}let a;switch(e.valueArr===null?a=[0,0,0,0]:a=Array.from(e.valueArr),e.mode){case"hsv":a[t]=n,e.onUpdateValue((o?re:Ee)(a));break;case"rgb":a[t]=n,e.onUpdateValue((o?W:qe)(a));break;case"hsl":a[t]=n,e.onUpdateValue((o?ee:Ne)(a));break}}}},render(){const{clsPrefix:e,modes:t}=this;return c("div",{class:`${e}-color-picker-input`},c("div",{class:`${e}-color-picker-input__mode`,onClick:this.onUpdateMode,style:{cursor:t.length===1?"":"pointer"}},this.mode.toUpperCase()+(this.showAlpha?"A":"")),c(Tt,null,{default:()=>{const{mode:n,valueArr:o,showAlpha:a}=this;if(n==="hex"){let r=null;try{r=o===null?null:(a?Q:ye)(o)}catch{}return c(tt,{label:"HEX",showAlpha:a,value:r,onUpdateValue:s=>{this.handleUnitUpdateValue(0,s)}})}return(n+(a?"a":"")).split("").map((r,s)=>c(tt,{label:r.toUpperCase(),value:o===null?null:o[s],onUpdateValue:i=>{this.handleUnitUpdateValue(s,i)}}))}}))}}),Dn=f({name:"ColorPickerTrigger",props:{clsPrefix:{type:String,required:!0},value:{type:String,default:null},hsla:{type:Array,default:null},disabled:Boolean,onClick:Function},setup(e){const{colorPickerSlots:t,renderLabelRef:n}=ot(Ge,null);return()=>{const{hsla:o,value:a,clsPrefix:r,onClick:s,disabled:i}=e,u=t.label||n.value;return c("div",{class:[`${r}-color-picker-trigger`,i&&`${r}-color-picker-trigger--disabled`],onClick:i?void 0:s},c("div",{class:`${r}-color-picker-trigger__fill`},c("div",{class:`${r}-color-picker-checkboard`}),c("div",{style:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:o?ee(o):""}}),a&&o?c("div",{class:`${r}-color-picker-trigger__value`,style:{color:o[2]>50||o[3]<.5?"black":"white"}},u?u(a):a):null))}}});function zn(e,t){if(t==="hsv"){const[n,o,a,r]=se(e);return W([...J(n,o,a),r])}return e}function Bn(e){const t=document.createElement("canvas").getContext("2d");return t?(t.fillStyle=e,t.fillStyle):"#000000"}const Hn=f({name:"ColorPickerSwatches",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},swatches:{type:Array,required:!0},onUpdateColor:{type:Function,required:!0}},setup(e){const t=p(()=>e.swatches.map(r=>{const s=we(r);return{value:r,mode:s,legalValue:zn(r,s)}}));function n(r){const{mode:s}=e;let{value:i,mode:u}=r;return u||(u="hex",/^[a-zA-Z]+$/.test(i)?i=Bn(i):(Dt("color-picker",`color ${i} in swatches is invalid.`),i="#000000")),u===s?i:ht(i,s,u)}function o(r){e.onUpdateColor(n(r))}function a(r,s){r.key==="Enter"&&o(s)}return{parsedSwatchesRef:t,handleSwatchSelect:o,handleSwatchKeyDown:a}},render(){const{clsPrefix:e}=this;return c("div",{class:`${e}-color-picker-swatches`},this.parsedSwatchesRef.map(t=>c("div",{class:`${e}-color-picker-swatch`,tabindex:0,onClick:()=>{this.handleSwatchSelect(t)},onKeydown:n=>{this.handleSwatchKeyDown(n,t)}},c("div",{class:`${e}-color-picker-swatch__fill`,style:{background:t.legalValue}}))))}}),Fn=f({name:"ColorPreview",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},color:{type:String,default:null,validator:e=>{const t=we(e);return!!(!e||t&&t!=="hsv")}},onUpdateColor:{type:Function,required:!0}},setup(e){function t(n){var o;const a=n.target.value;(o=e.onUpdateColor)===null||o===void 0||o.call(e,ht(a.toUpperCase(),e.mode,"hex")),n.stopPropagation()}return{handleChange:t}},render(){const{clsPrefix:e}=this;return c("div",{class:`${e}-color-picker-preview__preview`},c("span",{class:`${e}-color-picker-preview__fill`,style:{background:this.color||"#000000"}}),c("input",{class:`${e}-color-picker-preview__input`,type:"color",value:this.color,onChange:this.handleChange}))}}),Nn=pe([S("color-picker",`
 display: inline-block;
 box-sizing: border-box;
 height: var(--n-height);
 font-size: var(--n-font-size);
 width: 100%;
 position: relative;
 `),S("color-picker-panel",`
 margin: 4px 0;
 width: 240px;
 font-size: var(--n-panel-font-size);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 `,[zt(),S("input",`
 text-align: center;
 `)]),S("color-picker-checkboard",`
 background: white; 
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[pe("&::after",`
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 12px 12px;
 background-position: 0 0, 0 6px, 6px -6px, -6px 0px;
 background-repeat: repeat;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),S("color-picker-slider",`
 margin-bottom: 8px;
 position: relative;
 box-sizing: border-box;
 `,[H("image",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `),pe("&::after",`
 content: "";
 position: absolute;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 pointer-events: none;
 `)]),S("color-picker-handle",`
 z-index: 1;
 box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
 position: absolute;
 background-color: white;
 overflow: hidden;
 `,[H("fill",`
 box-sizing: border-box;
 border: 2px solid white;
 `)]),S("color-picker-pallete",`
 height: 180px;
 position: relative;
 margin-bottom: 8px;
 cursor: crosshair;
 `,[H("layer",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[Je("shadowed",`
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]),S("color-picker-preview",`
 display: flex;
 `,[H("sliders",`
 flex: 1 0 auto;
 `),H("preview",`
 position: relative;
 height: 30px;
 width: 30px;
 margin: 0 0 8px 6px;
 border-radius: 50%;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 overflow: hidden;
 `),H("fill",`
 display: block;
 width: 30px;
 height: 30px;
 `),H("input",`
 position: absolute;
 top: 0;
 left: 0;
 width: 30px;
 height: 30px;
 opacity: 0;
 z-index: 1;
 `)]),S("color-picker-input",`
 display: flex;
 align-items: center;
 `,[S("input",`
 flex-grow: 1;
 flex-basis: 0;
 `),H("mode",`
 width: 72px;
 text-align: center;
 `)]),S("color-picker-control",`
 padding: 12px;
 `),S("color-picker-action",`
 display: flex;
 margin-top: -4px;
 border-top: 1px solid var(--n-divider-color);
 padding: 8px 12px;
 justify-content: flex-end;
 `,[S("button","margin-left: 8px;")]),S("color-picker-trigger",`
 border: var(--n-border);
 height: 100%;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 cursor: pointer;
 `,[H("value",`
 white-space: nowrap;
 position: relative;
 `),H("fill",`
 border-radius: var(--n-border-radius);
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 4px;
 right: 4px;
 top: 4px;
 bottom: 4px;
 `),Je("disabled","cursor: not-allowed"),S("color-picker-checkboard",`
 border-radius: var(--n-border-radius);
 `,[pe("&::after",`
 --n-block-size: calc((var(--n-height) - 8px) / 3);
 background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);
 background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; 
 `)])]),S("color-picker-swatches",`
 display: grid;
 grid-gap: 8px;
 flex-wrap: wrap;
 position: relative;
 grid-template-columns: repeat(auto-fill, 18px);
 margin-top: 10px;
 `,[S("color-picker-swatch",`
 width: 18px;
 height: 18px;
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 8px 8px;
 background-position: 0px 0, 0px 4px, 4px -4px, -4px 0px;
 background-repeat: repeat;
 `,[H("fill",`
 position: relative;
 width: 100%;
 height: 100%;
 border-radius: 3px;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 cursor: pointer;
 `),pe("&:focus",`
 outline: none;
 `,[H("fill",[pe("&::after",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]),qn=Object.assign(Object.assign({},rt.props),{value:String,show:{type:Boolean,default:void 0},defaultShow:Boolean,defaultValue:String,modes:{type:Array,default:()=>["rgb","hex","hsl"]},placement:{type:String,default:"bottom-start"},to:Le.propTo,showAlpha:{type:Boolean,default:!0},showPreview:Boolean,swatches:Array,disabled:{type:Boolean,default:void 0},actions:{type:Array,default:null},internalActions:Array,size:String,renderLabel:Function,onComplete:Function,onConfirm:Function,onClear:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),En=f({name:"ColorPicker",props:qn,setup(e,{slots:t}){const n=M(null);let o=null;const a=Bt(e),{mergedSizeRef:r,mergedDisabledRef:s}=a,{localeRef:i}=Ht("global"),{mergedClsPrefixRef:u,namespaceRef:v,inlineThemeDisabled:k}=Ft(e),C=rt("ColorPicker","-color-picker",Nn,Nt,e,u);qt(Ge,{themeRef:C,renderLabelRef:Fe(e,"renderLabel"),colorPickerSlots:t});const T=M(e.defaultShow),g=Qe(Fe(e,"show"),T);function q(l){const{onUpdateShow:d,"onUpdate:show":b}=e;d&&$e(d,l),b&&$e(b,l),T.value=l}const{defaultValue:le}=e,Ce=M(le===void 0?gn(e.modes,e.showAlpha):le),I=Qe(Fe(e,"value"),Ce),ie=M([I.value]),L=M(0),Te=p(()=>we(I.value)),{modes:_t}=e,E=M(we(I.value)||_t[0]||"rgb");function vt(){const{modes:l}=e,{value:d}=E,b=l.findIndex(x=>x===d);~b?E.value=l[(b+1)%l.length]:E.value="rgb"}let D,z,ce,ue,X,Z,G,B;const me=p(()=>{const{value:l}=I;if(!l)return null;switch(Te.value){case"hsv":return se(l);case"hsl":return[D,z,ce,B]=_e(l),[...pt(D,z,ce),B];case"rgb":case"hex":return[X,Z,G,B]=j(l),[...Oe(X,Z,G),B]}}),te=p(()=>{const{value:l}=I;if(!l)return null;switch(Te.value){case"rgb":case"hex":return j(l);case"hsv":return[D,z,ue,B]=se(l),[...J(D,z,ue),B];case"hsl":return[D,z,ce,B]=_e(l),[...We(D,z,ce),B]}}),De=p(()=>{const{value:l}=I;if(!l)return null;switch(Te.value){case"hsl":return _e(l);case"hsv":return[D,z,ue,B]=se(l),[...Ie(D,z,ue),B];case"rgb":case"hex":return[X,Z,G,B]=j(l),[...je(X,Z,G),B]}}),gt=p(()=>{switch(E.value){case"rgb":case"hex":return te.value;case"hsv":return me.value;case"hsl":return De.value}}),Se=M(0),ze=M(1),Be=M([0,0]);function mt(l,d){const{value:b}=me,x=Se.value,y=b?b[3]:1;Be.value=[l,d];const{showAlpha:m}=e;switch(E.value){case"hsv":w((m?re:Ee)([x,l,d,y]),"cursor");break;case"hsl":w((m?ee:Ne)([...Ie(x,l,d),y]),"cursor");break;case"rgb":w((m?W:qe)([...J(x,l,d),y]),"cursor");break;case"hex":w((m?Q:ye)([...J(x,l,d),y]),"cursor");break}}function bt(l){Se.value=l;const{value:d}=me;if(!d)return;const[,b,x,y]=d,{showAlpha:m}=e;switch(E.value){case"hsv":w((m?re:Ee)([l,b,x,y]),"cursor");break;case"rgb":w((m?W:qe)([...J(l,b,x),y]),"cursor");break;case"hex":w((m?Q:ye)([...J(l,b,x),y]),"cursor");break;case"hsl":w((m?ee:Ne)([...Ie(l,b,x),y]),"cursor");break}}function xt(l){switch(E.value){case"hsv":[D,z,ue]=me.value,w(re([D,z,ue,l]),"cursor");break;case"rgb":[X,Z,G]=te.value,w(W([X,Z,G,l]),"cursor");break;case"hex":[X,Z,G]=te.value,w(Q([X,Z,G,l]),"cursor");break;case"hsl":[D,z,ce]=De.value,w(ee([D,z,ce,l]),"cursor");break}ze.value=l}function w(l,d){d==="cursor"?o=l:o=null;const{nTriggerFormChange:b,nTriggerFormInput:x}=a,{onUpdateValue:y,"onUpdate:value":m}=e;y&&$e(y,l),m&&$e(m,l),b(),x(),Ce.value=l}function yt(l){w(l,"input"),lt(de)}function de(l=!0){const{value:d}=I;if(d){const{nTriggerFormChange:b,nTriggerFormInput:x}=a,{onComplete:y}=e;y&&y(d);const{value:m}=ie,{value:R}=L;l&&(m.splice(R+1,m.length,d),L.value=R+1),b(),x()}}function kt(){const{value:l}=L;l-1<0||(w(ie.value[l-1],"input"),de(!1),L.value=l-1)}function wt(){const{value:l}=L;l<0||l+1>=ie.value.length||(w(ie.value[l+1],"input"),de(!1),L.value=l+1)}function Ct(){w(null,"input");const{onClear:l}=e;l&&l(),q(!1)}function St(){const{value:l}=I,{onConfirm:d}=e;d&&d(l),q(!1)}const $t=p(()=>L.value>=1),Ut=p(()=>{const{value:l}=ie;return l.length>1&&L.value<l.length-1});st(g,l=>{l||(ie.value=[I.value],L.value=0)}),at(()=>{if(!(o&&o===I.value)){const{value:l}=me;l&&(Se.value=l[0],ze.value=l[3],Be.value=[l[1],l[2]])}o=null});const He=p(()=>{const{value:l}=r,{common:{cubicBezierEaseInOut:d},self:{textColor:b,color:x,panelFontSize:y,boxShadow:m,border:R,borderRadius:A,dividerColor:ne,[et("height",l)]:Mt,[et("fontSize",l)]:It}}=C.value;return{"--n-bezier":d,"--n-text-color":b,"--n-color":x,"--n-panel-font-size":y,"--n-font-size":It,"--n-box-shadow":m,"--n-border":R,"--n-border-radius":A,"--n-height":Mt,"--n-divider-color":ne}}),O=k?Et("color-picker",p(()=>r.value[0]),He,e):void 0;function At(){var l;const{value:d}=te,{value:b}=Se,{internalActions:x,modes:y,actions:m}=e,{value:R}=C,{value:A}=u;return c("div",{class:[`${A}-color-picker-panel`,O==null?void 0:O.themeClass.value],onDragstart:ne=>{ne.preventDefault()},style:k?void 0:He.value},c("div",{class:`${A}-color-picker-control`},c(Un,{clsPrefix:A,rgba:d,displayedHue:b,displayedSv:Be.value,onUpdateSV:mt,onComplete:de}),c("div",{class:`${A}-color-picker-preview`},c("div",{class:`${A}-color-picker-preview__sliders`},c(Cn,{clsPrefix:A,hue:b,onUpdateHue:bt,onComplete:de}),e.showAlpha?c($n,{clsPrefix:A,rgba:d,alpha:ze.value,onUpdateAlpha:xt,onComplete:de}):null),e.showPreview?c(Fn,{clsPrefix:A,mode:E.value,color:te.value&&ye(te.value),onUpdateColor:ne=>{w(ne,"input")}}):null),c(Tn,{clsPrefix:A,showAlpha:e.showAlpha,mode:E.value,modes:y,onUpdateMode:vt,value:I.value,valueArr:gt.value,onUpdateValue:yt}),((l=e.swatches)===null||l===void 0?void 0:l.length)&&c(Hn,{clsPrefix:A,mode:E.value,swatches:e.swatches,onUpdateColor:ne=>{w(ne,"input")}})),m!=null&&m.length?c("div",{class:`${A}-color-picker-action`},m.includes("confirm")&&c(Ue,{size:"small",onClick:St,theme:R.peers.Button,themeOverrides:R.peerOverrides.Button},{default:()=>i.value.confirm}),m.includes("clear")&&c(Ue,{size:"small",onClick:Ct,disabled:!I.value,theme:R.peers.Button,themeOverrides:R.peerOverrides.Button},{default:()=>i.value.clear})):null,t.action?c("div",{class:`${A}-color-picker-action`},{default:t.action}):x?c("div",{class:`${A}-color-picker-action`},x.includes("undo")&&c(Ue,{size:"small",onClick:kt,disabled:!$t.value,theme:R.peers.Button,themeOverrides:R.peerOverrides.Button},{default:()=>i.value.undo}),x.includes("redo")&&c(Ue,{size:"small",onClick:wt,disabled:!Ut.value,theme:R.peers.Button,themeOverrides:R.peerOverrides.Button},{default:()=>i.value.redo})):null)}return{mergedClsPrefix:u,namespace:v,selfRef:n,hsla:De,rgba:te,mergedShow:g,mergedDisabled:s,isMounted:Lt(),adjustedTo:Le(e),mergedValue:I,handleTriggerClick(){q(!0)},handleClickOutside(l){var d;!((d=n.value)===null||d===void 0)&&d.contains(Ot(l))||q(!1)},renderPanel:At,cssVars:k?void 0:He,themeClass:O==null?void 0:O.themeClass,onRender:O==null?void 0:O.onRender}},render(){const{$slots:e,mergedClsPrefix:t,onRender:n}=this;return n==null||n(),c("div",{class:[this.themeClass,`${t}-color-picker`],ref:"selfRef",style:this.cssVars},c(jt,null,{default:()=>[c(Wt,null,{default:()=>c(Dn,{clsPrefix:t,value:this.mergedValue,hsla:this.hsla,disabled:this.mergedDisabled,onClick:this.handleTriggerClick},{label:e.label})}),c(Kt,{placement:this.placement,show:this.mergedShow,containerClass:this.namespace,teleportDisabled:this.adjustedTo===Le.tdkey,to:this.adjustedTo},{default:()=>c(Xt,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>this.mergedShow?Zt(this.renderPanel(),[[Gt,this.handleClickOutside,void 0,{capture:!0}]]):null})})]}))}}),Ln={class:"layout_content"},On=f({__name:"index",setup(e){return(t,n)=>(h(),U("div",Ln,[_(Rt)]))}});const jn=V(On,[["__scopeId","data-v-3919c239"]]);function Ve(){const e=Yt();return{getSiderCollapse:p(()=>e.getAppLocalConfig.siderCollapse)}}const Wn={class:"flex-center py-12px text-16px c-base"},Kn="line-md:menu-fold-left",Xn="line-md:menu-fold-right",Zn=f({__name:"MenuCollapse",setup(e){const t=Ke(),{getSiderCollapse:n}=Ve(),{setAppLocalConfig:o}=t,a=p(()=>n.value);return(r,s)=>(h(),U("div",{class:"collpase-wrapper",onClick:s[0]||(s[0]=i=>$(o)({siderCollapse:!a.value}))},[F("div",Wn,[a.value?(h(),N(K,{key:1,icon:Xn})):(h(),N(K,{key:0,icon:Kn}))])]))}});const Gn=V(Zn,[["__scopeId","data-v-314cd4ae"]]),Yn={class:"identity"},Jn={style:{"padding-left":"8px"}},Qn=f({__name:"UserIdentity",setup(e){const t=Jt(),{iconRender:n}=dt(),o=[{label:"退出登录",key:"logout",icon:n({icon:"humbleicons:logout"})}];function a(s){s==="logout"&&r()}function r(){t.logout()}return(s,i)=>{const u=it;return h(),N(u,{options:o,onSelect:a},{default:P(()=>[F("div",Yn,[_(K,{icon:"mdi:user-circle-outline",style:{"font-size":"20px"}}),F("span",Jn,Xe($(t).userInfo.username),1)])]),_:1})}}});const eo=V(Qn,[["__scopeId","data-v-e4db6b8f"]]),to=f({__name:"ConfigButton",setup(e){const t=Ke();return(n,o)=>{const a=Qt;return h(),N(a,{trigger:"hover"},{trigger:P(()=>[F("div",{class:"setting_button c-base cursor-pointer",onClick:o[0]||(o[0]=(...r)=>$(t).toggleConfigDrawerVisible&&$(t).toggleConfigDrawerVisible(...r))},[_(K,{icon:"material-symbols:settings-rounded"})])]),default:P(()=>[fe(" 主题配置 ")]),_:1})}}});const no=V(to,[["__scopeId","data-v-dabac78e"]]),oo=f({__name:"ColorSchemeToggle",setup(e){const t=en();return(n,o)=>(h(),U("div",{onClick:o[0]||(o[0]=(...a)=>$(t).toggleDark&&$(t).toggleDark(...a)),class:"cursor-pointer px-12px border-rd-4px flex-center hover:bg-active c-base text-18px"},[_(K,{icon:$(t).themeColorMode==="light"?"ph-sun-dim-duotone":"ph:moon-duotone"},null,8,["icon"])]))}}),ao={class:"user_actions"},ro=f({__name:"UserActions",setup(e){return(t,n)=>(h(),U("div",ao,[_(no),_(oo),_(eo)]))}});const so=V(ro,[["__scopeId","data-v-6e86754e"]]),lo={class:"layout_header-wrapper bg-base"},io=f({__name:"index",setup(e){return(t,n)=>(h(),U("div",lo,[_(Gn),_(so)]))}});const co=V(io,[["__scopeId","data-v-627d7d87"]]);function uo(e,t){return e.findIndex(n=>n.title===t)}const Ye=(e=!0)=>{const t=e?tn():nn;function n(o,a=!1){if(a){const r=t.resolve(o);window.open(r.href,"_blank")}else t.push(o)}return{routerPush:n}},po=on({id:"app-tabs",state:()=>({tabs:[],activeTab:""}),getters:{getTabs(){return this.tabs},getActiveTab(){return this.activeTab}},actions:{setTabs(e){this.tabs=e},addTabs(e){uo(this.tabs,this.activeTab)===-1&&this.tabs.push(e)},setActiveTab(e){this.activeTab=e},deleteTab(e){const{routerPush:t}=Ye(!1),n=this.tabs.filter(a=>a.fullPath!==e.fullPath);if(this.tabs=n,this.activeTab===e.title){const a=this.tabs[this.tabs.length-1];this.setActiveTab(a.title),t(a.fullPath)}}}});function ho(){return po(an)}const fo={class:"tab-wrapper c-base"},_o=f({__name:"Tab",props:{info:{},activeTab:{},showClose:{type:Boolean}},emits:["go","close"],setup(e,{emit:t}){const n=Pe();function o(s){t("go",s)}function a(s){t("close",s)}function r(s,i){if(s===i)return{border:`1px solid ${n.themeColor}`}}return(s,i)=>(h(),U("div",fo,[F("div",{class:"tab-content gap-1",style:Y(r(s.info.fullPath,s.activeTab)),onClick:i[1]||(i[1]=u=>o(s.info.fullPath))},[F("span",null,Xe(s.info.title),1),s.showClose?(h(),N(K,{key:0,icon:"ep:close-bold",onClick:i[0]||(i[0]=rn(u=>a(s.info),["stop"]))})):Ze("",!0)],4)]))}});const vo=V(_o,[["__scopeId","data-v-c085ec29"]]),go=f({__name:"TabContextMenu",props:{visible:{type:Boolean,default:!1},x:{},y:{},currentPath:{}},emits:["update:visible"],setup(e,{emit:t}){const n=e,o=nt(),a=p({get(){return n.visible},set(v){t("update:visible",v)}}),r=[{label:"重新加载",key:"reload-page"}],s=new Map([["reload-page",()=>o.reloadPage(n.currentPath)]]),i=()=>{a.value=!1},u=v=>{i();const k=s.get(v);k&&k()};return(v,k)=>{const C=it;return h(),N(C,{placement:"bottom-start",trigger:"manual",x:v.x,y:v.y,options:r,show:a.value,"on-clickoutside":i,onSelect:u},null,8,["x","y","show"])}}}),mo={class:"layout_tab-wrapper"},bo=f({__name:"index",setup(e){const t=ct(),n=ho(),o=nt(),{routerPush:a}=Ye(),r=p(()=>n.getTabs),s=p(()=>t.fullPath),i=p(()=>n.getTabs.length>1),u=sn({visible:!1,x:0,y:0,currentPath:""}),v=(g,q)=>{g.preventDefault(),k(!1),u.currentPath=q,lt().then(()=>{ke(u,{visible:!0,x:g.clientX,y:g.clientY})})},k=g=>{ke(u,{visible:g})},C=g=>{a(g)},T=g=>{n.deleteTab(g),o.removeCacheRoute(g.name)};return st(()=>t.fullPath,()=>{n.setActiveTab(t.meta.title),n.addTabs({fullPath:t.fullPath,title:t.meta.title,name:t.name}),o.addCacheRoute(t.name)},{immediate:!0}),(g,q)=>(h(),U(Re,null,[F("div",mo,[(h(!0),U(Re,null,ut(r.value,le=>(h(),N(vo,{key:le.fullPath,info:le,"active-tab":s.value,"show-close":i.value,onGo:C,onClose:T,onContextmenu:Ce=>v(Ce,le.name)},null,8,["info","active-tab","show-close","onContextmenu"]))),128))]),_(go,{visible:u.visible,x:u.x,y:u.y,"current-path":u.currentPath,"onUpdate:visible":k},null,8,["visible","x","y","current-path"])],64))}});const xo=V(bo,[["__scopeId","data-v-85a9b53e"]]),yo={class:"sider_logo"},ko={key:0,class:"sider_logo-unfold"},wo={key:1},Co=f({__name:"SiderLogo",setup(e){const{getSiderCollapse:t}=Ve(),n=Pe(),{name:o}=ln(),a=p(()=>t.value),r=p(()=>n.themeColor);return(s,i)=>(h(),U("div",yo,[a.value?(h(),U("div",wo,[_(K,{"local-icon":"logo",color:r.value,"font-size":"28"},null,8,["color"])])):(h(),U("div",ko,[_(K,{"local-icon":"logo",color:r.value,"font-size":"28"},null,8,["color"]),F("span",{class:"sider_logo-name",style:Y({color:r.value})},Xe($(o)),5)]))]))}});const So=V(Co,[["__scopeId","data-v-3455ec33"]]);function ft(e){const t=[];return e.forEach(n=>{const{name:o,path:a,meta:r}=n;let s;n.children&&(s=ft(n.children));const i=Uo({menu:{label:r.title,key:o,routeName:o,routePath:a},localIcon:r.localIcon,icon:r.icon,children:s});$o(n)||t.push(i)}),t}function $o(e){return e.meta.hide}function Uo(e){const{iconRender:t}=dt(),n={...e.menu},{icon:o,localIcon:a,children:r}=e;return a&&ke(n,{icon:t({localIcon:a})}),o&&ke(n,{icon:t({icon:o})}),r&&ke(n,{children:r}),n}const Ao=f({__name:"SiderMenu",setup(e){const n=cn().getBackMenuList,o=ct(),{routerPush:a}=Ye(),{getSiderCollapse:r}=Ve(),s=p(()=>r.value),i=ft(n),u=p(()=>o.name);function v(k,C){a(C.routePath)}return(k,C)=>{const T=un;return h(),N(T,{value:u.value,collapsed:s.value,"collapsed-width":64,"collapsed-icon-size":22,options:$(i),"onUpdate:value":v},null,8,["value","collapsed","options"])}}}),Mo={class:"layout_sider-wrapper"},Io=f({__name:"index",setup(e){return(t,n)=>(h(),U("div",Mo,[_(So),_(Ao)]))}});const Ro=V(Io,[["__scopeId","data-v-bf2af4b6"]]),Po={class:"default-wrapper"},Vo=f({__name:"index",props:{siderCollapes:{type:Boolean},footerVisible:{type:Boolean,default:!1}},setup(e){const t=e,n=Pe(),o=`${n.getSiderDefaultWidth}px`,a=`${n.getSiderMinWidth}px`,r=p(()=>t.siderCollapes?a:o),s=`${n.getHeaderHeight}px`,i=`${n.getTabHeight}px`,u=p(()=>({width:t.siderCollapes?a:o})),v=p(()=>({"padding-left":`${r.value}`,height:s})),k=p(()=>({"padding-left":`${r.value}`,top:s,height:i})),C=p(()=>({"padding-left":`${r.value}`,"padding-top":`${n.getHeaderHeight+n.getTabHeight}px`})),T=p(()=>({"padding-left":`${r.value}`}));return(g,q)=>(h(),U("div",Po,[F("header",{class:"default-header",style:Y(v.value)},[be(g.$slots,"header",{},()=>[fe(" header ")],!0)],4),F("div",{class:"default-tab",style:Y(k.value)},[be(g.$slots,"tab",{},()=>[fe(" tab ")],!0)],4),F("aside",{class:"default-sider",style:Y(u.value)},[be(g.$slots,"sider",{},()=>[fe(" sider ")],!0)],4),F("main",{class:"default-content",style:Y(C.value)},[be(g.$slots,"default",{},void 0,!0)],4),g.footerVisible?(h(),U("footer",{key:0,class:"default-footer",style:Y(T.value)},[be(g.$slots,"footer",{},()=>[fe(" footer ")],!0)],4)):Ze("",!0)]))}});const To=V(Vo,[["__scopeId","data-v-025f801c"]]),Do=f({__name:"ColorCheckBox",props:{color:{},checked:{type:Boolean},iconSize:{default:"20px"}},setup(e){const t=e,n=["#ffffff","#fff","rgb(255,255,255)"],o=p(()=>n.includes(t.color));return(a,r)=>(h(),U("div",{class:"color_check_box",style:Y({background:a.color})},[a.checked?(h(),N(K,{key:0,icon:"material-symbols:check-small",color:o.value?"black":"white","font-size":a.iconSize},null,8,["color","font-size"])):Ze("",!0)],4))}});const zo=V(Do,[["__scopeId","data-v-6fb7ebfd"]]),Bo=f({__name:"index",setup(e){const t=Pe();return(n,o)=>{const a=dn,r=fn,s=pn,i=En,u=hn;return h(),U(Re,null,[_(a,null,{default:P(()=>[fe(" 系统主题 ")]),_:1}),_(s,{"x-gap":8,"y-gap":12,cols:8},{default:P(()=>[(h(!0),U(Re,null,ut($(t).themeColorList,(v,k)=>(h(),N(r,{key:k,class:"color_check_box_wrapper"},{default:P(()=>[_($(zo),{color:v,checked:v===$(t).themeColor,onClick:C=>$(t).setThemeColor(v)},null,8,["color","checked","onClick"])]),_:2},1024))),128))]),_:1}),_(u,{vertical:!0,class:"color_picker"},{default:P(()=>[_(i,{value:$(t).themeColor,"show-alpha":!1,onUpdateValue:$(t).setThemeColor},null,8,["value","onUpdateValue"])]),_:1})],64)}}});const Ho=V(Bo,[["__scopeId","data-v-f5920f63"]]),Fo=f({__name:"index",setup(e){const t=Ke(),n=M("right");return(o,a)=>{const r=_n,s=vn;return h(),N(s,{show:$(t).configDrawerVisible,width:330,placement:n.value,onMaskClick:$(t).toggleConfigDrawerVisible},{default:P(()=>[_(r,{title:"主题配置"},{default:P(()=>[_(Ho)]),_:1})]),_:1},8,["show","placement","onMaskClick"])}}}),Oo=f({__name:"index",setup(e){const{getSiderCollapse:t}=Ve(),n=p(()=>t.value);return(o,a)=>(h(),N(To,{"sider-collapes":n.value},{sider:P(()=>[_(Ro)]),header:P(()=>[_(co)]),tab:P(()=>[_(xo)]),default:P(()=>[_(jn),_(Fo)]),_:1},8,["sider-collapes"]))}});export{Oo as default};
