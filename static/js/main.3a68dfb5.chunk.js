(this.webpackJsonpcovidtracker=this.webpackJsonpcovidtracker||[]).push([[0],{120:function(e,t,a){e.exports=a(240)},240:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(31),c=a.n(l),o=a(22),i=a(23),s=a(25),u=a(24),d=a(262),m=a(264),f=a(265),p=a(266),h=a(267),y=a(96),v=a.n(y),E=a(99),g=a.n(E),b=a(98),x=a.n(b),D=a(97),C=a.n(D),w=Object(d.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function k(){var e=w();return r.a.createElement("div",{className:e.root,color:"secondary"},r.a.createElement(m.a,{position:"static",style:{background:"#2E3B55"}},r.a.createElement(f.a,null,r.a.createElement(p.a,{variant:"h6",className:e.title},"COVID TRACKER"),r.a.createElement(h.a,{variant:"contained",startIcon:r.a.createElement(v.a,null),href:"#/"},"Home"),r.a.createElement(h.a,{variant:"contained",startIcon:r.a.createElement(C.a,null),href:"#/country"},"Country-wise stats"),r.a.createElement(h.a,{variant:"contained",startIcon:r.a.createElement(x.a,null),color:"default",href:"#/india"},"India"),r.a.createElement(h.a,{variant:"contained",startIcon:r.a.createElement(g.a,null),color:"default",href:"#/about"},"About"))))}var j=a(111),O=a(26),A=a(268),S=a(269),B=a(101),I=a.n(B),R=a(100),L=a.n(R),P=a(270);function T(){return r.a.createElement("div",{style:{height:"92vh"}},r.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",marginTop:"30vh",paddingBottom:"30vh"}},r.a.createElement(A.a,null,r.a.createElement(S.a,null,r.a.createElement(p.a,null,"Developed By Shivam Kirti"),r.a.createElement(p.a,null,"Sophomore @ BIT Mesra"),r.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"row"}},r.a.createElement(P.a,{"aria-label":"delete",href:"https://www.linkedin.com/in/shivam-kirti-47159618b"},r.a.createElement(L.a,null)),r.a.createElement(P.a,{"aria-label":"delete",href:"https://github.com/Shivam0504"},r.a.createElement(I.a,null)))))))}var z=a(7),N=a.n(z),V=a(14),W=a(271),M=a(42),F=a.n(M),G=a(104),H=a.n(G),J=a(106),K=a.n(J),U=a(102),q=a.n(U),Q=a(108),X=a.n(Q),Y=a(107),Z=a.n(Y),$=a(105),_=a.n($),ee=a(103),te=a.n(ee),ae=a(109),ne=a.n(ae),re=q.a[400],le=function(e){var t=e.data,a=t.cases,n=t.recovered,l=t.deaths,c=t.updated;return"none"===e.country?r.a.createElement("div",{style:{paddingBottom:"30%"}},r.a.createElement("h5",null,"Use the drop down menu to select a country")):a?r.a.createElement("div",{style:{margin:"2%",width:"80%"}},r.a.createElement(W.a,{container:!0,spacing:1,justify:"center"},r.a.createElement(W.a,{item:!0,component:A.a,xs:8,sm:3,style:{background:re}},r.a.createElement(S.a,null,r.a.createElement(te.a,null),r.a.createElement(p.a,{gutterBottom:!0},"TOTAL"),r.a.createElement(p.a,{variant:"h5"},r.a.createElement(F.a,{start:0,end:a,duration:1.5,separator:","})),r.a.createElement(p.a,{color:"textPrimary",gutterBottom:!0},new Date(c).toDateString()))),r.a.createElement(W.a,{item:!0,component:A.a,xs:8,sm:3,style:{background:H.a[800]}},r.a.createElement(S.a,null,r.a.createElement(_.a,null),r.a.createElement(p.a,{color:"textPrimary",gutterBottom:!0},"ACTIVE"),r.a.createElement(p.a,{variant:"h5"},r.a.createElement(F.a,{start:0,end:a-n-l,duration:1.5,separator:","})),r.a.createElement(p.a,{color:"textPrimary",gutterBottom:!0},new Date(c).toDateString()))),r.a.createElement(W.a,{item:!0,component:A.a,xs:8,sm:3,style:{background:K.a[400]}},r.a.createElement(S.a,null,r.a.createElement(Z.a,null),r.a.createElement(p.a,{color:"textPrimary",gutterBottom:!0},"RECOVERED"),r.a.createElement(p.a,{variant:"h5"},r.a.createElement(F.a,{start:0,end:n,duration:1.5,separator:","})),r.a.createElement(p.a,{color:"textPrimary",gutterBottom:!0},new Date(c).toDateString()))),r.a.createElement(W.a,{item:!0,component:A.a,xs:8,sm:3,style:{background:X.a[500]}},r.a.createElement(S.a,{justify:"center"},r.a.createElement(ne.a,null),r.a.createElement(p.a,{color:"textPrimary",gutterBottom:!0},"DEATHS"),r.a.createElement(p.a,{variant:"h5"},r.a.createElement(F.a,{start:0,end:l,duration:1.5,separator:","})),r.a.createElement(p.a,{color:"textPrimary",gutterBottom:!0},new Date(c).toDateString()))))):r.a.createElement("div",{style:{paddingBottom:"30%"}},r.a.createElement("h5",null,"Data Not Available Please select another country"))},ce=a(30),oe=function(e){for(var t=e.countryDailyData,a=e.data,l=a.cases,c=a.recovered,o=a.deaths,i=e.country,s=[0],u=[0],d=[0],m=1;m<t.length;m+=1)s[m]=t[m].confirmed-t[m-1].confirmed<0?0:t[m].confirmed-t[m-1].confirmed,u[m]=t[m].recovered-t[m-1].recovered<0?0:t[m].recovered-t[m-1].recovered,d[m]=t[m].deaths-t[m-1].deaths<0?0:t[m].deaths-t[m-1].deaths;var f=t.length?r.a.createElement("div",{style:{backgroundColor:"#ffe0b2"}},r.a.createElement(ce.a,{data:{labels:t.map((function(e){var t=e.date;return new Date(t).toDateString()})),datasets:[{label:"Infected",backgroundColor:"#ffb300",borderColor:"#ff6f00",borderWidth:2,data:s}]},options:{title:{display:!0,text:"Daily Cases",fontSize:20},legend:{display:!0,position:"right"},scales:{xAxes:[{gridLines:{color:"rgba(0, 0, 0, 0)"}}],yAxes:[{gridLines:{color:"rgba(0, 0, 0, 0)"}}]},maintainAspectRatio:!0}})):null,p=t.length?r.a.createElement("div",{style:{backgroundColor:"#b2ff59"}},r.a.createElement(ce.a,{data:{labels:t.map((function(e){var t=e.date;return new Date(t).toDateString()})),datasets:[{label:"Recovered",backgroundColor:"#8bc34a",borderColor:"#689f38",borderWidth:2,data:u}]},options:{title:{display:!0,text:"Daily Recovered",fontSize:20},scales:{xAxes:[{gridLines:{color:"rgba(0, 0, 0, 0)"}}],yAxes:[{gridLines:{color:"rgba(0, 0, 0, 0)"}}]},legend:{display:!0,position:"right"},maintainAspectRatio:!0}})):null,h=t.length?r.a.createElement("div",{style:{backgroundColor:"#e0e0e0"}},r.a.createElement(ce.a,{data:{labels:t.map((function(e){var t=e.date;return new Date(t).toDateString()})),datasets:[{label:"Deaths",backgroundColor:"#78909c",borderColor:"#455a64",borderWidth:2,data:d}]},options:{title:{display:!0,text:"Daily deaths",fontSize:20},legend:{display:!0,position:"right"},maintainAspectRatio:!0,scales:{xAxes:[{gridLines:{color:"rgba(0, 0, 0, 0)"}}],yAxes:[{gridLines:{color:"rgba(0, 0, 0, 0)"}}]}}})):null,y=t.length?r.a.createElement("div",{style:{backgroundColor:"#fff59d"}},r.a.createElement(ce.b,{data:{labels:["Active","Recovered","Deaths"],datasets:[{label:"Cases",backgroundColor:["#ffa000","#c6ff00","#e0e0e0"],hoverBackgroundColor:["#e65100","#64dd17","#212121"],data:[l-c-o,c,o]}]},options:{title:{display:!0,text:"Pie chart",fontSize:20},legend:{display:!0,position:"right"},responsive:!0,maintainAspectRatio:!0}})):null,v=t.length?r.a.createElement("div",{style:{backgroundColor:"#fff59d"}},r.a.createElement(ce.c,{data:{labels:t.map((function(e){var t=e.date;return new Date(t).toDateString()})),datasets:[{data:t.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#ff1744",fill:!1},{data:t.map((function(e){return e.deaths})),label:"Deaths",borderColor:"black ",fill:!1}]},options:{title:{display:!0,text:"Live chart",fontSize:20},scales:{xAxes:[{gridLines:{color:"rgba(0, 0, 0, 0)"}}],yAxes:[{gridLines:{color:"rgba(0, 0, 0, 0)"}}]},maintainAspectRatio:!0}})):null,E=t.length?r.a.createElement("div",{style:{backgroundColor:"#fff59d"}},r.a.createElement(ce.c,{data:{labels:t.map((function(e){var t=e.date;return new Date(t).toDateString()})),datasets:[{data:t.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#ff1744",fill:!1},{data:t.map((function(e){return e.deaths})),label:"Deaths",borderColor:"black ",fill:!1},{data:t.map((function(e){return e.recovered})),label:"Recovered",borderColor:"green",fill:!1}]},options:{title:{display:!0,text:"Live chart",fontSize:20},scales:{xAxes:[{gridLines:{color:"rgba(0, 0, 0, 0)"}}],yAxes:[{gridLines:{color:"rgba(0, 0, 0, 0)"}}]},maintainAspectRatio:!0}})):null;return t.length?r.a.createElement(n.Fragment,null,r.a.createElement("div",{style:{justifyContent:"center",width:"65%",marginBottom:"2%"}},r.a.createElement(A.a,null,r.a.createElement(S.a,null,"global"===i?v:E))),r.a.createElement("div",{style:{justifyContent:"center",width:"65%",marginBottom:"2%"}},r.a.createElement(A.a,null,r.a.createElement(S.a,null,f))),r.a.createElement("div",{style:{justifyContent:"center",width:"65%",marginBottom:"2%"}},"global"!==i?r.a.createElement(A.a,null,r.a.createElement(S.a,null,p)):r.a.createElement("div",null)),r.a.createElement("div",{style:{justifyContent:"center",width:"65%",marginBottom:"2%"}},r.a.createElement(A.a,null,r.a.createElement(S.a,null,h))),r.a.createElement("div",{style:{justifyContent:"center",width:"65%",marginBottom:"2%"}},r.a.createElement(A.a,null,r.a.createElement(S.a,null,y)))):r.a.createElement("div",{style:{height:"82vh"}})},ie=a(113),se=a(273),ue=a(272),de=a(36),me=a.n(de),fe="https://covid19.mathdro.id/api",pe=function(){var e=Object(V.a)(N.a.mark((function e(t){var a,n,r,l,c,o,i,s,u,d;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=fe,t&&(a="https://api.covid19api.com/summary"),e.prev=2,t){e.next=13;break}return e.next=6,me.a.get(fe);case 6:return n=e.sent,r=n.data,l=r.confirmed,c=r.recovered,o=r.deaths,i=r.lastUpdate,e.abrupt("return",{cases:l.value,recovered:c.value,deaths:o.value,updated:i});case 13:return e.next=15,me.a.get(a);case 15:if(s=e.sent,u=s.data.Countries,d=u.filter((function(e){return e.Country===t})),console.log(d),d.length){e.next=21;break}return e.abrupt("return",{cases:0,recovered:0,deaths:0,updated:0});case 21:return e.abrupt("return",{cases:d[0].TotalConfirmed,recovered:d[0].TotalRecovered,deaths:d[0].TotalDeaths,updated:d[0].Date});case 24:e.prev=24,e.t0=e.catch(2),console.log(e.t0);case 27:case"end":return e.stop()}}),e,null,[[2,24]])})));return function(t){return e.apply(this,arguments)}}(),he=function(){var e=Object(V.a)(N.a.mark((function e(t){var a,n,r,l,c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t){e.next=8;break}return e.next=4,me.a.get("https://api.covid19api.com/total/dayone/country/".concat(t));case 4:return a=e.sent,n=a.data.map((function(e){return{confirmed:e.Confirmed,recovered:e.Recovered,deaths:e.Deaths,date:e.Date}})),console.log(n),e.abrupt("return",n);case 8:return e.next=10,me.a.get("".concat(fe,"/daily"));case 10:return r=e.sent,l=r.data,c=l.map((function(e){return{confirmed:e.confirmed.total,recovered:e.recovered.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",c);case 16:e.prev=16,e.t0=e.catch(0),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}(),ye=function(){var e=Object(V.a)(N.a.mark((function e(){var t,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://api.covid19api.com/countries",e.next=4,me.a.get("https://api.covid19api.com/countries");case 4:return t=e.sent,(a=t.data.map((function(e){return e.Country}))).sort(),e.abrupt("return",a);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),ve=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),l=Object(ie.a)(a,2),c=l[0],o=l[1];return Object(n.useEffect)((function(){(function(){var e=Object(V.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,ye();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[o]),r.a.createElement(se.a,{style:{padding:"2.5%"}},r.a.createElement(ue.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:"",disabled:!0},"None"),c.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},Ee=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:"none",countryDailyData:[]},e.handleCountryChange=function(){var t=Object(V.a)(N.a.mark((function t(a){var n,r;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,pe(a);case 2:return n=t.sent,t.next=5,he(a);case 5:r=t.sent,console.log(n),e.setState({data:n,country:a,countryDailyData:r});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}},r.a.createElement("h2",null,"Please Select a Country"),r.a.createElement(ve,{handleCountryChange:this.handleCountryChange}),r.a.createElement(le,{data:this.state.data,country:this.state.country}),r.a.createElement(oe,{countryDailyData:this.state.countryDailyData,data:this.state.data})))}}]),a}(r.a.Component),ge=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={data:{},countryDailyData:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(V.a)(N.a.mark((function e(){var t,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,pe();case 2:return t=e.sent,e.next=5,he();case 5:a=e.sent,this.setState({data:t,countryDailyData:a});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}},r.a.createElement("h1",null,"Worldwide Stats"),r.a.createElement(le,{data:this.state.data}),r.a.createElement(oe,{countryDailyData:this.state.countryDailyData,data:this.state.data,country:"global"})))}}]),a}(r.a.Component),be=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={data:{},countryDailyData:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(V.a)(N.a.mark((function e(){var t,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,pe("India");case 2:return t=e.sent,e.next=5,he("India");case 5:a=e.sent,this.setState({data:t,countryDailyData:a});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}},r.a.createElement("h1",null,"India"),r.a.createElement(le,{data:this.state.data,country:"India"}),r.a.createElement(oe,{countryDailyData:this.state.countryDailyData,data:this.state.data})))}}]),a}(r.a.Component),xe=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(j.a,null,r.a.createElement("div",{style:{backgroundColor:"#f5f5f5",display:"flex",flexDirection:"column"}},r.a.createElement(k,null),r.a.createElement(O.c,null,r.a.createElement(O.a,{exact:!0,path:"/"},r.a.createElement(ge,null)),r.a.createElement(O.a,{exact:!0,path:"/about"},r.a.createElement(T,null)),r.a.createElement(O.a,{exact:!0,path:"/country"},r.a.createElement(Ee,null)),r.a.createElement(O.a,{exact:!0,path:"/india"},r.a.createElement(be,null)))))}}]),a}(r.a.Component);c.a.render(r.a.createElement(xe,null),document.getElementById("root"))}},[[120,1,2]]]);
//# sourceMappingURL=main.3a68dfb5.chunk.js.map