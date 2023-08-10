async function produto(props) { 
    let stateDadosProdutosRender 
    
    if(location.hash.split("#").pop() === "carrinho"){
        stateDadosProdutosRender = JSON.parse(localStorage.getItem("@escolhaUser")) || []          
    }else{
        const dadosSelecionado = props.Data.dadosP.filter(d => d.categoria === location.hash.split("#").pop());
        stateDadosProdutosRender  = props.Data.dadosP.filter(d => d.categoria === "oleos") || dadosSelecionado 

    }


   


    const state = () => {

        // Adiciona um evento de clique para cada elemento com a classe "imgOleos"
        const imagens = document.querySelectorAll('.imgOleos');
        imagens.forEach(imagem => {
        imagem.addEventListener('click', () => {
            toggleFullscreen(imagem);
        });
        });

        // Função para alternar entre tela cheia e modo normal
        function toggleFullscreen(element) {
        if (!document.fullscreenElement) {
            enterFullscreen(element);
        } else {
            exitFullscreen();
        }
        }

        // Função para entrar no modo de tela cheia para um elemento
        function enterFullscreen(element) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) { // para Firefox
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) { // para Chrome, Safari e Edge
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) { // para Internet Explorer e Edge antigos
            element.msRequestFullscreen();
        }
        }

        // Função para sair do modo de tela cheia
        function exitFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { // para Firefox
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { // para Chrome, Safari e Edge
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { // para Internet Explorer e Edge antigos
            document.msExitFullscreen();
        }
        }

        // Evento que é acionado quando o modo de tela cheia é ativado ou desativado
        document.addEventListener('fullscreenchange', () => {
        // Se não estiver em modo de tela cheia, redefine o estilo da imagem para o tamanho original
        if (!document.fullscreenElement) {
            imagens.forEach(imagem => {
            imagem.style.width = '140px';
            });
        }
        });












        const existingObj = JSON.parse(localStorage.getItem("@escolhaUser")) || []  

       document.querySelectorAll(".shop-container-card").forEach((card) => {
    

          
        const objetoExistente =  existingObj.find(e => e.id === card.id)

 
            let cont = 0;
            if (objetoExistente && objetoExistente.quantidade) {
            cont = objetoExistente.quantidade;
            }


            const plusButton = card.querySelector("#mais");
            const minusButton = card.querySelector("#menos");
            const counterElement = card.querySelector("#counter");
            counterElement.textContent = cont
        

            plusButton.addEventListener('click', (e) => {
                cont++;
                counterElement.textContent = cont;
              const pegarOBJ = stateDadosProdutosRender.find(d => d.id === e.target.parentNode.parentNode.id);
          
          
              const objetoExistente =  existingObj.find(e => e.id === pegarOBJ.id)
              if (objetoExistente) {        
                objetoExistente.valor = parseFloat(objetoExistente.valor) + parseFloat(pegarOBJ.valor)
                objetoExistente.quantidade = (objetoExistente.quantidade || 0) + 1; // Adiciona 1 à quantidade existente
            } else {
                pegarOBJ.quantidade = 1; // Define a quantidade como 1 para o novo objeto
                existingObj.push(pegarOBJ)
            }            
                          
            localStorage.setItem("@escolhaUser", JSON.stringify(existingObj));           
       
                  
            pegarIntensDoBancoLocalParaAtualizarCompEEnviaWhatsapp()

            })

            minusButton.addEventListener('click', (e) => {
                if (cont > 0) {
                    cont--;
                    counterElement.textContent = cont;
                }
        
 
                    const pegarOBJ = stateDadosProdutosRender.find(d => d.id === e.target.parentNode.parentNode.id);
                   
                    
                    const objetoExistente = existingObj.find(e => e.id === pegarOBJ.id);
                    if (objetoExistente) {
                        objetoExistente.valor = parseFloat(objetoExistente.valor) - parseFloat(pegarOBJ.valor);
                        objetoExistente.quantidade = (objetoExistente.quantidade || 0) - 1; // Subtrai 1 da quantidade existente
                        if (objetoExistente.quantidade <= 0) {
                            // Se a quantidade for menor ou igual a 0, remove o objeto do array
                            const index = existingObj.indexOf(objetoExistente);
                            existingObj.splice(index, 1);
                        }
                    }
                    
                    localStorage.setItem("@escolhaUser", JSON.stringify(existingObj));
                    
            pegarIntensDoBancoLocalParaAtualizarCompEEnviaWhatsapp()
            });
      



        })
        

        function pegarIntensDoBancoLocalParaAtualizarCompEEnviaWhatsapp(){          
            let listaWhatsapp = "";
            let valorTotal = 0;
            let quantidadeTotalParaComButtomLateral = 0
          
            
            existingObj.forEach((item) => {     
              const nome = item.nome;
              const valor = item.valor;
              const quantidade = item.quantidade;  
          
              quantidadeTotalParaComButtomLateral += parseFloat(quantidade)              
              valorTotal += parseFloat(valor)               
              listaWhatsapp += `Nome: ${nome}\nQuantidade: ${quantidade}\nValor: R$ ${valor}\n\n`;
            });   
              listaWhatsapp += `Valor Total: R$ ${valorTotal.toFixed(2)}\n`;  
                     
              const QT = document.querySelector("#QTVT").innerHTML = `QT: ${quantidadeTotalParaComButtomLateral} VT: ${valorTotal}`
    
      
            
            const listaCodificada = encodeURIComponent(listaWhatsapp);
           // const linkWhatsapp = `https://wa.me/?text=${listaCodificada}`;
    
          const phoneNumber = '3171253590';
          const linkWhatsapp = `https://wa.me/${phoneNumber}?text=${listaCodificada}`;  
            
      return linkWhatsapp
    
        }     
        pegarIntensDoBancoLocalParaAtualizarCompEEnviaWhatsapp()
    
        document.querySelector("#valor").addEventListener('click', e=>{
                const valor = e.target.getAttribute("key");
                if(valor === "pegarValorEPassarParaWhatsapp"){                            
                  window.open(pegarIntensDoBancoLocalParaAtualizarCompEEnviaWhatsapp(), '_blank');
    
                }
            })

    

      
    }


    const html = () => {
        return `       
        <comp-menu></comp-menu>
        <div class="container-shop">
            <div class="container-shop-cards">
                ${stateDadosProdutosRender.map((produto, key) => `
                    <div class="shop-container-card" id="${produto.id}">           
                        <img  class="imgOleos" src="${produto.img}" width="140" alt="Carrinho e produtos">                
                        <h4>${produto.nome}</h4>
                        <div>
                            <button id="mais" class="perfumaria-container-card-button">+</button>
                            <span id="counter">0</span>
                            <button id="menos" class="perfumaria-container-card-button">-</button>
                        </div>            
                    </div>
                `).join('')}
            </div>

            <button id="valor" key="pegarValorEPassarParaWhatsapp">
                <div key="pegarValorEPassarParaWhatsapp">
                <span id="QTVT" key="pegarValorEPassarParaWhatsapp"></span>              
                </div>
            </button>
      
        </div>
        
    `;
    }



    return {
        state,
        html
    }
}