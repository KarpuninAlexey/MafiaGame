(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},15:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),o=a.n(c),s=(a(15),a(8)),m=a(1),i=a.n(m),l=a(2),u=a(5),d=a(6),g=a(7),h=a(9),v=(a(17),{gameId:void 0,status:void 0}),f=function(e){Object(h.a)(a,e);var t=Object(g.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).startGame=Object(l.a)(i.a.mark((function t(){var a,n,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/api/game",{method:"POST"});case 2:return a=t.sent,t.next=5,a.json();case 5:n=t.sent,r=n.gameId,e.setState({gameId:r}),console.log(r);case 9:case"end":return t.stop()}}),t)}))),e.connectTogame=Object(l.a)(i.a.mark((function t(){var a,n,r,c,o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=document.querySelector(".Text-gameId").value,t.next=3,fetch("/api/game/".concat(a),{method:"GET"});case 3:return n=t.sent,t.next=6,n.json();case 6:r=t.sent,c=r.game,o=c._status,e.setState({status:o}),console.log(o);case 11:case"end":return t.stop()}}),t)}))),e.state=Object(s.a)({},v),e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state.gameId,t=this.startGame,a=this.connectTogame,n=r.a.createElement("div",null,"Game was started"),c=r.a.createElement("div",null,"Game was not started",r.a.createElement("button",{className:"start-game",onClick:t},"Start Game"),r.a.createElement("input",{type:"text",className:"Text-gameId"}),r.a.createElement("button",{className:"start-game",onClick:a},"Connect to game"));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Wrraper"},r.a.createElement("div",{className:"content"},e?n:c)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.9ead6af7.chunk.js.map