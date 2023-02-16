(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{143:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),i=n(83),r=n.n(i),c=(n(92),n(11)),o=(n(94),n(194)),s=(n(96),n(98),n(100),n(102),n(144)),u=n(19),m=n(218),d=n(199),f=n(43),p=function(){var e=localStorage.getItem("exercises");return JSON.parse(e)},E=function(e){console.log("Update exercises in local storage..."),localStorage.setItem("exercises",JSON.stringify(e))},g=function(e){return p().filter(function(t){return t.muscle==e})},x=n(212),h=n(213),S=function(e){return l.a.createElement(x.a,{sx:{position:"fixed",bottom:0,left:0,right:0,pb:8,pl:1,pr:1},elevation:3},l.a.createElement(h.a,{variant:"contained",fullWidth:!0,color:"secondary",sx:{p:2},onClick:e.onClick},e.text))},b=n(185),C=n(220),v=n(192),y=n(223),O=n(224),j=n(115),k=n.n(j),w=l.a.forwardRef(function(e,t){return l.a.createElement(b.a,Object.assign({direction:"up",ref:t},e))}),A=function(e){return l.a.createElement(C.a,{open:e.open,TransitionComponent:w,PaperProps:{sx:{height:"100%",width:"100%",m:0,position:"fixed",bottom:0,borderBottomRightRadius:0,borderBottomLeftRadius:0}}},l.a.createElement(v.a,null,e.title,l.a.createElement(y.a,{"aria-label":"close",onClick:e.onClose,sx:{position:"absolute",right:8,top:8,color:function(e){return e.palette.grey[500]}}},l.a.createElement(k.a,null))),l.a.createElement(O.a,{sx:{}},e.children))},I=n(205),R={BICEPS:{locale:"\u0411\u0438\u0446\u0435\u043f\u0441"},TRICEPS:{locale:"\u0422\u0440\u0438\u0446\u0435\u043f\u0441"},QUADS:{locale:"\u041f\u0435\u0440\u0435\u0434\u043d\u044f\u044f \u043f\u043e\u0432\u0435\u0440\u0445\u043d\u043e\u0441\u0442\u044c \u0431\u0435\u0434\u0440\u0430"},GLUTES:{locale:"\u042f\u0433\u043e\u0434\u0438\u0446\u044b"},ABS:{locale:"\u041f\u0440\u0435\u0441\u0441"},CHEST:{locale:"\u0413\u0440\u0443\u0434\u044c"},SHOULDERS:{locale:"\u041f\u043b\u0435\u0447\u0438"},HAMSTRINGS:{locale:"\u0417\u0430\u0434\u043d\u044f\u044f \u043f\u043e\u0432\u0435\u0440\u0445\u043d\u043e\u0441\u0442\u044c \u0431\u0435\u0434\u0440\u0430"},FOREARMS:{locale:"\u041f\u0440\u0435\u0434\u043f\u043b\u0435\u0447\u044c\u044f"},NECK:{locale:"\u0428\u0435\u044f"},LATS:{locale:"\u0428\u0438\u0440\u043e\u0447\u0430\u0439\u0448\u0438\u0435"},LOWER_BACK:{locale:"\u0420\u0430\u0437\u0433\u0438\u0431\u0430\u0442\u0435\u043b\u0438 \u0441\u043f\u0438\u043d\u044b/\u041f\u043e\u044f\u0441\u043d\u0438\u0446\u0430"},MIDDLE_BACK:{locale:"\u0421\u0435\u0440\u0435\u0434\u0438\u043d\u0430 \u0441\u043f\u0438\u043d\u044b"},TRAPS:{locale:"\u0422\u0440\u0430\u043f\u0435\u0446\u0438\u0438"}},D=["BICEPS","TRICEPS","QUADS","GLUTES","ABS","CHEST","SHOULDERS","HAMSTRINGS","FOREARMS","NECK","LATS","LOWER_BACK","MIDDLE_BACK","TRAPS"],T=[{id:"1",title:"\u041f\u043e\u0434\u044a\u0435\u043c \u0448\u0442\u0430\u043d\u0433\u0438 \u043d\u0430 \u0431\u0438\u0446\u0435\u043f\u0441",muscle:"BICEPS"},{id:"18",title:"\u041f\u043e\u0434\u0442\u044f\u0433\u0438\u0432\u0430\u043d\u0438\u044f \u043e\u0431\u0440\u0430\u0442\u043d\u044b\u043c \u0445\u0432\u0430\u0442\u043e\u043c",muscle:"BICEPS"},{id:"19",title:"\u041f\u043e\u0434\u044a\u0435\u043c \u0433\u0430\u043d\u0442\u0435\u043b\u0435\u0439 \u0432 \u0441\u043a\u0430\u043c\u044c\u0435 \u0421\u043a\u043e\u0442\u0442\u0430",muscle:"BICEPS"},{id:"15",title:"\u041c\u043e\u043b\u043e\u0442\u043a\u0438 \u0441 \u0433\u0430\u043d\u0442\u0435\u043b\u044f\u043c\u0438",muscle:"BICEPS"},{id:"2",title:"\u0424\u0440\u0430\u043d\u0446\u0443\u0437\u0441\u043a\u0438\u0439 \u0436\u0438\u043c \u0441\u043e \u0448\u0442\u0430\u043d\u0433\u043e\u0439",muscle:"TRICEPS"},{id:"20",title:"\u0424\u0440\u0430\u043d\u0446\u0443\u0437\u0441\u043a\u0438\u0439 \u0441\u043e \u0448\u0442\u0430\u043d\u0433\u043e\u0439",muscle:"TRICEPS"},{id:"21",title:"\u0416\u0438\u043c \u043b\u0435\u0436\u0430 \u0443\u0437\u043a\u0438\u043c \u0445\u0432\u0430\u0442\u043e\u043c",muscle:"TRICEPS"},{id:"22",title:"\u0420\u0430\u0437\u0433\u0438\u0431\u0430\u043d\u0438\u044f \u043d\u0430 \u0442\u0440\u0438\u0446\u0435\u043f\u0441 \u0432 \u0432\u0435\u0440\u0445\u043d\u0435\u043c \u0431\u043b\u043e\u043a\u0435",muscle:"TRICEPS"},{id:"3",title:"\u041f\u0440\u0438\u0441\u0435\u0434\u0430\u043d\u0438\u044f \u0441\u043e \u0448\u0442\u0430\u043d\u0433\u043e\u0439",muscle:"QUADS"},{id:"23",title:"\u0416\u0438\u043c \u043d\u043e\u0433\u0430\u043c\u0438",muscle:"QUADS"},{id:"24",title:"\u0420\u0430\u0437\u0433\u0438\u0431\u0430\u043d\u0438\u044f \u0432 \u0431\u043b\u043e\u043a\u0435 \u043d\u0430 \u043a\u0432\u0430\u0434\u0440\u0438\u0446\u0435\u043f\u0441",muscle:"QUADS"},{id:"25",title:"\u0412\u044b\u043f\u0430\u0434\u044b \u0441 \u0433\u0430\u043d\u0442\u0435\u043b\u0435\u0439",muscle:"QUADS"},{id:"4",title:"\u041e\u0442\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043d\u043e\u0433\u0438 \u0432 \u0431\u043b\u043e\u043a\u0435",muscle:"GLUTES"},{id:"26",title:"\u042f\u0433\u043e\u0434\u0438\u0447\u043d\u044b\u0439 \u043c\u043e\u0441\u0442",muscle:"GLUTES"},{id:"27",title:"\u0413\u043b\u0443\u0431\u043e\u043a\u0438\u0435 \u043f\u0440\u0438\u0441\u0435\u0434\u0430\u043d\u0438\u044f \u0441 \u0448\u0438\u0440\u043e\u043a\u043e\u0439 \u043f\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u043e\u0439 \u043d\u043e\u0433",muscle:"GLUTES"},{id:"28",title:"\u041e\u0442\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u043d\u043e\u0433 \u0432 \u0441\u0442\u043e\u0440\u043e\u043d\u044b \u0432 \u0442\u0440\u0435\u043d\u0430\u0436\u0435\u0440\u0435",muscle:"GLUTES"},{id:"5",title:"\u0421\u043a\u0440\u0443\u0447\u0438\u0432\u0430\u043d\u0438\u044f \u0432 \u0440\u0438\u043c\u0441\u043a\u043e\u043c \u0441\u0442\u0443\u043b\u0435",muscle:"ABS"},{id:"29",title:"\u0421\u043a\u0440\u0443\u0447\u0438\u0432\u0430\u043d\u0438\u044f \u0432 \u0432\u0438\u0441\u0435 \u043d\u0430 \u043f\u0435\u0440\u0435\u043a\u043b\u0430\u0434\u0438\u043d\u0435",muscle:"ABS"},{id:"6",title:"\u0416\u0438\u043c \u0441\u043e \u0448\u0442\u0430\u043d\u0433\u043e\u0439 \u043b\u0435\u0436\u0430",muscle:"CHEST"},{id:"30",title:"\u0416\u0438\u043c \u0441\u043e \u0448\u0442\u0430\u043d\u0433\u043e\u0439 \u043b\u0435\u0436\u0430 \u043d\u0430 \u043d\u0430\u043a\u043b\u043e\u043d\u043d\u043e\u0439 \u0441\u043a\u0430\u043c\u044c\u0435",muscle:"CHEST"},{id:"31",title:"\u0411\u0430\u0431\u043e\u0447\u043a\u0430",muscle:"CHEST"},{id:"7",title:"\u041c\u0430\u0445\u0438 \u0441 \u0448\u0430\u0433\u0442\u0435\u043b\u044f\u043c\u0438 \u0432 \u0441\u0442\u043e\u0440\u043e\u043d\u044b",muscle:"SHOULDERS"},{id:"16",title:"\u0410\u0440\u043c\u0435\u0439\u0441\u043a\u0438\u0439 \u0436\u0438\u043c",muscle:"SHOULDERS"},{id:"17",title:"\u0416\u0438\u043c \u0433\u0430\u043d\u0442\u0435\u043b\u0435\u0439 \u0441\u0438\u0434\u044f",muscle:"SHOULDERS"},{id:"8",title:"\u0420\u0443\u043c\u044b\u043d\u0441\u043a\u0430\u044f \u0442\u044f\u0433\u0430",muscle:"HAMSTRINGS"},{id:"9",title:"\u041e\u0431\u0435\u0437\u044c\u044f\u043d\u0438\u0439 \u0445\u0432\u0430\u0442",muscle:"FOREARMS"},{id:"10",title:"\u0421\u043a\u0440\u0438\u0447\u0438\u0432\u0430\u043d\u0438\u044f \u0448\u0435\u0438 \u0441 \u0431\u043b\u0438\u043d\u043e\u043c",muscle:"NECK"},{id:"11",title:"\u041f\u043e\u0434\u0442\u044f\u0433\u0438\u0432\u0430\u043d\u0438\u044f",muscle:"LATS"},{id:"12",title:"\u042d\u043a\u0441\u0442\u0435\u043d\u0437\u0438\u044f",muscle:"LOWER_BACK"},{id:"13",title:"\u0422\u044f\u0433\u0430 \u043d\u0438\u0436\u043d\u0435\u0433\u043e \u0431\u043b\u043e\u043a\u0430",muscle:"MIDDLE_BACK"},{id:"14",title:"\u0428\u0440\u0430\u0433\u0438 \u0441 \u0433\u0430\u043d\u0442\u0435\u043b\u044f\u043c\u0438",muscle:"TRAPS"}],L={id:Object(I.a)(),title:"",muscle:"BICEPS"},B={open:!1,type:null,title:null},P={id:Object(I.a)(),title:"",description:"",exercises:[]},W=[{id:"1",title:"\u0421\u043f\u0438\u043d\u0430-\u0442\u0440\u0438\u0446\u0435\u043f\u0441",description:"",exercises:["1","2"]},{id:"2",title:"\u0413\u0440\u0443\u0434\u044c-\u0431\u0438\u0446\u0435\u043f\u0441",description:"",exercises:[]},{id:"3",title:"\u041d\u043e\u0433\u0438-\u043f\u043b\u0435\u0447\u0438",description:"",exercises:[]},{id:"4",title:"\u0422\u044f\u043d\u0438 (\u0441\u043f\u0438\u043d\u0430-\u0431\u0438\u0446\u0435\u043f\u0441)",description:"",exercises:[]},{id:"5",title:"\u0422\u044f\u043d\u0438 (\u043d\u043e\u0433\u0438-\u043f\u043b\u0435\u0447\u0438)",description:"",exercises:[]},{id:"6",title:"\u0422\u043e\u043b\u043a\u0430\u0439 (\u0433\u0440\u0443\u0434\u044c-\u0442\u0440\u0438\u0446\u0435\u043f\u0441)",description:"",exercises:[]},{id:"7",title:"\u0422\u043e\u043b\u043a\u0430\u0439 (\u043d\u043e\u0433\u0438-\u043f\u043b\u0435\u0447\u0438)",description:"",exercises:[]}],U=n(195),N=n(209),M=n(228),H=n(210),F=n(201),_=n(215),G={PaperProps:{style:{maxHeight:224,width:250}}},K=function(e){return l.a.createElement(o.a,null,l.a.createElement(N.a,{onChange:function(t){e.onChange(t,"title")},fullWidth:!0,id:"exercise-title",label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",variant:"standard",value:e.exercise.title,sx:{pt:1,pb:1}}),l.a.createElement(M.a,{variant:"standard",sx:{m:1,ml:0,mr:0,pt:1,pb:1},fullWidth:!0},l.a.createElement(H.a,{id:"demo-multiple-name-label"},"\u041c\u044b\u0448\u0435\u0447\u043d\u044b\u0435 \u0433\u0440\u0443\u043f\u043f\u044b"),l.a.createElement(F.a,{onChange:function(t){e.onChange(t,"muscle")},labelId:"demo-multiple-name-label",id:"demo-multiple-name",value:e.exercise.muscle,MenuProps:G},D.map(function(e){return l.a.createElement(_.a,{key:e,value:e},e)}))))},J=function(e){return l.a.createElement("div",null,l.a.createElement(U.a,{sx:{display:"flex",flexWrap:"wrap",flexDirection:"column"}},l.a.createElement(K,{exercise:e.exercise,onChange:e.onChange}),l.a.createElement(S,{text:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",onClick:e.onSave})))},Q=function(e){return l.a.createElement("div",null,l.a.createElement(U.a,{sx:{display:"flex",flexWrap:"wrap",flexDirection:"column"}},l.a.createElement(K,{exercise:e.exercise,onChange:e.onChange}),l.a.createElement(h.a,{onClick:e.onRemove,fullWidth:!0,color:"error",sx:{justifyContent:"flex-start",mt:1,pl:0},disableRipple:!0},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u0435"),l.a.createElement(S,{text:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onClick:e.onSave})))},z=n(206),V=n(230),Y=n(231),Z=n(204),$=n(124),q=n.n($),X=n(123),ee=n.n(X),te=n(196),ne=Object(te.a)(function(e){return l.a.createElement(z.a,Object.assign({elevation:0},e))})(function(e){e.theme;return{"&:not(:last-child)":{borderBottom:0}}}),ae=Object(te.a)(function(e){return l.a.createElement(V.a,Object.assign({expandIcon:l.a.createElement(ee.a,{sx:{fontSize:"0.9rem"}})},e))})(function(e){var t=e.theme;return{padding:t.spacing(1),backgroundColor:t.palette.primary.light,flexDirection:"row-reverse","& .MuiAccordionSummary-expandIconWrapper.Mui-expanded":{transform:"rotate(90deg)"},"& .MuiAccordionSummary-content":{marginLeft:t.spacing(1)}}}),le=Object(te.a)(Y.a)(function(e){return{padding:e.theme.spacing(2),borderTop:"1px solid rgba(0, 0, 0, .125)"}}),ie=function(e){var t=Object(a.useState)(null),n=Object(c.a)(t,2),i=n[0],r=n[1],o=function(e){return function(e){return g(e).length}(e)};return l.a.createElement("div",null,D.map(function(t,n){return l.a.createElement(ne,{key:n,expanded:i==t,onChange:(a=t,function(e,t){r(!!t&&a)})},l.a.createElement(ae,{expandIcon:l.a.createElement(q.a,null),"aria-controls":"panel1bh-content",id:"panel1bh-header"},l.a.createElement(U.a,{sx:{display:"flex",justifyContent:"space-between",width:"100%",alignItems:"center",pr:2}},R[t].locale,l.a.createElement(Z.a,{showZero:!0,badgeContent:o(t),color:"secondary"}))),l.a.createElement(le,null,g(t).map(function(t,n){return l.a.createElement(U.a,{key:n},l.a.createElement(h.a,{color:"secondary",onClick:function(n){return function(t,n){t.stopPropagation(),e.onClick(t,"INFO",n)}(n,t)},fullWidth:!0,sx:{justifyContent:"flex-start",textAlign:"left"},disableRipple:!0},t.title))})));var a}))},re={open:!1,type:null,title:null},ce=function(e){var t=Object(a.useState)(re),n=Object(c.a)(t,2),i=n[0],r=n[1],s=Object(a.useState)(null),u=Object(c.a)(s,2),m=u[0],d=u[1],g=function(e,t){var n=m;n[t]=e.target.value,d(Object(f.a)({},n))},x=function(){r(re),d(null)},h=function(e,t,n){i.open?x():(r({open:!0,type:t,title:"ADD"==t?"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u044f":null}),d(Object(f.a)({},n)))};return l.a.createElement(o.a,{sx:{height:"100%",overflow:"scroll"}},l.a.createElement(ie,{onClick:h}),l.a.createElement(A,{open:i.open,onClose:function(e){return h(0,null,null)},title:i.title},"INFO"==i.type&&l.a.createElement(Q,{onChange:g,exercise:m,onRemove:function(){!function(e){var t=p().filter(function(t){return t.id!=e});E(t)}(m.id),x()},onSave:function(e){!function(e){var t=p().map(function(t){return t.id==e.id?e:t});E(t)}(m),x()}}),"ADD"==i.type&&l.a.createElement(J,{onChange:g,exercise:m,onSave:function(e){!function(e){var t=p();t.push(e),E(t)}(m),x()}})),l.a.createElement(S,{text:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u0435",onClick:function(e){return h(0,"ADD",L)}}))},oe=n(197),se=n(232),ue=n(233),me=n(234),de=n(235),fe=n(236),pe=n(222),Ee=n(126),ge=n.n(Ee),xe=n(125),he=n.n(xe),Se=function(e){return l.a.createElement(o.a,{sx:{display:"flex",alignItems:"center",justifyContent:"center"}},e.icon,l.a.createElement(pe.a,{variant:"caption",gutterBottom:!0,sx:{mr:1,mb:0,lineHeight:0}},e.text))},be=function(e){return l.a.createElement(se.a,{sx:{display:"flex"}},l.a.createElement(ue.a,null,l.a.createElement(me.a,{title:e.title}),l.a.createElement(de.a,{sx:{height:140},image:"https://www.hussle.com/blog/wp-content/uploads/2020/12/Gym-structure-1080x675.png"}),l.a.createElement(fe.a,{sx:{justifyContent:"flex-end",p:2}},l.a.createElement(U.a,{sx:{display:"flex",flexDirection:"column",flex:"1 0 auto"}}),l.a.createElement(U.a,{sx:{display:"flex",alignItems:"center",pl:1}},l.a.createElement(Se,{icon:l.a.createElement(he.a,null),text:e.date}),l.a.createElement(Se,{icon:l.a.createElement(ge.a,null),text:"".concat(e.duration," \u043c\u0438\u043d\u0443\u0442")})))))},Ce=function(e){var t=Object(a.useState)([{title:"\u0422\u043e\u043b\u043a\u0430\u0439",date:"2022-10-10",status:"ACTIVE",duration:"120"}]),n=Object(c.a)(t,2),i=n[0];n[1];return l.a.createElement("div",null,i.map(function(e,t){return l.a.createElement(be,{key:t,title:e.title,date:e.date,duration:e.duration})}),l.a.createElement(oe.a,{light:!0,sx:{mt:2}}),l.a.createElement(S,{text:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0443"}))},ve=n(237),ye=n(238),Oe=n(55),je=n.n(Oe),ke=n(127),we=n.n(ke),Ae=n(117),Ie=n.n(Ae),Re=function(e){return l.a.createElement(x.a,{sx:{position:"fixed",bottom:0,left:0,right:0},elevation:3},l.a.createElement(ve.a,{value:e.activeScene,onChange:e.handleChange,showLabels:!0},l.a.createElement(ye.a,{value:"program",label:"\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b",icon:l.a.createElement(Ie.a,null)}),l.a.createElement(ye.a,{value:"traning",label:"\u0422\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0438",icon:l.a.createElement(je.a,null)}),l.a.createElement(ye.a,{value:"exercise",label:"\u0423\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u044f",icon:l.a.createElement(we.a,null)})))},De=function(){var e=localStorage.getItem("traning_programs");return null!=e?JSON.parse(e):[]},Te=function(e){console.log("Update traning program in local storage..."),localStorage.setItem("traning_programs",JSON.stringify(e))},Le=n(22),Be=n(229),Pe=n(207),We=n(239),Ue=n(216),Ne=n(198),Me=n(119),He=n.n(Me),Fe=n(6),_e=n(118),Ge=n.n(_e),Ke=Object(Fe.a)(function(e){return l.a.createElement(V.a,e)})(function(e){var t=e.theme;return{padding:t.spacing(1),backgroundColor:t.palette.primary.light,flexDirection:"row-reverse","& .MuiAccordionSummary-expandIconWrapper.Mui-expanded":{transform:"rotate(90deg)"},"& .MuiAccordionSummary-content":{marginLeft:t.spacing(1)}}}),Je=function(e){return l.a.createElement("div",null,l.a.createElement(o.a,{sx:{pb:14}},D.map(function(t,n){return l.a.createElement(z.a,{key:n,expanded:!0},l.a.createElement(Ke,{"aria-controls":"panel1bh-content",id:"panel1bh-header"},l.a.createElement(o.a,{sx:{display:"flex",justifyContent:"space-between",width:"100%",alignItems:"center",p:1}},R[t].locale)),l.a.createElement(Y.a,null,g(t).map(function(t,n){return l.a.createElement(o.a,{key:n},l.a.createElement(h.a,{endIcon:e.isSelected(t.id)?l.a.createElement(Ge.a,null):l.a.createElement("div",null),color:"secondary",onClick:function(n){return e.handleCheckItem(t.id)},fullWidth:!0,sx:{justifyContent:"space-between",textAlign:"left"},disableRipple:!0},t.title))})))})),l.a.createElement(S,{text:"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c",onClick:e.onSave}))},Qe=function(e){var t=Object(a.useState)([]),n=Object(c.a)(t,2),i=n[0],r=n[1],s=Object(a.useState)(!1),u=Object(c.a)(s,2),m=u[0],d=u[1];Object(a.useEffect)(function(){r(Object(Le.a)(e.item.exercises))},[]);var f=function(e){return i.includes(e)},E=function(){d(!m)};return l.a.createElement(o.a,null,l.a.createElement(N.a,{onChange:function(t){e.onChange(t,"title")},fullWidth:!0,id:"exercise-title",label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",variant:"standard",value:e.item.title,sx:{pt:1,pb:1}}),0==e.item.exercises.length&&l.a.createElement(o.a,{sx:{display:"flex",justifyContent:"center",alignItems:"center",p:2}},l.a.createElement(pe.a,{variant:"caption"},"\u0423\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u044f \u043d\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u044b")),e.item.exercises.length>0&&l.a.createElement(Be.a,null,e.item.exercises.map(function(e,t){var n,a=(n=e,p().find(function(e){return e.id==n}));return l.a.createElement(Pe.a,{key:t,sx:{pl:0,pr:0}},l.a.createElement(We.a,null,l.a.createElement(Ue.a,null,l.a.createElement(je.a,null))),l.a.createElement(Ne.a,{primary:a.title,secondary:a.muscle}))})),l.a.createElement(A,{open:m,onClose:function(){r(e.item.exercises),E()},title:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u0439"},l.a.createElement(Je,{handleCheckItem:function(e){f(e)?r(i.filter(function(t){return t!=e})):r([].concat(Object(Le.a)(i),[e]))},selectedExercises:e.item.exercises,isSelected:f,selected:i,onSave:function(){e.setExercises(i),E()}})),l.a.createElement(h.a,{fullWidth:!0},l.a.createElement(He.a,{color:"action",onClick:E})))},ze=function(e){return l.a.createElement("div",null,l.a.createElement(U.a,{sx:{display:"flex",flexWrap:"wrap",flexDirection:"column",pb:16}},l.a.createElement(Qe,{item:e.item,onChange:e.onChange,setExercises:e.setExercises,onSave:e.setExercises}),l.a.createElement(S,{text:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onClick:e.onSave})))},Ve=function(e){return l.a.createElement("div",null,l.a.createElement(U.a,{sx:{display:"flex",flexWrap:"wrap",flexDirection:"column",pb:16}},l.a.createElement(Qe,{item:e.item,onChange:e.onChange,setExercises:e.setExercises,onSave:e.setExercises}),l.a.createElement(h.a,{onClick:e.onRemove,fullWidth:!0,color:"error",sx:{justifyContent:"flex-start",mt:1,pl:0},disableRipple:!0},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0443"),l.a.createElement(S,{text:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onClick:e.onSave})))},Ye=n(217),Ze=n(240),$e=n(17),qe=Object(Fe.a)(function(e){return l.a.createElement(se.a,Object.assign({sx:{display:"flex",minHeight:"180px"}},e))})(function(e){return{backgroundColor:e.theme.palette.primary.light}}),Xe=function(e){Object($e.e)();return l.a.createElement(qe,{onClick:function(t){return e.onClick(t,"INFO",e.item)},sx:{}},l.a.createElement(ue.a,null,l.a.createElement(me.a,{title:e.item.title}),l.a.createElement(Ze.a,null,l.a.createElement(pe.a,{variant:"caption"},"\u041a\u043e\u043b-\u0432\u043e \u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u0439: ",e.item.exercises.length||0))))},et=function(e){return l.a.createElement(Ye.a,{container:!0,spacing:2},De().map(function(t,n){return l.a.createElement(Ye.a,{key:n,item:!0,xs:12},l.a.createElement(Xe,{item:t,onClick:e.onClick}))}))},tt=function(e){var t=Object(a.useState)(B),n=Object(c.a)(t,2),i=n[0],r=n[1],s=Object(a.useState)(null),u=Object(c.a)(s,2),m=u[0],d=u[1],p=function(e,t){var n=m;n[t]=e.target.value,d(Object(f.a)({},n))},E=function(){r(B),d(null)},g=function(e,t,n){i.open?E():(r({open:!0,type:t,title:"ADD"==t?"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b":null}),d(Object(f.a)({},n)))},x=function(e){d(Object(f.a)({},m,{exercises:e}))};return l.a.createElement(o.a,{sx:{height:"100%",overflow:"scroll"}},l.a.createElement(et,{onClick:g}),l.a.createElement(A,{open:i.open,onClose:function(e){return g(0,null,null)},title:i.title},"INFO"==i.type&&l.a.createElement(Ve,{onChange:p,item:m,onRemove:function(){!function(e){var t=De().filter(function(t){return t.id!=e});Te(t)}(m.id),E()},onSave:function(e){!function(e){var t=De().map(function(t){return t.id==e.id?e:t});Te(t)}(m),E()},setExercises:x}),"ADD"==i.type&&l.a.createElement(ze,{onChange:p,item:m,onSave:function(e){!function(e){var t=De();t.push(e),Te(t)}(m),E()},setExercises:x})),l.a.createElement(S,{text:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0443",onClick:function(e){return g(0,"ADD",P)}}))},nt=Object(s.a)({palette:{primary:{main:"#EAE1DF",light:"#f7f3f3",dark:"#be9d9d",contrastText:"#322E18"},secondary:{main:"#545E56",light:"#EAECEA",dark:"#A9B1A9"},background:{default:"#f7f3f3"}},shape:{borderRadius:"8px"},typography:{fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")}}),at=function(){null==localStorage.getItem("exercises")&&localStorage.setItem("exercises",JSON.stringify(T)),null==localStorage.getItem("traning_programs")&&localStorage.setItem("traning_programs",JSON.stringify(W))};var lt=function(){at();var e=Object(a.useState)("program"),t=Object(c.a)(e,2),n=t[0],i=t[1];return Object(u.a)(),l.a.createElement(o.a,{sx:{display:"flex",height:"100%",justifyContent:"center",pb:7,pt:0}},l.a.createElement(d.a,null),l.a.createElement(m.a,{theme:nt},l.a.createElement(o.a,{component:"main",sx:{p:1,width:"100%",height:"100%",overflowY:"scroll",pb:10}},"exercise"==n&&l.a.createElement(ce,null),"traning"==n&&l.a.createElement(Ce,null),"program"==n&&l.a.createElement(tt,null),l.a.createElement(Re,{activeScene:n,handleChange:function(e,t){i(t)}}))))},it=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,200)).then(function(t){var n=t.getCLS,a=t.getFID,l=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),l(e),i(e),r(e)})},rt=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ct(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(lt,null))),it(),function(e){if("serviceWorker"in navigator){if(new URL("/gym_tracker",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/gym_tracker","/service-worker.js");rt?(function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ct(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")})):ct(t,e)})}}()},84:function(e,t,n){e.exports=n(143)},92:function(e,t,n){},94:function(e,t,n){}},[[84,3,2]]]);
//# sourceMappingURL=main.11b751fd.chunk.js.map