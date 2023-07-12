(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();async function C(a){return document.title="HOME",{html:()=>`       
       <comp-menu></comp-menu>
       <comp-slider></comp-slider>
       <comp-colaboradores id="oliveira"></comp-colaboradores>    
       <h1>PROMOÇÃO</h1>
       <comp-produtos id="promocao"> </comp-produtos>
       <h1>MASSAGENS</h1>
       <comp-produtos id="massagens"></comp-produtos>
        <h1>PACOTES</h1>
       <comp-produtos id="estetica"></comp-produtos>
       <comp-perfoleos a="/#/shop/perfumaria/#oleos"  id="oleos">ÓLEOS ESSENCIAIS</comp-perfoleos>
       <comp-newsletter></comp-newsletter>
       <comp-whatsapp class="whatsapp"></comp-whatsapp>
       <comp-mascoteia></comp-mascoteia>

       <comp-mascote-ia id="comp-mascote-ia" style="display: none"></comp-mascote-ia>
       <div id="receberIa"></div>    

  
       <comp-button-lateral id="comp-flutuante"> </comp-button-lateral>
       <div id="comp-video"></div>

    
      
     
 
      
      
        `,state:()=>{const t=document.querySelector("#tres-pontos"),s=document.querySelector("#comp-video");let o=!1;t.addEventListener("click",()=>{if(o)s.innerHTML="",o=!1;else{const r='<iframe enablejsapi="1" id="videoPalyPause" allow="autoplay" width="250" height="400" src="https://www.youtube.com/embed/6eEhPOCN7iA" title="Florecer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';s.innerHTML=r,o=!0}});const i=$(".SairIa"),c=$("#comp-mascote-ia").tag();i.on("click",()=>{c.style.display=c.style.display==="none"?"block":"none"});function d(){const r=$("#tres-pontos");let g;window.addEventListener("scroll",function(){clearTimeout(g),r.show(),g=setTimeout(function(){r.hide()},4e3)})}d()}}}function P(a){const e=location.hash.split("/").pop().replace("#",""),n=a.Data.dadosC.find(s=>s.id===e);return document.title=e,{html:()=>`
       <comp-menu></comp-menu>
    
             <div id="perfil">
             <h1>QUEM SOU EU</h1>
            <div id="perfil-img">    
                <img img-src="${n.img}" width="150">
                <h3>${n.nome}</h3>
                <a href="${n.insta}" target="_blank">@Instagram</a>
                <h4>${n.funcao} </h4>
               <h5>${n.descricao} </h5>
            </div>  
       
        
          
     
      

        </div>
    
        `}}async function T(a){document.title="PRODUTO",window.scroll(0,0);const e=location.hash.split("/").pop().replace("#",""),n=a.Data.dadosP.find(o=>o.id===e);return{state:()=>{const o=`https://api.whatsapp.com/send?phone=553171685900&text= 🠖 Queria saber sobre a ${e} `;$(".button").on("click",i=>{i.target.id==="whats"&&window.open(o,"_blank")})},html:()=>`
        <comp-menu></comp-menu>
		<div class="cards">   
            <article class="information">
                <h2 class="title">${n.nome}</h2>
                 <img class="p-img" img-src="${n.img}" width= 280>
                 <p class="info">${n.info}</p>
                    <button class="button">
                    <span id="whats">Agende ➞</span>		
                </button>
            </article> 	    	 
            <article class="information2" ${n.categoria==="estetica"||n.categoria==="promocao"?'style="display: none;"':""}>                  
                <h3 class="title">${n.nome}</h3>
                 <div class="information21">A massagem individual sai pelo valor de ${n.valor} reais </div>       
                 <div class="information22">O pacote com 4 sessões sai com 15% de desconto.</div>          
            </article> 	  
            
            
        </div>
    

	   `}}async function A(a){return{state:()=>{const t=document.getElementById("Região"),s=document.getElementById("select-regiao"),o=`
        <select class="opcoes" id="localSuperior">
            <option value="opcao1">Pescoço</option>
            <option value="opcao2">Ombros</option>   
            <option value="opcao3">Costas</option> 
            <option value="opcao4">Braços</option> 
        </select>
        `;s.innerHTML=o,t.addEventListener("change",i=>{const c=t.value;c==="opcao1"?s.innerHTML=o:c==="opcao2"&&(s.innerHTML=`
            <select class="opcoes" id="localInferior">
                <option value="opcao1">Pernas</option>
                <option value="opcao2">Glúteos</option>   
                <option value="opcao3">Pés</option> 
            </select>
            `)})},html:()=>`       
       <comp-menu></comp-menu>
       <div class="per-container">
        <h3>Personaliza seu pacote</h3>

        <select class="opcoes" id="massagem">
        <option value="opcao1">Massagem terapêutica</option>
        <option value="opcao2">Massagem Modeladora</option>
        <option value="opcao3">Massagem Despotiva</option>
        </select>

        <select class="opcoes" id="Região">
        <option value="opcao1"selected>Região Superior</option>
        <option value="opcao2">Região inferior</option>   
        </select>

        <div class="select-regiao" id="select-regiao"></div>

      
        `}}async function N(a){const e=a.Data.dadosP.filter(o=>o.categoria===location.hash.split("#").pop()),n=a.Data.dadosP.filter(o=>o.categoria==="oleos")||e;return{state:()=>{const o=JSON.parse(localStorage.getItem("@escolhaUser"))||[];document.querySelectorAll(".perfumaria-container-card").forEach(c=>{const d=o.find(u=>u.id===c.id);let r=0;d&&d.quantidade&&(r=d.quantidade);const g=c.querySelector("#mais"),E=c.querySelector("#menos"),p=c.querySelector("#counter");p.textContent=r,g.addEventListener("click",u=>{r++,p.textContent=r;const m=e.find(f=>f.id===u.target.parentNode.parentNode.id),l=o.find(f=>f.id===m.id);l?(l.valor=parseFloat(l.valor)+parseFloat(m.valor),l.quantidade=(l.quantidade||0)+1):(m.quantidade=1,o.push(m)),localStorage.setItem("@escolhaUser",JSON.stringify(o)),i()}),E.addEventListener("click",u=>{r>0&&(r--,p.textContent=r);const m=e.find(f=>f.id===u.target.parentNode.parentNode.id),l=o.find(f=>f.id===m.id);if(l&&(l.valor=parseFloat(l.valor)-parseFloat(m.valor),l.quantidade=(l.quantidade||0)-1,l.quantidade<=0)){const f=o.indexOf(l);o.splice(f,1)}localStorage.setItem("@escolhaUser",JSON.stringify(o)),i()})});function i(){let c="",d=0,r=0;return o.forEach(u=>{const m=u.nome,l=u.valor,f=u.quantidade;r+=parseFloat(f),d+=parseFloat(l),c+=`Nome: ${m}
Quantidade: ${f}
Valor: R$ ${l}

`}),c+=`Valor Total: R$ ${d.toFixed(2)}
`,document.querySelector("#QTVT").innerHTML=`QT: ${r} VT: ${d}`,`https://wa.me/3171253590?text=${encodeURIComponent(c)}`}i(),document.querySelector("#valor").addEventListener("click",c=>{c.target.getAttribute("key")==="pegarValorEPassarParaWhatsapp"&&window.open(i(),"_blank")})},html:()=>`       
        <comp-menu></comp-menu>
        <div class="perfumaria-container">
            <div class="perfumaria-container-cards">
                ${n.map((o,i)=>`
                    <div class="perfumaria-container-card" id="${o.id}">           
                        <img img-src="${o.img}" width="150">
                        <h4>${o.nome}</h4>
                        <div>
                            <button id="mais" class="perfumaria-container-card-button">+</button>
                            <span id="counter">0</span>
                            <button id="menos" class="perfumaria-container-card-button">-</button>
                        </div>            
                    </div>
                `).join("")}
            </div>

            <button id="valor" key="pegarValorEPassarParaWhatsapp">
                <div key="pegarValorEPassarParaWhatsapp">
                <span id="QTVT" key="pegarValorEPassarParaWhatsapp"></span>              
                </div>
            </button>
      
        </div>
        
    `}}async function D(){return{html:()=>`       
        <comp-menu></comp-menu>
        <div class="perfumaria-container">       
        <comp-perfoleos a="/#/shop/perfumaria/#oleos" width="80px"  height="80px"  id="oleos"></comp-perfoleos>  
    </div>
        
    `}}const q={home:C,perfil:P,produto:T,personalizado:A,shop:D,perfumaria:N};async function M(a){return a.tag.addEventListener("click",t=>{console.log(t.target)}),{html:()=>`   
    <nav id="${a.attributes.id}"> 
    <label class="logo"> <img data-href="/#/home/" img-src="/img/logo/logo22.png" width="70px" height="70px" alt="Logo"></label>
    <input type="checkbox" id="check">
    <label for="check" class="checkbtn">
      &#x2630
    </label>
  
    <ul>
         <li><a class="active" data-href="/#/home/">Início</a></li> 
         <li><a class="active" data-href="/#/personalizado/">personalizado</a></li> 
         <li><a class="active" data-href="/#/shop/">Shop</a></li> 
    </ul>

  </nav>


  `,state:()=>{}}}function j(a){return{html:()=>`
    <div class="slideshow-container">
      <button class="prev" id="prevBtn">&#10094;</button>
      <img class="mySlides" img-src="/img/slide/banner.png">
      <img class="mySlides"img-src="/img/slide/bannerr.png">
      <img class="mySlides" img-src="/img/slide/bannerrr.png">
      <button class="next" id="nextBtn">&#10095;</button>      
    </div>`,state:()=>{let t=0;c(t);const s=document.getElementById("prevBtn"),o=document.getElementById("nextBtn");s.addEventListener("click",function(){i(-1)}),o.addEventListener("click",function(){i(1)});function i(d){c(t+=d)}function c(d){const r=document.getElementsByClassName("mySlides");if(r.length!==0){t=(d+r.length)%r.length;for(let g=0;g<r.length;g++)r[g].style.display="none";r[t].style.display="block"}}}}}async function k(a){return{html:()=>`
      <div class="home-cards-container">     
        <div class="home-img-colaboradores">
          ${a.Data.dadosC.map(t=>`      
                <a href="/#/perfil/#${t.id}">
                  <img img-src="${t.img}"  id="colaborador-${t.id}" src="" width="50px" height="50px" alt="Dados Usuários">
                </a>
         
            `).join("")}
        </div>
      </div>
    `,state:()=>{}}}async function B(a){const e=a.Data.dadosP.filter(t=>t.categoria===a.attributes.id);return{html:()=>`
      
        <div class="home-img-cards">      
          <div  class="home-img-colob-scroll">
          ${Object.entries(e).map(([o,i])=>`
      <img data-href="/#/produto/#${i.id.split(" ").join("").toLowerCase()}"
           id="${i.id}"
           class="home-img-card"
           img-src="${i.img}"
           alt="${i.nome}" width="150px" height="250px" alt="Produtos">
          `).join("")}
         </div>
        </div>
    
    `}}async function _(){return{html:()=>`
    <form class="card-newsletter" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScjalDXW7rDe411G6pGQ3ITXVuK4UxBRoATRGMECWwDiMA_hw/formResponse">
   <span class="card__title-newsletter">Escreva-se</span>
   <p class="card__content-newsletter">Deixe o seu e-mail para você receber as novidades...
   </p>
   <div class="card__form-newsletter">
     <input placeholder="E-mail" name="entry.2146642346" type="text">
     <button class="sign-up">Escrever-se</button>
   </div>
   <br>
  </form>
   `}}async function R(){return{html:()=>`
    <a class="whatsapp" href="https://api.whatsapp.com/send?phone=553171685900&text=OI" target="_blank">
    <img img-src="/img/icones/whats.png" width="40px" height="40px" alt="whatsapp">
   </a>
`}}async function H(){return{html:()=>`  
      <comp-menu> </comp-menu>
      <div class="containerbatepapo">      
       <div id="bate-papo">
        <img img-src="/img/icones/mascote.png" width="40">
        <h1>Perguntas e Respostas</h1>     
        </div>
        <label class="ia-label" for="question">Digite sua pergunta:</label>
        <input type="text" id="question">
        <button id="submitBtn">Enviar</button>
        <div class="output">
          <p id="response"></p>
        </div>
      </div> `}}async function U(a){return{html:()=>`  
    
      <img class="SairIa" img-src="/img/icones/mascote.png"  alt="Mascote"  width="40px" height="50px">
   
 `}}async function J(a){const e=a.Data.dadosP.filter(t=>t.categoria===a.attributes.id);return{html:()=>`
    <div class="perfu-container">
      <div class="perfu-container-cor">
      <div class="perfu-container-conteudo">
        <h2>${a.content}</h2>
        ${e.map(t=>`     
        <a href="${a.attributes.a}" >
        <img style="width:${a.attributes.useWidth}; height:${a.attributes.useHeight}  " class="comp-perfoleos-tamanho" id="${t.id}" img-src="${t.img}" alt="Dados Usuários">
          </a>
        `).join("")}
      </div>
      <div>
    </div>
  `}}function V(){return{html:()=>`
  
         <div id="tres-pontos" key="id">                
           <span></span>
           <span></span>
           <span></span>         
        </div>`}}const W={"comp-menu":M,"comp-slider":j,"comp-colaboradores":k,"comp-produtos":B,"comp-newsletter":_,"comp-whatsapp":R,"comp-mascoteia":U,"comp-mascote-ia":H,"comp-perfoleos":J,"comp-button-lateral":V};async function F(){const a=await useCSVToJSON("/data/massagens/massagens.csv");return{dadosC:await useCSVToJSON("/data/colaboradores/colaboradores.csv"),dadosP:a}}document.querySelector("#app");document.querySelector("style");async function z(a={}){const{url:e,method:n,useType:t,cacheDuration:s}=a,o=`${e}_${n}_${t}`,i=localStorage.getItem(o);if(i){const{data:c,timestamp:d}=JSON.parse(i),r=new Date().getTime(),g=s*24*60*60*1e3;if(r-d<g)return c;localStorage.removeItem(o)}try{const c=await fetch(e,n);let d;t==="text"?d=await c.text():t==="json"&&(d=await c.json());const r={data:d,timestamp:new Date().getTime()};return localStorage.setItem(o,JSON.stringify(r)),d}catch{return null}}function Q(a,e,n){if(a==="getItem")return JSON.parse(window.localStorage.getItem(e));if(a==="setItem")window.localStorage.setItem(e,JSON.stringify(n));else if(a==="setItems"){const t=JSON.parse(localStorage.getItem(e)||"[]");t.push(n),localStorage.setItem(e,JSON.stringify(t))}}async function G(){async function a(){return new Promise((e,n)=>{if(navigator.geolocation)navigator.geolocation.getCurrentPosition(t=>{const s=t.coords.latitude,o=t.coords.longitude;e({latitude:s,longitude:o})},t=>{n(t)});else{const t=new Error("Geolocation is not supported by this browser.");n(t)}})}try{const{latitude:e,longitude:n}=await a();return[e,n]}catch(e){return console.log("Erro ao obter localização:",e.message),[null,null]}}async function K(a,e){history.pushState(null,null,a),I(e)}async function X(a){try{const n=new TextEncoder().encode(a),t=await crypto.subtle.digest("SHA-256",n);return Array.from(new Uint8Array(t)).map(i=>i.toString(16).padStart(2,"0")).join("")}catch(e){throw new Error("Erro ao criptografar a senha: "+e)}}async function Y(a,e){const s=(await(await fetch(a,{headers:{ct:e}})).text()).split(`
`),o=s[0].split(";");return s.slice(1).map(i=>i.split(";").reduce((c,d,r)=>{const g={};return g[o[r]]=d,{...c,...g}},{}))}function Z(a,e){return[e.join(","),...a.map(n=>e.map(t=>n[t]||"").join(","))].join(`
`)}const tt=a=>{const e=document.querySelectorAll(a);if(e.length===0)return a;const n={addClass:t=>(e.forEach(s=>{s.classList.add(t)}),n),removeClass:t=>(e.forEach(s=>{s.classList.remove(t)}),n),text:t=>(e.forEach(s=>{s.textContent=t}),n),css:t=>(e.forEach(s=>{Object.assign(s.style,t)}),n),on:(t,s)=>(e.forEach(o=>{o.addEventListener(t,s)}),n),appendImage:t=>(e.forEach(s=>{const o=document.createElement("img");o.src=t,s.appendChild(o)}),n),hide:()=>(e.forEach(t=>{t.style.originalDisplay=t.style.display,t.style.display="none"}),n),show:()=>(e.forEach(t=>{t.style.display=t.style.originalDisplay||"",delete t.style.originalDisplay}),n),tag:()=>e[0],tags:()=>e};return n},I=async(a={},e={})=>{const n=document.querySelector("#app"),[t,s,o]=Object.values(a),i=async()=>{const p=document.getElementsByTagName("img"),u=new IntersectionObserver(function(m,l){m.forEach(function(f){if(f.isIntersecting){const y=f.target,h=y.getAttribute("img-src");y.setAttribute("src",h),y.removeAttribute("img-src"),l.unobserve(y)}})});Array.from(p).forEach(function(m){u.observe(m)})},c=()=>{const p=location.hash.replace("#","")||location.pathname;return p==="/"?Object.keys(t)[0]:p.split("#")[0].split("/").filter(Boolean).pop()};async function d(p={}){let u=[];const m=document.createElement("div");m.insertAdjacentHTML("beforeend",p.renderedHtml);const l=async(h,b)=>{const v=Array.from(h.getAttributeNames()).reduce((S,w)=>w.startsWith("data-")?S:{...S,[w]:h.getAttribute(w)},{}),x={reference:b,nameTag:h.tagName.toLowerCase(),attributes:v,parameter:Object.fromEntries(new URLSearchParams(location.href.split("?")[1]).entries()),page:location.hash.replace("#","").match(/^\/(\w+)(\/)?/),content:h.textContent,Data:o,tag:h},L=h.tagName.toLowerCase();if(s.hasOwnProperty(L)){const{html:S,state:w}=await s[L](x);typeof S=="function"&&(h.innerHTML+=S()),typeof w=="function"&&u.push(w)}else throw new Error(`Componente não encontrado para a tag: ${L}`);await f(h)},f=async h=>{const b=Array.from(h.querySelectorAll("*")).filter(v=>v.tagName.toLowerCase().match(/^comp-/i));for(let v=0;v<b.length;v++){const x=b[v];await l(x)}},y=Array.from(m.querySelectorAll("*")).filter(h=>h.tagName.toLowerCase().match(/^comp-/i));for(let h=0;h<y.length;h++){const b=y[h];await l(b)}n.innerHTML="",n.innerHTML=m.innerHTML,u.forEach(h=>h()),typeof p.renderState=="function"&&p.renderState(),i()}async function r(){const p=c(),u=p&&t[p]?p:"erro";if(u!=="erro"){const m={Pages:t,Components:s,Data:o},{html:l,state:f}=await t[u](m),y=typeof l=="function"?l():await t[u]();d({renderedHtml:y,renderState:typeof f=="function"?f:void 0})}}function g(p,u){let m;return function(...l){clearTimeout(m),m=setTimeout(()=>{p.apply(this,l)},u)}}function E(p){if(p.target.matches("[data-href]")){p.preventDefault();const u=p.target.dataset.href;history.pushState(null,null,u),r()}}window.addEventListener("popstate",r),document.body.addEventListener("click",g(E,200)),r()},O=Object.freeze(Object.defineProperty({__proto__:null,$:tt,Router:I,useApi:z,useCSVToJSON:Y,useId:X,useJSONToCSV:Z,useLocalStorage:Q,useLocation:G,useNavigate:K},Symbol.toStringTag,{value:"Module"}));Object.keys(O).forEach(a=>{typeof O[a]=="function"&&(window[a]=O[a])});async function et(){const a=await F(),e={path:location.origin};Router({pages:q,components:W,data:a},e)}et();
