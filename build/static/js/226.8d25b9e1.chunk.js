"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[226],{57226:function(e,n,t){t.r(n),t.d(n,{default:function(){return G}});var o=t(47619),i=t(23132),a=t(38768),r=t(69382),c=t(69099),l=t(42461),s=t(82295),d=t(61113),u=t(81056),f=t(22408),m=t(29466),h=t(70492),p=t(73252),x=t(46417);var v=function(e){var n=(0,f.I0)(),t=(0,f.v9)(p.Eb);return(0,x.jsxs)("div",{className:"flex flex-col sm:flex-row space-y-16 sm:space-y-0 flex-1 w-full items-center justify-between py-32 px-24 md:px-32",children:[(0,x.jsx)(d.Z,{component:u.E.span,initial:{x:-20},animate:{x:0,transition:{delay:.2}},delay:300,className:"text-24 md:text-32 font-extrabold tracking-tight",style:{color:"#f4b231"},children:"Services"}),(0,x.jsxs)("div",{className:"flex flex-col w-full sm:w-auto sm:flex-row space-y-16 sm:space-y-0 flex-1 items-center justify-end space-x-8",children:[(0,x.jsxs)(s.Z,{component:u.E.div,initial:{y:-20,opacity:0},animate:{y:0,opacity:1,transition:{delay:.2}},className:"flex items-center w-full sm:max-w-256 space-x-8 px-16 rounded-full border-1 shadow-0",children:[(0,x.jsx)(h.Z,{color:"disabled",children:"heroicons-solid:search"}),(0,x.jsx)(l.Z,{placeholder:"Search services",className:"flex flex-1",disableUnderline:!0,fullWidth:!0,value:t,inputProps:{"aria-label":"Search"},onChange:function(e){return n((0,p.SE)(e))}})]}),(0,x.jsx)(u.E.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0,transition:{delay:.2}},children:(0,x.jsx)(c.Z,{className:"",component:m.rU,to:"/websiteConfiguration/services/new",variant:"contained",color:"secondary",startIcon:(0,x.jsx)(h.Z,{children:"heroicons-outline:plus"}),children:"Add"})})]})]})},Z=t(29439),g=t(92550),b=t(58970),j=t(44758),k=t(66835),w=t(57861),y=t(67478),C=t(62323),S=t(24076),N=t(47313),P=t(8139),I=t(63738),M=t(58631),z=t(47131),R=t(74748),E=t(83213),D=t(85582),A=t(51405),B=t(14560),T=t(82558),_=t(61689),H=t(15743),O=t(23477),F=t(17551),L=t(33604),V=t(4117),$=t(15202),q=[{id:"id",align:"center",disablePadding:!1,label:"ID",sort:!0},{id:"service",align:"center",disablePadding:!1,label:"Service",sort:!0},{id:"createdAt",align:"center",disablePadding:!1,label:"Created",sort:!0}];var U=function(e){var n=(0,f.v9)(M.dy),t=e.selectedServicesIds,o=t.length,i=(0,N.useState)(null),a=(0,Z.Z)(i,2),r=a[0],l=a[1],s=(0,f.I0)();function d(){l(null)}function u(){s((0,p.Wg)({selectedServicesIds:t,access_token:window.localStorage.getItem("access_token"),email:n.email,id:n.id,username:n.username})),e.onMenuItemClick(),d(),s((0,$.gk)())}return(0,x.jsx)(O.Z,{children:(0,x.jsxs)(S.Z,{className:"h-48 sm:h-64",children:[(0,x.jsxs)(y.Z,{sx:{backgroundColor:function(e){return"light"===e.palette.mode?(0,F.$n)(e.palette.background.default,.4):(0,F.$n)(e.palette.background.default,.02)}},padding:"none",className:"w-40 md:w-64 text-center z-99",children:[(0,x.jsx)(j.Z,{indeterminate:o>0&&o<e.rowCount,checked:0!==e.rowCount&&o===e.rowCount,onChange:e.onSelectAllClick,style:{color:"#f4b231"}}),o>0&&(0,x.jsxs)(H.Z,{className:"flex items-center justify-center absolute w-64 top-0 ltr:left-0 rtl:right-0 mx-56 h-64 z-10 border-b-1",sx:{background:function(e){return e.palette.background.default}},children:[(0,x.jsx)(z.Z,{"aria-owns":r?"selectedBranchsMenu":null,"aria-haspopup":"true",onClick:function(e){l(e.currentTarget)},size:"large",children:(0,x.jsx)(h.Z,{children:"heroicons-outline:dots-horizontal"})}),(0,x.jsx)(D.Z,{id:"selectedBranchsMenu",anchorEl:r,open:Boolean(r),onClose:d,children:(0,x.jsx)(B.Z,{children:(0,x.jsxs)(A.Z,{onClick:function(){s((0,$.G3)({children:(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(L.Z,{id:"alert-dialog-title",children:"Are you sure you want to delete this service(s)?"}),(0,x.jsxs)(V.Z,{children:[(0,x.jsx)(c.Z,{onClick:function(){return s((0,$.gk)())},color:"secondary",children:"Skip"}),(0,x.jsx)(c.Z,{onClick:u,color:"secondary",autoFocus:!0,children:"confirm"})]})]})}))},children:[(0,x.jsx)(R.Z,{className:"min-w-40",children:(0,x.jsx)(h.Z,{children:"heroicons-outline:trash"})}),(0,x.jsx)(E.Z,{primary:"Remove"})]})})})]})]}),q.map((function(n){return(0,x.jsx)(y.Z,{sx:{backgroundColor:function(e){return"light"===e.palette.mode?(0,F.$n)(e.palette.background.default,.4):(0,F.$n)(e.palette.background.default,.02)}},className:"p-4 md:p-16",align:n.align,padding:n.disablePadding?"none":"normal",sortDirection:e.order.id===n.id&&e.order.direction,children:n.sort&&(0,x.jsx)(_.Z,{title:"Sort",placement:"right"===n.align?"bottom-end":"bottom-start",enterDelay:300,children:(0,x.jsx)(T.Z,{active:e.order.id===n.id,direction:e.order.direction,onClick:(t=n.id,function(n){e.onRequestSort(n,t)}),className:"font-semibold",style:{color:"#f4b231"},children:n.label})})},n.id);var t}),this)]})})};var W=(0,P.Z)((function(e){var n=(0,f.I0)(),t=(0,f.v9)(p.M2),o=(0,f.v9)(p.Eb),i=(0,f.v9)(M.dy),a=(0,N.useState)(!0),r=(0,Z.Z)(a,2),c=r[0],l=r[1],s=(0,N.useState)([]),m=(0,Z.Z)(s,2),h=m[0],v=m[1],P=(0,N.useState)(t),z=(0,Z.Z)(P,2),R=z[0],E=z[1],D=(0,N.useState)(0),A=(0,Z.Z)(D,2),B=A[0],T=A[1],_=(0,N.useState)(10),H=(0,Z.Z)(_,2),O=H[0],F=H[1],L=(0,N.useState)({direction:"asc",id:null}),V=(0,Z.Z)(L,2),$=V[0],q=V[1];return(0,N.useEffect)((function(){n((0,p.U2)({access_token:window.localStorage.getItem("access_token"),email:i.email,id:i.id,username:i.username})).then((function(){l(!1)}))}),[n,i.username,i.id,i.email]),(0,N.useEffect)((function(){0!==(null===o||void 0===o?void 0:o.length)?(E(b.Z.filter(t,(function(e){return e.name.toLowerCase().includes(o.toLowerCase())}))),T(0)):E(t)}),[t,o]),c?(0,x.jsx)("div",{className:"flex items-center justify-center h-full",children:(0,x.jsx)(I.Z,{})}):0===(null===R||void 0===R?void 0:R.length)||void 0===R?(0,x.jsx)(u.E.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.1}},className:"flex flex-1 items-center justify-center h-full",children:(0,x.jsx)(d.Z,{color:"text.secondary",variant:"h5",children:"There are no Services!"})}):(0,x.jsxs)("div",{className:"w-full flex flex-col min-h-full",children:[(0,x.jsx)(g.Z,{className:"grow overflow-x-auto",children:(0,x.jsxs)(k.Z,{stickyHeader:!0,className:"min-w-xl","aria-labelledby":"tableTitle",children:[(0,x.jsx)(U,{selectedServicesIds:h,order:$,onSelectAllClick:function(e){e.target.checked?v(R.map((function(e){return e.id}))):v([])},onRequestSort:function(e,n){var t=n,o="desc";$.id===n&&"desc"===$.direction&&(o="asc"),q({direction:o,id:t})},rowCount:null===R||void 0===R?void 0:R.length,onMenuItemClick:function(){v([])}}),(0,x.jsx)(w.Z,{children:b.Z.orderBy(R,[function(e){return"title"===$.id?e.title:e[$.id]}],[$.direction]).slice(B*O,B*O+O).map((function(n){var t,o=-1!==h.indexOf(n.id);return(0,x.jsxs)(S.Z,{className:"h-72 cursor-pointer",hover:!0,role:"checkbox","aria-checked":o,tabIndex:-1,selected:o,onClick:function(t){return o=n,void e.navigate("/websiteConfiguration/services/".concat(o.id,"/").concat(o.name));var o},children:[(0,x.jsx)(y.Z,{className:"w-40 md:w-64 text-center",padding:"none",children:(0,x.jsx)(j.Z,{checked:o,onClick:function(e){return e.stopPropagation()},onChange:function(e){return function(e,n){var t=h.indexOf(n),o=[];-1===t?o=o.concat(h,n):0===t?o=o.concat(h.slice(1)):t===(null===h||void 0===h?void 0:h.length)-1?o=o.concat(h.slice(0,-1)):t>0&&(o=o.concat(h.slice(0,t),h.slice(t+1))),v(o)}(0,n.id)}})}),(0,x.jsx)(y.Z,{className:"p-4 md:p-16",component:"th",scope:"row",align:"center",children:n.id}),(0,x.jsx)(y.Z,{className:"p-4 md:p-16",component:"th",scope:"row",align:"center",children:(null===(t=n.name)||void 0===t?void 0:t.length)>30?"".concat(n.name.slice(0,30),"..."):"".concat(n.name)}),(0,x.jsx)(y.Z,{className:"p-4 md:p-16",component:"th",scope:"row",align:"center",children:"".concat(n.createdAt.split("T")[0])})]},n.id)}))})]})}),(0,x.jsx)(C.Z,{className:"shrink-0 border-t-1",component:"div",count:null===R||void 0===R?void 0:R.length,rowsPerPage:O,page:B,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onPageChange:function(e,n){T(n)},onRowsPerPageChange:function(e){F(e.target.value)}})]})}));var G=(0,i.Z)("websiteConfiguration",r.Z)((function(){var e=(0,a.Z)((function(e){return e.breakpoints.down("lg")}));return(0,x.jsx)(o.Z,{header:(0,x.jsx)(v,{}),content:(0,x.jsx)(W,{}),scroll:e?"normal":"content"})}))},44758:function(e,n,t){t.d(n,{Z:function(){return S}});var o=t(4942),i=t(63366),a=t(87462),r=t(47313),c=t(21921),l=t(17551),s=t(97423),d=t(54750),u=t(46417),f=(0,d.Z)((0,u.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),m=(0,d.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),h=(0,d.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),p=t(91615),x=t(77342),v=t(88564),Z=t(32298);function g(e){return(0,Z.Z)("MuiCheckbox",e)}var b=(0,t(77430).Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),j=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],k=(0,v.ZP)(s.Z,{shouldForwardProp:function(e){return(0,v.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,t.indeterminate&&n.indeterminate,"default"!==t.color&&n["color".concat((0,p.Z)(t.color))]]}})((function(e){var n,t=e.theme,i=e.ownerState;return(0,a.Z)({color:(t.vars||t).palette.text.secondary},!i.disableRipple&&{"&:hover":{backgroundColor:t.vars?"rgba(".concat("default"===i.color?t.vars.palette.action.activeChannel:t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,l.Fq)("default"===i.color?t.palette.action.active:t.palette[i.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==i.color&&(n={},(0,o.Z)(n,"&.".concat(b.checked,", &.").concat(b.indeterminate),{color:(t.vars||t).palette[i.color].main}),(0,o.Z)(n,"&.".concat(b.disabled),{color:(t.vars||t).palette.action.disabled}),n))})),w=(0,u.jsx)(m,{}),y=(0,u.jsx)(f,{}),C=(0,u.jsx)(h,{}),S=r.forwardRef((function(e,n){var t,o,l=(0,x.Z)({props:e,name:"MuiCheckbox"}),s=l.checkedIcon,d=void 0===s?w:s,f=l.color,m=void 0===f?"primary":f,h=l.icon,v=void 0===h?y:h,Z=l.indeterminate,b=void 0!==Z&&Z,S=l.indeterminateIcon,N=void 0===S?C:S,P=l.inputProps,I=l.size,M=void 0===I?"medium":I,z=(0,i.Z)(l,j),R=b?N:v,E=b?N:d,D=(0,a.Z)({},l,{color:m,indeterminate:b,size:M}),A=function(e){var n=e.classes,t=e.indeterminate,o=e.color,i={root:["root",t&&"indeterminate","color".concat((0,p.Z)(o))]},r=(0,c.Z)(i,g,n);return(0,a.Z)({},n,r)}(D);return(0,u.jsx)(k,(0,a.Z)({type:"checkbox",inputProps:(0,a.Z)({"data-indeterminate":b},P),icon:r.cloneElement(R,{fontSize:null!=(t=R.props.fontSize)?t:M}),checkedIcon:r.cloneElement(E,{fontSize:null!=(o=E.props.fontSize)?o:M}),ownerState:D,ref:n},z,{classes:A}))}))},4117:function(e,n,t){t.d(n,{Z:function(){return p}});var o=t(63366),i=t(87462),a=t(47313),r=t(83061),c=t(21921),l=t(88564),s=t(77342),d=t(32298);function u(e){return(0,d.Z)("MuiDialogActions",e)}(0,t(77430).Z)("MuiDialogActions",["root","spacing"]);var f=t(46417),m=["className","disableSpacing"],h=(0,l.ZP)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,!t.disableSpacing&&n.spacing]}})((function(e){var n=e.ownerState;return(0,i.Z)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!n.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),p=a.forwardRef((function(e,n){var t=(0,s.Z)({props:e,name:"MuiDialogActions"}),a=t.className,l=t.disableSpacing,d=void 0!==l&&l,p=(0,o.Z)(t,m),x=(0,i.Z)({},t,{disableSpacing:d}),v=function(e){var n=e.classes,t={root:["root",!e.disableSpacing&&"spacing"]};return(0,c.Z)(t,u,n)}(x);return(0,f.jsx)(h,(0,i.Z)({className:(0,r.Z)(v.root,a),ownerState:x,ref:n},p))}))},33604:function(e,n,t){var o=t(87462),i=t(63366),a=t(47313),r=t(83061),c=t(21921),l=t(61113),s=t(88564),d=t(77342),u=t(93174),f=t(63909),m=t(46417),h=["className","id"],p=(0,s.ZP)(l.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:function(e,n){return n.root}})({padding:"16px 24px",flex:"0 0 auto"}),x=a.forwardRef((function(e,n){var t=(0,d.Z)({props:e,name:"MuiDialogTitle"}),l=t.className,s=t.id,x=(0,i.Z)(t,h),v=t,Z=function(e){var n=e.classes;return(0,c.Z)({root:["root"]},u.a,n)}(v),g=a.useContext(f.Z).titleId,b=void 0===g?s:g;return(0,m.jsx)(p,(0,o.Z)({component:"h2",className:(0,r.Z)(Z.root,l),ownerState:v,ref:n,variant:"h6",id:b},x))}));n.Z=x},93174:function(e,n,t){t.d(n,{a:function(){return i}});var o=t(32298);function i(e){return(0,o.Z)("MuiDialogTitle",e)}var a=(0,t(77430).Z)("MuiDialogTitle",["root"]);n.Z=a}}]);