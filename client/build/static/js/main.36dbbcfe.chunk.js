(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{5369:function(e,t,a){e.exports=a(5561)},5374:function(e,t,a){},5376:function(e,t,a){},5561:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(18),l=a.n(i),r=(a(5374),a(19)),s=a(20),c=a(22),d=a(21),u=a(23),h=(a(5376),a(36)),p=a(33),m=a(154),b=a.n(m),v=a(64),f=a.n(v),E=a(81),O=a.n(E),T=a(84),y=a.n(T),g=a(82),j=a(85),D=a.n(j),w=a(86),k=a.n(w),C=a(37),S=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(O.a,{style:{paddingTop:"20%"}},o.a.createElement(p.b,{to:"/",style:{textDecoration:"none"}},o.a.createElement(y.a,{className:this.props.classes.menuItem},o.a.createElement(D.a,{className:this.props.classes.icon},o.a.createElement(C.c,null)),o.a.createElement(k.a,{classes:{primary:this.props.classes.primary},inset:!0,primary:"Todo List"}))),o.a.createElement("hr",{width:"80%"}),o.a.createElement(p.b,{to:"/archive",style:{textDecoration:"none"}},o.a.createElement(y.a,{className:this.props.classes.menuItem},o.a.createElement(D.a,{className:this.props.classes.icon},o.a.createElement(C.b,null)),o.a.createElement(k.a,{classes:{primary:this.props.classes.primary},inset:!0,primary:"Archive"}))))}}]),t}(n.Component),A=Object(g.withStyles)(function(e){return{menuItem:{"&:focus":{backgroundColor:"#039be5","& $primary, & $icon":{color:e.palette.common.white}}},primary:{},icon:{}}})(S),I=a(15),N=a(153),x=a.n(N),_=a(52),L=a.n(_),F=a(144),M=a.n(F),R=a(145),U=a.n(R),B=a(88),H=a.n(B),W=a(146),q=a.n(W),V=a(63),G=a.n(V),J=a(17),P=a(31),Y=function(e){return{type:"SUBMIT_NEW_TODO",payload:e}},$=function(e){return{type:"SUBMIT_SHOW_DIALOG",payload:{open:e}}},z=a(29),K=a.n(z),Q=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={name:"",description:""},a.handleClose=a.handleClose.bind(Object(I.a)(Object(I.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(I.a)(Object(I.a)(a))),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleClose",value:function(){this.props.submitShowDialog(!1)}},{key:"handleSubmit",value:function(){""!==this.state.name&&""!==this.state.description&&this.state.description.length<4e9&&this.state.name.length<64e3&&(K.a.get("/sql/create",{params:{name:this.state.name,description:this.state.description}}),this.props.submitNewTodo(1),this.props.submitShowDialog(!1))}},{key:"validateNameFieldError",value:function(){return""===this.state.name||this.state.name.length>=64e3}},{key:"validateDescriptionFieldError",value:function(){return""===this.state.description||this.state.description.length>=4e9}},{key:"validateNameFieldHelp",value:function(){return""===this.state.name?"Empty Field!":this.state.name.length>=64e3?"Too Long!":""}},{key:"validateDescriptionFieldHelp",value:function(){return""===this.state.description?"Empty Field!":this.state.description.length>=4e9&&"Too Long!"}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(M.a,{id:"form-dialog-title"},"New Todo"),o.a.createElement(U.a,{style:{color:"#039be5"}},o.a.createElement(H.a,{error:this.validateNameFieldError(),helperText:this.validateNameFieldHelp(),id:"standard-name",label:"Name Your Todo",value:this.state.name,onChange:function(t){e.setState({name:t.target.value})},margin:"normal",fullWidth:!0,style:{color:"white"}}),o.a.createElement(H.a,{error:this.validateDescriptionFieldError(),helperText:this.validateDescriptionFieldHelp(),id:"standard-multiline-flexible",label:"Describe Your Todo",multiline:!0,fullWidth:!0,rowsMax:"4",value:this.state.description,onChange:function(t){return e.setState({description:t.target.value})},margin:"normal",style:{color:"#039be5"}})),o.a.createElement(q.a,null,o.a.createElement(G.a,{onClick:this.handleClose.bind(this),style:{color:"#039be5"}},o.a.createElement("b",null,"Cancel")),o.a.createElement(G.a,{onClick:this.handleSubmit.bind(this),style:{color:"#039be5"}},o.a.createElement("b",null,"Submit"))))}}]),t}(n.Component);var X=Object(h.withRouter)(Object(P.b)(function(e){return{}},function(e){return Object(J.a)({submitNewTodo:Y,submitShowDialog:$},e)})(Q)),Z=a(152),ee=a.n(Z),te=function(e){return{type:"SUBMIT_DELETE_TODO",payload:{id:e}}},ae=a(147),ne=a.n(ae),oe=a(148),ie=a.n(oe),le=a(51),re=a.n(le),se=a(149),ce=a.n(se),de=a(150),ue=a.n(de),he=a(151),pe=a.n(he),me=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).onArchivedTodo=function(e){return function(){K.a.get("/sql/archive",{params:{id:a.state.data[e].ID}}),a.props.submitDeleteTodo(e)}},a.onDeleteTodo=function(e){return function(){K.a.get("/sql/delete",{params:{id:a.state.data[e].ID}}),a.props.submitDeleteTodo(e)}},a.state={data:e.data,show:!1},a.onDeleteTodo=a.onDeleteTodo.bind(Object(I.a)(Object(I.a)(a))),a.onArchivedTodo=a.onArchivedTodo.bind(Object(I.a)(Object(I.a)(a))),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e,t,a){e.data!==this.props.data&&this.setState({data:this.props.data})}},{key:"componentDidMount",value:function(){"archive"===this.props.type?this.setState({show:!1}):this.setState({show:!0})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,this.state.data.map(function(t,a){return o.a.createElement("div",{key:a},o.a.createElement(ne.a,null,o.a.createElement(ie.a,{expandIcon:o.a.createElement(C.e,null)},o.a.createElement(re.a,null,t.name)),o.a.createElement(ce.a,null,o.a.createElement(re.a,null,o.a.createElement("b",null,"Description:"),o.a.createElement("br",null),t.description)),o.a.createElement(ue.a,null),o.a.createElement(pe.a,null,o.a.createElement(re.a,{style:{textAlign:"left",paddingRight:"50px"}},e.state.show?"Created:":"Archived:",t.date),o.a.createElement(L.a,{variant:"extended",onClick:e.onDeleteTodo(a).bind(e),"aria-label":"Delete",style:{backgroundColor:"#ff1744"}},o.a.createElement(C.d,null),"Delete"),o.a.createElement(L.a,{variant:"extended",onClick:e.onArchivedTodo(a).bind(e),"aria-label":"Archive",style:e.state.show?{backgroundColor:"#00e676"}:{display:"none"}},o.a.createElement(C.b,null),"Archive"))),o.a.createElement("br",null))}),o.a.createElement("br",null))}}]),t}(n.Component);var be=Object(h.withRouter)(Object(P.b)(function(e){return{}},function(e){return Object(J.a)({submitDeleteTodo:te},e)})(me)),ve=function(e){return{type:"SUBMIT_ARCHIVE_TODO",payload:e}},fe=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={open:e.showDialog.open,list:[]},a.handleDialogOpen=a.handleDialogOpen.bind(Object(I.a)(Object(I.a)(a))),a.handleClose=a.handleClose.bind(Object(I.a)(Object(I.a)(a))),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleDialogOpen",value:function(){this.props.submitShowDialog(!0)}},{key:"handleClose",value:function(){this.setState({open:!1})}},{key:"componentDidUpdate",value:function(e,t,a){var n=this;e.showDialog.open!==this.props.showDialog.open&&this.setState({open:this.props.showDialog.open}),e.newTodo===this.props.newTodo&&e.deleteTodo===this.props.deleteTodo&&e.archiveTodo===this.props.archiveTodo||(K.a.get("/sql/get").then(function(e){n.setState({list:e.data})}),0!==this.props.newTodo&&this.props.submitNewTodo(0),-1!==this.props.deleteTodo.id&&this.props.submitDeleteTodo(-1),0!==this.props.archiveTodo&&this.props.submitArchiveTodo(0))}},{key:"componentDidMount",value:function(){var e=this;K.a.get("/sql/get").then(function(t){e.setState({list:t.data})})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"TODO"),o.a.createElement(be,{type:"todos",data:this.state.list}),o.a.createElement(ee.a,{open:this.state.open,onClose:this.handleClose.bind(this),"aria-labelledby":"form-dialog-title",fullWidth:!0,maxWidth:"sm"},o.a.createElement(X,null)),o.a.createElement(x.a,{title:"New Todo","aria-label":"New Todo"},o.a.createElement(L.a,{onClick:this.handleDialogOpen.bind(this),style:{position:"absolute",backgroundColor:"#039be5"}},o.a.createElement(C.a,{style:{color:"#E0F7FA"}}))))}}]),t}(n.Component);var Ee=Object(h.withRouter)(Object(P.b)(function(e){return{showDialog:e.showDialog,newTodo:e.newTodo,deleteTodo:e.deleteTodo}},function(e){return Object(J.a)({submitShowDialog:$,submitNewTodo:Y,submitDeleteTodo:te,submitArchiveTodo:ve},e)})(fe)),Oe=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={list:[]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e,t,a){var n=this;e.deleteTodo===this.props.deleteTodo&&e.archiveTodo===this.props.archiveTodo||(K.a.get("/sql/getArchive").then(function(e){n.setState({list:e.data})}),-1!==this.props.deleteTodo.id&&this.props.submitDeleteTodo(-1),0!==this.props.archiveTodo&&this.props.submitArchiveTodo(0))}},{key:"componentDidMount",value:function(){var e=this;K.a.get("/sql/getArchive").then(function(t){e.setState({list:t.data})})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"ARCHIVE"),o.a.createElement(be,{type:"archive",data:this.state.list}))}}]),t}(n.Component);var Te=Object(h.withRouter)(Object(P.b)(function(e){return{newTodo:e.newTodo,deleteTodo:e.deleteTodo}},function(e){return Object(J.a)({submitNewTodo:Y,submitDeleteTodo:te,submitArchiveTodo:ve},e)})(Oe)),ye=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).previousLocation=a.props.location,a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillUpdate",value:function(e){var t=this.props.location;"POP"===e.history.action||t.state&&t.state.modal||(this.previousLocation=this.props.location)}},{key:"render",value:function(){var e=this.props.location,t=!(!e.state||!e.state.modal||this.previousLocation===e);return o.a.createElement("div",null,o.a.createElement(f.a,{container:!0,spacing:30,padding:16},o.a.createElement(f.a,{item:!0,xs:2,spacing:16},o.a.createElement(A,null)),o.a.createElement("hr",{width:"1",size:"50%",style:{paddingLeft:"0",marginLeft:"0",marginRight:"10%"}}),o.a.createElement(f.a,{item:!0,xs:8},o.a.createElement("br",null),o.a.createElement(b.a,{location:t?this.previousLocation:e,ref:this.switch},o.a.createElement(h.Route,{path:"/",exact:!0,component:Ee}),o.a.createElement(h.Route,{path:"/archive",component:Te})))))}}]),t}(o.a.Component),ge=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(c.a)(this,Object(d.a)(t).call(this))).state={route:!0},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(p.a,null,o.a.createElement("div",null,o.a.createElement(h.Route,{component:ye})))}}]),t}(n.Component),je=Object(J.b)({newTodo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SUBMIT_NEW_TODO":return t.payload;default:return e}},showDialog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{open:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SUBMIT_SHOW_DIALOG":return t.payload;default:return e}},deleteTodo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{id:-1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SUBMIT_DELETE_TODO":return t.payload;default:return e}},archiveTodo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SUBMIT_ARCHIVE_TODO":return t.payload;default:return e}}}),De=Object(J.c)(je);l.a.render(o.a.createElement(P.a,{store:De},o.a.createElement(ge,null)),document.getElementById("root"))}},[[5369,2,1]]]);
//# sourceMappingURL=main.36dbbcfe.chunk.js.map