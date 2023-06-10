import video from "../components/video.js"

export default async function Home() {

  const state = () => {
    const botao = $("#tres-pontos");
    const videoElement = $("#video");  
    let textoOriginal = botao.innerHTML;
    
    botao.addEventListener('click', e => {
      if(e.target.innerHTML==="Fechar"){
          videoElement.innerHTML = ""
          botao.innerHTML = textoOriginal 
          scroll()
        }
      if (e.target.parentElement.id === "tres-pontos"){     
            videoElement.innerHTML = video();
            botao.innerHTML = "Fechar";    
            scroll()    
          
          }
        
      
    });
    

    
    function scroll() {

      const botao = $(".loader-tres-pontinhos");
      var floatingButton = $("#floating-button");
      
      window.addEventListener("scroll", function () {
        if (window.scrollY > 0 && botao.innerHTML !== "Fechar") {
          floatingButton.style.display = "block";
        }
      
        setTimeout(function () {
          if (botao.innerHTML !== "Fechar") {
            floatingButton.style.display = "none";
          }
        }, 4000);
      });
      
      
    
    }
    scroll()




  }

  const html = () => `
        <comp-menu></comp-menu>
        <div id="render"></div>
        <comp-slider data-class="container-slider" data-id="1"></comp-slider>

        <comp-colaboradores></comp-colaboradores>

        <h3>Promoções e pacotes</h3>
        <comp-cardpodutos data-id="promoção"></comp-cardpodutos>

        <h3>Terapias e massagens</h3>
        <comp-cardpodutos data-id="cardDate"></comp-cardpodutos>

        <h3>Estética</h3>
        <comp-cardpodutos data-id="cardDate"></comp-cardpodutos>

        <comp-newsletter data-class="newsletter"></comp-newsletter>
        <comp-whatsapp></comp-whatsapp>
        <comp-mascote data-id="comp-mascote"></comp-mascote>

        <div id="floating-button" >
          <div class="loader-tres-pontinhos" id="tres-pontos"> 
            <h6>Video</h6>  
            <div>                
              <span></span>
              <span></span>
              <span></span>    
            </div>            
          </div>
        </div>

        <div id="video"></div>`;



  return {
    html,
    state,
  }


}

