import{F as u}from"./index-44e95afe.js";import{f as l,aN as f,a5 as n,J as d,X as p,e as g,Y as w,Z as b,$ as h,a7 as _,a3 as F,a8 as c}from"./index-798afc94.js";import"./createPlaceholder-60112544.js";function v(r){const t={};return Object.keys(r).map(a=>t[a]=n(r[a])),t}function y(r){const t=l(null),a=l(!1);async function o(){const e=n(t);return e||console.error("No instance form"),await p(),e}function i(e){f(()=>{t.value=null,a.value=null}),!(n(a)&&e===n(t))&&(t.value=e,a.value=!0,d(()=>r,()=>{r&&e.setProps(v(r))},{immediate:!0,deep:!0}))}return[i,{setProps:async e=>{await(await o()).setProps(e)},getFieldsValue:()=>{var e;return(e=n(t))==null?void 0:e.getFieldsValue()},setFieldsValue:async e=>{await(await o()).setFieldsValue(e)},resetFields:async()=>{await(await o()).resetFields()},restoreValidation:async()=>{await(await o()).restoreValidation()},submit:async()=>(await o()).submit(),validate:async()=>(await o()).validate(),getFormSchema:async()=>(await o()).getFormSchema(),setLoading:async e=>{(await o()).setLoading(e)}}]}const P={id:"app_content"},R=g({__name:"index",setup(r){const[t]=y({schemas:a()});function a(){return[{field:"name",component:"NInput",label:"姓名",componentProps:{placeholder:"请输入姓名"},rules:[{required:!0,message:"请输入姓名",trigger:["blur"]}]},{field:"age",component:"NInput",label:"年龄",componentProps:{placeholder:"请输入姓名"}},{field:"address",component:"NInput",label:"地址",componentProps:{placeholder:"请输入姓名"},giProps:{span:2}},{field:"slot",label:"这里是插槽",slot:"statusSlot",showLabel:!0,giProps:{span:2}},{field:"makeSource",component:"RadioGroupComp",label:"来源",componentProps:{options:[{label:"网上",value:1},{label:"门店",value:2}]}}]}function o(i){}return(i,m)=>(w(),b("div",P,[h(n(u),{onRegister:n(t),onSubmit:o},{statusSlot:_(({model:e,field:s})=>[F("div",null," 内容:"+c(e)+" "+c(s),1)]),_:1},8,["onRegister"])]))}});export{R as default};
