let s=document.createElement("style");s.innerHTML="",document.head.appendChild(s);import{e as a,g as i,q as e,d as t,h as l,p as r,u as n,c as o,a as c,t as u,k as p,b as d,x as v,o as f}from"./index.7a49f057.js";function h(s){const t=a({});async function l(){const a=await async function(s){return e.get("/profiles/"+s).then(s=>s.profile)}(s);Object.assign(t,a)}return i(()=>{l()}),{profile:t}}var m=t({name:"Profile",setup(){const s=r(),a=n(),i=l(()=>a.params.username),{profile:e}=h(i.value);return{profile:e,isUserAuthorized:l(()=>null!==s.state.user)}}});const g={class:"profile-page"},b={class:"user-info"},y={class:"container"},w={class:"row"},k={class:"col-xs-12 col-md-10 offset-md-1"},x={key:0},A={key:1,class:"btn btn-sm btn-outline-secondary action-btn"},j=c("i",{class:"ion-plus-round"},null,-1),T=v('<div class="container"><div class="row"><div class="col-xs-12 col-md-10 offset-md-1"><div class="articles-toggle"><ul class="nav nav-pills outline-active"><li class="nav-item"><a class="nav-link active" href="">My Articles</a></li><li class="nav-item"><a class="nav-link" href="">Favorited Articles</a></li></ul></div><div class="article-preview"><div class="article-meta"><a href=""><img src="http://i.imgur.com/Qr71crq.jpg"></a><div class="info"><a href="" class="author">Eric Simons</a><span class="date">January 20th</span></div><button class="btn btn-outline-primary btn-sm pull-xs-right"><i class="ion-heart"></i> 29 </button></div><a href="" class="preview-link"><h1>How to build webapps that scale</h1><p>This is the description for the post.</p><span>Read more...</span></a></div><div class="article-preview"><div class="article-meta"><a href=""><img src="http://i.imgur.com/N4VcUeJ.jpg"></a><div class="info"><a href="" class="author">Albert Pai</a><span class="date">January 20th</span></div><button class="btn btn-outline-primary btn-sm pull-xs-right"><i class="ion-heart"></i> 32 </button></div><a href="" class="preview-link"><h1>The song you won&#39;t ever stop singing. No matter how hard you try.</h1><p>This is the description for the post.</p><span>Read more...</span><ul class="tag-list"><li class="tag-default tag-pill tag-outline">Music</li><li class="tag-default tag-pill tag-outline">Song</li></ul></a></div></div></div></div>',1);m.render=function(s,a,i,e,t,l){return f(),o("div",g,[c("div",b,[c("div",y,[c("div",w,[c("div",k,[c("img",{src:s.profile.image,class:"user-img"},null,8,["src"]),c("h4",null,u(s.profile.username),1),s.profile.bio?(f(),o("p",x,u(s.profile.bio),1)):p("v-if",!0),s.isUserAuthorized?(f(),o("button",A,[j,d("   Follow "+u(s.profile.username),1)])):p("v-if",!0)])])])]),T])},m.__file="src/pages/Profile.vue";export default m;