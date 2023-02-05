"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[608],{7623:function(n,e,t){t.d(e,{Fb:function(){return u},IQ:function(){return l},XT:function(){return s},hu:function(){return d},pm:function(){return p}});var r=t(5861),a=t(4687),i=t.n(a),o=t(1912),c="ade16ccb99a7efabe4d5368f2610c9a0";o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/day?api_key=".concat(c));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"?api_key=").concat(c));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("search/movie?api_key=".concat(c,"&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/credits?api_key=").concat(c));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/reviews?api_key=").concat(c));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},3874:function(n,e,t){t.d(e,{O:function(){return h}});var r,a,i,o=t(1087),c=t(7689),s=t(168),u=t(4934),p=u.Z.div(r||(r=(0,s.Z)(["\n\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 310px);\n  gap: 16px;\n   justify-content: center;\n  \n"]))),l=u.Z.div(a||(a=(0,s.Z)(["\n\n  border: 1px solid black;\n  border-radius: 4px;\n  text-align: center;\n  display: flex;\n    align-items: center;\n    justify-content: center;\n\n  > a {\n    text-decoration: none;\n    color: black;\n    :hover{\ncolor: orange;\n    }\n    \n    \n  }\n  :hover{\n    border: 1px solid orange;\n    color: orange;\n    text-decoration:underline;}\n   \n"]))),d=u.Z.h3(i||(i=(0,s.Z)(["\n\n  padding: 4px;\n  margin-top: 8px;\n  margin-bottom: 0;\n  color: inherit;\n\n  \n"]))),f=t(184),h=function(n){var e=n.movies,t=(0,c.TH)();return(0,f.jsx)(p,{children:e.map((function(n){return(0,f.jsx)(l,{children:(0,f.jsxs)(o.rU,{to:"/movies/".concat(n.id),state:{from:t},style:{width:"100%",height:"100%"},children:[(0,f.jsxs)("figure",{style:{objectFit:"cover",margin:"0"},children:[n.poster_path&&(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(n.poster_path),alt:"",loading:"lazy",style:{width:"100%"}}),!n.poster_path&&(0,f.jsx)("img",{src:"https://via.placeholder.com/198x295?text=No+Img",alt:""})]}),(0,f.jsx)(d,{children:n.title})]})},n.id)}))})}},9608:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var r,a,i,o=t(5861),c=t(9439),s=t(4687),u=t.n(s),p=t(1087),l=t(3874),d=t(9014),f=t(168),h=t(4934),m=t(7692),x=h.Z.form(r||(r=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  align-items: center;\n  margin-bottom: 10px;\n"]))),v=h.Z.input(a||(a=(0,f.Z)(["\n  display: inline-block;\n  width: 300px;\n  font: inherit;\n  font-size: 20px;\n  border: 1 solid black;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  \n"]))),g=(0,h.Z)(m.wTD)(i||(i=(0,f.Z)(["\n  width: 20px;\n  height: 20px;\n \n  right: 6px;\n  :hover{\n    color: orange;\n  }\n"]))),b=t(184),y=function(n){var e=n.handleOnSubmit,t=n.isLoading;return(0,b.jsxs)(x,{onSubmit:function(n){n.preventDefault();var t=n.target.elements.searchQuery.value;""!==t?(e(t),n.target.reset()):d.ZP.error("Search field is empty!")},children:[(0,b.jsx)("button",{type:"submit",className:"SearchForm-button",disabled:t,children:(0,b.jsx)(g,{className:"icon"})}),(0,b.jsx)(v,{name:"searchQuery",className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"})]})},Z=t(7623),w=t(2791),k=t(4321),j=function(){var n,e=(0,w.useState)(""),t=(0,c.Z)(e,2),r=t[0],a=t[1],i=(0,w.useState)(),s=(0,c.Z)(i,2),d=s[0],f=s[1],h=(0,w.useState)(!1),m=(0,c.Z)(h,2),x=m[0],v=m[1],g=(0,p.lr)(),j=(0,c.Z)(g,2),_=j[0],S=j[1],F=null!==(n=_.get("query"))&&void 0!==n?n:"";return(0,w.useEffect)((function(){function n(){return(n=(0,o.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,v(!0),n.next=4,(0,Z.pm)(r||F);case 4:if(e=n.sent){n.next=7;break}throw new Error(console.log("ooops"));case 7:f(e),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:return n.prev=13,v(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,10,13,16]])})))).apply(this,arguments)}(r||F)&&function(){n.apply(this,arguments)}()}),[r,F]),(0,b.jsxs)("main",{style:{padding:"20px"},children:[(0,b.jsx)(y,{handleOnSubmit:function(n){a(n),S({query:n})},isLoading:x}),x&&(0,b.jsx)(k.a,{}),d&&(0,b.jsx)(l.O,{movies:d}),d&&!d.length&&(0,b.jsx)("div",{style:{margin:"10px"},children:"There is no results! Please try again"})]})}}}]);
//# sourceMappingURL=608.ea50ada9.chunk.js.map