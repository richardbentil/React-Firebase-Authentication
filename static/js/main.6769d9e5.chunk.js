(this["webpackJsonpreact-firebase-authentication"]=this["webpackJsonpreact-firebase-authentication"]||[]).push([[0],{52:function(e,t,a){"use strict";a.r(t);var s=a(4),c=a.n(s),n=a(33),r=a.n(n),i=a(35),l=(a(44),a(45),a(15)),o=a(9),b=a(16),d=a.n(b),j=a(19),m=a(10),u=a(18),h=a(2),O=function(){var e=Object(s.useState)(),t=Object(m.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)({name:"",email:"",picture:""}),r=Object(m.a)(n,2),i=r[0],b=r[1],O=Object(o.f)();Object(s.useEffect)((function(){return u.a.auth().onAuthStateChanged((function(e){e?(b({name:e.displayName,email:e.email,picture:e.photoURL}),console.log(e)):console.log("user data missing")}))()}),[]);var p=function(){var e=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("logout"),e.prev=1,e.next=4,u.a.auth().signOut().then((function(){O.push("/sign-in")})).catch((function(e){c(e.message)}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),c("There was an error loging out");case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(){return e.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"container h-100",children:Object(h.jsxs)("div",{className:"row m-auto my-5 h-100 ",children:[i.name&&Object(h.jsx)("div",{className:"col-4",children:Object(h.jsxs)("div",{className:"bg-light text-center p-3",children:[Object(h.jsx)("div",{className:"my-3",children:Object(h.jsx)("img",{src:i.picture,alt:"avatar"})}),Object(h.jsx)("h4",{children:i.name}),Object(h.jsx)("p",{children:i.email}),!1===i.emailVerified&&Object(h.jsx)("p",{className:"my-2",children:"Verify your email"}),i.name&&Object(h.jsx)("button",{className:"btn btn-primary me-2",onClick:p,children:"Logout"})]})}),Object(h.jsxs)("div",{className:"col-8 m-auto text-center",children:[Object(h.jsx)("h3",{className:"text-primary",children:"React Firebase Authentication with Email Verfication"}),Object(h.jsx)("h4",{children:"Hello and Welcome"}),!i.name&&Object(h.jsx)("h5",{children:"Login or signup to test this application"}),i.name&&Object(h.jsx)("h5",{children:"You have successfully logged in"}),Object(h.jsxs)("div",{className:"my-3",children:[a&&Object(h.jsx)("span",{children:a}),!i.name&&Object(h.jsx)(l.b,{to:"/sign-in",className:"btn btn-primary me-2",children:"Login/Signup"})]})]})]})})},p=function(){var e=Object(s.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(""),r=Object(m.a)(n,2),i=r[0],l=r[1],b=Object(s.useState)(""),O=Object(m.a)(b,2),p=O[0],x=O[1],g=Object(s.useState)(""),N=Object(m.a)(g,2),y=N[0],w=N[1],S=Object(o.f)(),k=function(){var e=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),x(Object(h.jsx)(f,{})),a&&i){e.next=7;break}w("Provide your email/password"),x(""),e.next=16;break;case 7:return e.prev=7,e.next=10,u.a.auth().signInWithEmailAndPassword(a,i).then((function(e){if(e.user)return S.push("/")})).catch((function(e){e.code;var t=e.message;w(t),x("")}));case 10:e.next=16;break;case 12:e.prev=12,e.t0=e.catch(7),w(e.t0.message),x("");case 16:case"end":return e.stop()}}),e,null,[[7,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"my-5",children:[y&&Object(h.jsx)("div",{className:"my-3 py-2 alert alert-danger",children:Object(h.jsx)("p",{className:"pb-0",children:y})}),Object(h.jsxs)("form",{onSubmit:k,children:[Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email address"}),Object(h.jsx)("input",{value:a,onChange:function(e){return c(e.target.value)},type:"email",className:"form-control",id:"email","aria-describedby":"emailHelp"}),Object(h.jsx)("div",{id:"emailHelp",className:"form-text",children:"We'll never share your email with anyone else."})]}),Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("label",{htmlFor:"password",className:"form-label",children:"Password"}),Object(h.jsx)("input",{value:i,onChange:function(e){return l(e.target.value)},type:"password",className:"form-control",id:"password"})]}),Object(h.jsx)("nav",{children:Object(h.jsx)("div",{className:"col-12 text-end mb-2",id:"nav-tab2",children:Object(h.jsx)("button",{type:"button",className:"btn btn-default text-primary","data-bs-toggle":"modal","data-bs-target":"#passwordResetModal",children:"Forgot Password?"})})}),Object(h.jsxs)("button",{class:"btn btn-primary btn-block w-100",type:"submit",disabled:!a||!i,children:[p," Login"]})]})]}),Object(h.jsx)(v,{})]})},x=function(){var e=Object(s.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(""),r=Object(m.a)(n,2),i=r[0],l=r[1],b=Object(s.useState)(""),O=Object(m.a)(b,2),p=O[0],x=O[1],v=Object(s.useState)(""),g=Object(m.a)(v,2),N=g[0],y=g[1],w=Object(s.useState)(""),S=Object(m.a)(w,2),k=S[0],C=S[1],F=Object(o.f)(),I=function(){var e=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),y(Object(h.jsx)(f,{})),i&&p){e.next=7;break}C("Provide your email/password"),y(""),e.next=16;break;case 7:return e.prev=7,e.next=10,u.a.auth().createUserWithEmailAndPassword(i,p).then((function(e){var t=e.user;t&&u.a.auth().currentUser.sendEmailVerification().then((function(){t.updateProfile({displayName:a}).then((function(){y(""),window.localStorage.setItem("email",i),window.localStorage.setItem("fullName",a),F.push("/email-sent")})).catch((function(e){C(e.message),y("")}))})),y("")})).catch((function(e){e.code;var t=e.message;C(t),y("")}));case 10:e.next=16;break;case 12:e.prev=12,e.t0=e.catch(7),C(e.t0.message),y("");case 16:case"end":return e.stop()}}),e,null,[[7,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"my-5",children:[k&&Object(h.jsx)("div",{className:"my-3 py-2 alert alert-danger",children:Object(h.jsx)("p",{className:"pb-0",children:k})}),Object(h.jsxs)("form",{onSubmit:I,children:[Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("label",{htmlFor:"fullName",className:"form-label",children:"Full Name"}),Object(h.jsx)("input",{value:a,onChange:function(e){return c(e.target.value)},type:"text",className:"form-control",id:"fullName","aria-describedby":"emailHelp"})]}),Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("label",{htmlFor:"email2",className:"form-label",children:"Email address"}),Object(h.jsx)("input",{value:i,onChange:function(e){return l(e.target.value)},type:"email",className:"form-control",id:"email2","aria-describedby":"emailHelp"}),Object(h.jsx)("div",{id:"emailHelp",className:"form-text",children:"We'll never share your email with anyone else."})]}),Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("label",{htmlFor:"password2",className:"form-label",children:"Password"}),Object(h.jsx)("input",{value:p,onChange:function(e){return x(e.target.value)},type:"password2",className:"form-control",id:"password"})]}),Object(h.jsxs)("button",{type:"submit",className:"btn btn-primary btn-block w-100 mt-3",disabled:!a||!i||!p,children:[N," Sign up"]})]})]})})})},v=function(){var e=Object(s.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(""),r=Object(m.a)(n,2),i=r[0],l=r[1],o=Object(s.useState)(""),b=Object(m.a)(o,2),O=b[0],p=b[1],x=Object(s.useState)(""),v=Object(m.a)(x,2),g=v[0],N=v[1],y=function(){var e=Object(j.a)(d.a.mark((function e(t){var s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),l(Object(h.jsx)(f,{})),a){e.next=7;break}p("Provide your email address"),l(""),e.next=18;break;case 7:return e.prev=7,s={url:"http://localhost:3000/success-password-reset",handleCodeInApp:!0},e.next=11,u.a.auth().sendPasswordResetEmail(a,s).then((function(){N("A password reset link has been sent to your ".concat(a)),p(""),l("")})).catch((function(e){e.code;var t=e.message;p(t),l("")}));case 11:l(""),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(7),p(e.t0.message),l("");case 18:case"end":return e.stop()}}),e,null,[[7,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"modal fade",id:"passwordResetModal",tabindex:"-1","aria-labelledby":"passwordResetModalLabel","aria-hidden":"true",children:Object(h.jsx)("div",{className:"modal-dialog modal-sm",children:Object(h.jsxs)("div",{className:"modal-content",children:[Object(h.jsxs)("div",{className:"modal-header",children:[Object(h.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Provide your email"}),Object(h.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(h.jsxs)("form",{onSubmit:y,children:[Object(h.jsxs)("div",{className:"modal-body",children:[O&&Object(h.jsx)("div",{className:"my-3 py-2 alert alert-danger",children:Object(h.jsx)("p",{className:"pb-0",children:O})}),g&&Object(h.jsx)("div",{className:"my-3 py-2 alert alert-success",children:Object(h.jsx)("p",{className:"pb-0",children:g})}),Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("label",{htmlFor:"email3",className:"form-label",children:"Email address"}),Object(h.jsx)("input",{value:a,onChange:function(e){return c(e.target.value)},type:"email",className:"form-control",id:"email3","aria-describedby":"emailHelp"})]})]}),Object(h.jsxs)("div",{className:"modal-footer",children:[Object(h.jsx)("button",{onClick:function(){return p("")},type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"}),Object(h.jsxs)("button",{type:"submit",className:"btn btn-primary",children:[i," Submit"]})]})]})]})})})},f=function(){return Object(h.jsxs)("span",{children:[Object(h.jsx)("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}),Object(h.jsx)("span",{className:"visually-hidden",children:"Loading..."})]})},g=function(){return Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"col-5 mx-auto my-5 bg-light p-3 rounded",children:[Object(h.jsx)("nav",{children:Object(h.jsxs)("div",{className:"nav nav-tabs",id:"nav-tab",role:"tablist",children:[Object(h.jsx)("button",{className:"nav-link active",id:"nav-login-tab","data-bs-toggle":"tab","data-bs-target":"#nav-login",type:"button",role:"tab","aria-controls":"nav-login","aria-selected":"true",children:"Login"}),Object(h.jsx)("button",{className:"nav-link",id:"nav-signup-tab","data-bs-toggle":"tab","data-bs-target":"#nav-signup",type:"button",role:"tab","aria-controls":"nav-signup","aria-selected":"false",children:"Signup"})]})}),Object(h.jsxs)("div",{className:"tab-content",id:"nav-tabContent",children:[Object(h.jsx)("div",{className:"tab-pane fade show active",id:"nav-login",role:"tabpanel","aria-labelledby":"nav-login-tab",children:Object(h.jsx)(p,{})}),Object(h.jsx)("div",{className:"tab-pane fade",id:"nav-signup",role:"tabpanel","aria-labelledby":"nav-signup-tab",children:Object(h.jsx)(x,{})}),Object(h.jsx)("div",{className:"text-center",children:Object(h.jsx)(l.b,{to:"/",className:"text-center",children:"Go Back"})})]})]})})},N=function(){var e=window.localStorage.getItem("email"),t=window.localStorage.getItem("fullName");return Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"col-6 mx-auto my-5 p-3 bg-light bg-gradient",children:[Object(h.jsxs)("h3",{className:"mb-2",children:["Hello, ",t," ",Object(h.jsx)("br",{}),"An email Verification link has been sent to ",e]}),Object(h.jsx)("h4",{className:"mb-3",children:"Click on the link sent, to verify your email"}),Object(h.jsxs)("h5",{children:["Go back ",Object(h.jsx)(l.b,{to:"/",children:"Home"})]})]})})},y=function(){var e=Object(o.f)(),t=window.localStorage.getItem("fullName");return Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"col-6 mx-auto my-5 p-3 bg-light",children:[Object(h.jsx)("h2",{children:t}),Object(h.jsx)("h3",{children:"Your email has been verified successfully"}),Object(h.jsx)("button",{className:"btn btn-primary mt-2",onClick:function(){window.localStorage.removeItem("email"),window.localStorage.removeItem("fullName"),e.push("/")},children:"Go Back home"})]})})},w=function(){var e=Object(o.f)();return Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"col-6 mx-auto my-5 p-3 bg-light",children:[Object(h.jsx)("h3",{children:"Your password has been reset"}),Object(h.jsx)("button",{className:"btn btn-primary mt-2",onClick:function(){e.push("/sign-in")},children:"Login"})]})})},S=function(){return Object(h.jsx)("div",{children:"Page Not Found"})};var k=function(){return Object(h.jsx)(l.a,{children:Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{exact:!0,path:"/",children:Object(h.jsx)(O,{})}),Object(h.jsx)(o.a,{path:"/sign-in",children:Object(h.jsx)(g,{})}),Object(h.jsx)(o.a,{path:"/email-sent",children:Object(h.jsx)(N,{})}),Object(h.jsx)(o.a,{path:"/success-registration",children:Object(h.jsx)(y,{})}),Object(h.jsx)(o.a,{path:"/success-password-reset",children:Object(h.jsx)(w,{})}),Object(h.jsx)(o.a,{path:"*",children:Object(h.jsx)(S,{})})]})})},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,53)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),s(e),c(e),n(e),r(e)}))};i.a.initializeApp({apiKey:"AIzaSyCqRhwJOHq9LDiagRhwV_q5a7jFYyBzxlM",authDomain:"react-and-firebase-ffd0d.firebaseapp.com",projectId:"react-and-firebase-ffd0d",storageBucket:"react-and-firebase-ffd0d.appspot.com",messagingSenderId:"225614522817",appId:"1:225614522817:web:ebba14395b686912ab6740"}),r.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(k,{})}),document.getElementById("root")),C()}},[[52,1,2]]]);
//# sourceMappingURL=main.6769d9e5.chunk.js.map