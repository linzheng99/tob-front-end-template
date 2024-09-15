import{u as _,F as v}from"./useForm-60c9b58b.js";import{M as R}from"./index-9b819191.js";import{e as N,f as l,j as P,J as F,aX as I,ar as x,Y as A,a4 as M,a8 as k,$ as q,a5 as C,aY as U,aZ as S}from"./index-7b7dfb38.js";import{g as B}from"./index-3265f94d.js";import{m as V}from"./index-12bc85db.js";const Z=N({__name:"HandleUserModal",props:{type:{},id:{}},emits:["success"],setup(n,{expose:i,emit:p}){const o=n,c=p,a=l(!1),d=l(),m=P(()=>o.type==="edit"?"编辑用户":"新增用户"),s=l([{field:"username",component:"NInput",label:"用户名",componentProps:{placeholder:"请输入用户名"},rules:[{required:!0,message:"请输入用户名",trigger:["blur"]}]},{field:"password",component:"NInput",label:"密码",componentProps:{placeholder:"请输入密码",type:"password"},rules:[{required:!0,message:"请输入密码",trigger:["blur"]}]},{field:"nickName",component:"NInput",label:"昵称",componentProps:{placeholder:"请输入昵称"},rules:[{required:!0,message:"请输入昵称",trigger:["blur"]}]},{field:"email",component:"NInput",label:"邮箱",componentProps:{placeholder:"请输入邮箱"}},{field:"roleIds",component:"NSelect",label:"角色",componentProps:{placeholder:"请选择角色",options:[],labelField:"name",valueField:"id",multiple:!0},rules:[{type:"array",required:!0,message:"请选择角色",trigger:["blur"]}]}]),[u,{setFieldsValue:f,setProps:g,validate:w}]=_({schemas:s.value});F(()=>a.value,async e=>{if(e&&(await b(),o.id)){const t=await I(o.id);g({schemas:s.value.filter(y=>y.field!=="password")}),f(t)}});async function h(e){await w();try{o.type==="edit"?o.id&&await U(o.id,e):await S({...e,password:V(e.password)}),r(),c("success")}catch(t){console.error("捕获到的错误:",t)}}async function b(){const e=await B();x(s.value[4].componentProps||{},{options:e})}function r(){a.value=!a.value}return i({toggleModal:r}),(e,t)=>(A(),M(R,{ref_key:"modalRef",ref:d,title:m.value,footer:!1,show:a.value,onCancel:r},{default:k(()=>[q(v,{onRegister:C(u),onSubmit:h},null,8,["onRegister"])]),_:1},8,["title","show"]))}});export{Z as _};
