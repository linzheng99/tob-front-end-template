import{_ as Mt,u as nt}from"./index.vue_vue_type_script_setup_true_lang-721e0d8f.js";import{t as Q,r as W,a as ee,b as re,c as K,h as _e,d as se,e as _,f as M,g as c,o as ve,i as ge,j as p,k as Rt,l as at,w as rt,N as Dt,m as ye,n as Fe,p as Le,q as qe,s as It,u as Pt,v as pe,x as S,y as Vt,z as L,A as Je,B as Tt,C as zt,D as Bt,E as st,F as Ht,G as Ft,H as He,I as Qe,J as lt,K as et,L as Lt,M as qt,O as Ne,P as Nt,V as Et,Q as Ot,R as jt,T as Wt,S as Kt,U as Xt,W as Se,_ as $e,X as it,Y as h,Z as U,$ as f,a0 as D,a1 as Zt,a2 as We,a3 as V,a4 as T,a5 as $,a6 as E,a7 as Gt,a8 as R,a9 as Ke,aa as Yt,ab as Xe,ac as fe,ad as Jt,ae as Qt,af as De,ag as eo,ah as Ze,ai as Y,aj as to,ak as oo,al as no,am as ao,an as ct,ao as ro,ap as Re,aq as ut,ar as tt,as as so,at as lo,au as io,av as co,aw as be,ax as uo,ay as po,az as ho,aA as fo,aB as _o,aC as vo}from"./index-d0818fe1.js";function dt(e,t,o){t/=100,o/=100;const n=t*Math.min(o,1-o)+o;return[e,n?(2-2*o/n)*100:0,n*100]}function Me(e,t,o){t/=100,o/=100;const n=o-o*t/2,a=Math.min(n,1-n);return[e,a?(o-n)/a*100:0,n*100]}function J(e,t,o){t/=100,o/=100;let n=(a,r=(a+e/60)%6)=>o-o*t*Math.max(Math.min(r,4-r,1),0);return[n(5)*255,n(3)*255,n(1)*255]}function Ee(e,t,o){e/=255,t/=255,o/=255;let n=Math.max(e,t,o),a=n-Math.min(e,t,o),r=a&&(n==e?(t-o)/a:n==t?2+(o-e)/a:4+(e-t)/a);return[60*(r<0?r+6:r),n&&a/n*100,n*100]}function Oe(e,t,o){e/=255,t/=255,o/=255;let n=Math.max(e,t,o),a=n-Math.min(e,t,o),r=1-Math.abs(n+n-a-1),l=a&&(n==e?(t-o)/a:n==t?2+(o-e)/a:4+(e-t)/a);return[60*(l<0?l+6:l),r?a/r*100:0,(n+n-a)*50]}function je(e,t,o){t/=100,o/=100;let n=t*Math.min(o,1-o),a=(r,l=(r+e/30)%12)=>o-n*Math.max(Math.min(l-3,9-l,1),-1);return[a(0)*255,a(8)*255,a(4)*255]}function go(e,t){switch(e[0]){case"hex":return t?"#000000FF":"#000000";case"rgb":return t?"rgba(0, 0, 0, 1)":"rgb(0, 0, 0)";case"hsl":return t?"hsla(0, 0%, 0%, 1)":"hsl(0, 0%, 0%)";case"hsv":return t?"hsva(0, 0%, 0%, 1)":"hsv(0, 0%, 0%)"}return"#000000"}function ke(e){return e===null?null:/^ *#/.test(e)?"hex":e.includes("rgb")?"rgb":e.includes("hsl")?"hsl":e.includes("hsv")?"hsv":null}function mo(e){return e=Math.round(e),e>=360?359:e<0?0:e}function bo(e){return e=Math.round(e*100)/100,e>1?1:e<0?0:e}const xo={rgb:{hex(e){return Q(W(e))},hsl(e){const[t,o,n,a]=W(e);return ee([...Oe(t,o,n),a])},hsv(e){const[t,o,n,a]=W(e);return re([...Ee(t,o,n),a])}},hex:{rgb(e){return K(W(e))},hsl(e){const[t,o,n,a]=W(e);return ee([...Oe(t,o,n),a])},hsv(e){const[t,o,n,a]=W(e);return re([...Ee(t,o,n),a])}},hsl:{hex(e){const[t,o,n,a]=_e(e);return Q([...je(t,o,n),a])},rgb(e){const[t,o,n,a]=_e(e);return K([...je(t,o,n),a])},hsv(e){const[t,o,n,a]=_e(e);return re([...dt(t,o,n),a])}},hsv:{hex(e){const[t,o,n,a]=se(e);return Q([...J(t,o,n),a])},rgb(e){const[t,o,n,a]=se(e);return K([...J(t,o,n),a])},hsl(e){const[t,o,n,a]=se(e);return ee([...Me(t,o,n),a])}}};function pt(e,t,o){return o=o||ke(e),o?o===t?e:xo[o][t](e):null}const he="12px",yo=12,ne="6px",ko=6,wo="linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)",Co=_({name:"HueSlider",props:{clsPrefix:{type:String,required:!0},hue:{type:Number,required:!0},onUpdateHue:{type:Function,required:!0},onComplete:Function},setup(e){const t=M(null);function o(r){t.value&&(ve("mousemove",document,n),ve("mouseup",document,a),n(r))}function n(r){const{value:l}=t;if(!l)return;const{width:i,left:u}=l.getBoundingClientRect(),v=mo((r.clientX-u-ko)/(i-yo)*360);e.onUpdateHue(v)}function a(){var r;ge("mousemove",document,n),ge("mouseup",document,a),(r=e.onComplete)===null||r===void 0||r.call(e)}return{railRef:t,handleMouseDown:o}},render(){const{clsPrefix:e}=this;return c("div",{class:`${e}-color-picker-slider`,style:{height:he,borderRadius:ne}},c("div",{ref:"railRef",style:{boxShadow:"inset 0 0 2px 0 rgba(0, 0, 0, .24)",boxSizing:"border-box",backgroundImage:wo,height:he,borderRadius:ne,position:"relative"},onMousedown:this.handleMouseDown},c("div",{style:{position:"absolute",left:ne,right:ne,top:0,bottom:0}},c("div",{class:`${e}-color-picker-handle`,style:{left:`calc((${this.hue}%) / 359 * 100 - ${ne})`,borderRadius:ne,width:he,height:he}},c("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:`hsl(${this.hue}, 100%, 50%)`,borderRadius:ne,width:he,height:he}})))))}}),xe="12px",So=12,ae="6px",$o=_({name:"AlphaSlider",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},alpha:{type:Number,default:0},onUpdateAlpha:{type:Function,required:!0},onComplete:Function},setup(e){const t=M(null);function o(r){!t.value||!e.rgba||(ve("mousemove",document,n),ve("mouseup",document,a),n(r))}function n(r){const{value:l}=t;if(!l)return;const{width:i,left:u}=l.getBoundingClientRect(),v=(r.clientX-u)/(i-So);e.onUpdateAlpha(bo(v))}function a(){var r;ge("mousemove",document,n),ge("mouseup",document,a),(r=e.onComplete)===null||r===void 0||r.call(e)}return{railRef:t,railBackgroundImage:p(()=>{const{rgba:r}=e;return r?`linear-gradient(to right, rgba(${r[0]}, ${r[1]}, ${r[2]}, 0) 0%, rgba(${r[0]}, ${r[1]}, ${r[2]}, 1) 100%)`:""}),handleMouseDown:o}},render(){const{clsPrefix:e}=this;return c("div",{class:`${e}-color-picker-slider`,ref:"railRef",style:{height:xe,borderRadius:ae},onMousedown:this.handleMouseDown},c("div",{style:{borderRadius:ae,position:"absolute",left:0,right:0,top:0,bottom:0,overflow:"hidden"}},c("div",{class:`${e}-color-picker-checkboard`}),c("div",{class:`${e}-color-picker-slider__image`,style:{backgroundImage:this.railBackgroundImage}})),this.rgba&&c("div",{style:{position:"absolute",left:ae,right:ae,top:0,bottom:0}},c("div",{class:`${e}-color-picker-handle`,style:{left:`calc(${this.alpha*100}% - ${ae})`,borderRadius:ae,width:xe,height:xe}},c("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:K(this.rgba),borderRadius:ae,width:xe,height:xe}}))))}}),Ue="12px",Ae="6px",Uo=_({name:"Pallete",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},displayedHue:{type:Number,required:!0},displayedSv:{type:Array,required:!0},onUpdateSV:{type:Function,required:!0},onComplete:Function},setup(e){const t=M(null);function o(r){t.value&&(ve("mousemove",document,n),ve("mouseup",document,a),n(r))}function n(r){const{value:l}=t;if(!l)return;const{width:i,height:u,left:v,bottom:k}=l.getBoundingClientRect(),C=(k-r.clientY)/u,z=(r.clientX-v)/i,g=100*(z>1?1:z<0?0:z),q=100*(C>1?1:C<0?0:C);e.onUpdateSV(g,q)}function a(){var r;ge("mousemove",document,n),ge("mouseup",document,a),(r=e.onComplete)===null||r===void 0||r.call(e)}return{palleteRef:t,handleColor:p(()=>{const{rgba:r}=e;return r?`rgb(${r[0]}, ${r[1]}, ${r[2]})`:""}),handleMouseDown:o}},render(){const{clsPrefix:e}=this;return c("div",{class:`${e}-color-picker-pallete`,onMousedown:this.handleMouseDown,ref:"palleteRef"},c("div",{class:`${e}-color-picker-pallete__layer`,style:{backgroundImage:`linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`}}),c("div",{class:`${e}-color-picker-pallete__layer ${e}-color-picker-pallete__layer--shadowed`,style:{backgroundImage:"linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))"}}),this.rgba&&c("div",{class:`${e}-color-picker-handle`,style:{width:Ue,height:Ue,borderRadius:Ae,left:`calc(${this.displayedSv[0]}% - ${Ae})`,bottom:`calc(${this.displayedSv[1]}% - ${Ae})`}},c("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:this.handleColor,borderRadius:Ae,width:Ue,height:Ue}})))}}),Ge=Rt("n-color-picker");function Ao(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),255)):!1}function Mo(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),360)):!1}function Ro(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),100)):!1}function Do(e){const t=e.trim();return/^#[0-9a-fA-F]+$/.test(t)?[4,5,7,9].includes(t.length):!1}function Io(e){return/^\d{1,3}\.?\d*%$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e)/100,100)):!1}const Po={paddingSmall:"0 4px"},ot=_({name:"ColorInputUnit",props:{label:{type:String,required:!0},value:{type:[Number,String],default:null},showAlpha:Boolean,onUpdateValue:{type:Function,required:!0}},setup(e){const t=M(""),{themeRef:o}=at(Ge,null);rt(()=>{t.value=n()});function n(){const{value:l}=e;if(l===null)return"";const{label:i}=e;return i==="HEX"?l:i==="A"?`${Math.floor(l*100)}%`:String(Math.floor(l))}function a(l){t.value=l}function r(l){let i,u;switch(e.label){case"HEX":u=Do(l),u&&e.onUpdateValue(l),t.value=n();break;case"H":i=Mo(l),i===!1?t.value=n():e.onUpdateValue(i);break;case"S":case"L":case"V":i=Ro(l),i===!1?t.value=n():e.onUpdateValue(i);break;case"A":i=Io(l),i===!1?t.value=n():e.onUpdateValue(i);break;case"R":case"G":case"B":i=Ao(l),i===!1?t.value=n():e.onUpdateValue(i);break}}return{mergedTheme:o,inputValue:t,handleInputChange:r,handleInputUpdateValue:a}},render(){const{mergedTheme:e}=this;return c(Dt,{size:"small",placeholder:this.label,theme:e.peers.Input,themeOverrides:e.peerOverrides.Input,builtinThemeOverrides:Po,value:this.inputValue,onUpdateValue:this.handleInputUpdateValue,onChange:this.handleInputChange,style:this.label==="A"?"flex-grow: 1.25;":""})}}),Vo=_({name:"ColorInput",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},modes:{type:Array,required:!0},showAlpha:{type:Boolean,required:!0},value:{type:String,default:null},valueArr:{type:Array,default:null},onUpdateValue:{type:Function,required:!0},onUpdateMode:{type:Function,required:!0}},setup(e){return{handleUnitUpdateValue(t,o){const{showAlpha:n}=e;if(e.mode==="hex"){e.onUpdateValue((n?Q:ye)(o));return}let a;switch(e.valueArr===null?a=[0,0,0,0]:a=Array.from(e.valueArr),e.mode){case"hsv":a[t]=o,e.onUpdateValue((n?re:qe)(a));break;case"rgb":a[t]=o,e.onUpdateValue((n?K:Le)(a));break;case"hsl":a[t]=o,e.onUpdateValue((n?ee:Fe)(a));break}}}},render(){const{clsPrefix:e,modes:t}=this;return c("div",{class:`${e}-color-picker-input`},c("div",{class:`${e}-color-picker-input__mode`,onClick:this.onUpdateMode,style:{cursor:t.length===1?"":"pointer"}},this.mode.toUpperCase()+(this.showAlpha?"A":"")),c(It,null,{default:()=>{const{mode:o,valueArr:n,showAlpha:a}=this;if(o==="hex"){let r=null;try{r=n===null?null:(a?Q:ye)(n)}catch{}return c(ot,{label:"HEX",showAlpha:a,value:r,onUpdateValue:l=>{this.handleUnitUpdateValue(0,l)}})}return(o+(a?"a":"")).split("").map((r,l)=>c(ot,{label:r.toUpperCase(),value:n===null?null:n[l],onUpdateValue:i=>{this.handleUnitUpdateValue(l,i)}}))}}))}}),To=_({name:"ColorPickerTrigger",props:{clsPrefix:{type:String,required:!0},value:{type:String,default:null},hsla:{type:Array,default:null},disabled:Boolean,onClick:Function},setup(e){const{colorPickerSlots:t,renderLabelRef:o}=at(Ge,null);return()=>{const{hsla:n,value:a,clsPrefix:r,onClick:l,disabled:i}=e,u=t.label||o.value;return c("div",{class:[`${r}-color-picker-trigger`,i&&`${r}-color-picker-trigger--disabled`],onClick:i?void 0:l},c("div",{class:`${r}-color-picker-trigger__fill`},c("div",{class:`${r}-color-picker-checkboard`}),c("div",{style:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:n?ee(n):""}}),a&&n?c("div",{class:`${r}-color-picker-trigger__value`,style:{color:n[2]>50||n[3]<.5?"black":"white"}},u?u(a):a):null))}}});function zo(e,t){if(t==="hsv"){const[o,n,a,r]=se(e);return K([...J(o,n,a),r])}return e}function Bo(e){const t=document.createElement("canvas").getContext("2d");return t?(t.fillStyle=e,t.fillStyle):"#000000"}const Ho=_({name:"ColorPickerSwatches",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},swatches:{type:Array,required:!0},onUpdateColor:{type:Function,required:!0}},setup(e){const t=p(()=>e.swatches.map(r=>{const l=ke(r);return{value:r,mode:l,legalValue:zo(r,l)}}));function o(r){const{mode:l}=e;let{value:i,mode:u}=r;return u||(u="hex",/^[a-zA-Z]+$/.test(i)?i=Bo(i):(Pt("color-picker",`color ${i} in swatches is invalid.`),i="#000000")),u===l?i:pt(i,l,u)}function n(r){e.onUpdateColor(o(r))}function a(r,l){r.key==="Enter"&&n(l)}return{parsedSwatchesRef:t,handleSwatchSelect:n,handleSwatchKeyDown:a}},render(){const{clsPrefix:e}=this;return c("div",{class:`${e}-color-picker-swatches`},this.parsedSwatchesRef.map(t=>c("div",{class:`${e}-color-picker-swatch`,tabindex:0,onClick:()=>{this.handleSwatchSelect(t)},onKeydown:o=>{this.handleSwatchKeyDown(o,t)}},c("div",{class:`${e}-color-picker-swatch__fill`,style:{background:t.legalValue}}))))}}),Fo=_({name:"ColorPreview",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},color:{type:String,default:null,validator:e=>{const t=ke(e);return!!(!e||t&&t!=="hsv")}},onUpdateColor:{type:Function,required:!0}},setup(e){function t(o){var n;const a=o.target.value;(n=e.onUpdateColor)===null||n===void 0||n.call(e,pt(a.toUpperCase(),e.mode,"hex")),o.stopPropagation()}return{handleChange:t}},render(){const{clsPrefix:e}=this;return c("div",{class:`${e}-color-picker-preview__preview`},c("span",{class:`${e}-color-picker-preview__fill`,style:{background:this.color||"#000000"}}),c("input",{class:`${e}-color-picker-preview__input`,type:"color",value:this.color,onChange:this.handleChange}))}}),Lo=pe([S("color-picker",`
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
 `,[Vt(),S("input",`
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
 `,[Je("shadowed",`
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
 `)])])])])]),qo=Object.assign(Object.assign({},st.props),{value:String,show:{type:Boolean,default:void 0},defaultShow:Boolean,defaultValue:String,modes:{type:Array,default:()=>["rgb","hex","hsl"]},placement:{type:String,default:"bottom-start"},to:Ne.propTo,showAlpha:{type:Boolean,default:!0},showPreview:Boolean,swatches:Array,disabled:{type:Boolean,default:void 0},actions:{type:Array,default:null},internalActions:Array,size:String,renderLabel:Function,onComplete:Function,onConfirm:Function,onClear:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),No=_({name:"ColorPicker",props:qo,setup(e,{slots:t}){const o=M(null);let n=null;const a=Tt(e),{mergedSizeRef:r,mergedDisabledRef:l}=a,{localeRef:i}=zt("global"),{mergedClsPrefixRef:u,namespaceRef:v,inlineThemeDisabled:k}=Bt(e),C=st("ColorPicker","-color-picker",Lo,Ht,e,u);Ft(Ge,{themeRef:C,renderLabelRef:He(e,"renderLabel"),colorPickerSlots:t});const z=M(e.defaultShow),g=Qe(He(e,"show"),z);function q(s){const{onUpdateShow:d,"onUpdate:show":b}=e;d&&Se(d,s),b&&Se(b,s),z.value=s}const{defaultValue:le}=e,we=M(le===void 0?go(e.modes,e.showAlpha):le),I=Qe(He(e,"value"),we),ie=M([I.value]),O=M(0),Pe=p(()=>ke(I.value)),{modes:ht}=e,N=M(ke(I.value)||ht[0]||"rgb");function ft(){const{modes:s}=e,{value:d}=N,b=s.findIndex(x=>x===d);~b?N.value=s[(b+1)%s.length]:N.value="rgb"}let B,H,ce,ue,X,Z,G,F;const me=p(()=>{const{value:s}=I;if(!s)return null;switch(Pe.value){case"hsv":return se(s);case"hsl":return[B,H,ce,F]=_e(s),[...dt(B,H,ce),F];case"rgb":case"hex":return[X,Z,G,F]=W(s),[...Ee(X,Z,G),F]}}),te=p(()=>{const{value:s}=I;if(!s)return null;switch(Pe.value){case"rgb":case"hex":return W(s);case"hsv":return[B,H,ue,F]=se(s),[...J(B,H,ue),F];case"hsl":return[B,H,ce,F]=_e(s),[...je(B,H,ce),F]}}),Ve=p(()=>{const{value:s}=I;if(!s)return null;switch(Pe.value){case"hsl":return _e(s);case"hsv":return[B,H,ue,F]=se(s),[...Me(B,H,ue),F];case"rgb":case"hex":return[X,Z,G,F]=W(s),[...Oe(X,Z,G),F]}}),_t=p(()=>{switch(N.value){case"rgb":case"hex":return te.value;case"hsv":return me.value;case"hsl":return Ve.value}}),Ce=M(0),Te=M(1),ze=M([0,0]);function vt(s,d){const{value:b}=me,x=Ce.value,y=b?b[3]:1;ze.value=[s,d];const{showAlpha:m}=e;switch(N.value){case"hsv":w((m?re:qe)([x,s,d,y]),"cursor");break;case"hsl":w((m?ee:Fe)([...Me(x,s,d),y]),"cursor");break;case"rgb":w((m?K:Le)([...J(x,s,d),y]),"cursor");break;case"hex":w((m?Q:ye)([...J(x,s,d),y]),"cursor");break}}function gt(s){Ce.value=s;const{value:d}=me;if(!d)return;const[,b,x,y]=d,{showAlpha:m}=e;switch(N.value){case"hsv":w((m?re:qe)([s,b,x,y]),"cursor");break;case"rgb":w((m?K:Le)([...J(s,b,x),y]),"cursor");break;case"hex":w((m?Q:ye)([...J(s,b,x),y]),"cursor");break;case"hsl":w((m?ee:Fe)([...Me(s,b,x),y]),"cursor");break}}function mt(s){switch(N.value){case"hsv":[B,H,ue]=me.value,w(re([B,H,ue,s]),"cursor");break;case"rgb":[X,Z,G]=te.value,w(K([X,Z,G,s]),"cursor");break;case"hex":[X,Z,G]=te.value,w(Q([X,Z,G,s]),"cursor");break;case"hsl":[B,H,ce]=Ve.value,w(ee([B,H,ce,s]),"cursor");break}Te.value=s}function w(s,d){d==="cursor"?n=s:n=null;const{nTriggerFormChange:b,nTriggerFormInput:x}=a,{onUpdateValue:y,"onUpdate:value":m}=e;y&&Se(y,s),m&&Se(m,s),b(),x(),we.value=s}function bt(s){w(s,"input"),it(de)}function de(s=!0){const{value:d}=I;if(d){const{nTriggerFormChange:b,nTriggerFormInput:x}=a,{onComplete:y}=e;y&&y(d);const{value:m}=ie,{value:P}=O;s&&(m.splice(P+1,m.length,d),O.value=P+1),b(),x()}}function xt(){const{value:s}=O;s-1<0||(w(ie.value[s-1],"input"),de(!1),O.value=s-1)}function yt(){const{value:s}=O;s<0||s+1>=ie.value.length||(w(ie.value[s+1],"input"),de(!1),O.value=s+1)}function kt(){w(null,"input");const{onClear:s}=e;s&&s(),q(!1)}function wt(){const{value:s}=I,{onConfirm:d}=e;d&&d(s),q(!1)}const Ct=p(()=>O.value>=1),St=p(()=>{const{value:s}=ie;return s.length>1&&O.value<s.length-1});lt(g,s=>{s||(ie.value=[I.value],O.value=0)}),rt(()=>{if(!(n&&n===I.value)){const{value:s}=me;s&&(Ce.value=s[0],Te.value=s[3],ze.value=[s[1],s[2]])}n=null});const Be=p(()=>{const{value:s}=r,{common:{cubicBezierEaseInOut:d},self:{textColor:b,color:x,panelFontSize:y,boxShadow:m,border:P,borderRadius:A,dividerColor:oe,[et("height",s)]:Ut,[et("fontSize",s)]:At}}=C.value;return{"--n-bezier":d,"--n-text-color":b,"--n-color":x,"--n-panel-font-size":y,"--n-font-size":At,"--n-box-shadow":m,"--n-border":P,"--n-border-radius":A,"--n-height":Ut,"--n-divider-color":oe}}),j=k?Lt("color-picker",p(()=>r.value[0]),Be,e):void 0;function $t(){var s;const{value:d}=te,{value:b}=Ce,{internalActions:x,modes:y,actions:m}=e,{value:P}=C,{value:A}=u;return c("div",{class:[`${A}-color-picker-panel`,j==null?void 0:j.themeClass.value],onDragstart:oe=>{oe.preventDefault()},style:k?void 0:Be.value},c("div",{class:`${A}-color-picker-control`},c(Uo,{clsPrefix:A,rgba:d,displayedHue:b,displayedSv:ze.value,onUpdateSV:vt,onComplete:de}),c("div",{class:`${A}-color-picker-preview`},c("div",{class:`${A}-color-picker-preview__sliders`},c(Co,{clsPrefix:A,hue:b,onUpdateHue:gt,onComplete:de}),e.showAlpha?c($o,{clsPrefix:A,rgba:d,alpha:Te.value,onUpdateAlpha:mt,onComplete:de}):null),e.showPreview?c(Fo,{clsPrefix:A,mode:N.value,color:te.value&&ye(te.value),onUpdateColor:oe=>{w(oe,"input")}}):null),c(Vo,{clsPrefix:A,showAlpha:e.showAlpha,mode:N.value,modes:y,onUpdateMode:ft,value:I.value,valueArr:_t.value,onUpdateValue:bt}),((s=e.swatches)===null||s===void 0?void 0:s.length)&&c(Ho,{clsPrefix:A,mode:N.value,swatches:e.swatches,onUpdateColor:oe=>{w(oe,"input")}})),m!=null&&m.length?c("div",{class:`${A}-color-picker-action`},m.includes("confirm")&&c($e,{size:"small",onClick:wt,theme:P.peers.Button,themeOverrides:P.peerOverrides.Button},{default:()=>i.value.confirm}),m.includes("clear")&&c($e,{size:"small",onClick:kt,disabled:!I.value,theme:P.peers.Button,themeOverrides:P.peerOverrides.Button},{default:()=>i.value.clear})):null,t.action?c("div",{class:`${A}-color-picker-action`},{default:t.action}):x?c("div",{class:`${A}-color-picker-action`},x.includes("undo")&&c($e,{size:"small",onClick:xt,disabled:!Ct.value,theme:P.peers.Button,themeOverrides:P.peerOverrides.Button},{default:()=>i.value.undo}),x.includes("redo")&&c($e,{size:"small",onClick:yt,disabled:!St.value,theme:P.peers.Button,themeOverrides:P.peerOverrides.Button},{default:()=>i.value.redo})):null)}return{mergedClsPrefix:u,namespace:v,selfRef:o,hsla:Ve,rgba:te,mergedShow:g,mergedDisabled:l,isMounted:qt(),adjustedTo:Ne(e),mergedValue:I,handleTriggerClick(){q(!0)},handleClickOutside(s){var d;!((d=o.value)===null||d===void 0)&&d.contains(Nt(s))||q(!1)},renderPanel:$t,cssVars:k?void 0:Be,themeClass:j==null?void 0:j.themeClass,onRender:j==null?void 0:j.onRender}},render(){const{$slots:e,mergedClsPrefix:t,onRender:o}=this;return o==null||o(),c("div",{class:[this.themeClass,`${t}-color-picker`],ref:"selfRef",style:this.cssVars},c(Et,null,{default:()=>[c(Ot,null,{default:()=>c(To,{clsPrefix:t,value:this.mergedValue,hsla:this.hsla,disabled:this.mergedDisabled,onClick:this.handleTriggerClick},{label:e.label})}),c(jt,{placement:this.placement,show:this.mergedShow,containerClass:this.namespace,teleportDisabled:this.adjustedTo===Ne.tdkey,to:this.adjustedTo},{default:()=>c(Wt,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>this.mergedShow?Kt(this.renderPanel(),[[Xt,this.handleClickOutside,void 0,{capture:!0}]]):null})})]}))}}),Eo={class:"layout_content"},Oo=_({__name:"index",setup(e){return(t,o)=>(h(),U("div",Eo,[f(Mt)]))}});const jo=D(Oo,[["__scopeId","data-v-3919c239"]]);function Ie(){const e=Zt();return{getSiderCollapse:p(()=>e.getAppLocalConfig.siderCollapse)}}const Wo={class:"flex-center py-12px text-16px c-base"},Ko="line-md:menu-fold-left",Xo="line-md:menu-fold-right",Zo=_({__name:"MenuCollapse",setup(e){const t=We(),{getSiderCollapse:o}=Ie(),{setAppLocalConfig:n}=t,a=p(()=>o.value);return(r,l)=>(h(),U("div",{class:"collpase-wrapper",onClick:l[0]||(l[0]=i=>$(n)({siderCollapse:!a.value}))},[V("div",Wo,[a.value?(h(),T(E,{key:1,icon:Xo})):(h(),T(E,{key:0,icon:Ko}))])]))}});const Go=D(Zo,[["__scopeId","data-v-314cd4ae"]]),Yo={class:"identity"},Jo={style:{"padding-left":"8px"}},Qo=_({__name:"UserIdentity",setup(e){const t=Gt(),{iconRender:o}=Yt(),n=[{label:"退出登录",key:"logout",icon:o({icon:"humbleicons:logout"})}];function a(l){l==="logout"&&r()}function r(){t.logout()}return(l,i)=>{const u=Xe;return h(),T(u,{options:n,onSelect:a},{default:R(()=>[V("div",Yo,[f(E,{icon:"mdi:user-circle-outline",style:{"font-size":"20px"}}),V("span",Jo,Ke($(t).userInfo.username),1)])]),_:1})}}});const en=D(Qo,[["__scopeId","data-v-e4db6b8f"]]),tn=_({__name:"ConfigButton",setup(e){const t=We();return(o,n)=>{const a=Jt;return h(),T(a,{trigger:"hover"},{trigger:R(()=>[V("div",{class:"setting_button c-base cursor-pointer",onClick:n[0]||(n[0]=(...r)=>$(t).toggleConfigDrawerVisible&&$(t).toggleConfigDrawerVisible(...r))},[f(E,{icon:"material-symbols:settings-rounded"})])]),default:R(()=>[fe(" 主题配置 ")]),_:1})}}});const on=D(tn,[["__scopeId","data-v-dabac78e"]]),nn=_({__name:"ColorSchemeToggle",setup(e){const t=Qt();return(o,n)=>(h(),U("div",{onClick:n[0]||(n[0]=(...a)=>$(t).toggleDark&&$(t).toggleDark(...a)),class:"cursor-pointer px-12px border-rd-4px flex-center hover:bg-active c-base text-18px"},[f(E,{icon:$(t).themeColorMode==="light"?"ph-sun-dim-duotone":"ph:moon-duotone"},null,8,["icon"])]))}}),an={class:"docs_button c-base cursor-pointer"},rn=_({__name:"LinksDropDown",setup(e){const t=[{label:"文档地址",key:"docs",props:{onClick:()=>{window.open("https://linzheng99.github.io/tob-docs-site/")}}}];return(o,n)=>{const a=Xe;return h(),T(a,{trigger:"hover",options:t},{default:R(()=>[V("div",an,[f(E,{icon:"f7:link-circle"})])]),_:1})}}});const sn=D(rn,[["__scopeId","data-v-d54b9c1a"]]),ln={class:"user_actions"},cn=_({__name:"UserActions",setup(e){return(t,o)=>(h(),U("div",ln,[f(sn),f(on),f(nn),f(en)]))}});const un=D(cn,[["__scopeId","data-v-062f99f2"]]),dn={class:"layout_header-wrapper bg-base"},pn=_({__name:"index",setup(e){return(t,o)=>(h(),U("div",dn,[f(Go),f(un)]))}});const hn=D(pn,[["__scopeId","data-v-627d7d87"]]),fn={class:"tab-wrapper c-base"},_n=_({__name:"Tab",props:{info:{},activeTab:{},showClose:{type:Boolean}},emits:["go","close"],setup(e,{emit:t}){const o=De();function n(l){t("go",l)}function a(l){t("close",l)}function r(l,i){if(l===i)return{border:`1px solid ${o.themeColor}`}}return(l,i)=>(h(),U("div",fn,[V("div",{class:"tab-content gap-1",style:Y(r(l.info.fullPath,l.activeTab)),onClick:i[1]||(i[1]=u=>n(l.info.fullPath))},[V("span",null,Ke(l.info.title),1),l.showClose?(h(),T(E,{key:0,icon:"ep:close-bold",onClick:i[0]||(i[0]=eo(u=>a(l.info),["stop"]))})):Ze("",!0)],4)]))}});const vn=D(_n,[["__scopeId","data-v-c085ec29"]]),gn=_({__name:"TabContextMenu",props:{visible:{type:Boolean,default:!1},x:{},y:{},currentPath:{}},emits:["update:visible"],setup(e,{emit:t}){const o=e,n=nt(),a=p({get(){return o.visible},set(v){t("update:visible",v)}}),r=[{label:"重新加载",key:"reload-page"}],l=new Map([["reload-page",()=>n.reloadPage(o.currentPath)]]);function i(){a.value=!1}function u(v){i();const k=l.get(v);k&&k()}return(v,k)=>{const C=Xe;return h(),T(C,{placement:"bottom-start",trigger:"manual",x:v.x,y:v.y,options:r,show:a.value,"on-clickoutside":i,onSelect:u},null,8,["x","y","show"])}}});function mn(e,t){return e.findIndex(o=>o.title===t)}const Ye=(e=!0)=>{const t=e?to():oo;function o(n,a=!1){if(a){const r=t.resolve(n);window.open(r.href,"_blank")}else t.push(n)}return{routerPush:o}},bn=no({id:"app-tabs",state:()=>({tabs:[],activeTab:""}),getters:{getTabs(){return this.tabs},getActiveTab(){return this.activeTab}},actions:{setTabs(e){this.tabs=e},addTabs(e){mn(this.tabs,this.activeTab)===-1&&this.tabs.push(e)},setActiveTab(e){this.activeTab=e},deleteTab(e){const{routerPush:t}=Ye(!1),o=this.tabs.filter(a=>a.fullPath!==e.fullPath);if(this.tabs=o,this.activeTab===e.title){const a=this.tabs[this.tabs.length-1];this.setActiveTab(a.title),t(a.fullPath)}}}});function xn(){return bn(ao)}const yn={class:"layout_tab-wrapper"},kn=_({__name:"index",setup(e){const t=ct(),o=xn(),n=nt(),{routerPush:a}=Ye(),r=p(()=>o.getTabs),l=p(()=>t.fullPath),i=p(()=>o.getTabs.length>1),u=ro({visible:!1,x:0,y:0,currentPath:""});function v(g,q){g.preventDefault(),k(!1),u.currentPath=q,it().then(()=>{tt(u,{visible:!0,x:g.clientX,y:g.clientY})})}function k(g){tt(u,{visible:g})}function C(g){a(g)}function z(g){o.deleteTab(g),n.removeCacheRoute(g.name)}return lt(()=>t.fullPath,()=>{o.setActiveTab(t.meta.title),o.addTabs({fullPath:t.fullPath,title:t.meta.title,name:t.name}),n.addCacheRoute(t.name)},{immediate:!0}),(g,q)=>(h(),U(Re,null,[V("div",yn,[(h(!0),U(Re,null,ut(r.value,le=>(h(),T(vn,{key:le.fullPath,info:le,"active-tab":l.value,"show-close":i.value,onGo:C,onClose:z,onContextmenu:we=>v(we,le.name)},null,8,["info","active-tab","show-close","onContextmenu"]))),128))]),f(gn,{visible:u.visible,x:u.x,y:u.y,"current-path":u.currentPath,"onUpdate:visible":k},null,8,["visible","x","y","current-path"])],64))}});const wn=D(kn,[["__scopeId","data-v-9906eb4b"]]),Cn={class:"sider_logo"},Sn={key:0,class:"sider_logo-unfold"},$n={key:1},Un=_({__name:"SiderLogo",setup(e){const{getSiderCollapse:t}=Ie(),o=De(),{name:n}=so(),a=p(()=>t.value),r=p(()=>o.themeColor);return(l,i)=>(h(),U("div",Cn,[a.value?(h(),U("div",$n,[f(E,{"local-icon":"logo",color:r.value,"font-size":"28"},null,8,["color"])])):(h(),U("div",Sn,[f(E,{"local-icon":"logo",color:r.value,"font-size":"28"},null,8,["color"]),V("span",{class:"sider_logo-name",style:Y({color:r.value})},Ke($(n)),5)]))]))}});const An=D(Un,[["__scopeId","data-v-3455ec33"]]),Mn=_({__name:"SiderMenu",setup(e){const o=lo().getBackMenuList,n=ct(),{routerPush:a}=Ye(),{getSiderCollapse:r}=Ie(),l=p(()=>r.value),i=io(o),u=p(()=>n.name);function v(k,C){a(C.routePath)}return(k,C)=>{const z=co;return h(),T(z,{value:u.value,collapsed:l.value,"collapsed-width":64,"collapsed-icon-size":22,options:$(i),"onUpdate:value":v},null,8,["value","collapsed","options"])}}}),Rn={class:"layout_sider-wrapper"},Dn=_({__name:"index",setup(e){return(t,o)=>(h(),U("div",Rn,[f(An),f(Mn)]))}});const In=D(Dn,[["__scopeId","data-v-bf2af4b6"]]),Pn={class:"default-wrapper"},Vn=_({__name:"index",props:{siderCollapes:{type:Boolean},footerVisible:{type:Boolean,default:!1}},setup(e){const t=e,o=De(),n=`${o.getSiderDefaultWidth}px`,a=`${o.getSiderMinWidth}px`,r=p(()=>t.siderCollapes?a:n),l=`${o.getHeaderHeight}px`,i=`${o.getTabHeight}px`,u=p(()=>({width:t.siderCollapes?a:n})),v=p(()=>({"padding-left":`${r.value}`,height:l})),k=p(()=>({"padding-left":`${r.value}`,top:l,height:i})),C=p(()=>({"padding-left":`${r.value}`,"padding-top":`${o.getHeaderHeight+o.getTabHeight}px`})),z=p(()=>({"padding-left":`${r.value}`}));return(g,q)=>(h(),U("div",Pn,[V("header",{class:"default-header",style:Y(v.value)},[be(g.$slots,"header",{},()=>[fe(" header ")],!0)],4),V("div",{class:"default-tab",style:Y(k.value)},[be(g.$slots,"tab",{},()=>[fe(" tab ")],!0)],4),V("aside",{class:"default-sider",style:Y(u.value)},[be(g.$slots,"sider",{},()=>[fe(" sider ")],!0)],4),V("main",{class:"default-content",style:Y(C.value)},[be(g.$slots,"default",{},void 0,!0)],4),g.footerVisible?(h(),U("footer",{key:0,class:"default-footer",style:Y(z.value)},[be(g.$slots,"footer",{},()=>[fe(" footer ")],!0)],4)):Ze("",!0)]))}});const Tn=D(Vn,[["__scopeId","data-v-025f801c"]]),zn=_({__name:"ColorCheckBox",props:{color:{},checked:{type:Boolean},iconSize:{default:"20px"}},setup(e){const t=e,o=["#ffffff","#fff","rgb(255,255,255)"],n=p(()=>o.includes(t.color));return(a,r)=>(h(),U("div",{class:"color_check_box",style:Y({background:a.color})},[a.checked?(h(),T(E,{key:0,icon:"material-symbols:check-small",color:n.value?"black":"white","font-size":a.iconSize},null,8,["color","font-size"])):Ze("",!0)],4))}});const Bn=D(zn,[["__scopeId","data-v-6fb7ebfd"]]),Hn=_({__name:"index",setup(e){const t=De();return(o,n)=>{const a=uo,r=fo,l=po,i=No,u=ho;return h(),U(Re,null,[f(a,null,{default:R(()=>[fe(" 系统主题 ")]),_:1}),f(l,{"x-gap":8,"y-gap":12,cols:8},{default:R(()=>[(h(!0),U(Re,null,ut($(t).themeColorList,(v,k)=>(h(),T(r,{key:k,class:"color_check_box_wrapper"},{default:R(()=>[f($(Bn),{color:v,checked:v===$(t).themeColor,onClick:C=>$(t).setThemeColor(v)},null,8,["color","checked","onClick"])]),_:2},1024))),128))]),_:1}),f(u,{vertical:!0,class:"color_picker"},{default:R(()=>[f(i,{value:$(t).themeColor,"show-alpha":!1,onUpdateValue:$(t).setThemeColor},null,8,["value","onUpdateValue"])]),_:1})],64)}}});const Fn=D(Hn,[["__scopeId","data-v-f5920f63"]]),Ln=_({__name:"index",setup(e){const t=We(),o=M("right");return(n,a)=>{const r=_o,l=vo;return h(),T(l,{show:$(t).configDrawerVisible,width:330,placement:o.value,onMaskClick:$(t).toggleConfigDrawerVisible},{default:R(()=>[f(r,{title:"主题配置"},{default:R(()=>[f(Fn)]),_:1})]),_:1},8,["show","placement","onMaskClick"])}}}),En=_({__name:"index",setup(e){const{getSiderCollapse:t}=Ie(),o=p(()=>t.value);return(n,a)=>(h(),T(Tn,{"sider-collapes":o.value},{sider:R(()=>[f(In)]),header:R(()=>[f(hn)]),tab:R(()=>[f(wn)]),default:R(()=>[f(jo),f(Ln)]),_:1},8,["sider-collapes"]))}});export{En as default};
