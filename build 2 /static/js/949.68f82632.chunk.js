"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[949],{92949:function(e,t,n){n.r(t),n.d(t,{default:function(){return Q}});var a=n(1413),r=n(29439),i=n(63738),s=n(47619),o=n(69649),c=n(69099),l=n(65280),d=n(82294),u=n(61113),m=n(23132),h=n(81056),x=n(47313),p=n(22408),f=n(29466),v=n(97890),g=n(58970),j=n(75627),w=n(62563),y=n(6473),b=n(38768),Z=n(58631),N=n(72030),I=n(69382),k=n(19860),C=n(70492),F=n(46417);var S=function(e){var t=(0,p.v9)(Z.dy),n=(0,p.I0)(),a=(0,j.Gc)(),r=a.formState,i=a.watch,s=a.getValues,o=r.isValid,l=r.dirtyFields,d=i("id"),m=(0,k.Z)(),x=(0,v.s0)();return(0,F.jsxs)("div",{className:"flex flex-col sm:flex-row flex-1 w-full items-center justify-between space-y-8 sm:space-y-0 py-32 px-24 md:px-32",children:[(0,F.jsxs)("div",{className:"flex flex-col items-center sm:items-start space-y-8 sm:space-y-0 w-full sm:max-w-full min-w-0",children:[(0,F.jsx)(h.E.div,{initial:{x:20,opacity:0},animate:{x:0,opacity:1,transition:{delay:.3}},children:(0,F.jsxs)(u.Z,{className:"flex items-center sm:mb-12",component:f.rU,role:"button",to:"/websiteConfiguration/eventPhotography",color:"inherit",children:[(0,F.jsx)(C.Z,{size:20,style:{color:"#f4b231"},children:"ltr"===m.direction?"heroicons-outline:arrow-sm-left":"heroicons-outline:arrow-sm-right"}),(0,F.jsx)("span",{className:"flex mx-4 font-medium",style:{color:"#f4b231"},children:"Events"})]})}),(0,F.jsx)("div",{className:"flex items-center max-w-full",children:(0,F.jsxs)(h.E.div,{className:"flex flex-col items-center sm:items-start min-w-0 mx-8 sm:mx-16",initial:{x:-20},animate:{x:0,transition:{delay:.3}},children:[(0,F.jsx)(u.Z,{className:"text-16 sm:text-20 truncate font-semibold",children:d||"New Event"}),(0,F.jsx)(u.Z,{variant:"caption",className:"font-medium",children:"Photography Detail"})]})})]}),(0,F.jsxs)(h.E.div,{className:"flex",initial:{opacity:0,x:20},animate:{opacity:1,x:0,transition:{delay:.3}},children:[(0,F.jsx)(c.Z,{className:"whitespace-nowrap mx-4",variant:"contained",color:"secondary",onClick:function(){n((0,N.c9)({access_token:window.localStorage.getItem("access_token"),email:t.email,id:t.id,username:t.username,eventId:s().id})).then((function(){x("/websiteConfiguration/eventPhotography")}))},startIcon:(0,F.jsx)(C.Z,{className:"hidden sm:flex",children:"heroicons-outline:trash"}),children:"Remove"}),(0,F.jsx)(c.Z,{className:"whitespace-nowrap mx-4",variant:"contained",color:"secondary",disabled:g.Z.isEmpty(l)||!o,onClick:function(){s().id?n((0,N.nB)({data:s(),access_token:window.localStorage.getItem("access_token"),email:t.email,id:t.id,username:t.username})).then((function(){x("/websiteConfiguration/eventPhotography")})):n((0,N.he)({data:s(),access_token:window.localStorage.getItem("access_token"),email:t.email,id:t.id,username:t.username})).then((function(){x("/websiteConfiguration/eventPhotography")}))},children:"Save"})]})]})},P=n(31427),E=n(41727);var _=function(e){var t=(0,j.Gc)(),n=t.control,r=t.formState.errors;return(0,F.jsx)("div",{children:(0,F.jsx)(j.Qr,{name:"eventId",control:n,defaultValue:"",render:function(e){var t,n=e.field;return(0,F.jsx)(P.Z,(0,a.Z)((0,a.Z)({},n),{},{className:"mt-8 mb-16",error:!!r.eventId,required:!0,helperText:null===r||void 0===r||null===(t=r.eventId)||void 0===t?void 0:t.message,label:"event ID",autoFocus:!0,id:"eventId",variant:"outlined",placeholder:"Event ID",fullWidth:!0,InputProps:{startAdornment:(0,F.jsx)(E.Z,{position:"start",children:(0,F.jsx)(C.Z,{size:20,children:"material-outline:camera"})})}}))}})})},z=n(15861),U=n(64687),D=n.n(U),R=n(69850),V=n(88564),B=n(17551),T=n(9506),G=n(47131),O=(0,V.ZP)("div")((function(e){var t=e.theme;return{"& .productImageFeaturedStar":{position:"absolute",top:0,right:0,color:R.Z[400],opacity:0},"& .productImageUpload":{transitionProperty:"box-shadow",transitionDuration:t.transitions.duration.short,transitionTimingFunction:t.transitions.easing.easeInOut},"& .productImageItem":{transitionProperty:"box-shadow",transitionDuration:t.transitions.duration.short,transitionTimingFunction:t.transitions.easing.easeInOut,"&:hover":{"& .productImageFeaturedStar":{opacity:.8}},"&.featured":{pointerEvents:"none",boxShadow:t.shadows[3],"& .productImageFeaturedStar":{opacity:1},"&:hover .productImageFeaturedStar":{opacity:1}}}}}));var W=function(e){var t=(0,j.Gc)(),n=t.control,a=(t.watch,(0,x.useState)()),i=(0,r.Z)(a,2),s=i[0],o=i[1],c=function(){var e=(0,z.Z)(D().mark((function e(n){var a,r;return D().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.target.files[0]){e.next=3;break}return e.abrupt("return");case 3:r=URL.createObjectURL(a),o(r),t.setValue("imageFile",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,F.jsx)(O,{children:(0,F.jsx)("div",{className:"flex justify-center sm:justify-start flex-wrap -mx-16 ml-5 mt-10",children:(0,F.jsx)(j.Qr,{name:"imageFile",control:n,render:function(e){var t=e.field;return(0,F.jsx)(F.Fragment,{children:""!==t.value?(0,F.jsx)("div",{children:"string"==typeof t.value&&t.value.includes("uploadsEventPhotographies")?(0,F.jsxs)(T.Z,{sx:{borderWidth:4,borderStyle:"solid",borderColor:"Background.paper"},className:"productImageItem flex items-center justify-center relative  rounded-16 mx-12 mb-24 overflow-hidden cursor-pointer outline-none shadow hover:shadow-lg",children:[(0,F.jsx)("div",{className:"absolute inset-0 bg-black bg-opacity-10 z-10"}),(0,F.jsxs)("div",{className:"absolute inset-0 flex items-center justify-center z-20",children:[(0,F.jsx)("div",{children:(0,F.jsxs)("label",{htmlFor:"imageFile",className:"flex p-8 cursor-pointer",children:[(0,F.jsx)("input",{accept:"image/*",className:"hidden",id:"imageFile",type:"file",onChange:function(){var e=(0,z.Z)(D().mark((function e(n){return D().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.onChange(n),c(n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),(0,F.jsx)(C.Z,{className:"text-white",children:"heroicons-outline:camera"})]})}),(0,F.jsx)("div",{children:(0,F.jsx)(G.Z,{onClick:function(){t.onChange("")},children:(0,F.jsx)(C.Z,{className:"text-white",children:"heroicons-outline:trash"})})})]}),(0,F.jsx)("div",{className:"productImageItem flex items-center justify-center relative  max-w-400 max-h-400 overflow-hiden rounded-16  overflow-hidden cursor-pointer outline-none shadow hover:shadow-lg",children:(0,F.jsx)("img",{className:"max-h-400 max-w-400",src:"https://www.api.mavenevents.ae/eventPhotography/".concat(t.value),alt:"event"})})]}):(0,F.jsxs)(T.Z,{sx:{borderWidth:4,borderStyle:"solid",borderColor:"Background.paper"},className:"productImageItem flex items-center justify-center relative  rounded-16 mx-12 mb-24 overflow-hidden cursor-pointer outline-none shadow hover:shadow-lg",children:[(0,F.jsx)("div",{className:"absolute inset-0 bg-black bg-opacity-10 z-10"}),(0,F.jsxs)("div",{className:"absolute inset-0 flex items-center justify-center z-20",children:[(0,F.jsx)("div",{children:(0,F.jsxs)("label",{htmlFor:"imageFile",className:"flex p-8 cursor-pointer",children:[(0,F.jsx)("input",{accept:"image/*",className:"hidden",id:"imageFile",type:"file",onChange:function(){var e=(0,z.Z)(D().mark((function e(n){return D().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.onChange(n),c(n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),(0,F.jsx)(C.Z,{className:"text-white",children:"heroicons-outline:camera"})]})}),(0,F.jsx)("div",{children:(0,F.jsx)(G.Z,{onClick:function(){t.onChange("")},children:(0,F.jsx)(C.Z,{className:"text-white",children:"heroicons-outline:trash"})})})]}),(0,F.jsx)("img",{className:"max-h-400 max-w-400",src:s,alt:"event"})]})}):(0,F.jsxs)(T.Z,{sx:{backgroundColor:function(e){return"light"===e.palette.mode?(0,B.$n)(e.palette.background.default,.4):(0,B.$n)(e.palette.background.default,.02)}},component:"label",htmlFor:"imageFile",className:"productImageUpload flex items-center justify-center relative w-128 h-128 rounded-16 mx-12 mb-24 overflow-hidden cursor-pointer shadow hover:shadow-lg",children:[(0,F.jsx)("input",{accept:"image/*",className:"hidden",id:"imageFile",type:"file",onChange:function(){var e=(0,z.Z)(D().mark((function e(n){return D().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.onChange(n),c(n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),(0,F.jsx)(C.Z,{size:32,color:"action",children:"heroicons-outline:upload"})]})})}})})})},L=y.Ry().shape({eventId:y.Rx().typeError("Must be a number").integer("enter a valid number").positive("enter a positive number").required("enter a number").min(1,"The event ID must be bigger than 0")});var Q=(0,m.Z)("websiteConfiguration",I.Z)((function(e){var t=(0,p.I0)(),n=(0,p.v9)(N.Ys),m=(0,b.Z)((function(e){return e.breakpoints.down("lg")})),y=(0,p.v9)(Z.dy),I=(0,v.UO)(),k=I.eventPhotographyId,C=(0,x.useState)(0),P=(0,r.Z)(C,2),E=P[0],z=P[1],U=(0,x.useState)(!1),D=(0,r.Z)(U,2),R=D[0],V=D[1],B=(0,j.cI)({mode:"onChange",defaultValues:{eventId:"",imageFile:""},resolver:(0,w.X)(L)}),T=B.reset,G=B.watch,O=(B.control,B.onChange,B.formState,G());return(0,o.KW)((function(){"new"===k?t((0,N.Lh)()):t((0,N.jA)({access_token:window.localStorage.getItem("access_token"),email:y.email,id:y.id,username:y.username,eventPhotographyId:k})).then((function(e){e.payload||V(!0)}))}),[t,I]),(0,x.useEffect)((function(){n&&T(n)}),[n,T]),(0,x.useEffect)((function(){return function(){t((0,N.QJ)()),V(!1)}}),[t]),R?(0,F.jsxs)(h.E.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.1}},className:"flex flex-col flex-1 items-center justify-center h-full",children:[(0,F.jsx)(u.Z,{color:"text.secondary",variant:"h5",children:"There is no such photography!"}),(0,F.jsx)(c.Z,{className:"mt-24",component:f.rU,variant:"outlined",to:"/websiteConfiguration/eventPhotography",color:"inherit",children:"Go to events Page"})]}):g.Z.isEmpty(O)?(0,F.jsx)(i.Z,{}):(0,F.jsx)(j.RV,(0,a.Z)((0,a.Z)({},B),{},{children:(0,F.jsx)(s.Z,{header:(0,F.jsx)(S,{}),content:(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(d.Z,{value:E,onChange:function(e,t){z(t)},indicatorColor:"secondary",textColor:"secondary",variant:"scrollable",scrollButtons:"auto",classes:{root:"w-full h-64 border-b-1"},children:[(0,F.jsx)(l.Z,{className:"h-64",label:"Basic Info"}),(0,F.jsx)(l.Z,{className:"h-64",label:"Cover Image"})]}),(0,F.jsxs)("div",{className:"",children:[(0,F.jsx)("div",{className:0!==E?"hidden":"p-16 sm:p-24 max-w-5xl",children:(0,F.jsx)(_,{})}),(0,F.jsx)("div",{className:1!==E?"hidden":"p-16 sm:p-24 max-w-5xl",children:(0,F.jsx)(W,{})})]})]}),scroll:m?"normal":"content"})}))}))}}]);