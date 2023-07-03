async function home(props) {


    const state = () => {

        const button = prix.$("#tres-pontos");
        const videoComp = prix.$("#comp-video");
        const compOriginal = button.innerHTML;     
        
        button.addEventListener('click', () => {
          videoComp.style.display = videoComp.style.display === "none" ? "block" : "none";
       
        });
        
        
   

 
       


        function scroll() {
            var floatingButton = prix.$("#tres-pontos");
            var timeoutId;
          
            window.addEventListener("scroll", function () {
              clearTimeout(timeoutId); // Limpa o temporizador ao ocorrer um evento de rolagem
          
              floatingButton.style.display = "block"; // Exibe o botão
              floatingButton.style.position = "fixed"; // Define a posição como fixa
              floatingButton.style.bottom = "20px"; // Define a distância do fundo da janela
              floatingButton.style.right = "20px"; // Define a distância da direita da janela
          
              timeoutId = setTimeout(function () {
                // Define um novo temporizador após 10 segundos de inatividade
                floatingButton.style.display = "none"; // Oculta o botão após 10 segundos de inatividade
              }, 10000);
            });
          }
          
          scroll();
          

  

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

         <comp-flutuante data-id="comp-flutuante">      
         </comp-flutuante>
         <comp-video data-id="comp-video" data-style="display: none"></comp-video>

         <comp-img-fetch data-url-src="http://192.168.1.5:5500/privado/public/img/colaboradores/alifer.jpg" ></comp-img-fetch>
         <comp-img-fetch data-url-src="http://192.168.1.5:5500/privado/public/img/colaboradores/alifer.jpg" ></comp-img-fetch>
    
    
      
     
 
      
      
        `
    }


    return {     
        state,
        html
    }
}