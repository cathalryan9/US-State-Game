(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){},102:function(e,t,a){},257:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(19),i=a.n(o),s=(a(100),a(35)),c=a(36),l=a(38),m=a(37),d=a(39),h=a(17),u=(a(102),a(91)),f=a.n(u),k=a(93),g=a.n(k),p=a(94),S=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).handleChange=a.handleChange.bind(Object(h.a)(Object(h.a)(a))),a.state={headerTitle:a.props.title,className:a.props.className,list:a.props.list,selectedItem:a.props.list[0].name},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.setState({selectedItem:e.target.value}),this.props.switchGameMode(e.target.value)}},{key:"render",value:function(){var e=this,t=this.state,a=(t.headerTitle,t.className,t.list),n=t.selectedItem;this.props.classes;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(f.a,{className:this.state.className,onChange:function(t){return e.handleChange(t)},value:n},a.map(function(e){return r.a.createElement(g.a,{value:e.name,key:e.id},e.name)}))))}}]),t}(n.Component),y=Object(p.withStyles)({root:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"}})(S),v=a(21),O={0:"Alabama",1:"Alaska",2:"Arizona",3:"Arkansas",4:"California",5:"Colorado",6:"Connecticut",7:"Delaware",8:"Florida",9:"Georgia",10:"Hawaii",11:"Idaho",12:"Illinois",13:"Indiana",14:"Iowa",15:"Kansas",16:"Kentucky",17:"Louisiana",18:"Maine",19:"Maryland",20:"Massachusetts",21:"Michigan",22:"Minnesota",23:"Mississippi",24:"Missouri",25:"Montana",26:"Nebraska",27:"Nevada",28:"New Hampshire",29:"New Jersey",30:"New Mexico",31:"New York",32:"North Carolina",33:"North Dakota",34:"Ohio",35:"Oklahoma",36:"Oregon",37:"Pennsylvania",38:"Rhode Island",39:"South Carolina",40:"South Dakota",41:"Tennessee",42:"Texas",43:"Utah",44:"Vermont",45:"Virginia",46:"Washington",47:"West Virginia",48:"Wisconsin",49:"Wyoming"},b={0:{markerOffset:-10,name:"New York",coordinates:[-74.0059413,40.7127837]},1:{markerOffset:-10,name:"Philadelphia",coordinates:[-75.1652215,39.9525839]},2:{markerOffset:-10,name:"Los Angeles",coordinates:[-118.2436849,34.0522342]},3:{markerOffset:-10,name:"Chicago",coordinates:[-87.6297982,41.8781136]},4:{markerOffset:-10,name:"Austin",coordinates:[-97.7430608,30.267153]},5:{markerOffset:-10,name:"Phoenix",coordinates:[-112.0740373,33.4483771]},6:{markerOffset:-10,name:"Houston",coordinates:[-95.3698028,29.7604267]},7:{markerOffset:-10,name:"San Diego",coordinates:[-117.1610838,32.715738]},8:{markerOffset:-10,name:"Dallas",coordinates:[-96.7969879,32.7766642]},9:{markerOffset:-10,name:"San Francisco",coordinates:[-122.4194155,37.7749295]},10:{markerOffset:-10,name:"San Antonio",coordinates:[-98.4936282,29.4241219]},11:{markerOffset:-10,name:"Indianapolis",coordinates:[-86.158068,39.768403]},12:{markerOffset:-10,name:"Jacksonville",coordinates:[-81.655651,30.3321838]},13:{markerOffset:-10,name:"San Jose",coordinates:[-121.8863286,37.3382082]}},C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).handleStateClick=a.handleStateClick.bind(Object(h.a)(Object(h.a)(a))),a.renderMarker=a.renderMarker.bind(Object(h.a)(Object(h.a)(a))),a.renderMarkerText=a.renderMarkerText.bind(Object(h.a)(Object(h.a)(a))),a.switchGameMode=a.switchGameMode.bind(Object(h.a)(Object(h.a)(a))),a.state={highScore:0,currentScore:0,gameMode:"States",randomState:Math.floor(Math.random()*Object.keys(O).length),previousRandomState:-1,randomCity:Math.floor(Math.random()*Object.keys(b).length),previousRandomCity:-1},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"renderMarkerText",value:function(e){if(e==this.state.previousRandomCity)return r.a.createElement("text",{textAnchor:"middle",y:b[e].markerOffset,style:{fontFamily:"Roboto, sans-serif",fill:"#008000"}},b[e].name)}},{key:"renderMarker",value:function(){var e=this;if(0!=b.length||null!=b)return r.a.createElement(v.Markers,null,Object.keys(b).map(function(t,a){return r.a.createElement(v.Marker,{key:a,marker:b[a],style:{default:{fill:"#FF5722",position:"fixed",outline:"none"},hover:{fill:"#FFFFFF",outline:"none"},pressed:{fill:"#FF5722",outline:"none"}},onClick:function(a){return e.handleStateClick(a,t)}},r.a.createElement("circle",{id:"city-".concat(a),cx:0,cy:0,r:5,style:{opacity:1}}),e.renderMarkerText(t))}))}},{key:"handleStateClick",value:function(e,t){var a,n,r=this.state.gameMode;"Cities"==r?(a=this.state.randomCity,n=this.state.previousRandomCity):"States"==r&&(a=this.state.randomState,n=this.state.previousRandomState);var o,i,s=this.state.currentScore;a==t?(s+=1,this.setState({currentScore:s}),s>this.state.highScore&&this.setState({highScore:s})):s>this.state.highScore?this.setState({highScore:s,currentScore:0}):this.setState({currentScore:0}),"Cities"==r?(this.setState({randomCity:Math.floor(13*Math.random()),previousRandomCity:this.state.randomCity}),o=document.getElementById("city-".concat(n)),i=document.getElementById("city-".concat(a))):"States"==r&&(o=document.getElementById("state-".concat(n)),this.setState({randomState:Math.floor(50*Math.random()),previousRandomState:this.state.randomState}),o=document.getElementById("state-".concat(n)),i=document.getElementById("state-".concat(a))),i.classList.add("correct"),null!=o&&o.classList.remove("correct")}},{key:"handleCityClick",value:function(){}},{key:"switchGameMode",value:function(e){var t;if("Cities"==this.state.gameMode){var a=this.state.previousRandomCity;t=document.getElementById("city-".concat(a))}else if("States"==this.state.gameMode){a=this.state.previousRandomState;t=document.getElementById("state-".concat(a))}null!=t&&t.classList.remove("correct"),this.setState({gameMode:e,highScore:0,currentScore:0})}},{key:"render",value:function(){var e=this,t=this.state.gameMode,a=!1,n="States";return"Cities"==t?(n=b[this.state.randomCity].name,a=!0):"States"==t&&(n=O[this.state.randomState]),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(y,{className:"menu",title:"Guess The State!",list:[{id:0,name:"States"},{id:1,name:"Cities"}],switchGameMode:this.switchGameMode})),r.a.createElement("div",{className:"random-state-name"},"Find - ",n),r.a.createElement(v.ComposableMap,{projection:"albersUsa",projectionConfig:{scale:1e3,xOffset:0,yOffset:0},width:980,height:551,style:{width:"100%",height:"auto"}},r.a.createElement(v.ZoomableGroup,{disablePanning:!0},r.a.createElement(v.Geographies,{geography:"/US-State-Game/us.json",disableOptimization:!0},function(t,a){return t.map(function(t,n){return r.a.createElement(v.Geography,{id:"state-".concat(t.properties.ID_1-1),key:"state-".concat(t.properties.ID_1-1),cacheId:"state-".concat(t.properties.ID_1-1),round:!0,geography:t,projection:a,onClick:function(a){return e.handleStateClick(a,t.properties.ID_1-1)}})})}),a&&this.renderMarker())),r.a.createElement("div",{className:"scores-container"},r.a.createElement("div",{className:"high-Score"},"High Score - ",this.state.highScore),r.a.createElement("div",{className:"current-Score"},"Current Score - ",this.state.currentScore)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},95:function(e,t,a){e.exports=a(257)}},[[95,2,1]]]);
//# sourceMappingURL=main.36a12925.chunk.js.map