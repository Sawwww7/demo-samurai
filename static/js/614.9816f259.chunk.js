"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[614],{5069:(s,e,t)=>{t.r(e),t.d(e,{default:()=>y});var r=t(5043);const o="ProfileInfo_descriptionBlock__gR0pP",n="ProfileInfo_mainPhoto__zy2Zi",i="ProfileInfo_item__8XQEw",l=t.p+"static/media/sky.de6c18d39336d2725051.png",a=t.p+"static/media/pngegg.6ed1cc617c3152d99307.png";var d=t(680),c=t(579);const u=s=>{let[e,t]=(0,r.useState)(!1),[o,n]=(0,r.useState)(s.status);(0,r.useEffect)((()=>{n(s.status)}),[s.status]);return(0,c.jsxs)("div",{children:[!e&&(0,c.jsx)("div",{children:(0,c.jsx)("span",{onDoubleClick:()=>{t(!0)},children:s.status||"status missing"})}),e&&(0,c.jsx)("div",{children:(0,c.jsx)("input",{onChange:s=>{n(s.currentTarget.value)},autoFocus:!0,onBlur:()=>{t(!1),s.updateStatus(o)},value:o})})]})},m=s=>{let{profile:e,status:t,updateStatus:r,isOwner:m}=s;return e?(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{className:i,children:(0,c.jsx)("img",{alt:"phon",src:l})}),(0,c.jsxs)("div",{className:o,children:[(0,c.jsx)("div",{children:e.userId}),(0,c.jsxs)("div",{children:[(0,c.jsx)("img",{className:n,alt:"photos",src:null!=e.photos.large?e.photos.large:a}),m&&(0,c.jsx)("input",{type:"file"})]}),(0,c.jsx)(u,{status:t,updateStatus:r}),(0,c.jsx)("div",{children:e.fullName}),(0,c.jsx)("div",{children:e.aboutMe}),(0,c.jsx)("div",{children:e.lookingForAJobDescription}),(0,c.jsx)("div",{children:e.contacts.instagram}),(0,c.jsx)("div",{children:e.contacts.facebook}),(0,c.jsx)("div",{children:e.contacts.twitter})]})]}):(0,c.jsx)(d.A,{})},p="MyPosts_postsBlok__JamY8",x="MyPosts_posts__kAE7S",h="Post_item__kzAtf",j=t.p+"static/media/gerl.74511a67e244b96fb68e.png",v=s=>(0,c.jsxs)("div",{className:h,children:[(0,c.jsx)("img",{alt:"",src:j}),s.messege,(0,c.jsx)("div",{children:(0,c.jsx)("span",{children:s.likesCount})})]});var f=t(5963),g=t(3842),_=t(3170),P=t(6292);const k=(0,_.d)(10),b=r.memo((s=>{console.log("RENDER"),console.log(s);let e=s.posts.map((s=>(0,c.jsx)(v,{messege:s.messege,likesCount:s.likesCount})));return(0,c.jsxs)("div",{className:p,children:[(0,c.jsx)("h1",{children:"My posts"}),(0,c.jsx)(A,{onSubmit:e=>{s.addPost(e.newPostText)}}),(0,c.jsx)("div",{className:x,children:e})]})})),A=(0,g.A)({form:"ProfileAddNewPostForm"})((s=>(0,c.jsxs)("form",{onSubmit:s.handleSubmit,children:[(0,c.jsx)("div",{children:(0,c.jsx)(f.A,{placeholder:"Post message",name:"newPostText",component:P.TM,validate:[_.m,k]})}),(0,c.jsx)("button",{children:"Add post"}),(0,c.jsx)("button",{children:"Remove"})]}))),C=b;var S=t(5977);const w=(0,t(3003).Ng)((s=>({posts:s.profilePage.posts,newPostText:s.profilePage.newPostText})),(s=>({addPost:e=>{s((0,S.oL)(e))}})))(C),y=s=>(0,c.jsxs)("div",{children:[(0,c.jsx)(m,{isOwner:s.isOwner,profile:s.profile,status:s.status,updateStatus:s.updateStatus}),(0,c.jsx)(w,{})]})},6292:(s,e,t)=>{t.d(e,{Fv:()=>d,TM:()=>l,pd:()=>a});t(5043);var r=t(8304),o=t(5963),n=t(579);const i=s=>{let{input:e,meta:{touched:t,error:o},children:i}=s;const l=t&&o;return(0,n.jsxs)("div",{className:r.A.formControl+" "+(l?r.A.error:" "),children:[(0,n.jsx)("div",{children:i}),l&&(0,n.jsx)("span",{className:r.A.span,children:o})]})},l=s=>{const{input:e,meta:t,child:r,...o}=s;return(0,n.jsx)(i,{...s,children:(0,n.jsx)("textarea",{...e,...o})})},a=s=>{const{input:e,meta:t,child:r,...o}=s;return(0,n.jsx)(i,{...s,children:(0,n.jsx)("input",{...e,...o})})},d=function(s,e,t,r){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:" ";return(0,n.jsxs)("div",{children:[(0,n.jsx)(o.A,{placeholder:s,name:e,validate:t,component:r,...i})," ",l]})}},3170:(s,e,t)=>{t.d(e,{d:()=>o,m:()=>r});const r=s=>{if(!s)return"Field is required"},o=s=>e=>{if(e.length>s)return"Max length is ".concat(s," symbols")}},8304:(s,e,t)=>{t.d(e,{A:()=>r});const r={formControl:"FormsControls_formControl__Iy92m",error:"FormsControls_error__oOsiQ",formSummaryError:"FormsControls_formSummaryError__mxFBl"}}}]);
//# sourceMappingURL=614.9816f259.chunk.js.map