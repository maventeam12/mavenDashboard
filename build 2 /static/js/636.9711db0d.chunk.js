"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[636],{66636:function(e,n,t){t.r(n),t.d(n,{default:function(){return G}});var o=t(47619),r=t(23132),a=t(38768),i=t(69382),c=t(69099),l=t(42461),s=t(82295),d=t(61113),u=t(81056),h=t(22408),m=t(29466),p=t(70492),f=t(76778),x=t(46417);var g=function(e){var n=(0,h.I0)(),t=(0,h.v9)(f.yj);return(0,x.jsxs)("div",{className:"flex flex-col sm:flex-row space-y-16 sm:space-y-0 flex-1 w-full items-center justify-between py-32 px-24 md:px-32",children:[(0,x.jsx)(d.Z,{component:u.E.span,initial:{x:-20},animate:{x:0,transition:{delay:.2}},delay:300,className:"text-24 md:text-32 font-extrabold tracking-tight",style:{color:"#f4b231"},children:"Event Photography"}),(0,x.jsxs)("div",{className:"flex flex-col w-full sm:w-auto sm:flex-row space-y-16 sm:space-y-0 flex-1 items-center justify-end space-x-8",children:[(0,x.jsxs)(s.Z,{component:u.E.div,initial:{y:-20,opacity:0},animate:{y:0,opacity:1,transition:{delay:.2}},className:"flex items-center w-full sm:max-w-256 space-x-8 px-16 rounded-full border-1 shadow-0",children:[(0,x.jsx)(p.Z,{color:"disabled",children:"heroicons-solid:search"}),(0,x.jsx)(l.Z,{placeholder:"Search event photography",className:"flex flex-1",disableUnderline:!0,fullWidth:!0,value:t,inputProps:{"aria-label":"Search"},onChange:function(e){return n((0,f.LN)(e))}})]}),(0,x.jsx)(u.E.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0,transition:{delay:.2}},children:(0,x.jsx)(c.Z,{className:"",component:m.rU,to:"/websiteConfiguration/eventPhotography/new",variant:"contained",color:"secondary",startIcon:(0,x.jsx)(p.Z,{children:"heroicons-outline:plus"}),children:"Add"})})]})]})},v=t(29439),Z=t(92550),b=t(58970),j=t(44758),w=t(66835),y=t(57861),k=t(67478),C=t(62323),S=t(24076),N=t(47313),P=t(8139),I=t(63738),M=t(58631),z=t(47131),E=t(74748),R=t(83213),B=t(85582),D=t(51405),F=t(14560),A=t(82558),T=t(61689),_=t(15743),H=t(23477),L=t(17551),O=t(33604),V=t(4117),$=t(15202),q=[{id:"id",align:"center",disablePadding:!1,label:"ID",sort:!0},{id:"eventId",align:"center",disablePadding:!1,label:"Event ID",sort:!0},{id:"imageFile",align:"left",disablePadding:!1,label:"Image",sort:!0},{id:"createdAt",align:"center",disablePadding:!1,label:"created",sort:!0}];var W=function(e){var n=(0,h.v9)(M.dy),t=e.selectedEventPhotographiesIds,o=t.length,r=(0,N.useState)(null),a=(0,v.Z)(r,2),i=a[0],l=a[1],s=(0,h.I0)();function d(){l(null)}function u(){s((0,f.Eg)({selectedEventPhotographiesIds:t,access_token:window.localStorage.getItem("access_token"),email:n.email,id:n.id,username:n.username})),e.onMenuItemClick(),d(),s((0,$.gk)())}return(0,x.jsx)(H.Z,{children:(0,x.jsxs)(S.Z,{className:"h-48 sm:h-64",children:[(0,x.jsxs)(k.Z,{sx:{backgroundColor:function(e){return"light"===e.palette.mode?(0,L.$n)(e.palette.background.default,.4):(0,L.$n)(e.palette.background.default,.02)}},padding:"none",className:"w-40 md:w-64 text-center z-99",children:[(0,x.jsx)(j.Z,{indeterminate:o>0&&o<e.rowCount,checked:0!==e.rowCount&&o===e.rowCount,onChange:e.onSelectAllClick,style:{color:"#f4b231"}}),o>0&&(0,x.jsxs)(_.Z,{className:"flex items-center justify-center absolute w-64 top-0 ltr:left-0 rtl:right-0 mx-56 h-64 z-10 border-b-1",sx:{background:function(e){return e.palette.background.default}},children:[(0,x.jsx)(z.Z,{"aria-owns":i?"selectedBranchsMenu":null,"aria-haspopup":"true",onClick:function(e){l(e.currentTarget)},size:"large",children:(0,x.jsx)(p.Z,{children:"heroicons-outline:dots-horizontal"})}),(0,x.jsx)(B.Z,{id:"selectedBranchsMenu",anchorEl:i,open:Boolean(i),onClose:d,children:(0,x.jsx)(F.Z,{children:(0,x.jsxs)(D.Z,{onClick:function(){s((0,$.G3)({children:(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(O.Z,{id:"alert-dialog-title",children:"Are you sure you want to delete this Photography(s)?"}),(0,x.jsxs)(V.Z,{children:[(0,x.jsx)(c.Z,{onClick:function(){return s((0,$.gk)())},color:"secondary",children:"Skip"}),(0,x.jsx)(c.Z,{onClick:u,color:"secondary",autoFocus:!0,children:"confirm"})]})]})}))},children:[(0,x.jsx)(E.Z,{className:"min-w-40",children:(0,x.jsx)(p.Z,{children:"heroicons-outline:trash"})}),(0,x.jsx)(R.Z,{primary:"Remove"})]})})})]})]}),q.map((function(n){return(0,x.jsx)(k.Z,{sx:{backgroundColor:function(e){return"light"===e.palette.mode?(0,L.$n)(e.palette.background.default,.4):(0,L.$n)(e.palette.background.default,.02)}},className:"p-4 md:p-16",align:n.align,padding:n.disablePadding?"none":"normal",sortDirection:e.order.id===n.id&&e.order.direction,children:n.sort&&(0,x.jsx)(T.Z,{title:"Sort",placement:"right"===n.align?"bottom-end":"bottom-start",enterDelay:300,children:(0,x.jsxs)(A.Z,{active:e.order.id===n.id,direction:e.order.direction,onClick:(t=n.id,function(n){e.onRequestSort(n,t)}),className:"font-semibold",style:{color:"#f4b231"},children:["\xa0\xa0\xa0",n.label]})})},n.id);var t}),this)]})})};var U=(0,P.Z)((function(e){var n=(0,h.I0)(),t=(0,h.v9)(f.Fx),o=(0,h.v9)(f.yj),r=(0,h.v9)(M.dy),a=(0,N.useState)(!0),i=(0,v.Z)(a,2),c=i[0],l=i[1],s=(0,N.useState)([]),m=(0,v.Z)(s,2),g=m[0],P=m[1],z=(0,N.useState)(t),E=(0,v.Z)(z,2),R=E[0],B=E[1],D=(0,N.useState)(0),F=(0,v.Z)(D,2),A=F[0],T=F[1],H=(0,N.useState)(10),L=(0,v.Z)(H,2),O=L[0],V=L[1],$=(0,N.useState)({direction:"asc",id:null}),q=(0,v.Z)($,2),U=q[0],G=q[1];return(0,N.useEffect)((function(){n((0,f.Jv)({access_token:window.localStorage.getItem("access_token"),email:r.email,id:r.id,username:r.username})).then((function(){l(!1)}))}),[n,r.username,r.id,r.email]),(0,N.useEffect)((function(){0!==o.length?(B(b.Z.filter(t,(function(e){return e.id.toString().toLowerCase().includes(o.toLowerCase())}))),T(0)):B(t)}),[t,o]),c?(0,x.jsx)("div",{className:"flex items-center justify-center h-full",children:(0,x.jsx)(I.Z,{})}):0===R.length||void 0===R?(0,x.jsx)(u.E.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.1}},className:"flex flex-1 items-center justify-center h-full",children:(0,x.jsx)(d.Z,{color:"text.secondary",variant:"h5",children:"There are no Event Photographies!"})}):(0,x.jsxs)("div",{className:"w-full flex flex-col min-h-full",children:[(0,x.jsx)(Z.Z,{className:"grow overflow-x-auto",children:(0,x.jsxs)(w.Z,{stickyHeader:!0,className:"min-w-xl","aria-labelledby":"tableTitle",children:[(0,x.jsx)(W,{selectedEventPhotographiesIds:g,order:U,onSelectAllClick:function(e){e.target.checked?P(R.map((function(e){return e.id}))):P([])},onRequestSort:function(e,n){var t=n,o="desc";U.id===n&&"desc"===U.direction&&(o="asc"),G({direction:o,id:t})},rowCount:R.length,onMenuItemClick:function(){P([])}}),(0,x.jsx)(y.Z,{children:b.Z.orderBy(R,[function(e){return"id"===U.id?e.id:e[U.id]}],[U.direction]).slice(A*O,A*O+O).map((function(n){var t=-1!==g.indexOf(n.id);return(0,x.jsxs)(S.Z,{className:"h-72 cursor-pointer",hover:!0,role:"checkbox","aria-checked":t,tabIndex:-1,selected:t,onClick:function(t){return o=n,void e.navigate("/websiteConfiguration/eventPhotography/".concat(o.id));var o},children:[(0,x.jsx)(k.Z,{className:"w-40 md:w-64 text-center",padding:"none",children:(0,x.jsx)(j.Z,{checked:t,onClick:function(e){return e.stopPropagation()},onChange:function(e){return function(e,n){var t=g.indexOf(n),o=[];-1===t?o=o.concat(g,n):0===t?o=o.concat(g.slice(1)):t===g.length-1?o=o.concat(g.slice(0,-1)):t>0&&(o=o.concat(g.slice(0,t),g.slice(t+1))),P(o)}(0,n.id)}})}),(0,x.jsx)(k.Z,{className:"p-4 md:p-16",component:"th",scope:"row",align:"center",children:n.id}),(0,x.jsx)(k.Z,{className:"p-4 md:p-16",component:"th",scope:"row",align:"center",children:n.eventId}),(0,x.jsx)(k.Z,{className:"p-4 md:p-16",component:"th",scope:"row",align:"center",children:n.imageFile?(0,x.jsx)(_.Z,{sx:{borderWidth:2,borderStyle:"solid",borderColor:"Background.paper"},className:"productImageItem flex items-center justify-center relative  w-112 h-112 overflow-hiden mt-16 rounded-16  mb-24 overflow-hidden cursor-pointer outline-none shadow hover:shadow-lg",children:(0,x.jsx)("img",{className:"max-w-none w-auto h-full",src:"https://www.api.mavenevents.ae/eventPhotography/".concat(n.imageFile),alt:"event"})}):(0,x.jsxs)(_.Z,{sx:{borderWidth:2,borderStyle:"solid",borderColor:"Background.paper"},component:"label",htmlFor:"imageFile",className:"productImageItem flex items-center justify-center relative  w-112 h-112 overflow-hiden mt-16 rounded-16  mb-24 overflow-hidden cursor-pointer outline-none shadow hover:shadow-lg",children:[(0,x.jsx)("div",{accept:"image/*",className:"hidden",id:"imageFile"}),(0,x.jsx)(p.Z,{size:32,color:"action",children:"heroicons-outline:upload"})]})}),(0,x.jsx)(k.Z,{className:"p-4 md:p-16",component:"th",scope:"row",align:"center",children:"".concat(n.createdAt.split("T")[0])})]},n.id)}))})]})}),(0,x.jsx)(C.Z,{className:"shrink-0 border-t-1",component:"div",count:R.length,rowsPerPage:O,page:A,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onPageChange:function(e,n){T(n)},onRowsPerPageChange:function(e){V(e.target.value)}})]})}));var G=(0,r.Z)("websiteConfiguration",i.Z)((function(){var e=(0,a.Z)((function(e){return e.breakpoints.down("lg")}));return(0,x.jsx)(o.Z,{header:(0,x.jsx)(g,{}),content:(0,x.jsx)(U,{}),scroll:e?"normal":"content"})}))},44758:function(e,n,t){t.d(n,{Z:function(){return S}});var o=t(4942),r=t(63366),a=t(87462),i=t(47313),c=t(21921),l=t(17551),s=t(97423),d=t(54750),u=t(46417),h=(0,d.Z)((0,u.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),m=(0,d.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),p=(0,d.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),f=t(91615),x=t(77342),g=t(88564),v=t(32298);function Z(e){return(0,v.Z)("MuiCheckbox",e)}var b=(0,t(77430).Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),j=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],w=(0,g.ZP)(s.Z,{shouldForwardProp:function(e){return(0,g.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,t.indeterminate&&n.indeterminate,"default"!==t.color&&n["color".concat((0,f.Z)(t.color))]]}})((function(e){var n,t=e.theme,r=e.ownerState;return(0,a.Z)({color:(t.vars||t).palette.text.secondary},!r.disableRipple&&{"&:hover":{backgroundColor:t.vars?"rgba(".concat("default"===r.color?t.vars.palette.action.activeChannel:t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,l.Fq)("default"===r.color?t.palette.action.active:t.palette[r.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==r.color&&(n={},(0,o.Z)(n,"&.".concat(b.checked,", &.").concat(b.indeterminate),{color:(t.vars||t).palette[r.color].main}),(0,o.Z)(n,"&.".concat(b.disabled),{color:(t.vars||t).palette.action.disabled}),n))})),y=(0,u.jsx)(m,{}),k=(0,u.jsx)(h,{}),C=(0,u.jsx)(p,{}),S=i.forwardRef((function(e,n){var t,o,l=(0,x.Z)({props:e,name:"MuiCheckbox"}),s=l.checkedIcon,d=void 0===s?y:s,h=l.color,m=void 0===h?"primary":h,p=l.icon,g=void 0===p?k:p,v=l.indeterminate,b=void 0!==v&&v,S=l.indeterminateIcon,N=void 0===S?C:S,P=l.inputProps,I=l.size,M=void 0===I?"medium":I,z=(0,r.Z)(l,j),E=b?N:g,R=b?N:d,B=(0,a.Z)({},l,{color:m,indeterminate:b,size:M}),D=function(e){var n=e.classes,t=e.indeterminate,o=e.color,r={root:["root",t&&"indeterminate","color".concat((0,f.Z)(o))]},i=(0,c.Z)(r,Z,n);return(0,a.Z)({},n,i)}(B);return(0,u.jsx)(w,(0,a.Z)({type:"checkbox",inputProps:(0,a.Z)({"data-indeterminate":b},P),icon:i.cloneElement(E,{fontSize:null!=(t=E.props.fontSize)?t:M}),checkedIcon:i.cloneElement(R,{fontSize:null!=(o=R.props.fontSize)?o:M}),ownerState:B,ref:n},z,{classes:D}))}))},4117:function(e,n,t){t.d(n,{Z:function(){return f}});var o=t(63366),r=t(87462),a=t(47313),i=t(83061),c=t(21921),l=t(88564),s=t(77342),d=t(32298);function u(e){return(0,d.Z)("MuiDialogActions",e)}(0,t(77430).Z)("MuiDialogActions",["root","spacing"]);var h=t(46417),m=["className","disableSpacing"],p=(0,l.ZP)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,!t.disableSpacing&&n.spacing]}})((function(e){var n=e.ownerState;return(0,r.Z)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!n.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),f=a.forwardRef((function(e,n){var t=(0,s.Z)({props:e,name:"MuiDialogActions"}),a=t.className,l=t.disableSpacing,d=void 0!==l&&l,f=(0,o.Z)(t,m),x=(0,r.Z)({},t,{disableSpacing:d}),g=function(e){var n=e.classes,t={root:["root",!e.disableSpacing&&"spacing"]};return(0,c.Z)(t,u,n)}(x);return(0,h.jsx)(p,(0,r.Z)({className:(0,i.Z)(g.root,a),ownerState:x,ref:n},f))}))},33604:function(e,n,t){var o=t(87462),r=t(63366),a=t(47313),i=t(83061),c=t(21921),l=t(61113),s=t(88564),d=t(77342),u=t(93174),h=t(63909),m=t(46417),p=["className","id"],f=(0,s.ZP)(l.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:function(e,n){return n.root}})({padding:"16px 24px",flex:"0 0 auto"}),x=a.forwardRef((function(e,n){var t=(0,d.Z)({props:e,name:"MuiDialogTitle"}),l=t.className,s=t.id,x=(0,r.Z)(t,p),g=t,v=function(e){var n=e.classes;return(0,c.Z)({root:["root"]},u.a,n)}(g),Z=a.useContext(h.Z).titleId,b=void 0===Z?s:Z;return(0,m.jsx)(f,(0,o.Z)({component:"h2",className:(0,i.Z)(v.root,l),ownerState:g,ref:n,variant:"h6",id:b},x))}));n.Z=x},93174:function(e,n,t){t.d(n,{a:function(){return r}});var o=t(32298);function r(e){return(0,o.Z)("MuiDialogTitle",e)}var a=(0,t(77430).Z)("MuiDialogTitle",["root"]);n.Z=a}}]);