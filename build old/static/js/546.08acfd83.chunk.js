"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[546],{33546:function(e,t,r){r.r(t),r.d(t,{default:function(){return Y}});var n=r(1413),i=r(29439),a=r(63738),s=r(47619),o=r(69649),l=r(69099),c=r(65280),d=r(82294),u=r(61113),m=r(23132),h=r(81056),x=r(47313),f=r(22408),p=r(29466),v=r(97890),j=r(58970),g=r(75627),b=r(62563),Z=r(6473),w=r(38768),y=r(58631),C=r(4808),N=r(69382),k=r(19860),I=r(70492),S=r(46417);var F=function(e){var t=(0,f.v9)(y.dy),r=(0,f.I0)(),n=(0,g.Gc)(),i=n.formState,a=n.watch,s=n.getValues,o=i.isValid,c=i.dirtyFields,d=a("name"),m=(0,k.Z)(),x=(0,v.s0)();return(0,S.jsxs)("div",{className:"flex flex-col sm:flex-row flex-1 w-full items-center justify-between space-y-8 sm:space-y-0 py-32 px-24 md:px-32",children:[(0,S.jsxs)("div",{className:"flex flex-col items-center sm:items-start space-y-8 sm:space-y-0 w-full sm:max-w-full min-w-0",children:[(0,S.jsx)(h.E.div,{initial:{x:20,opacity:0},animate:{x:0,opacity:1,transition:{delay:.3}},children:(0,S.jsxs)(u.Z,{className:"flex items-center sm:mb-12",component:p.rU,role:"button",to:"/websiteConfiguration/careersSolicitudes",color:"inherit",children:[(0,S.jsx)(I.Z,{size:20,style:{color:"#f4b231"},children:"ltr"===m.direction?"heroicons-outline:arrow-sm-left":"heroicons-outline:arrow-sm-right"}),(0,S.jsx)("span",{className:"flex mx-4 font-medium",style:{color:"#f4b231"},children:"Solicitudes"})]})}),(0,S.jsx)("div",{className:"flex items-center max-w-full",children:(0,S.jsxs)(h.E.div,{className:"flex flex-col items-center sm:items-start min-w-0 mx-8 sm:mx-16",initial:{x:-20},animate:{x:0,transition:{delay:.3}},children:[(0,S.jsx)(u.Z,{className:"text-16 sm:text-20 truncate font-semibold",children:d||"New Solicitud"}),(0,S.jsx)(u.Z,{variant:"caption",className:"font-medium",children:"Solicitud Detail"})]})})]}),(0,S.jsxs)(h.E.div,{className:"flex",initial:{opacity:0,x:20},animate:{opacity:1,x:0,transition:{delay:.3}},children:[(0,S.jsx)(l.Z,{className:"whitespace-nowrap mx-4",variant:"contained",color:"secondary",onClick:function(){r((0,C.Rh)({access_token:window.localStorage.getItem("access_token"),email:t.email,id:t.id,username:t.username,userCareerId:s().id})).then((function(){x("/websiteConfiguration/careersSolicitudes")}))},startIcon:(0,S.jsx)(I.Z,{className:"hidden sm:flex",children:"heroicons-outline:trash"}),children:"Remove"}),(0,S.jsx)(l.Z,{className:"whitespace-nowrap mx-4",variant:"contained",color:"secondary",disabled:j.Z.isEmpty(c)||!o,onClick:function(){s().id?r((0,C.Ic)({data:s(),access_token:window.localStorage.getItem("access_token"),email:t.email,id:t.id,username:t.username})).then((function(){x("/websiteConfiguration/careersSolicitudes")})):r((0,C.o4)({data:s(),access_token:window.localStorage.getItem("access_token"),email:t.email,id:t.id,username:t.username})).then((function(){x("/websiteConfiguration/careersSolicitudes")}))},children:"Save"})]})]})},_=r(31427),z=r(41727),q=[{value:!0,label:"Checked"},{value:!1,label:"Unchecked"}];var V=function(e){var t=(0,g.Gc)(),r=t.control,i=t.formState.errors;return(0,S.jsxs)("div",{children:[(0,S.jsx)(g.Qr,{name:"name",control:r,defaultValue:"",render:function(e){var t,r=e.field;return(0,S.jsx)(_.Z,(0,n.Z)((0,n.Z)({},r),{},{className:"mt-8 mb-16",error:!!i.name,required:!0,helperText:null===i||void 0===i||null===(t=i.name)||void 0===t?void 0:t.message,label:"Name",autoFocus:!0,id:"name",variant:"outlined",placeholder:"Solicitud name",fullWidth:!0,InputProps:{startAdornment:(0,S.jsx)(z.Z,{position:"start",children:(0,S.jsx)(I.Z,{size:20,children:"heroicons-solid:user-circle"})})}}))}}),(0,S.jsx)(g.Qr,{name:"email",control:r,defaultValue:"",render:function(e){var t,r=e.field;return(0,S.jsx)(_.Z,(0,n.Z)((0,n.Z)({},r),{},{className:"mt-8 mb-16",id:"email",label:"email",type:"text",required:!0,placeholder:"user@example.com",error:!!i.email,helperText:null===i||void 0===i||null===(t=i.email)||void 0===t?void 0:t.message,variant:"outlined",fullWidth:!0,InputProps:{startAdornment:(0,S.jsx)(z.Z,{position:"start",children:(0,S.jsx)(I.Z,{size:20,children:"heroicons-outline:mail"})})}}))}}),(0,S.jsx)(g.Qr,{name:"career",control:r,defaultValue:"",render:function(e){var t,r=e.field;return(0,S.jsx)(_.Z,(0,n.Z)((0,n.Z)({},r),{},{className:"mt-8 mb-16",id:"career",label:"career",type:"text",required:!0,placeholder:"career position",error:!!i.career,helperText:null===i||void 0===i||null===(t=i.email)||void 0===t?void 0:t.career,variant:"outlined",fullWidth:!0,InputProps:{startAdornment:(0,S.jsx)(z.Z,{position:"start",children:(0,S.jsx)(I.Z,{size:20,children:"material-twotone:work"})})}}))}}),(0,S.jsx)(g.Qr,{name:"message",control:r,defaultValue:"",render:function(e){var t,r=e.field;return(0,S.jsx)(_.Z,(0,n.Z)((0,n.Z)({},r),{},{className:"mt-8 mb-16",id:"message",label:"message",type:"text",multiline:!0,minRows:5,placeholder:"...",error:!!i.message,helperText:null===i||void 0===i||null===(t=i.message)||void 0===t?void 0:t.message,variant:"outlined",fullWidth:!0,InputProps:{startAdornment:(0,S.jsx)(z.Z,{position:"start",children:(0,S.jsx)(I.Z,{size:20,children:"heroicons-outline:chat-alt-2"})})}}))}}),(0,S.jsx)(g.Qr,{control:r,name:"isChecked",render:function(e){var t,r=e.field;return(0,S.jsx)(_.Z,(0,n.Z)((0,n.Z)({},r),{},{label:"Is Checked",variant:"outlined",style:{width:"700px"},error:!!i.isChecked,helperText:null===i||void 0===i||null===(t=i.isChecked)||void 0===t?void 0:t.message,InputProps:{startAdornment:(0,S.jsx)(z.Z,{position:"start",children:(0,S.jsx)(I.Z,{size:20,children:"material-outline:edit_note"})})},id:"isChecked",select:!0,SelectProps:{native:!0},children:q.map((function(e){return(0,S.jsx)("option",{value:e.value,children:e.label},e.value)}))}))}})]})},P=r(15861),T=r(64687),U=r.n(T),E=r(69850),R=r(88564),W=r(17551),Q=r(9506),A=r(47131),O=(0,R.ZP)("div")((function(e){var t=e.theme;return{"& .productImageFeaturedStar":{position:"absolute",top:0,right:0,color:E.Z[400],opacity:0},"& .productImageUpload":{transitionProperty:"box-shadow",transitionDuration:t.transitions.duration.short,transitionTimingFunction:t.transitions.easing.easeInOut},"& .productImageItem":{transitionProperty:"box-shadow",transitionDuration:t.transitions.duration.short,transitionTimingFunction:t.transitions.easing.easeInOut,"&:hover":{"& .productImageFeaturedStar":{opacity:.8}},"&.featured":{pointerEvents:"none",boxShadow:t.shadows[3],"& .productImageFeaturedStar":{opacity:1},"&:hover .productImageFeaturedStar":{opacity:1}}}}}));var G=function(e){var t=(0,g.Gc)(),r=t.control,n=(t.watch,(0,x.useState)()),a=(0,i.Z)(n,2),s=(a[0],a[1]),o=function(){var e=(0,P.Z)(U().mark((function e(r){var n,i;return U().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=r.target.files[0]){e.next=3;break}return e.abrupt("return");case 3:i=URL.createObjectURL(n),s(i),t.setValue("cvFile",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,S.jsx)(O,{children:(0,S.jsx)("div",{className:"flex justify-center sm:justify-start flex-wrap -mx-16 ml-5 mt-10",children:(0,S.jsx)(g.Qr,{name:"cvFile",control:r,render:function(e){var t=e.field;return(0,S.jsx)(S.Fragment,{children:""!==t.value?(0,S.jsx)("div",{children:"string"==typeof t.value&&t.value.includes("uploads")?(0,S.jsx)("a",{href:"http://157.230.98.35/userCareer/".concat(t.value),target:"_blank",children:(0,S.jsxs)(Q.Z,{sx:{backgroundColor:function(e){return"light"===e.palette.mode?(0,W.$n)(e.palette.background.default,.4):(0,W.$n)(e.palette.background.default,.02)}},component:"label",style:{color:"#f4b231"},htmlFor:"cvFile",className:"productImageUpload flex items-center justify-center relative w-128 h-128 rounded-16 mx-12 mb-24 overflow-hidden cursor-pointer shadow hover:shadow-lg",children:["  ",(0,S.jsx)("div",{className:"absolute inset-0 flex items-center justify-center z-20",children:(0,S.jsx)("div",{children:(0,S.jsx)(A.Z,{onClick:function(){t.onChange("")},children:(0,S.jsx)(I.Z,{className:"text-white",children:"heroicons-outline:trash"})})})}),(0,S.jsx)("div",{style:{color:"#f4b231",padding:"40px",fontSize:"30px"},children:"CV"})]})}):(0,S.jsxs)(Q.Z,{sx:{borderWidth:4,borderStyle:"solid",borderColor:"#f4b231"},className:"productImageItem flex items-center justify-center relative  rounded-16 mx-12 mb-24 overflow-hidden cursor-pointer outline-none shadow hover:shadow-lg",children:[(0,S.jsx)("div",{className:"absolute inset-0 bg-black bg-opacity-10 z-10"}),(0,S.jsxs)("div",{className:"absolute inset-0 flex items-center justify-center z-20",children:[(0,S.jsx)("div",{children:(0,S.jsxs)("label",{htmlFor:"cvFile",className:"flex p-8 cursor-pointer",children:[(0,S.jsx)("input",{accept:"application/pdf",className:"hidden",id:"cvFile",type:"file",onChange:function(){var e=(0,P.Z)(U().mark((function e(r){return U().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.onChange(r),o(r);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),(0,S.jsx)(I.Z,{className:"text-white",children:"heroicons-outline:upload"})]})}),(0,S.jsx)("div",{children:(0,S.jsx)(A.Z,{onClick:function(){t.onChange("")},children:(0,S.jsx)(I.Z,{className:"text-white",children:"heroicons-outline:trash"})})})]}),(0,S.jsx)("div",{style:{color:"#f4b231",padding:"40px",fontSize:"30px"},children:"Uploaded"})]})}):(0,S.jsxs)(Q.Z,{sx:{borderWidth:4,borderStyle:"solid",borderColor:"#f4b231"},component:"label",htmlFor:"cvFile",className:"productImageUpload flex items-center justify-center relative w-128 h-128 rounded-16 mx-12 mb-24 overflow-hidden cursor-pointer shadow hover:shadow-lg",children:[(0,S.jsx)("input",{accept:"application/pdf",className:"hidden",id:"cvFile",type:"file",onChange:function(){var e=(0,P.Z)(U().mark((function e(r){return U().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.onChange(r),o(r);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),(0,S.jsx)(I.Z,{size:32,color:"action",style:{color:"#f4b231"},children:"heroicons-outline:upload"})]})})}})})})},D=Z.Ry().shape({name:Z.Z_().required("You must enter a solicitud name").min(3,"The solicitud name must be at least 3 characters"),email:Z.Z_().required("You must enter the email ").email("must be email format"),career:Z.Z_().required("You must enter and career").min(3,"The career must be at least 3 characters"),message:Z.Z_().when("message",(function(e,t){if(!((null===e||void 0===e?void 0:e.length)>0))return Z.Z_().notRequired();Z.Z_().required("message is required").min(3,"must be more than 3 characters")})),isChecked:Z.O7().required("")},[["message","message"]]);var Y=(0,m.Z)("websiteConfiguration",N.Z)((function(e){var t=(0,f.I0)(),r=(0,f.v9)(C.s0),m=(0,w.Z)((function(e){return e.breakpoints.down("lg")})),Z=(0,f.v9)(y.dy),N=(0,v.UO)(),k=N.userCareerId,I=(0,x.useState)(0),_=(0,i.Z)(I,2),z=_[0],q=_[1],P=(0,x.useState)(!1),T=(0,i.Z)(P,2),U=T[0],E=T[1],R=(0,g.cI)({mode:"onChange",defaultValues:{name:"",email:"",message:"",cvFile:"",career:"",isChecked:!1},resolver:(0,b.X)(D)}),W=R.reset,Q=R.watch,A=(R.control,R.onChange,R.formState,Q());return(0,o.KW)((function(){"new"===k?t((0,C.xo)()):t((0,C.mk)({access_token:window.localStorage.getItem("access_token"),email:Z.email,id:Z.id,username:Z.username,userCareerId:k})).then((function(e){e.payload||E(!0)}))}),[t,N]),(0,x.useEffect)((function(){r&&W(r)}),[r,W]),(0,x.useEffect)((function(){return function(){t((0,C.qx)()),E(!1)}}),[t]),U?(0,S.jsxs)(h.E.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.1}},className:"flex flex-col flex-1 items-center justify-center h-full",children:[(0,S.jsx)(u.Z,{color:"text.secondary",variant:"h5",children:"There is no such Solicitud!"}),(0,S.jsx)(l.Z,{className:"mt-24",component:p.rU,variant:"outlined",to:"/websiteConfiguration/careersSolicitudes",color:"inherit",children:"Go to blogs Page"})]}):j.Z.isEmpty(A)?(0,S.jsx)(a.Z,{}):(0,S.jsx)(g.RV,(0,n.Z)((0,n.Z)({},R),{},{children:(0,S.jsx)(s.Z,{header:(0,S.jsx)(F,{}),content:(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(d.Z,{value:z,onChange:function(e,t){q(t)},indicatorColor:"secondary",textColor:"secondary",variant:"scrollable",scrollButtons:"auto",classes:{root:"w-full h-64 border-b-1"},children:[(0,S.jsx)(c.Z,{className:"h-64",label:"Basic Info"}),(0,S.jsx)(c.Z,{className:"h-64",label:"CV"})]}),(0,S.jsxs)("div",{className:"",children:[(0,S.jsx)("div",{className:0!==z?"hidden":"p-16 sm:p-24 max-w-5xl",children:(0,S.jsx)(V,{})}),(0,S.jsx)("div",{className:1!==z?"hidden":"p-16 sm:p-24 max-w-5xl",children:(0,S.jsx)(G,{})})]})]}),scroll:m?"normal":"content"})}))}))}}]);