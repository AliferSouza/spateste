async function home(props) {
  const compVideo = () => {
    return `
         <iframe id="videoPalyPause" allow="autoplay" width="300" height="600" src="https://www.youtube.com/embed/6eEhPOCN7iA" title="Florecer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


        `;
  };
  const compTresPotinhos = () => {
    return `     
       <div id="floating-button" id="tres-pontos">
          <div class="loader-tres-pontinhos" id="tres-pontos"> 
            <div id="tres-pontos">                
              <span></span>
              <span></span>
              <span></span>    
            </div>            
          </div>
        </div>
       

        `;
  };

  const state = () => {
    const button = document.querySelector("#tres-pontos");
    const videoComp = document.querySelector("#comp-video");
    const compOriginal = button.innerHTML;

    button.addEventListener("click", () => {
       videoComp.style.display =
        videoComp.style.display === "none" ? "block" : "none";
    });


    function scroll() {
      var floatingButton =  document.querySelector("#tres-pontos");
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
  };

  const html = () => {
    return `       
       <comp-menu></comp-menu>  
            <comp-colaboradores></comp-colaboradores>
      
      
        `;
  };

  return {
    html,
  };
}
