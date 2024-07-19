"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[645],{99645:function(e,n,o){o.r(n),o.d(n,{default:function(){return G}});var t=o(47619),i=o(23132),a=o(38768),r=o(69382),l=o(69099),c=o(42461),s=o(82295),d=o(61113),u=o(81056),m=o(22408),v=o(29466),h=o(70492),p=o(58673),f=o(46417);var x=function(e){var n=(0,m.I0)(),o=(0,m.v9)(p.J7);return(0,f.jsxs)("div",{className:"flex flex-col sm:flex-row space-y-16 sm:space-y-0 flex-1 w-full items-center justify-between py-32 px-24 md:px-32",children:[(0,f.jsx)(d.Z,{component:u.E.span,initial:{x:-20},animate:{x:0,transition:{delay:.2}},delay:300,className:"text-24 md:text-32 font-extrabold tracking-tight",style:{color:"#f4b231"},children:"Careers Solicitudes"}),(0,f.jsxs)("div",{className:"flex flex-col w-full sm:w-auto sm:flex-row space-y-16 sm:space-y-0 flex-1 items-center justify-end space-x-8",children:[(0,f.jsxs)(s.Z,{component:u.E.div,initial:{y:-20,opacity:0},animate:{y:0,opacity:1,transition:{delay:.2}},className:"flex items-center w-full sm:max-w-256 space-x-8 px-16 rounded-full border-1 shadow-0",children:[(0,f.jsx)(h.Z,{color:"disabled",children:"heroicons-solid:search"}),(0,f.jsx)(c.Z,{placeholder:"Search solicitud",className:"flex flex-1",disableUnderline:!0,fullWidth:!0,value:o,inputProps:{"aria-label":"Search"},onChange:function(e){return n((0,p.EE)(e))}})]}),(0,f.jsx)(u.E.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0,transition:{delay:.2}},children:(0,f.jsx)(l.Z,{className:"",component:v.rU,to:"/websiteConfiguration/careersSolicitudes/new",variant:"contained",color:"secondary",startIcon:(0,f.jsx)(h.Z,{children:"heroicons-outline:plus"}),children:"Add"})})]})]})},g=o(29439),Z=o(92550),b=o(58970),j=o(44758),k=o(66835),w=o(57861),y=o(67478),C=o(62323),S=o(24076),N=o(47313),P=o(8139),I=o(63738),M=o(58631),z=o(47131),R=o(74748),E=o(83213),D=o(85582),A=o(51405),B=o(14560),T=o(82558),_=o(61689),H=o(15743),O=o(23477),U=o(17551),F=o(33604),L=o(4117),q=o(15202),V=[{id:"id",align:"center",disablePadding:!1,label:"ID",sort:!0},{id:"name",align:"center",disablePadding:!1,label:"Name",sort:!0},{id:"career",align:"center",disablePadding:!1,label:"Career",sort:!0},{id:"email",align:"center",disablePadding:!1,label:"Email",sort:!0},{id:"message",align:"center",disablePadding:!1,label:"Message",sort:!0},{id:"isChecked",align:"center",disablePadding:!1,label:"Checked",sort:!0},{id:"createdAt",align:"center",disablePadding:!1,label:"created",sort:!0}];var $=function(e){var n=(0,m.v9)(M.dy),o=e.selectedUserCareersIds,t=o.length,i=(0,N.useState)(null),a=(0,g.Z)(i,2),r=a[0],c=a[1],s=(0,m.I0)();function d(){c(null)}function u(){s((0,p.sT)({selectedUserCareersIds:o,access_token:window.localStorage.getItem("access_token"),email:n.email,id:n.id,username:n.username})),e.onMenuItemClick(),d(),s((0,q.gk)())}return(0,f.jsx)(O.Z,{children:(0,f.jsxs)(S.Z,{className:"h-48 sm:h-64",children:[(0,f.jsxs)(y.Z,{sx:{backgroundColor:function(e){return"light"===e.palette.mode?(0,U.$n)(e.palette.background.default,.4):(0,U.$n)(e.palette.background.default,.02)}},padding:"none",className:"w-40 md:w-64 text-center z-99",children:[(0,f.jsx)(j.Z,{indeterminate:t>0&&t<e.rowCount,checked:0!==e.rowCount&&t===e.rowCount,onChange:e.onSelectAllClick,style:{color:"#f4b231"}}),t>0&&(0,f.jsxs)(H.Z,{className:"flex items-center justify-center absolute w-64 top-0 ltr:left-0 rtl:right-0 mx-56 h-64 z-10 border-b-1",sx:{background:function(e){return e.palette.background.default}},children:[(0,f.jsx)(z.Z,{"aria-owns":r?"selectedBranchsMenu":null,"aria-haspopup":"true",onClick:function(e){c(e.currentTarget)},size:"large",children:(0,f.jsx)(h.Z,{children:"heroicons-outline:dots-horizontal"})}),(0,f.jsx)(D.Z,{id:"selectedBranchsMenu",anchorEl:r,open:Boolean(r),onClose:d,children:(0,f.jsx)(B.Z,{children:(0,f.jsxs)(A.Z,{onClick:function(){s((0,q.G3)({children:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(F.Z,{id:"alert-dialog-title",children:"Are you sure you want to delete this Solicitud(s)?"}),(0,f.jsxs)(L.Z,{children:[(0,f.jsx)(l.Z,{onClick:function(){return s((0,q.gk)())},color:"secondary",children:"Skip"}),(0,f.jsx)(l.Z,{onClick:u,color:"secondary",autoFocus:!0,children:"confirm"})]})]})}))},children:[(0,f.jsx)(R.Z,{className:"min-w-40",children:(0,f.jsx)(h.Z,{children:"heroicons-outline:trash"})}),(0,f.jsx)(E.Z,{primary:"Remove"})]})})})]})]}),V.map((function(n){return(0,f.jsx)(y.Z,{sx:{backgroundColor:function(e){return"light"===e.palette.mode?(0,U.$n)(e.palette.background.default,.4):(0,U.$n)(e.palette.background.default,.02)}},className:"p-4 md:p-16",align:n.align,padding:n.disablePadding?"none":"normal",sortDirection:e.order.id===n.id&&e.order.direction,children:n.sort&&(0,f.jsx)(_.Z,{title:"Sort",placement:"right"===n.align?"bottom-end":"bottom-start",enterDelay:300,children:(0,f.jsxs)(T.Z,{active:e.order.id===n.id,direction:e.order.direction,onClick:(o=n.id,function(n){e.onRequestSort(n,o)}),className:"font-semibold",style:{color:"#f4b231"},children:["\xa0\xa0\xa0",n.label]})})},n.id);var o}),this)]})})};var J=(0,P.Z)((function(e){var n=(0,m.I0)(),o=(0,m.v9)(p.fS),t=(0,m.v9)(p.J7),i=(0,m.v9)(M.dy),a=(0,N.useState)(!0),r=(0,g.Z)(a,2),l=r[0],c=r[1],s=(0,N.useState)([]),v=(0,g.Z)(s,2),h=v[0],x=v[1],P=(0,N.useState)(o),z=(0,g.Z)(P,2),R=z[0],E=z[1],D=(0,N.useState)(0),A=(0,g.Z)(D,2),B=A[0],T=A[1],_=(0,N.useState)(10),H=(0,g.Z)(_,2),O=H[0],U=H[1],F=(0,N.useState)({direction:"asc",id:null}),L=(0,g.Z)(F,2),q=L[0],V=L[1];return(0,N.useEffect)((function(){n((0,p.qU)({access_token:window.localStorage.getItem("access_token"),email:i.email,id:i.id,username:i.username})).then((function(){c(!1)}))}),[n,i.username,i.id,i.email]),(0,N.useEffect)((function(){0!==(null===t||void 0===t?void 0:t.length)?(E(b.Z.filter(o,(function(e){return null===e||void 0===e?void 0:e.name.toLowerCase().includes(t.toLowerCase())}))),T(0)):E(o)}),[o,t]),l?(0,f.jsx)("div",{className:"flex items-center justify-center h-full",children:(0,f.jsx)(I.Z,{})}):0===(null===R||void 0===R?void 0:R.length)||void 0===R?(0,f.jsx)(u.E.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.1}},className:"flex flex-1 items-center justify-center h-full",children:(0,f.jsx)(d.Z,{color:"text.secondary",variant:"h5",children:"There are no Solicitudes!"})}):(0,f.jsxs)("div",{className:"w-full flex flex-col min-h-full",children:[(0,f.jsx)(Z.Z,{className:"grow overflow-x-auto",children:(0,f.jsxs)(k.Z,{stickyHeader:!0,className:"min-w-xl","aria-labelledby":"tableTitle",children:[(0,f.jsx)($,{selectedUserCareersIds:h,order:q,onSelectAllClick:function(e){e.target.checked?x(R.map((function(e){return e.id}))):x([])},onRequestSort:function(e,n){var o=n,t="desc";q.id===n&&"desc"===q.direction&&(t="asc"),V({direction:t,id:o})},rowCount:null===R||void 0===R?void 0:R.length,onMenuItemClick:function(){x([])}}),(0,f.jsx)(w.Z,{children:b.Z.orderBy(R,[function(e){return"name"===(null===q||void 0===q?void 0:q.id)?null===e||void 0===e?void 0:e.name:e[null===q||void 0===q?void 0:q.id]}],[q.direction]).slice(B*O,B*O+O).map((function(n){var o,t,i,a,r,l,c,s,d,u=-1!==h.indexOf(n.id);return(0,f.jsxs)(S.Z,{className:"h-72 cursor-pointer",hover:!0,role:"checkbox","aria-checked":u,tabIndex:-1,selected:u,onClick:function(o){return t=n,void e.navigate("/websiteConfiguration/careersSolicitudes/".concat(null===t||void 0===t?void 0:t.id));var t},children:[(0,f.jsx)(y.Z,{className:"w-40 md:w-64 text-center",padding:"none",children:(0,f.jsx)(j.Z,{checked:u,onClick:function(e){return e.stopPropagation()},onChange:function(e){return function(e,n){var o=h.indexOf(n),t=[];-1===o?t=t.concat(h,n):0===o?t=t.concat(h.slice(1)):o===(null===h||void 0===h?void 0:h.length)-1?t=t.concat(h.slice(0,-1)):o>0&&(t=t.concat(h.slice(0,o),h.slice(o+1))),x(t)}(0,n.id)}})}),(0,f.jsx)(y.Z,{className:"p-4 md:p-16",component:"th",scope:"row",align:"center",children:null===n||void 0===n?void 0:n.id}),(0,f.jsx)(y.Z,{className:"p-4 md:p-16",component:"th",scope:"row",align:"center",children:(null===n||void 0===n||null===(o=n.name)||void 0===o?void 0:o.length)>40?"".concat(null===n||void 0===n||null===(t=n.name)||void 0===t?void 0:t.slice(0,40),"..."):"".concat(null===n||void 0===n?void 0:n.name)}),(0,f.jsx)(y.Z,{className:"p-4 md:p-16",component:"th",scope:"row",align:"center",children:(null===n||void 0===n||null===(i=n.career)||void 0===i?void 0:i.length)>30?"".concat(null===n||void 0===n||null===(a=n.career)||void 0===a?void 0:a.slice(0,30),"..."):"".concat(null===n||void 0===n?void 0:n.career)}),(0,f.jsx)(y.Z,{className:"p-4 md:p-16",component:"th",scope:"row",align:"center",children:(null===n||void 0===n||null===(r=n.email)||void 0===r?void 0:r.length)>40?"".concat(null===n||void 0===n||null===(l=n.email)||void 0===l?void 0:l.slice(0,40),"..."):"".concat(null===n||void 0===n?void 0:n.email)}),(0,f.jsx)(y.Z,{className:"p-4 md:p-16",component:"th",scope:"row",align:"center",children:(null===n||void 0===n||null===(c=n.message)||void 0===c?void 0:c.length)>40?"".concat(null===n||void 0===n||null===(s=n.message)||void 0===s?void 0:s.slice(0,40),"..."):"".concat(null===n||void 0===n?void 0:n.message)}),(0,f.jsx)(y.Z,{className:"p-4 md:p-16",component:"th",scope:"row",align:"center",children:null!==n&&void 0!==n&&n.isChecked?(0,f.jsx)("div",{className:"text-green-600",style:{fontSize:"30px"},children:"\u2713"}):(0,f.jsx)("div",{className:"text-red-800",style:{fontSize:"20px"},children:"\u274c"})}),(0,f.jsx)(y.Z,{className:"p-4 md:p-16",component:"th",scope:"row",align:"center",children:"".concat(null===n||void 0===n||null===(d=n.createdAt)||void 0===d?void 0:d.split("T")[0])})]},null===n||void 0===n?void 0:n.id)}))})]})}),(0,f.jsx)(C.Z,{className:"shrink-0 border-t-1",component:"div",count:null===R||void 0===R?void 0:R.length,rowsPerPage:O,page:B,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onPageChange:function(e,n){T(n)},onRowsPerPageChange:function(e){U(e.target.value)}})]})}));var G=(0,i.Z)("websiteConfiguration",r.Z)((function(){var e=(0,a.Z)((function(e){return e.breakpoints.down("lg")}));return(0,f.jsx)(t.Z,{header:(0,f.jsx)(x,{}),content:(0,f.jsx)(J,{}),scroll:e?"normal":"content"})}))},44758:function(e,n,o){o.d(n,{Z:function(){return S}});var t=o(4942),i=o(63366),a=o(87462),r=o(47313),l=o(21921),c=o(17551),s=o(97423),d=o(54750),u=o(46417),m=(0,d.Z)((0,u.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),v=(0,d.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),h=(0,d.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),p=o(91615),f=o(77342),x=o(88564),g=o(32298);function Z(e){return(0,g.Z)("MuiCheckbox",e)}var b=(0,o(77430).Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),j=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],k=(0,x.ZP)(s.Z,{shouldForwardProp:function(e){return(0,x.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,n){var o=e.ownerState;return[n.root,o.indeterminate&&n.indeterminate,"default"!==o.color&&n["color".concat((0,p.Z)(o.color))]]}})((function(e){var n,o=e.theme,i=e.ownerState;return(0,a.Z)({color:(o.vars||o).palette.text.secondary},!i.disableRipple&&{"&:hover":{backgroundColor:o.vars?"rgba(".concat("default"===i.color?o.vars.palette.action.activeChannel:o.vars.palette.primary.mainChannel," / ").concat(o.vars.palette.action.hoverOpacity,")"):(0,c.Fq)("default"===i.color?o.palette.action.active:o.palette[i.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==i.color&&(n={},(0,t.Z)(n,"&.".concat(b.checked,", &.").concat(b.indeterminate),{color:(o.vars||o).palette[i.color].main}),(0,t.Z)(n,"&.".concat(b.disabled),{color:(o.vars||o).palette.action.disabled}),n))})),w=(0,u.jsx)(v,{}),y=(0,u.jsx)(m,{}),C=(0,u.jsx)(h,{}),S=r.forwardRef((function(e,n){var o,t,c=(0,f.Z)({props:e,name:"MuiCheckbox"}),s=c.checkedIcon,d=void 0===s?w:s,m=c.color,v=void 0===m?"primary":m,h=c.icon,x=void 0===h?y:h,g=c.indeterminate,b=void 0!==g&&g,S=c.indeterminateIcon,N=void 0===S?C:S,P=c.inputProps,I=c.size,M=void 0===I?"medium":I,z=(0,i.Z)(c,j),R=b?N:x,E=b?N:d,D=(0,a.Z)({},c,{color:v,indeterminate:b,size:M}),A=function(e){var n=e.classes,o=e.indeterminate,t=e.color,i={root:["root",o&&"indeterminate","color".concat((0,p.Z)(t))]},r=(0,l.Z)(i,Z,n);return(0,a.Z)({},n,r)}(D);return(0,u.jsx)(k,(0,a.Z)({type:"checkbox",inputProps:(0,a.Z)({"data-indeterminate":b},P),icon:r.cloneElement(R,{fontSize:null!=(o=R.props.fontSize)?o:M}),checkedIcon:r.cloneElement(E,{fontSize:null!=(t=E.props.fontSize)?t:M}),ownerState:D,ref:n},z,{classes:A}))}))},4117:function(e,n,o){o.d(n,{Z:function(){return p}});var t=o(63366),i=o(87462),a=o(47313),r=o(83061),l=o(21921),c=o(88564),s=o(77342),d=o(32298);function u(e){return(0,d.Z)("MuiDialogActions",e)}(0,o(77430).Z)("MuiDialogActions",["root","spacing"]);var m=o(46417),v=["className","disableSpacing"],h=(0,c.ZP)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:function(e,n){var o=e.ownerState;return[n.root,!o.disableSpacing&&n.spacing]}})((function(e){var n=e.ownerState;return(0,i.Z)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!n.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),p=a.forwardRef((function(e,n){var o=(0,s.Z)({props:e,name:"MuiDialogActions"}),a=o.className,c=o.disableSpacing,d=void 0!==c&&c,p=(0,t.Z)(o,v),f=(0,i.Z)({},o,{disableSpacing:d}),x=function(e){var n=e.classes,o={root:["root",!e.disableSpacing&&"spacing"]};return(0,l.Z)(o,u,n)}(f);return(0,m.jsx)(h,(0,i.Z)({className:(0,r.Z)(x.root,a),ownerState:f,ref:n},p))}))},33604:function(e,n,o){var t=o(87462),i=o(63366),a=o(47313),r=o(83061),l=o(21921),c=o(61113),s=o(88564),d=o(77342),u=o(93174),m=o(63909),v=o(46417),h=["className","id"],p=(0,s.ZP)(c.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:function(e,n){return n.root}})({padding:"16px 24px",flex:"0 0 auto"}),f=a.forwardRef((function(e,n){var o=(0,d.Z)({props:e,name:"MuiDialogTitle"}),c=o.className,s=o.id,f=(0,i.Z)(o,h),x=o,g=function(e){var n=e.classes;return(0,l.Z)({root:["root"]},u.a,n)}(x),Z=a.useContext(m.Z).titleId,b=void 0===Z?s:Z;return(0,v.jsx)(p,(0,t.Z)({component:"h2",className:(0,r.Z)(g.root,c),ownerState:x,ref:n,variant:"h6",id:b},f))}));n.Z=f},93174:function(e,n,o){o.d(n,{a:function(){return i}});var t=o(32298);function i(e){return(0,t.Z)("MuiDialogTitle",e)}var a=(0,o(77430).Z)("MuiDialogTitle",["root"]);n.Z=a}}]);