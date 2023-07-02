export default async function produto(props) { 
    const dadosSelecionado = props.Data.dadosP.filter(d => d.categoria === prix.useSearch("hash").split("#").pop());
    const dados = props.Data.dadosP.filter(d => d.categoria === "oleos") || dadosSelecionado 

    const state = () => {
        const existingObj = JSON.parse(localStorage.getItem("@escolhaUser")) || []  

       document.querySelectorAll(".perfumaria-container-card").forEach((card) => {
    

          
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
              const pegarOBJ = dadosSelecionado.find(d => d.id === e.target.parentNode.parentNode.id);
          
          
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
        
 
                    const pegarOBJ = dadosSelecionado.find(d => d.id === e.target.parentNode.parentNode.id);
                   
                    
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
        <div class="perfumaria-container">
            <div class="perfumaria-container-cards">
                ${dados.map((produto, key) => `
                    <div class="perfumaria-container-card" id="${produto.id}">           
                        <img src="${produto.img}" width="150">
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