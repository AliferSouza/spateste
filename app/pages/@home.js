async function home(props) {
  document.title = "HOME";
  const stateDadosProdutosRender = JSON.parse(localStorage.getItem("@escolhaUser")) || []          

  const state = () => {
 
   
    const button = document.querySelector("comp-button-lateral");

    if (stateDadosProdutosRender.length === 0) {     
      var activeMenu = document.querySelector('.activeMenu');
      if (activeMenu) {
        activeMenu.style.display = "none";
      }
    }



    let videoVisible = false;
    
   button.addEventListener("click", (e) => {
    const videoComp = document.querySelector("#comp-video"); 
      if (videoVisible) {
        videoComp.innerHTML = "";
        videoVisible = false;
      } else {
        const iframe = `                    
                        <video  autoplay
                                id="videoPalyPause" 
                                width="90%"  
                                height="210">
                          <source src="/video/spa.mp4" type="video/mp4"  >    
                       </video>`;
        videoComp.innerHTML = iframe;
        videoVisible = true;
      }
    });    
    
   
    function scroll() {   
      const floatingButton = $("comp-button-lateral");   
      let timeoutId;
      window.addEventListener("scroll", function () {
        clearTimeout(timeoutId);
        floatingButton.show();
        timeoutId = setTimeout(function () {
          floatingButton.hide();
        }, 4000);
      });
    }

    scroll();
    
  };

  const html = () => {
    return `       
       <comp-button-lateral id="comp-flutuante"> </comp-button-lateral>
      <comp-whatsapp class="whatsapp"></comp-whatsapp>
       <comp-menu></comp-menu>
       <comp-slider></comp-slider>
       <comp-colaboradores id="oliveira"></comp-colaboradores>    
        <!-- <h1>PROMOÇÃO</h1>
     <comp-produtos id="promocao"> </comp-produtos> -->
       <h1>MASSAGENS</h1>
       <comp-produtos  width="200" height="200"  id="massagens"></comp-produtos>
        <h1>PACOTES</h1>
       <comp-produtos width="260" height="260" id="estetica"></comp-produtos>
       <comp-perfoleos a="/#/shop/perfumaria/#oleos"  id="oleos">ÓLEOS ESSENCIAIS</comp-perfoleos>
       <comp-newsletter id="news"></comp-newsletter>
        <div id="comp-video"></div>

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
        <span>${stateDadosProdutosRender.length}</span>
      </div>

    
      
     
 
      
      
        `;
  };

  return {
    html,
    state
    
  };
}
