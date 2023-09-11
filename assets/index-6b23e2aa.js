(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();async function A(a){document.title="HOME";const e=JSON.parse(localStorage.getItem("@escolhaUser"))||[];if(e.length===0){var t=document.querySelector(".activeMenu");t&&(t.style.display="none")}return`       
       <comp-menu></comp-menu>
       <comp-slider></comp-slider>
       <comp-colaboradores></comp-colaboradores>
       <comp-button-lateral id="flutuante"> 
       <div id="video"></div>
       </comp-button-lateral>
       <comp-whatsapp class="whatsapp"></comp-whatsapp>
     
       <h1>PROMOÇÃO</h1>
       <comp-produtos width="150" height="250"  id="promocao"> </comp-produtos> 
       <h1>MASSAGENS</h1>
       <comp-produtos  width="200" height="200"  id="massagens"></comp-produtos>
       <h1>PACOTES</h1>
       <comp-produtos width="150" height="250" id="estetica"></comp-produtos>
       <comp-perfoleos link="/#/shop/perfumaria/#oleos"  id="oleos"><h1>ÓLEOS ESSENCIAIS</h1></comp-perfoleos>
       <comp-newsletter></comp-newsletter>
    

       <div id="receberIa"></div>         
     

       <div class="activeMenu" data-href="/#/shop/perfumaria/#carrinho"  >
        <svg data-href="/#/shop/perfumaria/#carrinho"  width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_15_35)" data-href="/#/shop/perfumaria/#carrinho" >
          <rect  data-href="/#/shop/perfumaria/#carrinho"  width="24" height="24" fill="black" rx="4" ry="4"/>
          <path d="M5.33331 6H19.8672C20.4687 6 20.9341 6.52718 20.8595 7.12403L20.1095 13.124C20.0469 13.6245 19.6215 14 19.1172 14H16.5555H9.44442H7.99998" stroke="#ffffff" stroke-linejoin="round"/>
          <path d="M2 4H4.23362C4.68578 4 5.08169 4.30341 5.19924 4.74003L8.30076 16.26C8.41831 16.6966 8.81422 17 9.26638 17H19" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="10" cy="20" r="1" stroke="#ffffff" stroke-linejoin="round"/>
          <circle cx="17.5" cy="20" r="1" stroke="#ffffff" stroke-linejoin="round"/>
          </g>
          <defs>
          <clipPath id="clip0_15_35">
          <rect width="24" height="24" fill="white"/>
          </clipPath>
          </defs>
        </svg>
        <span>${e.length}</span>
      </div>
        
      
      
        `}function N(a){const e=location.hash.split("/").pop().replace("#",""),t=a.Data.dadosC.find(r=>r.id===e);document.title=e;const n=document.querySelector("#app");let o="";return n.addEventListener("click",r=>{if(r.target.id==="horarios"){let s=r.target.value;s==="nove"?o="9:00":s==="treze"?o="13:00":s==="quinza"?o="15:00":s==="quartoze"&&(o="16:00")}if(r.target.id==="entreemcontato"){const s=`https://api.whatsapp.com/send?phone=553171685900&text=
        Colaborador:${t.nome}
        Horario:${o} `;window.open(s,"_blank")}}),`
       <comp-menu></comp-menu>
    
             <div id="perfil">
                 
                    <div id="perfil-img">    
                        <img src="${t.img}" alt="Imagem do colaborado ${t.nome}">                           
                        ${t.nome}
                        <a id="info" href="${t.insta}" target="_blank">@Instagram</a>
                        ${t.funcao}
                                 
                        <h5 id="info">${t.descricao} </h5>
                        ${t.nome==="Viviane"?"Atendimento exclusivo para terapia.":""}
                        
                        <label class="selectPerfil" for="frutas">Escolha o horário:</label>
                        <select id="horarios" name="horarios">
                        ${t.nome==="Alifer"?`
                             <option value="quinza">15:00</option>
                             <option value="quartoze">16:00</option> 
                             <option value="quartoze">18:00</option>`:`
                            <option value="nove">9:00</option>
                            <option value="treze">13:00</option>
                            <option value="quinza">15:00</option>
                            <option value="quartoze">16:00</option>`}
                         
                        </select>

                        <div class="buttonperfilCon" class="buttonperfil">
                        <button id="entreemcontato" url="${t.insta}" class="buttonperfil">
                        <span id="entreemcontato"  class="buttonperfil" id="whats">Entre em contato</span>		
                        </button>                                                    
                    </div>   
                    </div>   
        
            
                
              </div>
    
        `}async function I(a){document.title="PRODUTO",window.scroll(0,0);let e=0,t;const n=location.hash.split("/").pop().replace("#",""),o=a.Data.dadosP.find(s=>s.id===n);return document.querySelector("#app").addEventListener("click",s=>{const m=document.querySelector("#SpanCouter"),g=document.querySelector("#vDoP"),i=document.querySelector("#whats2");if(s.target.className==="infoCotainerButtonsmais"&&(e+=1,h()),s.target.className==="infoCotainerButtonsmenos"&&e>0&&(e-=1,h()),s.target.id==="whats"){const w=`https://api.whatsapp.com/send?phone=553171685900&text= Nome:${o.categoria} Quantidade:${e}, Valor:${t} `;window.open(w,"_blank")}function h(){m.innerHTML=e,t=e*parseFloat(g.innerHTML),i.innerHTML=t}}),`
      <comp-menu></comp-menu>
      <div class="cards">   
        <article class="information">               
          <img class="p-img" src="${o.img}" alt="Produto ${o.nome}">
          <div class="informationDes">
            <div>
              <h3 class="info">${o.nome}</h3>
              <h4 class="info" id="valorDoProduto">R$:<span id="vDoP">${o.valor}</span></h4>
              <p class="info">${o.info}</p>
            </div>
          </div>
        </article> 	
  
        <article class="information2">                  
          <h3 class="title">${o.nome}</h3>
          ${o.categoria==="massagens"?`<div class="information21">A massagem individual sai pelo valor de ${o.valor} reais</div>`:""}
          <div class="information22">O pacote com 4 sessões sai com 15% de desconto.</div>   
          <div class="infoCotainerButtons">
            <div class="infoCotainerButtonsC">
              <div>
                <button class="infoCotainerButtonsmais">+</button>
                <span id="SpanCouter">0</span>
                <button class="infoCotainerButtonsmenos">-</button>
              </div>
              <div>
                <button class="button">
                  <span id="whats">Agende horário <span id="whats2"></span></span>
                </button>
              </div>
            </div>
          </div>
        </article> 	  
      </div>`}function C(){const a=JSON.parse(localStorage.getItem("@escolhaUser"))||[];let e="",t=0,n=0;return a.forEach(m=>{const g=m.nome,i=m.valor,h=m.quantidade;n+=parseFloat(h),t+=parseFloat(i),e+=`Nome: ${g}
Quantidade: ${h}
Valor: R$ ${i}

`}),e+=`Valor Total: R$ ${t.toFixed(2)}
`,document.querySelector("#QTVT").innerText=`QT: ${n} VT: ${t}`,`https://wa.me/3171253590?text=${encodeURIComponent(e)}`}async function _(a){if(location.hash.split("#").pop()==="carrinho")JSON.parse(localStorage.getItem("@escolhaUser"));else{const t=a.Data.dadosP.filter(n=>n.categoria===location.hash.split("#").pop());a.Data.dadosP.filter(n=>n.categoria==="oleos")}function e(){document.querySelector("#valor").addEventListener("click",t=>{t.target.getAttribute("key")==="pegarValorEPassarParaWhatsapp"&&window.open(C(),"_blank")}),C()}return Emitter.on("state",e),`       
        <comp-menu></comp-menu>
        <div class="container-shop">
        <comp-card-prod></comp-card-prod>
        <button id="valor" key="pegarValorEPassarParaWhatsapp">
        <div key="pegarValorEPassarParaWhatsapp">
        <span id="QTVT" key="pegarValorEPassarParaWhatsapp"></span>              
        </div>
        </button>
      
        </div>
        
    `}async function j(){return`       
        <comp-menu></comp-menu>
        <div class="Loja">       
        <comp-perfoleos a="/#/shop/perfumaria/#oleos" width="80px"  height="80px"  id="oleos"></comp-perfoleos>  
        <comp-perfoleos a="/#/shop/perfumaria/#oleos" width="80px"  height="80px"  id="oleos"></comp-perfoleos>  
       </div>
        
    `}async function D(a){return{html:()=>` <div class="wrapper">
  <header>
    <h1>File Downloader</h1>
    <p>Paste url of image, video, or pdf to download. This tool is made with vanilla javascript.</p>
  </header>
  <form action="#">
    <input type="url" placeholder="Paste file url" required>
    <button>Download File</button>
  </form>
</div>`,state:()=>{const n=document.querySelector("input"),o=document.querySelector("button");o.addEventListener("click",s=>{s.preventDefault(),o.innerText="Downloading file...",r(n.value)});function r(s){fetch(s).then(m=>m.blob()).then(m=>{let g=URL.createObjectURL(m);const i=document.createElement("a");i.href=g,i.download=s.replace(/^.*[\\\/]/,""),document.body.appendChild(i),i.click(),o.innerText="Download File",URL.revokeObjectURL(g),i.remove()}).catch(()=>{alert("Failed to download file!"),o.innerText="Download File"})}}}}const R={home:A,perfil:N,produto:I,shop:j,perfumaria:_,teste:D};async function B(){const a=await useCSVToJSON("/data/massagens/massagens.csv");return{dadosC:await useCSVToJSON("/data/colaboradores/colaboradores.csv"),dadosP:a}}async function U(){return`   
    <nav > 
    <label class="logo"> <img data-href="/#/home/" src="/img/logo/logo22.png" width="50px" height="50px" alt="Logo"></label>
    <input type="checkbox" id="check">
    <label for="check" class="checkbtn">
      &#x2630
    </label>
  
    <ul>
         <li><a class="active" data-href="/#/home/">Início</a></li> 
         <li><a class="active" data-href="/#/shop/">Shop</a></li> 
         <li><a class="active" data-href="/#/shop/perfumaria/#carrinho">Carrinho</a></li> 
    </ul>

  </nav>


  `}function H({tag:a}){let e=0;a.addEventListener("click",n=>{n.target.id==="prevBtn"&&t(-1),n.target.id==="nextBtn"&&t(1)});function t(n){const o=document.getElementsByClassName("mySlides");e=(e+n+o.length)%o.length;for(const r of o)r.style.display="none";o[e].style.display="block"}return`
    <div class="slideshow-container">
      <button class="prev" id="prevBtn">&#10094;</button>
      <img style="display: block" class="mySlides" src="/img/slide/bannerPro.png" alt="Slider 1 promoções">
      <img class="mySlides" src="/img/slide/bannerr.png" alt="Slider 1 Novidades">
      <img class="mySlides" src="/img/slide/banner.png" alt="Slider 1 Sobre nós">
      <button class="next" id="nextBtn">&#10095;</button>      
    </div>`}async function M(a){return`
      <div class="home-cards-container-colaborado">     
        <div class="home-img-colaboradores">
          ${a.Data.dadosC.map(e=>`      
                <a href="/#/perfil/#${e.id}">
                  <img src="${e.img}"  id="colaborador-${e.id}" src="" width="100%" height="100%" alt="Dados Usuários">
                </a>
         
            `).join("")}
        </div>
      </div>
    `}async function V(){return`
    <form class="card-newsletter" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScjalDXW7rDe411G6pGQ3ITXVuK4UxBRoATRGMECWwDiMA_hw/formResponse">
   <span class="card__title-newsletter">Inscreva-se</span>
   <p class="card__content-newsletter">Deixe o seu e-mail para você receber as novidades...
   </p>
   <div class="card__form-newsletter">
     <input placeholder="E-mail" name="entry.2146642346" type="text">
     <button class="sign-up">Inscreva-se</button>
   </div>
   <br>
  </form>
   `}async function J({tag:a,Data:e}){const t=e.dadosP.filter(s=>s.categoria===a.id),n=a.getAttribute("width"),o=a.getAttribute("height");return`
    <div class="home-img-cards">
      <div class="home-img-colob-scroll">
        ${t.map(s=>`
    <a href="/#/produto/#${s.id.replace(/\s+/g,"").toLowerCase()}">
      <img
        id="${s.id}"
        class="home-img-card"
        src="${s.img}"
        alt="${s.nome}"
        width="${n}"
        height="${o}"
      />
    </a>`).join("")}
      </div>
    </div>
  `}async function z({tag:a,Data:e}){const t=e.dadosP.filter(s=>s.categoria===a.id).slice(0,4),n=a.getAttribute("width"),o=a.getAttribute("height"),r=a.getAttribute("link");return`
    <div class="perfu-container">
      <div class="perfu-container-cor">
      <div class="perfu-container-conteudo">   
        ${t.map(s=>`     
        <a href="${r}" >
        <img style="width:${n}; height:${o}  " class="comp-perfoleos-tamanho" id="${s.id}" src="${s.img}" alt="Dados Oléos">
          </a>
        `).join("")}
      </div>
      <div>
    </div>
  `}function W({tag:a}){let e=!1;return a.addEventListener("click",()=>{const t=document.querySelector("#video");if(e)t.innerHTML="";else{const n=`
        <video autoplay id="videoPalyPause" width="90%" height="210">
          <source src="/video/spa.mp4" type="video/mp4">
        </video>
      `;t.innerHTML=n}e=!e}),`
  
         <div id="tres-pontos" key="id">                
           <span></span>
           <span></span>
           <span></span>         
        </div>`}async function Q(){return`
    <a class="whatsapp" href="https://api.whatsapp.com/send?phone=553171685900&text=OI" target="_blank">
    <img src="/img/icones/whats.png" width="40px" height="40px" alt="whatsapp">
   </a>
`}function G({tag:a,Data:e}){let t;if(location.hash.split("#").pop()==="carrinho")t=JSON.parse(localStorage.getItem("@escolhaUser"))||[];else{const r=e.dadosP.filter(s=>s.categoria===location.hash.split("#").pop());t=e.dadosP.filter(s=>s.categoria==="oleos")||r}const n=JSON.parse(localStorage.getItem("@escolhaUser"))||[],o=()=>{document.querySelectorAll(".imgOleos").forEach(i=>{i.addEventListener("click",()=>{s(i)})});function s(i){document.fullscreenElement?g():m(i)}function m(i){i.requestFullscreen?i.requestFullscreen():i.mozRequestFullScreen?i.mozRequestFullScreen():i.webkitRequestFullscreen?i.webkitRequestFullscreen():i.msRequestFullscreen&&i.msRequestFullscreen()}function g(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()}document.querySelectorAll(".shop-container-card").forEach(i=>{const h=n.find(l=>l.id===i.id);let w=0;h&&h.quantidade&&(w=h.quantidade);const x=i.querySelector("#mais"),O=i.querySelector("#menos"),c=i.querySelector("#counter");c.textContent=w,x.addEventListener("click",l=>{w++,c.textContent=w;const p=t.find(f=>f.id===l.target.parentNode.parentNode.id),d=n.find(f=>f.id===p.id);d?(d.valor=parseFloat(d.valor)+parseFloat(p.valor),d.quantidade=(d.quantidade||0)+1):(p.quantidade=1,n.push(p)),localStorage.setItem("@escolhaUser",JSON.stringify(n)),C()}),O.addEventListener("click",l=>{w>0&&(w--,c.textContent=w);const p=t.find(f=>f.id===l.target.parentNode.parentNode.id),d=n.find(f=>f.id===p.id);if(d&&(d.valor=parseFloat(d.valor)-parseFloat(p.valor),d.quantidade=(d.quantidade||0)-1,d.quantidade<=0)){const f=n.indexOf(d);n.splice(f,1)}localStorage.setItem("@escolhaUser",JSON.stringify(n)),C()})})};return Emitter.on("state",o),` 
    <div class="container-shop-cards">
    ${t.map((r,s)=>`
        <div class="shop-container-card" id="${r.id}">           
            <img  class="imgOleos" src="${r.img}" width="140" alt="Carrinho e produtos">                
            <h4>${r.nome}</h4>
            <div>
                <button id="mais" class="perfumaria-container-card-button">+</button>
                <span id="counter">0</span>
                <button id="menos" class="perfumaria-container-card-button">-</button>
            </div>            
        </div>
    `).join("")}
</div>

`}const K={"comp-menu":U,"comp-slider":H,"comp-colaboradores":M,"comp-newsletter":V,"comp-produtos":J,"comp-perfoleos":z,"comp-button-lateral":W,"comp-whatsapp":Q,"comp-card-prod":G},k={},q=document.querySelector("#app");function X(a,e,t){if(a==="get")return JSON.parse(window.localStorage.getItem(e));if(a==="setItem")window.localStorage.setItem(e,JSON.stringify(t));else if(a==="setItems"){const n=JSON.parse(localStorage.getItem(e)||"[]");n.push(t),localStorage.setItem(e,JSON.stringify(n))}}async function Y(){async function a(){return new Promise((e,t)=>{if(navigator.geolocation)navigator.geolocation.getCurrentPosition(n=>{const o=n.coords.latitude,r=n.coords.longitude;e({latitude:o,longitude:r})},n=>{t(n)});else{const n=new Error("Geolocation is not supported by this browser.");t(n)}})}try{const{latitude:e,longitude:t}=await a();return[e,t]}catch(e){return console.log("Erro ao obter localização:",e.message),[null,null]}}async function Z(a,e){history.pushState(null,null,a),F({Pages:e})}async function ee(a){try{const t=new TextEncoder().encode(a),n=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(n)).map(s=>s.toString(16).padStart(2,"0")).join("")}catch(e){throw new Error("Erro ao criptografar a senha: "+e)}}async function te(a,e){const o=(await(await fetch(a,{headers:{ct:e}})).text()).split(`
`),r=o[0].split(";");return o.slice(1).map(s=>s.split(";").reduce((m,g,i)=>{const h={};return h[r[i]]=g,{...m,...h}},{}))}function oe(a,e){return[e.join(","),...a.map(t=>e.map(n=>t[n]||"").join(","))].join(`
`)}const y={events:{},on(a,e){y.events[a]=y.events[a]||[],y.events[a].push(e)},emit(a,...e){if(!(a in y.events))return;const t=[];if(y.events[a].forEach(n=>{const o=n(...e);o!==void 0&&t.push(o)}),t.length>0)return t}},F=async(a={},e={})=>{const{Pages:t={},Components:n={},Data:o={}}=a,{Path:r,Fetch:s}=e,m=()=>{const c=location.hash.replace("#","")||location.pathname;return c==="/"?Object.keys(t)[0]:c.split("#")[0].split("/").filter(Boolean).pop()},g=async c=>{const{componentKey:l,pathComp:p,dataApp:d}=c;let f;if(k[l])f=await k[l](d);else{const E=await fetch(`${location.origin}/${p}/${l}.js`);if(!E.ok)throw new Error("Failed to fetch page content");const P=await E.text(),u=Function("return "+P)();f=await u(d),k[l]=u}return f};async function i(){const c=m(),l=c&&t[c]?c:"erro";if(l==="erro")x(t);else{const p={Data:o};let d;s?(console.log("Alifer"),d=await g({componentKey:l,pathComp:r||"pages",dataApp:p})):d=t[c](p),q.innerHTML=await d,h()}}async function h(){const c=async u=>{const b=u.tagName.toLowerCase(),v={componentKey:b,parameter:Object.fromEntries(new URLSearchParams(location.href.split("?")[1]).entries()),Data:o,tag:u},S=u.hasAttribute("Fetch"),T=u.getAttribute("Path");try{if(b){let $;S?$=await g({componentKey:b,pathComp:T||"components",dataApp:v}):$=await n[b](v),typeof $=="string"&&(u.innerHTML+=$)}else throw new Error(`Componente não encontrado para a tag: ${b}`)}catch($){console.error("Erro ao processar componente:",$)}await l(u)},l=async u=>{const b=Array.from(u.querySelectorAll("*")).filter(v=>v.tagName.toLowerCase().match(/^comp-/i));for(let v=0;v<b.length;v++){const S=b[v];await c(S)}},p=Array.from(document.querySelectorAll("*")).filter(u=>u.tagName.toLowerCase().match("-")),d=[],f=new IntersectionObserver(async function(u,b){const v=u[0];if(v.isIntersecting){await c(v.target),b.unobserve(v.target);const S=E();S&&b.observe(S),y.emit("state")}});function E(){for(const u of p)if(!d.includes(u))return d.push(u),u;return null}const P=E();P&&f.observe(P)}function w(c,l){let p;return function(...d){clearTimeout(p),p=setTimeout(()=>{c.apply(this,d)},l)}}function x(c){q.innerHTML=`
    <div class="erroPages">
      ${Object.keys(c).map((l,p)=>`<a class="pointer" id="${p}"  data-href="${s?"/#/":""}${l}">${l.toUpperCase()}</a>`).join("")}
    </div>
  `}function O(c){if(c.target.href||c.target.matches("[data-href]")){c.preventDefault();let l;c.target.href?l=c.target.href:c.target.matches("[data-href]")&&(l=c.target.dataset.href),history.pushState(null,null,l),i()}}window.addEventListener("popstate",i),document.body.addEventListener("click",w(O,200)),i()},L=Object.freeze(Object.defineProperty({__proto__:null,Emitter:y,Router:F,useCSVToJSON:te,useId:ee,useJSONToCSV:oe,useLocalStorage:X,useLocation:Y,useNavigate:Z},Symbol.toStringTag,{value:"Module"}));Object.keys(L).forEach(a=>{window[a]=L[a]});async function ae(){const a=await B();Router({Pages:R,Components:K,Data:a})}ae();
