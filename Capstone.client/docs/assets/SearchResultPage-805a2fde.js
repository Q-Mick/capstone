import{_ as m,K as _,u as p,d as h,e as s,D as d,P as v,r as y,o as c,c as l,h as a,t as b,F as f,m as x,q as P,A as n,z as k}from"./index-f6f34f57.js";const w={components:{GameCard:_},setup(){const r=p(),t=r.params.query;async function i(){await d.searchGames(t)}return h(()=>{i()}),{game:s(()=>n.activeGame),games:s(()=>n.games),query:s(()=>r.params.query.split("+").join(" ")),nextpage:s(()=>n.nextPage),previouspage:s(()=>n.previousPage),async changePage(e){try{await d.changePage(e),window.scrollTo({top:0,behavior:"smooth"})}catch{v.error}}}}},C={key:0,class:"container-fluid pt-3 bg-background"},q={class:"text-center mobile-results text-white"},G={class:"row p-3 justify-content-around"},S={class:"row justify-content-around py-2"},j={class:"col-4 card py-3 elevation-3 bg-dark"},B={class:"row justify-content-around"},R=["disabled"],N=["disabled"];function A(r,t,i,e,u,D){const g=y("GameCard");return e.game?(c(),l("section",C,[a("h1",q,'Search Results for "'+b(e.query)+'"',1),a("div",G,[(c(!0),l(f,null,x(e.games,o=>(c(),k(g,{game:o,class:"col-md-5",key:o.slug},null,8,["game"]))),128))]),a("div",S,[a("div",j,[a("div",B,[a("button",{class:"col-auto btn btn-info",disabled:!e.previouspage,onClick:t[0]||(t[0]=o=>e.changePage(e.previouspage))},"Previous",8,R),a("button",{class:"col-auto btn btn-info",disabled:!e.nextpage,onClick:t[1]||(t[1]=o=>e.changePage(e.nextpage))},"Next",8,N)])])])])):P("",!0)}const V=m(w,[["render",A]]);export{V as default};
