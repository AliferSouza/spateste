(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const E=document.querySelector("#app"),A={},S={};let x=[];function M(a,o){if(typeof a=="function"){const e=a.name;S[e]?S[e].includes(a)||S[e].push(a):S[e]=[a]}else S[a]?S[a].includes(o)||S[a].push(o):S[a]=[o]}function j(a,...o){if(S[a]){const e=S[a].map(s=>s(...o)).filter(s=>s!==void 0);return e.length>0?e:""}return""}async function L(a){history.pushState(null,null,a),C()}const R=a=>{let o=a;const e=[];return[()=>o,i=>{o=i,e.forEach(v=>v())},i=>e.push(i)]},C=async(a={})=>{x.length===0&&x.push(a);const{Pages:o={},Components:e={},Data:s={},Config:t={}}=x[0],r=()=>{const n=location.hash.replace("#","")||location.pathname;return n==="/"?Object.keys(o)[0]:n.split("/").filter(Boolean)[0]},i=async n=>{const{componentKey:m,PathPageComp:g,dataApp:d}=n;let y;if(A[m])y=await A[m](d);else{const p=await fetch(`${location.origin}/${g}/${m}.js`);if(!p.ok)throw new Error("Failed to fetch page content");const c=await p.text(),f=Function("return "+c)();y=await f(d),A[m]=f}return y};async function v(){const n=r();(o[n]?o[n]:"erro")==="erro"?u(o):(E.innerHTML=await o[n](s),j(n),b())}async function b(){const n=async c=>{const f=c.tagName.toLowerCase(),O={componentKey:f,parameter:Object.fromEntries(new URLSearchParams(location.href.split("?")[1]).entries()),Data:s,tag:c},w=c.hasAttribute("Fetch"),$=c.getAttribute("Path");try{let P=await(w?i({componentKey:f,PathPageComp:$||"components",dataApp:O}):e[f](O));typeof P=="string"&&await P!==void 0&&(c.innerHTML+=P,j(f))}catch(P){console.error("Erro ao processar componente:",P)}await m(c)},m=async c=>{const f=Array.from(c.querySelectorAll("*")).filter(O=>O.tagName.toLowerCase().match(/^comp-/i));for(let O=0;O<f.length;O++){const w=f[O];await n(w)}},g=[];Array.from(document.querySelectorAll("*")).forEach(c=>{const f=c.tagName.includes("-"),O=c.hasAttribute("priority");f&&(O?n(c):g.push(c))});const d=new Set,y=new IntersectionObserver(async(c,f)=>{const O=c.find(w=>w.isIntersecting);if(O){const{target:w}=O;await n(w),f.unobserve(w);const $=g.find(P=>!d.has(P));$&&d.add($)&&f.observe($)}}),p=g.find(c=>!d.has(c));p&&d.add(p)&&y.observe(p)}function l(n,m){let g;return function(...d){clearTimeout(g),g=setTimeout(()=>{n.apply(this,d)},m)}}function u(n){E.innerHTML=`
    <div class="erroPages">
      ${Object.keys(n).map((m,g)=>`<a class="pointer" id="${g}"  data-href="/#/${m}">${m.toUpperCase()}</a>`).join("")}
    </div>
  `}function h(n){if(n.target.href||n.target.matches("[data-href]")){n.preventDefault();let m;n.target.href?m=n.target.href:n.target.matches("[data-href]")&&(m=n.target.dataset.href),history.pushState(null,null,m),v()}}window.addEventListener("popstate",v),document.body.addEventListener("click",l(h,200)),v()},q=Object.freeze(Object.defineProperty({__proto__:null,Router:C,emit:j,on:M,useNavigate:L,useState:R},Symbol.toStringTag,{value:"Module"}));function I(a){const o=location.hash.split("/").pop()||location.pathname.split("/").pop(),e=a.colaboradores.find(t=>t.id===o);return document.title=o.toLocaleUpperCase(),document.querySelector("#app").addEventListener("click",t=>{t.target.id==="horarios"&&t.target.value}),`
      
    <menu-principal></menu-principal>
    
             <div id="perfil">
                 
                    <div id="perfil-img">    
                        <img src="${e.img}" alt="Imagem do colaborado ${e.nome}">                           
                        ${e.nome}
                        <a id="info" href="${e.insta}" target="_blank">@Instagram</a>
                        ${e.funcao}
                                 
                        <h5 id="info">${e.descricao} </h5>
                        ${e.nome==="Viviane"?"Atendimento exclusivo para terapia.":""}
                        
                        ${e.nome==="Viviane"||e.nome==="Alifer"?`
                        <button id="entreemcontato" url="${e.insta}" class="buttonperfil">
                        <span data-href="/#/agenda/"  id="entreemcontato"  class="buttonperfil" id="whats">Agende um horário</span>		
                        </button>  `:""}

                    

                    </div>   
                    </div>   
        
            
                
              </div>
    
        `}async function _(a){document.title="PRODUTO",window.scroll(0,0);let o=0;const e=a.massagens.find(t=>t.id===location.hash.split("/").pop());document.querySelector("#app").addEventListener("click",t=>{t.target.id==="mais"&&o<1/0?o+=1:t.target.id==="menos"&&o>0?o-=1:t.target.id==="whats"&&useNavigate(`/agenda/?nome=${e.nome}&Quantidade=${o}&total=${o*parseFloat(e.valor)}&tempo=${e.tempo}`),s()});function s(){const t=document.querySelector("#SpanCouter"),r=document.querySelector("#whats2");t.innerHTML=o,r.innerHTML=o*parseFloat(e.valor)}return`
     <menu-principal></menu-principal>
     <div class="conteiner_page_produto"> 
       <div class="conteiner_page_produto_conteiner"> 
         <img class="p-img" src="${e.img}" alt="Produto ${e.nome}">
         <article class="information2">       
           <div class="informationDes">
             <div>
               <h3 class="info">${e.nome}</h3>
               <h4 class="info" id="valorDoProduto">R$:<span id="vDoP">${e.valor}</span></h4>
               <p class="info">${e.info}</p>
             </div>
           </div>           
           <h3 class="title">${e.nome}</h3>
           ${e.categoria==="massagens"?`<div class="information21">A massagem individual sai pelo valor de ${e.valor} reais</div>`:""}
           <div class="information22">O pacote com 4 sessões sai com 15% de desconto.</div>   
           <div class="infoCotainerButtons">
             <div class="infoCotainerButtonsC">
               <div>
                 <button id="mais" class="infoCotainerButtonsmaismenos">+</button>
                 <span id="SpanCouter">0</span>
                 <button id="menos" class="infoCotainerButtonsmaismenos">-</button>
               </div>
               <div>
                 <button class="button">
                   <span id="whats">Agende horário <span id="whats2"></span></span>
                 </button>
               </div>
             </div>
           </div>
         </article> 	  
       </div>
     </div>`}async function F(){const a=new URLSearchParams(location.search),o=Object.fromEntries(a);return on("agenda",()=>{const e=document.getElementById("horario"),s=document.getElementById("nome"),t=document.getElementById("telefone"),r=document.getElementById("selecao-nome"),i=document.getElementById("agendar"),v=document.querySelector(".agendamentos"),b=document.getElementById("data");for(let u=7;u<=20;u++)e.innerHTML+=`<option value="${u}:00">${u}:00</option>`;i.addEventListener("click",function(){if(![s,t,r,e,b].every(d=>d.value.trim()!=="")){alert("Todos os campos devem ser preenchidos.");return}const h=JSON.parse(localStorage.getItem("agendamentos"))||[],n=b.value,m=e.value;if(h.some(d=>d.data===n&&d.horario===m)){alert("Horário já agendado para o mesmo dia.");return}const g={nome:s.value,telefone:t.value,selecaoNome:r.value,horario:m,data:n,...o};h.push(g),localStorage.setItem("agendamentos",JSON.stringify(h)),l(b.value),s.value="",t.value="",r.value="",e.value="",b.value=""}),b.addEventListener("change",function(){l(b.value)});function l(u){v.innerHTML="",(JSON.parse(localStorage.getItem("agendamentos"))||[]).forEach(n=>{if(n.data===u){const m=document.createElement("div");m.textContent=`Data: ${n.data} - Horário inicio: ${n.horario} Fim ${parseInt(n.horario.split(":")[0],10)+parseFloat(n.tempo)}:00`,v.appendChild(m)}})}l(b.value)}),on("pix",e=>{var s=e.querySelector("span").innerText;navigator.clipboard.writeText(s).catch(console.error)}),`   
     <div class="agendamento-container">


        <div class="agendamento-form">
            <h1>AGENDAMENTO</h1>
            <div class="agendamento-form-imputs">      
                <input type="text" id="nome" placeholder="Nome" required>      
                <input type="text" id="telefone" placeholder="Telefone" required>
            </div>

        
            <select id="selecao-nome" required>
                <option value="">Terapeutas</option>
                <option value="Alifer">Alifer</option>
                <option value="Viviane">Viviane</option>
            </select>
            
            <select id="horario" required>
                <option value="">Horário</option>       
            </select>     

            <input class="agendamento-form-data" type="date" id="data" value="${new Date().toISOString().split("T")[0]}">


            <button id="agendar">Agendar</button>
            <div class="agendamentos"></div>
            <div onclick="emit('pix', this)" class="pix">PIX  <span> 065.555.0001-58 </span> clique para copiar</div>
        </div>


    </div>

  
  `}async function T(a){return on("state",()=>{document.querySelector("#valor").addEventListener("click",o=>{o.target.getAttribute("key")==="pegarValorEPassarParaWhatsapp"&&window.open(pegarIntensDoBancoLocalParaAtualizarCompEEnviaWhatsapp(),"_blank")}),pegarIntensDoBancoLocalParaAtualizarCompEEnviaWhatsapp()}),`       
        <menu-principal></menu-principal>
        <div class="container-shop">
        <comp-card-prod class="container-shop-cards"></comp-card-prod>
        <button id="valor" key="pegarValorEPassarParaWhatsapp">
        <div key="pegarValorEPassarParaWhatsapp">
        <span id="QTVT" key="pegarValorEPassarParaWhatsapp"></span>              
        </div>
        </button>
      
        </div>
        
    `}function k(){return window.scroll(0,0),document.title="NOVO",`
          <menu-principal></menu-principal>
    <div class="flex center containe_pricipal">
       <div class="novo_cotainer">

  

          <comp-slider></comp-slider>

          <comp-colaboradores></comp-colaboradores>

          <comp-button-lateral  id="flutuante"> 
          <div id="video"></div>
          </comp-button-lateral>  

          
          <card-product id="promocao" width="100" height="120"></card-product>

          <card-product id="massagens" width="100" height="100"></card-product>

          <card-product id="estetica" width="120" height="180"></card-product>

          <comp-whatsapp priority  class="whatsapp"></comp-whatsapp>

          <comp-newsletter priority class="card-newsletter"  id="news latter"></comp-newsletter>
          
          
      </div>
    </div>
    `}const D={home:k,perfil:I,produto:_,agenda:F,shop:T};async function B(){const a=JSON.parse(localStorage.getItem("@escolhaUser"))||[];if(a.length===0){var o=document.querySelector(".activeMenu");o&&(o.style.display="none")}return`   
    <nav > 
    <label class="logo"> <img data-href="/#/home/" src="/img/logo/logo22.png" width="50px" height="50px" alt="Logo"></label>
    <input type="checkbox" id="check">
    <label for="check" class="checkbtn">
      &#x2630
    </label>
  
    <ul>
         <li><a class="active" data-href="/#/home/">Início</a></li> 
         <li><a class="active" data-href="/#/shop/">Shop</a></li> 
         <li><a class="active" data-href="/#/shop/perfumaria/#carrinho">Carrinho <span style="color: red">${a.length}</span></a></li> 
    </ul>

  </nav>


  `}function z({tag:a}){let o=0;a.addEventListener("click",s=>{s.target.id==="prevBtn"&&e(-1),s.target.id==="nextBtn"&&e(1)});function e(s){const t=document.getElementsByClassName("mySlides");o=(o+s+t.length)%t.length;for(const r of t)r.style.display="none";t[o].style.display="block"}return`
    <div class="slideshow-container">
      <button class="prev" id="prevBtn">&#10094;</button>
      <img style="display: block" class="mySlides" src="/img/slide/bannerPro.png" alt="Slider 1 promoções">
      <img class="mySlides" src="/img/slide/bannerr.png" alt="Slider 1 Novidades">
      <img class="mySlides" src="/img/slide/banner.png" alt="Slider 1 Sobre nós">
      <button class="next" id="nextBtn">&#10095;</button>      
    </div>`}async function U(a){return`
      <div class="home-cards-container-colaborado">     
        <div class="home-img-colaboradores">
          ${a.Data.colaboradores.map(o=>` <img data-href="/perfil/${o.id}" src="${o.img}"  id="colaborador-${o.id}" width="50" height="50" alt="Dados Usuários">`)}
        </div>
      </div>
    `}async function V(){return`
    <form  action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScjalDXW7rDe411G6pGQ3ITXVuK4UxBRoATRGMECWwDiMA_hw/formResponse">
   <span class="card__title-newsletter">Inscreva-se</span>
   <p class="card__content-newsletter">Deixe o seu e-mail para você receber as novidades...
   </p>
   <div class="card__form-newsletter">
     <input placeholder="E-mail" name="entry.2146642346" type="text">
     <button class="sign-up">Inscreva-se</button>
   </div>
   <br>
  </form>
   `}async function H(){return`
    <a class="whatsapp" href="https://api.whatsapp.com/send?phone=553171685900&text=OI" target="_blank">
    <img src="/img/icones/whats.png" width="40px" height="40px" alt="whatsapp">
   </a>
`}async function G({tag:a,Data:o}){const e=o.massagens.filter(i=>i.categoria===a.id).slice(0,4),s=a.getAttribute("width"),t=a.getAttribute("height"),r=a.getAttribute("link");return`
    <div class="perfu-container">
      <div class="perfu-container-cor">
      <div class="perfu-container-conteudo">   
        ${e.map(i=>`     
        <a href="${r}" >
        <img style="width:${s}; height:${t}  " class="comp-perfoleos-tamanho" id="${i.id}" src="${i.img}" alt="Dados Oléos">
          </a>
        `).join("")}
      </div>
      <div>
    </div>
  `}async function W({tag:a,Data:o}){const e=o.massagens.filter(i=>i.categoria===a.id),s=a.getAttribute("width"),t=a.getAttribute("height");return`
    <div class="home-img-cards">
      <div class="home-img-colob-scroll">
        ${e.map(i=>`
    <a href="/#/produto/${i.id}">
      <img
        id="${i.id}"
        class="home-img-card"
        src="${i.img}"
        alt="${i.nome}"
        width="${s}"
        height="${t}"
      />
    </a>`).join("")}
      </div>
    </div>
  `}function J({tag:a}){let o=!1;return a.addEventListener("click",()=>{const e=document.querySelector("#video");if(o)e.innerHTML="";else{const s=`
        <video autoplay id="videoPalyPause" width="90%" height="210">
          <source src="/video/spa.mp4" type="video/mp4">
        </video>
      `;e.innerHTML=s}o=!o}),`
  
         <div id="tres-pontos" key="id">                
           <span></span>
           <span></span>
           <span></span>         
        </div>`}function N(){const a=JSON.parse(localStorage.getItem("@escolhaUser"))||[];let o="",e=0,s=0;return a.forEach(v=>{const b=v.nome,l=v.valor,u=v.quantidade;s+=parseFloat(u),e+=parseFloat(l),o+=`Nome: ${b}
Quantidade: ${u}
Valor: R$ ${l}

`}),o+=`Valor Total: R$ ${e.toFixed(2)}
`,document.querySelector("#QTVT").innerText=`QT: ${s} VT: ${e}`,`https://wa.me/3171253590?text=${encodeURIComponent(o)}`}function Q({tag:a,Data:o}){let e;if(location.hash.split("#").pop()==="carrinho")e=JSON.parse(localStorage.getItem("@escolhaUser"))||[];else{const r=o.massagens.filter(i=>i.categoria===location.hash.split("#").pop());e=o.massagens.filter(i=>i.categoria==="oleos")||r}const s=JSON.parse(localStorage.getItem("@escolhaUser"))||[],t=()=>{document.querySelectorAll(".imgOleos").forEach(l=>{l.addEventListener("click",()=>{i(l)})});function i(l){document.fullscreenElement?b():v(l)}function v(l){l.requestFullscreen?l.requestFullscreen():l.mozRequestFullScreen?l.mozRequestFullScreen():l.webkitRequestFullscreen?l.webkitRequestFullscreen():l.msRequestFullscreen&&l.msRequestFullscreen()}function b(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()}document.querySelectorAll(".shop-container-card").forEach(l=>{const u=s.find(d=>d.id===l.id);let h=0;u&&u.quantidade&&(h=u.quantidade);const n=l.querySelector("#mais"),m=l.querySelector("#menos"),g=l.querySelector("#counter");g.textContent=h,n.addEventListener("click",d=>{h++,g.textContent=h;const y=e.find(c=>c.id===d.target.parentNode.parentNode.id),p=s.find(c=>c.id===y.id);p?(p.valor=parseFloat(p.valor)+parseFloat(y.valor),p.quantidade=(p.quantidade||0)+1):(y.quantidade=1,s.push(y)),localStorage.setItem("@escolhaUser",JSON.stringify(s)),emit("menu-principal"),N()}),m.addEventListener("click",d=>{h>0&&(h--,g.textContent=h);const y=e.find(c=>c.id===d.target.parentNode.parentNode.id),p=s.find(c=>c.id===y.id);if(p&&(p.valor=parseFloat(p.valor)-parseFloat(y.valor),p.quantidade=(p.quantidade||0)-1,p.quantidade<=0)){const c=s.indexOf(p);s.splice(c,1)}localStorage.setItem("@escolhaUser",JSON.stringify(s)),emit("menu-principal"),N()})})};return on("comp-card-prod",t),` 
   
    ${e.map((r,i)=>`
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
-

`}async function K({tag:a,Data:o}){const e=o.massagens.filter(i=>i.categoria===a.id),s=a.getAttribute("width"),t=a.getAttribute("height"),r=()=>e.map(i=>`<img data-href="/#/produto/${i.id}" src="${i.img}" width="${s}" height="${t}"  alt="${i.categoria}">`).join("");return`
         <div class="container_produtos">
          <div class="container_produtos_title">
            <h2>${a.id.toUpperCase()}</h2>
            <h2>➜</h2>
          </div>

          <div class="container_produtos_produtos">
            <div>
              ${r()}
            </div>
          </div>
        </div

  `}async function X({tag:a}){return on("menu-principal",()=>{const o=JSON.parse(localStorage.getItem("@escolhaUser"))||[];var e=a.querySelector("#menu-carrinho");o.length===0?e&&(e.style.display="none"):e.innerHTML=o.length}),a.addEventListener("click",o=>{const e=a.querySelector(".menu-oculto");e.classList.contains("menu-mostrar")?(e.classList.remove("menu-mostrar"),o.innerText=String.fromCharCode(8801)):(e.classList.add("menu-mostrar"),o.innerText=String.fromCharCode(215))}),`   
        <div class="menu">
          <img data-href="/#/home/" src="/img/logo/logo22.png" width="50px" height="50px" alt="Logo">
          <label onclick="emit('openMenu', this)">&#8801</label>     
        </div>


        <div class="menu-oculto">                  
          <a class="active" data-href="/#/home/">Início</a>
          <a class="active" data-href="/#/shop/">Shop</a> 
          <a class="active" data-href="/#/shop/#carrinho">Carrinho <span id="menu-carrinho" style="color: red"></span></a>       
        </div>
        


  `}const Y={"comp-menu":B,"comp-slider":z,"comp-colaboradores":U,"comp-produtos":W,"comp-newsletter":V,"comp-whatsapp":H,"comp-perfoleos":G,"comp-button-lateral":J,"comp-card-prod":Q,"card-product":K,"menu-principal":X},Z=[{id:"vivi",nome:"Viviane",img:"/img/colaboradores/vivi.jpg",insta:"https://www.instagram.com/viviane.snt_/",funcao:"Como psicanalista e massoterapeuta",descricao:"Minha missão é ajudar as pessoas a encontrar equilíbrio emocional e físico. Através da psicanálise, busco compreender os aspectos inconscientes da mente enquanto como massoterapeuta aplico técnicas de massagem para promover relaxamento e alívio físico. Meu objetivo é oferecer um espaço seguro e acolhedor para meus clientes explorarem suas emoções e alcançarem um bem-estar integral"},{id:"alifer",nome:"Alifer",img:"/img/colaboradores/alifer.jpg",insta:"https://www.instagram.com/alifer_oliveira_souza/",funcao:"Como massoterapeuta desportivo",descricao:"Minha missão é proporcionar relaxamento, alívio da dor e bem-estar aos atletas e indivíduos envolvidos em atividades físicas intensas. Utilizo técnicas especializadas de massagem desportiva adaptando cada sessão às necessidades específicas do cliente. Meu objetivo é melhorar o desempenho esportivo, prevenir lesões, acelerar a recuperação muscular e promover a saúde geral. Através de manipulações específicas, alongamentos e liberação miofascial, ajudo os atletas a alcançarem seu potencial máximo e a se manterem em forma física ideal. Estou comprometido em cuidar dos atletas, oferecendo orientações sobre autocuidado e práticas saudáveis. Busco equilibrar o bem-estar e o desempenho esportivo dos meus clientes para que possam alcançar seus objetivos com sucesso e se manterem saudáveis a longo prazo"},{id:"lest",nome:"Leticia",img:"/img/colaboradores/lest.jpg",insta:"https://www.instagram.com/_drac_lb/",funcao:"Como atendente",descricao:"Meu papel é proporcionar uma experiência positiva aos clientes. Sou a primeira pessoa com quem eles interagem e busco oferecer um atendimento acolhedor e eficiente. Escuto atentamente suas necessidades, respondo às perguntas e forneço informações relevantes. Meu objetivo é criar um ambiente amigável e profissional onde os clientes se sintam valorizados e satisfeitos. Estou comprometido em superar as expectativas e garantir que cada interação seja memorável"}],ee=[{id:"pai",categoria:"proximoano",nome:"Pacote: limpeza de pele mais massagem",img:"/img/promoções/0.jpeg",info:"Experimente nosso pacote de limpeza de pele com massagem desportiva ou terapêutica. Agende sua consulta hoje mesmo para relaxar e cuidar da sua pele. Desfrute dos benefícios para o seu bem-estar.",color:"e29595",valor:169,tempo:1,null:"","":""},{id:"massagemrelaxante",categoria:"massagens",nome:"Massagem Relaxante",img:"/img/massagens/Slide1.PNG",info:"Usando-se de movimentos leves, a massagem relaxante é uma excelente alternativa para o tratamento de dores musculares. Geralmente causadas por estresse, problemas de postura ou movimentos repetitivos, esses hábitos são prejudiciais, resultando em diferentes doenças. Dessa maneira, ela é uma ferramenta que promove o bem-estar, aliviando o desconforto das regiões mais afetadas",color:"#2d1341",valor:"99,00",tempo:1,null:"","":""},{id:"drenagemlinfatica",categoria:"massagens",nome:"Drenagem linfatica",img:"/img/massagens/Slide6.PNG",info:"A drenagem linfática manual é um tipo de massagem corporal que serve para ajudar o corpo a eliminar o excesso de líquidos e toxinas, facilitando o tratamento da celulite, inchaço ou linfedema, e sendo também muito utilizada no pós-operatório de cirurgias, principalmente da cirurgia plástica.",color:"#8ca78a",valor:110,tempo:"00",null:1,"":""},{id:"massagemmodeladora",categoria:"massagens",nome:"Massagem Modeladora",img:"/img/massagens/Slide9.PNG",info:"A massagem modeladora é uma técnica que utiliza movimentos manuais intensos e profundos, com o objetivo de reorganizar as camadas de gordura, promovendo a harmonização dos contornos corporais. Além disso, quando aplicada com a técnica correta, pode auxiliar na redução de medidas e na retenção de líquidos",color:"#837043",valor:"110,00",tempo:1,null:"","":""},{id:"liberacaomiofascial",categoria:"massagens",nome:"Liberação Miofascial",img:"/img/massagens/Slide3.PNG",info:"A liberação miofascial é um procedimento que visa amenizar as dores musculares causadas por tensão. Por meio de pressão sobre o local da dor, realizada manualmente ou com o aporte de rolos, a terapia previne lesões e contribui para o tratamento de graves patologias musculoesqueléticas.",color:"#1E3319",valor:"110,00",tempo:1,null:"","":""},{id:"pedrasquentes",categoria:"massagens",nome:"Pedras Quentes",img:"/img/massagens/Slide2.PNG",info:"A massagem com pedras quentes é uma terapia milenar, já utilizada pelos chineses, monges budistas e indígenas em seus rituais sagrados e de cura. A aplicação da pedra de tamanho e formato adequados, com a pressão e manipulação correta pelo terapeuta, proporciona os efeitos benéficos dessa massagem, desencadeando sua ação terapêutica.",color:"#626262",valor:"110,000",tempo:1,null:"","":""},{id:"bambuterapia",categoria:"massagens",nome:"Bambuterapia",img:"/img/massagens/Slide4.PNG",info:"A bambuterapia é uma técnica de massagem em que são utilizadas hastes de bambu (de diferentes tamanhos e espessuras) que se “encaixam” de acordo com a região do corpo em que são aplicadas, podendo gerar benefícios estéticos (como diminuição da celulite, por exemplo) e/ou terapêuticos (como relaxamento, entre outros). Conheça as particularidades da técnica, suas vantagens e contraindicações.",color:"#704400",valor:"110,00",tempo:1,null:"","":""},{id:"massagemcomvelas",categoria:"massagens",nome:"Massagem com velas",img:"/img/massagens/Slide7.PNG",info:"A massagem com velas é uma técnica de massagem americana que está sendo muito utilizada nas grandes clínicas e spas, denominada como Melted Candle (significa “velas derretidas”).",color:"#e1e1e1",valor:"110,00",tempo:1,null:"","":""},{id:"1",categoria:"promocao",nome:"PROMOÇÃO",img:"/img/promoções/1.jpeg",info:"Aproveite nossas promoções especiais! Neste mês",color:"#e29595",valor:"99,99",tempo:1,null:"","":""},{id:"2",categoria:"promocao",nome:"PROMOÇÃO",img:"/img/promoções/2.jpeg",info:"Aproveite nossas promoções especiais! Neste mês",color:"#e29595",valor:"99,99",tempo:1,null:"","":""},{id:"3",categoria:"promocao",nome:"PROMOÇÃO",img:"/img/promoções/3.jpeg",info:"Aproveite nossas promoções especiais! Neste mês",color:"#e29595",valor:"89,99",tempo:1,null:"","":""},{id:"4",categoria:"promocao",nome:"PROMOÇÃO",img:"/img/promoções/4.jpeg",info:"Aproveite nossas promoções especiais! Neste mês",color:"#e29595",valor:"89,99",tempo:1,null:"","":""},{id:"5",categoria:"promocao",nome:"PROMOÇÃO",img:"/img/promoções/5.jpeg",info:"Aproveite nossas promoções especiais! Neste mês",color:"#e29595",valor:"99,99",tempo:1,null:"","":""},{id:"6",categoria:"promocao",nome:"PROMOÇÃO",img:"/img/promoções/6.jpeg",info:"Aproveite nossas promoções especiais! Neste mês",color:"#e29595",valor:"79,99",tempo:1,null:"","":""},{id:"7",categoria:"promocao",nome:"PROMOÇÃO",img:"/img/promoções/7.jpeg",info:"Aproveite nossas promoções especiais! Neste mês",color:"#e29595",valor:"89,99",tempo:1,null:"","":""},{id:"8",categoria:"promocao",nome:"PROMOÇÃO",img:"/img/promoções/8.jpeg",info:"Aproveite nossas promoções especiais! Neste mês",color:"#e29595",valor:"89,99",tempo:1,null:"","":""},{id:"9",categoria:"promocao",nome:"PROMOÇÃO",img:"/img/promoções/9.jpeg",info:"Aproveite nossas promoções especiais! Neste mês",color:"#e29595",valor:"89,99",tempo:1,null:"","":""},{id:"10",categoria:"promocao",nome:"PROMOÇÃO",img:"/img/promoções/10.jpeg",info:"Aproveite nossas promoções especiais! Neste mês",color:"#e29595",valor:"89,99",tempo:1,null:"","":""},{id:"11",categoria:"promocao",nome:"PROMOÇÃO",img:"/img/promoções/11.jpeg",info:"Aproveite nossas promoções especiais! Neste mês",color:"#e29595",valor:"99,99",tempo:1,null:"","":""},{id:"12",categoria:"promocao",nome:"PROMOÇÃO",img:"/img/promoções/12.jpeg",info:"Aproveite nossas promoções especiais! Neste mês",color:"#e29595",valor:"99,99",tempo:1,null:"","":""},{id:"13",categoria:"promocao",nome:"PROMOÇÃO",img:"/img/promoções/13.jpeg",info:"Aproveite nossas promoções especiais! Neste mês",color:"#e29595",valor:"89,99",tempo:1,null:"","":""},{id:"14",categoria:"promocao",nome:"PROMOÇÃO",img:"/img/promoções/14.jpeg",info:"Aproveite nossas promoções especiais! Neste mês",color:"#e29595",valor:"89,99",tempo:1,null:"","":""},{id:"15",categoria:"promocao",nome:"PROMOÇÃO",img:"/img/promoções/15.jpeg",info:"Aproveite nossas promoções especiais! Neste mês",color:"#e29595",valor:"99,99",tempo:1,null:"","":""},{id:"16",categoria:"promocao",nome:"PROMOÇÃO",img:"/img/promoções/16.jpeg",info:"Aproveite nossas promoções especiais! Neste mês",color:"#e29595",valor:"99,99",tempo:1,null:"","":""},{id:"17",categoria:"promocao",nome:"PROMOÇÃO",img:"/img/promoções/17.jpeg",info:"Aproveite nossas promoções especiais! Neste mês",color:"#e29595",valor:"99,99",tempo:1,null:"","":""},{id:"18",categoria:"promocao",nome:"PROMOÇÃO",img:"/img/promoções/18.jpeg",info:"Aproveite nossas promoções especiais! Neste mês",color:"#e29595",valor:"99,99",tempo:1,null:"","":""},{id:"pillingneffetiti",categoria:"estetica",nome:"Pelling Neffertiti",img:"/img/estetica/01.jpeg",info:"",color:"#e29595",valor:"120,00",tempo:1,null:"","":""},{id:"pillingegipicio",categoria:"estetica",nome:"Pilling Egipicio",img:"/img/estetica/02.jpeg",info:"",color:"#e29595",valor:"95,00",tempo:1,null:"","":""},{id:"altafrequecia",categoria:"estetica",nome:"Alta Frequêcia",img:"/img/estetica/03.jpeg",info:"",color:"#e29595",valor:"160,00",tempo:"",null:"","":""},{id:"dermaplaning",categoria:"estetica",nome:"Dermaplaning",img:"/img/estetica/04.jpeg",info:"",color:"#e29595",valor:"160,00",tempo:1,null:"","":""},{id:"antiacne",categoria:"estetica",nome:"Anti Acne",img:"/img/estetica/05.jpeg",info:"",color:"#e29595",valor:"160,00",tempo:1,null:"","":""},{id:"peelingdedadyagaucrania",categoria:"estetica",nome:"Peeling de Dadyaga Ucrânia",img:"/img/estetica/06.jpeg",info:"",color:"#e29595",valor:"110,00",tempo:1,null:"","":""},{id:"tratamentomelasma",categoria:"estetica",nome:"Tratamento Melasma",img:"/img/estetica/07.jpeg",info:"",color:"#e29595",valor:"250,00",tempo:1,null:"","":""},{id:"lavanda",categoria:"oleos",nome:"Lavanda",img:"/img/oleos/p1.jpeg",info:"",color:"#e29595",valor:40,tempo:1,null:"","":""},{id:"teatree",categoria:"oleos",nome:"Tea tree",img:"/img/oleos/p2.jpeg",info:"",color:"#e29595",valor:40,tempo:1,null:"","":""},{id:"laranjadoce",categoria:"oleos",nome:"Laranja Doce",img:"/img/oleos/p3.jpeg",info:"",color:"#e29595",valor:40,tempo:1,null:"","":""},{id:"eucaliptoglobulos",categoria:"oleos",nome:"Eucalipto Globulos",img:"/img/oleos/p4.jpeg",info:"",color:"#e29595",valor:40,tempo:1,null:"","":""},{id:"alecrim",categoria:"oleos",nome:"Alecrim",img:"/img/oleos/p5.jpeg",info:"",color:"#e29595",valor:"40,00",tempo:1,null:"","":""},{id:"propolisverde",categoria:"oleos",nome:"Propolis Verde",img:"/img/oleos/p6.jpeg",info:"",color:"#e29595",valor:40,tempo:1,null:"","":""},{id:"ylangylang",categoria:"oleos",nome:"Ylang Ylang Verde",img:"/img/oleos/p7.jpeg",info:"",color:"#e29595",valor:40,tempo:1,null:"","":""}];Object.keys(q).forEach(a=>{window[a]=q[a]});const oe={colaboradores:Z,massagens:ee};async function ae(){Router({Pages:D,Components:Y,Data:oe})}ae();
