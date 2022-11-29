"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[136],{136:function(e,a,r){r.r(a),r.d(a,{default:function(){return _}});var o=r(791),n=r(184),l=function(e){var a=e.classes;return(0,n.jsx)("div",{className:a.header,children:(0,n.jsx)("h1",{children:"react-event-viewer-calendar"})})},t=r(152),d=r(355),s=r(865),c=r.n(s),i=r(983),u="Form_container__cE1Zo",h="Form_formPart__bidD4",x="Form_formSectionTitle__xrZ7M",m="Form_calendarSection__u8hPB",p="Form_submitButton__n6GzH",v="Form_headerSection__a2Xco",j="Form_datesSection__193Xs",C="Form_datesFormContent__bcD2j",b=function(e){var a=(0,o.useState)(!0),r=(0,t.Z)(a,2),l=r[0],d=r[1],s=(0,o.useState)(""),c=(0,t.Z)(s,2),i=c[0],b=c[1],g=(0,o.useState)(""),f=(0,t.Z)(g,2),y=f[0],k=f[1],_=(0,o.useState)(""),F=(0,t.Z)(_,2),B=F[0],N=F[1],S=(0,o.useState)(""),Z=(0,t.Z)(S,2),w=Z[0],D=Z[1],M=(0,o.useState)(!0),T=(0,t.Z)(M,2),P=T[0],H=T[1],A=(0,o.useState)(""),O=(0,t.Z)(A,2),U=O[0],V=O[1],E=(0,o.useState)(""),I=(0,t.Z)(E,2),K=I[0],q=I[1],G=(0,o.useState)(""),J=(0,t.Z)(G,2),Q=J[0],R=J[1],X=(0,o.useState)(""),Y=(0,t.Z)(X,2),z=Y[0],L=Y[1],W=(0,o.useState)(""),$=(0,t.Z)(W,2),ee=$[0],ae=$[1],re=(0,o.useState)(""),oe=(0,t.Z)(re,2),ne=oe[0],le=oe[1],te=(0,o.useState)(""),de=(0,t.Z)(te,2),se=de[0],ce=de[1],ie=(0,o.useState)(""),ue=(0,t.Z)(ie,2),he=ue[0],xe=ue[1],me=(0,o.useState)(""),pe=(0,t.Z)(me,2),ve=pe[0],je=pe[1],Ce=function(e){switch(e.target.id){case"calendarBorder":d(e.target.value);break;case"calendarBorderColor":b(e.target.value);break;case"headerColor":k(e.target.value);break;case"headerFontColor":N(e.target.value);break;case"headerFontFamily":D(e.target.value);break;case"dateBorder":H(e.target.value);break;case"dateBorderColor":q(e.target.value);break;case"dateBackgroundColor":V(e.target.value);break;case"dayNumberColor":R(e.target.value);break;case"currentDayBadgeColor":L(e.target.value);break;case"currentDayNumberColor":ae(e.target.value);break;case"outsideMonthBackground":le(e.target.value);break;case"outsideMonthFontColor":ce(e.target.value);break;case"eventsBackground":xe(e.target.value);break;case"eventsFontColor":je(e.target.value)}};return(0,n.jsxs)("form",{className:u,onSubmit:function(a){a.preventDefault();var r={calendar:{border:"false"!==l,borderColor:i},header:{background:y,fontColor:B,fontFamily:w},dates:{border:"false"!==P,background:U,borderColor:K,numberColor:Q,todayBadgeColor:z,todayNumberColor:ee,outsideMonth:{background:ne,fontColor:se}},events:{background:he,fontColor:ve}};console.log("stylesObject",r),e.stylesHandler(r)},children:[(0,n.jsxs)("div",{className:"".concat(m," ").concat(m),children:[(0,n.jsx)("span",{className:x,children:"Calendar"}),(0,n.jsx)("label",{htmlFor:"calendarBorder",children:"Border:"}),(0,n.jsxs)("select",{id:"calendarBorder",onChange:Ce,value:l,children:[(0,n.jsx)("option",{value:"true",children:"true"}),(0,n.jsx)("option",{value:"false",children:"false"})]}),(0,n.jsx)("label",{htmlFor:"calendarBorderColor",children:"Border Color:"}),(0,n.jsx)("input",{id:"calendarBorderColor",type:"text",value:i,onChange:Ce,placeholder:"header font color"})]}),(0,n.jsxs)("div",{className:"".concat(m," ").concat(v),children:[(0,n.jsx)("span",{className:x,children:"Header"}),(0,n.jsx)("label",{htmlFor:"headerColor",children:"Background:"}),(0,n.jsx)("input",{id:"headerColor",type:"text",value:y,onChange:Ce,placeholder:"header background color"}),(0,n.jsx)("label",{htmlFor:"headerFontColor",children:"Font Color:"}),(0,n.jsx)("input",{id:"headerFontColor",type:"text",value:B,onChange:Ce,placeholder:"header font color"}),(0,n.jsx)("label",{htmlFor:"headerFontFamily",children:"Font Family:"}),(0,n.jsx)("input",{id:"headerFontFamily",type:"text",value:w,onChange:Ce,placeholder:"month title font family"})]}),(0,n.jsxs)("div",{className:"".concat(m," ").concat(j),children:[(0,n.jsx)("span",{className:x,children:"Dates"}),(0,n.jsxs)("div",{className:C,children:[(0,n.jsxs)("div",{className:h,children:[(0,n.jsx)("label",{htmlFor:"dateBorder",children:"Border:"}),(0,n.jsxs)("select",{id:"dateBorder",onChange:Ce,value:P,children:[(0,n.jsx)("option",{value:"true",children:"true"}),(0,n.jsx)("option",{value:"false",children:"false"})]}),(0,n.jsx)("label",{htmlFor:"dateBackgroundColor",children:"Background:"}),(0,n.jsx)("input",{id:"dateBackgroundColor",type:"text",value:U,onChange:Ce,placeholder:"day tiles background color"}),(0,n.jsx)("label",{htmlFor:"dateBorderColor",children:"Border Color:"}),(0,n.jsx)("input",{id:"dateBorderColor",type:"text",value:K,onChange:Ce,placeholder:"day tiles border color"}),(0,n.jsx)("label",{htmlFor:"outsideMonthBackground",children:"Outside Month Background:"}),(0,n.jsx)("input",{id:"outsideMonthBackground",type:"text",value:ne,onChange:Ce,placeholder:"outer-month background color"})]}),(0,n.jsxs)("div",{className:h,children:[(0,n.jsx)("label",{htmlFor:"dayNumberColor",children:"Number Color:"}),(0,n.jsx)("input",{id:"dayNumberColor",type:"text",value:Q,onChange:Ce,placeholder:"day tiles number color"}),(0,n.jsx)("label",{htmlFor:"currentDayBadgeColor",children:"Today Badge Color:"}),(0,n.jsx)("input",{id:"currentDayBadgeColor",type:"text",value:z,onChange:Ce,placeholder:"current day badge color"}),(0,n.jsx)("label",{htmlFor:"currentDayNumberColor",children:"Today Number Color:"}),(0,n.jsx)("input",{id:"currentDayNumberColor",type:"text",value:ee,onChange:Ce,placeholder:"current day number color"}),(0,n.jsx)("label",{htmlFor:"outsideMonthFontColor",children:"Outside Month Font Color:"}),(0,n.jsx)("input",{id:"outsideMonthFontColor",type:"text",value:se,onChange:Ce,placeholder:"outer-month font color"})]})]})]}),(0,n.jsxs)("div",{className:"".concat(m),children:[(0,n.jsx)("span",{className:x,children:"Events"}),(0,n.jsx)("label",{htmlFor:"eventsBackground",children:"Background:"}),(0,n.jsx)("input",{id:"eventsBackground",type:"text",value:he,onChange:Ce,placeholder:"events background color"}),(0,n.jsx)("label",{htmlFor:"eventsFontColor",children:"Font Color:"}),(0,n.jsx)("input",{id:"eventsFontColor",type:"text",value:ve,onChange:Ce,placeholder:"events font color"})]}),(0,n.jsx)("button",{className:p,children:"Update"})]})},g=function(e){var a,r,l=e.classes,s={calendar:{border:void 0,borderColor:void 0},header:{background:void 0,fontColor:void 0,fontFamily:void 0},dates:{border:void 0,background:void 0,borderColor:void 0,numberColor:void 0,todayBadgeColor:void 0,todayNumberColor:void 0,outsideMonth:{background:void 0,fontColor:void 0}},events:{background:void 0,fontColor:void 0}},u=(0,o.useState)(!1),h=(0,t.Z)(u,2),x=h[0],m=h[1],p=(0,o.useState)(s),v=(0,t.Z)(p,2),j=v[0],C=v[1],g=(0,o.useState)(!1),f=(0,t.Z)(g,2),y=f[0],k=f[1],_=(0,o.useRef)();(0,o.useEffect)((function(){y&&(_.current.scrollIntoView(),k(!1))}),[y]);var F=new Date,B=F.getFullYear(),N=F.getMonth()+1,S=[{date:new Date("".concat(B,"/").concat(N,"/14")),event:["Anniversary","Haircut appointment"]},{date:new Date("".concat(B,"/").concat(N,"/25")),event:["Bob's bday"]},{date:new Date("".concat(B,"/").concat(N,"/10")),event:["Alice's graduation","Pick up flowers","Kayaking day"]},{date:new Date("".concat(B,"/").concat(N,"/2")),event:["Cafe grand opening"]},{date:new Date("".concat(B,"/").concat(N,"/27")),event:["Bob's play","Family dinner","Game Night"]}];return(0,n.jsx)("div",{className:l.body,children:(0,n.jsxs)("div",{className:l.demoContainer,children:[(0,n.jsx)("div",{ref:_,className:l.calendarContainer,children:(0,n.jsx)(c(),{clickHandler:function(e,a){console.log("events",e),console.log("date",a)},events:S,styles:j})}),(0,n.jsxs)("div",{className:l.demoForm,children:[(0,n.jsx)("p",{className:l.formTitle,children:"Styling Options"}),(0,n.jsxs)("div",{className:"".concat(l.codeBlock),style:{margin:"0 1em"},children:[(0,n.jsx)("p",{children:"const styles = {"}),(0,n.jsx)("p",{children:"\xa0 \xa0 calendar: {"}),(0,n.jsxs)("p",{children:["\xa0 \xa0 \xa0 \xa0 border: ",(null===(a=j.calendar.border)||void 0===a?void 0:a.toString())||"undefined"]}),(0,n.jsxs)("p",{children:["\xa0 \xa0 \xa0 \xa0 borderColor: ",j.calendar.borderColor||"undefined"," "]}),(0,n.jsx)("p",{children:"\xa0 \xa0 },"}),(0,n.jsx)("p",{children:"\xa0 \xa0 header: {"}),(0,n.jsxs)("p",{children:["\xa0 \xa0 \xa0 \xa0 background: ",j.header.background||"undefined"," "]}),(0,n.jsxs)("p",{children:["\xa0 \xa0 \xa0 \xa0 fontColor: ",j.header.fontColor||"undefined"," "]}),(0,n.jsxs)("p",{children:["\xa0 \xa0 \xa0 \xa0 fontFamily: ",j.header.fontFamily||"undefined"," "]}),(0,n.jsx)("p",{children:"\xa0 \xa0 },"}),(0,n.jsx)("p",{children:"\xa0 \xa0 dates: {"}),(0,n.jsxs)("p",{children:["\xa0 \xa0 \xa0 \xa0 border: ",(null===(r=j.dates.border)||void 0===r?void 0:r.toString())||"undefined"," "]}),(0,n.jsxs)("p",{children:["\xa0 \xa0 \xa0 \xa0 background: ",j.dates.background||"undefined"," "]}),(0,n.jsxs)("p",{children:["\xa0 \xa0 \xa0 \xa0 borderColor: ",j.dates.borderColor||"undefined"," "]}),(0,n.jsxs)("p",{children:["\xa0 \xa0 \xa0 \xa0 numberColor: ",j.dates.numberColor||"undefined"," "]}),(0,n.jsxs)("p",{children:["\xa0 \xa0 \xa0 \xa0 todayBadgeColor: ",j.dates.todayBadgeColor||"undefined"," "]}),(0,n.jsxs)("p",{children:["\xa0 \xa0 \xa0 \xa0 todayNumberColor: ",j.dates.todayNumberColor||"undefined"," "]}),(0,n.jsx)("p",{children:"\xa0 \xa0 \xa0 \xa0 outsideMonth: { "}),(0,n.jsxs)("p",{children:["\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 background: ",j.dates.outsideMonth.background||"undefined"," "]}),(0,n.jsxs)("p",{children:["\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 fontColor: ",j.dates.outsideMonth.fontColor||"undefined"," "]}),(0,n.jsx)("p",{children:"\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 } "}),(0,n.jsx)("p",{children:"\xa0 \xa0 },"}),(0,n.jsx)("p",{children:"\xa0 \xa0 events: {"}),(0,n.jsxs)("p",{children:["\xa0 \xa0 \xa0 \xa0 background: ",j.events.background||"undefined"," "]}),(0,n.jsxs)("p",{children:["\xa0 \xa0 \xa0 \xa0 fontColor: ",j.events.fontColor||"undefined"," "]}),(0,n.jsx)("p",{children:"\xa0 \xa0 }"}),(0,n.jsx)("p",{children:"}"})]}),(0,n.jsx)(b,{stylesHandler:function(e){k(!0),C(e)}})]}),(0,n.jsxs)("div",{className:l.detailsContainer,children:[(0,n.jsxs)("div",{className:l.detailsSection,children:[(0,n.jsx)("span",{className:l.detailsTitle,children:"About"}),(0,n.jsx)("p",{children:"Display your events in this simple, easy-to-use calendar events-viewer for React."})]}),(0,n.jsxs)("div",{className:l.detailsSection,children:[(0,n.jsx)("span",{className:l.detailsTitle,children:"Install with npm"}),(0,n.jsxs)("div",{className:"".concat(l.codeBlock," ").concat(l.npmBlock," ").concat(x&&l.copyToClip),onClick:function(){navigator.clipboard.writeText("npm install react-event-viewer-calendar"),m(!0)},onAnimationEnd:function(){m(!1)},children:[(0,n.jsx)("p",{style:{color:"#39FF14"},children:"npm install react-event-viewer-calendar"}),(0,n.jsx)(i.Pd.Provider,{value:{color:"gainsboro"},children:(0,n.jsx)(d.Dup,{})})]})]}),(0,n.jsxs)("div",{className:l.detailsSection,children:[(0,n.jsx)("span",{className:l.detailsTitle,children:"Usage"}),(0,n.jsxs)("div",{className:"".concat(l.codeBlock),children:[(0,n.jsx)("p",{children:"import Calendar from 'react-event-viewer-calendar'"}),(0,n.jsx)("p",{children:"\xa0"}),(0,n.jsx)("p",{style:{color:"slategray"},children:"// \xa0passing in a styles object is optional"}),(0,n.jsx)("p",{children:"<Calendar styles={styles} /> "})]})]})]})]})})},f=r(978),y=function(e){var a=e.classes;return(0,n.jsxs)("div",{className:a.footer,children:[(0,n.jsx)(i.Pd.Provider,{value:{color:"#121212",size:"2rem"},children:(0,n.jsxs)("div",{style:{display:"flex",gap:"1rem"},children:[(0,n.jsx)(d.hJX,{}),(0,n.jsx)(d.huN,{}),(0,n.jsx)(f.WZi,{}),(0,n.jsx)(d.yQA,{})]})}),(0,n.jsx)("a",{className:a.link,href:"https://github.com/jpagtama/react-event-viewer-calendar",target:"_blank",rel:"noopener noreferrer",children:"View the code on GitHub"}),(0,n.jsxs)("span",{children:[(0,n.jsx)("a",{className:a.link,href:"https://julianpagtama.com",target:"_blank",rel:"noopener noreferrer",children:"Julian Pagtama"})," \xa9 ",(new Date).getFullYear()]})]})},k={container:"Calendar_container__hb5jK",body:"Calendar_body__KFPeM",header:"Calendar_header__UApBQ",formTitle:"Calendar_formTitle__p4CRK",demoContainer:"Calendar_demoContainer__Mnnub",calendarContainer:"Calendar_calendarContainer__kCVhZ",demoForm:"Calendar_demoForm__WmVq6",codeBlock:"Calendar_codeBlock__IscOq",detailsContainer:"Calendar_detailsContainer__Ho4TJ",detailsSection:"Calendar_detailsSection__L1IZm",detailsTitle:"Calendar_detailsTitle__kaUnY",npmBlock:"Calendar_npmBlock__wVQiP",copyToClip:"Calendar_copyToClip__dUmLq",footer:"Calendar_footer__+4c9D"},_=function(){return(0,n.jsxs)("div",{className:k.container,children:[(0,n.jsx)(l,{classes:k}),(0,n.jsx)(g,{classes:k}),(0,n.jsx)(y,{classes:k})]})}}}]);
//# sourceMappingURL=136.a46239e9.chunk.js.map