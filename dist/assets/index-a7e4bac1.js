import{_ as Mt,u as nt}from"./index.vue_vue_type_script_setup_true_lang-18f629e7.js";import{t as Q,r as W,a as ee,b as ae,c as K,h as _e,d as se,e as _,f as D,g as c,o as ve,i as ge,j as p,k as Rt,l as rt,w as at,N as Dt,m as ye,n as Fe,p as Le,q as qe,s as It,u as Pt,v as pe,x as $,y as Vt,z as q,A as Je,B as Tt,C as zt,D as Bt,E as st,F as Ht,G as Ft,H as He,I as Qe,J as lt,K as et,L as Lt,M as qt,O as Ne,P as Nt,V as Et,Q as Ot,R as jt,T as Wt,S as Kt,U as Xt,W as Se,_ as $e,X as it,Y as h,Z as A,$ as f,a0 as P,a1 as Zt,a2 as We,a3 as z,a4 as B,a5 as U,a6 as E,a7 as Gt,a8 as I,a9 as Ke,aa as Yt,ab as Xe,ac as fe,ad as Jt,ae as Qt,af as De,ag as eo,ah as Ze,ai as Y,aj as to,ak as oo,al as no,am as ro,an as ct,ao,ap as Re,aq as ut,ar as tt,as as so,at as lo,au as io,av as co,aw as be,ax as uo,ay as po,az as ho,aA as fo,aB as _o,aC as vo}from"./index-7b7dfb38.js";function dt(e,t,o){t/=100,o/=100;const n=t*Math.min(o,1-o)+o;return[e,n?(2-2*o/n)*100:0,n*100]}function Me(e,t,o){t/=100,o/=100;const n=o-o*t/2,r=Math.min(n,1-n);return[e,r?(o-n)/r*100:0,n*100]}function J(e,t,o){t/=100,o/=100;let n=(r,a=(r+e/60)%6)=>o-o*t*Math.max(Math.min(a,4-a,1),0);return[n(5)*255,n(3)*255,n(1)*255]}function Ee(e,t,o){e/=255,t/=255,o/=255;let n=Math.max(e,t,o),r=n-Math.min(e,t,o),a=r&&(n==e?(t-o)/r:n==t?2+(o-e)/r:4+(e-t)/r);return[60*(a<0?a+6:a),n&&r/n*100,n*100]}function Oe(e,t,o){e/=255,t/=255,o/=255;let n=Math.max(e,t,o),r=n-Math.min(e,t,o),a=1-Math.abs(n+n-r-1),l=r&&(n==e?(t-o)/r:n==t?2+(o-e)/r:4+(e-t)/r);return[60*(l<0?l+6:l),a?r/a*100:0,(n+n-r)*50]}function je(e,t,o){t/=100,o/=100;let n=t*Math.min(o,1-o),r=(a,l=(a+e/30)%12)=>o-n*Math.max(Math.min(l-3,9-l,1),-1);return[r(0)*255,r(8)*255,r(4)*255]}function go(e,t){switch(e[0]){case"hex":return t?"#000000FF":"#000000";case"rgb":return t?"rgba(0, 0, 0, 1)":"rgb(0, 0, 0)";case"hsl":return t?"hsla(0, 0%, 0%, 1)":"hsl(0, 0%, 0%)";case"hsv":return t?"hsva(0, 0%, 0%, 1)":"hsv(0, 0%, 0%)"}return"#000000"}function ke(e){return e===null?null:/^ *#/.test(e)?"hex":e.includes("rgb")?"rgb":e.includes("hsl")?"hsl":e.includes("hsv")?"hsv":null}function mo(e){return e=Math.round(e),e>=360?359:e<0?0:e}function bo(e){return e=Math.round(e*100)/100,e>1?1:e<0?0:e}const xo={rgb:{hex(e){return Q(W(e))},hsl(e){const[t,o,n,r]=W(e);return ee([...Oe(t,o,n),r])},hsv(e){const[t,o,n,r]=W(e);return ae([...Ee(t,o,n),r])}},hex:{rgb(e){return K(W(e))},hsl(e){const[t,o,n,r]=W(e);return ee([...Oe(t,o,n),r])},hsv(e){const[t,o,n,r]=W(e);return ae([...Ee(t,o,n),r])}},hsl:{hex(e){const[t,o,n,r]=_e(e);return Q([...je(t,o,n),r])},rgb(e){const[t,o,n,r]=_e(e);return K([...je(t,o,n),r])},hsv(e){const[t,o,n,r]=_e(e);return ae([...dt(t,o,n),r])}},hsv:{hex(e){const[t,o,n,r]=se(e);return Q([...J(t,o,n),r])},rgb(e){const[t,o,n,r]=se(e);return K([...J(t,o,n),r])},hsl(e){const[t,o,n,r]=se(e);return ee([...Me(t,o,n),r])}}};function pt(e,t,o){return o=o||ke(e),o?o===t?e:xo[o][t](e):null}const he="12px",yo=12,ne="6px",ko=6,wo="linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)",Co=_({name:"HueSlider",props:{clsPrefix:{type:String,required:!0},hue:{type:Number,required:!0},onUpdateHue:{type:Function,required:!0},onComplete:Function},setup(e){const t=D(null);function o(a){t.value&&(ve("mousemove",document,n),ve("mouseup",document,r),n(a))}function n(a){const{value:l}=t;if(!l)return;const{width:i,left:u}=l.getBoundingClientRect(),b=mo((a.clientX-u-ko)/(i-yo)*360);e.onUpdateHue(b)}function r(){var a;ge("mousemove",document,n),ge("mouseup",document,r),(a=e.onComplete)===null||a===void 0||a.call(e)}return{railRef:t,handleMouseDown:o}},render(){const{clsPrefix:e}=this;return c("div",{class:`${e}-color-picker-slider`,style:{height:he,borderRadius:ne}},c("div",{ref:"railRef",style:{boxShadow:"inset 0 0 2px 0 rgba(0, 0, 0, .24)",boxSizing:"border-box",backgroundImage:wo,height:he,borderRadius:ne,position:"relative"},onMousedown:this.handleMouseDown},c("div",{style:{position:"absolute",left:ne,right:ne,top:0,bottom:0}},c("div",{class:`${e}-color-picker-handle`,style:{left:`calc((${this.hue}%) / 359 * 100 - ${ne})`,borderRadius:ne,width:he,height:he}},c("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:`hsl(${this.hue}, 100%, 50%)`,borderRadius:ne,width:he,height:he}})))))}}),xe="12px",So=12,re="6px",$o=_({name:"AlphaSlider",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},alpha:{type:Number,default:0},onUpdateAlpha:{type:Function,required:!0},onComplete:Function},setup(e){const t=D(null);function o(a){!t.value||!e.rgba||(ve("mousemove",document,n),ve("mouseup",document,r),n(a))}function n(a){const{value:l}=t;if(!l)return;const{width:i,left:u}=l.getBoundingClientRect(),b=(a.clientX-u)/(i-So);e.onUpdateAlpha(bo(b))}function r(){var a;ge("mousemove",document,n),ge("mouseup",document,r),(a=e.onComplete)===null||a===void 0||a.call(e)}return{railRef:t,railBackgroundImage:p(()=>{const{rgba:a}=e;return a?`linear-gradient(to right, rgba(${a[0]}, ${a[1]}, ${a[2]}, 0) 0%, rgba(${a[0]}, ${a[1]}, ${a[2]}, 1) 100%)`:""}),handleMouseDown:o}},render(){const{clsPrefix:e}=this;return c("div",{class:`${e}-color-picker-slider`,ref:"railRef",style:{height:xe,borderRadius:re},onMousedown:this.handleMouseDown},c("div",{style:{borderRadius:re,position:"absolute",left:0,right:0,top:0,bottom:0,overflow:"hidden"}},c("div",{class:`${e}-color-picker-checkboard`}),c("div",{class:`${e}-color-picker-slider__image`,style:{backgroundImage:this.railBackgroundImage}})),this.rgba&&c("div",{style:{position:"absolute",left:re,right:re,top:0,bottom:0}},c("div",{class:`${e}-color-picker-handle`,style:{left:`calc(${this.alpha*100}% - ${re})`,borderRadius:re,width:xe,height:xe}},c("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:K(this.rgba),borderRadius:re,width:xe,height:xe}}))))}}),Ue="12px",Ae="6px",Uo=_({name:"Pallete",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},displayedHue:{type:Number,required:!0},displayedSv:{type:Array,required:!0},onUpdateSV:{type:Function,required:!0},onComplete:Function},setup(e){const t=D(null);function o(a){t.value&&(ve("mousemove",document,n),ve("mouseup",document,r),n(a))}function n(a){const{value:l}=t;if(!l)return;const{width:i,height:u,left:b,bottom:x}=l.getBoundingClientRect(),k=(x-a.clientY)/u,R=(a.clientX-b)/i,v=100*(R>1?1:R<0?0:R),C=100*(k>1?1:k<0?0:k);e.onUpdateSV(v,C)}function r(){var a;ge("mousemove",document,n),ge("mouseup",document,r),(a=e.onComplete)===null||a===void 0||a.call(e)}return{palleteRef:t,handleColor:p(()=>{const{rgba:a}=e;return a?`rgb(${a[0]}, ${a[1]}, ${a[2]})`:""}),handleMouseDown:o}},render(){const{clsPrefix:e}=this;return c("div",{class:`${e}-color-picker-pallete`,onMousedown:this.handleMouseDown,ref:"palleteRef"},c("div",{class:`${e}-color-picker-pallete__layer`,style:{backgroundImage:`linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`}}),c("div",{class:`${e}-color-picker-pallete__layer ${e}-color-picker-pallete__layer--shadowed`,style:{backgroundImage:"linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))"}}),this.rgba&&c("div",{class:`${e}-color-picker-handle`,style:{width:Ue,height:Ue,borderRadius:Ae,left:`calc(${this.displayedSv[0]}% - ${Ae})`,bottom:`calc(${this.displayedSv[1]}% - ${Ae})`}},c("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:this.handleColor,borderRadius:Ae,width:Ue,height:Ue}})))}}),Ge=Rt("n-color-picker");function Ao(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),255)):!1}function Mo(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),360)):!1}function Ro(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),100)):!1}function Do(e){const t=e.trim();return/^#[0-9a-fA-F]+$/.test(t)?[4,5,7,9].includes(t.length):!1}function Io(e){return/^\d{1,3}\.?\d*%$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e)/100,100)):!1}const Po={paddingSmall:"0 4px"},ot=_({name:"ColorInputUnit",props:{label:{type:String,required:!0},value:{type:[Number,String],default:null},showAlpha:Boolean,onUpdateValue:{type:Function,required:!0}},setup(e){const t=D(""),{themeRef:o}=rt(Ge,null);at(()=>{t.value=n()});function n(){const{value:l}=e;if(l===null)return"";const{label:i}=e;return i==="HEX"?l:i==="A"?`${Math.floor(l*100)}%`:String(Math.floor(l))}function r(l){t.value=l}function a(l){let i,u;switch(e.label){case"HEX":u=Do(l),u&&e.onUpdateValue(l),t.value=n();break;case"H":i=Mo(l),i===!1?t.value=n():e.onUpdateValue(i);break;case"S":case"L":case"V":i=Ro(l),i===!1?t.value=n():e.onUpdateValue(i);break;case"A":i=Io(l),i===!1?t.value=n():e.onUpdateValue(i);break;case"R":case"G":case"B":i=Ao(l),i===!1?t.value=n():e.onUpdateValue(i);break}}return{mergedTheme:o,inputValue:t,handleInputChange:a,handleInputUpdateValue:r}},render(){const{mergedTheme:e}=this;return c(Dt,{size:"small",placeholder:this.label,theme:e.peers.Input,themeOverrides:e.peerOverrides.Input,builtinThemeOverrides:Po,value:this.inputValue,onUpdateValue:this.handleInputUpdateValue,onChange:this.handleInputChange,style:this.label==="A"?"flex-grow: 1.25;":""})}}),Vo=_({name:"ColorInput",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},modes:{type:Array,required:!0},showAlpha:{type:Boolean,required:!0},value:{type:String,default:null},valueArr:{type:Array,default:null},onUpdateValue:{type:Function,required:!0},onUpdateMode:{type:Function,required:!0}},setup(e){return{handleUnitUpdateValue(t,o){const{showAlpha:n}=e;if(e.mode==="hex"){e.onUpdateValue((n?Q:ye)(o));return}let r;switch(e.valueArr===null?r=[0,0,0,0]:r=Array.from(e.valueArr),e.mode){case"hsv":r[t]=o,e.onUpdateValue((n?ae:qe)(r));break;case"rgb":r[t]=o,e.onUpdateValue((n?K:Le)(r));break;case"hsl":r[t]=o,e.onUpdateValue((n?ee:Fe)(r));break}}}},render(){const{clsPrefix:e,modes:t}=this;return c("div",{class:`${e}-color-picker-input`},c("div",{class:`${e}-color-picker-input__mode`,onClick:this.onUpdateMode,style:{cursor:t.length===1?"":"pointer"}},this.mode.toUpperCase()+(this.showAlpha?"A":"")),c(It,null,{default:()=>{const{mode:o,valueArr:n,showAlpha:r}=this;if(o==="hex"){let a=null;try{a=n===null?null:(r?Q:ye)(n)}catch{}return c(ot,{label:"HEX",showAlpha:r,value:a,onUpdateValue:l=>{this.handleUnitUpdateValue(0,l)}})}return(o+(r?"a":"")).split("").map((a,l)=>c(ot,{label:a.toUpperCase(),value:n===null?null:n[l],onUpdateValue:i=>{this.handleUnitUpdateValue(l,i)}}))}}))}}),To=_({name:"ColorPickerTrigger",props:{clsPrefix:{type:String,required:!0},value:{type:String,default:null},hsla:{type:Array,default:null},disabled:Boolean,onClick:Function},setup(e){const{colorPickerSlots:t,renderLabelRef:o}=rt(Ge,null);return()=>{const{hsla:n,value:r,clsPrefix:a,onClick:l,disabled:i}=e,u=t.label||o.value;return c("div",{class:[`${a}-color-picker-trigger`,i&&`${a}-color-picker-trigger--disabled`],onClick:i?void 0:l},c("div",{class:`${a}-color-picker-trigger__fill`},c("div",{class:`${a}-color-picker-checkboard`}),c("div",{style:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:n?ee(n):""}}),r&&n?c("div",{class:`${a}-color-picker-trigger__value`,style:{color:n[2]>50||n[3]<.5?"black":"white"}},u?u(r):r):null))}}});function zo(e,t){if(t==="hsv"){const[o,n,r,a]=se(e);return K([...J(o,n,r),a])}return e}function Bo(e){const t=document.createElement("canvas").getContext("2d");return t?(t.fillStyle=e,t.fillStyle):"#000000"}const Ho=_({name:"ColorPickerSwatches",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},swatches:{type:Array,required:!0},onUpdateColor:{type:Function,required:!0}},setup(e){const t=p(()=>e.swatches.map(a=>{const l=ke(a);return{value:a,mode:l,legalValue:zo(a,l)}}));function o(a){const{mode:l}=e;let{value:i,mode:u}=a;return u||(u="hex",/^[a-zA-Z]+$/.test(i)?i=Bo(i):(Pt("color-picker",`color ${i} in swatches is invalid.`),i="#000000")),u===l?i:pt(i,l,u)}function n(a){e.onUpdateColor(o(a))}function r(a,l){a.key==="Enter"&&n(l)}return{parsedSwatchesRef:t,handleSwatchSelect:n,handleSwatchKeyDown:r}},render(){const{clsPrefix:e}=this;return c("div",{class:`${e}-color-picker-swatches`},this.parsedSwatchesRef.map(t=>c("div",{class:`${e}-color-picker-swatch`,tabindex:0,onClick:()=>{this.handleSwatchSelect(t)},onKeydown:o=>{this.handleSwatchKeyDown(o,t)}},c("div",{class:`${e}-color-picker-swatch__fill`,style:{background:t.legalValue}}))))}}),Fo=_({name:"ColorPreview",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},color:{type:String,default:null,validator:e=>{const t=ke(e);return!!(!e||t&&t!=="hsv")}},onUpdateColor:{type:Function,required:!0}},setup(e){function t(o){var n;const r=o.target.value;(n=e.onUpdateColor)===null||n===void 0||n.call(e,pt(r.toUpperCase(),e.mode,"hex")),o.stopPropagation()}return{handleChange:t}},render(){const{clsPrefix:e}=this;return c("div",{class:`${e}-color-picker-preview__preview`},c("span",{class:`${e}-color-picker-preview__fill`,style:{background:this.color||"#000000"}}),c("input",{class:`${e}-color-picker-preview__input`,type:"color",value:this.color,onChange:this.handleChange}))}}),Lo=pe([$("color-picker",`
 display: inline-block;
 box-sizing: border-box;
 height: var(--n-height);
 font-size: var(--n-font-size);
 width: 100%;
 position: relative;
 `),$("color-picker-panel",`
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
 `,[Vt(),$("input",`
 text-align: center;
 `)]),$("color-picker-checkboard",`
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
 `)]),$("color-picker-slider",`
 margin-bottom: 8px;
 position: relative;
 box-sizing: border-box;
 `,[q("image",`
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
 `)]),$("color-picker-handle",`
 z-index: 1;
 box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
 position: absolute;
 background-color: white;
 overflow: hidden;
 `,[q("fill",`
 box-sizing: border-box;
 border: 2px solid white;
 `)]),$("color-picker-pallete",`
 height: 180px;
 position: relative;
 margin-bottom: 8px;
 cursor: crosshair;
 `,[q("layer",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[Je("shadowed",`
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]),$("color-picker-preview",`
 display: flex;
 `,[q("sliders",`
 flex: 1 0 auto;
 `),q("preview",`
 position: relative;
 height: 30px;
 width: 30px;
 margin: 0 0 8px 6px;
 border-radius: 50%;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 overflow: hidden;
 `),q("fill",`
 display: block;
 width: 30px;
 height: 30px;
 `),q("input",`
 position: absolute;
 top: 0;
 left: 0;
 width: 30px;
 height: 30px;
 opacity: 0;
 z-index: 1;
 `)]),$("color-picker-input",`
 display: flex;
 align-items: center;
 `,[$("input",`
 flex-grow: 1;
 flex-basis: 0;
 `),q("mode",`
 width: 72px;
 text-align: center;
 `)]),$("color-picker-control",`
 padding: 12px;
 `),$("color-picker-action",`
 display: flex;
 margin-top: -4px;
 border-top: 1px solid var(--n-divider-color);
 padding: 8px 12px;
 justify-content: flex-end;
 `,[$("button","margin-left: 8px;")]),$("color-picker-trigger",`
 border: var(--n-border);
 height: 100%;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 cursor: pointer;
 `,[q("value",`
 white-space: nowrap;
 position: relative;
 `),q("fill",`
 border-radius: var(--n-border-radius);
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 4px;
 right: 4px;
 top: 4px;
 bottom: 4px;
 `),Je("disabled","cursor: not-allowed"),$("color-picker-checkboard",`
 border-radius: var(--n-border-radius);
 `,[pe("&::after",`
 --n-block-size: calc((var(--n-height) - 8px) / 3);
 background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);
 background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; 
 `)])]),$("color-picker-swatches",`
 display: grid;
 grid-gap: 8px;
 flex-wrap: wrap;
 position: relative;
 grid-template-columns: repeat(auto-fill, 18px);
 margin-top: 10px;
 `,[$("color-picker-swatch",`
 width: 18px;
 height: 18px;
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 8px 8px;
 background-position: 0px 0, 0px 4px, 4px -4px, -4px 0px;
 background-repeat: repeat;
 `,[q("fill",`
 position: relative;
 width: 100%;
 height: 100%;
 border-radius: 3px;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 cursor: pointer;
 `),pe("&:focus",`
 outline: none;
 `,[q("fill",[pe("&::after",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]),qo=Object.assign(Object.assign({},st.props),{value:String,show:{type:Boolean,default:void 0},defaultShow:Boolean,defaultValue:String,modes:{type:Array,default:()=>["rgb","hex","hsl"]},placement:{type:String,default:"bottom-start"},to:Ne.propTo,showAlpha:{type:Boolean,default:!0},showPreview:Boolean,swatches:Array,disabled:{type:Boolean,default:void 0},actions:{type:Array,default:null},internalActions:Array,size:String,renderLabel:Function,onComplete:Function,onConfirm:Function,onClear:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),No=_({name:"ColorPicker",props:qo,setup(e,{slots:t}){const o=D(null);let n=null;const r=Tt(e),{mergedSizeRef:a,mergedDisabledRef:l}=r,{localeRef:i}=zt("global"),{mergedClsPrefixRef:u,namespaceRef:b,inlineThemeDisabled:x}=Bt(e),k=st("ColorPicker","-color-picker",Lo,Ht,e,u);Ft(Ge,{themeRef:k,renderLabelRef:He(e,"renderLabel"),colorPickerSlots:t});const R=D(e.defaultShow),v=Qe(He(e,"show"),R);function C(s){const{onUpdateShow:d,"onUpdate:show":m}=e;d&&Se(d,s),m&&Se(m,s),R.value=s}const{defaultValue:le}=e,we=D(le===void 0?go(e.modes,e.showAlpha):le),V=Qe(He(e,"value"),we),ie=D([V.value]),O=D(0),Pe=p(()=>ke(V.value)),{modes:ht}=e,N=D(ke(V.value)||ht[0]||"rgb");function ft(){const{modes:s}=e,{value:d}=N,m=s.findIndex(y=>y===d);~m?N.value=s[(m+1)%s.length]:N.value="rgb"}let H,F,ce,ue,X,Z,G,L;const me=p(()=>{const{value:s}=V;if(!s)return null;switch(Pe.value){case"hsv":return se(s);case"hsl":return[H,F,ce,L]=_e(s),[...dt(H,F,ce),L];case"rgb":case"hex":return[X,Z,G,L]=W(s),[...Ee(X,Z,G),L]}}),te=p(()=>{const{value:s}=V;if(!s)return null;switch(Pe.value){case"rgb":case"hex":return W(s);case"hsv":return[H,F,ue,L]=se(s),[...J(H,F,ue),L];case"hsl":return[H,F,ce,L]=_e(s),[...je(H,F,ce),L]}}),Ve=p(()=>{const{value:s}=V;if(!s)return null;switch(Pe.value){case"hsl":return _e(s);case"hsv":return[H,F,ue,L]=se(s),[...Me(H,F,ue),L];case"rgb":case"hex":return[X,Z,G,L]=W(s),[...Oe(X,Z,G),L]}}),_t=p(()=>{switch(N.value){case"rgb":case"hex":return te.value;case"hsv":return me.value;case"hsl":return Ve.value}}),Ce=D(0),Te=D(1),ze=D([0,0]);function vt(s,d){const{value:m}=me,y=Ce.value,w=m?m[3]:1;ze.value=[s,d];const{showAlpha:g}=e;switch(N.value){case"hsv":S((g?ae:qe)([y,s,d,w]),"cursor");break;case"hsl":S((g?ee:Fe)([...Me(y,s,d),w]),"cursor");break;case"rgb":S((g?K:Le)([...J(y,s,d),w]),"cursor");break;case"hex":S((g?Q:ye)([...J(y,s,d),w]),"cursor");break}}function gt(s){Ce.value=s;const{value:d}=me;if(!d)return;const[,m,y,w]=d,{showAlpha:g}=e;switch(N.value){case"hsv":S((g?ae:qe)([s,m,y,w]),"cursor");break;case"rgb":S((g?K:Le)([...J(s,m,y),w]),"cursor");break;case"hex":S((g?Q:ye)([...J(s,m,y),w]),"cursor");break;case"hsl":S((g?ee:Fe)([...Me(s,m,y),w]),"cursor");break}}function mt(s){switch(N.value){case"hsv":[H,F,ue]=me.value,S(ae([H,F,ue,s]),"cursor");break;case"rgb":[X,Z,G]=te.value,S(K([X,Z,G,s]),"cursor");break;case"hex":[X,Z,G]=te.value,S(Q([X,Z,G,s]),"cursor");break;case"hsl":[H,F,ce]=Ve.value,S(ee([H,F,ce,s]),"cursor");break}Te.value=s}function S(s,d){d==="cursor"?n=s:n=null;const{nTriggerFormChange:m,nTriggerFormInput:y}=r,{onUpdateValue:w,"onUpdate:value":g}=e;w&&Se(w,s),g&&Se(g,s),m(),y(),we.value=s}function bt(s){S(s,"input"),it(de)}function de(s=!0){const{value:d}=V;if(d){const{nTriggerFormChange:m,nTriggerFormInput:y}=r,{onComplete:w}=e;w&&w(d);const{value:g}=ie,{value:T}=O;s&&(g.splice(T+1,g.length,d),O.value=T+1),m(),y()}}function xt(){const{value:s}=O;s-1<0||(S(ie.value[s-1],"input"),de(!1),O.value=s-1)}function yt(){const{value:s}=O;s<0||s+1>=ie.value.length||(S(ie.value[s+1],"input"),de(!1),O.value=s+1)}function kt(){S(null,"input");const{onClear:s}=e;s&&s(),C(!1)}function wt(){const{value:s}=V,{onConfirm:d}=e;d&&d(s),C(!1)}const Ct=p(()=>O.value>=1),St=p(()=>{const{value:s}=ie;return s.length>1&&O.value<s.length-1});lt(v,s=>{s||(ie.value=[V.value],O.value=0)}),at(()=>{if(!(n&&n===V.value)){const{value:s}=me;s&&(Ce.value=s[0],Te.value=s[3],ze.value=[s[1],s[2]])}n=null});const Be=p(()=>{const{value:s}=a,{common:{cubicBezierEaseInOut:d},self:{textColor:m,color:y,panelFontSize:w,boxShadow:g,border:T,borderRadius:M,dividerColor:oe,[et("height",s)]:Ut,[et("fontSize",s)]:At}}=k.value;return{"--n-bezier":d,"--n-text-color":m,"--n-color":y,"--n-panel-font-size":w,"--n-font-size":At,"--n-box-shadow":g,"--n-border":T,"--n-border-radius":M,"--n-height":Ut,"--n-divider-color":oe}}),j=x?Lt("color-picker",p(()=>a.value[0]),Be,e):void 0;function $t(){var s;const{value:d}=te,{value:m}=Ce,{internalActions:y,modes:w,actions:g}=e,{value:T}=k,{value:M}=u;return c("div",{class:[`${M}-color-picker-panel`,j==null?void 0:j.themeClass.value],onDragstart:oe=>{oe.preventDefault()},style:x?void 0:Be.value},c("div",{class:`${M}-color-picker-control`},c(Uo,{clsPrefix:M,rgba:d,displayedHue:m,displayedSv:ze.value,onUpdateSV:vt,onComplete:de}),c("div",{class:`${M}-color-picker-preview`},c("div",{class:`${M}-color-picker-preview__sliders`},c(Co,{clsPrefix:M,hue:m,onUpdateHue:gt,onComplete:de}),e.showAlpha?c($o,{clsPrefix:M,rgba:d,alpha:Te.value,onUpdateAlpha:mt,onComplete:de}):null),e.showPreview?c(Fo,{clsPrefix:M,mode:N.value,color:te.value&&ye(te.value),onUpdateColor:oe=>{S(oe,"input")}}):null),c(Vo,{clsPrefix:M,showAlpha:e.showAlpha,mode:N.value,modes:w,onUpdateMode:ft,value:V.value,valueArr:_t.value,onUpdateValue:bt}),((s=e.swatches)===null||s===void 0?void 0:s.length)&&c(Ho,{clsPrefix:M,mode:N.value,swatches:e.swatches,onUpdateColor:oe=>{S(oe,"input")}})),g!=null&&g.length?c("div",{class:`${M}-color-picker-action`},g.includes("confirm")&&c($e,{size:"small",onClick:wt,theme:T.peers.Button,themeOverrides:T.peerOverrides.Button},{default:()=>i.value.confirm}),g.includes("clear")&&c($e,{size:"small",onClick:kt,disabled:!V.value,theme:T.peers.Button,themeOverrides:T.peerOverrides.Button},{default:()=>i.value.clear})):null,t.action?c("div",{class:`${M}-color-picker-action`},{default:t.action}):y?c("div",{class:`${M}-color-picker-action`},y.includes("undo")&&c($e,{size:"small",onClick:xt,disabled:!Ct.value,theme:T.peers.Button,themeOverrides:T.peerOverrides.Button},{default:()=>i.value.undo}),y.includes("redo")&&c($e,{size:"small",onClick:yt,disabled:!St.value,theme:T.peers.Button,themeOverrides:T.peerOverrides.Button},{default:()=>i.value.redo})):null)}return{mergedClsPrefix:u,namespace:b,selfRef:o,hsla:Ve,rgba:te,mergedShow:v,mergedDisabled:l,isMounted:qt(),adjustedTo:Ne(e),mergedValue:V,handleTriggerClick(){C(!0)},handleClickOutside(s){var d;!((d=o.value)===null||d===void 0)&&d.contains(Nt(s))||C(!1)},renderPanel:$t,cssVars:x?void 0:Be,themeClass:j==null?void 0:j.themeClass,onRender:j==null?void 0:j.onRender}},render(){const{$slots:e,mergedClsPrefix:t,onRender:o}=this;return o==null||o(),c("div",{class:[this.themeClass,`${t}-color-picker`],ref:"selfRef",style:this.cssVars},c(Et,null,{default:()=>[c(Ot,null,{default:()=>c(To,{clsPrefix:t,value:this.mergedValue,hsla:this.hsla,disabled:this.mergedDisabled,onClick:this.handleTriggerClick},{label:e.label})}),c(jt,{placement:this.placement,show:this.mergedShow,containerClass:this.namespace,teleportDisabled:this.adjustedTo===Ne.tdkey,to:this.adjustedTo},{default:()=>c(Wt,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>this.mergedShow?Kt(this.renderPanel(),[[Xt,this.handleClickOutside,void 0,{capture:!0}]]):null})})]}))}}),Eo={class:"layout_content"},Oo=_({__name:"index",setup(e){return(t,o)=>(h(),A("div",Eo,[f(Mt)]))}});const jo=P(Oo,[["__scopeId","data-v-3919c239"]]);function Ie(){const e=Zt();return{getSiderCollapse:p(()=>e.getAppLocalConfig.siderCollapse)}}const Wo={class:"flex-center py-12px text-16px c-base"},Ko="line-md:menu-fold-left",Xo="line-md:menu-fold-right",Zo=_({__name:"MenuCollapse",setup(e){const t=We(),{getSiderCollapse:o}=Ie(),{setAppLocalConfig:n}=t,r=p(()=>o.value);return(a,l)=>(h(),A("div",{class:"collpase-wrapper",onClick:l[0]||(l[0]=i=>U(n)({siderCollapse:!r.value}))},[z("div",Wo,[r.value?(h(),B(E,{key:1,icon:Xo})):(h(),B(E,{key:0,icon:Ko}))])]))}});const Go=P(Zo,[["__scopeId","data-v-314cd4ae"]]),Yo={class:"identity"},Jo={style:{"padding-left":"8px"}},Qo=_({__name:"UserIdentity",setup(e){const t=Gt(),{iconRender:o}=Yt(),n=[{label:"退出登录",key:"logout",icon:o({icon:"humbleicons:logout"})}];function r(l){l==="logout"&&a()}function a(){t.logout()}return(l,i)=>{const u=Xe;return h(),B(u,{options:n,onSelect:r},{default:I(()=>[z("div",Yo,[f(E,{icon:"mdi:user-circle-outline",style:{"font-size":"20px"}}),z("span",Jo,Ke(U(t).userInfo.username),1)])]),_:1})}}});const en=P(Qo,[["__scopeId","data-v-e4db6b8f"]]),tn=_({__name:"ConfigButton",setup(e){const t=We();return(o,n)=>{const r=Jt;return h(),B(r,{trigger:"hover"},{trigger:I(()=>[z("div",{class:"setting_button c-base cursor-pointer",onClick:n[0]||(n[0]=(...a)=>U(t).toggleConfigDrawerVisible&&U(t).toggleConfigDrawerVisible(...a))},[f(E,{icon:"material-symbols:settings-rounded"})])]),default:I(()=>[n[1]||(n[1]=fe(" 主题配置 "))]),_:1})}}});const on=P(tn,[["__scopeId","data-v-dabac78e"]]),nn=_({__name:"ColorSchemeToggle",setup(e){const t=Qt();return(o,n)=>(h(),A("div",{onClick:n[0]||(n[0]=(...r)=>U(t).toggleDark&&U(t).toggleDark(...r)),class:"cursor-pointer px-12px border-rd-4px flex-center hover:bg-active c-base text-18px"},[f(E,{icon:U(t).themeColorMode==="light"?"ph-sun-dim-duotone":"ph:moon-duotone"},null,8,["icon"])]))}}),rn={class:"docs_button c-base cursor-pointer"},an=_({__name:"LinksDropDown",setup(e){const t=[{label:"文档地址",key:"docs",props:{onClick:()=>{window.open("https://linzheng99.github.io/tob-docs-site/")}}}];return(o,n)=>{const r=Xe;return h(),B(r,{trigger:"hover",options:t},{default:I(()=>[z("div",rn,[f(E,{icon:"f7:link-circle"})])]),_:1})}}});const sn=P(an,[["__scopeId","data-v-d54b9c1a"]]),ln={class:"user_actions"},cn=_({__name:"UserActions",setup(e){return(t,o)=>(h(),A("div",ln,[f(sn),f(on),f(nn),f(en)]))}});const un=P(cn,[["__scopeId","data-v-062f99f2"]]),dn={class:"layout_header-wrapper bg-base"},pn=_({__name:"index",setup(e){return(t,o)=>(h(),A("div",dn,[f(Go),f(un)]))}});const hn=P(pn,[["__scopeId","data-v-627d7d87"]]),fn={class:"tab-wrapper c-base"},_n=_({__name:"Tab",props:{info:{},activeTab:{},showClose:{type:Boolean}},emits:["go","close"],setup(e,{emit:t}){const o=t,n=De();function r(i){o("go",i)}function a(i){o("close",i)}function l(i,u){if(i===u)return{border:`1px solid ${n.themeColor}`}}return(i,u)=>(h(),A("div",fn,[z("div",{class:"tab-content gap-1",style:Y(l(i.info.fullPath,i.activeTab)),onClick:u[1]||(u[1]=b=>r(i.info.fullPath))},[z("span",null,Ke(i.info.title),1),i.showClose?(h(),B(E,{key:0,icon:"ep:close-bold",onClick:u[0]||(u[0]=eo(b=>a(i.info),["stop"]))})):Ze("",!0)],4)]))}});const vn=P(_n,[["__scopeId","data-v-d6efb959"]]),gn=_({__name:"TabContextMenu",props:{visible:{type:Boolean,default:!1},x:{},y:{},currentPath:{}},emits:["update:visible"],setup(e,{emit:t}){const o=e,n=t,r=nt(),a=p({get(){return o.visible},set(x){n("update:visible",x)}}),l=[{label:"重新加载",key:"reload-page"}],i=new Map([["reload-page",()=>r.reloadPage(o.currentPath)]]);function u(){a.value=!1}function b(x){u();const k=i.get(x);k&&k()}return(x,k)=>{const R=Xe;return h(),B(R,{placement:"bottom-start",trigger:"manual",x:x.x,y:x.y,options:l,show:a.value,"on-clickoutside":u,onSelect:b},null,8,["x","y","show"])}}});function mn(e,t){return e.findIndex(o=>o.title===t)}const Ye=(e=!0)=>{const t=e?to():oo;function o(n,r=!1){if(r){const a=t.resolve(n);window.open(a.href,"_blank")}else t.push(n)}return{routerPush:o}},bn=ro({id:"app-tabs",state:()=>({tabs:[],activeTab:""}),getters:{getTabs(){return this.tabs},getActiveTab(){return this.activeTab}},actions:{setTabs(e){this.tabs=e},addTabs(e){mn(this.tabs,this.activeTab)===-1&&this.tabs.push(e)},setActiveTab(e){this.activeTab=e},deleteTab(e){const{routerPush:t}=Ye(!1),o=this.tabs.filter(r=>r.fullPath!==e.fullPath);if(this.tabs=o,this.activeTab===e.title){const r=this.tabs[this.tabs.length-1];this.setActiveTab(r.title),t(r.fullPath)}}}});function xn(){return bn(no)}const yn={class:"layout_tab-wrapper"},kn=_({__name:"index",setup(e){const t=ct(),o=xn(),n=nt(),{routerPush:r}=Ye(),a=p(()=>o.getTabs),l=p(()=>t.fullPath),i=p(()=>o.getTabs.length>1),u=ao({visible:!1,x:0,y:0,currentPath:""});function b(v,C){v.preventDefault(),x(!1),u.currentPath=C,it().then(()=>{tt(u,{visible:!0,x:v.clientX,y:v.clientY})})}function x(v){tt(u,{visible:v})}function k(v){r(v)}function R(v){o.deleteTab(v),n.removeCacheRoute(v.name)}return lt(()=>t.fullPath,()=>{o.setActiveTab(t.meta.title),o.addTabs({fullPath:t.fullPath,title:t.meta.title,name:t.name}),n.addCacheRoute(t.name)},{immediate:!0}),(v,C)=>(h(),A(Re,null,[z("div",yn,[(h(!0),A(Re,null,ut(a.value,le=>(h(),B(vn,{key:le.fullPath,info:le,"active-tab":l.value,"show-close":i.value,onGo:k,onClose:R,onContextmenu:we=>b(we,le.name)},null,8,["info","active-tab","show-close","onContextmenu"]))),128))]),f(gn,{visible:u.visible,x:u.x,y:u.y,"current-path":u.currentPath,"onUpdate:visible":x},null,8,["visible","x","y","current-path"])],64))}});const wn=P(kn,[["__scopeId","data-v-9906eb4b"]]),Cn={class:"sider_logo"},Sn={key:0,class:"sider_logo-unfold"},$n={key:1},Un=_({__name:"SiderLogo",setup(e){const{getSiderCollapse:t}=Ie(),o=De(),{name:n}=so(),r=p(()=>t.value),a=p(()=>o.themeColor);return(l,i)=>(h(),A("div",Cn,[r.value?(h(),A("div",$n,[f(E,{"local-icon":"logo",color:a.value,"font-size":"28"},null,8,["color"])])):(h(),A("div",Sn,[f(E,{"local-icon":"logo",color:a.value,"font-size":"28"},null,8,["color"]),z("span",{class:"sider_logo-name",style:Y({color:a.value})},Ke(U(n)),5)]))]))}});const An=P(Un,[["__scopeId","data-v-3455ec33"]]),Mn=_({__name:"SiderMenu",setup(e){const o=lo().getBackMenuList,n=ct(),{routerPush:r}=Ye(),{getSiderCollapse:a}=Ie(),l=p(()=>a.value),i=io(o),u=p(()=>n.name);function b(x,k){r(k.routePath)}return(x,k)=>{const R=co;return h(),B(R,{value:u.value,collapsed:l.value,"collapsed-width":64,"collapsed-icon-size":22,options:U(i),"onUpdate:value":b},null,8,["value","collapsed","options"])}}}),Rn={class:"layout_sider-wrapper"},Dn=_({__name:"index",setup(e){return(t,o)=>(h(),A("div",Rn,[f(An),f(Mn)]))}});const In=P(Dn,[["__scopeId","data-v-bf2af4b6"]]),Pn={class:"default-wrapper"},Vn=_({__name:"index",props:{siderCollapes:{type:Boolean},footerVisible:{type:Boolean,default:!1}},setup(e){const t=e,o=De(),n=`${o.getSiderDefaultWidth}px`,r=`${o.getSiderMinWidth}px`,a=p(()=>t.siderCollapes?r:n),l=`${o.getHeaderHeight}px`,i=`${o.getTabHeight}px`,u=p(()=>({width:t.siderCollapes?r:n})),b=p(()=>({"padding-left":`${a.value}`,height:l})),x=p(()=>({"padding-left":`${a.value}`,top:l,height:i})),k=p(()=>({"padding-left":`${a.value}`,"padding-top":`${o.getHeaderHeight+o.getTabHeight}px`})),R=p(()=>({"padding-left":`${a.value}`}));return(v,C)=>(h(),A("div",Pn,[z("header",{class:"default-header",style:Y(b.value)},[be(v.$slots,"header",{},()=>[C[0]||(C[0]=fe(" header "))],!0)],4),z("div",{class:"default-tab",style:Y(x.value)},[be(v.$slots,"tab",{},()=>[C[1]||(C[1]=fe(" tab "))],!0)],4),z("aside",{class:"default-sider",style:Y(u.value)},[be(v.$slots,"sider",{},()=>[C[2]||(C[2]=fe(" sider "))],!0)],4),z("main",{class:"default-content",style:Y(k.value)},[be(v.$slots,"default",{},void 0,!0)],4),v.footerVisible?(h(),A("footer",{key:0,class:"default-footer",style:Y(R.value)},[be(v.$slots,"footer",{},()=>[C[3]||(C[3]=fe(" footer "))],!0)],4)):Ze("",!0)]))}});const Tn=P(Vn,[["__scopeId","data-v-025f801c"]]),zn=_({__name:"ColorCheckBox",props:{color:{},checked:{type:Boolean},iconSize:{default:"20px"}},setup(e){const t=e,o=["#ffffff","#fff","rgb(255,255,255)"],n=p(()=>o.includes(t.color));return(r,a)=>(h(),A("div",{class:"color_check_box",style:Y({background:r.color})},[r.checked?(h(),B(E,{key:0,icon:"material-symbols:check-small",color:n.value?"black":"white","font-size":r.iconSize},null,8,["color","font-size"])):Ze("",!0)],4))}});const Bn=P(zn,[["__scopeId","data-v-6fb7ebfd"]]),Hn=_({__name:"index",setup(e){const t=De();return(o,n)=>{const r=uo,a=fo,l=po,i=No,u=ho;return h(),A(Re,null,[f(r,null,{default:I(()=>n[0]||(n[0]=[fe(" 系统主题 ")])),_:1}),f(l,{"x-gap":8,"y-gap":12,cols:8},{default:I(()=>[(h(!0),A(Re,null,ut(U(t).themeColorList,(b,x)=>(h(),B(a,{key:x,class:"color_check_box_wrapper"},{default:I(()=>[f(U(Bn),{color:b,checked:b===U(t).themeColor,onClick:k=>U(t).setThemeColor(b)},null,8,["color","checked","onClick"])]),_:2},1024))),128))]),_:1}),f(u,{vertical:!0,class:"color_picker"},{default:I(()=>[f(i,{value:U(t).themeColor,"show-alpha":!1,onUpdateValue:U(t).setThemeColor},null,8,["value","onUpdateValue"])]),_:1})],64)}}});const Fn=P(Hn,[["__scopeId","data-v-f5920f63"]]),Ln=_({__name:"index",setup(e){const t=We(),o=D("right");return(n,r)=>{const a=_o,l=vo;return h(),B(l,{show:U(t).configDrawerVisible,width:330,placement:o.value,onMaskClick:U(t).toggleConfigDrawerVisible},{default:I(()=>[f(a,{title:"主题配置"},{default:I(()=>[f(Fn)]),_:1})]),_:1},8,["show","placement","onMaskClick"])}}}),En=_({__name:"index",setup(e){const{getSiderCollapse:t}=Ie(),o=p(()=>t.value);return(n,r)=>(h(),B(Tn,{"sider-collapes":o.value},{sider:I(()=>[f(In)]),header:I(()=>[f(hn)]),tab:I(()=>[f(wn)]),default:I(()=>[f(jo),f(Ln)]),_:1},8,["sider-collapes"]))}});export{En as default};
