(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{132:function(e,t,a){},219:function(e,t,a){e.exports=a(331)},228:function(e,t,a){},331:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),i=a.n(c),o=a(38),l=(a(228),a(180)),s=a(181),u=a(100),m=a(202),d=a(200),h=a(381),p=function(e){return+(5*(+e-32)/9).toFixed(2)},f=function(e){for(var t=Object.keys(e),a=Math.round(t.length/3),n={},r=0;r<a;){var c=t[3]?3:t.length;n[r]=t.splice(0,c),r++}return n};var E=function(e){return fetch(function(e){return e?"https://api.openweathermap.org/data/2.5/forecast?q=".concat(e,"&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40"):"https://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40"}(e)).then((function(e){return e.json()})).then((function(e){return function(e){var t=new Date,a={city:e.city.name,country:e.city.country},n={};return e.list.forEach((function(e){var r=new Date(e.dt_txt),c=r.toLocaleDateString(),i=+(1.8*(+e.main.temp-273.15)+32).toFixed(2);c!==t.toLocaleDateString()||a.weather||(a.date=t.toGMTString().substring(0,16),a.temp=i,a.weather=e.weather[0].description,a.icon=e.weather[0].icon),n[c]?(n[c].barChart.push({temp:+(+i).toFixed(2),time:r.toLocaleTimeString().substring(0,5)}),n[c].sum=+n[c].sum+ +i,n[c].count+=1):n[c]={date:r.toString().substring(0,15),temp:i,weather:e.weather[0].description,icon:e.weather[0].icon,sum:i,count:1,barChart:[{temp:+(+i).toFixed(2),time:r.toLocaleTimeString().substring(0,5)}]}})),{pageDetails:f(n),details:n,overAllDetails:a}}(e)})).catch((function(e){return e}))},g=function(e){return function(t){E(e).then((function(e){return t({type:"FETCH_WEATHER_SUCCESS",payload:e})})).catch((function(){return t({type:"FETCH_WEATHER_FAILURE"})}))}},b=a(384),v=a(372),w=a(387),x=a(371);var y=function(e){var t=e.fetchWeatherData;return r.a.createElement(b.a,null,r.a.createElement(w.a,{severity:"error"},r.a.createElement(x.a,null,"Error"),"Opps..!! something went wrong. Please try again later.",r.a.createElement(v.a,{variable:"contained",color:"secondary",onClick:t},"Try again")))},C=a(373),D=a(334),j=a(374);var O=function(){var e=Object(C.a)((function(){return{backdrop:{backgroundColor:"#8e898938",color:"#fff"}}}))();return r.a.createElement(D.a,{className:e.backdrop,open:!0},r.a.createElement(j.a,{color:"primary"}))},T=a(76),N=a(378),F=a(204),k=a(375),S=a(376),P=a(377),W=a(386),R=a(393),_=a(395),A=a(199);var H=function(e){var t=e.chartDetails,a=e.handleDetailsDialog,n=e.isCelcius,c=r.a.forwardRef((function(e,t){return r.a.createElement(k.a,Object.assign({direction:"up",ref:t},e))}));return r.a.createElement(S.a,{open:!0,TransitionComponent:c,onClose:function(){return a(!1)}},r.a.createElement(P.a,null,r.a.createElement(W.a,{height:400,width:500,domainPadding:{x:50,y:[0,20]}},r.a.createElement(R.a,{dependentAxis:!0,offsetX:50,style:{axisLabel:{padding:35}},label:n?"Temperature in Celcius":"Temperature in Fahrenheit"}),r.a.createElement(R.a,{label:"Time"}),r.a.createElement(_.a,{barWidth:30,dataComponent:r.a.createElement(A.a,null),style:{data:{fill:"#3f51b5"}},data:t,x:"time",y:"temp",labels:function(e){var t=e.datum;return n?p(t.temp):t.temp}}))))};a(132);var I=function(e){var t=e.detail,a=e.isCelcius,c=Object(n.useState)(!1),i=Object(T.a)(c,2),o=i[0],l=i[1],s=Object(C.a)((function(){return{paper:{width:"15em",height:"18em",padding:"30px",backgroundColor:"#e0e0e0",boxShadow:"0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)"}}})),u=function(e){l(e)},m=s();return r.a.createElement(r.a.Fragment,null,t&&r.a.createElement(F.a,{className:m.paper,onClick:function(){return u(!0)}},r.a.createElement("div",{className:"main-div"},r.a.createElement("div",null,r.a.createElement("img",{width:"100px",alt:"icon",src:"http://openweathermap.org/img/w/".concat(t.icon,".png")})),r.a.createElement("div",{className:"primary-text"},t.weather),r.a.createElement("div",{className:"temp-text"},a?p((t.sum/t.count).toFixed(2))+"\xb0C":(t.sum/t.count).toFixed(2)+"\xb0F"),r.a.createElement("div",{className:"secondary-text"},t.date))),o&&r.a.createElement(H,{chartDetails:t.barChart,handleDetailsDialog:u,isCelcius:a}))};var L=Object(o.b)((function(e){return{overAllDetails:e.weatherReducer.data.overAllDetails}}),null)((function(e){var t=Object(C.a)((function(){return{box:{display:"flex",justifyContent:"center",padding:"30px"}}}))(),a=e.overAllDetails,n=e.isCelcius;return r.a.createElement(r.a.Fragment,null,a&&r.a.createElement(b.a,{className:t.box},r.a.createElement("div",{className:"main-div"},r.a.createElement("div",{className:"primary-text"},a.city,",",a.country),r.a.createElement("div",{className:"temp-text"},n?p(a.temp)+"\xb0C":a.temp+"\xb0F"),r.a.createElement("div",{className:"secondary-text"},a.date))))})),B=a(382),M=a(390);var G=function(e){var t=e.isCelcius,a=e.handleSwitchButton,n=e.searchCity,c=e.handleTextOnChange,i=e.handleKeyPress;return r.a.createElement(b.a,{className:"div-box"},r.a.createElement(B.a,{id:"standard-multiline-flexible",label:"Search City",rowsMax:4,value:n,onChange:c,onKeyDown:i}),r.a.createElement("div",{className:"div-temp-box"},"\xb0F",r.a.createElement(M.a,{checked:!0===t,onChange:function(e){return a(e)},color:"default"}),"\xb0C"))},U=a(379);var K=Object(o.b)((function(e){return{pageDetails:e.weatherReducer.data.pageDetails}}),null)((function(e){var t=e.pageDetails,a=e.pageIndex,n=e.handlePageButton;return r.a.createElement(N.a,{"data-test-id":"container",container:!0,spacing:4,style:{justifyContent:"space-between"}},r.a.createElement(N.a,{item:!0},a>0&&r.a.createElement(U.a,{className:"page-button",onClick:function(){return n("previous")}},r.a.createElement("i",{className:"material-icons md-48"},"arrow_back_ios"))),r.a.createElement(N.a,{item:!0},t&&a!==Object.keys(t).length-1&&r.a.createElement(U.a,{className:"page-button",onClick:function(){return n("next")}},r.a.createElement("i",{className:"material-icons md-48"},"arrow_forward_ios"))))}));var q=Object(o.b)((function(e){return{details:e.weatherReducer.data.details,pageDetails:e.weatherReducer.data.pageDetails}}),(function(e){return{fetchData:function(t){return e(g(t))},showLoader:function(){return e((function(e){e({type:"FETCH_WAETHER_PENDING"})}))}}}))((function(e){var t=Object(n.useState)(0),a=Object(T.a)(t,2),c=a[0],i=a[1],o=Object(n.useState)(!1),l=Object(T.a)(o,2),s=l[0],u=l[1],m=Object(n.useState)(""),d=Object(T.a)(m,2),h=d[0],p=d[1],f=e.details,E=e.pageDetails,g=e.fetchData,b=e.showLoader;return r.a.createElement(r.a.Fragment,null,r.a.createElement(G,{isCelcius:s,searchCity:h,handleSwitchButton:function(e){u(e.target.checked)},handleTextOnChange:function(e){p(e.target.value)},handleKeyPress:function(e){13===+e.keyCode&&(p(e.target.value),b(),g(e.target.value))}}),r.a.createElement(L,{isCelcius:s}),r.a.createElement(K,{pageIndex:c,handlePageButton:function(e){i("next"===e?c+1:c-1)}}),f&&r.a.createElement(N.a,{container:!0,spacing:8,style:{justifyContent:"center"}},E[c].map((function(e,t){return r.a.createElement(N.a,{item:!0,key:"Grid"+t},r.a.createElement(I,{key:t,detail:f[e],isCelcius:s}))}))))})),J=a(380),z=a(333);var X=function(){var e=Object(C.a)((function(){return{root:{padding:"20px",alignItems:"center"},text:{fontSize:"18px",fontWeight:"bold"}}}))();return r.a.createElement(J.a,{className:e.root},r.a.createElement(z.a,{className:e.text},"Weather Forcast"))},$=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).fetchWeatherData=e.fetchWeatherData.bind(Object(u.a)(e)),e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.fetchWeatherData()}},{key:"fetchWeatherData",value:function(){this.props.showLoader(),this.props.fetchData()}},{key:"render",value:function(){var e=this.props,t=e.showData,a=e.isError,n=e.isPending;return r.a.createElement(r.a.Fragment,null,r.a.createElement(X,null),r.a.createElement(h.a,{fixed:!0,style:{marginTop:"5em"}},t&&r.a.createElement(q,null),n&&r.a.createElement(O,null),a&&r.a.createElement(y,{fetchWeatherData:this.fetchWeatherData})))}}]),a}(n.Component),Q=Object(o.b)((function(e){return{showData:e.weatherReducer.showData,isError:e.weatherReducer.isError,isPending:e.weatherReducer.isPending}}),(function(e){return{fetchData:function(){return e(g())},showLoader:function(){return e((function(e){e({type:"FETCH_WAETHER_PENDING"})}))}}}))($),V=a(50),Y=a(197),Z=a(198),ee={isPending:!1,showData:!0,data:{},isError:!1};var te=Object(V.combineReducers)({weatherReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"FETCH_WAETHER_PENDING":return Object.assign({},e,{isPending:!0,showData:!1});case"FETCH_WEATHER_SUCCESS":return Object.assign({},e,{isPending:!1,showData:!0,data:t.payload});case"FETCH_WEATHER_FAILURE":return Object.assign({},e,{isPending:!1,showData:!1,isError:!0});default:return e}}}),ae=Object(V.createStore)(te,Object(Y.composeWithDevTools)(Object(V.applyMiddleware)(Z.a)));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(o.a,{store:ae},r.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[219,1,2]]]);
//# sourceMappingURL=main.883144f5.chunk.js.map