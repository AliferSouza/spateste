 async function produto(props) {
    document.title = "PRODUTO"
    window.scroll(0,0)
    const nome = location.hash.split('/').pop().replace("#", "")  
    console.log(nome)
    const dadosSelecionado = props.Data.dadosP.find(d => d.id === nome)



    const state = () => {   
    
        const spanCouter = document.querySelector("#SpanCouter")
        const valorDoProduto = document.querySelector("#vDoP")
        const whats = document.querySelector("#whats2")
        const valorDoProdutoR = parseFloat(valorDoProduto.innerHTML)
        let counter = 0
        let valorTotal

      

        $(".infoCotainerButtons").on('click', e => {
            if (e.target.className === "infoCotainerButtonsmais") {
                 counter++;
                spanCouter.innerHTML = counter;
                valorTotal = counter * valorDoProdutoR
                whats.innerHTML=  valorTotal
             
            }
          
            if (e.target.className === "infoCotainerButtonsmenos") {
              if (counter > 0) {
                counter--;
                spanCouter.innerHTML = counter;
                valorTotal =  counter * valorDoProdutoR
                whats.innerHTML = valorTotal
              }
            }
                        
            if (e.target.id === "whats") {
                const a = `https://api.whatsapp.com/send?phone=553171685900&text= Nome:${dadosSelecionado.categoria} Quantidade:${counter}, Valor:${valorTotal} `
                window.open(a, '_blank');			
            }

          });
          

    }



    const html = () => {
		return `
        <comp-menu></comp-menu>
		<div class="cards">   
            <article class="information">               
                 <img class="p-img" src="${dadosSelecionado.img}" alt="Produto ${dadosSelecionado.nome}">
                
                 <div  class="informationDes">
                    <div>
                    <h3 class="info">${dadosSelecionado.nome}</h3>
                    <h4 class="info" id="valorDoProduto">R$:<span id="vDoP" >${dadosSelecionado.valor}<span> </h4>
                    <p class="info">${dadosSelecionado.info}</p>
                    </div>
                 </div>
                
             

            </article> 	

            <article class="information2" >                  
                <h3 class="title">${dadosSelecionado.nome}</h3>

                ${dadosSelecionado.categoria === "massagens" ? ` <div class="information21">
                    A massagem individual sai pelo valor de ${dadosSelecionado.valor} reais
                 </div>       ` : ''}
                
           
                 <div class="information22">O pacote com 4 sessões sai com 15% de desconto.</div>   
                 
            <div class="infoCotainerButtons">
                <div class="infoCotainerButtonsC">
                <div>
                    <button class="infoCotainerButtonsmais">+</button>
                    <span id="SpanCouter" >0</span>
                    <button class="infoCotainerButtonsmenos">-</button>
                 </div>
                    <div>
                        <button class="button">
                        <span id="whats">Agende horário <span id="whats2"><span></span>		
                        </button>
                    </div>
            </div>
            <div>       
            </article> 	  
            

            
        </div>
    

	   `

	}


    return {
        state,
        html
    }
}