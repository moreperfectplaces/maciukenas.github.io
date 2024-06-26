/**
 * Spotlight.js v0.6.6 (CDN)
 * Copyright 2019 Nextapps GmbH
 * Author: Thomas Wilkerling
 * Licence: Apache-2.0
 * https://github.com/nextapps-de/spotlight
 */
(function(){'use strict';var aa={};function ba(a){for(var b=a.classList,c={},d=0;d<b.length;d++)c[b[d]]=1;a.a=c;a.c=b}function f(a,b){a=g(a);var c="string"===typeof b;if(a.length)for(var d=0;d<a.length;d++)(c?ca:da)(a[d],b);else(c?ca:da)(a,b)}function da(a,b){for(var c=0;c<b.length;c++)ca(a,b[c])}function ca(a,b){a.a||ba(a);a.a[b]||(a.a[b]=1,a.c.add(b))}function h(a,b){a=g(a);var c="string"===typeof b;if(a.length)for(var d=0;d<a.length;d++)(c?ea:fa)(a[d],b);else(c?ea:fa)(a,b)}
function fa(a,b){for(var c=0;c<b.length;c++)ea(a,b[c])}function ea(a,b){a.a||ba(a);a.a[b]&&(a.a[b]=0,a.c.remove(b))}function l(a,b,c,d){a=g(a);var e="string"!==typeof b&&Object.keys(b);if(a.length)for(var k=0;k<a.length;k++)(e?ha:ia)(a[k],b,e||c,d);else(e?ha:ia)(a,b,e||c,d)}function ha(a,b,c,d){for(var e=0;e<c.length;e++){var k=c[e];ia(a,k,b[k],d)}}
function ia(a,b,c,d){var e=a.f;e||(a.f=e={});e[b]!==c&&(e[b]=c,(a.g||(a.g=a.style)).setProperty(aa[b]||(aa[b]=b.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()),c,d?"important":null))}var ja=0;function m(a,b,c){l(a,"transition","none");l(a,b,c);ja||(ja=a.clientTop&&0);l(a,"transition","")}function ka(a,b){b||(b="");a=g(a);if(a.length)for(var c=0;c<a.length;c++){var d=a[c],e=b;d.b!==e&&(d.b=e,d.textContent=e)}else a.b!==b&&(a.b=b,a.textContent=b)}
function g(a){return"string"===typeof a?document.querySelectorAll(a):a};function la(a,b,c,d){ma("add",a,b,c,d)}function na(a,b,c,d){ma("remove",a,b,c,d)}function ma(a,b,c,d,e){b[a+"EventListener"](c||"click",d,"undefined"===typeof e?!0:e)}function n(a,b){a||(a=window.event);a&&(a.stopImmediatePropagation(),b||a.preventDefault(),b||(a.returnValue=!1));return!1};var oa=document.createElement("link");oa.rel="stylesheet";oa.href="https://rawcdn.githack.com/nextapps-de/spotlight/master/dist/css/spotlight.css";document.getElementsByTagName("head")[0].appendChild(oa);var p="theme fullscreen autofit zoom-in zoom-out page title description player progress".split(" "),q,r,pa,qa,u,v,y,z,A,B,ra,sa,C,D,ta,ua,E,F,G,H,va,wa,xa,I,J,K,L,M,ya,za,Aa,Ba,Ca,N,Da,Ea,Fa,O,P,Ga,Q,R,S,Ha;function T(a){return(M||document).getElementsByClassName(a)[0]}
function Ia(a,b){if(F=a.length){J||(J=(M||document).getElementsByClassName("pane"));var c=J.length,d=G.title,e=G.description;S=Array(F);for(var k=0;k<F;k++){var t=a[k],w=t.dataset;if(k>=c){var x=J[0].cloneNode(!1);l(x,"left",100*k+"%");J[0].parentNode.appendChild(x)}x=void 0;S[k]={src:w&&(w.href||w.src)||t.src||t.href,title:w&&w.title||t.title||(x=(t||document).getElementsByTagName("img")).length&&x[0].alt||d||"",description:w&&w.description||t.description||e||""}}E=b||1;Ja(!0);Ka()}}
function La(a,b,c,d){if(d||a[c])G[c]=b&&b[c]||d}
function Ma(a,b){G={};b&&Na(b);Na(a);La(a,b,"description");La(a,b,"title");La(a,b,"prefetch",!0);La(a,b,"preloader",!0);wa=a.onchange;H=G.infinite;H="undefined"!==typeof H&&"false"!==H;va="false"!==G.progress;xa=1*G.player||7E3;if((a=G.zoom)||""===a)G["zoom-in"]=G["zoom-out"]=a,delete G.zoom;if((a=G.control)||""===a){a="string"===typeof a?a.split(","):a;for(b=0;b<p.length;b++)G[p[b]]="false";for(b=0;b<a.length;b++){var c=a[b].trim();"zoom"===c?G["zoom-in"]=G["zoom-out"]="true":G[c]="true"}}for(a=
0;a<p.length;a++)b=p[a],l(T(b),"display","false"===G[b]?"none":"");(ua=G.theme)?Oa():ua="white"}function Na(a){for(var b=G,c=Object.keys(a),d=0;d<c.length;d++){var e=c[d];b[e]=""+a[e]}}
function Pa(){var a=E;I=J[a-1];K=I.firstElementChild;E=a;if(!K){var b="false"!==G.preloader;K=new Image;K.onload=function(){b&&h(O,"show");S&&(y=this.width,z=this.height,l(this,{visibility:"visible",opacity:1,transform:""}),"false"!==G.prefetch&&a<F&&((new Image).src=S[a].src))};K.onerror=function(){I.removeChild(this)};I.appendChild(K);K.src=S[a-1].src;b&&f(O,"show");return!b}return!0}la(document,"",Qa);la(document,"DOMContentLoaded",Ra,{once:!0});var Sa=!1;
function Ra(){Sa||(M=document.createElement("div"),M.id="spotlight",M.innerHTML='<div class=preloader></div><div class=scene><div class=pane></div></div><div class=header><div class=page></div><div class="icon fullscreen"></div><div class="icon autofit"></div><div class="icon zoom-out"></div><div class="icon zoom-in"></div><div class="icon theme"></div><div class="icon player"></div><div class="icon close"></div></div><div class=progress></div><div class="arrow arrow-left"></div><div class="arrow arrow-right"></div><div class=footer><div class=title></div><div class=description></div></div>',
l(M,"transition","none"),document.body.appendChild(M),L=T("scene"),ya=T("footer"),za=T("title"),Aa=T("description"),Ba=T("arrow-left"),Ca=T("arrow-right"),N=T("fullscreen"),Da=T("page"),Ea=T("player"),Fa=T("progress"),O=T("preloader"),R=document.documentElement||document.body,document.cancelFullScreen||(document.cancelFullScreen=document.exitFullscreen||document.webkitCancelFullScreen||document.webkitExitFullscreen||document.mozCancelFullScreen||function(){}),R.requestFullScreen||(R.requestFullScreen=
R.webkitRequestFullScreen||R.msRequestFullScreen||R.mozRequestFullScreen||l(N,"display","none")||function(){}),Ha=[[window,"keydown",Ta],[window,"wheel",Ua],[window,"hashchange",Va],[window,"resize",Wa],[O,"mousedown",Xa],[O,"mouseleave",Ya],[O,"mouseup",Ya],[O,"mousemove",Za],[O,"touchstart",Xa,{passive:!1}],[O,"touchcancel",Ya],[O,"touchend",Ya],[O,"touchmove",Za,{passive:!0}],[N,"",$a],[Ba,"",ab],[Ca,"",U],[Ea,"",V],[T("autofit"),"",bb],[T("zoom-in"),"",cb],[T("zoom-out"),"",db],[T("close"),"",
eb],[T("theme"),"",Oa]],Sa=!0)}function Wa(){u=M.clientWidth;v=M.clientHeight;K&&(y=K.width,z=K.height,fb())}function fb(){l(K,"transform","translate(-50%, -50%) scale("+A+")")}function W(a,b){l(I,"transform",a||b?"translate("+a+"px, "+b+"px)":"")}function Ja(a,b){(a?m:l)(L,"transform","translateX("+(100*-(E-1)+(b||0))+"%)")}function gb(a){for(var b=0;b<Ha.length;b++){var c=Ha[b];(a?la:na)(c[0],c[1],c[2],c[3])}}
function Qa(a){var b=hb.call(a.target,".spotlight");if(b){var c=hb.call(b,".spotlight-group"),d=(c||document).getElementsByClassName("spotlight");Ma(b.dataset,c&&c.dataset);for(c=0;c<d.length;c++)if(d[c]===b){Ia(d,c+1);break}ib();return n(a)}}function Ta(a){if(I)switch(a.keyCode){case 8:bb();break;case 27:eb();break;case 32:"false"!==G.player&&V();break;case 37:ab();break;case 39:U();break;case 38:case 107:case 187:cb();break;case 40:case 109:case 189:db()}}
function Ua(a){I&&(a=a.deltaY,0>.5*(0>a?1:a?-1:0)?db():cb())}function Va(){I&&"#spotlight"===location.hash&&eb(!0)}function V(a){("boolean"===typeof a?a:!P)?P||(P=setInterval(U,xa),f(Ea,"on"),va&&jb()):P&&(P=clearInterval(P),h(Ea,"on"),va&&m(Fa,"transform",""));return P}function Y(){Q?clearTimeout(Q):f(M,"menu");var a=G.autohide;Q="false"!==a?setTimeout(function(){h(M,"menu");Q=null},1*a||3E3):1}function kb(a){"boolean"===typeof a&&(Q=a?Q:0);Q?(Q=clearTimeout(Q),h(M,"menu")):Y();return n(a)}
function Xa(a){B=!0;ra=!1;var b=lb(a);sa=y*A<=u;pa=b.x;qa=b.y;return n(a,!0)}function Ya(a){if(B&&!ra)return B=!1,kb(a);sa&&ra&&(Ja(!0,q/u*100),q<-(v/10)&&U()||q>v/10&&ab()||Ja(),q=0,sa=!1,W());B=!1;return n(a)}function Za(a){if(B){Ga||(Ga=requestAnimationFrame(mb));var b=lb(a),c=(y*A-u)/2;ra=!0;q-=pa-(pa=b.x);sa?C=!0:q>c?q=c:0<u-q-y*A+c?q=u-y*A+c:C=!0;z*A>v&&(c=(z*A-v)/2,r-=qa-(qa=b.y),r>c?r=c:0<v-r-z*A+c?r=v-z*A+c:C=!0)}else Y();return n(a,!0)}
function lb(a){var b=a.touches;b&&(b=b[0]);return{x:b?b.clientX:a.pageX,y:b?b.clientY:a.pageY}}function mb(a){C?(a&&(Ga=requestAnimationFrame(mb)),W(q,r)):Ga=null;C=!1}function $a(a){("boolean"===typeof a?a:document.isFullScreen||document.webkitIsFullScreen||document.mozFullScreen)?(document.cancelFullScreen(),h(N,"on")):(R.requestFullScreen(),f(N,"on"))}
function bb(a){"boolean"===typeof a&&(D=!a);D=1===A&&!D;l(K,{maxHeight:D?"none":"",maxWidth:D?"none":"",transform:""});y=K.width;z=K.height;A=1;r=q=0;C=!0;W();Y()}function cb(a){var b=A/.65;5>=b&&nb(A=b);a||Y()}function nb(a){A=a||1;fb()}function db(a){var b=.65*A;1<=b&&(nb(A=b),r=q=0,C=!0,W());a||Y()}function ib(){location.hash="spotlight";location.hash="show";l(M,"transition","");f(R,"hide-scrollbars");f(M,"show");gb(!0);Wa();Y();G.autoplay&&V()}
function eb(a){gb(!1);history.go(!0===a?-1:-2);h(R,"hide-scrollbars");h(M,"show");P&&V(!1);K.parentNode.removeChild(K);I=J=K=S=G=wa=null}function ab(){if(1<E)return Z(E-1);if(P||H)return m(L,"transform","translateX(-"+100*F+"%)"),Z(F)}function U(){if(E<F)return Z(E+1);if(P||H)return m(L,"transform","translateX(100%)"),Z(1)}function Z(a){if(!(P&&B||a===E)){P||Y();P&&va&&jb();var b=a>E;E=a;Ka(b);return!0}}
function jb(){m(Fa,{transitionDuration:"",transform:""});l(Fa,{transitionDuration:xa+"ms",transform:"translateX(0)"})}function Oa(a){"boolean"===typeof a?ta=a:(ta=!ta,Y());ta?f(M,ua):h(M,ua)}
function Ka(a){r=q=0;A=1;var b=G.animation,c=!0,d=!0,e=!0;if(b||""===b){c=d=e=!1;b="string"===typeof b?b.split(","):b;for(var k=0;k<b.length;k++){var t=b[k].trim();if("scale"===t)c=!0;else if("fade"===t)d=!0;else if("slide"===t)e=!0;else if("flip"===t)var w=!0;else if("false"!==t){c=d=e=w=!1;var x=t;break}}}l(L,"transition",e?"":"none");Ja();I&&W();if(K){l(K,{opacity:d?0:1,transform:""});var X=K;setTimeout(function(){X&&K!==X&&X.parentNode&&X.parentNode.removeChild(X)},800)}e=Pa();x&&f(K,x);m(K,{opacity:d?
0:1,transform:"translate(-50%, -50%)"+(c?" scale(0.8)":"")+(w&&"undefined"!==typeof a?" rotateY("+(a?"":"-")+"90deg)":""),maxHeight:"",maxWidth:""});e&&l(K,{visibility:"visible",opacity:1,transform:""});x&&h(K,x);W();l(Ba,"visibility",H||1!==E?"":"hidden");l(Ca,"visibility",H||E!==F?"":"hidden");a=S[E-1];if(c=(c=a.title||a.description)&&"false"!==c)ka(za,a.title||""),ka(Aa,a.description||"");l(ya,"visibility",c?"visible":"hidden");ka(Da,E+" / "+F);wa&&wa(E)}
var hb=Element.prototype.closest||function(a){var b=this;for(a=a.substring(1);b&&1===b.nodeType;){if(b.classList.contains(a))return b;b=b.parentElement||b.parentNode}};window.Spotlight={init:Ra,theme:Oa,fullscreen:$a,autofit:bb,next:U,prev:ab,"goto":Z,close:eb,zoom:nb,menu:kb,show:function(a,b){a?(b?Ma(b):b={},Ia(a,b.index)):G={};ib()},play:V};}).call(this);
