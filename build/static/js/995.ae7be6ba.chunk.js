"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[995],{17995:function(e,t,n){n.r(t),n.d(t,{default:function(){return z}});var i=n(1413),a=n(29439),s=n(63738),r=n(47619),o=n(69649),c=n(69099),l=n(65280),d=n(82294),m=n(61113),u=n(23132),f=n(81056),x=n(47313),h=n(22408),p=n(29466),v=n(97890),j=n(58970),Z=n(75627),y=n(62563),w=n(6473),g=n(38768),b=n(58631),N=n(4394),I=n(11290),k=n(19860),_=n(70492),S=n(46417);var C=function(e){var t=(0,h.v9)(b.dy),n=(0,h.I0)(),i=(0,Z.Gc)(),a=i.formState,s=i.watch,r=i.getValues,o=a.isValid,l=a.dirtyFields,d=s("id"),u=(0,k.Z)(),x=(0,v.s0)();return(0,S.jsxs)("div",{className:"flex flex-col sm:flex-row flex-1 w-full items-center justify-between space-y-8 sm:space-y-0 py-32 px-24 md:px-32",children:[(0,S.jsxs)("div",{className:"flex flex-col items-center sm:items-start space-y-8 sm:space-y-0 w-full sm:max-w-full min-w-0",children:[(0,S.jsx)(f.E.div,{initial:{x:20,opacity:0},animate:{x:0,opacity:1,transition:{delay:.3}},children:(0,S.jsxs)(m.Z,{className:"flex items-center sm:mb-12",component:p.rU,role:"button",to:"/contract/notifications",color:"inherit",children:[(0,S.jsx)(_.Z,{style:{color:"#f4b231"},size:20,children:"ltr"===u.direction?"heroicons-outline:arrow-sm-left":"heroicons-outline:arrow-sm-right"}),(0,S.jsx)("span",{className:"flex mx-4 font-medium",style:{color:"#f4b231"},children:"Notifications"})]})}),(0,S.jsx)("div",{className:"flex items-center max-w-full",children:(0,S.jsxs)(f.E.div,{className:"flex flex-col items-center sm:items-start min-w-0 mx-8 sm:mx-16",initial:{x:-20},animate:{x:0,transition:{delay:.3}},children:[(0,S.jsx)(m.Z,{className:"text-16 sm:text-20 truncate font-semibold",children:d||"New Notification"}),(0,S.jsx)(m.Z,{variant:"caption",className:"font-medium",children:"Notification Detail"})]})})]}),(0,S.jsxs)(f.E.div,{className:"flex",initial:{opacity:0,x:20},animate:{opacity:1,x:0,transition:{delay:.3}},children:[(0,S.jsx)(c.Z,{className:"whitespace-nowrap mx-4",variant:"contained",color:"secondary",onClick:function(){n((0,N.$n)({access_token:window.localStorage.getItem("access_token"),email:t.email,id:t.id,username:t.username,clientMessageId:r().id})).then((function(){x("/contract/notifications")}))},startIcon:(0,S.jsx)(_.Z,{className:"hidden sm:flex",children:"heroicons-outline:trash"}),children:"Remove"}),(0,S.jsx)(c.Z,{className:"whitespace-nowrap mx-4",variant:"contained",color:"secondary",disabled:j.Z.isEmpty(l)||!o,onClick:function(){r().id?n((0,N.UV)({data:r(),access_token:window.localStorage.getItem("access_token"),email:t.email,id:t.id,username:t.username})).then((function(){x("/contract/notifications")})):n((0,N.nz)({data:r(),access_token:window.localStorage.getItem("access_token"),email:t.email,id:t.id,username:t.username})).then((function(){x("/contract/notifications")}))},children:"Save"})]})]})},E=n(31427),V=n(41727);var q=function(e){var t=(0,Z.Gc)(),n=t.control,a=t.formState.errors;return(0,S.jsxs)("div",{children:[(0,S.jsx)(Z.Qr,{name:"message",control:n,defaultValue:"",render:function(e){var t,n=e.field;return(0,S.jsx)(E.Z,(0,i.Z)((0,i.Z)({},n),{},{className:"mt-8 mb-16",error:!!a.message,required:!0,helperText:null===a||void 0===a||null===(t=a.message)||void 0===t?void 0:t.message,label:"message",autoFocus:!0,id:"message",variant:"outlined",fullWidth:!0,InputProps:{startAdornment:(0,S.jsx)(V.Z,{position:"start",children:(0,S.jsx)(_.Z,{size:20,children:"heroicons-outline:annotation"})})}}))}}),(0,S.jsx)(Z.Qr,{name:"clientId",control:n,defaultValue:"",render:function(e){var t,n=e.field;return(0,S.jsx)(E.Z,(0,i.Z)((0,i.Z)({},n),{},{className:"mt-8 mb-16",error:!!a.clientId,required:!0,helperText:null===a||void 0===a||null===(t=a.clientId)||void 0===t?void 0:t.message,label:"client ID",id:"clientId",variant:"outlined",fullWidth:!0,InputProps:{startAdornment:(0,S.jsx)(V.Z,{position:"start",children:(0,S.jsx)(_.Z,{size:20,children:"heroicons-solid:user-circle"})})}}))}})]})},T=w.Ry().shape({message:w.Z_().required("You must enter the service title").min(1,"The service title must be at least 1 characters"),clientId:w.Rx().typeError("Must be a number").integer("enter a valid number").positive("enter a positive number").required("enter a number").min(1,"The client ID must be bigger than 0")});var z=(0,u.Z)("contract",I.Z)((function(e){var t=(0,h.I0)(),n=(0,h.v9)(N.rD),u=(0,g.Z)((function(e){return e.breakpoints.down("lg")})),w=(0,h.v9)(b.dy),I=(0,v.UO)(),k=I.clientMessageId,_=(0,x.useState)(0),E=(0,a.Z)(_,2),V=E[0],z=E[1],D=(0,x.useState)(!1),M=(0,a.Z)(D,2),R=M[0],U=M[1],F=(0,Z.cI)({mode:"onChange",defaultValues:{name:"",clientId:""},resolver:(0,y.X)(T)}),G=F.reset,P=F.watch,W=(F.control,F.onChange,F.formState,P());return(0,o.KW)((function(){"new"===k?t((0,N.$4)()):t((0,N.H$)({access_token:window.localStorage.getItem("access_token"),email:w.email,id:w.id,username:w.username,clientMessageId:k})).then((function(e){e.payload||U(!0)}))}),[t,I]),(0,x.useEffect)((function(){n&&G(n)}),[n,G]),(0,x.useEffect)((function(){return function(){t((0,N.qv)()),U(!1)}}),[t]),R?(0,S.jsxs)(f.E.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.1}},className:"flex flex-col flex-1 items-center justify-center h-full",children:[(0,S.jsx)(m.Z,{color:"text.secondary",variant:"h5",children:"There is no such Notification!"}),(0,S.jsx)(c.Z,{className:"mt-24",component:p.rU,variant:"outlined",to:"/contract/notifications",color:"inherit",children:"Go to notifications Page"})]}):j.Z.isEmpty(W)?(0,S.jsx)(s.Z,{}):(0,S.jsx)(Z.RV,(0,i.Z)((0,i.Z)({},F),{},{children:(0,S.jsx)(r.Z,{header:(0,S.jsx)(C,{}),content:(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(d.Z,{value:V,onChange:function(e,t){z(t)},indicatorColor:"secondary",textColor:"secondary",variant:"scrollable",scrollButtons:"auto",classes:{root:"w-full h-64 border-b-1"},children:(0,S.jsx)(l.Z,{className:"h-64",label:"Basic Info"})}),(0,S.jsx)("div",{className:"",children:(0,S.jsx)("div",{className:0!==V?"hidden":"p-16 sm:p-24 max-w-2xl",children:(0,S.jsx)(q,{})})})]}),scroll:u?"normal":"content"})}))}))}}]);