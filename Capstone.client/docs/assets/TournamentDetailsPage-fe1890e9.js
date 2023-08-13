import{_ as ct,L as dt,R as mt,O as ut,b as M,u as _t,w as ht,d as pt,l as _,G as k,A as s,P as y,e as m,Q as st,J as P,g as bt,r as D,o as l,c as r,h as t,t as h,i as B,a as f,q as c,F as C,m as S,j as it,k as u,v as p,U as A,z as lt,p as gt,V as j,x as ft,y as vt,s as yt}from"./index-f6f34f57.js";import{r as Tt}from"./RewardsService-6d5ac0cd.js";const xt={components:{TournamentCountdown:dt,RGBButton:mt,ParticipantCard:ut},setup(){const g=M(""),n=M({}),b=_t(),e=M([]);ht(()=>{n.value={...s.activeTournament}}),pt(()=>{w(),V(),E()});async function w(){try{const o=b.params.tournamentId;_.log("[ACTIVE TOURNAMENT ID]",o),await k.setActiveTournament(o),s.activeTournament.currentRound>0&&(s.activeTournament.started=!0)}catch(o){y.error(o)}}return{setActiveTournament:w,formatDateAndTime:N,cancelTournament:R,leaveTournament:v,joinTournament:U,commentData:g,route:b,editable:n,rewards:e,rewards:m(()=>s.rewards),started:m(()=>s.activeTournament.started),user:m(()=>s.user),account:m(()=>s.account),tournament:m(()=>s.activeTournament),lastRound:m(()=>s.activeTournament.currentRound===s.activeTournament.totalRounds),participants:m(()=>s.participants),first:m(()=>s.participants.find(o=>o.status==="first")),second:m(()=>s.participants.find(o=>o.status==="second")),third:m(()=>s.participants.find(o=>o.status==="third")),activePlayers:m(()=>s.participants.filter(o=>o.status!="eliminated")),eliminatedPlayers:m(()=>s.participants.filter(o=>o.status=="eliminated")),isCancelled:m(()=>s.activeTournament.isCancelled),isFinished:m(()=>s.activeTournament.isFinished),startDate:m(()=>{var o;return N((o=s.activeTournament)==null?void 0:o.startDate).formattedDate}),startTime:m(()=>N(s.activeTournament.startDate).formattedTime),isParticipant:m(()=>!!s.myParticipations.find(o=>o.tournamentId==s.activeTournament.id)),isTournamentCreator:m(()=>s.activeTournament.creatorId===s.account.id),comments:m(()=>s.comments),async createComment(){try{const o=g.value.trim();if(o.length==0){y.toast("Comments must contain a body");return}const d=b.params.tournamentId;let T={body:o,tournamentId:d};st.createComment(T),g.value=""}catch(o){_.log(o)}},tournamentStarted:m(()=>new Date(s.activeTournament.startDate)<new Date),async finalizeRound(){try{if(await y.confirm("This will advance the tournament to the next round. Please confirm all players status before accepting as you can not go back.")){const o=s.activeTournament.currentRound+1;s.activeTournament=await k.editTournament(s.activeTournament.id,{currentRound:o}),_.log("[ACTIVE TOURNAMENT FROM FINALIZE ROUND]",s.activeTournament),await s.participants.forEach(d=>{const T=P.updatePlayerStatus(d.id,{status:d.status});_.log(T),w()})}}catch(o){_.log(o)}},async finalizeTournament(){try{if(await y.confirm("This will end the tournament and distribute tournament rewards to the top 3 players. Are your rewards assigned?")){await s.participants.forEach((d,T)=>{const F=P.updatePlayerStatus(d.id,{status:d.status});_.log(F),d.status!="eliminated";{const I={tournamentId:s.activeTournament.id,recipientId:d.id,accountId:s.account.id,name:d.status,gpCoins:d.gpCoins,badge:d.badge};s.rewards.push(I),Tt.createReward(I)}_.log(s.rewards,"[APPSTATE REWARDS]")}),s.activeTournament.isFinished=!0;const o=await k.editTournament(s.activeTournament.id,{isFinished:!0});k.setActiveTournament,_.log("[FINISHED TOURNAMENT DATA]",o)}}catch(o){_.log(o)}},async editTournament(){try{const o=b.params.tournamentId;await k.editTournament(o,n.value),_.log(n.value),bt.getOrCreateInstance("#editTournamentModal").hide()}catch(o){y.error(o)}}};async function V(){try{await P.getParticipants(b.params.tournamentId),s.participants.forEach(o=>o.badge=""),s.participants.forEach(o=>o.gpCoins=0)}catch(o){_.log("[getting participants for this tournament]",o),y.error(o.message)}}async function R(){try{if(await y.confirm("This will toggle the tournament cancellation. Are you sure you want to do this?")){const o=await k.cancelTournament(b.params.tournamentId);s.activeTournament.isCancelled=!s.activeTournament.isCancelled,_.log(o)}}catch(o){_.log(o)}}async function U(){try{if(s.account.id.length>1){const o=b.params.tournamentId,d=await P.createParticipant({tournamentId:o});_.log(d)}}catch(o){_.log(o)}}async function v(){try{const o=s.myParticipations.find(d=>d.tournamentId==s.activeTournament.id);await P.leaveTournament(o.id)}catch(o){_.log(o)}}async function E(){try{const o=b.params.tournamentId;await st.getCommentsByTournamentId(o)}catch(o){y.error(o)}}}};function N(g){const n=new Date(g),b=`${n.getMonth()+1}/${n.getDate()}/${n.getFullYear()}`;let e=n.getHours();const w=n.getMinutes(),V=e>=12?"PM":"AM";e=e%12||12;const R=`${e}:${w.toString().padStart(2,"0")} ${V}`;return{formattedDate:b,formattedTime:R}}const i=g=>(ft("data-v-2149bc5f"),g=g(),vt(),g),wt={class:"container-fluid bg-details"},kt={class:"row"},Ct={key:0,class:"col-12 col-md-6 pt-3 text-light details-top"},Rt={class:"ms-4 mt-1 mb-0 my-0 text-uppercase",style:{"font-size":"2.5rem","font-weight":"650","font-style":"italic"}},It={key:0,class:"row justify-content-center"},Pt={class:"col-12"},Dt={class:"ms-4 ps-3 mt-0 mb-0",style:{"font-size":"1.9rem","font-weight":"450","font-style":"italic"}},Bt={class:"fw-light text-white fs-2"},St={class:"ms-4 ps-3 mt-2 mb-0",style:{"font-size":"1.9rem","font-weight":"450","font-style":"italic"}},At={class:"ms-4 ps-3 mt-2 mb-3",style:{"font-size":"1.9rem","font-weight":"450","font-style":"italic"}},Vt={key:0,class:"pb-5 countdown-area"},Ut={key:1},Ft=i(()=>t("h4",{class:"fw-normal fs-3 ms-3 mt-3"},"Tournament has begun",-1)),Et=i(()=>t("h5",{class:"fw-lighter ms-4"},"May the best player win",-1)),Mt=i(()=>t("div",{class:"container-img"},[t("img",{class:"game-img1",src:"https://media3.giphy.com/media/iJK1WyehdOPqckc7Vp/giphy.gif?cid=ecf05e477xnlicx57705d2nz4jh7z7bx3x3ln3tldhb7ku2s&ep=v1_stickers_search&rid=giphy.gif&ct=s",alt:""})],-1)),jt=[Ft,Et,Mt],Nt={key:2,class:"text-center"},zt=i(()=>t("h4",{class:"fw-bold fs-2 ms-0"},"WINNER",-1)),Lt={class:"fw-lighter ms-4"},Ot={class:"text-white fw-bold fs-5"},Gt={key:3,class:"text-center"},Jt=["src"],qt={class:"col-12 col-md-6 pt-2 px-5 d-flex align-items-center"},Qt=["src","alt"],Wt=i(()=>t("div",null,null,-1)),Kt={class:"my-4"},Ht={class:"row"},Xt={key:0,class:"bg-pending col-12 d-flex justify-content-center align-items-center"},Yt=i(()=>t("div",null,[t("p",{class:"pending",style:{"font-style":"italic"}},"Tournament Pending")],-1)),Zt=[Yt],$t={key:1,class:"bg-active d-flex justify-content-center align-items-center"},te=i(()=>t("p",{style:{"font-style":"italic"}},"Tournament live!",-1)),ee=[te],ae={class:"row bg-finished"},oe={class:"col-12 d-flex justify-content-center align-items-center"},ne={key:0},se={class:"finished",style:{"font-style":"italic"}},ie={class:"row bg-cancelled"},le={class:"col-12 d-flex justify-content-center align-items-center"},re={key:0},ce=i(()=>t("p",{style:{"font-style":"italic"}},"CANCELLED",-1)),de=[ce],me={class:"row"},ue={key:0,class:"col-12 col-md-6"},_e={class:"col-12"},he={class:"mb-3 row justify-content-center text-center"},pe=i(()=>t("h1",{class:"glass-container"},"Active players",-1)),be={key:0,class:"row text-center mb-3"},ge=i(()=>t("h1",{class:"fw-normal glass-container"},"Eliminated Players",-1)),fe={class:"row text-center"},ve={class:"fw-normal glass-container"},ye=i(()=>t("div",{class:"col-md-6 text-center"},null,-1)),Te={key:1,class:"col-12 col-md-6 d-flex justify-content-around"},xe=i(()=>t("p",{class:"fs-3 text-center"},"Second place",-1)),we=["src"],ke={class:"fs-3 text-center"},Ce=i(()=>t("p",{class:"fs-3 text-center"},"Third place",-1)),Re=["src"],Ie={class:"fs-3 text-center"},Pe={class:"col-12 col-md-6 p-4 order-1 order-md-2"},De=["src","alt"],Be={key:0,class:"d-flex justify-content-evenly"},Se={key:0},Ae={key:1},Ve={class:"modal fade",id:"editTournamentModal",tabindex:"-1","aria-labelledby":"editTournamentModal","aria-hidden":"true"},Ue={class:"modal-dialog"},Fe={class:"modal-content"},Ee=i(()=>t("div",{class:"modal-header"},[t("h1",{class:"modal-title fs-5",id:"editTournamentLabel"}),t("p",{class:"m-0 fs-1 text-dark"},"Edit Tournament"),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1)),Me={class:"modal-body justify-content-center"},je=i(()=>t("label",{class:"edit-labels",for:"text"},"Tournament Name",-1)),Ne=i(()=>t("label",{class:"edit-labels",for:"text"},"Tournament Avatar Image",-1)),ze=i(()=>t("label",{class:"edit-labels",for:"text"},"Tournament Cover Image",-1)),Le=i(()=>t("label",{class:"edit-labels",for:"text"},"Start Date",-1)),Oe=i(()=>t("label",{class:"edit-labels",for:"text"},"Location",-1)),Ge=i(()=>t("label",{class:"edit-labels",for:"text"},"Total Rounds",-1)),Je=i(()=>t("label",{class:"edit-labels",for:"text"},"Capacity",-1)),qe=i(()=>t("label",{class:"edit-labels",for:"text"},"Match Type",-1)),Qe=i(()=>t("option",{class:"text-dark",selected:"",value:"match",disabled:""},"Match Type",-1)),We=i(()=>t("option",{class:"text-dark",value:"online"},"Online",-1)),Ke=i(()=>t("option",{class:"text-dark",value:"local"},"Local",-1)),He=[Qe,We,Ke],Xe=i(()=>t("label",{class:"edit-labels",for:"text"},"Tournament Description",-1)),Ye=i(()=>t("label",{class:"edit-labels",for:"text"},"Tournament Age Rating",-1)),Ze=i(()=>t("option",{class:"text-dark",value:"Everyone"},"Everyone",-1)),$e=i(()=>t("option",{class:"text-dark",value:"Teen"},"Teen",-1)),ta=i(()=>t("option",{class:"text-dark",value:"Adult"},"Adult",-1)),ea=[Ze,$e,ta],aa=i(()=>t("label",{class:"edit-labels",for:"text label-"},"Max Teams",-1)),oa=i(()=>t("label",{class:"edit-labels",for:"text"},"Tournament GP Prize",-1)),na=i(()=>t("label",{class:"edit-labels",for:"text"},"First Place Badge",-1)),sa=i(()=>t("label",{class:"edit-labels",for:"text"},"Second Place Badge",-1)),ia=i(()=>t("label",{class:"edit-labels",for:"text"},"Third Place Badge",-1)),la=i(()=>t("button",{class:"btn btn-success text-end",type:"submit",role:"button"},"Save Edits",-1)),ra={key:0,class:"container"},ca={class:"row"},da={class:"col-12 text-center glass-container"},ma=i(()=>t("h1",{class:"text-decoration-underline"},"Tournament Management",-1)),ua={class:"fw-light"},_a={class:"row justify-content-between"},ha={class:"col-12 col-md-6 py-1 my-1 glass-container"},pa={class:"d-flex"},ba=["src"],ga={class:"ps-1 my-1"},fa={class:"fs-5"},va={class:"fs-4 fw-light m-0 mt-3"},ya=["onUpdate:modelValue"],Ta=i(()=>t("option",{class:"text-dark",value:"active"},"Active",-1)),xa=i(()=>t("option",{class:"text-dark",value:"eliminated"},"Eliminated",-1)),wa={key:0,class:"text-dark",value:"first"},ka={key:1,class:"text-dark",value:"second"},Ca={key:2,class:"text-dark",value:"third"},Ra={key:0,class:"text-light"},Ia={key:1,class:"input-group mb-2","aria-label":"gp Coins"},Pa=["onUpdate:modelValue"],Da={key:2,class:"text-white"},Ba={key:3,class:"input-group mb-2"},Sa=["onUpdate:modelValue"],Aa=yt('<option value="" data-v-2149bc5f>Select a badge to reward</option><option value="firstPlaceBadge" data-v-2149bc5f>1st place badge</option><option value="secondPlaceBadge" data-v-2149bc5f>2nd Place badge</option><option value="thirdPlaceBadge" data-v-2149bc5f>3rd Place badge</option><option disabled data-v-2149bc5f>-----------------------</option><option value="ruthlessBadge" data-v-2149bc5f>Ruthless badge</option><option value="teamleaderBadge" data-v-2149bc5f>Team leader badge</option><option value="coldBloodedBadge" data-v-2149bc5f>Cold Blooded badge</option><option value="moneyBagsBadge" data-v-2149bc5f>Money Bags badge</option><option value="topSponsorBadge" data-v-2149bc5f>Top Sponsors badge</option>',10),Va=[Aa],Ua={class:"col-12 col-md-6 py-1 my-1 glass-container"},Fa={class:"row"},Ea=["src"],Ma=["onUpdate:modelValue"],ja=i(()=>t("option",{class:"text-dark",value:"active"},"Active",-1)),Na=i(()=>t("option",{class:"text-dark",value:"eliminated"},"Eliminated",-1)),za=[ja,Na],La={class:""},Oa=i(()=>t("div",{class:"row justify-content-center"},null,-1)),Ga={class:"row p-4 bg-dark justify-content-center"},Ja=i(()=>t("h1",{class:"text-center pb-4"},"Tournament comments",-1)),qa={key:0,class:"col-12 col-md-6 card p-1 px-3 rounded-3 elevation-5 comment-area",style:{position:"relative"}},Qa={class:"d-flex align-items-center mb-2"},Wa=["src","alt"],Ka={style:{position:"absolute",top:"-5px",left:"100px"}},Ha=i(()=>t("small",{class:"text-white fw-normal mobile-post-comment",style:{"text-shadow":"1px 1px 1px black",position:"absolute",top:"8px",right:"57px"}},"join the conversation",-1)),Xa={class:"text-end"},Ya={class:"row justify-content-center bg-dark"},Za={class:"row bg-black g-0 sticky-bottom",style:{width:"100%","max-height":"60px"}},$a=i(()=>t("img",{src:"https://th.bing.com/th/id/R.2bc5a9822d665e72c81b61d4b4bb005e?rik=QzK0idJb9fJMqw&riu=http%3a%2f%2ffiles.gamebanana.com%2fimg%2fico%2fsprays%2fkoopa.gif&ehk=P%2bR6goQOAICNSQF%2barcUljvK1EsIlBzWRDFrzjXORa0%3d&risl=&pid=ImgRaw&r=0",class:"img-fluid pb-3",style:{"max-height":"80px"},alt:"mario"},null,-1));function to(g,n,b,e,w,V){var d,T,F,I,z,L,O,G,J,q,Q,W,K,H,X,Y,Z,$,tt,et,at,ot,nt;const R=D("TournamentCountdown"),U=D("ParticipantCard"),v=D("RGBButton"),E=D("CommentCard"),o=D("marquee");return l(),r(C,null,[t("section",wt,[t("div",kt,[(d=e.tournament)!=null&&d.isCancelled?c("",!0):(l(),r("div",Ct,[t("p",Rt,h((T=e.tournament)==null?void 0:T.name)+" ("+h((F=e.tournament)==null?void 0:F.type)+") ",1),e.tournamentStarted?c("",!0):(l(),r("div",It,[t("div",Pt,[t("p",Dt,[B("Location: "),t("span",Bt,h((I=e.tournament)==null?void 0:I.location),1)]),t("p",St,"Date: "+h(e.startDate),1),t("p",At," Time: "+h(e.startTime),1),!e.tournamentStarted&&!e.isFinished?(l(),r("div",Vt,[f(R,{startDate:(z=e.tournament)==null?void 0:z.startDate},null,8,["startDate"])])):c("",!0)])])),e.tournamentStarted&&!e.isFinished?(l(),r("div",Ut,jt)):c("",!0),e.tournament.isFinished==!0?(l(),r("div",Nt,[zt,t("h5",Lt,[B("Congratulations to "),t("span",Ot,h((O=(L=e.first)==null?void 0:L.profile)==null?void 0:O.gamerTag),1),B(" for winning the tournament!")])])):c("",!0),e.isFinished?(l(),r("div",Gt,[t("img",{class:"winner",src:(J=(G=e.first)==null?void 0:G.profile)==null?void 0:J.picture,alt:""},null,8,Jt)])):c("",!0)])),t("div",qt,[t("img",{src:(q=e.tournament)==null?void 0:q.coverImg,alt:(Q=e.tournament)==null?void 0:Q.coverImg,class:"tournament-image",style:{}},null,8,Qt)]),Wt]),t("section",null,[t("div",Kt,[t("div",Ht,[!e.tournamentStarted&&!e.isCancelled&&!e.isFinished?(l(),r("div",Xt,Zt)):e.started&&!e.isFinished?(l(),r("div",$t,ee)):c("",!0)]),t("div",ae,[t("div",oe,[e.tournament.isFinished?(l(),r("div",ne,[t("p",se,"Congratulations "+h((K=(W=e.first)==null?void 0:W.profile)==null?void 0:K.gamerTag),1)])):c("",!0)])]),t("div",ie,[t("div",le,[e.tournament.isCancelled?(l(),r("div",re,de)):c("",!0)])])])]),t("div",me,[e.isFinished?(l(),r("div",Te,[t("div",null,[xe,t("img",{src:(X=(H=e.second)==null?void 0:H.profile)==null?void 0:X.picture,alt:"",class:"winner2"},null,8,we),t("p",ke,h((Z=(Y=e.second)==null?void 0:Y.profile)==null?void 0:Z.gamerTag),1)]),t("div",null,[Ce,t("img",{src:(tt=($=e.third)==null?void 0:$.profile)==null?void 0:tt.picture,alt:"",class:"winner2"},null,8,Re),t("p",Ie,h((at=(et=e.third)==null?void 0:et.profile)==null?void 0:at.gamerTag),1)])])):(l(),r("div",ue,[t("div",_e,[t("div",he,[pe,(l(!0),r(C,null,S(e.activePlayers,a=>(l(),r("div",{class:"col col-md-3 mx-2",key:a.id},[f(U,{participant:a},null,8,["participant"])]))),128))]),e.eliminatedPlayers.length>=1?(l(),r("div",be,[ge,(l(!0),r(C,null,S(e.eliminatedPlayers,a=>(l(),r("div",{class:"col col-md-3 mx-2",key:a.id},[f(U,{participant:a},null,8,["participant"])]))),128))])):c("",!0),t("div",fe,[t("h1",ve,"Round "+h(e.tournament.currentRound)+" / "+h(e.tournament.totalRounds),1),ye])])])),t("div",Pe,[t("img",{src:e.tournament.gameImg,alt:e.tournament.name,class:"game-img rounded-2",style:{}},null,8,De),e.user.isAuthenticated&&!e.isFinished?(l(),r("div",Be,[e.isParticipant?(l(),r("div",Ae,[f(v,{class:"px-2 rgb-btn",buttonText:"Leave Tournament!",onClick:e.leaveTournament},null,8,["onClick"])])):(l(),r("div",Se,[f(v,{class:"px-2 rgb-btn","aria-label":"JoinTournamentButton",buttonText:"Join the Tournament!",onClick:e.joinTournament},null,8,["onClick"])]))])):c("",!0),t("div",Ve,[t("div",Ue,[t("div",Fe,[Ee,t("div",Me,[t("form",{onSubmit:n[15]||(n[15]=it(a=>e.editTournament(),["prevent"])),class:"col-12"},[je,u(t("input",{class:"form-control mb-3",type:"text",placeholder:"Tournament Name","aria-label":"tournament Name","onUpdate:modelValue":n[0]||(n[0]=a=>e.editable.name=a)},null,512),[[p,e.editable.name]]),Ne,u(t("input",{class:"form-control mb-3",type:"text",id:"tournamentAvatarImg","aria-label":"tournament Avatar",placeholder:"Tournament Avatar Image","onUpdate:modelValue":n[1]||(n[1]=a=>e.editable.coverImg=a)},null,512),[[p,e.editable.coverImg]]),ze,u(t("input",{class:"form-control mb-3",type:"text",id:"gameImg",placeholder:"Tournament Cover Image","aria-label":"tournament Cover Image","onUpdate:modelValue":n[2]||(n[2]=a=>e.editable.gameImg=a)},null,512),[[p,e.editable.gameImg]]),Le,u(t("input",{type:"datetime-local",name:"startDate",class:"form-control mb-3",placeholder:"Start Date","aria-label":"Start Date","onUpdate:modelValue":n[3]||(n[3]=a=>e.editable.startDate=a)},null,512),[[p,e.editable.startDate]]),Oe,u(t("input",{class:"form-control mb-3",type:"text",id:"totalRounds",placeholder:"Location","aria-label":"Location","onUpdate:modelValue":n[4]||(n[4]=a=>e.editable.location=a)},null,512),[[p,e.editable.location]]),Ge,u(t("input",{class:"form-control mb-3",type:"text",id:"totalRounds",placeholder:"Total Rounds","aria-label":"Total Rounds","onUpdate:modelValue":n[5]||(n[5]=a=>e.editable.totalRounds=a)},null,512),[[p,e.editable.totalRounds]]),Je,u(t("input",{class:"form-control mb-3",type:"text",id:"capacity",placeholder:"Capacity","aria-label":"Capacity","onUpdate:modelValue":n[6]||(n[6]=a=>e.editable.capacity=a)},null,512),[[p,e.editable.capacity]]),qe,u(t("select",{class:"form-select mb-3","aria-label":"Tournament Type","onUpdate:modelValue":n[7]||(n[7]=a=>e.editable.type=a),style:{"background-color":"white"}},He,512),[[A,e.editable.type]]),Xe,u(t("textarea",{class:"form-control mb-3",id:"tournamentDescription",rows:"3","aria-label":"tournament Description",placeholder:"Tournament Description","onUpdate:modelValue":n[8]||(n[8]=a=>e.editable.description=a)},null,512),[[p,e.editable.description]]),Ye,u(t("select",{class:"form-select mb-3","aria-label":"Tournament Age Rating","onUpdate:modelValue":n[9]||(n[9]=a=>e.editable.ageRating=a),style:{"background-color":"white"}},ea,512),[[A,e.editable.ageRating]]),aa,u(t("input",{class:"form-control mb-3 bg-white",type:"number",placeholder:"Max Teams","aria-label":"max Teams",min:"1","onUpdate:modelValue":n[10]||(n[10]=a=>e.editable.maxTeams=a)},null,512),[[p,e.editable.maxTeams]]),oa,u(t("input",{class:"form-control mb-3 bg-white",type:"text",id:"tournamentMoney",placeholder:"Tournament GP Prize","aria-label":"Tournament Reward Coins","onUpdate:modelValue":n[11]||(n[11]=a=>e.editable.reward=a)},null,512),[[p,e.editable.reward]]),na,u(t("input",{class:"form-control mb-3 bg-white",type:"text",id:"firstPlaceBadge",placeholder:"First Place Badge","aria-label":"First Place Badge","onUpdate:modelValue":n[12]||(n[12]=a=>e.editable.firstPlaceBadge=a)},null,512),[[p,e.editable.firstPlaceBadge]]),sa,u(t("input",{class:"form-control mb-3 bg-white",type:"text",id:"secondPlaceBadge",placeholder:"Second Place Badge","aria-label":"Second Place Badge","onUpdate:modelValue":n[13]||(n[13]=a=>e.editable.secondPlaceBadge=a)},null,512),[[p,e.editable.secondPlaceBadge]]),ia,u(t("input",{class:"form-control mb-3 bg-white",type:"text",id:"thirdPlaceBadge",placeholder:"Third Place Badge","aria-label":"Third Place Badge","onUpdate:modelValue":n[14]||(n[14]=a=>e.editable.thirdPlaceBadge=a)},null,512),[[p,e.editable.thirdPlaceBadge]]),la],32)])])])])])]),e.isTournamentCreator&&!e.isFinished?(l(),r("div",ra,[t("div",ca,[t("div",da,[ma,t("h1",ua,"Round "+h((ot=e.tournament)==null?void 0:ot.currentRound)+" of "+h((nt=e.tournament)==null?void 0:nt.totalRounds),1)])]),t("div",_a,[t("div",ha,[t("form",null,[(l(!0),r(C,null,S(e.activePlayers,(a,rt)=>(l(),r("div",{class:"form-group",key:a.id},[t("div",pa,[t("img",{class:j(["img-fluid pfp-manage",{"player-eliminated":a.status==="eliminated"}]),src:a.profile.picture,alt:""},null,10,ba),t("div",ga,[t("h1",fa,h(a.profile.name),1),t("p",va,[B("Tournament status - "),t("span",{class:j(["fs-5 fw-normal",{"text-success":a.status!=="eliminated","text-danger":a.status==="eliminated"}])},h(a.status),3)])])]),u(t("select",{class:"mb-3 form-select custom-select","onUpdate:modelValue":x=>a.status=x,"aria-label":"player status"},[Ta,xa,e.lastRound?(l(),r("option",wa,"First Place")):c("",!0),e.lastRound?(l(),r("option",ka,"Second Place")):c("",!0),e.lastRound?(l(),r("option",Ca,"Third Place")):c("",!0)],8,ya),[[A,a.status]]),e.lastRound?(l(),r("label",Ra,"Distribute gpCoins")):c("",!0),e.lastRound?(l(),r("div",Ia,[u(t("input",{type:"number",min:"0",class:"form-control",name:"gpPoints","aria-label":"Gp Coins","onUpdate:modelValue":x=>a.gpCoins=x},null,8,Pa),[[p,a.gpCoins]])])):c("",!0),e.lastRound?(l(),r("label",Da,"Select a badge")):c("",!0),e.lastRound?(l(),r("div",Ba,[u(t("select",{class:"form-select custom-select","aria-label":"badge awards","onUpdate:modelValue":x=>a.badge=x},Va,8,Sa),[[A,a.badge]])])):c("",!0)]))),128))])]),t("div",Ua,[t("div",Fa,[(l(!0),r(C,null,S(e.eliminatedPlayers,(a,rt)=>(l(),r("div",{class:"form-group",key:a.id},[t("img",{class:j(["m-1 img-fluid pfp-manage",{"player-eliminated":a.status==="eliminated"}]),src:a.profile.picture,alt:""},null,10,Ea),u(t("select",{class:"mb-3 form-select custom-select","onUpdate:modelValue":x=>a.status=x,"aria-label":"player status"},za,8,Ma),[[A,a.status]])]))),128))]),t("div",La,[e.lastRound?c("",!0):(l(),lt(v,{key:0,onClick:n[16]||(n[16]=a=>e.finalizeRound()),buttonText:"Finalize Round",class:"text-success px-2 rgb-btn"})),e.lastRound?(l(),lt(v,{key:1,onClick:n[17]||(n[17]=a=>e.finalizeTournament()),buttonText:"Finalize Tournament",class:"text-danger px-2 rgb-btn"})):c("",!0),f(v,{class:"px-2 rgb-btn",buttonText:"Cancel Tournament",onClick:e.cancelTournament},null,8,["onClick"]),f(v,{class:"px-2 rgb-btn",buttonText:"Edit Tournament","data-bs-toggle":"modal","data-bs-target":"#editTournamentModal"}),Oa])])])])):c("",!0),t("div",Ga,[Ja,e.user.isAuthenticated?(l(),r("div",qa,[t("form",{onSubmit:n[19]||(n[19]=it(a=>e.createComment(),["prevent"]))},[t("div",Qa,[t("img",{src:e.account.picture,alt:e.account.name,class:"img-fluid img-responsive object-fit-cover rounded-circle me-2 pfp",width:"38",style:{position:"absolute",top:"-46px","box-shadow":"0px 0px 1px 1px white"}},null,8,Wa),t("h3",Ka,h(e.account.name),1),B(),Ha]),t("div",Xa,[u(t("textarea",{style:{"margin-top":"20px"},"onUpdate:modelValue":n[18]||(n[18]=a=>e.commentData=a),class:"text-area w-100 bg-light rounded-3 comment-box text-dark","aria-label":"Text Area"},null,512),[[p,e.commentData]]),f(v,{class:"mobile-rgb",buttonText:"Post Comment",type:"submit"})])],32)])):c("",!0)]),t("div",Ya,[(l(!0),r(C,null,S(e.comments,a=>(l(),r("div",{class:"col-md-7",key:a.id},[f(E,{comment:a},null,8,["comment"])]))),128))])]),t("footer",Za,[f(o,{behavior:"scroll",direction:"right",scrollamount:"5",class:"text-light",style:{width:"100vw","font-size":"2rem","font-weight":"650","font-style":"italic"}},{default:gt(()=>[$a]),_:1})])],64)}const oo=ct(xt,[["render",to],["__scopeId","data-v-2149bc5f"]]);export{oo as default};
