(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){e.exports=n(40)},,,,,function(e,t,n){},,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(7),l=n.n(i),r=(n(18),n(8)),c=n(9),s=n(11),u=n(10),m=n(12),d=(n(21),function(){return o.a.createElement("div",{className:"header"},o.a.createElement("div",{className:"logo"}),o.a.createElement("div",{className:"button"},"Try It Free"))}),E=(n(23),n(25),function(e){var t=e.text;return o.a.createElement("div",{className:"button-primary"},t)}),v=function(){return o.a.createElement("div",{className:"intro"},o.a.createElement("h2",null,"Build The Community Your Fans Will Love"),o.a.createElement("p",{className:"description"},"Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in geniune discussion."),o.a.createElement(E,{text:"Get Started For Free"}),o.a.createElement("div",{className:"screen-mockups"}),o.a.createElement("div",{className:"stats"},o.a.createElement("div",{className:"community"},o.a.createElement("div",{className:"community-icon"}),o.a.createElement("p",{className:"stats-heading"},"1.4k+"),o.a.createElement("p",{className:"stats-description"},"Communities Formed")),o.a.createElement("div",{className:"messages"},o.a.createElement("div",{className:"messages-icon"}),o.a.createElement("p",{className:"stats-heading"},"2.7m+"),o.a.createElement("p",{className:"stats-description"},"Messages Sent"))))},f=(n(27),function(){return o.a.createElement("div",{className:"section section1"},o.a.createElement("div",{className:"text"},o.a.createElement("h3",null,"Grow Together"),o.a.createElement("p",null,"Generate meaningful discussions with audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.")),o.a.createElement("div",{className:"illustration-grow"}))}),h=(n(29),function(){return o.a.createElement("div",{className:"section section2"},o.a.createElement("div",{className:"illustration-flowing"}),o.a.createElement("div",{className:"text"},o.a.createElement("h3",null,"Flowing Conversations"),o.a.createElement("p",null,"You wouldn't paginate a conversation in real life, so why do it online?"),o.a.createElement("p",null,"Our Threads have just-in-time loading for a more natural flow.")))}),p=(n(31),function(){return o.a.createElement("div",{className:"section section3"},o.a.createElement("div",{className:"text"},o.a.createElement("h3",null,"Your Users"),o.a.createElement("p",null,"It takes no time at all to integrate Huddle with your app's authentification solution. This means, once signed in to your app, your users can start chatting immediately.")),o.a.createElement("div",{className:"illustration-users"}))}),g=(n(33),function(){return o.a.createElement("div",null,o.a.createElement(f,null),o.a.createElement(h,null),o.a.createElement(p,null),o.a.createElement("div",{className:"section4"},o.a.createElement("h3",null,"Ready To Build Your Community?"),o.a.createElement(E,{text:"Get Started For Free"})))}),w=(n(35),n(2)),N=n(5),y=n(3),b=function(){return o.a.createElement("div",{className:"footer"},o.a.createElement("div",{className:"footer-section"},o.a.createElement("div",{className:"logo"}),o.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),o.a.createElement("p",null,o.a.createElement(w.a,{icon:N.b}),"  Phone: +1-543-123-4567"),o.a.createElement("p",null,o.a.createElement(w.a,{icon:N.a}),"  example@huddle.com"),o.a.createElement("div",{className:"social"},o.a.createElement(w.a,{icon:y.a}),o.a.createElement(w.a,{icon:y.b}),o.a.createElement(w.a,{icon:y.c}))),o.a.createElement("div",{className:"footer-section"},o.a.createElement("h3",null,"NEWSLETTER"),o.a.createElement("p",null,"To receive tips on how to grow your community, sign up to our weekly newsletter. We'll never send you spam or pass on your email address"),o.a.createElement("form",null,o.a.createElement("input",{type:"email",name:"email","aria-label":"email"}),o.a.createElement("div",{className:"button-primary subscribe"},"Subscribe"))))},k=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(d,null),o.a.createElement(v,null),o.a.createElement(g,null),o.a.createElement(b,null))}}]),t}(a.Component),T=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(o.a.createElement(k,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/huddle",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/huddle","/service-worker.js");T?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):C(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):C(t,e)})}}();!function(){var e=window.navigator.userAgent.toLowerCase();return/iphone|ipad|ipod/.test(e)}()||"standalone"in window.navigator&&window.navigator.standalone||(void 0).setState({showInstallMessage:!0})}],[[13,2,1]]]);
//# sourceMappingURL=main.504de0c9.chunk.js.map