import{_ as I,M as k,C as T,u as M,b as P,w as S,d as V,e as r,l as g,f as p,g as j,P as v,r as _,o as m,c as u,h as t,n as B,t as i,i as x,j as E,k as c,v as d,F as f,m as y,a as b,p as N,q as U,A as n,s as q,x as z,y as D}from"./index-f6f34f57.js";const G={components:{MyJoinedTournamentsCard:k,CommentCard:T},setup(){const l=M(),o=P({});S(()=>{o.value={...n.account}});async function h(){try{await p.getAccountParticipations()}catch(e){g.error(e),v.toast(e.message,`Error finding tournaments for ${n.account.name}`)}}return V(()=>{h()}),{editable:o,route:l,account:r(()=>n.account),tournaments:r(()=>n.activeTournament),comments:r(()=>n.comments),myParticipations:r(()=>n.myParticipations),isCancelled:r(()=>n.activeTournament.isCancelled),async editAccount(){try{g.log(o.value),await p.updateAccountInfo(o.value),j.getInstance(document.getElementById("accountModal")).hide()}catch(e){v.error(e)}}}}},a=l=>(z("data-v-58298c47"),l=l(),D(),l),J={key:0,class:"container-fluid bg-main p-0"},L={class:"justify-content-center align-items-center shadow elevation-5 bg-inner"},F={class:"col-12 mx-auto"},R={class:"shadow rounded overflow-hidden"},H={class:"media align-items-end profile-header"},K={class:"profile pt-5",style:{"margin-right":"25vw"}},O={class:"row media-body pt-5 text-white"},Q={class:"col-3",style:{position:"absolute",top:"18rem"}},W={class:"card profile-card bg-filler p-1",style:{border:"none",width:"15rem"}},X=["src","alt"],Y={class:"d-flex flex-column justify-content-center align-items-center",style:{"line-height":"35px"}},Z={class:"name-query my-0",style:{"text-shadow":"1px 1px 2px #000000",color:"aliceblue","font-weight":"550"}},$={class:"tag-query list-group-item small mb-3 fs-6",style:{"line-height":"5px","font-weight":"550","font-style":"italic",color:"gold"}},tt=a(()=>t("i",{class:"mdi mdi-tag fs-5",style:{color:"gold"}},null,-1)),et={class:"col-md-3"},ot=a(()=>t("button",{class:"btn neon-button mt-0","data-bs-toggle":"modal","data-bs-target":"#accountModal"},"Edit Account",-1)),st={class:"row justify-content-center"},at={class:"modal fade",id:"accountModal",tabindex:"-1","aria-labelledby":"accountModal","aria-hidden":"true"},nt={class:"modal-dialog"},lt={class:"modal-content"},it=a(()=>t("div",{class:"modal-header"},[t("h1",{class:"modal-title fs-5",id:"editAccountLabel"},"Edit Account"),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1)),ct={class:"modal-body justify-content-center"},dt=a(()=>t("label",{class:"edit-labels",for:"text"},"Name",-1)),rt=a(()=>t("label",{class:"edit-labels",for:"text"},"Avatar Image",-1)),mt=a(()=>t("label",{class:"edit-labels",for:"text"},"Cover Image",-1)),ut={class:"row mb-3"},_t={class:"col-6"},bt=a(()=>t("label",{class:"edit-labels",for:"text"},"Age",-1)),ht={class:"col-6"},gt=a(()=>t("label",{class:"edit-labels",for:"text"},"Gamertag",-1)),pt=a(()=>t("label",{class:"edit-labels",for:"text"},"Bio",-1)),vt=a(()=>t("button",{class:"btn btn-success text-end",type:"submit",role:"button"},"Save Edits",-1)),ft={class:"d-flex justify-content-end text-center"},yt={class:"list-inline social-tab mb-0 p-4 bg-filler",style:{"margin-right":"1rem","margin-top":"20px"}},xt={class:"list-inline-item"},wt={class:"font-weight-bold mb-0 d-block"},Ct=a(()=>t("small",{class:""},[t("i",{class:"mdi mdi-controller me-1"}),x("Tournaments")],-1)),At={class:"bio-box"},It={class:"p-4 pt-5 pb-0",style:{"font-size":"2rem","font-weight":"600",color:"aliceblue"}},kt={class:"p-5 ms-4 mx-3 mb-5 bio"},Tt={class:"py-4 px-4 mb-5"},Mt={class:"d-flex align-items-center justify-content-between mb-3"},Pt={class:"mt-5 tournament-header"},St={class:"row align-items-center"},Vt={class:"py-4"},jt=a(()=>t("h5",{class:"mb-3 comment-header"},"Recent posts",-1)),Bt={class:"p-4 bg-comments rounded shadow-sm"},Et=q('<p class="text-light" style="text-shadow:1px 1px 4px #000000;font-weight:550;" data-v-58298c47>No more recent comments on tournaments.</p><ul class="list-inline small text-light mt-3 mb-0" data-v-58298c47><li class="list-inline-item" data-v-58298c47><i class="mdi mdi-comment me-2 text-light" data-v-58298c47></i>12 Comments</li><li class="list-inline-item" data-v-58298c47><i class="mdi mdi-heart-plus me-2" style="color:red;" data-v-58298c47></i>200 Likes</li></ul>',2),Nt={class:"d-flex justify-content-center"},Ut=a(()=>t("h1",{class:"selectable"},[t("u",null,[t("em",null,"BADGES")])],-1));function qt(l,o,h,e,zt,Dt){const w=_("MyJoinedTournamentsCard"),C=_("CommentCard"),A=_("router-link");return e.account?(m(),u("section",J,[t("div",L,[t("div",null,[t("div",F,[t("div",R,[t("div",{class:"elevation-5 shadow-lg px-4 pt-0 pb-4",style:B([{background:`url(${e.account.coverImg})`},{"background-position":"center","background-size":"cover","background- background-repeat":"no-repeat",height:"50vh"}])},[t("div",H,[t("div",K,[t("div",O,[t("div",Q,[t("div",W,[t("img",{src:e.account.picture,alt:e.account.name,class:"card-img-top profile-img"},null,8,X),t("div",Y,[t("p",Z,i(e.account.name),1),t("p",$,[tt,x(" "+i(e.account.gamerTag),1)])])])])])]),t("div",et,[ot,t("div",st,[t("div",at,[t("div",nt,[t("div",lt,[it,t("div",ct,[t("form",{onSubmit:o[6]||(o[6]=E(s=>e.editAccount(),["prevent"])),class:"col-12"},[dt,c(t("input",{class:"form-control mb-3",type:"text",placeholder:"Name","aria-label":"name","onUpdate:modelValue":o[0]||(o[0]=s=>e.editable.name=s)},null,512),[[d,e.editable.name]]),rt,c(t("input",{class:"form-control mb-3",type:"text",id:"avatarImg",placeholder:"Avatar Image","onUpdate:modelValue":o[1]||(o[1]=s=>e.editable.picture=s)},null,512),[[d,e.editable.picture]]),mt,c(t("input",{class:"form-control mb-3",type:"text",id:"coverImg",placeholder:"Cover Image","onUpdate:modelValue":o[2]||(o[2]=s=>e.editable.coverImg=s)},null,512),[[d,e.editable.coverImg]]),t("div",ut,[t("div",_t,[bt,c(t("input",{class:"form-control",type:"number",id:"name",placeholder:"Age","onUpdate:modelValue":o[3]||(o[3]=s=>e.editable.age=s)},null,512),[[d,e.editable.age]])]),t("div",ht,[gt,c(t("input",{class:"form-control",type:"text",id:"gamertag",placeholder:"Gamertag","onUpdate:modelValue":o[4]||(o[4]=s=>e.editable.gamerTag=s)},null,512),[[d,e.editable.gamerTag]])])]),pt,c(t("textarea",{class:"form-control mb-3",id:"bio",rows:"3",placeholder:"Bio","onUpdate:modelValue":o[5]||(o[5]=s=>e.editable.bio=s)},null,512),[[d,e.editable.bio]]),vt],32)])])])])])])])],4),t("div",ft,[t("ul",yt,[t("li",xt,[t("h5",wt,i(e.myParticipations.length),1),Ct])])]),t("div",At,[t("p",It,i(e.account.gamerTag)+"'s Bio: ",1),t("div",kt,[t("p",null,i(e.account.bio),1)])]),t("div",Tt,[t("div",Mt,[t("h5",Pt,i(e.account.name)+"'s Tournaments:",1)]),t("section",null,[t("div",St,[(m(!0),u(f,null,y(e.myParticipations,s=>(m(),u("div",{class:"col-12 col-md-4 col-lg-3 py-3",key:s.id},[b(w,{myParticipation:s},null,8,["myParticipation"])]))),128))])]),t("div",Vt,[jt,t("div",Bt,[(m(!0),u(f,null,y(e.comments,s=>(m(),u("div",{class:"col-12 my-4",key:s.id},[b(C,{comment:s},null,8,["comment"])]))),128)),Et])])])])])])]),t("section",Nt,[b(A,{to:{name:"About"}},{default:N(()=>[Ut]),_:1})])])):U("",!0)}const Jt=I(G,[["render",qt],["__scopeId","data-v-58298c47"]]);export{Jt as default};
