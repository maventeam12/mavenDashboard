"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[48],{52048:function(e,n,t){t.r(n),t.d(n,{default:function(){return W}});var a=t(47619),o=t(23132),r=t(38768),i=t(78138),c=t(69099),l=t(42461),s=t(82295),d=t(61113),u=t(81056),m=t(22408),p=t(29466),h=t(70492),f=t(91258),x=t(46417);var g=function(e){var n=(0,m.I0)(),t=(0,m.v9)(f._n);return(0,x.jsxs)("div",{className:"flex flex-col sm:flex-row space-y-16 sm:space-y-0 flex-1 w-full items-center justify-between py-32 px-24 md:px-32",children:[(0,x.jsx)(d.Z,{component:u.E.span,initial:{x:-20},animate:{x:0,transition:{delay:.2}},delay:300,className:"text-24 md:text-32 font-extrabold tracking-tight",style:{color:"#f4b231"},children:"Team"}),(0,x.jsxs)("div",{className:"flex flex-col w-full sm:w-auto sm:flex-row space-y-16 sm:space-y-0 flex-1 items-center justify-end space-x-8",children:[(0,x.jsxs)(s.Z,{component:u.E.div,initial:{y:-20,opacity:0},animate:{y:0,opacity:1,transition:{delay:.2}},className:"flex items-center w-full sm:max-w-256 space-x-8 px-16 rounded-full border-1 shadow-0",children:[(0,x.jsx)(h.Z,{color:"disabled",children:"heroicons-solid:search"}),(0,x.jsx)(l.Z,{placeholder:"Search team",className:"flex flex-1",disableUnderline:!0,fullWidth:!0,value:t,inputProps:{"aria-label":"Search"},onChange:function(e){return n((0,f.b3)(e))}})]}),(0,x.jsx)(u.E.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0,transition:{delay:.2}},children:(0,x.jsx)(c.Z,{className:"",component:p.rU,to:"/users/team/new",variant:"contained",color:"secondary",startIcon:(0,x.jsx)(h.Z,{children:"heroicons-outline:plus"}),children:"Add"})})]})]})},Z=t(29439),v=t(92550),b=t(58970),j=t(44758),k=t(66835),w=t(57861),y=t(67478),C=t(62323),N=t(24076),S=t(47313),P=t(8139),I=t(63738),M=t(58631),z=t(47131),R=t(74748),A=t(83213),D=t(85582),B=t(51405),E=t(14560),_=t(82558),T=t(61689),O=t(15743),H=t(23477),U=t(17551),F=t(33604),L=t(4117),q=t(15202),V=[{id:"id",align:"center",disablePadding:!1,label:"ID",sort:!0},{id:"name",align:"center",disablePadding:!1,label:"Name",sort:!0},{id:"username",align:"center",disablePadding:!1,label:"Username",sort:!0},{id:"email",align:"center",disablePadding:!1,label:"Email",sort:!0},{id:"phone",align:"center",disablePadding:!1,label:"Phone",sort:!0},{id:"isAdmin",align:"center",disablePadding:!1,label:"Admin",sort:!0},{id:"createdAt",align:"center",disablePadding:!1,label:"Created",sort:!0}];var $=function(e){var n=(0,m.v9)(M.dy),t=e.selectedCompanyUsersIds,a=t.length,o=(0,S.useState)(null),r=(0,Z.Z)(o,2),i=r[0],l=r[1],s=(0,m.I0)();function d(){l(null)}function u(){s((0,f.gf)({selectedCompanyUsersIds:t,access_token:window.localStorage.getItem("access_token"),email:n.email,id:n.id,username:n.username})),e.onMenuItemClick(),d(),s((0,q.gk)())}return(0,x.jsx)(H.Z,{children:(0,x.jsxs)(N.Z,{className:"h-48 sm:h-64",children:[(0,x.jsxs)(y.Z,{sx:{backgroundColor:function(e){return"light"===e.palette.mode?(0,U.$n)(e.palette.background.default,.4):(0,U.$n)(e.palette.background.default,.02)}},padding:"none",className:"w-40 md:w-64 text-center z-99",children:[(0,x.jsx)(j.Z,{indeterminate:a>0&&a<e.rowCount,checked:0!==e.rowCount&&a===e.rowCount,onChange:e.onSelectAllClick,style:{color:"#f4b231"}}),a>0&&(0,x.jsxs)(O.Z,{className:"flex items-center justify-center absolute w-64 top-0 ltr:left-0 rtl:right-0 mx-56 h-64 z-10 border-b-1",sx:{background:function(e){return e.palette.background.default}},children:[(0,x.jsx)(z.Z,{"aria-owns":i?"selectedBranchsMenu":null,"aria-haspopup":"true",onClick:function(e){l(e.currentTarget)},size:"large",children:(0,x.jsx)(h.Z,{children:"heroicons-outline:dots-horizontal"})}),(0,x.jsx)(D.Z,{id:"selectedBranchsMenu",anchorEl:i,open:Boolean(i),onClose:d,children:(0,x.jsx)(E.Z,{children:(0,x.jsxs)(B.Z,{onClick:function(){s((0,q.G3)({children:(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(F.Z,{id:"alert-dialog-title",children:"Are you sure you want to delete this user(s)?"}),(0,x.jsxs)(L.Z,{children:[(0,x.jsx)(c.Z,{onClick:function(){return s((0,q.gk)())},color:"secondary",children:"Skip"}),(0,x.jsx)(c.Z,{onClick:u,color:"secondary",autoFocus:!0,children:"confirm"})]})]})}))},children:[(0,x.jsx)(R.Z,{className:"min-w-40",children:(0,x.jsx)(h.Z,{children:"heroicons-outline:trash"})}),(0,x.jsx)(A.Z,{primary:"Remove"})]})})})]})]}),V.map((function(n){return(0,x.jsx)(y.Z,{sx:{backgroundColor:function(e){return"light"===e.palette.mode?(0,U.$n)(e.palette.background.default,.4):(0,U.$n)(e.palette.background.default,.02)}},className:"p-4 md:p-16",align:n.align,padding:n.disablePadding?"none":"normal",sortDirection:e.order.id===n.id&&e.order.direction,children:n.sort&&(0,x.jsx)(T.Z,{title:"Sort",placement:"right"===n.align?"bottom-end":"bottom-start",enterDelay:300,children:(0,x.jsx)(_.Z,{active:e.order.id===n.id,direction:e.order.direction,onClick:(t=n.id,function(n){e.onRequestSort(n,t)}),className:"font-semibold",style:{color:"#f4b231"},children:n.label})})},n.id);var t}),this)]})})};var G=(0,P.Z)((function(e){var n=(0,m.I0)(),t=(0,m.v9)(f.vq),a=(0,m.v9)(f._n),o=(0,m.v9)(M.dy),r=(0,S.useState)(!0),i=(0,Z.Z)(r,2),c=i[0],l=i[1],s=(0,S.useState)([]),p=(0,Z.Z)(s,2),h=p[0],g=p[1],P=(0,S.useState)(t),z=(0,Z.Z)(P,2),R=z[0],A=z[1],D=(0,S.useState)(0),B=(0,Z.Z)(D,2),E=B[0],_=B[1],T=(0,S.useState)(10),O=(0,Z.Z)(T,2),H=O[0],U=O[1],F=(0,S.useState)({direction:"asc",id:null}),L=(0,Z.Z)(F,2),q=L[0],V=L[1];return(0,S.useEffect)((function(){n((0,f.sO)({access_token:window.localStorage.getItem("access_token"),email:o.email,id:o.id,username:o.username})).then((function(){l(!1)}))}),[n,o.username,o.id,o.email]),(0,S.useEffect)((function(){0!==a.length?(A(b.Z.filter(t,(function(e){return e.name.toLowerCase().includes(a.toLowerCase())}))),_(0)):A(t)}),[t,a]),c?(0,x.jsx)("div",{className:"flex items-center justify-center h-full",children:(0,x.jsx)(I.Z,{})}):0===R.length||void 0===R?(0,x.jsx)(u.E.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.1}},className:"flex flex-1 items-center justify-center h-full",children:(0,x.jsx)(d.Z,{color:"text.secondary",variant:"h5",children:"There are no users!"})}):(0,x.jsxs)("div",{className:"w-full flex flex-col min-h-full",children:[(0,x.jsx)(v.Z,{className:"grow overflow-x-auto",children:(0,x.jsxs)(k.Z,{stickyHeader:!0,className:"min-w-xl","aria-labelledby":"tableTitle",children:[(0,x.jsx)($,{selectedCompanyUsersIds:h,order:q,onSelectAllClick:function(e){e.target.checked?g(R.map((function(e){return e.id}))):g([])},onRequestSort:function(e,n){var t=n,a="desc";q.id===n&&"desc"===q.direction&&(a="asc"),V({direction:a,id:t})},rowCount:R.length,onMenuItemClick:function(){g([])}}),(0,x.jsx)(w.Z,{children:b.Z.orderBy(R,[function(e){return"username"===q.id?e.username:e[q.id]}],[q.direction]).slice(E*H,E*H+H).map((function(n){var t=-1!==h.indexOf(n.id);return(0,x.jsxs)(N.Z,{className:"h-72 cursor-pointer",hover:!0,role:"checkbox","aria-checked":t,tabIndex:-1,selected:t,onClick:function(t){return a=n,void e.navigate("/users/team/".concat(a.id));var a},children:[(0,x.jsx)(y.Z,{className:"w-40 md:w-64 text-center",padding:"checkbox",children:(0,x.jsx)(j.Z,{checked:t,onClick:function(e){return e.stopPropagation()},onChange:function(e){return function(e,n){var t=h.indexOf(n),a=[];-1===t?a=a.concat(h,n):0===t?a=a.concat(h.slice(1)):t===h.length-1?a=a.concat(h.slice(0,-1)):t>0&&(a=a.concat(h.slice(0,t),h.slice(t+1))),g(a)}(0,n.id)}})}),(0,x.jsx)(y.Z,{className:"p-4 md:p-16",component:"th",scope:"row",align:"center",children:n.id}),(0,x.jsx)(y.Z,{className:"p-4 md:p-16",component:"th",scope:"row",align:"center",children:n.name.length>30?"".concat(n.name.slice(0,30),"..."):"".concat(n.name)}),(0,x.jsx)(y.Z,{className:"p-4 md:p-16",component:"th",scope:"row",align:"center",children:n.username.length>30?"".concat(n.username.slice(0,30),"..."):"".concat(n.username)}),(0,x.jsx)(y.Z,{className:"p-4 md:p-16",component:"th",scope:"row",align:"center",children:n.email.length>30?"".concat(n.email.slice(0,30),"..."):"".concat(n.email)}),(0,x.jsx)(y.Z,{className:"p-4 md:p-16",component:"th",scope:"row",align:"center",children:n.phone.length>30?"".concat(n.phone.slice(0,30),"..."):"".concat(n.phone)}),(0,x.jsx)(y.Z,{className:"p-4 md:p-16",component:"th",scope:"row",align:"center",children:n.isAdmin?(0,x.jsx)("div",{className:"text-green-600",style:{fontSize:"30px"},children:"\u2713"}):(0,x.jsx)("div",{className:"text-red-800",style:{fontSize:"20px"},children:"\u274c"})}),(0,x.jsx)(y.Z,{className:"p-4 md:p-16",component:"th",scope:"row",align:"center",children:"".concat(n.createdAt.split("T")[0])})]},n.id)}))})]})}),(0,x.jsx)(C.Z,{className:"shrink-0 border-t-1",component:"div",count:R.length,rowsPerPage:H,page:E,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onPageChange:function(e,n){_(n)},onRowsPerPageChange:function(e){U(e.target.value)}})]})}));var W=(0,o.Z)("users",i.Z)((function(){var e=(0,r.Z)((function(e){return e.breakpoints.down("lg")}));return(0,x.jsx)(a.Z,{header:(0,x.jsx)(g,{}),content:(0,x.jsx)(G,{}),scroll:e?"normal":"content"})}))},44758:function(e,n,t){t.d(n,{Z:function(){return N}});var a=t(4942),o=t(63366),r=t(87462),i=t(47313),c=t(21921),l=t(17551),s=t(97423),d=t(54750),u=t(46417),m=(0,d.Z)((0,u.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),p=(0,d.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),h=(0,d.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),f=t(91615),x=t(77342),g=t(88564),Z=t(32298);function v(e){return(0,Z.Z)("MuiCheckbox",e)}var b=(0,t(77430).Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),j=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],k=(0,g.ZP)(s.Z,{shouldForwardProp:function(e){return(0,g.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,t.indeterminate&&n.indeterminate,"default"!==t.color&&n["color".concat((0,f.Z)(t.color))]]}})((function(e){var n,t=e.theme,o=e.ownerState;return(0,r.Z)({color:(t.vars||t).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:t.vars?"rgba(".concat("default"===o.color?t.vars.palette.action.activeChannel:t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,l.Fq)("default"===o.color?t.palette.action.active:t.palette[o.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==o.color&&(n={},(0,a.Z)(n,"&.".concat(b.checked,", &.").concat(b.indeterminate),{color:(t.vars||t).palette[o.color].main}),(0,a.Z)(n,"&.".concat(b.disabled),{color:(t.vars||t).palette.action.disabled}),n))})),w=(0,u.jsx)(p,{}),y=(0,u.jsx)(m,{}),C=(0,u.jsx)(h,{}),N=i.forwardRef((function(e,n){var t,a,l=(0,x.Z)({props:e,name:"MuiCheckbox"}),s=l.checkedIcon,d=void 0===s?w:s,m=l.color,p=void 0===m?"primary":m,h=l.icon,g=void 0===h?y:h,Z=l.indeterminate,b=void 0!==Z&&Z,N=l.indeterminateIcon,S=void 0===N?C:N,P=l.inputProps,I=l.size,M=void 0===I?"medium":I,z=(0,o.Z)(l,j),R=b?S:g,A=b?S:d,D=(0,r.Z)({},l,{color:p,indeterminate:b,size:M}),B=function(e){var n=e.classes,t=e.indeterminate,a=e.color,o={root:["root",t&&"indeterminate","color".concat((0,f.Z)(a))]},i=(0,c.Z)(o,v,n);return(0,r.Z)({},n,i)}(D);return(0,u.jsx)(k,(0,r.Z)({type:"checkbox",inputProps:(0,r.Z)({"data-indeterminate":b},P),icon:i.cloneElement(R,{fontSize:null!=(t=R.props.fontSize)?t:M}),checkedIcon:i.cloneElement(A,{fontSize:null!=(a=A.props.fontSize)?a:M}),ownerState:D,ref:n},z,{classes:B}))}))},4117:function(e,n,t){t.d(n,{Z:function(){return f}});var a=t(63366),o=t(87462),r=t(47313),i=t(83061),c=t(21921),l=t(88564),s=t(77342),d=t(32298);function u(e){return(0,d.Z)("MuiDialogActions",e)}(0,t(77430).Z)("MuiDialogActions",["root","spacing"]);var m=t(46417),p=["className","disableSpacing"],h=(0,l.ZP)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,!t.disableSpacing&&n.spacing]}})((function(e){var n=e.ownerState;return(0,o.Z)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!n.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),f=r.forwardRef((function(e,n){var t=(0,s.Z)({props:e,name:"MuiDialogActions"}),r=t.className,l=t.disableSpacing,d=void 0!==l&&l,f=(0,a.Z)(t,p),x=(0,o.Z)({},t,{disableSpacing:d}),g=function(e){var n=e.classes,t={root:["root",!e.disableSpacing&&"spacing"]};return(0,c.Z)(t,u,n)}(x);return(0,m.jsx)(h,(0,o.Z)({className:(0,i.Z)(g.root,r),ownerState:x,ref:n},f))}))},33604:function(e,n,t){var a=t(87462),o=t(63366),r=t(47313),i=t(83061),c=t(21921),l=t(61113),s=t(88564),d=t(77342),u=t(93174),m=t(63909),p=t(46417),h=["className","id"],f=(0,s.ZP)(l.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:function(e,n){return n.root}})({padding:"16px 24px",flex:"0 0 auto"}),x=r.forwardRef((function(e,n){var t=(0,d.Z)({props:e,name:"MuiDialogTitle"}),l=t.className,s=t.id,x=(0,o.Z)(t,h),g=t,Z=function(e){var n=e.classes;return(0,c.Z)({root:["root"]},u.a,n)}(g),v=r.useContext(m.Z).titleId,b=void 0===v?s:v;return(0,p.jsx)(f,(0,a.Z)({component:"h2",className:(0,i.Z)(Z.root,l),ownerState:g,ref:n,variant:"h6",id:b},x))}));n.Z=x},93174:function(e,n,t){t.d(n,{a:function(){return o}});var a=t(32298);function o(e){return(0,a.Z)("MuiDialogTitle",e)}var r=(0,t(77430).Z)("MuiDialogTitle",["root"]);n.Z=r}}]);