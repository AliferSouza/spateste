export default async function home(props) {

    const compVideo = ()=> {
        return`
         <iframe id="videoPalyPause" allow="autoplay" width="300" height="600" src="https://www.youtube.com/embed/6eEhPOCN7iA" title="Florecer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


        `
    }
    const compTresPotinhos = () => {
        return`     
       <div id="floating-button" id="tres-pontos">
          <div class="loader-tres-pontinhos" id="tres-pontos"> 
            <div id="tres-pontos">                
              <span></span>
              <span></span>
              <span></span>    
            </div>            
          </div>
        </div>
       

        `
    }

    console.log(prix)


    const state = () => {
        const botao = prix.$("#tres-pontos");
        const videoElement = prix.$("#video");
        let textoOriginal = botao.innerHTML;

        botao.addEventListener('click', e => {
            if (e.target.innerHTML === "X") {
                videoElement.innerHTML = ""
                botao.innerHTML = textoOriginal
                scroll()
            }
            if (e.target.parentElement.id === "tres-pontos") {
                videoElement.innerHTML = compVideo();
                botao.innerHTML = "X";
                scroll()

            }


        });



        function scroll() {        
            var floatingButton = prix.$("#floating-button");
            window.addEventListener("scroll", function () {
                if (window.scrollY > 0 && botao.innerHTML !== "X") {
                    floatingButton.style.display = "block";
                }

                setTimeout(function () {
                    if (botao.innerHTML !== "Fechar") {
                        floatingButton.style.display = "X";
                    }
                }, 4000);
            });



        }
        scroll()

  

    }

    const html = () => {
        return `       
       <comp-menu></comp-menu>
       <comp-slider></comp-slider>
       <comp-colaboradores></comp-colaboradores>
       <h1>PROMOÇÃO</h1>
       <comp-produtos data-id="promocao"></comp-produtos>
       <h1>MASSAGENS</h1>
       <comp-produtos data-id="massagens"></comp-produtos>
        <h1>PACOTES</h1>
       <comp-produtos data-id="estetica"></comp-produtos>
       <comp-perfoleos data-a="/#/shop/perfumaria/#oleos"  data-id="oleos">ÓLEOS ESSENCIAIS</comp-perfoleos>
       <comp-newsletter></comp-newsletter>
       <comp-whatsapp data-class="whatsapp"></comp-whatsapp>

   
       <div id="receberIa"></div>    

  
        ${compTresPotinhos()}
        <div id="video"></div>
    
      
     
 
      
      
        `
    }


    return {     
        state,
        html
    }
}