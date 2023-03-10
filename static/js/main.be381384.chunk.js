(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{21:function(e,t,a){e.exports=a(31)},26:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(19),r=a.n(o),c=a(1),i=(a(26),a(3)),s=a(4),u=a(2),m=function(){var e=Object(i.f)(),t=Object(n.useContext)(w),a=t.state,o=t.dispatch,r=a?l.a.createElement(l.a.Fragment,null,l.a.createElement("li",null,l.a.createElement(s.b,{className:" black-text text-darken-2",to:"/profile"},"Profile")),l.a.createElement("li",null,l.a.createElement(s.b,{className:" black-text text-darken-2",to:"/mysub"},"My Sub")),",",l.a.createElement("li",null,l.a.createElement(s.b,{className:" black-text text-darken-2",to:"/create"},"Create A Post")),",",l.a.createElement("li",null,l.a.createElement("button",{onClick:function(t){localStorage.clear(),Object(u.toast)({html:"<strong>You Logged Out </strong>",displayLength:2e3,classes:"blue"}),o({type:"CLEAR"}),e.push("/login")},className:"red darken-1 btn waves-effect waves-light"},"Logout"))):l.a.createElement(l.a.Fragment,null,l.a.createElement("li",null,l.a.createElement(s.b,{className:" black-text text-darken-2",to:"/login"},"Login")),",",l.a.createElement("li",null,l.a.createElement(s.b,{className:" black-text text-darken-2",to:"/signup"},"Signup")));return l.a.createElement("nav",null,l.a.createElement("div",{className:"nav-wrapper white"},l.a.createElement(s.b,{to:a?"/":"/login",className:"brand-logo  black-text text-darken-2 left"},"Instagram"),l.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},r)))},d=function(){var e=Object(n.useRef)(),t=Object(n.useContext)(w).dispatch,a=Object(i.f)(),o=Object(n.useState)(""),r=Object(c.a)(o,2),m=r[0],d=r[1],p=Object(n.useState)(""),h=Object(c.a)(p,2),f=h[0],g=h[1];return l.a.createElement("div",{className:"myCard"},l.a.createElement("div",{className:"card auth-card"},l.a.createElement("h2",null,"Instagram"),l.a.createElement("form",{onSubmit:function(n){n.preventDefault(),function(){if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(f))return e.current.removeAttribute("disabled"),void Object(u.toast)({html:"Invalid Email",displayLength:1500,classes:"toast-err"});e.current.disabled="true",fetch("https://instag-api.onrender.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:f,password:m})}).then((function(e){return e.json()})).then((function(n){return n.error?(e.current.removeAttribute("disabled"),void Object(u.toast)({html:n.error,displayLength:1500,classes:"toast-err"})):(localStorage.setItem("jwt",n.token),t({type:"USER",payload:n.user}),localStorage.setItem("user",JSON.stringify(n.user)),Object(u.toast)({html:"Signin Successfully",displayLength:4500,classes:"toast-success"}),void a.push("/"))})).catch((function(e){Object(u.toast)({html:"<strong>Please Try Later</strong>",displayLength:3e3,classes:"toast-err"}),console.log("error : ".concat(e))}))}()}},l.a.createElement("input",{required:!0,onChange:function(e){return g(e.target.value)},className:"login-input",type:"email",placeholder:"Email"}),l.a.createElement("input",{required:!0,onChange:function(e){return d(e.target.value)},className:"login-input",type:"password",placeholder:"Password"}),l.a.createElement("button",{ref:e,className:" blue darken-1 btn waves-effect waves-light"},"Login")),l.a.createElement("h5",null,l.a.createElement(s.b,{to:"signup",style:{color:"#122"}},"Don't Have An Account ?"))))},p=a(32),h=function(){var e=Object(n.useContext)(w).state,t=Object(n.useState)([]),a=Object(c.a)(t,2),o=a[0],r=a[1],i="https://instag-api.onrender.com";Object(n.useEffect)((function(){localStorage.getItem("jwt")&&fetch(i+"/posts",{headers:{Authorization:localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e),r(e)}))}),[]);return l.a.createElement(l.a.Fragment,null,0===o.length?l.a.createElement("h2",{className:"center"},"No Posts Found !!"):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"home"},o.map((function(t){var a=t.postedBy,n=a.name,c=a._id,u=t.comments,m=t._id,d=t.likes,h=t.title,f=t.createdAt,g=t.body,b=t.photo;return l.a.createElement("div",{key:Object(p.a)()},l.a.createElement("div",{style:{position:"relative"},className:"card homeCard"},l.a.createElement("h5",{style:{padding:"10px 23px"}},l.a.createElement(s.b,{to:(null===e||void 0===e?void 0:e._id)===c?"/profile":"/profile/"+c},n)),c===(null===e||void 0===e?void 0:e._id)?l.a.createElement("i",{style:{cursor:"pointer",position:"absolute",top:"10px",right:"10px"},onClick:function(){return function(e){fetch(i+"/posts/delete/".concat(e),{method:"delete",headers:{Authorization:localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){var t=o.filter((function(t){return t._id!==e._id}));r(t)}))}(m)},className:"material-icons"},"clear"):null,l.a.createElement("span",{style:{float:"right"}},f),l.a.createElement("div",{className:"card-image"},l.a.createElement("img",{alt:g,src:b})),l.a.createElement("div",{className:"card-content "},l.a.createElement("i",{style:{color:d.includes(null===e||void 0===e?void 0:e._id)?"#e53935":"#ccc"},className:"material-icons"},"favorite"),l.a.createElement("div",{style:{float:"right"}},d.includes(null===e||void 0===e?void 0:e._id)?l.a.createElement("i",{onClick:function(){!function(e){fetch(i+"/posts/unlike",{method:"put",headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("jwt")},body:JSON.stringify({postId:e})}).then((function(e){return e.json()})).then((function(e){var t=o.map((function(t){return t._id===e._id?e:t}));r(t)})).catch((function(e){return console.log(e)}))}(m)},style:{cursor:"pointer",marginRight:"20px"},className:"material-icons"},"thumb_down"):l.a.createElement("i",{onClick:function(){!function(e){fetch(i+"/posts/like",{method:"put",headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("jwt")},body:JSON.stringify({postId:e})}).then((function(e){return e.json()})).then((function(e){var t=o.map((function(t){return t._id===e._id?e:t}));o.includes(e._id)||r(t)})).catch((function(e){return console.log(e)}))}(m)},style:{cursor:"pointer",marginRight:"20px"},className:"material-icons"},"thumb_up")),l.a.createElement("h6",null,1===d.length?"".concat(d.length," Like"):"".concat(d.length," Likes")),l.a.createElement("h6",null,h),l.a.createElement("p",null,g),u.map((function(e){var t;return l.a.createElement("h6",{key:Object(p.a)()},l.a.createElement("span",{style:{fontWeight:"500",color:(null===(t=e.postedBy)||void 0===t?void 0:t._id)===c?"#0d47a1":"#7b6079"}},e.postedBy.name," "),e.text)})),l.a.createElement("form",{onSubmit:function(e){!function(e,t,a){e.preventDefault(),fetch(i+"/posts/comment",{method:"put",headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("jwt")},body:JSON.stringify({postId:a,text:t})}).then((function(e){return e.json()})).then((function(e){var t=o.map((function(t){return t._id===e._id?e:t}));r(t)})).catch((function(e){return console.log(e)}))}(e,e.target[0].value,m)}},l.a.createElement("input",{type:"text",placeholder:"Add a Comment"})))))})))))},f=function(){var e=Object(i.f)(),t=Object(n.useRef)(),a=Object(n.useState)(""),o=Object(c.a)(a,2),r=o[0],m=o[1],d=Object(n.useState)(""),p=Object(c.a)(d,2),h=p[0],f=p[1],g=Object(n.useState)(""),b=Object(c.a)(g,2),E=b[0],y=b[1];return l.a.createElement("div",{className:"myCard"},l.a.createElement("div",{className:"card auth-card input-field"},l.a.createElement("h2",null,"Instagram"),l.a.createElement("form",{onSubmit:function(a){a.preventDefault(),function(){if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(E))return t.current.removeAttribute("disabled"),void Object(u.toast)({html:"Invalid Email",displayLength:1500,classes:"toast-err"});t.current.disabled="true",fetch("https://instag-api.onrender.com/signup",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:r,email:E,password:h})}).then((function(e){return e.json()})).then((function(a){return a.error?(Object(u.toast)({html:a.error,displayLength:1500,classes:"toast-err"}),void t.current.removeAttribute("disabled")):(Object(u.toast)({html:a.message,displayLength:4500,classes:"toast-success"}),void e.push("/login"))})).catch((function(e){Object(u.toast)({html:"<strong>Please Try Later</strong>",displayLength:3e3,classes:"toast-err"}),console.log("error : ".concat(e))}))}()}},l.a.createElement("input",{required:!0,autoComplete:"off",className:"login-input",type:"text",placeholder:"Username",value:r,name:"name",onChange:function(e){return m(e.target.value)}}),l.a.createElement("input",{required:!0,autoComplete:"off",className:"login-input",value:E,type:"email",placeholder:"Email",name:"email",onChange:function(e){return y(e.target.value)}}),l.a.createElement("input",{required:!0,autoComplete:"off",value:h,className:"login-input",type:"password",placeholder:"Password",name:"password",onChange:function(e){return f(e.target.value)}}),l.a.createElement("button",{id:"b",ref:t,className:" blue darken-1 btn waves-effect waves-light"},"Login"),l.a.createElement("h5",null,l.a.createElement(s.b,{to:"login",style:{color:"#222"}},"Already Have An Account ?")))))},g=function(){var e=(new AbortController).signal,t="https://instag-api.onrender.com",a=Object(n.useState)([]),o=Object(c.a)(a,2),r=o[0],i=o[1],s=Object(n.useState)(""),u=Object(c.a)(s,2),m=u[0],d=u[1];return Object(n.useEffect)((function(){localStorage.getItem("jwt")&&(fetch(t+"/profile",{headers:{Authorization:localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){d(e)})).catch((function(e){return console.log(e)})),fetch(t+"/posts/myposts",{headers:{Authorization:localStorage.getItem("jwt")}},{signal:e}).then((function(e){return e.json()})).then((function(e){i(e)}))),d(JSON.parse(localStorage.getItem("user")))}),[]),l.a.createElement(l.a.Fragment,null,m.followers&&m.following?l.a.createElement("div",{style:{maxWidth:"550px",margin:"0 auto"}},l.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",margin:"18px 0px",borderBottom:"1px solid #777"}},l.a.createElement("div",null,l.a.createElement("img",{alt:"",src:"https://images.unsplash.com/photo-1578635073855-a89b3dd5cc18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",style:{width:"160px",height:"160px",borderRadius:"80px"}})),l.a.createElement("div",null,l.a.createElement("h4",null,m.name),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",width:"108%"}},l.a.createElement("h6",null,r.length>1?r.length+" Photos":r.length+" Photo"),l.a.createElement("h6",null,1===!m.followers.length?m.followers.length+" Followers":m.followers.length+" Follower"),l.a.createElement("h6",null,(m.following.length,m.following.length+" Following"))))),0===r.length?l.a.createElement("h2",{className:"center"},"No Posts Found"):l.a.createElement("div",{className:"gallery"},r.map((function(e){return l.a.createElement("img",{key:Object(p.a)(),className:"item",alt:e.title,src:e.photo})})))):l.a.createElement("h1",{className:"center"},"Loading..."))};var b=function(){var e=Object(i.f)(),t=Object(n.useRef)(),a=Object(n.useState)(""),o=Object(c.a)(a,2),r=o[0],s=o[1],m=Object(n.useState)(""),d=Object(c.a)(m,2),p=d[0],h=d[1],f=Object(n.useState)(""),g=Object(c.a)(f,2),b=g[0],E=g[1],y=Object(n.useState)(""),j=Object(c.a)(y,2),v=j[0],w=j[1];return Object(n.useEffect)((function(){v&&fetch("https://instag-api.onrender.com/posts/createpost",{method:"post",headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("jwt")},body:JSON.stringify({photo:v,title:r,body:p})}).then((function(e){return e.json()})).then((function(t){return t.error?void Object(u.toast)({html:t.error,displayLength:1500,classes:"toast-err"}):(Object(u.toast)({html:"Post Created Successfully",displayLength:4500,classes:"toast-success"}),void e.push("/"))})).catch((function(e){Object(u.toast)({html:"<strong>Please Try Later</strong>",displayLength:3e3,classes:"toast-err"}),console.log("error : ".concat(e))}))}),[v]),l.a.createElement("div",{style:{margin:"30px auto",maxWidth:"500px",padding:"20px",textAlign:"center"},className:"card input-field"},l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),function(){var e=new FormData;e.append("file",b),e.append("upload_preset","insta-clone"),e.append("cloud_name","fhalmedamine"),r&&b&&p?(t.current.disabled="true",fetch("https://api.cloudinary.com/v1_1/".concat("fhalmedamine","/image/upload"),{method:"POST",body:e}).then((function(e){return e.json()})).then((function(e){if(e.error)return Object(u.toast)({html:"<strong>".concat(e.error.message,"</strong>"),displayLength:2500,classes:"toast-err"}),void t.current.removeAttribute("disabled");w(e.url)})).catch((function(e){t.current.removeAttribute("disabled"),console.log("err with uploading img :",e)}))):Object(u.toast)({html:"<strong>Please Fill All The Fields</strong>",displayLength:1500,classes:"toast-err"})}()}},l.a.createElement("input",{type:"text",placeholder:"Title",onChange:function(e){return s(e.target.value)}}),l.a.createElement("input",{type:"text",placeholder:"body",onChange:function(e){return h(e.target.value)}}),l.a.createElement("div",{className:"file-field input-field"},l.a.createElement("div",{className:"btn blue darken-1",style:{display:"flex"}},l.a.createElement("i",{style:{marginRight:"5px"},className:"material-icons"},"cloud_upload"),l.a.createElement("span",null,"File"),l.a.createElement("input",{type:"file",onChange:function(e){return E(e.target.files[0])}})),l.a.createElement("div",{className:"file-path-wrapper"},l.a.createElement("input",{className:"file-path validate",type:"text"}))),l.a.createElement("button",{ref:t,style:{display:"flex",margin:"0 auto"},className:" blue darken-1 btn waves-effect waves-light"},l.a.createElement("i",{style:{marginRight:"5px"},className:"material-icons"},"save"),"Save")))},E=a(9),y=function(){var e,t,a=Object(i.f)(),o=Object(n.useRef)(),r=Object(n.useContext)(w),s=r.state,m=r.dispatch,d=Object(n.useState)([]),h=Object(c.a)(d,2),f=h[0],g=h[1],b=Object(n.useState)(""),y=Object(c.a)(b,2),j=y[0],v=y[1],O=Object(i.g)().userid,x="https://instag-api.onrender.com";return Object(n.useEffect)((function(){localStorage.getItem("jwt")&&fetch(x+"/user/".concat(O),{headers:{Authorization:localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){if(e.error)return Object(u.toast)({html:e.error,displayLength:2500,classes:"toast-err"}),void a.push("/");v(e.user),g(e.posts)}))}),[]),e=function(){o.current.disabled="true",fetch(x+"/follow",{method:"put",headers:{"Content-type":"application/json",Authorization:localStorage.getItem("jwt")},body:JSON.stringify({followId:O})}).then((function(e){return e.json()})).then((function(e){window.location.reload(),m({type:"UPDATE",payload:{following:e.following,followers:e.followers}}),v((function(t){return Object(E.a)(Object(E.a)({},t),{},{data:e})})),localStorage.setItem("user",JSON.stringify(e))})).catch((function(e){Object(u.toast)({html:e,displayLength:1500,classes:"toast-err"})}))},t=function(){o.current.disabled="true",fetch(x+"/unfollow",{method:"put",headers:{"Content-type":"application/json",Authorization:localStorage.getItem("jwt")},body:JSON.stringify({followId:O})}).then((function(e){return e.json()})).then((function(e){window.location.reload(),m({type:"UPDATE",payload:{following:e.following,followers:e.followers}}),v((function(t){return Object(E.a)(Object(E.a)({},t),{},{data:e})}))})).catch((function(e){Object(u.toast)({html:e,displayLength:1500,classes:"toast-err"})}))},l.a.createElement(l.a.Fragment,null,j?l.a.createElement("div",{style:{maxWidth:"550px",margin:"0 auto"}},l.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",margin:"18px 0px",borderBottom:"1px solid #777"}},l.a.createElement("div",null,l.a.createElement("img",{alt:"",src:"https://images.unsplash.com/photo-1578635073855-a89b3dd5cc18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",style:{width:"160px",height:"160px",borderRadius:"80px"}})),l.a.createElement("div",null,l.a.createElement("h4",null,j.name),l.a.createElement("button",{ref:o,onClick:j.followers.includes(s._id)?t:e,className:" blue darken-1 btn waves-effect waves-light"},j.followers.includes(s._id)?"Unfollow":"Follow"),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",width:"108%"}},l.a.createElement("h6",null,f.length>1?f.length+" Photos":f.length+" Photo"),l.a.createElement("h6",null,1===j.followers.length?j.followers.length+" Follower":j.followers.length+" Followers"),l.a.createElement("h6",null,j.following.length+" Following")))),0===f.length?l.a.createElement("h2",{className:"center"},"No Posts Found"):l.a.createElement("div",{className:"gallery"},f.map((function(e){return l.a.createElement("img",{key:Object(p.a)(),className:"item",alt:e.title,src:e.photo})})))):l.a.createElement("h2",{className:"center"},"Loading..."))},j=function(){var e=Object(n.useContext)(w).state,t=Object(n.useState)([]),a=Object(c.a)(t,2),o=a[0],r=a[1],i="https://instag-api.onrender.com";Object(n.useEffect)((function(){localStorage.getItem("jwt")&&fetch(i+"/posts/f",{headers:{Authorization:localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){r(e)}))}),[]);return l.a.createElement(l.a.Fragment,null,0===o.length?l.a.createElement("h2",{className:"center"},"No Posts Found !!"):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"home"},o.map((function(t){var a=t.postedBy,n=a.name,c=a._id,u=t.comments,m=t._id,d=t.likes,h=t.title,f=t.createdAt,g=t.body,b=t.photo;return l.a.createElement("div",{key:Object(p.a)()},l.a.createElement("div",{style:{position:"relative"},className:"card homeCard"},l.a.createElement("h5",{style:{padding:"10px 23px"}},l.a.createElement(s.b,{to:e._id===c?"/profile":"/profile/"+c},n)),c===e._id?l.a.createElement("i",{style:{cursor:"pointer",position:"absolute",top:"10px",right:"10px"},onClick:function(){return function(e){fetch(i+"/posts/delete/".concat(e),{method:"delete",headers:{Authorization:localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){var t=o.filter((function(t){return t._id!==e._id}));r(t)}))}(m)},className:"material-icons"},"clear"):null,l.a.createElement("span",{style:{float:"right"}},f),l.a.createElement("div",{className:"card-image"},l.a.createElement("img",{alt:g,src:b})),l.a.createElement("div",{className:"card-content "},l.a.createElement("i",{style:{color:d.includes(e._id)?"#e53935":"#ccc"},className:"material-icons"},"favorite"),l.a.createElement("div",{style:{float:"right"}},d.includes(e._id)?l.a.createElement("i",{onClick:function(){!function(e){fetch(i+"/posts/unlike",{method:"put",headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("jwt")},body:JSON.stringify({postId:e})}).then((function(e){return e.json()})).then((function(e){var t=o.map((function(t){return t._id===e._id?e:t}));r(t)})).catch((function(e){return console.log(e)}))}(m)},style:{cursor:"pointer",marginRight:"20px"},className:"material-icons"},"thumb_down"):l.a.createElement("i",{onClick:function(){!function(e){fetch(i+"/posts/like",{method:"put",headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("jwt")},body:JSON.stringify({postId:e})}).then((function(e){return e.json()})).then((function(e){var t=o.map((function(t){return t._id===e._id?e:t}));o.includes(e._id)||r(t)})).catch((function(e){return console.log(e)}))}(m)},style:{cursor:"pointer",marginRight:"20px"},className:"material-icons"},"thumb_up")),l.a.createElement("h6",null,1===d.length?"".concat(d.length," Like"):"".concat(d.length," Likes")),l.a.createElement("h6",null,h),l.a.createElement("p",null,g),u.map((function(e){return l.a.createElement("h6",{key:Object(p.a)()},l.a.createElement("span",{style:{fontWeight:"500",color:"#0d47a1"}},e.postedBy.name," "),e.text)})),l.a.createElement("form",{onSubmit:function(e){!function(e,t,a){e.preventDefault(),fetch(i+"/posts/comment",{method:"put",headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("jwt")},body:JSON.stringify({postId:a,text:t})}).then((function(e){return e.json()})).then((function(e){var t=o.map((function(t){return t._id===e._id?e:t}));r(t)})).catch((function(e){return console.log(e)}))}(e,e.target[0].value,m)}},l.a.createElement("input",{type:"text",placeholder:"Add a Comment"})))))})))))},v=function(e,t){switch(t.type){case"USER":return t.payload;case"CLEAR":return null;case"UPDATE":return Object(E.a)(Object(E.a)({},e),{},{followers:t.payload.followers,following:t.payload.following});default:return e}},w=Object(n.createContext)(),O=function(){var e=Object(i.f)(),t=Object(n.useContext)(w),a=(t.state,t.dispatch),o=JSON.parse(localStorage.getItem("user"));return Object(n.useEffect)((function(){o?a({type:"USER",payload:o}):e.push("/login")}),[]),l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/",component:h}),l.a.createElement(i.a,{exact:!0,path:"/profile",component:g}),l.a.createElement(i.a,{path:"/signup",component:f}),l.a.createElement(i.a,{path:"/login",component:d}),l.a.createElement(i.a,{path:"/create",component:b}),l.a.createElement(i.a,{path:"/profile/:userid",component:y}),l.a.createElement(i.a,{path:"/mysub",component:j}))},x=function(){var e=JSON.parse(localStorage.getItem("user")),t=w.Provider,a=Object(n.useReducer)(v,null),o=Object(c.a)(a,2),r=o[0],i=o[1];return l.a.createElement(t,{value:{state:r,dispatch:i,user:e}},l.a.createElement(s.a,null,l.a.createElement(m,null),l.a.createElement(O,null)))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(x,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.be381384.chunk.js.map