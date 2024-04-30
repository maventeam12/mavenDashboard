"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[266],{50266:function(e,n,r){r.r(n),r.d(n,{default:function(){return H}});var i=r(1413),t=r(29439),s=r(63738),o=r(47619),a=r(69649),l=r(69099),c=r(65280),d=r(82294),u=r(61113),m=r(23132),f=r(81056),h=r(47313),p=r(22408),x=r(29466),v=r(97890),Z=r(58970),j=r(75627),g=r(62563),y=r(6473),w=r(38768),b=r(58631),C=r(77806),N=r(69382),k=r(19860),I=r(70492),_=r(46417);var R=function(e){(0,p.v9)(b.dy),(0,p.I0)();var n=(0,j.Gc)(),r=(n.formState,n.watch),i=(n.getValues,r("position")),t=(0,k.Z)();return(0,v.s0)(),(0,v.UO)(),(0,_.jsx)("div",{className:"flex flex-col sm:flex-row flex-1 w-full items-center justify-between space-y-8 sm:space-y-0 py-32 px-24 md:px-32",children:(0,_.jsxs)("div",{className:"flex flex-col items-center sm:items-start space-y-8 sm:space-y-0 w-full sm:max-w-full min-w-0",children:[(0,_.jsx)(f.E.div,{initial:{x:20,opacity:0},animate:{x:0,opacity:1,transition:{delay:.3}},children:(0,_.jsxs)(u.Z,{className:"flex items-center sm:mb-12",component:x.rU,role:"button",to:"/websiteConfiguration/careers",color:"inherit",children:[(0,_.jsx)(I.Z,{style:{color:"#f4b231"},size:20,children:"ltr"===t.direction?"heroicons-outline:arrow-sm-left":"heroicons-outline:arrow-sm-right"}),(0,_.jsx)("span",{className:"flex mx-4 font-medium",style:{color:"#f4b231"},children:"Careers"})]})}),(0,_.jsx)("div",{className:"flex items-center max-w-full",children:(0,_.jsxs)(f.E.div,{className:"flex flex-col items-center sm:items-start min-w-0 mx-8 sm:mx-16",initial:{x:-20},animate:{x:0,transition:{delay:.3}},children:[(0,_.jsx)(u.Z,{className:"text-16 sm:text-20 truncate font-semibold",children:i||"New Career"}),(0,_.jsx)(u.Z,{variant:"caption",className:"font-medium",children:"Career Detail"})]})})]})})},S=r(5227),E=r(15743),z=r(31427),V=r(41727),T=r(93433),q=r(83061),A=r(47131),F=y.Ry().shape({description:y.Z_().when("description",(function(e){return(null===e||void 0===e?void 0:e.length)>0?y.Z_().min(2,"must be 2 characters"):y.Z_().notRequired()}))},[["description","description"]]),P={description:""};var Q=function(e){var n=e.value,r=e.hideRemove,t=(0,j.cI)({mode:"onChange",defaultValues:P,resolver:(0,g.X)(F)}),s=t.control,o=t.formState,a=t.handleSubmit,l=t.reset;(0,h.useEffect)((function(){l(n)}),[l,n]),o.isValid,o.dirtyFields;var c=o.errors;return(0,_.jsxs)("form",{className:"flex space-x-16 mb-16",onChange:a((function(n){e.onChange(n)})),children:[(0,_.jsx)(j.Qr,{control:s,name:"description",render:function(e){var n,r=e.field;return(0,_.jsx)(z.Z,(0,i.Z)((0,i.Z)({},r),{},{className:"",label:"Responsability",placeholder:"...",variant:"outlined",style:{width:"700px"},multiline:!0,error:!!c.description,helperText:null===c||void 0===c||null===(n=c.description)||void 0===n?void 0:n.message,InputProps:{startAdornment:(0,_.jsx)(V.Z,{position:"start",children:(0,_.jsx)(I.Z,{size:20,children:"heroicons-outline:clipboard-check"})})}}))}}),!r&&(0,_.jsx)(A.Z,{onClick:e.onRemove,style:{color:"#f4b231"},children:(0,_.jsx)(I.Z,{size:20,children:"heroicons-solid:trash"})})]})},X=r(45732),U=(0,h.forwardRef)((function(e,n){var r=e.value,i=e.onChange,t=e.className;return(0,_.jsxs)("div",{className:(0,q.Z)("w-full",t),ref:n,children:[r.map((function(e,n){return(0,_.jsx)(Q,{value:e,onChange:function(e){i(r.map((function(r,i){return n===i?e:r})))},onRemove:function(e){i(r.filter((function(e,r){return n!==r})))},hideRemove:1===r.length},n)})),(0,_.jsxs)(l.Z,{className:"group inline-flex items-center mt-2 -ml-4 py-2 px-4 rounded cursor-pointer",onClick:function(){return i([].concat((0,T.Z)(r),[(0,X.Z)().responsabilities[0]]))},style:{color:"#f4b231"},children:[(0,_.jsx)(I.Z,{size:20,children:"heroicons-solid:plus-circle"}),(0,_.jsx)("span",{className:"ml-8 font-medium text-secondary underline",children:"Add a Responsability"})]})]})})),Y=y.Ry().shape({description:y.Z_().when("description",(function(e){return(null===e||void 0===e?void 0:e.length)>0?y.Z_().min(2,"must be more than 2 characters"):y.Z_().notRequired()}))},[["description","description"]]),D={description:""};var O=function(e){var n=e.value,r=e.hideRemove,t=(0,j.cI)({mode:"onChange",defaultValues:D,resolver:(0,g.X)(Y)}),s=t.control,o=t.formState,a=t.handleSubmit,l=t.reset;(0,h.useEffect)((function(){l(n)}),[l,n]),o.isValid,o.dirtyFields;var c=o.errors;return(0,_.jsxs)("form",{className:"flex space-x-16 mb-16",onChange:a((function(n){e.onChange(n)})),children:[(0,_.jsx)(j.Qr,{control:s,name:"description",render:function(e){var n,r=e.field;return(0,_.jsx)(z.Z,(0,i.Z)((0,i.Z)({},r),{},{className:"",label:"Skill",placeholder:"...",variant:"outlined",style:{width:"700px"},multiline:!0,error:!!c.description,helperText:null===c||void 0===c||null===(n=c.description)||void 0===n?void 0:n.message,InputProps:{startAdornment:(0,_.jsx)(V.Z,{position:"start",children:(0,_.jsx)(I.Z,{size:20,children:"heroicons-outline:lightning-bolt"})})}}))}}),!r&&(0,_.jsx)(A.Z,{onClick:e.onRemove,style:{color:"#f4b231"},children:(0,_.jsx)(I.Z,{size:20,children:"heroicons-solid:trash"})})]})},B=(0,h.forwardRef)((function(e,n){var r=e.value,i=e.onChange,t=e.className;return(0,_.jsxs)("div",{className:(0,q.Z)("w-full",t),ref:n,children:[r.map((function(e,n){return(0,_.jsx)(O,{value:e,onChange:function(e){i(r.map((function(r,i){return n===i?e:r})))},onRemove:function(e){i(r.filter((function(e,r){return n!==r})))},hideRemove:1===r.length},n)})),(0,_.jsxs)(l.Z,{className:"group inline-flex items-center mt-2 -ml-4 py-2 px-4 rounded cursor-pointer",onClick:function(){return i([].concat((0,T.Z)(r),[(0,X.Z)().skills[0]]))},style:{color:"#f4b231"},children:[(0,_.jsx)(I.Z,{size:20,children:"heroicons-solid:plus-circle"}),(0,_.jsx)("span",{className:"ml-8 font-medium text-secondary underline",children:"Add a Skill"})]})]})})),G=y.Ry().shape({position:y.Z_().required("You must enter the position").min(3,"The position name must be at least 3 characters"),description:y.Z_().required("You must enter the description").min(3,"The description name must be at least 3 characters")});var K=function(e){var n=(0,p.v9)(C.AI),r=(0,v.UO)(),t=(0,p.I0)(),o=(0,v.s0)(),a=(0,p.v9)(b.dy),c=r.careerId,d=(0,j.cI)({mode:"onChange",resolver:(0,g.X)(G)}),u=d.control,m=d.watch,f=d.reset,x=d.handleSubmit,y=d.formState,w=d.getValues,N=y.isValid,k=y.dirtyFields,R=y.errors,T=m();return(0,h.useEffect)((function(){"new"===r.careerId?t((0,C.tz)()):t((0,C.kX)({access_token:window.localStorage.getItem("access_token"),email:a.email,id:a.id,username:a.username,careerId:c}))}),[t,r,a]),(0,h.useEffect)((function(){f((0,i.Z)({},n))}),[n,f]),Z.Z.isEmpty(T)||!n?(0,_.jsx)(s.Z,{}):(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(E.Z,{className:"flex items-center py-14 pr-16 pl-4 sm:pr-48 sm:pl-36 border-t",sx:{backgroundColor:"background.default"},children:["new"!==r.careerId&&(0,_.jsx)(l.Z,{color:"error",onClick:function(){t((0,C.Fe)({access_token:window.localStorage.getItem("access_token"),email:a.email,id:a.id,username:a.username,careerId:w().id})).then((function(){o("/websiteConfiguration/careers")}))},children:"Delete"}),(0,_.jsx)(l.Z,{className:"ml-auto",color:"secondary",component:S.Z,to:-1,children:"Cancel"}),(0,_.jsx)(l.Z,{className:"ml-8",variant:"contained",color:"secondary",disabled:Z.Z.isEmpty(k)||!N,onClick:x((function(e){"new"===r.careerId?t((0,C.Vf)({data:w(),access_token:window.localStorage.getItem("access_token"),email:a.email,id:a.id,username:a.username})).then((function(){o("/websiteConfiguration/careers")})):t((0,C.le)({data:w(),access_token:window.localStorage.getItem("access_token"),email:a.email,id:a.id,username:a.username})).then((function(){o("/websiteConfiguration/careers")}))})),children:"Save"})]}),(0,_.jsxs)("div",{className:"relative flex flex-col flex-auto px-24 sm:px-48",children:[(0,_.jsx)(j.Qr,{control:u,name:"position",render:function(e){var n,r=e.field;return(0,_.jsx)(z.Z,(0,i.Z)((0,i.Z)({className:"mt-32"},r),{},{label:"Position",placeholder:"position",id:"position",error:!!R.position,helperText:null===R||void 0===R||null===(n=R.position)||void 0===n?void 0:n.message,variant:"outlined",required:!0,style:{width:"700px"},multiline:!0,InputProps:{startAdornment:(0,_.jsx)(V.Z,{position:"start",children:(0,_.jsx)(I.Z,{size:20,children:"heroicons-solid:user-circle"})})}}))}}),(0,_.jsx)(j.Qr,{control:u,name:"description",render:function(e){var n,r=e.field;return(0,_.jsx)(z.Z,(0,i.Z)((0,i.Z)({className:"mt-32"},r),{},{label:"Description",placeholder:"description",id:"description",error:!!R.description,helperText:null===R||void 0===R||null===(n=R.description)||void 0===n?void 0:n.message,variant:"outlined",required:!0,style:{width:"700px"},multiline:!0,minRows:4,InputProps:{startAdornment:(0,_.jsx)(V.Z,{position:"start",children:(0,_.jsx)(I.Z,{size:20,children:"heroicons-outline:menu-alt-1"})})}}))}}),(0,_.jsx)(j.Qr,{control:u,name:"responsabilities",render:function(e){var n=e.field;return(0,_.jsx)(U,(0,i.Z)({className:"mt-32"},n))}}),(0,_.jsx)(j.Qr,{control:u,name:"skills",render:function(e){var n=e.field;return(0,_.jsx)(B,(0,i.Z)({className:"mt-32"},n))}})]})]})},W=y.Ry().shape({position:y.Z_().required("You must enter the position").min(3,"The position name must be at least 3 characters"),description:y.Z_().required("You must enter the description").min(3,"The description name must be at least 3 characters")});var H=(0,m.Z)("websiteConfiguration",N.Z)((function(e){var n=(0,p.I0)(),r=(0,p.v9)(C.AI),m=(0,w.Z)((function(e){return e.breakpoints.down("lg")})),y=(0,p.v9)(b.dy),N=(0,v.UO)(),k=N.careerId,I=(0,h.useState)(0),S=(0,t.Z)(I,2),E=S[0],z=S[1],V=(0,h.useState)(!1),T=(0,t.Z)(V,2),q=T[0],A=T[1],F=(0,j.cI)({mode:"onChange",defaultValues:{},resolver:(0,g.X)(W)}),P=F.reset,Q=F.watch,X=(F.control,F.onChange,F.formState,Q());return(0,a.KW)((function(){"new"===k?n((0,C.tz)()):n((0,C.kX)({access_token:window.localStorage.getItem("access_token"),email:y.email,id:y.id,username:y.username,careerId:k})).then((function(e){e.payload||A(!0)}))}),[n,N]),(0,h.useEffect)((function(){r&&P(r)}),[r,P]),(0,h.useEffect)((function(){return function(){n((0,C.tF)()),A(!1)}}),[n]),q?(0,_.jsxs)(f.E.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.1}},className:"flex flex-col flex-1 items-center justify-center h-full",children:[(0,_.jsx)(u.Z,{color:"text.secondary",variant:"h5",children:"There is no such career!"}),(0,_.jsx)(l.Z,{className:"mt-24",component:x.rU,variant:"outlined",to:"/websiteConfiguration/careers",color:"inherit",children:"Go to careers Page"})]}):Z.Z.isEmpty(X)?(0,_.jsx)(s.Z,{}):(0,_.jsx)(j.RV,(0,i.Z)((0,i.Z)({},F),{},{children:(0,_.jsx)(o.Z,{header:(0,_.jsx)(R,{}),content:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(d.Z,{value:E,onChange:function(e,n){z(n)},indicatorColor:"secondary",textColor:"secondary",variant:"scrollable",scrollButtons:"auto",classes:{root:"w-full h-64 border-b-1"},children:(0,_.jsx)(c.Z,{className:"h-64",label:"Basic info"})}),(0,_.jsx)("div",{className:0!==E?"hidden":"",children:(0,_.jsx)(K,{})})]}),scroll:m?"normal":"content"})}))}))}}]);