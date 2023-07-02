export default function btnVideo() {
  const state = () => {
    const selcionarBLateral = prix.$("#tres-pontos");
    const selcionarCVideo = prix.$("#videoPalyPause");
    const valorOrigina = selcionarBLateral.innerHTML;
    let videoVisivel = true;

    console.log(videoVisivel)
    
    selcionarBLateral.addEventListener("click", (e) => {
      if (e.target.innerText === "X") {
        selcionarBLateral.innerHTML = valorOrigina;
        if (videoVisivel) {
          selcionarCVideo.style.display = "none";
          videoVisivel = false;
        } else {
          selcionarCVideo.style.display = "block";
          videoVisivel = true;
        }
      }
      if (e.target.id === "tres-pontos") {
        selcionarBLateral.innerText = "X";
        selcionarCVideo.style.display = "block";
        videoVisivel = true;
      }
    });

  }
    

  const html = () => {
    return `   

 
              <div id="tres-pontos" class="fechar">                
                <span></span>
                <span></span>
                <span></span>    
              </div>            
        
 

  `;
  };
  return { html, state };
}
