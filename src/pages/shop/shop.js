export default async function shop(props) {  

    const dadosSelecionado = props.Data.dadosP.filter(d => d.categoria === "oleos");



    const state = () => {
       document.querySelectorAll(".perfumaria-container-card").forEach((card) => {
        const existingObj = JSON.parse(localStorage.getItem("@escolhaUser")) || []          
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
              const existingObj = JSON.parse(localStorage.getItem("@escolhaUser")) || [];
          
              const objetoExistente =  existingObj.find(e => e.id === pegarOBJ.id)
              if (objetoExistente) {        
                objetoExistente.valor = parseFloat(objetoExistente.valor) + parseFloat(pegarOBJ.valor)
                objetoExistente.quantidade = (objetoExistente.quantidade || 0) + 1; // Adiciona 1 à quantidade existente
            } else {
                pegarOBJ.quantidade = 1; // Define a quantidade como 1 para o novo objeto
                existingObj.push(pegarOBJ)
            }            
                          
            localStorage.setItem("@escolhaUser", JSON.stringify(existingObj));           
       
                  

            })

            minusButton.addEventListener('click', (e) => {
                if (cont > 0) {
                    cont--;
                    counterElement.textContent = cont;
                }
        
 
                    const pegarOBJ = dadosSelecionado.find(d => d.id === e.target.parentNode.parentNode.id);
                    const existingObj = JSON.parse(localStorage.getItem("@escolhaUser")) || [];
                    
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
            });

  

        })

       
    }


    const html = () => {
        return `       
        <comp-menu></comp-menu>
        <div class="perfumaria-container">       
        <comp-perfoleos data-a="/#/shop/perfumaria/#oleos" data-use-width="80px"  data-use-height="80px"  data-id="oleos">Oleos</comp-perfoleos>
        
      
        </div>
        
    `;
    }



    return {    
        state,
        html
    }
}