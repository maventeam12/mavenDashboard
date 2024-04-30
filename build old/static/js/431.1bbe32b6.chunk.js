"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[431],{47619:function(e,t,r){r.d(t,{Z:function(){return A}});var n=r(30168),a=r(4942),i=r(1413),s=r(45987),o=r(92550),c=r(88564),l=r(83061),d=r(47313),u=r(70499),f=r(46417);var g=function(e){return(0,f.jsx)("div",{className:(0,l.Z)("FusePageCarded-header","container"),children:e.header&&e.header})},p=r(29439),h=r(46923),m=r(22202),x=r(60211),b=r(22408),v=r(19860),C=r(26159),Z=r(62201);var y=function(e){var t=(0,v.Z)(),r=(0,b.v9)((0,Z.lK)(t.palette.primary.main));return(0,f.jsxs)(o.Z,{enable:e.innerScroll,children:[e.header&&(0,f.jsx)(C.Z,{theme:r,children:(0,f.jsx)("div",{className:(0,l.Z)("FusePageCarded-sidebarHeader",e.variant,e.sidebarInner&&"FusePageCarded-sidebarHeaderInnerSidebar"),children:e.header})}),e.content&&(0,f.jsx)("div",{className:"FusePageCarded-sidebarContent",children:e.content})]})},P=(0,d.forwardRef)((function(e,t){var r=e.open,n=e.position,a=e.variant,s=(e.rootRef,(0,d.useState)(r)),o=(0,p.Z)(s,2),c=o[0],u=o[1];(0,d.useImperativeHandle)(t,(function(){return{toggleSidebar:g}}));var g=(0,d.useCallback)((function(e){u(e)}),[]);return(0,d.useEffect)((function(){g(r)}),[g,r]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(m.Z,{lgUp:"permanent"===a,children:(0,f.jsx)(x.Z,{variant:"temporary",anchor:n,open:c,onOpen:function(e){},onClose:function(){return null===e||void 0===e?void 0:e.onClose()},disableSwipeToOpen:!0,classes:{root:(0,l.Z)("FusePageCarded-sidebarWrapper",a),paper:(0,l.Z)("FusePageCarded-sidebar",a,"left"===n?"FusePageCarded-leftSidebar":"FusePageCarded-rightSidebar")},ModalProps:{keepMounted:!0},BackdropProps:{classes:{root:"FusePageCarded-backdrop"}},style:{position:"absolute"},children:(0,f.jsx)(y,(0,i.Z)({},e))})}),"permanent"===a&&(0,f.jsx)(m.Z,{lgDown:!0,children:(0,f.jsx)(h.ZP,{variant:"permanent",anchor:n,className:(0,l.Z)("FusePageCarded-sidebarWrapper",a,c?"opened":"closed","left"===n?"FusePageCarded-leftSidebar":"FusePageCarded-rightSidebar"),open:c,onClose:null===e||void 0===e?void 0:e.onClose,classes:{paper:(0,l.Z)("FusePageCarded-sidebar",a)},children:(0,f.jsx)(y,(0,i.Z)({},e))})})]})}));P.defaultProps={open:!0};var S,w=P,j=["theme"],k=(0,c.ZP)("div")((function(e){var t=e.theme,r=(0,s.Z)(e,j);return{display:"flex",flexDirection:"column",minWidth:0,minHeight:"100%",position:"relative",flex:"1 1 auto",width:"100%",height:"auto",backgroundColor:t.palette.background.default,"& .FusePageCarded-scroll-content":{height:"100%"},"& .FusePageCarded-wrapper":(0,i.Z)({display:"flex",flexDirection:"row",flex:"1 1 auto",zIndex:2,maxWidth:"100%",minWidth:0,height:"100%",backgroundColor:t.palette.background.paper},"content"===r.scroll&&{position:"absolute",top:0,bottom:0,right:0,left:0,overflow:"hidden"}),"& .FusePageCarded-header":{display:"flex",flex:"0 0 auto"},"& .FusePageCarded-contentWrapper":{display:"flex",flexDirection:"column",flex:"1 1 auto",overflow:"auto",WebkitOverflowScrolling:"touch",zIndex:9999},"& .FusePageCarded-toolbar":{height:N,minHeight:N,display:"flex",alignItems:"center"},"& .FusePageCarded-content":{flex:"1 0 auto"},"& .FusePageCarded-sidebarWrapper":{overflow:"hidden",backgroundColor:"transparent",position:"absolute","&.permanent":(0,a.Z)({},t.breakpoints.up("lg"),{position:"relative",marginLeft:0,marginRight:0,transition:t.transitions.create("margin",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),"&.closed":{transition:t.transitions.create("margin",{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen}),"&.FusePageCarded-leftSidebar":{marginLeft:-r.leftsidebarwidth},"&.FusePageCarded-rightSidebar":{marginRight:-r.rightsidebarwidth}}})},"& .FusePageCarded-sidebar":{position:"absolute",backgroundColor:t.palette.background.paper,color:t.palette.text.primary,"&.permanent":(0,a.Z)({},t.breakpoints.up("lg"),{position:"relative"}),maxWidth:"100%",height:"100%"},"& .FusePageCarded-leftSidebar":(0,a.Z)({width:r.leftsidebarwidth},t.breakpoints.up("lg"),{}),"& .FusePageCarded-rightSidebar":(0,a.Z)({width:r.rightsidebarwidth},t.breakpoints.up("lg"),{}),"& .FusePageCarded-sidebarHeader":{height:F,minHeight:F,backgroundColor:t.palette.primary.dark,color:t.palette.primary.contrastText},"& .FusePageCarded-sidebarHeaderInnerSidebar":{backgroundColor:"transparent",color:"inherit",height:"auto",minHeight:"auto"},"& .FusePageCarded-sidebarContent":{display:"flex",flexDirection:"column",minHeight:"100%"},"& .FusePageCarded-backdrop":{position:"absolute"}}})),F=120,N=64,I=(0,d.forwardRef)((function(e,t){var r=(0,d.useRef)(null),n=(0,d.useRef)(null),a=(0,d.useRef)(null);return(0,d.useImperativeHandle)(t,(function(){return{rootRef:a,toggleLeftSidebar:function(e){r.current.toggleSidebar(e)},toggleRightSidebar:function(e){n.current.toggleSidebar(e)}}})),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(u.Z,{styles:function(t){return(0,i.Z)((0,i.Z)({},"page"!==e.scroll&&{"#fuse-toolbar":{position:"static"},"#fuse-footer":{position:"static"}}),"page"===e.scroll&&{"#fuse-toolbar":{position:"sticky",top:0},"#fuse-footer":{position:"sticky",bottom:0}})}}),(0,f.jsxs)(k,{className:(0,l.Z)("FusePageCarded-root","FusePageCarded-scroll-".concat(e.scroll),e.className),ref:a,scroll:e.scroll,leftsidebarwidth:e.leftSidebarWidth,rightsidebarwidth:e.rightSidebarWidth,children:[e.header&&(0,f.jsx)(g,{header:e.header}),(0,f.jsx)("div",{className:"flex flex-auto flex-col container z-10 h-full shadow-1 rounded-t-16 relative overflow-hidden",children:(0,f.jsxs)("div",{className:"FusePageCarded-wrapper",children:[e.leftSidebarContent&&(0,f.jsx)(w,{position:"left",content:e.leftSidebarContent,variant:e.leftSidebarVariant||"permanent",ref:r,rootRef:a,open:e.leftSidebarOpen,onClose:e.leftSidebarOnClose}),(0,f.jsx)(o.Z,{className:"FusePageCarded-contentWrapper",enable:"content"===e.scroll,children:e.content&&(0,f.jsx)("div",{className:(0,l.Z)("FusePageCarded-content"),children:e.content})}),e.rightSidebarContent&&(0,f.jsx)(w,{position:"right",content:e.rightSidebarContent,variant:e.rightSidebarVariant||"permanent",ref:n,rootRef:a,open:e.rightSidebarOpen,onClose:e.rightSidebarOnClose})]})})]})]})}));I.defaultProps={classes:{},scroll:"page",leftSidebarOpen:!1,rightSidebarOpen:!1,rightSidebarWidth:240,leftSidebarWidth:240};var A=(0,d.memo)((0,c.ZP)(I)(S||(S=(0,n.Z)([""]))))},19431:function(e,t,r){r.r(t),r.d(t,{default:function(){return W}});var n=r(47619),a=r(23132),i=r(38768),s=r(20372),o=r(42461),c=r(82295),l=r(61113),d=r(81056),u=r(22408),f=r(70492),g=r(348),p=r(46417);var h=function(e){var t=(0,u.I0)(),r=(0,u.v9)(g.sn);return(0,p.jsxs)("div",{className:"flex flex-col sm:flex-row space-y-16 sm:space-y-0 flex-1 w-full items-center justify-between py-32 px-24 md:px-32",children:[(0,p.jsx)(l.Z,{component:d.E.span,initial:{x:-20},animate:{x:0,transition:{delay:.2}},delay:300,className:"text-24 md:text-32 font-extrabold tracking-tight",style:{color:"#f4b231"},children:"Advertisements"}),(0,p.jsx)("div",{className:"flex flex-col w-full sm:w-auto sm:flex-row space-y-16 sm:space-y-0 flex-1 items-center justify-end space-x-8",children:(0,p.jsxs)(c.Z,{component:d.E.div,initial:{y:-20,opacity:0},animate:{y:0,opacity:1,transition:{delay:.2}},className:"flex items-center w-full sm:max-w-256 space-x-8 px-16 rounded-full border-1 shadow-0",children:[(0,p.jsx)(f.Z,{color:"disabled",children:"heroicons-solid:search"}),(0,p.jsx)(o.Z,{placeholder:"Search Advertisement",className:"flex flex-1",disableUnderline:!0,fullWidth:!0,value:r,inputProps:{"aria-label":"Search"},onChange:function(e){return t((0,g.Vx)(e))}})]})})]})},m=r(29439),x=r(92550),b=r(58970),v=r(66835),C=r(57861),Z=r(67478),y=r(62323),P=r(24076),S=r(47313),w=r(8139),j=r(63738),k=r(58631),F=r(82558),N=r(61689),I=r(23477),A=r(17551),M=[{id:"id",align:"center",disablePadding:!1,label:"ID",sort:!0},{id:"message",align:"center",disablePadding:!1,label:"Message",sort:!0},{id:"createdAt",align:"center",disablePadding:!1,label:"AT",sort:!0}];var R=function(e){return(0,p.jsx)(I.Z,{children:(0,p.jsx)(P.Z,{className:"h-48 sm:h-64",children:M.map((function(t){return(0,p.jsx)(Z.Z,{sx:{backgroundColor:function(e){return"light"===e.palette.mode?(0,A.$n)(e.palette.background.default,.4):(0,A.$n)(e.palette.background.default,.02)}},className:"p-4 md:p-16",align:t.align,padding:t.disablePadding?"none":"normal",sortDirection:e.order.id===t.id&&e.order.direction,children:t.sort&&(0,p.jsx)(N.Z,{title:"Sort",placement:"right"===t.align?"bottom-end":"bottom-start",children:(0,p.jsx)(F.Z,{active:e.order.id===t.id,direction:e.order.direction,onClick:(r=t.id,function(t){e.onRequestSort(t,r)}),className:"font-semibold",style:{color:"#f4b231"},children:t.label})})},t.id);var r}),this)})})};var T=(0,w.Z)((function(e){var t=(0,u.I0)(),r=(0,u.v9)(g.GZ),n=(0,u.v9)(g.sn),a=(0,u.v9)(k.dy),i=(0,S.useState)(!0),s=(0,m.Z)(i,2),o=s[0],c=s[1],f=(0,S.useState)([]),h=(0,m.Z)(f,2),w=h[0],F=h[1],N=(0,S.useState)(r),I=(0,m.Z)(N,2),A=I[0],M=I[1],T=(0,S.useState)(0),W=(0,m.Z)(T,2),H=W[0],_=W[1],O=(0,S.useState)(10),D=(0,m.Z)(O,2),B=D[0],E=D[1],L=(0,S.useState)({direction:"asc",id:null}),q=(0,m.Z)(L,2),V=q[0],z=q[1];return(0,S.useEffect)((function(){t((0,g.v7)({access_token:window.localStorage.getItem("access_token"),email:a.email,id:a.id,username:a.username})).then((function(){c(!1)}))}),[t,a.username,a.id,a.email]),(0,S.useEffect)((function(){0!==n.length?(M(b.Z.filter(r,(function(e){return e.message.toLowerCase().includes(n.toLowerCase())}))),_(0)):M(r)}),[r,n]),o?(0,p.jsx)("div",{className:"flex items-center justify-center h-full",children:(0,p.jsx)(j.Z,{})}):0===A.length||void 0===A?(0,p.jsx)(d.E.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.1}},className:"flex flex-1 items-center justify-center h-full",children:(0,p.jsx)(l.Z,{color:"text.secondary",variant:"h5",children:"There are no Advertisements!"})}):(0,p.jsxs)("div",{className:"w-full flex flex-col min-h-full",children:[(0,p.jsx)(x.Z,{className:"grow overflow-x-auto",children:(0,p.jsxs)(v.Z,{stickyHeader:!0,className:"min-w-xl","aria-labelledby":"tableTitle",children:[(0,p.jsx)(R,{selectedClientMessagesIds:w,order:V,onSelectAllClick:function(e){e.target.checked?F(A.map((function(e){return e.id}))):F([])},onRequestSort:function(e,t){var r=t,n="desc";V.id===t&&"desc"===V.direction&&(n="asc"),z({direction:n,id:r})},rowCount:A.length,onMenuItemClick:function(){F([])}}),(0,p.jsx)(C.Z,{children:b.Z.orderBy(A,[function(e){return"message"===V.id?e.message:e[V.id]}],[V.direction]).slice(H*B,H*B+B).map((function(e){var t=-1!==w.indexOf(e.id);return(0,p.jsxs)(P.Z,{className:"h-72 cursor-pointer",hover:!0,role:"checkbox","aria-checked":t,tabIndex:-1,selected:t,children:[(0,p.jsx)(Z.Z,{className:" md:p-16",component:"th",scope:"row",align:"center",children:e.id}),(0,p.jsx)(Z.Z,{className:"p-4 md:p-16",component:"th",scope:"row",align:"center",children:e.message.length>30?"".concat(e.message.slice(0,30),"..."):"".concat(e.message)}),(0,p.jsx)(Z.Z,{className:"p-4 md:p-16",component:"th",scope:"row",align:"center",children:"".concat(e.createdAt.split("T")[0])})]},e.id)}))})]})}),(0,p.jsx)(y.Z,{className:"shrink-0 border-t-1",component:"div",count:A.length,rowsPerPage:B,page:H,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onPageChange:function(e,t){_(t)},onRowsPerPageChange:function(e){E(e.target.value)}})]})}));var W=(0,a.Z)("clientContract",s.Z)((function(){var e=(0,i.Z)((function(e){return e.breakpoints.down("lg")}));return(0,p.jsx)(n.Z,{header:(0,p.jsx)(h,{}),content:(0,p.jsx)(T,{}),scroll:e?"normal":"content"})}))},348:function(e,t,r){r.d(t,{GZ:function(){return p},Vx:function(){return m},sn:function(){return x},v7:function(){return u}});var n=r(4942),a=r(15861),i=r(64687),s=r.n(i),o=r(80827),c=r(31881),l=r.n(c),d=r(31387),u=(0,o.hg)("clientContract/clientMessages/getClientMessages",function(){var e=(0,a.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l().get("http://157.230.98.35/api/clientMessage/client/".concat(t.id),{headers:{access_token:t.access_token,email:t.email,username:t.username,id:t.id}});case 2:if(r=e.sent,Array.isArray(r.data.error))for(n=0;n<r.data.error.length;n++)d.Am.error(r.data.error[n].msg.message,{position:"bottom-right",draggable:!1});return e.next=6,r.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),f=(0,o.HF)({selectId:function(e){return e.id},selectAll:function(e){return e},selectById:function(e){return e.id},removeMany:function(e){return e.id}}),g=f.getSelectors((function(e){return e.clientContract.clientMessages})),p=g.selectAll,h=(g.selectById,(0,o.oM)({name:"clientContract/clientMessages",initialState:f.getInitialState({searchText:""}),reducers:{setClientMessagesSearchText:{reducer:function(e,t){e.searchText=t.payload},prepare:function(e){return{payload:e.target.value||""}}}},extraReducers:(0,n.Z)({},u.fulfilled,f.setAll)})),m=h.actions.setClientMessagesSearchText,x=function(e){return e.clientContract.clientMessages.searchText};t.ZP=h.reducer},23920:function(e,t,r){r.d(t,{ZP:function(){return v},uN:function(){return g},pn:function(){return m},w2:function(){return x},ao:function(){return b}});var n=r(4942),a=r(15861),i=r(64687),s=r.n(i),o=r(80827),c=r(31881),l=r.n(c),d=r(31387),u=r(58970),f=function(e){return u.Z.defaults(e||{},{id:"",startDate:"",endDate:"",linkToDrive:"",clientId:"",details:[{contractId:"",serviceName:"",quantity:"",delivered:"",extra:"",month:""}],services:[{contractId:"",serviceName:"",quantity:"",isActive:""}],servicesMonth:[{contractId:"",serviceName:"",quantity:"",month:""}],contractMsg:[{contractId:"",message:"",urgent:""}]})},g=(0,o.hg)("clientContract/contract/getContract",function(){var e=(0,a.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l().get("http://157.230.98.35/api/contract/months/".concat(t.contractId),{headers:{access_token:t.access_token,email:t.email,username:t.username,id:t.id}});case 2:if(r=e.sent,!Array.isArray(r.data.error)){e.next=6;break}for(n=0;n<r.data.error.length;n++)d.Am.error(r.data.error[n].msg.message,{position:"bottom-right",draggable:!1});return e.abrupt("return",null);case 6:return e.abrupt("return",r.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),p=(0,o.oM)({name:"clientContract/contract",initialState:null,reducers:{resetContract:function(){return null},newContract:function(e,t){return f()}},extraReducers:(0,n.Z)({},g.fulfilled,(function(e,t){return t.payload}))}),h=p.actions,m=h.newContract,x=h.resetContract,b=function(e){return e.clientContract.contract},v=p.reducer},71064:function(e,t,r){r.d(t,{Kf:function(){return u},LG:function(){return x},f5:function(){return p},gd:function(){return m}});var n=r(4942),a=r(15861),i=r(64687),s=r.n(i),o=r(80827),c=r(31881),l=r.n(c),d=r(31387),u=(0,o.hg)("clientContract/contracts/getContracts",function(){var e=(0,a.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l().get("http://157.230.98.35/api/contract/client/".concat(t.id),{headers:{access_token:t.access_token,email:t.email,username:t.username,id:t.id}});case 2:if(r=e.sent,Array.isArray(r.data.error))for(n=0;n<r.data.error.length;n++)d.Am.error(r.data.error[n].msg.message,{position:"bottom-right",draggable:!1});return e.next=6,r.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),f=(0,o.HF)({selectId:function(e){return e.id},selectAll:function(e){return e},selectById:function(e){return e.id},removeMany:function(e){return e.id}}),g=f.getSelectors((function(e){return e.clientContract.contracts})),p=g.selectAll,h=(g.selectById,(0,o.oM)({name:"clientContract/contracts",initialState:f.getInitialState({searchText:""}),reducers:{setContractsSearchText:{reducer:function(e,t){e.searchText=t.payload},prepare:function(e){return{payload:e.target.value||""}}}},extraReducers:(0,n.Z)({},u.fulfilled,f.setAll)})),m=h.actions.setContractsSearchText,x=function(e){return e.clientContract.contracts.searchText};t.ZP=h.reducer},20372:function(e,t,r){var n=r(9038),a=r(348),i=r(71064),s=r(23920),o=(0,n.UY)({clientMessages:a.ZP,contracts:i.ZP,contract:s.ZP});t.Z=o},23132:function(e,t,r){var n=r(1413),a=r(19602),i=r(46417);t.Z=function(e,t){return function(r){return(0,a.f)(e,t),function(e){return(0,i.jsx)(r,(0,n.Z)({},e))}}}}}]);