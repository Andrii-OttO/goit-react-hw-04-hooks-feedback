(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(5),o=c.n(s),r=(c(10),c(4)),i=c.n(r),b=c(2),d=c(0),j=function(e){var t=e.options,c=e.onLeaveFeedback;return Object(d.jsx)("div",{children:Object.keys(t).map((function(e){return Object(d.jsx)("button",{value:e,type:"button",onClick:function(){return c(e)},children:e},e)}))})},l=function(e){var t=e.good,c=e.neutral,n=e.bad,a=e.totalVoutes,s=e.positiveFeedback;return Object(d.jsxs)("ul",{className:i.a.FeedbackItem,children:[Object(d.jsxs)("li",{children:["Good: ",t]}),Object(d.jsxs)("li",{children:["Neutral: ",c]}),Object(d.jsxs)("li",{children:["Bad: ",n]}),Object(d.jsxs)("li",{children:["Total: ",a]}),Object(d.jsxs)("li",{children:["Positive Feedback: ",s,"%"]})]})};var u=function(){var e=Object(n.useState)(0),t=Object(b.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(0),o=Object(b.a)(s,2),r=o[0],i=o[1],u=Object(n.useState)(0),h=Object(b.a)(u,2),O=h[0],k=h[1],x=function(e,t,c){return e+t+c};return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Please leave feedback"}),Object(d.jsx)(j,{options:{good:c,neutral:O,bad:r},onLeaveFeedback:function(e){switch(console.log(e),e){case"good":a(c+1);break;case"bad":i(r+1);break;case"neutral":k(O+1);break;default:return}}}),Object(d.jsx)("h3",{children:"Statistics"}),0!==x()?Object(d.jsx)(l,{good:c,neutral:O,bad:r,totalVoutes:x(c,O,r),positiveFeedback:function(e,t,c){var n=e+t+c,a=Math.ceil(100*e/n);return isNaN(a)?0:a}(c,O,r)}):Object(d.jsx)("h3",{children:" No Feedback given"})]})};var h=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(u,{})})};o.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root"))},4:function(e,t,c){e.exports={FeedbackItem:"syle_FeedbackItem__2wbSQ"}}},[[12,1,2]]]);
//# sourceMappingURL=main.f89532b1.chunk.js.map