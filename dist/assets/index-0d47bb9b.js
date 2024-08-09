import{_ as Rt,u as nt}from"./index.vue_vue_type_script_setup_true_lang-cc26580e.js";import{t as Q,r as W,a as ee,b as re,c as K,h as _e,d as se,e as _,f as M,g as c,o as ve,i as ge,j as p,k as Pt,l as at,w as rt,N as Dt,m as ye,n as Le,p as Ne,q as qe,s as Vt,u as Tt,v as pe,x as S,y as zt,z as L,A as Qe,B as Bt,C as Ht,D as Ft,E as st,F as Lt,G as Nt,H as Fe,I as et,J as lt,K as tt,L as qt,M as Et,O as Ee,P as Ot,V as jt,Q as Wt,R as Kt,T as Xt,S as Zt,U as Gt,W as $e,_ as Ue,X as it,Y as h,Z as U,$ as f,a0 as R,a1 as Yt,a2 as Ke,a3 as V,a4 as T,a5 as $,a6 as Jt,a7 as I,a8 as Xe,a9 as Ze,aa as fe,ab as Qt,ac as eo,ad as to,ae as oo,af as no,ag as ao,ah as Pe,ai as ro,aj as Ge,ak as Y,al as ct,am as so,an as Re,ao as ut,ap as ke,aq as lo,ar as io,as as co,at as be,au as uo,av as po,aw as ho,ax as fo,ay as _o,az as vo}from"./index-73a9b030.js";import{_ as E}from"./index.vue_vue_type_script_setup_true_lang-5ac61ad5.js";import{u as dt}from"./useIconRender-e04c2a47.js";function pt(e,t,o){t/=100,o/=100;const n=t*Math.min(o,1-o)+o;return[e,n?(2-2*o/n)*100:0,n*100]}function Ie(e,t,o){t/=100,o/=100;const n=o-o*t/2,a=Math.min(n,1-n);return[e,a?(o-n)/a*100:0,n*100]}function J(e,t,o){t/=100,o/=100;let n=(a,r=(a+e/60)%6)=>o-o*t*Math.max(Math.min(r,4-r,1),0);return[n(5)*255,n(3)*255,n(1)*255]}function Oe(e,t,o){e/=255,t/=255,o/=255;let n=Math.max(e,t,o),a=n-Math.min(e,t,o),r=a&&(n==e?(t-o)/a:n==t?2+(o-e)/a:4+(e-t)/a);return[60*(r<0?r+6:r),n&&a/n*100,n*100]}function je(e,t,o){e/=255,t/=255,o/=255;let n=Math.max(e,t,o),a=n-Math.min(e,t,o),r=1-Math.abs(n+n-a-1),s=a&&(n==e?(t-o)/a:n==t?2+(o-e)/a:4+(e-t)/a);return[60*(s<0?s+6:s),r?a/r*100:0,(n+n-a)*50]}function We(e,t,o){t/=100,o/=100;let n=t*Math.min(o,1-o),a=(r,s=(r+e/30)%12)=>o-n*Math.max(Math.min(s-3,9-s,1),-1);return[a(0)*255,a(8)*255,a(4)*255]}function go(e,t){switch(e[0]){case"hex":return t?"#000000FF":"#000000";case"rgb":return t?"rgba(0, 0, 0, 1)":"rgb(0, 0, 0)";case"hsl":return t?"hsla(0, 0%, 0%, 1)":"hsl(0, 0%, 0%)";case"hsv":return t?"hsva(0, 0%, 0%, 1)":"hsv(0, 0%, 0%)"}return"#000000"}function we(e){return e===null?null:/^ *#/.test(e)?"hex":e.includes("rgb")?"rgb":e.includes("hsl")?"hsl":e.includes("hsv")?"hsv":null}function mo(e){return e=Math.round(e),e>=360?359:e<0?0:e}function bo(e){return e=Math.round(e*100)/100,e>1?1:e<0?0:e}const xo={rgb:{hex(e){return Q(W(e))},hsl(e){const[t,o,n,a]=W(e);return ee([...je(t,o,n),a])},hsv(e){const[t,o,n,a]=W(e);return re([...Oe(t,o,n),a])}},hex:{rgb(e){return K(W(e))},hsl(e){const[t,o,n,a]=W(e);return ee([...je(t,o,n),a])},hsv(e){const[t,o,n,a]=W(e);return re([...Oe(t,o,n),a])}},hsl:{hex(e){const[t,o,n,a]=_e(e);return Q([...We(t,o,n),a])},rgb(e){const[t,o,n,a]=_e(e);return K([...We(t,o,n),a])},hsv(e){const[t,o,n,a]=_e(e);return re([...pt(t,o,n),a])}},hsv:{hex(e){const[t,o,n,a]=se(e);return Q([...J(t,o,n),a])},rgb(e){const[t,o,n,a]=se(e);return K([...J(t,o,n),a])},hsl(e){const[t,o,n,a]=se(e);return ee([...Ie(t,o,n),a])}}};function ht(e,t,o){return o=o||we(e),o?o===t?e:xo[o][t](e):null}const he="12px",yo=12,ne="6px",ko=6,wo="linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)",Co=_({name:"HueSlider",props:{clsPrefix:{type:String,required:!0},hue:{type:Number,required:!0},onUpdateHue:{type:Function,required:!0},onComplete:Function},setup(e){const t=M(null);function o(r){t.value&&(ve("mousemove",document,n),ve("mouseup",document,a),n(r))}function n(r){const{value:s}=t;if(!s)return;const{width:i,left:u}=s.getBoundingClientRect(),v=mo((r.clientX-u-ko)/(i-yo)*360);e.onUpdateHue(v)}function a(){var r;ge("mousemove",document,n),ge("mouseup",document,a),(r=e.onComplete)===null||r===void 0||r.call(e)}return{railRef:t,handleMouseDown:o}},render(){const{clsPrefix:e}=this;return c("div",{class:`${e}-color-picker-slider`,style:{height:he,borderRadius:ne}},c("div",{ref:"railRef",style:{boxShadow:"inset 0 0 2px 0 rgba(0, 0, 0, .24)",boxSizing:"border-box",backgroundImage:wo,height:he,borderRadius:ne,position:"relative"},onMousedown:this.handleMouseDown},c("div",{style:{position:"absolute",left:ne,right:ne,top:0,bottom:0}},c("div",{class:`${e}-color-picker-handle`,style:{left:`calc((${this.hue}%) / 359 * 100 - ${ne})`,borderRadius:ne,width:he,height:he}},c("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:`hsl(${this.hue}, 100%, 50%)`,borderRadius:ne,width:he,height:he}})))))}}),xe="12px",So=12,ae="6px",$o=_({name:"AlphaSlider",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},alpha:{type:Number,default:0},onUpdateAlpha:{type:Function,required:!0},onComplete:Function},setup(e){const t=M(null);function o(r){!t.value||!e.rgba||(ve("mousemove",document,n),ve("mouseup",document,a),n(r))}function n(r){const{value:s}=t;if(!s)return;const{width:i,left:u}=s.getBoundingClientRect(),v=(r.clientX-u)/(i-So);e.onUpdateAlpha(bo(v))}function a(){var r;ge("mousemove",document,n),ge("mouseup",document,a),(r=e.onComplete)===null||r===void 0||r.call(e)}return{railRef:t,railBackgroundImage:p(()=>{const{rgba:r}=e;return r?`linear-gradient(to right, rgba(${r[0]}, ${r[1]}, ${r[2]}, 0) 0%, rgba(${r[0]}, ${r[1]}, ${r[2]}, 1) 100%)`:""}),handleMouseDown:o}},render(){const{clsPrefix:e}=this;return c("div",{class:`${e}-color-picker-slider`,ref:"railRef",style:{height:xe,borderRadius:ae},onMousedown:this.handleMouseDown},c("div",{style:{borderRadius:ae,position:"absolute",left:0,right:0,top:0,bottom:0,overflow:"hidden"}},c("div",{class:`${e}-color-picker-checkboard`}),c("div",{class:`${e}-color-picker-slider__image`,style:{backgroundImage:this.railBackgroundImage}})),this.rgba&&c("div",{style:{position:"absolute",left:ae,right:ae,top:0,bottom:0}},c("div",{class:`${e}-color-picker-handle`,style:{left:`calc(${this.alpha*100}% - ${ae})`,borderRadius:ae,width:xe,height:xe}},c("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:K(this.rgba),borderRadius:ae,width:xe,height:xe}}))))}}),Ae="12px",Me="6px",Uo=_({name:"Pallete",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},displayedHue:{type:Number,required:!0},displayedSv:{type:Array,required:!0},onUpdateSV:{type:Function,required:!0},onComplete:Function},setup(e){const t=M(null);function o(r){t.value&&(ve("mousemove",document,n),ve("mouseup",document,a),n(r))}function n(r){const{value:s}=t;if(!s)return;const{width:i,height:u,left:v,bottom:k}=s.getBoundingClientRect(),C=(k-r.clientY)/u,z=(r.clientX-v)/i,g=100*(z>1?1:z<0?0:z),N=100*(C>1?1:C<0?0:C);e.onUpdateSV(g,N)}function a(){var r;ge("mousemove",document,n),ge("mouseup",document,a),(r=e.onComplete)===null||r===void 0||r.call(e)}return{palleteRef:t,handleColor:p(()=>{const{rgba:r}=e;return r?`rgb(${r[0]}, ${r[1]}, ${r[2]})`:""}),handleMouseDown:o}},render(){const{clsPrefix:e}=this;return c("div",{class:`${e}-color-picker-pallete`,onMousedown:this.handleMouseDown,ref:"palleteRef"},c("div",{class:`${e}-color-picker-pallete__layer`,style:{backgroundImage:`linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`}}),c("div",{class:`${e}-color-picker-pallete__layer ${e}-color-picker-pallete__layer--shadowed`,style:{backgroundImage:"linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))"}}),this.rgba&&c("div",{class:`${e}-color-picker-handle`,style:{width:Ae,height:Ae,borderRadius:Me,left:`calc(${this.displayedSv[0]}% - ${Me})`,bottom:`calc(${this.displayedSv[1]}% - ${Me})`}},c("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:this.handleColor,borderRadius:Me,width:Ae,height:Ae}})))}}),Ye=Pt("n-color-picker");function Ao(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),255)):!1}function Mo(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),360)):!1}function Io(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),100)):!1}function Ro(e){const t=e.trim();return/^#[0-9a-fA-F]+$/.test(t)?[4,5,7,9].includes(t.length):!1}function Po(e){return/^\d{1,3}\.?\d*%$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e)/100,100)):!1}const Do={paddingSmall:"0 4px"},ot=_({name:"ColorInputUnit",props:{label:{type:String,required:!0},value:{type:[Number,String],default:null},showAlpha:Boolean,onUpdateValue:{type:Function,required:!0}},setup(e){const t=M(""),{themeRef:o}=at(Ye,null);rt(()=>{t.value=n()});function n(){const{value:s}=e;if(s===null)return"";const{label:i}=e;return i==="HEX"?s:i==="A"?`${Math.floor(s*100)}%`:String(Math.floor(s))}function a(s){t.value=s}function r(s){let i,u;switch(e.label){case"HEX":u=Ro(s),u&&e.onUpdateValue(s),t.value=n();break;case"H":i=Mo(s),i===!1?t.value=n():e.onUpdateValue(i);break;case"S":case"L":case"V":i=Io(s),i===!1?t.value=n():e.onUpdateValue(i);break;case"A":i=Po(s),i===!1?t.value=n():e.onUpdateValue(i);break;case"R":case"G":case"B":i=Ao(s),i===!1?t.value=n():e.onUpdateValue(i);break}}return{mergedTheme:o,inputValue:t,handleInputChange:r,handleInputUpdateValue:a}},render(){const{mergedTheme:e}=this;return c(Dt,{size:"small",placeholder:this.label,theme:e.peers.Input,themeOverrides:e.peerOverrides.Input,builtinThemeOverrides:Do,value:this.inputValue,onUpdateValue:this.handleInputUpdateValue,onChange:this.handleInputChange,style:this.label==="A"?"flex-grow: 1.25;":""})}}),Vo=_({name:"ColorInput",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},modes:{type:Array,required:!0},showAlpha:{type:Boolean,required:!0},value:{type:String,default:null},valueArr:{type:Array,default:null},onUpdateValue:{type:Function,required:!0},onUpdateMode:{type:Function,required:!0}},setup(e){return{handleUnitUpdateValue(t,o){const{showAlpha:n}=e;if(e.mode==="hex"){e.onUpdateValue((n?Q:ye)(o));return}let a;switch(e.valueArr===null?a=[0,0,0,0]:a=Array.from(e.valueArr),e.mode){case"hsv":a[t]=o,e.onUpdateValue((n?re:qe)(a));break;case"rgb":a[t]=o,e.onUpdateValue((n?K:Ne)(a));break;case"hsl":a[t]=o,e.onUpdateValue((n?ee:Le)(a));break}}}},render(){const{clsPrefix:e,modes:t}=this;return c("div",{class:`${e}-color-picker-input`},c("div",{class:`${e}-color-picker-input__mode`,onClick:this.onUpdateMode,style:{cursor:t.length===1?"":"pointer"}},this.mode.toUpperCase()+(this.showAlpha?"A":"")),c(Vt,null,{default:()=>{const{mode:o,valueArr:n,showAlpha:a}=this;if(o==="hex"){let r=null;try{r=n===null?null:(a?Q:ye)(n)}catch{}return c(ot,{label:"HEX",showAlpha:a,value:r,onUpdateValue:s=>{this.handleUnitUpdateValue(0,s)}})}return(o+(a?"a":"")).split("").map((r,s)=>c(ot,{label:r.toUpperCase(),value:n===null?null:n[s],onUpdateValue:i=>{this.handleUnitUpdateValue(s,i)}}))}}))}}),To=_({name:"ColorPickerTrigger",props:{clsPrefix:{type:String,required:!0},value:{type:String,default:null},hsla:{type:Array,default:null},disabled:Boolean,onClick:Function},setup(e){const{colorPickerSlots:t,renderLabelRef:o}=at(Ye,null);return()=>{const{hsla:n,value:a,clsPrefix:r,onClick:s,disabled:i}=e,u=t.label||o.value;return c("div",{class:[`${r}-color-picker-trigger`,i&&`${r}-color-picker-trigger--disabled`],onClick:i?void 0:s},c("div",{class:`${r}-color-picker-trigger__fill`},c("div",{class:`${r}-color-picker-checkboard`}),c("div",{style:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:n?ee(n):""}}),a&&n?c("div",{class:`${r}-color-picker-trigger__value`,style:{color:n[2]>50||n[3]<.5?"black":"white"}},u?u(a):a):null))}}});function zo(e,t){if(t==="hsv"){const[o,n,a,r]=se(e);return K([...J(o,n,a),r])}return e}function Bo(e){const t=document.createElement("canvas").getContext("2d");return t?(t.fillStyle=e,t.fillStyle):"#000000"}const Ho=_({name:"ColorPickerSwatches",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},swatches:{type:Array,required:!0},onUpdateColor:{type:Function,required:!0}},setup(e){const t=p(()=>e.swatches.map(r=>{const s=we(r);return{value:r,mode:s,legalValue:zo(r,s)}}));function o(r){const{mode:s}=e;let{value:i,mode:u}=r;return u||(u="hex",/^[a-zA-Z]+$/.test(i)?i=Bo(i):(Tt("color-picker",`color ${i} in swatches is invalid.`),i="#000000")),u===s?i:ht(i,s,u)}function n(r){e.onUpdateColor(o(r))}function a(r,s){r.key==="Enter"&&n(s)}return{parsedSwatchesRef:t,handleSwatchSelect:n,handleSwatchKeyDown:a}},render(){const{clsPrefix:e}=this;return c("div",{class:`${e}-color-picker-swatches`},this.parsedSwatchesRef.map(t=>c("div",{class:`${e}-color-picker-swatch`,tabindex:0,onClick:()=>{this.handleSwatchSelect(t)},onKeydown:o=>{this.handleSwatchKeyDown(o,t)}},c("div",{class:`${e}-color-picker-swatch__fill`,style:{background:t.legalValue}}))))}}),Fo=_({name:"ColorPreview",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},color:{type:String,default:null,validator:e=>{const t=we(e);return!!(!e||t&&t!=="hsv")}},onUpdateColor:{type:Function,required:!0}},setup(e){function t(o){var n;const a=o.target.value;(n=e.onUpdateColor)===null||n===void 0||n.call(e,ht(a.toUpperCase(),e.mode,"hex")),o.stopPropagation()}return{handleChange:t}},render(){const{clsPrefix:e}=this;return c("div",{class:`${e}-color-picker-preview__preview`},c("span",{class:`${e}-color-picker-preview__fill`,style:{background:this.color||"#000000"}}),c("input",{class:`${e}-color-picker-preview__input`,type:"color",value:this.color,onChange:this.handleChange}))}}),Lo=pe([S("color-picker",`
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
 `,[L("image",`
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
 `,[L("fill",`
 box-sizing: border-box;
 border: 2px solid white;
 `)]),S("color-picker-pallete",`
 height: 180px;
 position: relative;
 margin-bottom: 8px;
 cursor: crosshair;
 `,[L("layer",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[Qe("shadowed",`
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]),S("color-picker-preview",`
 display: flex;
 `,[L("sliders",`
 flex: 1 0 auto;
 `),L("preview",`
 position: relative;
 height: 30px;
 width: 30px;
 margin: 0 0 8px 6px;
 border-radius: 50%;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 overflow: hidden;
 `),L("fill",`
 display: block;
 width: 30px;
 height: 30px;
 `),L("input",`
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
 `),L("mode",`
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
 `,[L("value",`
 white-space: nowrap;
 position: relative;
 `),L("fill",`
 border-radius: var(--n-border-radius);
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 4px;
 right: 4px;
 top: 4px;
 bottom: 4px;
 `),Qe("disabled","cursor: not-allowed"),S("color-picker-checkboard",`
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
 `,[L("fill",`
 position: relative;
 width: 100%;
 height: 100%;
 border-radius: 3px;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 cursor: pointer;
 `),pe("&:focus",`
 outline: none;
 `,[L("fill",[pe("&::after",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]),No=Object.assign(Object.assign({},st.props),{value:String,show:{type:Boolean,default:void 0},defaultShow:Boolean,defaultValue:String,modes:{type:Array,default:()=>["rgb","hex","hsl"]},placement:{type:String,default:"bottom-start"},to:Ee.propTo,showAlpha:{type:Boolean,default:!0},showPreview:Boolean,swatches:Array,disabled:{type:Boolean,default:void 0},actions:{type:Array,default:null},internalActions:Array,size:String,renderLabel:Function,onComplete:Function,onConfirm:Function,onClear:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),qo=_({name:"ColorPicker",props:No,setup(e,{slots:t}){const o=M(null);let n=null;const a=Bt(e),{mergedSizeRef:r,mergedDisabledRef:s}=a,{localeRef:i}=Ht("global"),{mergedClsPrefixRef:u,namespaceRef:v,inlineThemeDisabled:k}=Ft(e),C=st("ColorPicker","-color-picker",Lo,Lt,e,u);Nt(Ye,{themeRef:C,renderLabelRef:Fe(e,"renderLabel"),colorPickerSlots:t});const z=M(e.defaultShow),g=et(Fe(e,"show"),z);function N(l){const{onUpdateShow:d,"onUpdate:show":b}=e;d&&$e(d,l),b&&$e(b,l),z.value=l}const{defaultValue:le}=e,Ce=M(le===void 0?go(e.modes,e.showAlpha):le),P=et(Fe(e,"value"),Ce),ie=M([P.value]),O=M(0),Ve=p(()=>we(P.value)),{modes:_t}=e,q=M(we(P.value)||_t[0]||"rgb");function vt(){const{modes:l}=e,{value:d}=q,b=l.findIndex(x=>x===d);~b?q.value=l[(b+1)%l.length]:q.value="rgb"}let B,H,ce,ue,X,Z,G,F;const me=p(()=>{const{value:l}=P;if(!l)return null;switch(Ve.value){case"hsv":return se(l);case"hsl":return[B,H,ce,F]=_e(l),[...pt(B,H,ce),F];case"rgb":case"hex":return[X,Z,G,F]=W(l),[...Oe(X,Z,G),F]}}),te=p(()=>{const{value:l}=P;if(!l)return null;switch(Ve.value){case"rgb":case"hex":return W(l);case"hsv":return[B,H,ue,F]=se(l),[...J(B,H,ue),F];case"hsl":return[B,H,ce,F]=_e(l),[...We(B,H,ce),F]}}),Te=p(()=>{const{value:l}=P;if(!l)return null;switch(Ve.value){case"hsl":return _e(l);case"hsv":return[B,H,ue,F]=se(l),[...Ie(B,H,ue),F];case"rgb":case"hex":return[X,Z,G,F]=W(l),[...je(X,Z,G),F]}}),gt=p(()=>{switch(q.value){case"rgb":case"hex":return te.value;case"hsv":return me.value;case"hsl":return Te.value}}),Se=M(0),ze=M(1),Be=M([0,0]);function mt(l,d){const{value:b}=me,x=Se.value,y=b?b[3]:1;Be.value=[l,d];const{showAlpha:m}=e;switch(q.value){case"hsv":w((m?re:qe)([x,l,d,y]),"cursor");break;case"hsl":w((m?ee:Le)([...Ie(x,l,d),y]),"cursor");break;case"rgb":w((m?K:Ne)([...J(x,l,d),y]),"cursor");break;case"hex":w((m?Q:ye)([...J(x,l,d),y]),"cursor");break}}function bt(l){Se.value=l;const{value:d}=me;if(!d)return;const[,b,x,y]=d,{showAlpha:m}=e;switch(q.value){case"hsv":w((m?re:qe)([l,b,x,y]),"cursor");break;case"rgb":w((m?K:Ne)([...J(l,b,x),y]),"cursor");break;case"hex":w((m?Q:ye)([...J(l,b,x),y]),"cursor");break;case"hsl":w((m?ee:Le)([...Ie(l,b,x),y]),"cursor");break}}function xt(l){switch(q.value){case"hsv":[B,H,ue]=me.value,w(re([B,H,ue,l]),"cursor");break;case"rgb":[X,Z,G]=te.value,w(K([X,Z,G,l]),"cursor");break;case"hex":[X,Z,G]=te.value,w(Q([X,Z,G,l]),"cursor");break;case"hsl":[B,H,ce]=Te.value,w(ee([B,H,ce,l]),"cursor");break}ze.value=l}function w(l,d){d==="cursor"?n=l:n=null;const{nTriggerFormChange:b,nTriggerFormInput:x}=a,{onUpdateValue:y,"onUpdate:value":m}=e;y&&$e(y,l),m&&$e(m,l),b(),x(),Ce.value=l}function yt(l){w(l,"input"),it(de)}function de(l=!0){const{value:d}=P;if(d){const{nTriggerFormChange:b,nTriggerFormInput:x}=a,{onComplete:y}=e;y&&y(d);const{value:m}=ie,{value:D}=O;l&&(m.splice(D+1,m.length,d),O.value=D+1),b(),x()}}function kt(){const{value:l}=O;l-1<0||(w(ie.value[l-1],"input"),de(!1),O.value=l-1)}function wt(){const{value:l}=O;l<0||l+1>=ie.value.length||(w(ie.value[l+1],"input"),de(!1),O.value=l+1)}function Ct(){w(null,"input");const{onClear:l}=e;l&&l(),N(!1)}function St(){const{value:l}=P,{onConfirm:d}=e;d&&d(l),N(!1)}const $t=p(()=>O.value>=1),Ut=p(()=>{const{value:l}=ie;return l.length>1&&O.value<l.length-1});lt(g,l=>{l||(ie.value=[P.value],O.value=0)}),rt(()=>{if(!(n&&n===P.value)){const{value:l}=me;l&&(Se.value=l[0],ze.value=l[3],Be.value=[l[1],l[2]])}n=null});const He=p(()=>{const{value:l}=r,{common:{cubicBezierEaseInOut:d},self:{textColor:b,color:x,panelFontSize:y,boxShadow:m,border:D,borderRadius:A,dividerColor:oe,[tt("height",l)]:Mt,[tt("fontSize",l)]:It}}=C.value;return{"--n-bezier":d,"--n-text-color":b,"--n-color":x,"--n-panel-font-size":y,"--n-font-size":It,"--n-box-shadow":m,"--n-border":D,"--n-border-radius":A,"--n-height":Mt,"--n-divider-color":oe}}),j=k?qt("color-picker",p(()=>r.value[0]),He,e):void 0;function At(){var l;const{value:d}=te,{value:b}=Se,{internalActions:x,modes:y,actions:m}=e,{value:D}=C,{value:A}=u;return c("div",{class:[`${A}-color-picker-panel`,j==null?void 0:j.themeClass.value],onDragstart:oe=>{oe.preventDefault()},style:k?void 0:He.value},c("div",{class:`${A}-color-picker-control`},c(Uo,{clsPrefix:A,rgba:d,displayedHue:b,displayedSv:Be.value,onUpdateSV:mt,onComplete:de}),c("div",{class:`${A}-color-picker-preview`},c("div",{class:`${A}-color-picker-preview__sliders`},c(Co,{clsPrefix:A,hue:b,onUpdateHue:bt,onComplete:de}),e.showAlpha?c($o,{clsPrefix:A,rgba:d,alpha:ze.value,onUpdateAlpha:xt,onComplete:de}):null),e.showPreview?c(Fo,{clsPrefix:A,mode:q.value,color:te.value&&ye(te.value),onUpdateColor:oe=>{w(oe,"input")}}):null),c(Vo,{clsPrefix:A,showAlpha:e.showAlpha,mode:q.value,modes:y,onUpdateMode:vt,value:P.value,valueArr:gt.value,onUpdateValue:yt}),((l=e.swatches)===null||l===void 0?void 0:l.length)&&c(Ho,{clsPrefix:A,mode:q.value,swatches:e.swatches,onUpdateColor:oe=>{w(oe,"input")}})),m!=null&&m.length?c("div",{class:`${A}-color-picker-action`},m.includes("confirm")&&c(Ue,{size:"small",onClick:St,theme:D.peers.Button,themeOverrides:D.peerOverrides.Button},{default:()=>i.value.confirm}),m.includes("clear")&&c(Ue,{size:"small",onClick:Ct,disabled:!P.value,theme:D.peers.Button,themeOverrides:D.peerOverrides.Button},{default:()=>i.value.clear})):null,t.action?c("div",{class:`${A}-color-picker-action`},{default:t.action}):x?c("div",{class:`${A}-color-picker-action`},x.includes("undo")&&c(Ue,{size:"small",onClick:kt,disabled:!$t.value,theme:D.peers.Button,themeOverrides:D.peerOverrides.Button},{default:()=>i.value.undo}),x.includes("redo")&&c(Ue,{size:"small",onClick:wt,disabled:!Ut.value,theme:D.peers.Button,themeOverrides:D.peerOverrides.Button},{default:()=>i.value.redo})):null)}return{mergedClsPrefix:u,namespace:v,selfRef:o,hsla:Te,rgba:te,mergedShow:g,mergedDisabled:s,isMounted:Et(),adjustedTo:Ee(e),mergedValue:P,handleTriggerClick(){N(!0)},handleClickOutside(l){var d;!((d=o.value)===null||d===void 0)&&d.contains(Ot(l))||N(!1)},renderPanel:At,cssVars:k?void 0:He,themeClass:j==null?void 0:j.themeClass,onRender:j==null?void 0:j.onRender}},render(){const{$slots:e,mergedClsPrefix:t,onRender:o}=this;return o==null||o(),c("div",{class:[this.themeClass,`${t}-color-picker`],ref:"selfRef",style:this.cssVars},c(jt,null,{default:()=>[c(Wt,null,{default:()=>c(To,{clsPrefix:t,value:this.mergedValue,hsla:this.hsla,disabled:this.mergedDisabled,onClick:this.handleTriggerClick},{label:e.label})}),c(Kt,{placement:this.placement,show:this.mergedShow,containerClass:this.namespace,teleportDisabled:this.adjustedTo===Ee.tdkey,to:this.adjustedTo},{default:()=>c(Xt,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>this.mergedShow?Zt(this.renderPanel(),[[Gt,this.handleClickOutside,void 0,{capture:!0}]]):null})})]}))}}),Eo={class:"layout_content"},Oo=_({__name:"index",setup(e){return(t,o)=>(h(),U("div",Eo,[f(Rt)]))}});const jo=R(Oo,[["__scopeId","data-v-3919c239"]]);function De(){const e=Yt();return{getSiderCollapse:p(()=>e.getAppLocalConfig.siderCollapse)}}const Wo={class:"flex-center py-12px text-16px c-base"},Ko="line-md:menu-fold-left",Xo="line-md:menu-fold-right",Zo=_({__name:"MenuCollapse",setup(e){const t=Ke(),{getSiderCollapse:o}=De(),{setAppLocalConfig:n}=t,a=p(()=>o.value);return(r,s)=>(h(),U("div",{class:"collpase-wrapper",onClick:s[0]||(s[0]=i=>$(n)({siderCollapse:!a.value}))},[V("div",Wo,[a.value?(h(),T(E,{key:1,icon:Xo})):(h(),T(E,{key:0,icon:Ko}))])]))}});const Go=R(Zo,[["__scopeId","data-v-314cd4ae"]]),Yo={class:"identity"},Jo={style:{"padding-left":"8px"}},Qo=_({__name:"UserIdentity",setup(e){const t=Jt(),{iconRender:o}=dt(),n=[{label:"退出登录",key:"logout",icon:o({icon:"humbleicons:logout"})}];function a(s){s==="logout"&&r()}function r(){t.logout()}return(s,i)=>{const u=Ze;return h(),T(u,{options:n,onSelect:a},{default:I(()=>[V("div",Yo,[f(E,{icon:"mdi:user-circle-outline",style:{"font-size":"20px"}}),V("span",Jo,Xe($(t).userInfo.username),1)])]),_:1})}}});const en=R(Qo,[["__scopeId","data-v-e4db6b8f"]]),tn=_({__name:"ConfigButton",setup(e){const t=Ke();return(o,n)=>{const a=Qt;return h(),T(a,{trigger:"hover"},{trigger:I(()=>[V("div",{class:"setting_button c-base cursor-pointer",onClick:n[0]||(n[0]=(...r)=>$(t).toggleConfigDrawerVisible&&$(t).toggleConfigDrawerVisible(...r))},[f(E,{icon:"material-symbols:settings-rounded"})])]),default:I(()=>[fe(" 主题配置 ")]),_:1})}}});const on=R(tn,[["__scopeId","data-v-dabac78e"]]),nn=_({__name:"ColorSchemeToggle",setup(e){const t=eo();return(o,n)=>(h(),U("div",{onClick:n[0]||(n[0]=(...a)=>$(t).toggleDark&&$(t).toggleDark(...a)),class:"cursor-pointer px-12px border-rd-4px flex-center hover:bg-active c-base text-18px"},[f(E,{icon:$(t).themeColorMode==="light"?"ph-sun-dim-duotone":"ph:moon-duotone"},null,8,["icon"])]))}}),an={class:"docs_button c-base cursor-pointer"},rn=_({__name:"LinksDropDown",setup(e){const t=[{label:"文档地址",key:"docs",props:{onClick:()=>{window.open("https://linzheng99.github.io/tob-docs-site/")}}}];return(o,n)=>{const a=Ze;return h(),T(a,{trigger:"hover",options:t},{default:I(()=>[V("div",an,[f(E,{icon:"f7:link-circle"})])]),_:1})}}});const sn=R(rn,[["__scopeId","data-v-d54b9c1a"]]),ln={class:"user_actions"},cn=_({__name:"UserActions",setup(e){return(t,o)=>(h(),U("div",ln,[f(sn),f(on),f(nn),f(en)]))}});const un=R(cn,[["__scopeId","data-v-062f99f2"]]),dn={class:"layout_header-wrapper bg-base"},pn=_({__name:"index",setup(e){return(t,o)=>(h(),U("div",dn,[f(Go),f(un)]))}});const hn=R(pn,[["__scopeId","data-v-627d7d87"]]);function fn(e,t){return e.findIndex(o=>o.title===t)}const Je=(e=!0)=>{const t=e?to():oo;function o(n,a=!1){if(a){const r=t.resolve(n);window.open(r.href,"_blank")}else t.push(n)}return{routerPush:o}},_n=no({id:"app-tabs",state:()=>({tabs:[],activeTab:""}),getters:{getTabs(){return this.tabs},getActiveTab(){return this.activeTab}},actions:{setTabs(e){this.tabs=e},addTabs(e){fn(this.tabs,this.activeTab)===-1&&this.tabs.push(e)},setActiveTab(e){this.activeTab=e},deleteTab(e){const{routerPush:t}=Je(!1),o=this.tabs.filter(a=>a.fullPath!==e.fullPath);if(this.tabs=o,this.activeTab===e.title){const a=this.tabs[this.tabs.length-1];this.setActiveTab(a.title),t(a.fullPath)}}}});function vn(){return _n(ao)}const gn={class:"tab-wrapper c-base"},mn=_({__name:"Tab",props:{info:{},activeTab:{},showClose:{type:Boolean}},emits:["go","close"],setup(e,{emit:t}){const o=Pe();function n(s){t("go",s)}function a(s){t("close",s)}function r(s,i){if(s===i)return{border:`1px solid ${o.themeColor}`}}return(s,i)=>(h(),U("div",gn,[V("div",{class:"tab-content gap-1",style:Y(r(s.info.fullPath,s.activeTab)),onClick:i[1]||(i[1]=u=>n(s.info.fullPath))},[V("span",null,Xe(s.info.title),1),s.showClose?(h(),T(E,{key:0,icon:"ep:close-bold",onClick:i[0]||(i[0]=ro(u=>a(s.info),["stop"]))})):Ge("",!0)],4)]))}});const bn=R(mn,[["__scopeId","data-v-c085ec29"]]),xn=_({__name:"TabContextMenu",props:{visible:{type:Boolean,default:!1},x:{},y:{},currentPath:{}},emits:["update:visible"],setup(e,{emit:t}){const o=e,n=nt(),a=p({get(){return o.visible},set(v){t("update:visible",v)}}),r=[{label:"重新加载",key:"reload-page"}],s=new Map([["reload-page",()=>n.reloadPage(o.currentPath)]]),i=()=>{a.value=!1},u=v=>{i();const k=s.get(v);k&&k()};return(v,k)=>{const C=Ze;return h(),T(C,{placement:"bottom-start",trigger:"manual",x:v.x,y:v.y,options:r,show:a.value,"on-clickoutside":i,onSelect:u},null,8,["x","y","show"])}}}),yn={class:"layout_tab-wrapper"},kn=_({__name:"index",setup(e){const t=ct(),o=vn(),n=nt(),{routerPush:a}=Je(),r=p(()=>o.getTabs),s=p(()=>t.fullPath),i=p(()=>o.getTabs.length>1),u=so({visible:!1,x:0,y:0,currentPath:""}),v=(g,N)=>{g.preventDefault(),k(!1),u.currentPath=N,it().then(()=>{ke(u,{visible:!0,x:g.clientX,y:g.clientY})})},k=g=>{ke(u,{visible:g})},C=g=>{a(g)},z=g=>{o.deleteTab(g),n.removeCacheRoute(g.name)};return lt(()=>t.fullPath,()=>{o.setActiveTab(t.meta.title),o.addTabs({fullPath:t.fullPath,title:t.meta.title,name:t.name}),n.addCacheRoute(t.name)},{immediate:!0}),(g,N)=>(h(),U(Re,null,[V("div",yn,[(h(!0),U(Re,null,ut(r.value,le=>(h(),T(bn,{key:le.fullPath,info:le,"active-tab":s.value,"show-close":i.value,onGo:C,onClose:z,onContextmenu:Ce=>v(Ce,le.name)},null,8,["info","active-tab","show-close","onContextmenu"]))),128))]),f(xn,{visible:u.visible,x:u.x,y:u.y,"current-path":u.currentPath,"onUpdate:visible":k},null,8,["visible","x","y","current-path"])],64))}});const wn=R(kn,[["__scopeId","data-v-85a9b53e"]]),Cn={class:"sider_logo"},Sn={key:0,class:"sider_logo-unfold"},$n={key:1},Un=_({__name:"SiderLogo",setup(e){const{getSiderCollapse:t}=De(),o=Pe(),{name:n}=lo(),a=p(()=>t.value),r=p(()=>o.themeColor);return(s,i)=>(h(),U("div",Cn,[a.value?(h(),U("div",$n,[f(E,{"local-icon":"logo",color:r.value,"font-size":"28"},null,8,["color"])])):(h(),U("div",Sn,[f(E,{"local-icon":"logo",color:r.value,"font-size":"28"},null,8,["color"]),V("span",{class:"sider_logo-name",style:Y({color:r.value})},Xe($(n)),5)]))]))}});const An=R(Un,[["__scopeId","data-v-3455ec33"]]);function ft(e){const t=[];return e.forEach(o=>{const{name:n,path:a,meta:r}=o;let s;o.children&&(s=ft(o.children));const i=In({menu:{label:r.title,key:n,routeName:n,routePath:a},localIcon:r.localIcon,icon:r.icon,children:s});Mn(o)||t.push(i)}),t}function Mn(e){return e.meta.hide}function In(e){const{iconRender:t}=dt(),o={...e.menu},{icon:n,localIcon:a,children:r}=e;return a&&ke(o,{icon:t({localIcon:a})}),n&&ke(o,{icon:t({icon:n})}),r&&ke(o,{children:r}),o}const Rn=_({__name:"SiderMenu",setup(e){const o=io().getBackMenuList,n=ct(),{routerPush:a}=Je(),{getSiderCollapse:r}=De(),s=p(()=>r.value),i=ft(o),u=p(()=>n.name);function v(k,C){a(C.routePath)}return(k,C)=>{const z=co;return h(),T(z,{value:u.value,collapsed:s.value,"collapsed-width":64,"collapsed-icon-size":22,options:$(i),"onUpdate:value":v},null,8,["value","collapsed","options"])}}}),Pn={class:"layout_sider-wrapper"},Dn=_({__name:"index",setup(e){return(t,o)=>(h(),U("div",Pn,[f(An),f(Rn)]))}});const Vn=R(Dn,[["__scopeId","data-v-bf2af4b6"]]),Tn={class:"default-wrapper"},zn=_({__name:"index",props:{siderCollapes:{type:Boolean},footerVisible:{type:Boolean,default:!1}},setup(e){const t=e,o=Pe(),n=`${o.getSiderDefaultWidth}px`,a=`${o.getSiderMinWidth}px`,r=p(()=>t.siderCollapes?a:n),s=`${o.getHeaderHeight}px`,i=`${o.getTabHeight}px`,u=p(()=>({width:t.siderCollapes?a:n})),v=p(()=>({"padding-left":`${r.value}`,height:s})),k=p(()=>({"padding-left":`${r.value}`,top:s,height:i})),C=p(()=>({"padding-left":`${r.value}`,"padding-top":`${o.getHeaderHeight+o.getTabHeight}px`})),z=p(()=>({"padding-left":`${r.value}`}));return(g,N)=>(h(),U("div",Tn,[V("header",{class:"default-header",style:Y(v.value)},[be(g.$slots,"header",{},()=>[fe(" header ")],!0)],4),V("div",{class:"default-tab",style:Y(k.value)},[be(g.$slots,"tab",{},()=>[fe(" tab ")],!0)],4),V("aside",{class:"default-sider",style:Y(u.value)},[be(g.$slots,"sider",{},()=>[fe(" sider ")],!0)],4),V("main",{class:"default-content",style:Y(C.value)},[be(g.$slots,"default",{},void 0,!0)],4),g.footerVisible?(h(),U("footer",{key:0,class:"default-footer",style:Y(z.value)},[be(g.$slots,"footer",{},()=>[fe(" footer ")],!0)],4)):Ge("",!0)]))}});const Bn=R(zn,[["__scopeId","data-v-025f801c"]]),Hn=_({__name:"ColorCheckBox",props:{color:{},checked:{type:Boolean},iconSize:{default:"20px"}},setup(e){const t=e,o=["#ffffff","#fff","rgb(255,255,255)"],n=p(()=>o.includes(t.color));return(a,r)=>(h(),U("div",{class:"color_check_box",style:Y({background:a.color})},[a.checked?(h(),T(E,{key:0,icon:"material-symbols:check-small",color:n.value?"black":"white","font-size":a.iconSize},null,8,["color","font-size"])):Ge("",!0)],4))}});const Fn=R(Hn,[["__scopeId","data-v-6fb7ebfd"]]),Ln=_({__name:"index",setup(e){const t=Pe();return(o,n)=>{const a=uo,r=fo,s=po,i=qo,u=ho;return h(),U(Re,null,[f(a,null,{default:I(()=>[fe(" 系统主题 ")]),_:1}),f(s,{"x-gap":8,"y-gap":12,cols:8},{default:I(()=>[(h(!0),U(Re,null,ut($(t).themeColorList,(v,k)=>(h(),T(r,{key:k,class:"color_check_box_wrapper"},{default:I(()=>[f($(Fn),{color:v,checked:v===$(t).themeColor,onClick:C=>$(t).setThemeColor(v)},null,8,["color","checked","onClick"])]),_:2},1024))),128))]),_:1}),f(u,{vertical:!0,class:"color_picker"},{default:I(()=>[f(i,{value:$(t).themeColor,"show-alpha":!1,onUpdateValue:$(t).setThemeColor},null,8,["value","onUpdateValue"])]),_:1})],64)}}});const Nn=R(Ln,[["__scopeId","data-v-f5920f63"]]),qn=_({__name:"index",setup(e){const t=Ke(),o=M("right");return(n,a)=>{const r=_o,s=vo;return h(),T(s,{show:$(t).configDrawerVisible,width:330,placement:o.value,onMaskClick:$(t).toggleConfigDrawerVisible},{default:I(()=>[f(r,{title:"主题配置"},{default:I(()=>[f(Nn)]),_:1})]),_:1},8,["show","placement","onMaskClick"])}}}),Kn=_({__name:"index",setup(e){const{getSiderCollapse:t}=De(),o=p(()=>t.value);return(n,a)=>(h(),T(Bn,{"sider-collapes":o.value},{sider:I(()=>[f(Vn)]),header:I(()=>[f(hn)]),tab:I(()=>[f(wn)]),default:I(()=>[f(jo),f(qn)]),_:1},8,["sider-collapes"]))}});export{Kn as default};
