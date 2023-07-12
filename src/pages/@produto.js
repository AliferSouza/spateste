export default async function produto(props) {
    document.title = "PRODUTO"
    window.scroll(0,0)
    const nome = useSearch("hash").split('/').pop().replace("#", "")  

   
    const dadosSelecionado = props.Data.dadosP.find(d => d.id === nome)


    const state = () => {
       const a = `https://api.whatsapp.com/send?phone=553171685900&text= 🠖 Queria saber sobre a ${nome} `

		$(".button").on('click', e => {
			if (e.target.id === "whats") {
				window.open(a, '_blank');
			}
		})
    }


    const html = () => {
		return `
        <comp-menu></comp-menu>
		<div class="cards">   
            <article class="information">
                <h2 class="title">${dadosSelecionado.nome}</h2>
                 <img class="p-img" src="${dadosSelecionado.img}" width= 280>
                 <p class="info">${dadosSelecionado.info}</p>
                    <button class="button">
                    <span id="whats">Agende ➞</span>		
                </button>
            </article> 	    	 
            <article class="information2" ${ dadosSelecionado.categoria === "estetica" || dadosSelecionado.categoria === "promocao" ? 'style="display: none;"' : ''}>                  
                <h3 class="title">${dadosSelecionado.nome}</h3>
                 <div class="information21">A massagem individual sai pelo valor de ${dadosSelecionado.valor} reais </div>       
                 <div class="information22">O pacote com 4 sessões sai com 15% de desconto.</div>          
            </article> 	  
            
            
        </div>
    

	   `

	}


    return {
        state,
        html
    }
}