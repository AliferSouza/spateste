export default async function home(props) {
  document.title = "HOME"


  const state = () => {


    const button = $("#tres-pontos");

    const videoComp = $("#comp-video").tag()    
    button.on("click", () => { 
     videoComp.style.display = videoComp.style.display === "none" ? "block" : "none";
    });

    const buttonIA = $(".SairIa")
    const videoCompIA = $("#comp-mascote-ia").tag()  

    buttonIA.on("click", () => {       
      videoCompIA.style.display = videoCompIA.style.display === "none" ? "block" : "none";      
    });
    
    

    function scroll() {
      const floatingButton = $("#tres-pontos");    
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
       <comp-video id="comp-video" style="display: none"></comp-video>

    
      
     
 
      
      
        `;
  };

  return {    
    html,
    state
  };
}
